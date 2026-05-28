import { Page } from '../types';
import { Award, Compass, HeartHandshake, Scale, Shield, Users } from 'lucide-react';

interface AboutProps {
  onSetPage: (page: Page) => void;
  onOpenConsultation: () => void;
}

export default function About({ onSetPage, onOpenConsultation }: AboutProps) {
  const coreValues = [
    {
      icon: <Scale className="w-8 h-8 text-secondary" />,
      title: 'Aggressive Litigation',
      description: 'We do not compromise. Our practitioners prepare every case as if it is heading directly to a jury trial.'
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: 'Constitutional Defense',
      description: 'Protecting your rights from overreaching state entities and massive corporate structures with rigid vigor.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-secondary" />,
      title: 'Elite Dedication',
      description: 'Personalized legal frameworks. Our client portfolio represents high stakes where failure is never an option.'
    }
  ];

  const credentials = [
    { year: '1999', event: 'Firm Founded by Senior Litigators in North Carolina' },
    { year: '2008', event: 'Expanded Greensboro HQ and Litigation Infrastructure' },
    { year: '2015', event: 'Launched Charlotte Downtown Office & Federal Defense Division' },
    { year: '2022', event: 'Broke Records with over $30 Billion overall recovered case settlements' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* About Header */}
      <section className="relative py-8 sm:py-20 bg-slate-50/70 border-b border-slate-100">
        <div className="absolute inset-0 bg-[#090644]/5 blur-3xl rounded-full translate-y-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-4">
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-secondary">
            Uncompromised Counsel
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black font-serif text-slate-900 leading-tight">
            Our Legacy of <span className="text-secondary italic">Justice.</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            NXTGen Law Group was forged in North Carolina with a singular mission: to deliver sophisticated legal counsel and aggressive trial representation to individuals and corporations facing heavy liability.
          </p>
        </div>
      </section>

      {/* Core values */}
      <section className="py-8 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-16">
            <h3 className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#090644] font-bold">The Pillars of Elite Strategy</h3>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 mt-1">Our Core Philosophies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {coreValues.map((val, index) => (
              <div key={index} className="p-5 sm:p-8 bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-lg rounded-2xl transition-all duration-300">
                <div className="mb-4">{val.icon}</div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">{val.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic historical timeline */}
      <section className="py-8 sm:py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-[9px] sm:text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Our Milestones</h3>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900">Litigation Timeline</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
            {credentials.map((cred, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center relative">
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1.5 md:-translate-x-2 w-3.5 md:w-4 h-3.5 md:h-4 bg-secondary rounded-full border-4 border-white z-10" />

                {/* Content boxes alternating layout */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 text-left'}`}>
                  <div className="p-6 bg-white rounded-xl border border-slate-200/60 shadow-sm inline-block max-w-md transition-all duration-300 hover:shadow-md hover:border-slate-300">
                    <span className="text-secondary font-mono text-lg font-black block mb-1">
                      {cred.year}
                    </span>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                      {cred.event}
                    </p>
                  </div>
                </div>
                {/* Empty placeholder for grid balance */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="bg-slate-950 text-white py-10 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-black">Ready to Partner with Elite Counsel?</h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Our firm retains limited active case files to ensure uncompromised devotion, custom research, and severe legal force at trial. Request a defense or recovery evaluation immediately.
          </p>
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button 
              onClick={onOpenConsultation}
              className="bg-secondary text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-secondary transition-all cursor-pointer"
            >
              Consult Free Online Now
            </button>
            <button 
              onClick={() => onSetPage('contact')}
              className="border border-slate-700 hover:border-white text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
            >
              Contact Our Local Offices
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
