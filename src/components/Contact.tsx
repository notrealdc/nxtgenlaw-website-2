import React, { useState } from 'react';
import { Mail, Phone, MapPin, Landmark, Clock, Send, Calendar, CheckSquare } from 'lucide-react';

export default function Contact() {
  const [success, setSuccess] = useState<boolean>(false);
  const [activeMapTab, setActiveMapTab] = useState<'greensboro' | 'charlotte'>('greensboro');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetOffice: 'Greensboro HQ',
    category: 'Criminal Defense',
    message: '',
    agreeConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        targetOffice: 'Greensboro HQ',
        category: 'Criminal Defense',
        message: '',
        agreeConsent: false
      });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Visual Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-6 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-2 sm:space-y-3">
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] font-black uppercase text-secondary">Connect With Trial Litigators</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif text-slate-900">Secure Consultation</h1>
          <p className="text-slate-550 text-xs max-w-xl mx-auto text-slate-500">
            Our teams operate direct consultation desks in Greensboro and Charlotte. Please choose your proximity or field structure below.
          </p>
        </div>
      </section>

      {/* Main Grid Contact & Map info */}
      <section className="py-8 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column: Traditional Form */}
            <div className="bg-slate-50 p-4 sm:p-8 rounded-2xl border border-slate-100/80 shadow-xl space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-slate-900 border-b border-slate-200/60 pb-3 sm:pb-4 text-left">
                Let's Review Your Case Matrix
              </h3>

              {success ? (
                <div className="bg-green-500 text-white p-6 rounded-xl space-y-2 border border-green-600/10">
                  <h4 className="font-bold text-base flex items-center gap-1.5">
                    <CheckSquare size={18} /> Consulting Ticket Logged
                  </h4>
                  <p className="text-xs text-green-50">
                    We have registered your legal review submission. Our intake duty officer will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Your Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Patterson" 
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sam@pattersonholding.com" 
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Jurisdiction Office Location</label>
                      <select 
                        value={formData.targetOffice}
                        onChange={(e) => setFormData({ ...formData, targetOffice: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-xs focus:outline-none focus:border-secondary transition-all"
                      >
                        <option>Greensboro HQ (Central District)</option>
                        <option>Charlotte Office (Metro District)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Legal Area of Inquiry</label>
                      <select 
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-xs focus:outline-none focus:border-secondary transition-all"
                      >
                        <option>Criminal Defense Trial</option>
                        <option>Personal Injury & Crash Recovery</option>
                        <option>Family & Custody Representation</option>
                        <option>Civil Commercial Litigation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Contact Phone</label>
                    <input 
                      type="text" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 336-555-0100" 
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">Brief Case Synopsis (Non-Confidential)</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Summarize the core liability, timeline, or charges facing your integrity..."
                      className="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input 
                      type="checkbox" 
                      id="consent-check"
                      required
                      checked={formData.agreeConsent}
                      onChange={(e) => setFormData({ ...formData, agreeConsent: e.target.checked })}
                      className="mt-1 cursor-pointer"
                    />
                    <label htmlFor="consent-check" className="text-slate-500 text-[11px] cursor-pointer select-none">
                      I understand that submitting this message does not create an attorney-client relationship. Confidential details will be shared subsequently.
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-secondary hover:bg-slate-900 text-white font-extrabold uppercase tracking-widest py-4 px-6 rounded-xl text-[10px] transition-all flex items-center justify-center gap-1.5 shadow-xl shadow-secondary/15"
                  >
                    Send Professional Intake Form
                    <Send size={12} />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Factual Office Details & Interactive Google Maps Embeds */}
            <div className="space-y-4 sm:space-y-8">
              <div className="space-y-3 sm:space-y-6">
                <h3 className="text-lg sm:text-2xl font-serif font-black text-slate-900 text-left">
                  Our Jurisdictions & Offices
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Greensboro info block - Toggles Greensboro Map */}
                  <div 
                    onClick={() => setActiveMapTab('greensboro')}
                    className={`p-4 sm:p-6 rounded-xl space-y-2 sm:space-y-3 cursor-pointer border transition-all duration-300 ${
                      activeMapTab === 'greensboro' 
                        ? 'bg-blue-50/50 border-secondary shadow-md' 
                        : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex justify-between items-center text-secondary">
                      <h4 className="font-serif font-bold text-[14px] sm:text-[16px]">Greensboro HQ</h4>
                      <Landmark size={16} className={activeMapTab === 'greensboro' ? 'text-secondary font-black' : 'text-slate-400'} />
                    </div>
                    <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-semibold text-left">
                      Primary central office handling state defense, massive civil claims research, and appellate briefs.
                    </p>
                    <p className="text-slate-800 text-[11px] font-bold text-left">301 S Elm St, Greensboro, NC 27401</p>
                    <div className="text-[11px] font-bold text-slate-705 flex items-center gap-1.5 pt-2 border-t border-slate-200">
                      <Phone size={12} /> 1-336-555-0100
                    </div>
                  </div>

                  {/* Charlotte info block - Toggles Charlotte Map */}
                  <div 
                    onClick={() => setActiveMapTab('charlotte')}
                    className={`p-4 sm:p-6 rounded-xl space-y-2 sm:space-y-3 cursor-pointer border transition-all duration-300 ${
                      activeMapTab === 'charlotte' 
                        ? 'bg-blue-50/50 border-secondary shadow-md' 
                        : 'bg-slate-50 border-slate-100 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex justify-between items-center text-secondary">
                      <h4 className="font-serif font-bold text-[14px] sm:text-[16px]">Charlotte Uptown</h4>
                      <Landmark size={16} className={activeMapTab === 'charlotte' ? 'text-secondary font-black' : 'text-slate-400'} />
                    </div>
                    <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-semibold text-left">
                      Strategic metropolitan satellite focusing on white collar crime hearings, property disputes, and catastrophic trial prep.
                    </p>
                    <p className="text-slate-800 text-[11px] font-bold text-left">101 S Tryon St, Charlotte, NC 28280</p>
                    <div className="text-[11px] font-bold text-slate-705 flex items-center gap-1.5 pt-2 border-t border-slate-200">
                      <Phone size={12} /> 1-704-555-0199
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Maps container depending on activeMapTab */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden relative">
                <div className="bg-slate-900 text-white px-3 py-2 sm:px-6 sm:py-3.5 flex justify-between items-center text-[9px] sm:text-[11px] font-black uppercase tracking-widest">
                  <span>Show: {activeMapTab === 'greensboro' ? 'Greensboro HQ Google Map' : 'Charlotte Office Map'}</span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse" />
                </div>

                {/* Map Iframe viewport */}
                <div className="aspect-video w-full bg-slate-100 relative">
                  {activeMapTab === 'greensboro' ? (
                    <iframe
                      title="Greensboro HQ Map Embed"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.965706591398!2d-79.79155092348574!3d36.06990267242278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853192080dfd7f7%3A0xe5a1bdfd924db004!2s301%20S%20Elm%20St%2C%20Greensboro%2C%20NC%2027401!5e0!3m2!1sen!2sus!4v1716864000000!5m2!1sen!2sus"
                      className="w-full h-full border-0"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <iframe
                      title="Charlotte Uptown Map Embed"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.970177708579!2d-80.84435882349714!3d35.227086872733975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a02f61e7cb7b%3A0x67baef1a4c4fc3cb!2s101%20S%20Tryon%20St%2C%20Charlotte%2C%20NC%2028280!5e0!3m2!1sen!2sus!4v1716864000000!5m2!1sen!2sus"
                      className="w-full h-full border-0"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>

                {/* Building parking & access annotations */}
                <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-2">
                  <span className="text-[9px] uppercase tracking-widest font-black text-slate-500">Access & Validation Details</span>
                  {activeMapTab === 'greensboro' ? (
                    <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                      <strong>Parking:</strong> Client validation is issued for the parking decks off Washington Street. Walk directly to the 301 Building and take elevators to Floor 5.
                    </p>
                  ) : (
                    <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                      <strong>Parking:</strong> Park inside the 101 Tryon underground garage. Bring your ticket to the front reception, where parking is 100% validated for active consults. Floor 12 reception desk.
                    </p>
                  )}
                </div>
              </div>

              {/* Working Hours card */}
              <div className="p-6 rounded-xl bg-slate-950 text-white relative overflow-hidden shadow-md">
                <h4 className="font-serif text-sm font-bold mb-3 flex items-center gap-2 text-amber-400">
                  <Clock size={15} /> Proximity & Consultation Calendar
                </h4>
                <div className="space-y-2 text-xs text-slate-350 leading-relaxed font-medium">
                  <p>
                    All localized meetings are subject to scheduled appointment validations. Contact our support desk below to inspect attorney calendars.
                  </p>
                  <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-[10px] uppercase tracking-wider text-slate-400 font-black">
                    <div>
                      <span>Monday - Friday</span>
                      <span className="block text-white text-xs mt-0.5 font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div>
                      <span>Incident intake</span>
                      <span className="block text-amber-400 text-xs mt-0.5 font-black">24/7 Monitored Desk</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
