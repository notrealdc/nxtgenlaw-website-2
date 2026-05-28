import { Page } from '../types';
import { Menu, X, Landmark, Phone } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onOpenConsultation: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'About', page: 'about' },
    { label: 'Greensboro HQ', page: 'greensboro' },
    { label: 'Charlotte', page: 'charlotte' },
    { label: 'Reviews', page: 'testimonials' },
    { label: 'Verdicts', page: 'case-results' },
    { label: 'FAQs', page: 'faqs' },
    { label: 'Launchpad', page: 'launchpad' },
    { label: 'Podcast', page: 'podcast' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5 flex flex-col">
      {/* Sitewide Ethical Compliance Bar & Sticky Prominent Call-to-Action */}
      <div className="bg-slate-950 text-slate-300 text-[9px] sm:text-[10px] py-1 sm:py-1.5 px-4 sm:px-6 border-b border-white/5 font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          {/* Disclaimer text - hidden on mobile to conserve screen height */}
          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
            <span className="font-bold text-slate-200 uppercase tracking-widest text-[9px]">Ethics Notice:</span>
            <span className="font-semibold leading-relaxed text-left text-[9px] text-slate-400">Website data is for reference only & does not form an attorney-client relationship.</span>
          </div>
          {/* Sticky emergency contact - centered on mobile, right-aligned on desktop */}
          <a 
            href="tel:1-800-NXT-GEN1"
            className="flex items-center gap-1.5 font-bold tracking-wide uppercase text-[#D4AF37] hover:text-white transition-colors text-[9px] sm:text-[10px] mx-auto md:mx-0"
          >
            <Phone size={10} className="text-[#D4AF37]" />
            <span>Emergency 24/7 Intake: <span className="underline font-black text-white hover:text-amber-400">1-800-NXT-GEN1</span></span>
          </a>
        </div>
      </div>

      <nav className="flex justify-between items-center w-full px-6 py-3 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-102"
          onClick={() => setCurrentPage('greensboro')}
        >
          <img 
            alt="NXTGen Law Group Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhOKZO8y4n9MJaid9nyk9oOGL_ZXWN08FOVKxndsyvkRAqL_YMKa8dNCayMGaQ-tm1SCwdz48Zw4kmm_qMX2xAM2YhmlZoUISsIqOcL87gfSjt5spxXhy8ntDESnRXkzOLKa4b56sknKJD1qO1Pw-ktbVzOiJHFnR6eQGoI_6i_qNnFe6vFPAVGda-YotyrzZ65jYjO2eSG29XLvjvRs5Y_CprLB4vSqiHvAvc-JkERWW6FsbmY0SKaYIfQ" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Navigation - Reduced Gaps to make tabs closer together */}
        <div className="hidden lg:flex gap-3 xl:gap-4 items-center">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`text-[10px] xl:text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative py-1 hover:text-secondary ${
                  isActive ? 'text-secondary' : 'text-slate-850'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-container rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Consultation Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button 
            onClick={onOpenConsultation}
            className="bg-slate-950 text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-secondary/20"
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-slate-900 p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/10 shadow-xl transition-all duration-300 z-50">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-xs font-bold uppercase tracking-widest py-2.5 border-b border-slate-50 ${
                  currentPage === item.page ? 'text-secondary font-black' : 'text-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button 
                onClick={() => {
                  onOpenConsultation();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-secondary text-white py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-center shadow-md"
              >
                Free Case Evaluation
              </button>
              <a 
                href="tel:1-800-NXT-GEN1"
                className="w-full border border-slate-200 text-slate-800 py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2"
              >
                <Phone size={14} /> Call 1-800-NXT-GEN1
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
