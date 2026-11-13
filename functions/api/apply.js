const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function onRequestPost(context) {
  try {
    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      return jsonResponse(
        { error: 'Email service is not configured (missing RESEND_API_KEY).' },
        500
      );
    }

    const formData = await context.request.formData();
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const why = String(formData.get('why') || '').trim();
    const resume = formData.get('resume');

    if (!name || !email || !why) {
      return jsonResponse({ error: 'Please fill in all required fields.' }, 400);
    }

    if (!resume || typeof resume === 'string' || resume.size === 0) {
      return jsonResponse({ error: 'Please attach your resume (PDF or Word).' }, 400);
    }

    if (resume.size > MAX_FILE_SIZE) {
      return jsonResponse({ error: 'Resume file must be 5 MB or smaller.' }, 400);
    }

    const lowerName = resume.name.toLowerCase();
    const isAllowed = ALLOWED_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
    if (!isAllowed) {
      return jsonResponse(
        { error: 'Only PDF, DOC, and DOCX files are supported.' },
        400
      );
    }

    const fileBuffer = await resume.arrayBuffer();
    const base64Resume = arrayBufferToBase64(fileBuffer);

    const toEmail = context.env.TO_EMAIL || 'vioradynamicsinc@gmail.com';
    const fromEmail =
      context.env.FROM_EMAIL || 'Viora Dynamics <onboarding@resend.dev>';

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Application: Remote Customer Service Representative - ${name}`,
        text: [
          'Position: Reliance Home Comfort customer service',
          `Name: ${name}`,
          `Email: ${email}`,
          '',
          'Why I want this role:',
          why,
        ].join('\n'),
        attachments: [
          {
            filename: resume.name,
            content: base64Resume,
          },
        ],
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      return jsonResponse(
        { error: `Failed to send email: ${errText}` },
        resendRes.status
      );
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse(
      { error: err?.message || 'Unexpected error processing application.' },
      500
    );
  }
}
