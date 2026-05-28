import { EXPANDED_CASE_RESULTS } from '../data/legalData';
import { ShieldCheck, Award, Filter, Search, Landmark, ChevronRight, AlertTriangle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Page, CaseResult } from '../types';

interface CaseResultsPageProps {
  onSetPage: (page: Page) => void;
  onOpenConsultation: () => void;
}

export default function CaseResultsPage({ onSetPage, onOpenConsultation }: CaseResultsPageProps) {
  const [selectedPractice, setSelectedPractice] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const practiceOptions = [
    { value: 'all', label: 'All Verdicts' },
    { value: 'criminal', label: 'Criminal Defense' },
    { value: 'family', label: 'Family Law' },
    { value: 'civil', label: 'Civil Litigation' },
    { value: 'injury', label: 'Personal Injury & Wrongful Death' }
  ];

  const filteredResults = EXPANDED_CASE_RESULTS.filter(res => {
    // Check practice area match
    let matchesPractice = true;
    if (selectedPractice !== 'all') {
      if (selectedPractice === 'criminal') {
        matchesPractice = res.practiceArea.toLowerCase().includes('criminal');
      } else if (selectedPractice === 'family') {
        matchesPractice = res.practiceArea.toLowerCase().includes('family');
      } else if (selectedPractice === 'civil') {
        matchesPractice = res.practiceArea.toLowerCase().includes('civil');
      } else if (selectedPractice === 'injury') {
        matchesPractice = res.practiceArea.toLowerCase().includes('injury') || res.practiceArea.toLowerCase().includes('death');
      }
    }

    const matchesSearch = res.caseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.practiceArea.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesPractice && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Required State Bar Disclaimer Notification Banner */}
      <div className="bg-amber-100/70 border-y border-amber-200/50 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-[10.5px] font-bold text-amber-900 uppercase tracking-wider">
          <AlertTriangle size={14} className="text-amber-700 shrink-0" />
          <span>Ethics Mandate: Past results do not guarantee future outcomes. Distinct legal merits and evidence apply on every caseload.</span>
        </div>
      </div>

      {/* Header Splash */}
      <section className="relative py-16 bg-white border-b border-slate-200/55 overflow-hidden">
        <div className="absolute inset-0 bg-[#090644]/5 blur-[120px] rounded-full translate-y-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#090644]">
            Litigation Records • Documented Successes
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-serif text-slate-900 leading-tight">
            Case Verdicts & <span className="text-secondary italic">Settlements.</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            We are proud of our litigation legacy. Explore a listing of representing successes secured across North Carolina state and federal judicial bodies.
          </p>
        </div>
      </section>

      {/* Core statistics cards */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 rounded-2xl border border-slate-200/50 -translate-y-8 shadow-md">
        <div className="p-5 text-center md:border-r border-slate-100 flex flex-col justify-center items-center">
          <span className="text-3xl font-serif font-black text-[#D4AF37]">$18.4 Million</span>
          <p className="text-slate-505 text-[10px] font-black uppercase tracking-widest mt-1">Largest Partnership Breach Verdict</p>
        </div>
        <div className="p-5 text-center md:border-r border-slate-100 flex flex-col justify-center items-center">
          <span className="text-3xl font-serif font-black text-secondary">$3.50 Million</span>
          <p className="text-slate-505 text-[10px] font-black uppercase tracking-widest mt-1">Largest Pedestrian Transit Settlement</p>
        </div>
        <div className="p-5 text-center md:border-r border-slate-100 flex flex-col justify-center items-center">
          <span className="text-3xl font-serif font-black text-green-700">100% Acquittal</span>
          <p className="text-slate-505 text-[10px] font-black uppercase tracking-widest mt-1">Under State Self-Defense Trial</p>
        </div>
        <div className="p-5 text-center flex flex-col justify-center items-center">
          <span className="text-3xl font-serif font-black text-secondary">500+ Closed Files</span>
          <p className="text-slate-505 text-[10px] font-black uppercase tracking-widest mt-1">Active caseload conflicts shielded annually</p>
        </div>
      </section>

      {/* Results navigation and details */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        
        {/* Switchers and searches bar */}
        <div className="bg-white border border-slate-200/60 rounded-xl p-5 mb-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Practice selection */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {practiceOptions.map(p => (
              <button
                key={p.value}
                onClick={() => setSelectedPractice(p.value)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                  selectedPractice === p.value
                    ? 'bg-secondary text-white border-secondary shadow-md shadow-secondary/15'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/50'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search case titles or results..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-secondary/20"
            />
          </div>
        </div>

        {/* Results layout block */}
        {filteredResults.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200/50 space-y-3">
            <Landmark size={48} className="text-slate-300 mx-auto" />
            <h3 className="text-lg font-serif font-bold text-slate-900">No Matching Verdicts</h3>
            <p className="text-slate-500 text-xs font-medium max-w-sm mx-auto">
              No closed settlement profiles correspond to your query keywords. Reset parameters to view entire litigation results.
            </p>
            <button 
              onClick={() => { setSelectedPractice('all'); setSearchQuery(''); }}
              className="text-xs font-black uppercase tracking-wider text-secondary mt-2 border border-slate-200 hover:border-slate-300 px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResults.map((result: CaseResult) => (
              <div 
                key={result.id} 
                className={`bg-white border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                  result.isHighProfile 
                    ? 'border-secondary/40 shadow-md ring-1 ring-secondary/5' 
                    : 'border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                {/* High profile visual marker */}
                {result.isHighProfile && (
                  <div className="absolute top-0 right-0 bg-[#D4AF37] text-slate-950 text-[8.5px] font-black uppercase tracking-widest px-3.5 py-1 rounded-bl-xl flex items-center gap-1">
                    <Award size={10} />
                    High Profile
                  </div>
                )}

                <div className="space-y-4">
                  {/* practice division indicator */}
                  <span className="text-[9.5px] uppercase tracking-widest font-black text-[#090644] bg-blue-50 px-2.5 py-1 rounded inline-block">
                    {result.practiceArea}
                  </span>

                  {/* Verdict value recovery amount */}
                  <div>
                    <p className="text-2xl sm:text-3xl font-serif font-black text-slate-900 group-hover:text-secondary transition-colors" title={result.amount}>
                      {result.amount}
                    </p>
                    <p className="text-xs font-extrabold text-slate-700 font-sans mt-1">
                      {result.caseTitle}
                    </p>
                  </div>

                  {/* Factual judicial description summary */}
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed font-semibold">
                    {result.description}
                  </p>
                </div>

                {/* Card footer CTA link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                    North Carolina Venue
                  </span>
                  <button 
                    onClick={onOpenConsultation}
                    className="text-xs font-black uppercase tracking-widest text-secondary hover:text-slate-950 flex items-center gap-1 transition-all group-hover:translate-x-0.5"
                  >
                    Case Review
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* State Bar compliant explanation notice block */}
        <div className="mt-16 p-8 bg-slate-100 rounded-2xl border border-slate-200/60 space-y-4">
          <h4 className="text-sm uppercase tracking-wide font-black text-slate-900">
            Ethics Warning on Past Accomplishments (North Carolina State Bar Guideline)
          </h4>
          <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">
            The settlements and judgments listed above reflect historical representational files compiled from NXTGen trial records in public files. Heuristics are not predictive. Under <strong>State Bar rules</strong>, we highlight that <strong>past results do not guarantee future outcomes</strong>. Every litigant's circumstances differ, and no attorney's record assures identical performance, success, or financial yield on your current case evaluation.
          </p>
        </div>

        {/* Interactive action banner */}
        <div className="mt-12 bg-slate-950 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif font-black">Facing Litigation? Secure Elite Advocates.</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Our firm preserves a high-readiness posture. All intake inquiries are audited immediately for potential client conflicts before scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button 
              onClick={onOpenConsultation}
              className="bg-[#D4AF37] hover:bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg text-xs font-black uppercase tracking-widest transition-colors duration-300 shadow-md"
            >
              Consult Free Online Now
            </button>
            <button 
              onClick={() => onSetPage('contact')}
              className="border border-slate-700 hover:border-white text-white px-8 py-3.5 rounded-lg text-xs font-black uppercase tracking-widest transition-colors"
            >
              Connect with Local Offices
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
