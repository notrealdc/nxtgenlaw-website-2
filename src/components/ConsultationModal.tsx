import React, { useState } from 'react';
import { X, Calendar, ShieldCheck, Phone, Mail, Award, Check } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [success, setSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetOffice: 'Greensboro HQ',
    area: 'Criminal Defense',
    caseBrief: '',
    agreed: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.caseBrief && formData.agreed) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          targetOffice: 'Greensboro HQ',
          area: 'Criminal Defense',
          caseBrief: '',
          agreed: false
        });
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100 flex flex-col">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-slate-100 hover:bg-slate-200 text-slate-800 p-1.5 sm:p-2 rounded-full cursor-pointer z-10 transition-colors"
        >
          <X size={15} className="sm:w-4 sm:h-4" />
        </button>

        {/* Success screen overlay inside the modal */}
        {success ? (
          <div className="p-6 sm:p-10 text-center space-y-4 sm:space-y-6 flex flex-col items-center justify-center min-h-[360px] sm:min-h-[460px]">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/10">
              <Check size={24} className="sm:hidden" />
              <Check size={32} className="hidden sm:block" />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">Consultation Booked</h3>
              <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                Your priority consultation request has been cataloged immediately. An intake defense associate is reviewing your synopsis.
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-150 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#090644]">
              Expected response frame: Within 1-2 Hours
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-3.5 sm:space-y-5">
            <div className="border-b border-slate-120 pb-2 sm:pb-4">
              <div className="text-[10px] text-secondary font-black uppercase tracking-widest flex items-center gap-1">
                <ShieldCheck size={12} /> NXTGen Executive Case Review
              </div>
              <h3 className="text-lg sm:text-2xl font-serif font-black text-slate-950 mt-1">
                Request Free Evaluation
              </h3>
              <p className="text-slate-500 text-[10.5px] sm:text-[11.5px] mt-1 leading-relaxed">
                Provide essential data regarding the accusation, liability incident, or wrongful injury. Your record stays completely privileged.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[8px] sm:text-[9px] uppercase tracking-widest font-black text-slate-400 mb-1">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jason Keith" 
                    className="w-full px-3 py-1.5 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[8px] sm:text-[9px] uppercase tracking-widest font-black text-slate-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jason@gmail.com" 
                    className="w-full px-3 py-1.5 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-[8px] sm:text-[9px] uppercase tracking-widest font-black text-slate-400 mb-1">Target Office bounds</label>
                  <select 
                    value={formData.targetOffice}
                    onChange={(e) => setFormData({ ...formData, targetOffice: e.target.value })}
                    className="w-full px-3 py-1.5 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus:outline-none focus:border-secondary focus:bg-white transition-colors"
                  >
                    <option>Greensboro HQ</option>
                    <option>Charlotte Office</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[8px] sm:text-[9px] uppercase tracking-widest font-black text-slate-400 mb-1">Practice Concern</label>
                  <select 
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3 py-1.5 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus:outline-none focus:border-secondary focus:bg-white transition-colors"
                  >
                    <option>Criminal Defense</option>
                    <option>Personal Injury & Crash</option>
                    <option>Family & Custody</option>
                    <option>Civil Commercial Claims</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[8px] sm:text-[9px] uppercase tracking-widest font-black text-slate-400 mb-1">Contact Phone</label>
                <input 
                  type="text" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 704-555-0199" 
                  className="w-full px-3 py-1.5 sm:py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[8px] sm:text-[9px] uppercase tracking-widest font-black text-slate-400 mb-1">Brief Description of Circumstances</label>
                <textarea 
                  rows={2}
                  required
                  value={formData.caseBrief}
                  onChange={(e) => setFormData({ ...formData, caseBrief: e.target.value })}
                  placeholder="Describe key charges, accident facts, or dispute points..."
                  className="w-full p-2 sm:p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-0.5">
                <input 
                  type="checkbox" 
                  id="certify-modal"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="mt-0.5 cursor-pointer scale-90 sm:scale-100"
                />
                <label htmlFor="certify-modal" className="text-slate-500 text-[9px] sm:text-[10px] cursor-pointer select-none leading-relaxed">
                  I consent to sharing this dynamic intake with NXTGen Law Group intake officers. All facts are handled with absolute defense confidentiality.
                </label>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-secondary hover:bg-slate-900 text-white font-black uppercase tracking-widest py-2.5 sm:py-3.5 px-6 rounded-xl text-[9px] sm:text-[10px] transition-all flex items-center justify-center gap-1.5 shadow-xl shadow-secondary/15"
            >
              Submit Privileged Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
