import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Target } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                Who We Are
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 text-[var(--ink)]">
                About Viora Dynamics Inc.
              </h2>
            </div>

            <p className="text-[var(--muted)] leading-relaxed text-base sm:text-lg">
              Viora Dynamics Inc. is a Canada-based company committed to
              delivering business solutions and professional services to clients
              across the globe. From business support and accounting services to
              remote workforce solutions, we aim to help businesses grow, operate
              efficiently, and achieve their goals.
            </p>

            <p className="text-[var(--muted)] leading-relaxed">
              At Viora Dynamics, we believe in creating opportunities, supporting
              individuals, and building professional relationships through
              flexible remote work.
            </p>

            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--line)] p-6 border-l-4 border-l-[#D4AF37] shadow-sm">
              <div className="flex items-center gap-2.5 mb-2">
                <Target className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-display text-lg font-bold text-[var(--ink)]">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                To help businesses grow, operate efficiently, and achieve their
                goals through reliable, flexible, and professional services.
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-7 sm:p-8 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-[var(--ink)] mb-5">
                Why Choose Viora Dynamics?
              </h3>
              <ul className="space-y-4">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-[var(--ink)] font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div
              id="global"
              className="rounded-3xl bg-gradient-to-br from-[#0F2547] to-[#17396E] text-white p-7 sm:p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold">
                  Serving Clients Across the Globe
                </h3>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed mb-3">
                Based in Canada, Viora Dynamics Inc. serves individuals,
                entrepreneurs, startups, and established businesses worldwide.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our flexible service approach allows us to work seamlessly across
                different countries, industries, and time zones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
