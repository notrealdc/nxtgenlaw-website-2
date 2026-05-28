import { Page } from '../types';
import { Mail, Phone, MapPin, Award, ExternalLink } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  onOpenConsultation: () => void;
  onSelectPracticeArea: (id: string) => void;
}

export default function Footer({ setCurrentPage, onOpenConsultation, onSelectPracticeArea }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-100 divide-y divide-slate-100">
      {/* Main Footer Info Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Logo, About & Core Philosophy */}
            <div className="md:col-span-2 space-y-6">
              <div 
                className="cursor-pointer inline-block"
                onClick={() => setCurrentPage('greensboro')}
              >
                <img 
                  alt="NXTGen Law Group Logo" 
                  className="h-14 w-auto object-contain" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhOKZO8y4n9MJaid9nyk9oOGL_ZXWN08FOVKxndsyvkRAqL_YMKa8dNCayMGaQ-tm1SCwdz48Zw4kmm_qMX2xAM2YhmlZoUISsIqOcL87gfSjt5spxXhy8ntDESnRXkzOLKa4b56sknKJD1qO1Pw-ktbVzOiJHFnR6eQGoI_6i_qNnFe6vFPAVGda-YotyrzZ65jYjO2eSG29XLvjvRs5Y_CprLB4vSqiHvAvc-JkERWW6FsbmY0SKaYIfQ" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
                A premier law firm dedicated to providing sophisticated legal solutions for complex cases. We represent individuals and entities with unyielding commitment and aggressive courtroom strategy.
              </p>
              <div className="flex gap-4 items-center">
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">NC</span>
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">US</span>
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Licensed Trial Counsel & Litigation Experts
                </div>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h5 className="text-[11px] uppercase tracking-widest font-black text-slate-900 mb-6 flex items-center gap-2">
                <Award size={14} className="text-secondary" />
                Practice Areas
              </h5>
              <ul className="space-y-4 text-[13px] font-medium text-slate-600">
                <li>
                  <button 
                    onClick={() => onSelectPracticeArea('criminal')} 
                    className="hover:text-secondary hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-left font-semibold"
                  >
                    Criminal Defense
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onSelectPracticeArea('family')} 
                    className="hover:text-secondary hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-left font-semibold"
                  >
                    Family Law
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onSelectPracticeArea('civil')} 
                    className="hover:text-secondary hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-left font-semibold"
                  >
                    Civil Litigation
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onSelectPracticeArea('injury')} 
                    className="hover:text-secondary hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 cursor-pointer text-left font-semibold"
                  >
                    Personal Injury & Wrongful Death
                  </button>
                </li>
              </ul>
            </div>

            {/* Primary Office Contact Points */}
            <div>
              <h5 className="text-[11px] uppercase tracking-widest font-black text-slate-900 mb-6 flex items-center gap-2">
                <MapPin size={14} className="text-secondary" />
                Connect & Office Locations
              </h5>
              <div className="space-y-4">
                <ul className="space-y-3 text-[13px] font-medium text-slate-600">
                  <li>
                    <button 
                      onClick={() => setCurrentPage('greensboro')} 
                      className="hover:text-secondary transition-colors text-left font-semibold text-slate-900"
                    >
                      Greensboro Office (HQ)
                    </button>
                    <div className="text-slate-500 text-xs mt-0.5">301 S Elm St, Greensboro, NC 27401</div>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentPage('charlotte')} 
                      className="hover:text-secondary transition-colors text-left font-semibold text-slate-900"
                    >
                      Charlotte Office
                    </button>
                    <div className="text-slate-500 text-xs mt-0.5">101 S Tryon St, Charlotte, NC 28280</div>
                  </li>
                </ul>

                <div className="pt-3 flex gap-3">
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-slate-50 hover:bg-secondary hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 text-xs font-bold"
                  >
                    In
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-slate-50 hover:bg-secondary hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 text-xs font-bold"
                  >
                    Tw
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-slate-50 hover:bg-secondary hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 text-xs font-bold"
                  >
                    Ig
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Footer Copyright Area */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <p className="mb-4 md:mb-0">
              © 2026 NXTGen Law Group. All Rights Reserved. Professional Legal Corporation.
            </p>
            <div className="flex gap-8">
              <a href="#privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#disclaimer" className="hover:text-secondary transition-colors">Attorney Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
