export const COMPANY = {
  name: 'Viora Dynamics Inc.',
  shortName: 'Viora Dynamics',
  email: 'vioradynamicsinc@gmail.com',
  tagline: 'Serving businesses worldwide. Building opportunities everywhere.',
  arisePartnerId: '4004593',
  ariseRegisterUrl: 'https://register.arise.com/contractortype/join-business',
  year: 2026,
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#clients' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#apply' },
];

export const SERVICES = [
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    description:
      'Bookkeeping, accounts payable, accounts receivable, reconciliations, and financial record management.',
    tag: 'QuickBooks Certified',
  },
  {
    id: 'payroll',
    title: 'Payroll Support Services',
    description:
      'Payroll administration, payroll records, and related business compliance support.',
    tag: 'Accurate & Timely',
  },
  {
    id: 'customer-support',
    title: 'Customer Support Solutions',
    description:
      'Dedicated customer service support and scalable remote workforce opportunities.',
    tag: 'Omnichannel Care',
  },
  {
    id: 'business-admin',
    title: 'Business & Administrative Support',
    description:
      'Documentation, reporting, data entry, and structured administrative assistance.',
    tag: 'Operations',
  },
  {
    id: 'remote-admin',
    title: 'Remote Administrative Assistance',
    description:
      'Flexible remote administrative assistance and reliable day-to-day business support.',
    tag: 'Global Coverage',
  },
];

export const WHY_CHOOSE_US = [
  'Reliable, flexible, and professional services',
  'Support for clients across countries, industries, and time zones',
  'Help to grow your business and operate efficiently',
  'Professional and responsive assistance',
];

export const PARTNERS = [
  {
    name: 'Reliance Home Comfort',
    role: 'Client Program',
    description: 'Customer service support provided through the Arise platform.',
  },
  {
    name: 'Arise',
    role: 'IBO Partnership',
    description:
      'Independent Business Owner (IBO) providing customer service solutions and managing service agents.',
  },
  {
    name: 'QuickBooks (Intuit)',
    role: 'Accounting Platform',
    description:
      'Bookkeeping and accounting services using QuickBooks accounting software.',
  },
];

export const ROLE_RESPONSIBILITIES = [
  'Take bookings and handle customer requests for Reliance Home Comfort',
  'Answer customer questions and solve their problems',
  'Record each conversation clearly in our help desk',
  'Pass tricky cases to the right teammate',
  'Share what you hear to help improve the service',
];

export const ROLE_REQUIREMENTS = [
  'Clear, friendly writing',
  'Patience when someone is frustrated',
  'Comfort learning new software',
  'A quiet workspace to work from',
  'A Windows 11 laptop',
  'An Ethernet cable for a wired internet connection',
  'Headphones with a microphone',
  'Prior support experience is nice, not required',
];

export const APPLICATION_STEPS = [
  {
    step: 1,
    title: 'Register on the Arise Platform',
    description:
      'Choose “Register as an agent working for a Service Partner” on the Arise registration portal.',
    hasLink: true,
  },
  {
    step: 2,
    title: `Enter our Service Partner ID: ${COMPANY.arisePartnerId}`,
    description: 'Type it in the Service Partner ID box and click Search.',
    hasCopyId: true,
  },
  {
    step: 3,
    title: 'Select Viora Dynamics Inc.',
    description: 'Our name will appear in the search results. Click Next.',
  },
  {
    step: 4,
    title: 'Sign the documents and contact us',
    description:
      'Finish your Arise registration, then email us or submit the form below with the position you want.',
  },
];

export const FAQS = [
  {
    q: 'Is Viora Dynamics the same as Arise?',
    a: 'No. Viora Dynamics is an independent business that partners with Arise as an Independent Business Owner. Arise is a separate company.',
  },
  {
    q: 'What happens after I apply?',
    a: 'We reply by email to confirm we received your application. Then we guide you through registration, assessment, training, and enrollment.',
  },
  {
    q: 'What equipment do I need?',
    a: 'A Windows 11 laptop, an Ethernet cable for a wired internet connection, and headphones with a microphone. You’ll also need a quiet place to work.',
  },
  {
    q: 'Do I need experience?',
    a: 'No. We train everyone on our tools and policies. Care for customers matters most.',
  },
];

export const LEGAL_DOCS = {
  privacy: {
    title: 'Privacy Policy',
    body: 'We collect what you send us when you apply: your name, email address, resume, and the position you want. We use it to reply to you and to guide you through registration, assessment, training, and enrollment. We may share it with Arise when that is needed to register you on the Arise Platform. We do not sell your information. Resumes reach us by email, so send only what you are comfortable sharing. To see or delete your information, email vioradynamicsinc@gmail.com.',
  },
  terms: {
    title: 'Terms & Conditions',
    body: 'Viora Dynamics Inc. provides business and professional services. When we help people explore customer service opportunities on the Arise Platform, applying here does not guarantee a position, registration, or enrollment. Opportunities, pay, and requirements may change. Arise sets its own assessments and certification requirements. The information you send us must be true and complete. We may update these terms at any time.',
  },
  disclaimer: {
    title: 'Disclaimer',
    body: 'Viora Dynamics is an independent business and not Arise itself. Arise, Reliance Home Comfort, QuickBooks, and Intuit are separate companies and trademarks of their owners. We mention them only to describe the platforms and clients we work with, and this does not imply endorsement.',
  },
};
