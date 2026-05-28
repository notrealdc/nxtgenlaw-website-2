import { ATTORNEYS, RichAttorney } from '../data/legalData';
import { Mail, Shield, Award, Landmark, GraduationCap, Briefcase, ChevronLeft, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';
import { motion } from 'motion/react';

interface AttorneyDetailProps {
  attorneyId: string;
  onSetPage: (page: Page) => void;
  onSelectAttorney: (id: string) => void;
  onOpenConsultation: () => void;
  activeHomepage?: Page;
}

export default function AttorneyDetail({ 
  attorneyId, 
  onSetPage, 
  onSelectAttorney,
  onOpenConsultation,
  activeHomepage = 'greensboro'
}: AttorneyDetailProps) {
  // Find the matching attorney
  const atty = ATTORNEYS.find(a => a.id === attorneyId) || ATTORNEYS[0];

  // Also grab other attorneys for a "Consult with Our Other Experts" section
  const otherAttorneys = ATTORNEYS.filter(a => a.id !== atty.id).slice(0, 3);

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      {/* Sitewide Warning Banner inside page wrapper for State Bar Ethical Compliance */}
      <div className="bg-amber-50 border-y border-amber-200/60 py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
          <Shield size={14} className="text-amber-600 shrink-0" />
          <span>Ethics Notice: Case results listed represent past litigation success. Past results do not guarantee future outcomes.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button to list or home */}
        <button 
          onClick={() => onSetPage(activeHomepage)}
          className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#090644] hover:text-slate-950 mb-8 transition-colors"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Firm Overview
        </button>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Sticky Photo & Core Contact/Licensure Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
              
              {/* Photo */}
              <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-100 mb-6 border border-slate-100 shadow-inner">
                <img 
                  alt={atty.name} 
                  className="w-full h-full object-cover" 
                  src={atty.imageUrl}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quick Info & Ethics State Bar Licensure Box */}
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-serif font-black text-slate-900 leading-tight">
                    {atty.name}
                  </h1>
                  <p className="text-secondary text-xs uppercase tracking-widest font-black mt-1">
                    {atty.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <Briefcase size={15} className="text-secondary shrink-0" />
                    <span>{atty.experienceYears} of Experience</span>
                  </div>
                  
                  <a 
                    href={`mailto:${atty.email}`}
                    className="flex items-center gap-2.5 text-xs font-medium text-slate-600 hover:text-secondary transition-colors truncate"
                  >
                    <Mail size={15} className="text-secondary shrink-0" />
                    <span>{atty.email}</span>
                  </a>
                </div>

                {/* State Bar Certification Badge Display */}
                <div className="mt-6 p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary flex items-center gap-1.5">
                    <Shield size={11} className="text-secondary" />
                    State Certification
                  </span>
                  <div className="space-y-1">
                    {atty.barNumbers.map((num, i) => (
                      <p key={i} className="text-[12px] font-black text-slate-900 font-mono">
                        {num}
                      </p>
                    ))}
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
                      Maintained in active status with full authority to practice before all NC state tribunals.
                    </p>
                  </div>
                </div>

                {/* Emergency Hotline Promotion for immediate jail/injury intake */}
                <div className="p-4 bg-secondary text-white rounded-xl space-y-2">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-400">
                    Need Immediate Help?
                  </p>
                  <p className="text-xs font-medium text-slate-100 leading-relaxed">
                    Direct representation review or after-hours arrest assistance:
                  </p>
                  <a 
                    href="tel:1-800-NXT-GEN1"
                    className="block text-center text-sm font-black bg-white text-secondary py-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Call 1-800-NXT-GEN1
                  </a>
                </div>
              </div>
            </div>

            {/* BAR ADMISSIONS COURT REGISTRY card (ETHICS REQUIREMENT) */}
            <div className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-md">
              <h3 className="text-sm uppercase tracking-wider font-extrabold text-slate-900 mb-4 flex items-center gap-2 pb-2.5 border-b border-slate-100">
                <Landmark size={15} className="text-secondary" />
                Admitted Forums
              </h3>
              <ul className="space-y-3.5">
                {atty.barAdmissions.map((adm, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <CheckCircle2 size={13} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-snug">{adm}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Full Bio, Law School, Practice Focus & Notable Victories */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top overview metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200/50 shadow-sm flex items-center gap-4">
                <GraduationCap className="w-10 h-10 text-secondary shrink-0" />
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Education</p>
                  <p className="font-serif text-[12px] sm:text-xs font-bold text-slate-900 truncate" title={atty.lawSchool}>
                    {atty.lawSchool.split(' (')[0]}
                  </p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200/50 shadow-sm flex items-center gap-4">
                <Calendar className="w-10 h-10 text-secondary shrink-0" />
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Focus Areas</p>
                  <p className="text-xs font-black text-slate-900">
                    {atty.practiceAreas.length} Core Areas
                  </p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200/50 shadow-sm flex items-center gap-4 col-span-2 md:col-span-1">
                <Award className="w-10 h-10 text-secondary shrink-0" />
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Status</p>
                  <p className="text-xs font-black text-green-700 uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    NC Active Guild
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Narrative Bio */}
            <div className="bg-white rounded-2xl border border-slate-200/70 p-8 shadow-md space-y-6">
              <h2 className="text-2xl font-serif font-black text-slate-900 pb-3 border-b border-slate-100">
                Attorney Biography & Experience
              </h2>
              <p className="text-slate-600 text-[14.5px] leading-relaxed font-normal">
                {atty.fullBio}
              </p>
              <blockquote className="border-l-4 border-secondary pl-4 py-1.5 bg-slate-50 italic text-[#090644] text-xs sm:text-sm font-medium">
                "Our clients deserve ruthless, uncompromised tactical representation. When we step inside a federal or state courtroom, we leave no option unexplored, preparing every argument to protect our clients\' liberties."
              </blockquote>
            </div>

            {/* Law School & Academic Credentials */}
            <div className="bg-white rounded-2xl border border-slate-200/70 p-8 shadow-md">
              <h3 className="text-xl font-serif font-black text-slate-900 mb-4 flex items-center gap-2">
                <GraduationCap className="text-secondary" />
                Academic Background
              </h3>
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex gap-4">
                <div className="text-secondary font-serif text-3xl font-black">JD</div>
                <div className="space-y-1">
                  <p className="text-sm font-extrabold text-slate-900 leading-tight">
                    {atty.lawSchool}
                  </p>
                  <p className="text-xs text-slate-500 leading-normal font-medium">
                    Mastery of Trial Advocacy, Legal Research Writing, Civil Trial Operations, and Professional Ethics parameters.
                  </p>
                </div>
              </div>
            </div>

            {/* Practice Areas (Pills) */}
            <div className="bg-white rounded-2xl border border-slate-200/70 p-8 shadow-md">
              <h3 className="text-xl font-serif font-black text-slate-900 mb-5 flex items-center gap-2">
                <Award className="text-secondary" />
                Practice Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {atty.practiceAreas.map((pa, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200/60 rounded-lg text-xs font-semibold text-secondary transition-all"
                  >
                    {pa}
                  </span>
                ))}
              </div>
            </div>

            {/* Notable Cases & Judicial Career Wins (Trust Builder) */}
            <div className="bg-white rounded-2xl border border-slate-200/70 p-8 shadow-md">
              <h3 className="text-xl font-serif font-black text-slate-900 mb-1 flex items-center gap-2">
                <FileText className="text-secondary" />
                Notable Trial Accomplishments & Case Records
              </h3>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-6">
                NC Bar Ethics Rule Compliant Historical Case Filings
              </p>
              
              <div className="space-y-4">
                {atty.notableCases.map((record, i) => (
                  <div key={i} className="p-5 border border-slate-200/60 hover:border-secondary/40 rounded-xl transition-all duration-300">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Judicial Record
                    </p>
                    <p className="text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
                      {record}
                    </p>
                  </div>
                ))}
              </div>

              {/* Necessary Ethical Advisory */}
              <div className="mt-6 p-4 bg-amber-50 rounded-lg text-[10.5px] font-medium text-amber-800 leading-relaxed border border-amber-200/40">
                <strong>Important Notice on Client Testimonials and Verdicts:</strong> Each legal case has unique sets of circumstances, scientific facts, and judicial evidence. Past results on are never predictive or indicative of future settlement potentials. Listed trial wins do not assure similar accomplishments.
              </div>
            </div>

            {/* Schedule Consultation Link */}
            <div className="bg-slate-950 text-white p-8 rounded-2xl text-center space-y-4">
              <h3 className="text-xl font-serif font-bold">Retain {atty.name.split(' ')[0]} to Represent Your Case</h3>
              <p className="text-slate-400 text-xs max-w-xl mx-auto leading-relaxed">
                Contact our North Carolina case managers today. All early digital requests are analyzed for attorney conflicts and scheduled for a private evaluation.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenConsultation}
                  className="bg-[#D4AF37] hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-colors duration-300 shadow-md"
                >
                  Request Consultation Now
                </button>
                <button 
                  onClick={() => onSetPage('contact')}
                  className="border border-slate-700 hover:border-white text-white px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-colors"
                >
                  Contact Office Locations
                </button>
              </div>
            </div>

            {/* Meet other attorneys slider / row */}
            <div className="pt-4">
              <h4 className="text-xs uppercase tracking-widest text-[#090644] font-black mb-4">
                Consult with Our Other Legal Authorities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherAttorneys.map(other => (
                  <div 
                    key={other.id} 
                    onClick={() => {
                      onSelectAttorney(other.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 bg-white border border-slate-200/70 hover:border-secondary hover:shadow-md rounded-xl transition-all duration-300 cursor-pointer flex gap-3.5 items-center"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-100 bg-slate-50">
                      <img src={other.imageUrl} alt={other.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">{other.name}</p>
                      <p className="text-[10px] text-slate-500 font-medium truncate">{other.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
