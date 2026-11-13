import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { LEGAL_DOCS } from '../data/siteData';

export default function LegalModal({ docKey, onClose }) {
  const doc = docKey ? LEGAL_DOCS[docKey] : null;

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full rounded-3xl bg-[var(--surface)] border border-[var(--line)] p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-2xl font-bold text-[var(--ink)]">
                {doc.title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="p-2 rounded-full hover:bg-[var(--surface-alt)] text-[var(--muted)] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              {doc.body}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-[#0F2547] dark:bg-[#D4AF37] text-white dark:text-[#071120] px-5 py-2 text-sm font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
