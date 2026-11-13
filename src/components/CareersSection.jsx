import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Check,
  Copy,
  ChevronDown,
  ExternalLink,
  CheckCircle2,
  Laptop,
} from 'lucide-react';
import {
  COMPANY,
  ROLE_RESPONSIBILITIES,
  ROLE_REQUIREMENTS,
  APPLICATION_STEPS,
  FAQS,
} from '../data/siteData';

export default function CareersSection() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY.arisePartnerId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <section
      id="careers"
      className="py-20 lg:py-24 bg-[var(--surface)] border-y border-[var(--line)]"
    >
      <div className="max-w-6xl mx-auto px-5 space-y-16">
        {/* Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl bg-gradient-to-r from-[#0F2547] via-[#14315E] to-[#1A3F78] text-white p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Remote Workforce Opportunities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">
              Career Opportunities
            </h2>
            <p className="text-slate-200 mt-3 leading-relaxed">
              Viora Dynamics is growing its remote customer service team in
              partnership with the Arise platform. Email us your resume and we
              will contact you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleCopyId}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-3 text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Partner ID: {COMPANY.arisePartnerId}</span>
              {copied ? (
                <Check className="w-4 h-4 text-[#D4AF37]" />
              ) : (
                <Copy className="w-4 h-4 text-[#D4AF37]" />
              )}
            </button>

            <a
              href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(
                'Resume - Career Opportunities'
              )}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#0F2547] px-6 py-3 text-sm font-bold hover:brightness-105 transition-all shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Email Your Resume
            </a>
          </div>
        </motion.div>

        {/* What you'll do & Who we're looking for */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-[var(--bg)] border border-[var(--line)] p-7"
          >
            <h3 className="font-display text-2xl font-bold text-[var(--ink)] mb-5">
              What You’ll Do
            </h3>
            <ul className="space-y-3.5">
              {ROLE_RESPONSIBILITIES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[var(--muted)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-[var(--bg)] border border-[var(--line)] p-7"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-2xl font-bold text-[var(--ink)]">
                Who We’re Looking For
              </h3>
              <Laptop className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <ul className="space-y-3.5">
              {ROLE_REQUIREMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#14315E] dark:text-[#e5c158] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[var(--muted)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* How to Apply Timeline */}
        <div id="how">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Onboarding Steps
            </span>
            <h3 className="font-display text-3xl font-extrabold text-[var(--ink)] mt-1">
              How to Apply
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {APPLICATION_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="rounded-2xl bg-[var(--bg)] border border-[var(--line)] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#0F2547] font-display font-extrabold text-lg flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-display text-lg font-bold text-[var(--ink)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.hasLink && (
                  <a
                    href={COMPANY.ariseRegisterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#14315E] dark:text-[#e5c158] hover:underline"
                  >
                    Arise Registration
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {item.hasCopyId && (
                  <button
                    type="button"
                    onClick={handleCopyId}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#14315E] dark:text-[#e5c158] hover:underline cursor-pointer"
                  >
                    {copied ? 'Copied ID!' : `Copy ID: ${COMPANY.arisePartnerId}`}
                    {copied ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Candidate FAQ */}
        <div id="faq" className="max-w-3xl">
          <h3 className="font-display text-3xl font-extrabold text-[var(--ink)] mb-6">
            Candidate FAQ
          </h3>
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left font-semibold text-base sm:text-lg text-[var(--ink)] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
