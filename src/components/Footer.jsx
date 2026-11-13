import { ArrowUp, Mail, Globe2, ExternalLink } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../data/siteData';

export default function Footer({ onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091830] text-slate-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              className="font-display text-xl font-extrabold tracking-tight inline-flex items-center gap-2.5 text-white"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4AF37] text-[#091830] font-extrabold text-sm">
                VD
              </span>
              <span>
                {COMPANY.name}
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY.tagline} Delivering accounting, administrative, and
              remote customer support solutions worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-3 py-1.5 rounded-full">
                <Globe2 className="w-3.5 h-3.5" />
                Canada-Based • Global Clients
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Connect &amp; Legal
            </h3>

            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-[#D4AF37] transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                {COMPANY.email}
              </a>

              <div>
                <a
                  href={COMPANY.ariseRegisterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#D4AF37] transition-colors"
                >
                  Arise Portal (ID: {COMPANY.arisePartnerId})
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
              <button
                type="button"
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <a href="#faq" className="hover:text-white transition-colors">
                Candidate FAQ
              </a>
              <button
                type="button"
                onClick={() => onOpenLegal('disclaimer')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {COMPANY.year} {COMPANY.name} All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
