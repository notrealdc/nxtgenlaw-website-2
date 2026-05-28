import { DETAILED_PRACTICE_AREAS, DetailedPracticeArea, FAQS } from '../data/legalData';
import { Page } from '../types';
import { Gavel, CheckCircle2, ChevronRight, Scale, Users, ShieldCheck, HeartHandshake, PhoneCall, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface PracticeDetailProps {
  practiceId: string;
  onSetPage: (page: Page) => void;
  onSelectPracticeArea: (id: string) => void;
  onOpenConsultation: () => void;
}

export default function PracticeDetail({
  practiceId,
  onSetPage,
  onSelectPracticeArea,
  onOpenConsultation
}: PracticeDetailProps) {
  // Find matching practice area, fallback to first if not found
  const pa = DETAILED_PRACTICE_AREAS.find(p => p.id === practiceId) || DETAILED_PRACTICE_AREAS[0];

  // Load relevant FAQs
  const relevantFAQs = FAQS.filter(faq => faq.category === pa.id || (pa.id === 'injury' && faq.category === 'injury'));

  // Quick navigation list for sidebar
  const otherPractices = DETAILED_PRACTICE_AREAS.map(p => ({
    id: p.id,
    title: p.title
  }));

  // Match corresponding icon
  const getIcon = () => {
    switch (pa.id) {
      case 'criminal':
        return <Scale className="w-12 h-12 text-[#D4AF37]" />;
      case 'family':
        return <Users className="w-12 h-12 text-[#D4AF37]" />;
      case 'civil':
        return <Gavel className="w-12 h-12 text-[#D4AF37]" />;
      case 'injury':
        return <HeartHandshake className="w-12 h-12 text-[#D4AF37]" />;
      default:
        return <Scale className="w-12 h-12 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50/40">
      {/* Sitewide Warning Banner for State Bar Ethical Compliance */}
      <div className="bg-amber-50 border-y border-amber-200/60 py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-amber-600 shrink-0" />
          <span>Professional Legal Informational Portal: Website content is for reference only and does not constitute technical or formal legal advice.</span>
        </div>
      </div>

      {/* Hero Header Card */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] flex items-center gap-2">
              Counsel of High Authority • Established Records
            </span>
            <div className="flex items-center gap-4">
              {getIcon()}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black leading-tight text-white">
                {pa.title} <span className="text-[#D4AF37] italic">Solutions.</span>
              </h1>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              {pa.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main content grid split */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: Sidebar Navigation, Emergency Contact & Accolades */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Practice Area switcher menu */}
              <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm">
                <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-800 mb-4 pb-2 border-b border-slate-100">
                  Practice Divisions
                </h4>
                <div className="space-y-2">
                  {otherPractices.map(op => {
                    const isActive = op.id === pa.id;
                    return (
                      <button
                        key={op.id}
                        onClick={() => {
                          onSelectPracticeArea(op.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex justify-between items-center transition-all ${
                          isActive 
                            ? 'bg-secondary text-white shadow-md shadow-secondary/15'
                            : 'bg-slate-50 border border-slate-100 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span>{op.title}</span>
                        <ChevronRight size={14} className={isActive ? 'text-white' : 'text-slate-400'} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Consultation Hotline Badge */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-md space-y-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <PhoneCall size={18} className="text-secondary" />
                </div>
                <h4 className="text-base font-serif font-bold text-slate-900 leading-tight">
                  Connect with a NC Trial Litigator Today
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  We maintain responsive lines and private video meeting tools to ensure quick support for individuals in high-stakes situations.
                </p>
                <div className="pt-2 space-y-2.5">
                  <button 
                    onClick={onOpenConsultation}
                    className="w-full bg-[#D4AF37] hover:bg-amber-400 text-slate-950 py-3 rounded-lg text-xs font-black uppercase tracking-widest text-center transition-colors"
                  >
                    Free Legal Evaluation
                  </button>
                  <a 
                    href="tel:1-800-NXT-GEN1"
                    className="block text-center text-xs font-bold border border-slate-200 hover:border-slate-300 text-slate-800 py-3 rounded-lg uppercase tracking-wider"
                  >
                    Call 1-800-NXT-GEN1
                  </a>
                </div>
              </div>

              {/* Area Specific Highlights Badge */}
              <div className="bg-[#090644] text-white rounded-2xl p-6 space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">
                  Division Credentials
                </h4>
                <div className="space-y-3">
                  {pa.highlights.map((feat, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-200 font-bold leading-relaxed">
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-blue-900/40">
                  <p className="text-[10px] text-slate-400 font-medium">
                    State wide litigation resources serving Greensboro, High Point, Winston-Salem, and Charlotte districts.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: What We Handle, Core Custom Process, and Filtered FAQ section */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Breakdown: What we handle */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-8 shadow-sm space-y-6">
                <h3 className="text-xl font-serif font-black text-slate-900 pb-3 border-b border-slate-100">
                  Scope of Representation & Litigated Actions
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our litigation division handles a wide array of disputes within this practice area. We represent clients at both the Administrative level and during complex Jury Trials inside State and Federal Jurisdictions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pa.whatWeHandle.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                      <span className="text-xs font-bold text-slate-800 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Step-by-Step procedural process (Trust builder) */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-8 shadow-sm space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-black text-slate-900">
                    The Custom Representation Process
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 font-medium">
                    Here is how our legal teams structure and execute details of your active casing:
                  </p>
                </div>

                <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-8">
                  {pa.process.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Step marker bubble */}
                      <span className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-mono text-xs font-black flex items-center justify-center border-4 border-white shadow-sm">
                        {step.step}
                      </span>
                      
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold text-slate-955 leading-none">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* why hire us parameters */}
              <div className="bg-white rounded-2xl border border-slate-200/70 p-8 shadow-sm space-y-6">
                <h3 className="text-xl font-serif font-black text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="text-secondary shrink-0" />
                  Why Choose Our Trial Practitioners
                </h3>
                <div className="space-y-4">
                  {pa.whyHireUs.map((reason, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-secondary text-[11px] font-black">✓</span>
                      </div>
                      <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section-relevant FAQs list (Ethics & Trustbuilder) */}
              {relevantFAQs.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200/70 p-8 shadow-sm space-y-6">
                  <h3 className="text-xl font-serif font-black text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-100">
                    <HelpCircle className="text-secondary shrink-0" />
                    Frequently Asked Questions • {pa.title}
                  </h3>
                  
                  <div className="space-y-5">
                    {relevantFAQs.map(faq => (
                      <div key={faq.id} className="space-y-2 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                        <h4 className="text-sm font-bold text-slate-900">
                          {faq.question}
                        </h4>
                        <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-center">
                    <button 
                      onClick={() => onSetPage('faqs')}
                      className="text-xs font-black text-[#090644] uppercase tracking-wider hover:text-[#D4AF37] transition-colors"
                    >
                      View All Firm FAQs →
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Custom Advice */}
              <div className="p-6 bg-slate-100 rounded-xl text-[10px] font-medium text-slate-500 leading-relaxed border border-slate-200/60">
                <strong>State Ethics Disclosures:</strong> The answers and processes compiled here represent general procedural timelines for North Carolina jurisdictions. They are formatted as high-level summaries and do not establish a personal legal counselor agreement. Every user situation possesses divergent elements. Select the CTA link above to request a personalized, confidential assessment.
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
