import { useState, useEffect, FormEvent } from 'react';
import { MessageSquare, PhoneCall, X, Send, ShieldAlert, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function EmergencyAnsweringWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: ''
  });

  // Prompt a flashing indicator sound or micro notification after 8 seconds
  const [isAlerting, setIsAlerting] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAlerting(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectPreset = (preset: string) => {
    setActivePreset(preset);
    setFormData(prev => ({
      ...prev,
      notes: `EMERGENCY ALERT: Client selected priority issue - "${preset}".`
    }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        setActivePreset(null);
        setFormData({ name: '', phone: '', notes: '' });
      }, 5000); // Keep open for 5s to show dispatch notice
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-55 font-sans">
      <AnimatePresence>
        
        {/* Flashing advisory tooltip above bubble */}
        {!isOpen && isAlerting && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute bottom-16 right-0 bg-[#090644] text-white py-2 px-4 rounded-xl border border-blue-900 shadow-xl pointer-events-none mb-2 whitespace-nowrap"
          >
            <p className="text-xs font-bold text-slate-100 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Chat Now
            </p>
          </motion.div>
        )}

        {/* Dynamic Chat Dialog Card */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            className="absolute bottom-16 right-0 w-80 sm:w-88 bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden mb-2"
          >
            {/* Header branding band */}
            <div className="bg-slate-950 text-white p-4.5 flex justify-between items-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]" />
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-950 animate-ping" />
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-950" />
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <PhoneCall size={16} className="text-[#D4AF37]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#D4AF37]">
                    Answering Service
                  </h4>
                  <p className="text-[10px] text-slate-350 leading-none mt-1 font-bold">
                    Emergency Duty Litigator On-Line
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main dialog body */}
            <div className="p-5 space-y-4">
              {isSubmitted ? (
                /* Successful dispatch screen */
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <h5 className="text-sm font-black text-slate-900 uppercase">Emergency Dispatch Triggered</h5>
                  <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                    We have transmitted your alert packet to the active North Carolina duty counsel. Expect a call at <span className="font-mono text-secondary font-black">{formData.phone}</span> within 15 minutes.
                  </p>
                  <p className="text-[9.5px] text-slate-400 font-medium">Please keep your phone line open.</p>
                </div>
              ) : (
                /* Intake Form */
                <div className="space-y-4">
                  {!activePreset ? (
                    /* Step 1: Select Preset Crisis Type */
                    <div className="space-y-3">
                      <p className="text-[11px] font-semibold text-slate-600 leading-relaxed text-center">
                        Select your priority legal threat to alert our on-call counsel immediately:
                      </p>
                      
                      <div className="space-y-2">
                        <button
                          onClick={() => handleSelectPreset('Arrest / Police Questioning')}
                          className="w-full text-left p-3 rounded-xl border border-slate-200/80 hover:border-red-400 bg-red-50/20 hover:bg-red-50/50 transition-all font-sans text-xs font-bold text-red-900 flex justify-between items-center"
                        >
                          <span>🚨 Arrest / Police Contact</span>
                          <span className="text-[9px] uppercase tracking-wider font-mono text-red-700 font-extrabold bg-red-100 px-1.5 py-0.5 rounded">Severe</span>
                        </button>
                        <button
                          onClick={() => handleSelectPreset('Highway Wreck / Crash Injury')}
                          className="w-full text-left p-3 rounded-xl border border-slate-200/80 hover:border-amber-400 bg-amber-50/20 hover:bg-amber-50/50 transition-all font-sans text-xs font-bold text-slate-900 flex justify-between items-center"
                        >
                          <span>🚛 Truck Collision / Injury</span>
                          <span className="text-[9px] uppercase tracking-wider font-mono text-amber-700 font-extrabold bg-amber-100 px-1.5 py-0.5 rounded">Urgent</span>
                        </button>
                        <button
                          onClick={() => handleSelectPreset('Emergency Judicial Hearing')}
                          className="w-full text-left p-3 rounded-xl border border-slate-200/80 hover:border-secondary hover:bg-slate-50 transition-all font-sans text-xs font-bold text-slate-900 flex justify-between items-center"
                        >
                          <span>⚖️ Court Hearing / Custody Deadlock</span>
                          <span className="text-[9px] uppercase tracking-wider font-mono text-slate-500 font-extrabold bg-slate-100 px-1.5 py-0.5 rounded">Hearing</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Step 2: Instant Callback Form */
                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div className="flex justify-between items-center pb-1.5 border-b border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <span>Factual Callback Request</span>
                        <button 
                          type="button" 
                          onClick={() => setActivePreset(null)}
                          className="hover:text-red-500 text-slate-400"
                        >
                          Change alert category
                        </button>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[9px] uppercase tracking-widest font-bold text-slate-400">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Samuel Green"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[9px] uppercase tracking-widest font-bold text-slate-400">Direct Telephone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 336-555-0100"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-mono text-xs font-bold focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/15"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-red-650 hover:bg-red-700 text-white font-extrabold uppercase tracking-wider py-2.5 rounded-lg text-[10.5px] transition-colors flex justify-center items-center gap-1.5 bg-red-600 shadow-md shadow-red-200"
                      >
                        Transmit Callback Dispatch
                        <Send size={11} />
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Ethical notice footer */}
            <div className="bg-slate-50 p-3 text-[8.5px] text-slate-400 border-t border-slate-100 leading-normal font-medium text-center">
              Active answering monitors process conflict validations on priority tickets. Transmitted alerts do not register standard representation agreements.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Float Toggle Bubble */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsAlerting(false);
        }}
        className="bg-secondary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#D4AF37] hover:scale-105 active:scale-95 transition-all duration-300 relative group"
        title="24/7 After-Hours Intake"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="relative">
            {/* Pulsing beacon */}
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-secondary animate-ping" />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-secondary" />
            <MessageSquare size={24} />
          </div>
        )}
      </button>
    </div>
  );
}
