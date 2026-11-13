import { motion } from 'framer-motion';
import {
  Calculator,
  FileSpreadsheet,
  Headphones,
  Briefcase,
  Laptop,
  Building2,
} from 'lucide-react';
import { SERVICES, PARTNERS } from '../data/siteData';

const ICONS = {
  accounting: Calculator,
  payroll: FileSpreadsheet,
  'customer-support': Headphones,
  'business-admin': Briefcase,
  'remote-admin': Laptop,
};

export default function ServicesSection() {
  return (
    <>
      <section
        id="services"
        className="py-20 lg:py-24 bg-[var(--surface)] border-y border-[var(--line)]"
      >
        <div className="max-w-6xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              What We Deliver
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 text-[var(--ink)]">
              Our Services
            </h2>
            <p className="text-[var(--muted)] mt-3">
              Structured business support, financial precision, and scalable
              remote operations tailored for modern organizations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = ICONS[service.id] || Briefcase;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl bg-[var(--bg)] border border-[var(--line)] hover:border-[#D4AF37] p-6 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-xl bg-[#0F2547] dark:bg-[#1a3968] text-[#D4AF37] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--ink)] mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="clients" className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Platforms &amp; Ecosystem
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-2 text-[var(--ink)]">
              Our Clients &amp; Business Partnerships
            </h2>
            <p className="text-[var(--muted)] mt-3">
              Viora Dynamics Inc. currently provides services through the
              following platforms and business partnerships, expanding across
              Canada and internationally.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {PARTNERS.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-[var(--surface)] border border-[var(--line)] p-6 shadow-sm hover:border-[#D4AF37]/70 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {partner.role}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--ink)] mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
