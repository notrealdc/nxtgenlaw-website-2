import { FAQS, FAQ } from '../data/legalData';
import { HelpCircle, ChevronDown, ChevronUp, Search, ShieldCheck, Mail, MessageSquare, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../types';

interface KeyFAQsPageProps {
  onSetPage: (page: Page) => void;
  onOpenConsultation: () => void;
}

export default function KeyFAQsPage({ onSetPage, onOpenConsultation }: KeyFAQsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('f1'); // Expand first by default

  const categories = [
    { value: 'all', label: 'All FAQs' },
    { value: 'general', label: 'General & Fees' },
    { value: 'criminal', label: 'Criminal Defense' },
    { value: 'family', label: 'Family Law' },
    { value: 'civil', label: 'Civil Litigation' },
    { value: 'injury', label: 'Injury & Wrongful Death' }
  ];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    if (expandedFaqId === id) {
      setExpandedFaqId(null);
    } else {
      setExpandedFaqId(id);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Disclaimer disclaimer notice banner */}
      <div className="bg-amber-50 border-y border-amber-200/60 py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-amber-600 shrink-0" />
          <span>Information Purposes Only: Reading website FAQs does not instantiate a legal defense attorney relationship.</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="relative py-16 bg-white border-b border-slate-200/55 overflow-hidden">
        <div className="absolute inset-0 bg-[#090644]/5 blur-[120px] rounded-full translate-y-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#090644]">
            Client Intake Support • Knowledge Base
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-serif text-slate-900 leading-tight">
            Frequently Asked <span className="text-secondary italic">Questions.</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            Find immediate answers regarding attorney-client relationships, litigation fees, arrest protocols, and statutory limits in North Carolina.
          </p>
        </div>
      </section>

      {/* Main content sections */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Switcher and Search bar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Search inputs */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-800 pb-2 border-b border-slate-105">
                Search FAQs
              </h4>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Type symptoms, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-secondary/20"
                />
              </div>
            </div>

            {/* Category selection */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-800 pb-2 border-b border-slate-105">
                Filter by Category
              </h4>
              <div className="space-y-1.5">
                {categories.map(cat => {
                  const isActive = selectedCategory === cat.value;
                  return (
                    <button
                      key={cat.value}
                      onClick={() => {
                        setSelectedCategory(cat.value);
                        setExpandedFaqId(null);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex justify-between items-center transition-all ${
                        isActive
                          ? 'bg-secondary text-white shadow-md'
                          : 'bg-transparent text-slate-705 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Consultation Sidebar card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-full bg-blue-900/60 flex items-center justify-center shrink-0">
                <PhoneCall size={18} className="text-[#D4AF37]" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#D4AF37]">
                Still Have Questions?
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed font-semibold">
                An intake session with our legal coordinates answers specific questions without delays. Request your private, no-charge conflict screen.
              </p>
              <button 
                onClick={onOpenConsultation}
                className="w-full bg-[#D4AF37] hover:bg-amber-400 text-slate-950 py-3 rounded-lg text-xs font-black uppercase tracking-widest text-center transition-colors"
              >
                Connect Free Online
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Expansible Accordion FAQs list */}
          <div className="lg:col-span-8 space-y-6">
            
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200/50 space-y-3">
                <HelpCircle size={48} className="text-slate-350 mx-auto" />
                <h3 className="text-lg font-serif font-bold text-slate-900">No FAQs found</h3>
                <p className="text-slate-500 text-xs font-medium max-w-sm mx-auto">
                  We can't find matches for "{searchQuery}". Try using simpler terms like "fees", "arrest", or "court deadlines".
                </p>
                <button 
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="text-xs font-black uppercase tracking-wider text-secondary mt-2 border border-slate-200 hover:border-slate-300 px-4 py-2 rounded-lg"
                >
                  Clear search terms
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq: FAQ) => {
                  const isExpanded = expandedFaqId === faq.id;
                  return (
                    <div 
                      key={faq.id}
                      className="bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
                    >
                      {/* Accordion trigger panel */}
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <HelpCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base font-extrabold text-slate-900 font-sans tracking-tight">
                            {faq.question}
                          </span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp size={18} className="text-secondary shrink-0" />
                        ) : (
                          <ChevronDown size={18} className="text-secondary shrink-0" />
                        )}
                      </button>

                      {/* Expanding panels body */}
                      {isExpanded && (
                        <div className="px-6 pb-6 pt-1 border-t border-slate-100 bg-slate-50/50">
                          <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-semibold pl-7">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* General Disclaimer ethical notice */}
            <div className="p-6 bg-amber-50 rounded-xl text-[10px] font-medium text-amber-800 leading-relaxed border border-amber-200/40">
              <strong>Procedural Advisory Notice:</strong> Legal regulations, court procedures, and North Carolina State statutes are subject to revision and local district interpretations. Reading general informational materials does not constitute professional advice or attorney representation. All decisions around legal matters should be handled with a certified litigator directly.
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
