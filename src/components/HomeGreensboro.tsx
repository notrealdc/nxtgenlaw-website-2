import React, { useState } from 'react';
import { Attorney, CaseResult, Page } from '../types';
import { BrandLogo } from './BrandLogo';
import { 
  Play, Mail, Gavel, ArrowRight, ShieldCheck, 
  Layers, ChevronRight, X, Phone, FileText, CheckCircle2 
} from 'lucide-react';

interface Shard {
  id: number;
  tx: string;
  ty: string;
  scale: number;
  rot: string;
  dur: string;
  size: number;
  color: string;
  polygon: string;
  left: string;
  top: string;
}

function ConcreteCrackedHeadline() {
  const [shards, setShards] = useState<Shard[]>([]);
  const [isRumbling, setIsRumbling] = useState(false);
  const [isSplit, setIsSplit] = useState(false);

  const triggerCrash = () => {
    setIsRumbling(true);
    setIsSplit(true);

    // Clear old shards
    setShards([]);

    // Spawning 50 particles simulating detailed grey concrete fragments and gold sparks
    const newShards: Shard[] = Array.from({ length: 50 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 150 + Math.random() * 320;
      const tx = `${Math.cos(angle) * velocity}px`;
      const ty = `${Math.sin(angle) * velocity - 150}px`; // shoots up initially before falling
      const scale = 0.15 + Math.random() * 0.85;
      const rot = `${(Math.random() - 0.5) * 1080}deg`;
      const dur = `${0.6 + Math.random() * 0.8}s`;
      const size = Math.random() > 0.45 
        ? 14 + Math.random() * 20 // bold chunks of concrete
        : 5 + Math.random() * 8;   // smaller golden debris particles

      const isGold = Math.random() > 0.45;
      const color = isGold 
        ? (Math.random() > 0.5 ? 'bg-amber-400' : 'bg-yellow-400') 
        : (Math.random() > 0.5 ? 'bg-slate-700' : 'bg-slate-500');

      const polygons = [
        'polygon(20% 0%, 80% 10%, 100% 50%, 70% 90%, 10% 80%)',
        'polygon(50% 0%, 100% 50%, 80% 100%, 20% 80%, 0% 30%)',
        'polygon(30% 0%, 90% 20%, 100% 80%, 40% 100%, 0% 60%)',
        'polygon(10% 20%, 80% 0%, 100% 60%, 50% 100%, 10% 70%)',
        'polygon(15% 15%, 85% 5%, 95% 75%, 35% 95%, 5% 55%)'
      ];
      const polygon = polygons[Math.floor(Math.random() * polygons.length)];

      const left = `${25 + Math.random() * 50}%`;
      const top = `${35 + Math.random() * 30}%`;

      return {
        id: Math.random() + i,
        tx,
        ty,
        scale,
        rot,
        dur,
        size,
        color,
        polygon,
        left,
        top
      };
    });

    setShards(newShards);

    // End vibration
    setTimeout(() => {
      setIsRumbling(false);
    }, 650);

    // Keep the cracks slightly split apart for drama before returning to base form
    setTimeout(() => {
      setIsSplit(false);
    }, 3200);
  };

  // Mount/Loop timing
  React.useEffect(() => {
    // Stagger slightly on start
    const startTimer = setTimeout(() => {
      triggerCrash();
    }, 800);

    const interval = setInterval(() => {
      triggerCrash();
    }, 6000);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className={`relative select-none cursor-pointer overflow-visible py-2 ${isRumbling ? 'animate-heavy-rumble' : ''}`}
      onClick={triggerCrash}
      onMouseEnter={triggerCrash}
    >
      {/* Rocks/Sparks Particle Layer */}
      <div className="absolute inset-0 z-40 pointer-events-none overflow-visible">
        {shards.map((shard) => (
          <div
            key={shard.id}
            className={`absolute rounded-xs animate-flying-rock ${shard.color}`}
            style={{
              left: shard.left,
              top: shard.top,
              width: `${shard.size}px`,
              height: `${shard.size}px`,
              clipPath: shard.polygon,
              WebkitClipPath: shard.polygon,
              '--tx': shard.tx,
              '--ty': shard.ty,
              '--scale': shard.scale,
              '--rot': shard.rot,
              '--dur': shard.dur,
              boxShadow: shard.color.includes('bg-amber') || shard.color.includes('bg-yellow') 
                ? '0 0 10px rgba(251, 191, 36, 0.8)' 
                : 'none'
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative text-left flex flex-col items-start select-none">
        
        {/* Line 1: GROUNDBREAKING */}
        <div className="relative inline-block overflow-visible select-none leading-[0.9]">
          {/* Glowing amber fracture behind */}
          <span className={`absolute left-0 top-0 text-amber-500 text-glow-gold transition-all duration-300 font-extrabold uppercase text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl ${isSplit ? 'opacity-100 scale-[1.01]' : 'opacity-0 scale-100'}`}>
            GROUNDBREAKING
          </span>
          
          {/* Top Piece */}
          <span 
            className="absolute left-0 top-0 text-white crack-top-piece font-extrabold uppercase text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-350 ease-out"
            style={{
              transform: isSplit ? 'translate(-3px, -4px) rotate(-1deg)' : 'translate(0px, 0px) rotate(0deg)'
            }}
          >
            GROUNDBREAKING
          </span>

          {/* Bottom Piece */}
          <span 
            className="text-white crack-bottom-piece font-extrabold uppercase text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-350 ease-out inline-block"
            style={{
              transform: isSplit ? 'translate(3px, 3px) rotate(0.5deg)' : 'translate(0px, 0px) rotate(0deg)'
            }}
          >
            GROUNDBREAKING
          </span>
        </div>

        {/* Line 2: SETTLEMENT. */}
        <div className="relative inline-block overflow-visible mt-3 select-none leading-[0.9]">
          {/* Glowing amber fracture behind */}
          <span className={`absolute left-0 top-0 text-amber-500 text-glow-gold transition-all duration-300 font-extrabold uppercase text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl ${isSplit ? 'opacity-100 scale-[1.01]' : 'opacity-0 scale-100'}`}>
            SETTLEMENT.
          </span>
          
          {/* Top Piece */}
          <span 
            className="absolute left-0 top-0 text-white crack-top-piece font-extrabold uppercase text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-350 ease-out"
            style={{
              transform: isSplit ? 'translate(-4px, -3px) rotate(-0.5deg)' : 'translate(0px, 0px) rotate(0deg)'
            }}
          >
            SETTLEMENT.
          </span>

          {/* Bottom Piece */}
          <span 
            className="text-white crack-bottom-piece font-extrabold uppercase text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-350 ease-out inline-block"
            style={{
              transform: isSplit ? 'translate(4px, 4px) rotate(1deg)' : 'translate(0px, 0px) rotate(0deg)'
            }}
          >
            SETTLEMENT.
          </span>
        </div>

      </div>
    </div>
  );
}

const FEATURED_BRANDS = [
  {
    name: "WFMY News 2",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/WFMY_News_2_logo_2016.svg/640px-WFMY_News_2_logo_2016.svg.png"
  },
  {
    name: "WXII 12 (NBC)",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/WXII_12_logo.png/640px-WXII_12_logo.png"
  },
  {
    name: "WGHP Fox 8",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WGHP_logo_2021.png/640px-WGHP_logo_2021.png"
  },
  {
    name: "Winston-Salem Journal",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Winston-Salem_Journal_logo.png/640px-Winston-Salem_Journal_logo.png"
  }
];

interface HomeGreensboroProps {
  onOpenConsultation: () => void;
  onSetPage: (page: Page) => void;
  onSelectAttorney: (id: string) => void;
  onSelectPracticeArea: (id: string) => void;
}

export default function HomeGreensboro({ onOpenConsultation, onSetPage, onSelectAttorney, onSelectPracticeArea }: HomeGreensboroProps) {
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(null);
  const [activeCaseResult, setActiveCaseResult] = useState<string>('c1');
  const [videoPlayState, setVideoPlayState] = useState(false);

  const attorneys: Attorney[] = [
    {
      id: 'a1',
      name: 'Mark Cummings',
      role: 'Partner',
      email: 'm.cummings@nxtgenlaw.com',
      imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0uiu7ZDfvQFop7Vr9EFTgRL_KmJmRZWnV38IoJ4gcFGgJJPT1d-OmKWfPu34yr8LRZspGSwULKX_a7Esh8YHmDmftAwYeWJGC2DgaHxBqHEEOKwUrnt9oUD9hAjm58SQeVe7FNwRTII0N_OR5RiVqgFGUMbawjudzd2FwjCZysXLe9DkzWvKXFPmIVqw8sNS_ms2bMJUm6H58FbHb4JCxvc36w_1rUH5Uqa5D9bKfs601vQcVz7cqmVhRLw',
      specialty: 'Criminal Defense & Litigation Lead',
      bio: 'Mark Cummings possesses over two decades of trial expertise and is widely recognized for defense strategies in state and federal courts. His advocacy is centered on protecting constitutional rights and delivering elite trial results.'
    },
    {
      id: 'a2',
      name: 'Atiya Clark',
      role: 'Senior Associate',
      email: 'a.clark@nxtgenlaw.com',
      imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0uj_A80VR27OfoyKolxUETGNVoyZ8iEwmMxvWYhEkZFy5q7f_V9m-j-dIQyO_jv9ww8UghT_YVGl97IukVupFRXzpRsRyu0ieQSvkE2wuFcu1XXX8-SaHvrOD7Z4PlHLUgqcFUbwPOhI950Ho5EIlqYXAhlAZ73OOb7Hl-hZVUxMMhbHFBMj_Fl_3EPhEZbbGrRX1wmjlv3YoHbuicpSx2C0pYV3cZwvukaasrXI9zvaM4oG9eV453l2RNw',
      specialty: 'General Civil Litigation & Trial Attorney',
      bio: 'Atiya Clark has achieved millions of dollars in civil verdicts. Her litigation practice areas include catastrophic personal injury, wrongful death lawsuits, and sophisticated commercial contracts disputes.'
    },
    {
      id: 'a3',
      name: 'Kelley Creacy-Durham',
      role: 'Partner',
      email: 'k.creacy@nxtgenlaw.com',
      imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0ugpIUlNrPmGozi_aDtnBS_T3rH32Jea0UKDqERkjQbHAfGOFguYUEqWWi56aTuSBv9QuDCoEqXcukXLp9PpbJ9sK4tRugSicNvYIBF6yupxpToQVLnQCuTpayLsO9RL4xEK5Y0_rBLodQU33BvwNs-PUypbLCjpQLSb1dXASME37_hd35efuLe2z-fCg_v64uT5sFEbmfGtz9nXBM-uYJtsCWLjKTTcLTTvQaGPL9lJns867fkDC7UKiAY',
      specialty: 'Family Law & Domestic Advocacy Lead',
      bio: 'Kelley Creacy-Durham runs the comprehensive domestic consulting and family law division at NXTGen Law. She is famous for fierce civil negotiation and protecting child and family welfare with legal expertise.'
    },
    {
      id: 'a4',
      name: 'Tyler Wester',
      role: 'Associate',
      email: 't.wester@nxtgenlaw.com',
      imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0uhwDB9XMiD-cDWyrLWhNBKPxY69OhuslCTSwWZ--MYHrbPUnjDP75wQ-dFVbjinseomctWQFBn-s1WMv_pb3aduo2k9gtod_t96W01bZjhbGLX0EXlv2weDBixR6xdjoPndv9fZ1No0ejJdQc9i2JYsND5uGd5_Ej-QLTfdom7f4ChrtazQopSxHHM7h4_jG6pCWs5B4QJIaFiLJQiyxkI_N3B4dfabkmieOFNMT5w1j1J59G15OXAxKAgY',
      specialty: 'Associate Attorney',
      bio: 'Tyler Wester represents corporate clients and private citizens alike. His focus sections are criminal defense litigation support, municipal hearings, and complex liability advocacy.'
    }
  ];

  const caseResults: CaseResult[] = [
    {
      id: 'c1',
      caseTitle: 'Estate of Patterson v. Logistics Corp',
      amount: '$1.25 Million',
      description: 'Negotiated groundbreaking settlement for negligence leading to catastrophic highway collision and wrongful death recovery.',
      practiceArea: 'Wrongful Death'
    },
    {
      id: 'c2',
      caseTitle: 'State of NC v. Benjamin D.',
      amount: 'Full Acquittal',
      description: 'Secured full dismissal of all felony charges following three weeks of jury trial and tactical evidence analysis.',
      practiceArea: 'Criminal Defense'
    },
    {
      id: 'c3',
      caseTitle: 'Manning Consolidated Divestiture',
      amount: '$18.4 Million',
      description: 'Fought and won major civil compensation for unlawful breach of joint-venture partnership agreements in North Carolina.',
      practiceArea: 'Civil Litigation'
    }
  ];

  return (
    <div className="pt-20 overflow-x-hidden min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 md:pt-16 pb-12 md:pb-24 bg-[#0b1d3a] text-white overflow-hidden">
        {/* Faded Background Image of the classical courthouse */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMDU8ZEPXuhKBF1xtw8bkfrMzEa6F0XoLIshoQ7rVpT304zqpD1_OAEZN&s=10" 
            alt="Courthouse Background" 
            className="w-full h-full object-cover object-center opacity-15 mix-blend-overlay filter brightness-90 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1d3a]/65 via-[#0b1d3a]/80 to-[#0b1d3a]" />
        </div>

        {/* Ambient Blur Radiants */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-blue-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-500/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-4 items-end sm:items-center">
            {/* Left Column: Client-Facing Headline and Navigation Details */}
            <div className="col-span-7 lg:col-span-7 flex flex-col items-start text-left space-y-3 sm:space-y-6">
              {/* Big Click-to-Call Feature */}
              <a 
                href="tel:336-574-0368" 
                className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-accent-gold hover:text-white transition-colors duration-300 select-none pt-1 block font-serif leading-none"
                id="hero-click-to-call"
              >
                336-574-0368
              </a>

              {/* Tagline */}
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <span className="h-px w-4 xs:w-12 bg-accent-gold/40 pb-0"></span>
                <span className="text-[8px] sm:text-xs font-black uppercase tracking-[0.1em] sm:tracking-[0.4em] text-accent-gold">
                  A Legacy of Justice
                </span>
                <span className="h-px w-4 xs:w-12 bg-accent-gold/40"></span>
              </div>

              {/* Settlements Headline Box */}
              <div className="relative w-full">
                <h1 className="text-xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-white">
                  <ConcreteCrackedHeadline />
                  <span className="text-accent-gold italic font-serif text-sm xs:text-xl sm:text-4xl md:text-5xl lg:text-5.5.xl block mt-1.5 sm:mt-4 font-black leading-tight">
                    $1.25 Million Wrongful Death
                  </span>
                </h1>
              </div>

              <p className="text-[10px] xs:text-xs sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Aggressive representation. Elite results. We don't just practice law; we set the standard for{' '}
                <span className="text-white font-extrabold underline decoration-accent-gold decoration-2 underline-offset-4">
                  excellence in the courtroom.
                </span>
              </p>

              {/* Call to Action Controls */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full pt-1 sm:pt-2">
                <button 
                  onClick={onOpenConsultation}
                  className="bg-accent-gold text-slate-950 hover:bg-white hover:text-slate-950 px-3 py-2 sm:px-8 sm:py-4 rounded-xl text-[9px] xs:text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-accent-gold/15 hover:shadow-white/10 hover:scale-102 text-center cursor-pointer truncate"
                >
                  <span className="xs:hidden">Consultation</span>
                  <span className="hidden xs:inline sm:hidden">Free Consultation</span>
                  <span className="hidden sm:inline">Schedule Your Free Consultation</span>
                </button>
                <button 
                  onClick={() => {
                    const resultsSection = document.getElementById('greensboro-case-results');
                    if (resultsSection) resultsSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/10 border border-white/20 text-white px-3 py-2 sm:px-8 sm:py-4 rounded-xl text-[9px] xs:text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all duration-300 hover:scale-102 text-center cursor-pointer truncate"
                >
                  <span className="xs:hidden">Victories</span>
                  <span className="hidden xs:inline sm:hidden">Our Victories</span>
                  <span className="hidden sm:inline">Explore Our Victories</span>
                </button>
              </div>

              {/* Static Brand Logos under CTA Buttons */}
              <div className="pt-4 sm:pt-8 w-full border-t border-white/10 mt-4 sm:mt-10">
                <span className="text-[9px] sm:text-[12px] font-extrabold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-slate-300 block mb-2 sm:mb-5">
                  As Featured On:
                </span>
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-10 gap-y-3 sm:gap-y-6">
                  {FEATURED_BRANDS.map((brand, idx) => (
                    <div
                      key={`${brand.name}-static-${idx}`}
                      className="flex-shrink-0 flex items-center justify-center transition-all duration-300 h-18 xs:h-22 sm:h-32 md:h-36 lg:h-40"
                    >
                      <BrandLogo
                        name={brand.name}
                        className="h-full w-auto max-w-[220px] xs:max-w-[280px] sm:max-w-[440px] md:max-w-[520px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Hero Profile Presentation */}
            <div className="col-span-5 lg:col-span-5 relative w-full flex justify-end self-center sm:self-center md:self-center translate-y-2 xs:translate-y-0 sm:translate-y-0 md:-translate-y-16 lg:-translate-y-28 xl:-translate-y-40">
              <div className="relative z-20 w-full max-w-[280px] xs:max-w-xs sm:max-w-md lg:max-w-full">
                <img 
                  alt="Jason L. Keith, Esq." 
                  className="w-full h-auto object-contain drop-shadow-2xl max-h-[720px] xs:max-h-[840px] sm:max-h-[385px] md:max-h-[640px] scale-[2.0] translate-x-16 translate-y-0 xs:scale-100 xs:translate-x-6 xs:-translate-y-14 lg:scale-110 origin-bottom-right" 
                  src="/src/assets/images/regenerated_image_1779838569531.png"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="bg-white py-8 sm:py-16 md:py-28 border-y border-slate-50 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="space-y-4 sm:space-y-8">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Excellence <br className="hidden sm:block" /> in <span className="text-secondary italic font-serif">Advocacy.</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Our law corporation was founded on the fundamental principle that every client deserves a fierce legal champion. We combine aggressive courtroom trial litigation with custom, personalized support to secure the highest potential dynamic outcome for those we represent.
              </p>

              {/* Dynamic Stats Row */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100/80 hover:border-slate-200 transition-all duration-300 group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary mb-0.5 sm:mb-1 font-serif group-hover:scale-102 transition-transform">$30B+</div>
                  <div className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-slate-400">Recovered Overall</div>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-100/80 hover:border-slate-200 transition-all duration-300 group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary mb-0.5 sm:mb-1 font-serif group-hover:scale-102 transition-transform">25+</div>
                  <div className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Video Mock / Asset Column */}
            <div className="relative">
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border border-slate-100"
                onClick={() => setVideoPlayState(true)}
              >
                {/* Debris bg chunk used as mock video background */}
                <img 
                  alt="Legal Commentary Video Cover" 
                  className="w-full h-full object-cover brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700" 
                  src="https://img.youtube.com/vi/xmlUuLmwb00/maxresdefault.jpg"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-slate-950/25 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-slate-950/15">
                  <span className="w-16 h-16 bg-secondary flex items-center justify-center rounded-full text-white shadow-[0_0_30px_rgba(0,67,235,0.4)] transform transition-smooth group-hover:scale-110">
                    <Play size={28} className="fill-white ml-1" />
                  </span>

                  {/* Pulsing Legal Commentary Label Tag */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-secondary text-white px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      Legal Commentary
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-6 left-6 text-left">
                    <div className="text-white font-serif text-lg font-bold drop-shadow-md">As seen on Major News Channels</div>
                    <div className="text-white/80 text-[10px] font-bold uppercase tracking-widest mt-0.5 drop-shadow-md">Consultation Analysis Stream</div>
                  </div>
                </div>
              </div>

              {/* Overlapping Bottom Badge - Hidden on small mobile to avoid layout overlap */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 p-4 sm:p-6 bg-secondary text-white rounded-2xl shadow-xl max-w-[220px] sm:max-w-[260px] border border-blue-400/20 translate-y-3 lg:translate-y-0 hidden xs:block">
                <Gavel className="text-white w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
                <p className="font-extrabold text-xs sm:text-base leading-snug">
                  Dominating the courtroom since 1999.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Case Results Component */}
      <section id="greensboro-case-results" className="py-8 sm:py-16 md:py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <h3 className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-secondary font-black mb-2">Multi-Million Dollar Case Verdicts</h3>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight">We Secure the Future</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {caseResults.map((result) => (
              <div 
                key={result.id}
                className={`p-5 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  activeCaseResult === result.id
                    ? 'bg-secondary text-white shadow-xl shadow-secondary/10 border-secondary'
                    : 'bg-white text-slate-800 border-slate-100 hover:border-slate-200 hover:shadow-lg'
                }`}
                onClick={() => setActiveCaseResult(result.id)}
              >
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <span className={`px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-wider ${
                    activeCaseResult === result.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {result.practiceArea}
                  </span>
                  <Gavel size={16} className={activeCaseResult === result.id ? 'text-white/80' : 'text-slate-300'} />
                </div>
                
                <h4 className={`text-2xl sm:text-4xl font-serif font-black mb-2 sm:mb-3 ${
                  activeCaseResult === result.id ? 'text-white' : 'text-secondary'
                }`}>
                  {result.amount}
                </h4>
                
                <h5 className="text-[13px] sm:text-[14px] font-extrabold mb-1">{result.caseTitle}</h5>
                <p className={`text-xs ${
                  activeCaseResult === result.id ? 'text-white/85' : 'text-slate-500'
                } leading-relaxed`}>
                  {result.description}
                </p>

                <div className="mt-6 pt-6 border-t border-current/10 flex justify-between items-center cursor-pointer" onClick={onOpenConsultation}>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Inquire About Defense</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Counsel Section */}
      <section className="bg-slate-50 py-8 sm:py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-16 pb-4 sm:pb-8 border-b border-slate-200">
            <div>
              <p className="text-secondary/70 uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[9px] md:text-xs font-black mb-1 sm:mb-2 text-left">
                Aggressive Advocacy • Professional Excellence
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 leading-none">
                Elite Counsel
              </h2>
            </div>
            <button 
              onClick={() => onSetPage('about')}
              className="group flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-secondary hover:text-slate-950 mt-3 md:mt-0 transition-all duration-300"
            >
              Learn More About Firm
              <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Attorneys Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {attorneys.map((atty) => (
              <div 
                key={atty.id} 
                className="group cursor-pointer"
                onClick={() => onSelectAttorney(atty.id)}
              >
                {/* Portait Wrapper */}
                <div className="relative aspect-[3/4] mb-3 sm:mb-6 overflow-hidden rounded-xl bg-slate-100 shadow-sm border border-slate-100">
                  <img 
                    alt={atty.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-108 group-hover:brightness-102" 
                    src={atty.imageUrl}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 sm:p-6">
                    <div className="text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <ShieldCheck size={11} className="text-secondary-fixed" />
                      View Full Bio Details
                    </div>
                  </div>
                </div>

                {/* Info Text */}
                <h4 className="text-base sm:text-2xl font-serif font-bold text-slate-900 mb-0.5 group-hover:text-secondary transition-colors text-left">
                  {atty.name}
                </h4>
                <p className="text-secondary text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold mb-2 sm:mb-3 text-left">
                  {atty.role}
                </p>

                <a 
                  href={`mailto:${atty.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-slate-500 hover:text-secondary text-xs sm:text-[13px] transition-colors flex items-center gap-2"
                >
                  <Mail size={13} className="text-slate-400" />
                  <span className="truncate">{atty.email}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Commentary Modal Layer */}
      {videoPlayState && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative border border-slate-800">
            <button 
              className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full cursor-pointer z-10 transition-colors"
              onClick={() => setVideoPlayState(false)}
            >
              <X size={18} />
            </button>
            <div className="p-8 text-white">
              <span className="bg-secondary text-white px-2 py-1 rounded text-[8px] font-black uppercase tracking-widest">
                STREAMING CONSULTATION
              </span>
              <h4 className="text-2xl font-serif font-bold mt-2 mb-4 leading-tight text-white">Courtroom Commentary & Strategy Case study</h4>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black flex flex-col items-center justify-center border border-slate-800">
                {/* Native HTML5 Video Player */}
                <video 
                  className="w-full h-full absolute"
                  src="https://rr3---sn-5uaezn67.googlevideo.com/videoplayback?expire=1780025727&ei=HrUYauHuOduIvdIPjqbmoA4&ip=146.70.128.232&id=o-ABodMKW4r4hsGpfEAoJPeV9GUqIKrTsEmU-TcR9Kh8nl&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&pcm2=yes&siu=1&bui=AbKmrwpEGAdo4_GPpR6wKup-OLbetSohlWq1mK01OOYBLzxDTZVMFlLCJVqzWZ45PCuXZpu35w&vprv=1&svpuc=1&mime=video%2Fmp4&ns=Sef8NCmepN_ib_sNrpO87u8V&rqh=1&cnr=14&ratebypass=yes&dur=900.493&lmt=1696927758891553&lmw=1&fexp=51565115,51565681,51946838&c=TVHTML5&sefc=1&txp=5538434&n=p9d153FTprS7uQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cpcm2%2Csiu%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AHEqNM4wRgIhAI4i0m3h1OBQPv0JhDX6_wNo71YeNDDyLVWNn52oc962AiEAuqM_l04-i0g0oAOxxN2fm0gnNiZVEqWnbeK5JOkk7hw%3D&redirect_counter=1&rm=sn-h5qz67z&rrc=104&req_id=d161af8b547ea3ee&cms_redirect=yes&cps=162&ipbypass=yes&met=1780004135,&mh=5n&mip=2600:1700:f810:28a0:a5d1:8f09:348e:e5ff&mm=31&mn=sn-5uaezn67&ms=au&mt=1780003743&mv=m&mvi=3&pl=44&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIhAO67mwTZAOH_suvmYFuM_-TZtjHndI2yU2njCaeVSa_6AiABezrkJhgOF1vdLLdbYrJew0OFoZlNZpl1l4jhuZk9pQ%3D%3D"
                  controls
                  autoPlay
                />
              </div>
              <p className="text-slate-400 text-xs mt-4">
                This presentation illustrates our typical consultation method. Contact us securely to begin a custom investigation.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Full Bio Attorney Modal Dialog */}
      {selectedAttorney && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-100 flex flex-col md:flex-row">
            <button 
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-800 p-2 rounded-full cursor-pointer z-10 transition-colors"
              onClick={() => setSelectedAttorney(null)}
            >
              <X size={18} />
            </button>
            
            {/* Attorney Image Column inside Modal */}
            <div className="w-full md:w-2/5 aspect-[3/4] md:aspect-auto bg-slate-50 relative">
              <img 
                alt={selectedAttorney.name} 
                className="w-full h-full object-cover"
                src={selectedAttorney.imageUrl}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Attorney Copy Column */}
            <div className="p-8 md:w-3/5 flex flex-col justify-between">
              <div>
                <span className="bg-blue-50 text-secondary border border-blue-100/50 px-2 rounded text-[10px] font-bold uppercase tracking-wider">
                  NXTGen Defense Elite
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-slate-950 mt-2 mb-1">
                  {selectedAttorney.name}
                </h3>
                <p className="text-secondary text-xs uppercase tracking-widest font-black mb-4">
                  {selectedAttorney.role}
                </p>

                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 mb-1">
                  Specialty Fields
                </h4>
                <p className="text-slate-900 font-semibold text-xs mb-4">
                  {selectedAttorney.specialty}
                </p>

                <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 mb-1">
                  Professional Profile
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {selectedAttorney.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a 
                  href={`mailto:${selectedAttorney.email}`}
                  className="text-secondary hover:underline text-xs font-semibold flex items-center gap-1.5"
                >
                  <Mail size={13} /> {selectedAttorney.email}
                </a>
                <button 
                  onClick={() => {
                    setSelectedAttorney(null);
                    onOpenConsultation();
                  }}
                  className="w-full mt-2 bg-slate-950 hover:bg-secondary text-white py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-colors"
                >
                  Consult Directly with Representative
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ready to Secure Future Section */}
      <section className="bg-secondary text-white py-8 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[100px] sm:text-[180px] font-black uppercase tracking-widest select-none">
            RESULTS
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif mb-2 sm:mb-3">Ready to secure your future?</h3>
            <p className="text-blue-105 text-xs sm:text-base max-w-xl text-slate-200">
              Consult with our elite litigation trial team today. Our preparation starts today. Your custom victory begins here.
            </p>
          </div>
          <button 
            onClick={onOpenConsultation}
            className="w-full md:w-auto whitespace-nowrap bg-white text-secondary hover:bg-slate-950 hover:text-white px-6 py-3.5 sm:px-10 sm:py-5 rounded-xl text-xs font-extrabold uppercase tracking-widest transition-all duration-300 shadow-2xl hover:scale-102 text-center cursor-pointer"
          >
            Free Case Evaluation
          </button>
        </div>
      </section>
    </div>
  );
}
