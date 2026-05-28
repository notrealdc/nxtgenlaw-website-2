import { CLIENT_REVIEWS, Review } from '../data/legalData';
import { ShieldCheck, MessageSquare, Star, Filter, Compass, Plus, Sparkles, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../types';

interface TestimonialsPageProps {
  onSetPage: (page: Page) => void;
  onOpenConsultation: () => void;
}

export default function TestimonialsPage({ onSetPage, onOpenConsultation }: TestimonialsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Reviews' },
    { value: 'Criminal Defense', label: 'Criminal Defense' },
    { value: 'Family Law', label: 'Family Law' },
    { value: 'Civil Litigation', label: 'Civil Litigation' },
    { value: 'Personal Injury', label: 'Injury & Wrongful Death' }
  ];

  const filteredReviews = CLIENT_REVIEWS.filter(review => {
    const matchesCategory = selectedCategory === 'all' || 
      review.practiceArea.toLowerCase().includes(selectedCategory.split(' ')[0].toLowerCase());
    
    return matchesCategory;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Sitewide Warning Banner for State Bar Ethical Compliance */}
      <div className="bg-amber-100/70 border-y border-amber-200/50 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-[10.5px] font-bold text-amber-900 uppercase tracking-wider">
          <AlertTriangle size={14} className="text-amber-700 shrink-0" />
          <span>Ethics Advisory: Case results and testimonials represent past experiences of individual clients and do not guarantee future outcomes.</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="relative py-16 bg-white border-b border-slate-200/55 overflow-hidden">
        <div className="absolute inset-0 bg-[#090644]/5 blur-[120px] rounded-full translate-y-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#090644]">
            Ethical Client Feedback • Real Advocacy
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-serif text-slate-900 leading-tight">
            Past Client <span className="text-secondary italic">Experiences.</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            We operate with absolute transparency. Read verified listings and client-submitted stories of representation, compiled in state bar ethics compliance.
          </p>
        </div>
      </section>



      {/* Main Content & Review Cards Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        
        {/* Search and Filters Hub */}
        <div className="bg-white border border-slate-200/60 rounded-xl p-5 mb-8 shadow-sm flex justify-center items-center">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                  selectedCategory === cat.value
                    ? 'bg-secondary text-white border-secondary'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Reviews Output */}
        {filteredReviews.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200/50 space-y-3">
            <MessageSquare size={48} className="text-slate-300 mx-auto" />
            <h3 className="text-lg font-serif font-bold text-slate-900">No Matching Reviews</h3>
            <p className="text-slate-500 text-xs font-medium max-w-sm mx-auto">
              We couldn't find any verified client reviews fitting your search words. Please reset categories or refine your query.
            </p>
            <button 
              onClick={() => { setSelectedCategory('all'); }}
              className="text-xs font-black uppercase tracking-wider text-secondary mt-2 border border-slate-200 hover:border-slate-300 px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review: Review) => (
              <div 
                key={review.id} 
                className="bg-white border border-slate-200/60 hover:border-[#D4AF37] hover:shadow-lg rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-16 h-1 bg-[#D4AF37]" />
                
                <div className="space-y-4">
                  
                  {/* Category Pill + Verified Tag */}
                  <div className="flex justify-between items-center">
                    <span className="text-[9.5px] uppercase tracking-widest font-black text-secondary bg-blue-50 px-2.5 py-1 rounded">
                      {review.practiceArea}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 flex items-center gap-1">
                      <ShieldCheck size={11} fill="currentColor" className="text-white shrink-0" />
                      {review.verifiedSource.split(' ')[0]} Verified
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex text-amber-450 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" className="text-amber-400" />
                    ))}
                  </div>

                  {/* Narrative content block */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium italic">
                    "{review.text}"
                  </p>

                </div>

                {/* Author Credentials Panel & Footer metadata */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-end">
                  <div>
                    <h5 className="text-[13px] font-extrabold text-slate-900 leading-tight">
                      {review.clientName}
                    </h5>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">
                      {review.location}
                    </p>
                  </div>
                  {review.date && (
                    <span className="text-[9.5px] font-mono text-slate-400 font-bold">
                      {review.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ethical disclaimer warning section */}
        <div className="mt-16 p-8 bg-slate-900/40 rounded-2xl border border-slate-200/50 space-y-4">
          <h4 className="text-sm uppercase tracking-wide font-black text-slate-900">
            Ethics Disclosure & State Bar Standards Policy
          </h4>
          <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">
            NXTGen Law Group complies with <strong>North Carolina State Bar Rule 7.1</strong>, which regulates references to past trial verdicts, case outcomes, and client communications. Testimonials listed represent factual, uncompensated experiences registered by actual contract clients. Past case developments depend heavily on individual circumstances, evidence, and court jurisdictions, and do not project, promise, or guarantee equal legal outcomes for any active or future case evaluations.
          </p>
        </div>

        {/* Interactive action callouts */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/70 p-8 shadow-md text-center max-w-3xl mx-auto space-y-4">
          <h4 className="text-xl font-serif font-black text-slate-900">
            Faced with a High-Stakes Legal Restructuring?
          </h4>
          <p className="text-slate-550 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Consult safely with our certified North Carolina attorneys. Read reviews, explore verdicts, and schedule your private evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button 
              onClick={onOpenConsultation}
              className="bg-secondary hover:bg-[#D4AF37] hover:text-slate-950 text-white px-8 py-3.5 rounded-lg text-xs font-black uppercase tracking-widest transition-colors duration-300 shadow-md"
            >
              Consult For Free Now
            </button>
            <button 
              onClick={() => onSetPage('contact')}
              className="border border-slate-200 hover:border-slate-400 text-slate-800 px-8 py-3.5 rounded-lg text-xs font-black uppercase tracking-widest transition-colors"
            >
              Our Local Office Directions
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
