import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../data/siteData';

export default function Navbar({ isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--surface)]/85 backdrop-blur-lg border-b border-[var(--line)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <motion.div
        style={{ scaleX }}
        className="h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#f0cf6b] to-[#14315E] origin-left"
      />

      <div className="max-w-6xl mx-auto px-5 h-18 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="font-display text-xl font-extrabold tracking-tight flex items-center gap-2 text-[var(--ink)]"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F2547] text-[#D4AF37] font-extrabold text-sm shadow-sm">
            VD
          </span>
          <span>
            {COMPANY.shortName}
            <span className="text-[#D4AF37]">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Main">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--ink)] transition-colors relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[#D4AF37] transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#e5c158]" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#apply"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0F2547] dark:bg-[#D4AF37] text-white dark:text-[#071120] px-4 py-2 text-sm font-semibold hover:brightness-110 transition-all shadow-sm"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[var(--surface)] border-b border-[var(--line)]"
          >
            <div className="px-5 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-base font-semibold text-[var(--ink)] hover:bg-[var(--surface-alt)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
