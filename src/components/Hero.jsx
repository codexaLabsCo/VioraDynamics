import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Calculator,
  Headphones,
  Sparkles,
} from 'lucide-react';
import { COMPANY } from '../data/siteData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const HIGHLIGHTS = [
  {
    icon: Calculator,
    title: 'Accounting & Payroll',
    subtitle: 'QuickBooks bookkeeping, reconciliations & payroll records',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    subtitle: 'Dedicated service via Arise IBO Partner #4004593',
  },
  {
    icon: Globe2,
    title: 'Global Operations',
    subtitle: 'Canada-based HQ serving clients across time zones',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Animated ambient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.22, 0.35, 0.22],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#D4AF37]/25 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute -bottom-32 -left-24 w-[30rem] h-[30rem] rounded-full bg-[#14315E]/20 dark:bg-[#4FC3CC]/15 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] shadow-sm mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Canada-Based • Global Reach</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] text-[var(--ink)] mb-6"
            >
              Your global partner in{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#14315E] dark:text-[#e5c158]">
                  business solutions
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-[#D4AF37]/30 origin-left -z-0 rounded-sm"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl mb-4"
            >
              Empowering businesses and individuals worldwide through reliable,
              flexible, and professional services. Viora Dynamics Inc. delivers
              accounting, administrative, and remote workforce solutions across
              the globe.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-wide text-[var(--ink)] mb-8 flex items-center gap-2"
            >
              <span className="w-6 h-[2px] bg-[#D4AF37]" />
              {COMPANY.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] text-[#0F2547] px-7 py-3.5 text-base font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-105 transition-all"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#careers"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F2547] dark:border-[#D4AF37]/60 text-[var(--ink)] px-7 py-3.5 text-base font-semibold hover:bg-[var(--surface-alt)] transition-all"
              >
                Join Remote Team
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right animated executive card */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-[#0F2547] text-white p-6 sm:p-8 shadow-2xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#D4AF37]/15 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />

              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Operations Overview
                  </p>
                  <h2 className="font-display text-xl font-bold mt-1">
                    {COMPANY.name}
                  </h2>
                </div>
                <div className="h-11 w-11 rounded-2xl bg-white/10 flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                {HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + idx * 0.12, duration: 0.45 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] p-3.5 border border-white/5 transition-colors"
                    >
                      <div className="mt-0.5 p-2 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] shrink-0">
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
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Arise Service Partner ID</span>
                <span className="font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/15 px-2.5 py-1 rounded-md">
                  #{COMPANY.arisePartnerId}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
