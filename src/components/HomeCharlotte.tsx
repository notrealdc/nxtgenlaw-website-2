import { useState, FormEvent } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import { Page } from '../types';
import { BrandLogo } from './BrandLogo';

interface HomeCharlotteProps {
  onOpenConsultation: () => void;
  onSetPage: (page: Page) => void;
  onSelectAttorney: (id: string) => void;
  onSelectPracticeArea: (id: string) => void;
}

const UPCOMING_FEATURED_BRANDS = [
  { name: 'wfmy' },
  { name: 'wxii' },
  { name: 'wghp' },
  { name: 'journal' },
  { name: 'spectrum' }
];

export default function HomeCharlotte({ 
  onOpenConsultation, 
  onSetPage 
}: HomeCharlotteProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      try {
        const list = JSON.parse(localStorage.getItem('charlotte_coming_soon_subscribers') || '[]');
        if (!list.includes(email)) {
          list.push(email);
          localStorage.setItem('charlotte_coming_soon_subscribers', JSON.stringify(list));
        }
      } catch (err) {
        console.error('Error saving subscriber email', err);
      }
    }
  };

  return (
    <div className="pt-20 overflow-x-hidden min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Top Graphic Background Block */}
      <div className="relative py-6 sm:py-20 flex-grow flex items-center justify-center">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-secondary/10 via-secondary/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
          
          {/* Tagline / Announcement badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 shadow-sm">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.3em] text-secondary">
              EXPANSION TIMELINE: SUMMER 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-4 sm:mb-6">
            NXTGen Law <br className="hidden sm:block" />
            <span className="text-secondary italic">Charlotte Office.</span>
          </h1>

          {/* Subtext explanation */}
          <p className="text-slate-600 text-[13px] sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium mb-6 sm:mb-12">
            We are finalising our state-of-the-art office coordinates inside Uptown Charlotte's Hearst Tower to better serve Mecklenburg County. Our high-stakes trial team is operational and already accepting cases countywide today via our Greensboro headquarters.
          </p>

          {/* Bento Grid Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left max-w-3xl mx-auto mb-6 sm:mb-12">
            
            {/* Box 1: Future Location Detail */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#D4AF37]">
                      Premises Specs
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">Uptown Headquarters</h3>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-500 font-medium">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Hearst Tower, Suite 2440, 101 S Tryon St, Charlotte, NC 28280</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>1-704-555-0199</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>charlotte.desk@nxtgenlaw.com</span>
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Physical Reception</span>
                <span className="text-secondary font-black bg-secondary/5 px-2.5 py-1 rounded">July 2026</span>
              </div>
            </div>

            {/* Box 2: Subscriber Invitation Channel */}
            <div className="bg-secondary text-white p-5 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-300">
                      Stay Informed
                    </span>
                    <h3 className="text-lg font-bold text-white">Opening Announcements</h3>
                  </div>
                </div>
                
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  Receive priority updates on our local Charlotte launch party, trial operations, and Mecklenburg Court scheduling consults.
                </p>
              </div>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex rounded-lg overflow-hidden border border-white/20 focus-within:border-[#D4AF37] transition-colors">
                    <input 
                      type="email" 
                      required
                      placeholder="Enter legal firm email..." 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 text-white placeholder-slate-400 text-xs px-3 py-2.5 focus:outline-none flex-grow"
                    />
                    <button 
                      type="submit"
                      className="bg-white text-secondary hover:bg-[#D4AF37] hover:text-white px-4 text-[10px] font-black uppercase tracking-widest transition-all shrink-0 cursor-pointer"
                    >
                      Join
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-white/10 rounded-xl p-3 border border-[#D4AF37]/40 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span className="text-xs font-bold text-slate-100">
                    Subscribed to our priority Charlotte desk list! See you soon.
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* Action Links back to Active Greensboro HQ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <button 
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-slate-900 border border-slate-900 text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare size={14} /> Schedule Greensboro Consultation
            </button>
            <button 
              onClick={() => onSetPage('greensboro')}
              className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 hover:border-slate-300 px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-sm transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Back to Greensboro HQ <ArrowRight size={13} />
            </button>
          </div>

          {/* Featured Logos Under Consultation */}
          <div className="mt-10 sm:mt-20 pt-6 sm:pt-10 border-t border-slate-200 max-w-3xl mx-auto">
            <span className="text-[11px] sm:text-[13px] font-extrabold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-slate-500 block mb-4 sm:mb-8 text-center">
              Our Representative Trial Advocacy Media Coverage
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-14 gap-y-4 sm:gap-y-8">
              {UPCOMING_FEATURED_BRANDS.map((brand, idx) => (
                <div
                  key={`${brand.name}-static-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-300 h-20 xs:h-24 sm:h-36 md:h-40"
                >
                  <BrandLogo
                    name={brand.name}
                    className="h-full w-auto max-w-[260px] sm:max-w-[480px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
