import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Calculator,
  Headphones,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { COMPANY } from '../data/siteData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const CAPABILITIES = [
  {
    icon: Calculator,
    title: 'Accounting & Payroll',
    subtitle: 'QuickBooks bookkeeping, AP/AR & reconciliations',
    badge: 'QuickBooks',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    subtitle: 'Dedicated remote CSR teams via Arise Platform',
    badge: 'IBO #4004593',
  },
  {
    icon: Globe2,
    title: 'Global Business Admin',
    subtitle: 'Documentation, reporting & daily operations',
    badge: 'Multi-Timezone',
  },
];

const TRUST_PARTNERS = ['QuickBooks (Intuit)', 'Arise Platform', 'Reliance Home Comfort'];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Layered radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(20,49,94,0.12),transparent_55%)]" />

      {/* Animated ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 right-10 w-[26rem] h-[26rem] rounded-full bg-[#D4AF37]/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.16, 0.28, 0.16] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="pointer-events-none absolute -bottom-28 -left-20 w-[28rem] h-[28rem] rounded-full bg-[#14315E]/20 dark:bg-[#4FC3CC]/15 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[var(--surface)]/90 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Canada-Based • Global Reach</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.05] text-[var(--ink)] mb-6"
            >
              Your global partner in{' '}
              <span className="bg-gradient-to-r from-[#14315E] via-[#275496] to-[#D4AF37] dark:from-[#f6d978] dark:via-[#D4AF37] dark:to-[#ffffff] bg-clip-text text-transparent">
                business solutions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl mb-5"
            >
              Empowering businesses and individuals worldwide through reliable,
              flexible, and professional services—from QuickBooks accounting and
              payroll to scalable remote customer support.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-wide text-[var(--ink)] mb-8 flex items-center gap-2.5"
            >
              <span className="w-7 h-[2px] bg-[#D4AF37]" />
              {COMPANY.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3.5 mb-10">
              <motion.a
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#0F2547] px-7 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-[#D4AF37]/25 hover:brightness-105 transition-all"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#careers"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F2547]/20 dark:border-[#D4AF37]/50 bg-[var(--surface)]/80 backdrop-blur-sm text-[var(--ink)] px-7 py-3.5 text-sm sm:text-base font-semibold hover:border-[#D4AF37] transition-all"
              >
                Join Remote Team
              </motion.a>
            </motion.div>

            {/* Partner Trust Strip */}
            <motion.div
              variants={fadeUp}
              className="pt-6 border-t border-[var(--line)]"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)] mb-3">
                Trusted Platforms &amp; Partnerships
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {TRUST_PARTNERS.map((partner) => (
                  <span
                    key={partner}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--ink)]/85"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {partner}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Interactive Layered Visual */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative lg:pl-6"
          >
            {/* Floating Top-Right Pill */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -top-5 right-2 z-20 items-center gap-2 rounded-2xl bg-[var(--surface)] border border-[var(--line)] px-4 py-2.5 shadow-xl"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <div className="text-left">
                <p className="text-[11px] font-bold text-[var(--ink)] leading-tight">
                  Active IBO Partner
                </p>
                <p className="text-[10px] text-[var(--muted)]">
                  Verified ID #{COMPANY.arisePartnerId}
                </p>
              </div>
            </motion.div>

            {/* Main Dark Executive Card */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-3xl bg-gradient-to-br from-[#0F2547] via-[#122D58] to-[#0A1931] text-white p-6 sm:p-8 shadow-2xl border border-white/15 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#D4AF37]/20 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#4FC3CC]/10 blur-2xl" />

              {/* Card Header */}
              <div className="relative flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold">
                    Global Delivery Hub
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold mt-1">
                    {COMPANY.name}
                  </h2>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              {/* Capability Rows */}
              <div className="relative space-y-3.5">
                {CAPABILITIES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.12, duration: 0.45 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] p-3.5 border border-white/10 transition-colors"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="mt-0.5 p-2.5 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-white">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-block shrink-0 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/25 px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Stat Strip inside card */}
              <div className="relative mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/[0.05] py-2.5 px-2">
                  <p className="font-display text-lg font-extrabold text-[#D4AF37]">
                    5+
                  </p>
                  <p className="text-[10px] text-slate-300 uppercase tracking-wider">
                    Core Services
                  </p>
                </div>
                <div className="rounded-xl bg-white/[0.05] py-2.5 px-2">
                  <p className="font-display text-lg font-extrabold text-white">
                    Global
                  </p>
                  <p className="text-[10px] text-slate-300 uppercase tracking-wider">
                    Time Zones
                  </p>
                </div>
                <div className="rounded-xl bg-white/[0.05] py-2.5 px-2">
                  <p className="font-display text-lg font-extrabold text-emerald-400">
                    Remote
                  </p>
                  <p className="text-[10px] text-slate-300 uppercase tracking-wider">
                    Opportunities
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Bottom-Left Card */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="hidden sm:flex absolute -bottom-5 left-0 z-20 items-center gap-3 rounded-2xl bg-[var(--surface)] border border-[var(--line)] px-4 py-3 shadow-xl"
            >
              <div className="p-2 rounded-xl bg-[#0F2547] text-[#D4AF37]">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--ink)]">
                  Canada HQ → Worldwide
                </p>
                <p className="text-[11px] text-[var(--muted)]">
                  Flexible business &amp; workforce support
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
