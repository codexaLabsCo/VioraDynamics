import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [legalDoc, setLegalDoc] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer onOpenLegal={setLegalDoc} />
      <LegalModal docKey={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
