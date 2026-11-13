import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  CheckCircle2,
  Upload,
  FileText,
  X,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { COMPANY } from '../data/siteData';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [why, setWhy] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef(null);

  const validateAndSetFile = (file) => {
    setErrorMsg('');
    if (!file) return;

    const lower = file.name.toLowerCase();
    if (!['.pdf', '.doc', '.docx'].some((ext) => lower.endsWith(ext))) {
      setErrorMsg('Please upload a PDF, DOC, or DOCX file.');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setErrorMsg('Resume file must be 5 MB or smaller.');
      return;
    }

    setResumeFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    validateAndSetFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!resumeFile) {
      setErrorMsg('Please attach your resume (PDF or Word) before sending.');
      return;
    }

    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('why', why);
      formData.append('resume', resumeFile);

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.error ||
            (res.status === 404
              ? 'API endpoint (/api/apply) is only active when deployed to Cloudflare Pages or running via `wrangler pages dev`.'
              : 'Unable to send application. Please try again.')
        );
      }

      setStatus('success');
      setName('');
      setEmail('');
      setWhy('');
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="apply" className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 text-[var(--ink)]">
                Contact us
              </h2>
            </div>

            <p className="text-[var(--muted)] leading-relaxed">
              For business inquiries, email{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-semibold text-[var(--ink)] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#D4AF37] transition-colors"
              >
                {COMPANY.email}
              </a>
              . To apply for the Reliance Home Comfort customer service role,
              fill out this form and upload your resume (PDF or Word). We’ll
              reply to confirm we received your application.
            </p>

            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--line)] p-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                Direct Email
              </p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2.5 text-base font-bold text-[var(--ink)] hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                {COMPANY.email}
              </a>
            </div>
          </motion.div>

          {/* Right form with Resume Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-6 sm:p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm font-semibold text-[var(--ink)]">
                  Full name
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--ink)] focus:outline-none focus:border-[#D4AF37]"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[var(--ink)]">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--ink)] focus:outline-none focus:border-[#D4AF37]"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[var(--ink)]">
                  Why do you want this role?
                </span>
                <textarea
                  name="why"
                  required
                  rows={4}
                  value={why}
                  onChange={(e) => setWhy(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--ink)] focus:outline-none focus:border-[#D4AF37]"
                />
              </label>

              {/* Resume Upload Dropzone */}
              <div>
                <span className="block text-sm font-semibold text-[var(--ink)] mb-1.5">
                  Upload your resume
                </span>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => validateAndSetFile(e.target.files?.[0])}
                  className="hidden"
                />

                {!resumeFile ? (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        fileInputRef.current?.click();
                      }
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`rounded-2xl border-2 border-dashed p-5 text-center cursor-pointer transition-colors ${
                      isDragging
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                        : 'border-[var(--line)] bg-[var(--bg)] hover:border-[#D4AF37]/70'
                    }`}
                  >
                    <Upload className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      Click to upload or drag &amp; drop
                    </p>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      PDF, DOC, or DOCX (max 5 MB)
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="w-5 h-5 text-[#D4AF37] shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[var(--ink)] truncate">
                          {resumeFile.name}
                        </p>
                        <p className="text-xs text-[var(--muted)]">
                          {(resumeFile.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setResumeFile(null);
                        if (fileInputRef.current) fileInputRef.current.value = '';
                      }}
                      aria-label="Remove resume"
                      className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 text-[var(--muted)] cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] text-[#0F2547] px-7 py-3.5 text-sm font-bold shadow-md hover:brightness-105 disabled:opacity-60 transition-all cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send application
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <div className="flex items-start gap-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5 text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Application and resume sent! We’ll reply by email to confirm
                    we received it.
                  </span>
                </div>
              )}

              {(status === 'error' || errorMsg) && errorMsg && (
                <div className="flex items-start gap-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3.5 text-xs sm:text-sm text-rose-700 dark:text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <p className="text-xs text-[var(--muted)]">
                Viora Dynamics Inc. is an equal opportunity employer.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
