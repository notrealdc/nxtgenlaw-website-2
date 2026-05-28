import React, { useState, useRef } from 'react';
import { 
  Check, FileText, Upload, Send, School, Library, Award, Calendar, 
  Map, Phone, Mail, ChevronRight, ChevronLeft, Info, HelpCircle, 
  Sparkles, ShieldCheck, User, Camera, BookOpen
} from 'lucide-react';

export default function Launchpad() {
  const [step, setStep] = useState<number>(1);
  const [showFullIntro, setShowFullIntro] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Attachment states (storing simulated metadata or actual files)
  const [resumeFile, setResumeFile] = useState<{ name: string; size: string } | null>(null);
  const [headshotFile, setHeadshotFile] = useState<{ name: string; size: string } | null>(null);

  // File drag states
  const [resumeDrag, setResumeDrag] = useState<boolean>(false);
  const [headshotDrag, setHeadshotDrag] = useState<boolean>(false);

  // Hidden file input refs
  const resumeRef = useRef<HTMLInputElement>(null);
  const headshotRef = useRef<HTMLInputElement>(null);

  // Form Fields State
  const [formData, setFormData] = useState({
    emailConsentChecked: true,
    fullName: '',
    emailAddress: 'fouldcllc@gmail.com', // default/prefilled based on account context
    phoneNumber: '',
    classification: '', // 'Junior' | 'Senior'
    inspiration: '',
    whyParticipate: '',
    leadershipStory: '',
    clubsOrganizations: '',
    leaderQualities: '',
    anythingElse: '',
    signature: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Real or simulation attachment loaders
  const handleFileChange = (type: 'resume' | 'headshot', file: File | null) => {
    if (file) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [type]: "File exceeds the 10MB limit." }));
        return;
      }
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[type];
        return copy;
      });
      if (type === 'resume') {
        setResumeFile({ name: file.name, size: `${sizeMB} MB` });
      } else {
        setHeadshotFile({ name: file.name, size: `${sizeMB} MB` });
      }
    }
  };

  const simulateUpload = (type: 'resume' | 'headshot') => {
    setErrors(prev => {
      const copy = { ...prev };
      delete copy[type];
      return copy;
    });
    if (type === 'resume') {
      setResumeFile({ name: 'Candidate_Resume_Summer2025.pdf', size: '1.42 MB' });
    } else {
      setHeadshotFile({ name: 'Professional_Headshot_Portrait.png', size: '2.85 MB' });
    }
  };

  const handleDragOver = (e: React.DragEvent, type: 'resume' | 'headshot') => {
    e.preventDefault();
    e.stopPropagation();
    if (type === 'resume') {
      setResumeDrag(true);
    } else {
      setHeadshotDrag(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent, type: 'resume' | 'headshot') => {
    e.preventDefault();
    e.stopPropagation();
    if (type === 'resume') {
      setResumeDrag(false);
    } else {
      setHeadshotDrag(false);
    }
  };

  const handleDrop = (e: React.DragEvent, type: 'resume' | 'headshot') => {
    e.preventDefault();
    e.stopPropagation();
    if (type === 'resume') {
      setResumeDrag(false);
    } else {
      setHeadshotDrag(false);
    }

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(type, e.dataTransfer.files[0]);
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
      if (!formData.emailAddress.trim()) {
        newErrors.emailAddress = 'Email Address is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
        newErrors.emailAddress = 'Please enter a valid email address.';
      }
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone Number is required.';
      }
      if (!formData.classification) {
        newErrors.classification = 'Please select your Academic Classification.';
      }
    } 
    else if (currentStep === 2) {
      if (!resumeFile) {
        newErrors.resume = 'You must upload your Resume (or simulate an upload) to proceed.';
      }
      if (!headshotFile) {
        newErrors.headshot = 'You must upload a Headshot (or simulate an upload) to proceed.';
      }
    } 
    else if (currentStep === 3) {
      if (!formData.inspiration.trim() || formData.inspiration.trim().length < 15) {
        newErrors.inspiration = 'Please write what inspires your interest in law or justice (minimum 15 characters).';
      }
      if (!formData.whyParticipate.trim() || formData.whyParticipate.trim().length < 15) {
        newErrors.whyParticipate = 'Please describe why you want to participate in the Pre-Law Launchpad (minimum 15 characters).';
      }
      if (!formData.leadershipStory.trim() || formData.leadershipStory.trim().length < 15) {
        newErrors.leadershipStory = 'Please describe a leadership or responsibility moment (minimum 15 characters).';
      }
    } 
    else if (currentStep === 4) {
      if (!formData.clubsOrganizations.trim()) {
        newErrors.clubsOrganizations = 'Please answer this field about your student leadership and club participation (or write N/A).';
      }
      if (!formData.leaderQualities.trim() || formData.leaderQualities.trim().length < 15) {
        newErrors.leaderQualities = 'Please detail which qualities you believe a great lawyer should have (minimum 15 characters).';
      }
      if (!formData.anythingElse.trim()) {
        newErrors.anythingElse = 'Please complete this field (or write N/A).';
      }
    } 
    else if (currentStep === 5) {
      if (!formData.signature.trim()) {
        newErrors.signature = 'Final signature confirmation is required.';
      } else if (formData.signature.trim().toLowerCase() !== formData.fullName.trim().toLowerCase()) {
        newErrors.signature = `Signature must match your typed Full Name ("${formData.fullName}") to confirm accuracy.`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(5)) {
      setSubmitting(true);
      // Simulate real-world database synchronization
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }, 1800);
    }
  };

  // Steps descriptors for step indicator HUD
  const stepsList = [
    { num: 1, title: 'Profile' },
    { num: 2, title: 'Uploads' },
    { num: 3, title: 'Purpose' },
    { num: 4, title: 'Leadership' },
    { num: 5, title: 'Affirmation' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50/70">
      
      {/* Program Branding & Introduction */}
      <section className="bg-[#0b1d3a] text-white relative overflow-hidden py-8 md:py-16 px-4 md:px-6">
        {/* Faded Background Image of the classical courthouse */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMDU8ZEPXuhKBF1xtw8bkfrMzEa6F0XoLIshoQ7rVpT304zqpD1_OAEZN&s=10" 
            alt="Courthouse Background" 
            className="w-full h-full object-cover object-center opacity-15 mix-blend-overlay filter brightness-90 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1d3a]/60 via-[#0b1d3a]/80 to-[#0b1d3a]" />
        </div>

        {/* Subtle grid accent background */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left Description Area */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-accent-gold/20 text-accent-gold border border-accent-gold/30 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles size={11} className="sm:size-[13px]" /> Cohort Summer 2025 Program
              </span>
              
              <div className="space-y-1">
                <p className="text-slate-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                  Guilford County Association of Black Lawyers Presents
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-black tracking-tight leading-none text-glow-blue">
                  The Pre-Law Launchpad
                </h1>
                <p className="text-accent-gold/90 text-xs sm:text-sm font-semibold italic">
                  In collaboration with NXTGENLAW
                </p>
              </div>

              {/* Condensed Text or Full Text dependent on showFullIntro toggling on mobile */}
              <div className="space-y-3 text-slate-200 text-xs leading-relaxed">
                <p className="text-accent-gold font-bold text-sm border-l-2 border-accent-gold pl-2">
                  "Step into your future with purpose."
                </p>
                
                <p className="hidden md:block">
                  Pre-Law Launchpad is a one-day immersive mentorship experience created for high school juniors and seniors who are already walking in their excellence and ready to explore the legal world up close.
                </p>

                {(!showFullIntro) ? (
                  <div className="md:hidden space-y-2">
                    <p>
                      Pre-Law Launchpad is a premium one-day courtroom immersion and mentorship cohort for rising leaders ready to connect with attorneys, judges, and legal professionals.
                    </p>
                    <button 
                      type="button"
                      onClick={() => setShowFullIntro(true)}
                      className="text-accent-gold hover:text-white underline font-bold text-xs"
                    >
                      Read full cohort description & see courtroom photo (+)
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3 animate-fade-in md:hidden">
                    <p>
                      Pre-Law Launchpad is a one-day immersive mentorship and networking experience created for high school juniors and seniors who are already walking in their excellence and ready to explore the legal world up close.
                    </p>
                    <p>
                      This isn’t just a program—it’s a launchpad. A space where rising leaders connect with Black attorneys, judges, and legal professionals who are living examples of the paths students like you can follow. Through courtroom visits, behind-the-scenes law firm tours, and guided roundtable discussions, students will gain hands-on insight into what it truly means to pursue a legal career.
                    </p>
                    <button 
                      type="button"
                      onClick={() => setShowFullIntro(false)}
                      className="text-accent-gold hover:text-white underline font-bold text-xs"
                    >
                      Collapse details (-)
                    </button>
                  </div>
                )}

                <p className="font-semibold text-slate-100 hidden md:block">
                  If you’re a student with drive, vision, and a passion for justice, your seat is waiting. Your journey begins now.
                </p>
              </div>

              {/* Coordinator Point of Contact Block */}
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1 text-xs">
                <p className="text-[10px] sm:text-xs font-bold tracking-wider text-accent-gold uppercase flex items-center gap-1">
                  <HelpCircle size={12} className="sm:size-[14px]" /> Need Clarity Before Applying?
                </p>
                <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                  Feel free to reach out to **YaAsia Brown, Program Coordinator**, at{" "}
                  <span className="text-white font-bold">(336) 419-8243</span> or email{" "}
                  <a href="mailto:ycbrown1@aggies.ncat.edu" className="text-accent-gold underline hover:text-white transition-colors">
                    ycbrown1@aggies.ncat.edu
                  </a>.
                </p>
              </div>
            </div>

            {/* Right Interactive Image Card (hidden on mobile if not expanded) */}
            <div className={`lg:col-span-5 space-y-4 ${showFullIntro ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 text-slate-800">
                <div className="relative h-40 sm:h-52 lg:h-60 bg-slate-900">
                  <img 
                    src="/src/assets/images/regenerated_image_1779853914180.png"
                    alt="Kaleb in Guilford County Courtroom" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="bg-accent-gold text-slate-950 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider">
                      Courtroom Immersion
                    </span>
                    <h4 className="text-white font-serif font-bold text-xs mt-0.5">Courtroom Advocacy Case Study</h4>
                  </div>
                </div>
                
                <div className="p-4 space-y-2.5">
                  <p className="text-[11px] text-slate-600 leading-normal">
                    The Pre-Law Launchpad delivers exclusive, immersive courtroom legal access. As captured above, **Kaleb**—an exceptionally bright 3rd grader—stepped into the courtroom to file official documents and deliver oral motions.
                  </p>
                  
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-1 text-slate-500">
                      <Calendar size={12} className="text-red-500" />
                      <span className="font-semibold">Application Deadline:</span>
                    </div>
                    <span className="bg-red-50 text-red-600 border border-red-100 px-2 py-0.5 rounded font-bold">
                      July 25, 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Application Container Block */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 md:py-12">
        
        {/* Step Indicator Navigation HUD */}
        <div className="mb-6 max-w-2xl mx-auto">
          {/* Mobile progress layout style */}
          <div className="sm:hidden text-center bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm mb-4">
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-extrabold uppercase tracking-wider mb-1.5">
              <span>Section Progress</span>
              <span className="text-secondary font-black">{step} / 5</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
              <div 
                className="h-full bg-secondary rounded-full transition-all duration-300" 
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
            <div className="text-center text-[9px] text-[#0b1d3a] font-extrabold uppercase tracking-widest mt-1">
              Active: {stepsList[step - 1].title}
            </div>
          </div>

          <div className="hidden sm:flex justify-between items-center relative">
            {/* Connecting lines */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-secondary transition-all duration-300 z-0"
              style={{ width: `${((step - 1) / 4) * 100}%` }}
            />

            {stepsList.map((s) => (
              <div key={s.num} className="relative z-10 flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => {
                    // Allowed to jump back to any previous step or next step if validated
                    if (s.num <= step) {
                      setStep(s.num);
                    } else {
                      // Check validation for current step before jumping forward
                      if (validateStep(step)) {
                        setStep(s.num);
                      }
                    }
                  }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-300 ${
                    step === s.num 
                      ? 'bg-secondary text-white border-secondary ring-4 ring-secondary/20 font-black' 
                      : step > s.num 
                        ? 'bg-green-500 text-white border-green-500' 
                        : 'bg-white text-slate-400 border-slate-200'
                  }`}
                >
                  {step > s.num ? <Check size={16} /> : s.num}
                </button>
                <span className={`text-[10px] font-bold uppercase tracking-wider mt-2 transition-all ${
                  step === s.num ? 'text-secondary font-black' : 'text-slate-400'
                }`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Box - Either Output receipts or intake */}
        {!submitted ? (
          <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden transition-all duration-300">
            
            {/* Google Identity Verified Notice Block */}
            <div className="bg-slate-50 border-b border-slate-100 px-3 sm:px-8 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
              <div className="space-y-0.5">
                <p className="font-bold text-slate-700 flex items-center gap-1 text-[11px] sm:text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 block animate-pulse" />
                  fouldcllc@gmail.com
                  <span className="text-slate-400 font-normal hover:underline cursor-pointer text-[10px]">(Switch account)</span>
                </p>
                <p className="text-slate-500 text-[10px] sm:text-[11px] leading-snug">
                  Your Google credentials will be recorded with your form files.
                </p>
              </div>
              <div className="bg-green-50 border border-green-100 text-green-700 px-2 py-0.5 rounded font-bold text-[9px] uppercase tracking-wider flex items-center gap-0.5 self-end sm:self-auto">
                <ShieldCheck size={12} /> Responses Tracked
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              
              {/* Form Indicator / Error Alerts */}
              {Object.keys(errors).length > 0 && (
                <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-xs font-semibold text-red-700 flex items-start gap-2.5">
                  <Info size={16} className="mt-0.5" />
                  <div>
                    <p className="font-bold">Please complete the required fields in this step:</p>
                    <ul className="list-disc pl-4 mt-1 space-y-1 font-medium text-red-600">
                      {Object.values(errors).map((err, idx) => (
                        <li key={idx}>{err}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Step 1: Profile & Classification */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2 flex items-center gap-2">
                    <User className="text-secondary select-none" size={16} />
                    <h3 className="text-sm sm:text-base font-serif font-black text-slate-800">
                      Step 1: Applicant Profile
                    </h3>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50 space-y-2">
                    <label className="flex items-start gap-1.5 font-medium text-xs text-slate-600 cursor-pointer select-none">
                      <input 
                        type="checkbox"
                        checked={formData.emailConsentChecked}
                        onChange={(e) => setFormData({ ...formData, emailConsentChecked: e.target.checked })}
                        className="mt-0.5 cursor-pointer rounded border-slate-300 text-secondary focus:ring-secondary w-3.5 h-3.5"
                      />
                      <div>
                        <span className="font-bold text-slate-800 text-[11px] sm:text-xs">Email consent *</span>
                        <p className="text-slate-500 text-[10px] mt-0.5">Include **fouldcllc@gmail.com** with my responses.</p>
                      </div>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Kaleb Sterling"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium"
                      />
                      {errors.fullName && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        placeholder="e.g. fouldcllc@gmail.com"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium"
                      />
                      {errors.emailAddress && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{errors.emailAddress}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="e.g. (336) 555-0199"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium"
                      />
                      {errors.phoneNumber && <p className="text-red-500 text-[10px] mt-0.5 font-semibold">{errors.phoneNumber}</p>}
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-1">
                        Academic Classification <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Junior', 'Senior'].map((cl) => (
                          <button
                            key={cl}
                            type="button"
                            onClick={() => setFormData({ ...formData, classification: cl })}
                            className={`py-2 px-2 rounded-lg border text-[11px] font-bold uppercase tracking-wider text-center transition-all ${
                              formData.classification === cl
                                ? 'bg-secondary text-white border-secondary shadow shadow-secondary/10 font-black'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {cl}
                          </button>
                        ))}
                      </div>
                      {errors.classification && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.classification}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Document Uploads Zone */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2 flex items-center gap-2">
                    <Camera className="text-secondary select-none" size={16} />
                    <h3 className="text-sm sm:text-base font-serif font-black text-slate-800">
                      Step 2: Supporting Credentials
                    </h3>
                  </div>

                  {/* Resume Upload Box */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="block text-[9px] uppercase font-bold tracking-widest text-slate-400">
                        Upload Your Resume <span className="text-red-500">*</span>
                      </label>
                      <button 
                        type="button" 
                        onClick={() => simulateUpload('resume')}
                        className="text-[9px] font-bold uppercase tracking-wider text-accent-gold underline hover:text-secondary"
                      >
                        ⚡ Simulate CV Upload
                      </button>
                    </div>

                    <div 
                      onDragOver={(e) => handleDragOver(e, 'resume')}
                      onDragLeave={(e) => handleDragLeave(e, 'resume')}
                      onDrop={(e) => handleDrop(e, 'resume')}
                      onClick={() => resumeRef.current?.click()}
                      className={`border border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                        resumeDrag 
                          ? 'border-secondary bg-blue-50/20' 
                          : resumeFile 
                            ? 'border-green-500 bg-green-50/5' 
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100/30'
                      }`}
                    >
                      <input 
                        type="file" 
                        ref={resumeRef}
                        onChange={(e) => handleFileChange('resume', e.target.files?.[0] || null)}
                        accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png" 
                        className="hidden" 
                      />
                      <div className="flex flex-col items-center justify-center space-y-1">
                        {resumeFile ? (
                          <>
                            <FileText className="text-green-500 w-7 h-7 sm:w-8 sm:h-8 animate-fade-in" />
                            <span className="text-xs font-bold text-green-700">{resumeFile.name} (Attached)</span>
                            <span className="text-[9px] text-slate-400">Click to change</span>
                          </>
                        ) : (
                          <>
                            <Upload className="text-slate-400 w-7 h-7 sm:w-8 sm:h-8" />
                            <span className="text-xs font-bold text-slate-700">Tap to upload / Drop Resume template</span>
                            <span className="text-[9px] text-slate-400">PDF, Word, or Image. Max 10MB.</span>
                          </>
                        )}
                      </div>
                    </div>
                    {errors.resume && <p className="text-red-500 text-[10px] font-semibold">{errors.resume}</p>}
                  </div>

                  {/* Headshot Upload Box */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="block text-[9px] uppercase font-bold tracking-widest text-slate-400">
                        Upload a Headshot <span className="text-red-500">*</span>
                      </label>
                      <button 
                        type="button" 
                        onClick={() => simulateUpload('headshot')}
                        className="text-[9px] font-bold uppercase tracking-wider text-accent-gold underline hover:text-secondary"
                      >
                        ⚡ Simulate Image Upload
                      </button>
                    </div>

                    <div 
                      onDragOver={(e) => handleDragOver(e, 'headshot')}
                      onDragLeave={(e) => handleDragLeave(e, 'headshot')}
                      onDrop={(e) => handleDrop(e, 'headshot')}
                      onClick={() => headshotRef.current?.click()}
                      className={`border border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                        headshotDrag 
                          ? 'border-secondary bg-blue-50/20' 
                          : headshotFile 
                            ? 'border-green-500 bg-green-50/5' 
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100/30'
                      }`}
                    >
                      <input 
                        type="file" 
                        ref={headshotRef}
                        onChange={(e) => handleFileChange('headshot', e.target.files?.[0] || null)}
                        accept=".jpg,.jpeg,.png,.pdf" 
                        className="hidden" 
                      />
                      <div className="flex flex-col items-center justify-center space-y-1">
                        {headshotFile ? (
                          <>
                            <User className="text-green-500 w-7 h-7 sm:w-8 sm:h-8 animate-fade-in" />
                            <span className="text-xs font-bold text-green-700">{headshotFile.name} (Attached)</span>
                            <span className="text-[9px] text-slate-400">Click to change</span>
                          </>
                        ) : (
                          <>
                            <Camera className="text-slate-400 w-7 h-7 sm:w-8 sm:h-8" />
                            <span className="text-xs font-bold text-slate-700">Tap to upload / Drop Portrait Headshot</span>
                            <span className="text-[9px] text-slate-400">JPG, PNG, PDF. Max 10MB.</span>
                          </>
                        )}
                      </div>
                    </div>
                    {errors.headshot && <p className="text-red-500 text-[10px] font-semibold">{errors.headshot}</p>}
                  </div>

                </div>
              )}

              {/* Step 3: Essays - Chapter 1 */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2 flex items-center gap-2">
                    <BookOpen className="text-secondary select-none" size={16} />
                    <h3 className="text-sm sm:text-base font-serif font-black text-slate-800">
                      Step 3: Aspirational Perspectives (Part I)
                    </h3>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 leading-tight">
                      What inspires your interest in law or Justice? <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={2}
                      value={formData.inspiration}
                      onChange={(e) => setFormData({ ...formData, inspiration: e.target.value })}
                      placeholder="Discuss societal systems, historic landmark cases, local trials or personal callings..."
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none font-medium leading-relaxed"
                    />
                    {errors.inspiration && <p className="text-red-500 text-[10px] font-semibold">{errors.inspiration}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 leading-tight">
                      Why do you want to participate in the Pre-Law Launchpad? <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={2}
                      value={formData.whyParticipate}
                      onChange={(e) => setFormData({ ...formData, whyParticipate: e.target.value })}
                      placeholder="Share your specific program goals, networking outcomes, or judicial aspirations..."
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none font-medium leading-relaxed"
                    />
                    {errors.whyParticipate && <p className="text-red-500 text-[10px] font-semibold">{errors.whyParticipate}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 leading-tight">
                      Describe a time when you showed leadership, responsibility, or stood up for what is right. <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={2}
                      value={formData.leadershipStory}
                      onChange={(e) => setFormData({ ...formData, leadershipStory: e.target.value })}
                      placeholder="Describe a school moment, debate club, or community stand that defined your integrity..."
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none font-medium leading-relaxed"
                    />
                    {errors.leadershipStory && <p className="text-red-500 text-[10px] font-semibold">{errors.leadershipStory}</p>}
                  </div>
                </div>
              )}

              {/* Step 4: Essays - Chapter 2 */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2 flex items-center gap-2">
                    <Award className="text-secondary select-none" size={16} />
                    <h3 className="text-sm sm:text-base font-serif font-black text-slate-800">
                      Step 4: Academic Leadership & Attributes (Part II)
                    </h3>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 leading-tight">
                      Do you currently participate in any student leadership, clubs, or organizations at your school? <span className="text-red-500">*</span>
                    </label>
                    <p className="text-[10px] text-slate-400 block mb-0.5">If you are not currently in any clubs, write "No" or outline other responsibilities.</p>
                    <textarea 
                      rows={2}
                      value={formData.clubsOrganizations}
                      onChange={(e) => setFormData({ ...formData, clubsOrganizations: e.target.value })}
                      placeholder="e.g. Student Council, Debate Team, Varsity Soccer, or N/A..."
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none font-medium leading-relaxed"
                    />
                    {errors.clubsOrganizations && <p className="text-red-500 text-[10px] font-semibold">{errors.clubsOrganizations}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 leading-tight">
                      What qualities do you believe a great lawyer should have and see in yourself? <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={2}
                      value={formData.leaderQualities}
                      onChange={(e) => setFormData({ ...formData, leaderQualities: e.target.value })}
                      placeholder="Discuss empathy, sharp reasoning, articulate speaking, high-moral character, or grit..."
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none font-medium leading-relaxed"
                    />
                    {errors.leaderQualities && <p className="text-red-500 text-[10px] font-semibold">{errors.leaderQualities}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 leading-tight">
                      Is there anything else you’d like us to know before we review your application? <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={2}
                      value={formData.anythingElse}
                      onChange={(e) => setFormData({ ...formData, anythingElse: e.target.value })}
                      placeholder="Highlight structural needs, special scheduling constraints, or write N/A..."
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none font-medium leading-relaxed"
                    />
                    {errors.anythingElse && <p className="text-red-500 text-[10px] font-semibold">{errors.anythingElse}</p>}
                  </div>
                </div>
              )}

              {/* Step 5: Final Review & Confirmation Signature */}
              {step === 5 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-2 flex items-center gap-2">
                    <Library className="text-secondary select-none" size={16} />
                    <h3 className="text-sm sm:text-base font-serif font-black text-slate-800">
                      Step 5: Review & Confirmation Signature
                    </h3>
                  </div>

                  {/* Summary grid readout of candidate profile */}
                  <div className="bg-slate-50 rounded-xl p-3 sm:p-5 border border-slate-200/60 divide-y divide-slate-100 space-y-3 text-[11px] font-medium text-slate-600">
                    <div className="grid grid-cols-2 gap-3 pb-3">
                      <div>
                        <span className="font-extrabold text-[#3f465f]/80 uppercase tracking-widest block text-[8px] mb-0.5">Candidate Full Name</span>
                        <span className="text-slate-900 font-bold text-xs truncate block">{formData.fullName || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="font-extrabold text-[#3f465f]/80 uppercase tracking-widest block text-[8px] mb-0.5">Email response</span>
                        <span className="text-slate-900 font-bold text-xs truncate block">{formData.emailAddress || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="font-extrabold text-[#3f465f]/80 uppercase tracking-widest block text-[8px] mb-0.5">Contact phone</span>
                        <span className="text-slate-900 font-bold text-xs truncate block">{formData.phoneNumber || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="font-extrabold text-[#3f465f]/80 uppercase tracking-widest block text-[8px] mb-0.5">Academic Classification</span>
                        <span className="text-slate-900 font-bold text-xs block">{formData.classification || 'N/A'}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 py-3">
                      <div>
                        <span className="font-extrabold text-[#3f465f]/80 uppercase tracking-widest block text-[8px] mb-1">Attached Resume</span>
                        <div className="flex items-center gap-1.5 text-green-700 bg-white border border-green-100 px-2 py-1 rounded-lg text-[10px]">
                          <Check size={11} className="flex-shrink-0" />
                          <span className="font-bold truncate block">{resumeFile?.name || 'CV_Attached.pdf'}</span>
                        </div>
                      </div>
                      <div>
                        <span className="font-extrabold text-[#3f465f]/80 uppercase tracking-widest block text-[8px] mb-1">Attached Headshot</span>
                        <div className="flex items-center gap-1.5 text-green-700 bg-white border border-green-100 px-2 py-1 rounded-lg text-[10px]">
                          <Check size={11} className="flex-shrink-0" />
                          <span className="font-bold truncate block">{headshotFile?.name || 'Headshot_Attached.jpg'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Declaration Consent Box */}
                  <div className="p-3 sm:p-4 bg-blue-50/50 border border-blue-100 rounded-xl space-y-3">
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-secondary flex items-center gap-1">
                        <Info size={12} className="flex-shrink-0" /> Final Signature Confirmation
                      </h4>
                      <p className="text-[11px] leading-relaxed text-slate-600 font-medium font-serif">
                        By typing your full name below, you confirm that all information provided in this application is truthful and accurate. You also acknowledge that, if selected, you are committed to fully participating in the Pre-Law Launchpad’s one-day mentorship program.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[8px] uppercase font-bold tracking-widest text-[#3f465f]">
                        Type Your Full Name to Sign <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        value={formData.signature}
                        onChange={(e) => setFormData({ ...formData, signature: e.target.value })}
                        placeholder={`Must match: "${formData.fullName}"`}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary font-serif font-bold italic"
                      />
                      {errors.signature && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.signature}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Action Buttons footer */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handlePrev}
                  className={`px-5 py-3 border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 flex items-center gap-1 transition-all ${
                    step === 1 ? 'opacity-0 pointer-events-none' : ''
                  }`}
                >
                  <ChevronLeft size={16} /> Previous
                </button>

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-secondary hover:bg-slate-950 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md flex items-center gap-1.5"
                  >
                    Next Step <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-green-500 hover:bg-green-600 disabled:bg-slate-300 text-white px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-green-500/10"
                  >
                    {submitting ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Completed Application <Send size={12} />
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          </div>
        ) : (
          /* Application complete confirmation state */
          <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-2xl text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-100 text-green-500">
              <Check size={32} />
            </div>

            <div className="space-y-2">
              <span className="bg-green-50 text-green-700 font-bold border border-green-100 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                Verification Receipt Issued
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 mt-2">
                Application Received Successfully
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you for applying to the GCABL & NXTGENLAW **Pre-Law Launchpad Summer 2025 Cohort**. Your application has been logged under record **{formData.emailAddress}**.
              </p>
            </div>

            <div className="bg-slate-50 py-5 px-6 rounded-xl border border-slate-100 max-w-md mx-auto text-left text-xs font-medium space-y-3 text-slate-500">
              <div className="flex justify-between">
                <span className="font-bold">Applicant Email:</span>
                <span className="font-extrabold text-slate-800">{formData.emailAddress}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Full Name Assigned:</span>
                <span className="font-extrabold text-slate-800">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Academic Status:</span>
                <span className="font-extrabold text-slate-800">High School {formData.classification}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Launch Verification ID:</span>
                <span className="font-mono font-black text-secondary">#GCABL-L25-{(Math.random() * 10000).toFixed(0)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200/50 pt-2 text-slate-600">
                <span className="font-bold">Next Direct Communications:</span>
                <span className="font-black text-accent-gold">Via YaAsia Brown / Program Coordinator</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setFormData({
                    emailConsentChecked: true,
                    fullName: '',
                    emailAddress: 'fouldcllc@gmail.com',
                    phoneNumber: '',
                    classification: '',
                    inspiration: '',
                    whyParticipate: '',
                    leadershipStory: '',
                    clubsOrganizations: '',
                    leaderQualities: '',
                    anythingElse: '',
                    signature: '',
                  });
                  setResumeFile(null);
                  setHeadshotFile(null);
                }}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors"
                type="button"
              >
                Submit Response for Switch Account
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
