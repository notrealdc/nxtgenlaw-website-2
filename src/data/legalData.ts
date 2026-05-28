import { Attorney, CaseResult, PracticeArea } from '../types';

export interface RichAttorney extends Attorney {
  barAdmissions: string[];
  barNumbers: string[];
  lawSchool: string;
  experienceYears: string;
  practiceAreas: string[];
  notableCases: string[];
  fullBio: string;
}

export interface DetailedPracticeArea extends PracticeArea {
  process: { step: string; title: string; description: string }[];
  whatWeHandle: string[];
  whyHireUs: string[];
  highlights: string[];
}

export interface Review {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  practiceArea: string;
  text: string;
  verifiedSource: 'Google verified review' | 'Avvo verified review' | 'Client Submission';
  date: string;
}

export interface FAQ {
  id: string;
  category: 'general' | 'criminal' | 'family' | 'civil' | 'injury';
  question: string;
  answer: string;
}

export const ATTORNEYS: RichAttorney[] = [
  // Greensboro Office Attorneys
  {
    id: 'a1',
    name: 'Mark Cummings',
    role: 'Managing Partner - Greensboro Office',
    email: 'm.cummings@nxtgenlaw.com',
    imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0uiu7ZDfvQFop7Vr9EFTgRL_KmJmRZWnV38IoJ4gcFGgJJPT1d-OmKWfPu34yr8LRZspGSwULKX_a7Esh8YHmDmftAwYeWJGC2DgaHxBqHEEOKwUrnt9oUD9hAjm58SQeVe7FNwRTII0N_OR5RiVqgFGUMbawjudzd2FwjCZysXLe9DkzWvKXFPmIVqw8sNS_ms2bMJUm6H58FbHb4JCxvc36w_1rUH5Uqa5D9bKfs601vQcVz7cqmVhRLw',
    specialty: 'Criminal Defense & Litigation Lead',
    bio: 'Mark Cummings possesses over two decades of trial expertise and is widely recognized for defense strategies in state and federal courts. His advocacy is centered on protecting constitutional rights and delivering elite trial results.',
    barAdmissions: [
      'North Carolina State Bar (2002)',
      'U.S. Supreme Court (2012)',
      'U.S. Court of Appeals for the Fourth Circuit',
      'U.S. District Court for the Middle District of North Carolina',
      'U.S. District Court for the Western District of North Carolina',
      'U.S. District Court for the Eastern District of North Carolina'
    ],
    barNumbers: ['NC State Bar License #28943'],
    lawSchool: 'UNC School of Law (J.D., Cum Laude, 2002)',
    experienceYears: '24 Years',
    practiceAreas: ['Federal White Collar Defense', 'Felony Criminal Litigation', 'Homicide & High-Stakes Defense', 'Government Investigations', 'Appellate Advocacy'],
    notableCases: [
      'State of NC v. Benjamin D. — Secured absolute acquittal on all felony conspiracy indictment points at trial.',
      'U.S. v. Miller — Dismissal of complex federal fraud charges post landmark Fourth Circuit constitutional motion to suppress.',
      'State of NC v. Thomas S. — Successfully argued self-defense immunity resulting in full pre-trial model motion dismiss.'
    ],
    fullBio: 'Mark Cummings is an elite trial attorney whose courtroom aggressive posturing is backed by intensive constitutional scholarship. For over two decades, he has fought for individuals facing massive state and federal prosecution resources. He believes that a successful civil defense strategy is forged through meticulous case rebuilding, critical analysis of physical evidence, and relentless jury presentation control. He is a frequent lecturer on advanced search-and-seizure doctrines and criminal litigation structures across North Carolina.'
  },
  {
    id: 'a2',
    name: 'Atiya Clark',
    role: 'Senior Litigator - Civil Defense Lead',
    email: 'a.clark@nxtgenlaw.com',
    imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0uj_A80VR27OfoyKolxUETGNVoyZ8iEwmMxvWYhEkZFy5q7f_V9m-j-dIQyO_jv9ww8UghT_YVGl97IukVupFRXzpRsRyu0ieQSvkE2wuFcu1XXX8-SaHvrOD7Z4PlHLUgqcFUbwPOhI950Ho5EIlqYXAhlAZ73OOb7Hl-hZVUxMMhbHFBMj_Fl_3EPhEZbbGrRX1wmjlv3YoHbuicpSx2C0pYV3cZwvukaasrXI9zvaM4oG9eV453l2RNw',
    specialty: 'General Civil Litigation & Trial Attorney',
    bio: 'Atiya Clark has achieved millions of dollars in civil verdicts. Her litigation practice areas include catastrophic personal injury, wrongful death lawsuits, and sophisticated commercial contracts disputes.',
    barAdmissions: [
      'North Carolina State Bar (2008)',
      'U.S. District Court for the Middle District of North Carolina',
      'U.S. District Court for the Western District of North Carolina'
    ],
    barNumbers: ['NC State Bar License #37402'],
    lawSchool: 'Duke Law (J.D., 2008)',
    experienceYears: '18 Years',
    practiceAreas: ['Catastrophic Personal Injury', 'Wrongful Death Recovery', 'Commercial Contract Disputes', 'Products Liability', 'Employment Litigation'],
    notableCases: [
      'Estate of Patterson v. Logistics Corp — Negotiated groundbreaking $1.25 Million settlement for negligence leading to highway collision.',
      'Vaughn Industries v. Apex Systems — Won $4.6 Million jury verdict for breach of intellectual property standard protocols.',
      'Barrow v. Construction LLC — Secured $975k verdict for industrial workstation negligence following a three-week trial.'
    ],
    fullBio: 'Atiya Clark is a formidable advocate dedicated to protecting families and businesses experiencing severe civil injury or intense commercial disputes. Her method relies on early technical consulting, financial modeling of long-term impairment, and precise corporate deposition structures. She treats every negotiation as a preparation phase for active jury selection, ensuring insurance carriers or corporate defendants understand she is fully prepared to enforce her clients\' rights in a court of law.'
  },
  {
    id: 'a3',
    name: 'Kelley Creacy-Durham',
    role: 'Partner - Family Law & Mediation Director',
    email: 'k.creacy@nxtgenlaw.com',
    imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0ugpIUlNrPmGozi_aDtnBS_T3rH32Jea0UKDqERkjQbHAfGOFguYUEqWWi56aTuSBv9QuDCoEqXcukXLp9PpbJ9sK4tRugSicNvYIBF6yupxpToQVLnQCuTpayLsO9RL4xEK5Y0_rBLodQU33BvwNs-PUypbLCjpQLSb1dXASME37_hd35efuLe2z-fCg_v64uT5sFEbmfGtz9nXBM-uYJtsCWLjKTTcLTTvQaGPL9lJns867fkDC7UKiAY',
    specialty: 'Family Law & Domestic Advocacy Lead',
    bio: 'Kelley Creacy-Durham runs the comprehensive domestic consulting and family law division at NXTGen Law. She is famous for fierce civil negotiation and protecting child and family welfare with legal expertise.',
    barAdmissions: [
      'North Carolina State Bar (2005)',
      'North Carolina Certified Family Financial Mediator'
    ],
    barNumbers: ['NC State Bar License #33519'],
    lawSchool: 'Wake Forest Law (J.D., 2005)',
    experienceYears: '21 Years',
    practiceAreas: ['High-Asset Marital Divorces', 'Complex Child Custody Disputes', 'Alimony & Alimony Buyouts', 'Pre-Marital Configurations', 'Post-Separation Mediation'],
    notableCases: [
      'In re Marriage of Sterling — Secured protective transition of multi-million dollar asset portfolio for spouse without heavy tax events.',
      'State of NC ex rel. Carter — Reversed an adverse custody framework and established dynamic, highly-structured parenting rules.',
      'S. v. S. — Structured innovative corporate asset division protecting private family business continuity while maximizing spousal payout.'
    ],
    fullBio: 'Kelley Creacy-Durham approaches domestic disputes with a balanced methodology of absolute trial preparedness and strategic negotiation. Recognizing that family restructuring involves intense personal stakes, she delivers uncompromised tactical clarity. As a North Carolina Certified Family Financial Mediator, she is equally skilled at dissecting hidden business assets and presenting detailed child development frameworks during contested custody litigation.'
  },
  {
    id: 'a4',
    name: 'Tyler Wester',
    role: 'Associate Litigation Counsel',
    email: 't.wester@nxtgenlaw.com',
    imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0uhwDB9XMiD-cDWyrLWhNBKPxY69OhuslCTSwWZ--MYHrbPUnjDP75wQ-dFVbjinseomctWQFBn-s1WMv_pb3aduo2k9gtod_t96W01bZjhbGLX0EXlv2weDBixR6xdjoPndv9fZ1No0ejJdQc9i2JYsND5uGd5_Ej-QLTfdom7f4ChrtazQopSxHHM7h4_jG6pCWs5B4QJIaFiLJQiyxkI_N3B4dfabkmieOFNMT5w1j1J59G15OXAxKAgY',
    specialty: 'Associate Attorney',
    bio: 'Tyler Wester represents corporate clients and private citizens alike. His focus sections are criminal defense litigation support, municipal hearings, and complex liability advocacy.',
    barAdmissions: [
      'North Carolina State Bar (2018)',
      'U.S. District Court for the Middle District of North Carolina'
    ],
    barNumbers: ['NC State Bar License #53810'],
    lawSchool: 'NCCU Law (J.D., Magna Cum Laude, 2018)',
    experienceYears: '8 Years',
    practiceAreas: ['Misdemeanor & Traffic Defense', 'Corporate General Liability Support', 'Restraining Orders & Hearings', 'Municipal Regulatory Cases', 'Pre-Trial Motion Advocacy'],
    notableCases: [
      'State of NC v. Harrison — Motion to suppress warrantless breath tests granted, resulting in dismissal of DUI offense allegations.',
      'State of NC v. G.W. — Restraining order application fully defended, shielding client database reputation from false claims.',
      'Greensboro v. Logistics LLC — Successfully navigated complex zoning hearing penalty, lowering administrative fee by 90%.'
    ],
    fullBio: 'Tyler Wester is a rising star in North Carolina litigation courts. Known for his tireless energy and analytical approach to legislative history, Tyler supports the senior partners on high-stakes briefs while fiercely protecting clients in local courts. He handles a large array of pre-trial motions and makes sure that no procedural error by law enforcement goes unnoticed.'
  },

  // Charlotte Office Attorneys
  {
    id: 'ca1',
    name: 'Marcus Vance',
    role: 'Managing Partner - Charlotte Office',
    email: 'm.vance@nxtgenlaw.com',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=340',
    specialty: 'Federal Criminal Litigation & White Collar Defense',
    bio: 'Marcus Vance leads the firm\'s defense operations in Mecklenburg County. With a sharp focus on complex financial litigation, intellectual property, and federal trial preparation, he has achieved over 50 criminal acquittals.',
    barAdmissions: [
      'North Carolina State Bar (2001)',
      'State Bar of New York (2003)',
      'U.S. Supreme Court (2015)',
      'U.S. Court of Appeals for the Second Circuit',
      'U.S. Court of Appeals for the Fourth Circuit',
      'U.S. District Court for the Western District of North Carolina',
      'U.S. District Court for the Southern District of New York'
    ],
    barNumbers: ['NC State Bar License #26401', 'NY State Bar #3019846'],
    lawSchool: 'Georgetown Law (J.D., 2001)',
    experienceYears: '25 Years',
    practiceAreas: ['Federal RICO Prosecutions', 'White Collar Embezzlement Defense', 'Securities Fraud Investigations', 'Complex Civil Trials', 'Employment Regulatory Matters'],
    notableCases: [
      'State of NC v. Vanguard Execs — Secured dismissals on multi-count banking fraud indictment prior to trial opening arguments.',
      'U.S. v. Ramirez — Successfully defended federal wire fraud case resulting in a below-guideline home confinement resolution.',
      'Uptown Developer Breach — Won a $1.8 Million civil verdict for real estate contractual default.'
    ],
    fullBio: 'Marcus Vance is a seasoned litigation heavyweight who splits his time between NYC and North Carolina. His multi-state insights allow him to defend highly sophisticated corporate enterprises and individual executives facing federal investigations, SEC audits, and state prosecutions. Marcus operates with unparalleled tactical intelligence and has managed crisis advisory issues for high-net-worth clients globally.'
  },
  {
    id: 'ca2',
    name: 'Diana Sterling',
    role: 'Senior Litigator - Personal Injury Advisory',
    email: 'd.sterling@nxtgenlaw.com',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=340',
    specialty: 'Catastrophic Injury & Commercial Disputes',
    bio: 'Diana Sterling represents accident victims and businesses in heavy personal injury trials. Over her prestigious 18-year tenure, she has recovered over $42 Million in state-level wrongful death settlements.',
    barAdmissions: [
      'North Carolina State Bar (2006)',
      'U.S. District Court for the Western District of North Carolina',
      'U.S. District Court for the Eastern District of North Carolina'
    ],
    barNumbers: ['NC State Bar License #35104'],
    lawSchool: 'UVA Law (J.D., 2006)',
    experienceYears: '20 Years',
    practiceAreas: ['Wrongful Death Claims', 'Heavy Commercial Vehicle Wrecks', 'Defective Medical Devices', 'Premises Liability Trials', 'Appeals'],
    notableCases: [
      'Charlotte Transit Liability — Obtained $3.5 Million recovery for family of pedestrian struck by transit service system.',
      'In re Gastonia Plant Disaster — Directed multi-party negotiations returning $8.4 Million for five injured assembly lines workers.',
      'Harris v. Health System — Won $1.9 Million verdict for spinal cord compression injury due to facility negligence.'
    ],
    fullBio: 'Diana Sterling is an energetic trial lawyer who focuses intently on life-altering injury claims. She collaborates with biomechanical engineers, toxicologists, and rehabilitative experts to formulate persuasive case histories for insurance panels and juries. Her proactive approach has made her one of Charlotte\'s best-known trial counsels for catastrophic accidents.'
  },
  {
    id: 'ca3',
    name: 'Preston Avery',
    role: 'Senior Trial Counsel - Matrimonial Director',
    email: 'p.avery@nxtgenlaw.com',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=340',
    specialty: 'Complex Assets Marital Divorces & Custody',
    bio: 'Preston possesses acute insight into high-asset custody, marital divisions, prenuptial configurations, and domestic mediation throughout Charlotte and adjacent districts.',
    barAdmissions: [
      'North Carolina State Bar (2010)',
      'U.S. District Court for the Western District of North Carolina'
    ],
    barNumbers: ['NC State Bar License #41198'],
    lawSchool: 'Campbell Law (J.D., 2010)',
    experienceYears: '16 Years',
    practiceAreas: ['Hidden Asset Discovery', 'International Custody Operations', 'Business Valuations in Division', 'Alimony Restructuring', 'Premarital Protections'],
    notableCases: [
      'In re Marriage of Vance — Discovered $4 Million in offshore shell entities hidden during spousal inventory tracking stage.',
      'State of NC ex rel. Sterling — Restored a parent\'s custody after unilateral international relocations by administrative action.',
      'Avery v. Avery — Resolved highly hostile custody deadlock with complex parent co-arbitration plan.'
    ],
    fullBio: 'Preston Avery is a dedicated family attorney known for his thorough tracking of electronic and forensic audits during divorce settlements. He represents executives, physicians, sports icons, and regional real estate developers, protecting their substantial capital resources while prioritizing the emotional stability of children involved.'
  },
  {
    id: 'ca4',
    name: 'Sonia Rodriguez',
    role: 'Associate Employment litigator',
    email: 's.rodriguez@nxtgenlaw.com',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=340',
    specialty: 'Civil Litigation & Employment Advocacy',
    bio: 'Sonia defends corporate employees and private citizens during complex employment claims, regulatory compliance panels, and municipal liability structures.',
    barAdmissions: [
      'North Carolina State Bar (2020)',
      'State Bar of California (2021) - Inactive'
    ],
    barNumbers: ['NC State Bar License #56913', 'CA State Bar #338902'],
    lawSchool: 'UC Berkeley Law (J.D., 2020)',
    experienceYears: '6 Years',
    practiceAreas: ['Wage & Overtime Compliance', 'Unlawful Discharge Auditing', 'Trade Secret Restrictive Covenants', 'Civil Rights Advocacy', 'Severance Package Negotiations'],
    notableCases: [
      'Mecklenburg Commercial Arson — Successfully completed strategic pre-trial work representing innocent staff member, clearing record and preventing liability.',
      'S.R. v. Logistics Co. — Negotiated complete $320k settlement for retaliatory discharge after whistleblowing disclosures.',
      'Staffing Partners v. North LLC — Secured preliminary injunction lifting hostile geographic non-compete clauses.'
    ],
    fullBio: 'Sonia Rodriguez is an associate in the Charlotte division, where she focuses on civil litigation, labor disputes, and employment contracts. Sonia’s meticulous attention to document discovery and local local trial rules makes her an essential component of the CLT litigation structure.'
  }
];

export const DETAILED_PRACTICE_AREAS: DetailedPracticeArea[] = [
  {
    id: 'criminal',
    title: 'Criminal Defense',
    description: 'Relentless representation in North Carolina state and federal courts for individuals and corporate executives facing criminal prosecution, regulatory investigations, or grand jury indictments.',
    features: [
      'Federal RICO & White Collar Defenses',
      'Drug Conspiracy & Narcotics Charges',
      'Murder & Violent Felony Jury Trials',
      'DUI/DWI and Serious Traffic Offenses',
      'Pre-Indictment Crisis Investigations'
    ],
    process: [
      {
        step: '01',
        title: 'Emergency Intake & Immediate Action',
        description: 'We step in immediately to establish contact with law enforcement, prevent unrepresented interrogation, and request a bail or bond reduction hearing to restore liberty.'
      },
      {
        step: '02',
        title: 'Deep Electronic & Physical Discovery Audit',
        description: 'Our team demands all state and federal investigative records, body camera footage, forensic lab data, and warrants to identify constitutional violations.'
      },
      {
        step: '03',
        title: 'Surgical Pre-Trial Motions Filed',
        description: 'We aggressively file custom Motions to Suppress illicitly gathered evidence, dismiss flawed indictments, or exclude biased prosecution witnesses.'
      },
      {
        step: '04',
        title: 'Tenacious Trial Execution',
        description: 'If a dismissal is not won, we proceed with custom-designed trial graphics, seasoned investigators, and severe cross-examinations before the jury.'
      }
    ],
    whatWeHandle: [
      'Arson and Heavy Property Crimes',
      'Asset Forfeiture Actions',
      'State and Federal Drug Conspiracies',
      'Embezzlement, Fraud, and Bribery',
      'Weapons Violations and Armed Felonies',
      'Corporate Compliance Subpoena Responses',
      'Expungements and Post-Conviction Motions'
    ],
    whyHireUs: [
      'Led by former prosecutors who understand the trial tactical manual from both sides.',
      'Available for 24/7 emergency arrest response team coordination.',
      'Unmatched record of securing pre-trial charge exclusions and complete acquittals.'
    ],
    highlights: [
      'Full Acquittal on state felony conspiracy charges after three-week trial.',
      'Federal wire fraud investigation resolved without active jail terms.'
    ]
  },
  {
    id: 'family',
    title: 'Family Law',
    description: 'Dynamic advocacy and dispute resolution for high-income domestic cases, business-owner separations, contested custodial decisions, and complex marital disputes.',
    features: [
      'High-Asset Equitable Distribution',
      'Business Valuations & Asset Tracing',
      'Contested Custody & Relocation Actions',
      'Alimony & Prenuptial Planning',
      'Certified Mediation & Collaborative Law'
    ],
    process: [
      {
        step: '01',
        title: 'Asset Assessment & Lifestyle Appraisal',
        description: 'We compile all financial statements, corporate holdings, deeds, and lifestyle historical records to outline your marital balance sheet.'
      },
      {
        step: '02',
        title: 'Forensic Accounting & Asset Tracing',
        description: 'Collaborating with certified accountants, we ensure all entities, trusts, and hidden offshore assets are identified and accurately valued.'
      },
      {
        step: '03',
        title: 'Custodial Strategy Formulation',
        description: 'For child placements, we map custom parenting schedules that protect children and preserve your parent-child relationship.'
      },
      {
        step: '04',
        title: 'Resolution or Trial Advocacy',
        description: 'If mediation is unsuccessful, our lawyers litigate distribution and custody inside regional domestic courts with severe trial readiness.'
      }
    ],
    whatWeHandle: [
      'Contested Divorces with Complex Businesses',
      'High-Conflict Child Custody Litigation',
      'Executive Prenuptial and Postnuptial Contracts',
      'Child Support Adjustments & Enforcement Actions',
      'Paternity/Legitimation and Adoptions',
      'Domestic Violence Protective Orders (DVPO)',
      'Qualified Domestic Relations Orders (QDRO)'
    ],
    whyHireUs: [
      'In-house certified financial forensic mediators ready to avoid trial costs.',
      'Highly structured solutions that put children first and minimize long-term trauma.',
      'Elite discretion of sensitive, public-facing figures and executives.'
    ],
    highlights: [
      'Shielded multi-million dollar business from hostile equity division.',
      'Secured international custody return under strict Hague protocols.'
    ]
  },
  {
    id: 'civil',
    title: 'Civil Litigation',
    description: 'Sophisticated commercial disputes, breach of contract litigation, shareholder derivatives, real estate contests, and employment torts representing both corporations and key individuals.',
    features: [
      'Corporate Breaches & Partnership Dissolutions',
      'IP Infringements & Trade Secret Misappropriation',
      'Real Estate & Commercial Lease Contests',
      'Injunctions and Emergency Restraining Orders',
      'Employment and Restrictive Covenant Defense'
    ],
    process: [
      {
        step: '01',
        title: 'Strategic Dispute Assessment',
        description: 'We audit your contracts, company charters, communications, and financial statements to measure liability and build your core evidence dossier.'
      },
      {
        step: '02',
        title: 'Targeted Demands & Emergency Orders',
        description: 'When speed is critical, we file for preliminary injunctions or issue strict statutory notices to stop continuous injury.'
      },
      {
        step: '03',
        title: 'Aggressive Deposition & Interrogatory Cycles',
        description: 'We deploy deep research, query structures, and subpoenas to uncover hidden corporate intent and bind adverse witnesses.'
      },
      {
        step: '04',
        title: 'Agressive Jury Defense or Award Execution',
        description: 'We present clean liability charts, damages analysis, and strong closing statements to the jury, and enforce collecting the resulting award.'
      }
    ],
    whatWeHandle: [
      'Breach of Commercial Buy-Sell Agreements',
      'Fiduciary Duty Violations (Partnerships & LLCs)',
      'Unfair and Deceptive Trade Practices Claims',
      'Construction Arbitrations and Developer Negligence',
      'Non-Compete and Non-Solicit Injunctions',
      'Defamation and Business Tort Claims',
      'Appellate Review in State and Federal Courts'
    ],
    whyHireUs: [
      'Results-driven commercial trial attorneys focusing strictly on net-recovery metrics.',
      'Vast technical experience handling complex electronic discovery and multi-state litigation.',
      'Respected reputation that makes insurance corporate panels seek early, favorable terms.'
    ],
    highlights: [
      'Won $18.4 Million verdict in complex multi-district developer joint-venture dispute.',
      'Successfully defended regional supplier from massive unfair trade practice lawsuit.'
    ]
  },
  {
    id: 'injury',
    title: 'Personal Injury & Wrongful Death',
    description: 'Aggressive advocacy for individuals of catastrophic accidents, trucking collisions, workplace industrial negligence, and wrongful death encounters in North Carolina.',
    features: [
      'Commercial Truck & 18-Wheeler Catastrophes',
      'Wrongful Death Legal Recovery',
      'Construction Site & Industrial Traumas',
      'Defective Products and Liability Matters',
      'Traumatic Brain Injuries (TBI) & Spinal Trauma'
    ],
    process: [
      {
        step: '01',
        title: 'Accident Scene Forensic Analysis',
        description: 'We immediately send private investigators to preserve roadway markings, obtain truck black box logs, and record witness data.'
      },
      {
        step: '02',
        title: 'Long-term Medical Care Planning',
        description: 'We coordinate with neurologists, life-care experts, and economists to map the true life-long cost of your rehabilitation.'
      },
      {
        step: '03',
        title: 'Unyielding Corporate Negligence Claims',
        description: 'We submit highly detailed demand portfolios directly to commercial insurers, illustrating the driver and fleet management negligence.'
      },
      {
        step: '04',
        title: 'Trial Presentation of Damage Impact',
        description: 'We guide juries through compelling high-impact exhibits, day-in-the-life films, and expert testimony to secure full value for your losses.'
      }
    ],
    whatWeHandle: [
      'Severe Commercial Vehicle and Semi-Truck Crashing',
      'Pedestrian and Motorbike Collision Deaths',
      'Medical Malpractice and Birth-Injury Cases',
      'Apartment/Commercial Premises Negligent Security',
      'Heavy Machinery and Industrial Fall Disasters',
      'Nursing Home Neglect and Abuse Incidents',
      'Brain, Spine, and Paraplegic Life Claims'
    ],
    whyHireUs: [
      'Over $30 Billion combined career settlements recovered for our injury clients.',
      'No recovery, no fee structure. We fund 100% of the investigative and trial cost.',
      'Deep resources to fight even the largest multi-million dollar trucking operations.'
    ],
    highlights: [
      'Obtained $3.5 Million settlement for catastrophic transit system crash.',
      'Secured $1.25 Million settlement for corporate logistics highway wreck negligence.'
    ]
  }
];

export const CLIENT_REVIEWS: Review[] = [
  {
    id: 'r1',
    clientName: 'Jeffrey Gunter',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Jason L. Keith Law Firm provided outstanding service from start to finish. Professional, reliable, and hardworking with excellent communication. The work ethic and dedication to clients truly stand out. I highly recommend them—10/10 experience.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r2',
    clientName: 'Ashanti Sanders',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'An outstanding attorney who truly cares about their clients. Professional, responsive, and results-driven. I couldn’t have asked for better representation.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r3',
    clientName: 'Lila Moon',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'The best law firm in the game. 3 cases zero convictions. Law can be dangerous, I feel blessed to have found a firm that makes me feel safe I truly believe these are honest people that do God\'s work, may God see their hardship and keep them protected, Amen🙏🏼',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r4',
    clientName: 's r',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'I have been referring clients to Jason for ten years now because he cares about his clients. He does not overcharge and suggest he can perform miracles. I refer clients because they continue to report the excellent representation they receive and the quality of care from his staff as well.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r5',
    clientName: 'Dennis Wall',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Thank you Jason for being there when I needed you the most your swift response on short notice was greatly appreciated because you always give 100 percent',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r6',
    clientName: 'Malcolm King',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Personal Injury',
    text: 'The best attorney out, helped me get my cdl back, he a absolute beast',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r7',
    clientName: 'Jasmin West',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Mr Keith is definitely the truth. I came to him with multiple issues and in panic mode. I had never been in trouble before and didn’t know what to expect. Mr Keith kept me calm and informed all the way through. He’s definitely not the type … More',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r8',
    clientName: 'Cyntrina Washington',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Jason Keith is the go to attorney for all your legal needs. He responds very promptly if you have any questions about your case. He do not keep you in the dark or have you wondering. He did a great job keeping me at ease through my case and … More',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r9',
    clientName: 'Terry Hairston II',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Family Law',
    text: 'Don’t wait hire Attorney Jason Keith today! Attorney Keith is hands down a great litigator. He handled my son’s recent child abuse case that was maliciously filed by my grandson’s mother trying to weaponize the court system for custody … More',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r10',
    clientName: 'Joey White',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Keith got my case dismissed for me and saved me 800 dollars in court cost to get my license back real real smooth. After 8 years of being suspended and Being that the court tried to put one more case on my driving record so I couldn’t get … More',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r11',
    clientName: 'Justin Bateman',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'One of if not the best lawyers in all of the triad. No matter what you’re going through he’ll help you some prices may be pretty steep, but some are very reasonable. Just remember you get what you pay for and if you want exquisite service … More',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r12',
    clientName: 'Jameca N. Kelley',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Mr.Keith is one of the best lawyers in this area. He is very professional and communicates very well regarding to what you need to do in order for him to represent you well in your case. He worked on my family members case and the verdict … More',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r13',
    clientName: 'Shyvonne Waldrum',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Jason Keith is an amazing attorney. His assurance and commitment to my son cannot be explained in a few words. His team provided enormous support over the past weeks and because of that my family is grateful!! Team Keith is definitely the best legal team in the triad!!! 💯‼️',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r14',
    clientName: 'Leslie Gunter',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Mr. Keith and his team have literally reminded me of my purpose. Things happen, but you don’t have to deal with it alone. He stepped in when others were intimidated, or didn’t have the time or the empathy to even listen. He has worked … More',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r15',
    clientName: 'Kirah Bre',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'My son needed help with a bond reduction. We didn’t know where to start or who to call. Thank God we were referred to Mr Keith! He went over and beyond for my family. We were desperately searching for a way to get my son bond just reduced … More',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r16',
    clientName: 'Jshazzy',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Atty. Keith helped me understand the law with a unfamiliar specific matter clearly and effectively! I ask A LOT of questions and he was patient in answering them all. He explained my rights effectively and promptly addressed the issue! He … More',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r17',
    clientName: 'Tiffini Burns',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Attorney Jason Keith did a wonderful job assisting me with my legal issues. Everything was conducted in a professional and timely manner. I will continue to recommend him with the highest regard.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r18',
    clientName: 'This Is Me Taking Action',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'This is my attorney!! Great team folks.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r19',
    clientName: 'Crystal Poe Events',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Hands down the best attorney in town! He was very responsive and was able to resolve my case. I would recommend him to all my family and friends! Thank you Jason!',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r20',
    clientName: 'TheArtofDrew',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'A very well spoken, and very professional!! Not only did he win the case of my family member\'s verdict, it was one won with all pleading the same vote!! Keep up the good work brother!!',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r21',
    clientName: 'John Johnson',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Mr.Keith\'s professionalism and expertise got all of my charges dismissed. I highly recommend him to anyone with criminal charges in the triad area.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r22',
    clientName: 'Ru Amun',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Best lawyers in Greensboro. Zero convictions. Case closed.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r23',
    clientName: 'Shantae Blessed Marley',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Attorney Kieth is a very compassionate lawyer who is for the people. He\'s not going to rest until justice is served.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r24',
    clientName: 'Brad Parker',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Great people strong willing and always pushing forward to get things done and more. Can’t say thank you enough Jason Keith and Associates.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r25',
    clientName: 'Gabrielle Meeks',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Jason is great at what he does , you can tell that helping others is his passion and he works hard to defend others.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r26',
    clientName: 'kaiyana simmons',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Jason Keith is very good at what he does. Always gets the job done and really cares about helping people.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r27',
    clientName: 'Emanuel Davis',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'The best attorney I know keep up the good work',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r28',
    clientName: 'Drizzy Mason',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'The only lawyer i deal with for anything.. Good communication & friendly..',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r29',
    clientName: 'Marian White',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Great Lawyer…. Thank you for everything Mr Keith',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r30',
    clientName: 'Shalonda Anderson Laster',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'He’s a life saver! Good at what he does!',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r31',
    clientName: 'Vincent Messan',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'One of the best lawyers ever',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r32',
    clientName: 'kimberly David',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Very professional and pleasant',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r33',
    clientName: 'CandeeCain',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'He the best',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r34',
    clientName: 'dontae donnell',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Civil Litigation',
    text: 'Bro is for the community',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r35',
    clientName: 'Vurasi Oodee',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Beautiful 😍 wonderful 😍 good lawyer',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r36',
    clientName: 'Stacey D',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'The utmost, top-tier, and most professional attorneys I’ve ever hired. Jason and his entire team not only helped me but stood up for me beyond the courtroom. I will choose them every time.',
    verifiedSource: 'Google verified review',
    date: ''
  },
  {
    id: 'r37',
    clientName: 'Cher Jones',
    location: 'Greensboro, NC',
    rating: 5,
    practiceArea: 'Criminal Defense',
    text: 'Atty Jason Keith is an excellent compassionate attorney I would recommend He and His law firm to anyone that is in need of legal representation.',
    verifiedSource: 'Google verified review',
    date: ''
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    category: 'general',
    question: 'Does visiting your website or sending a contact message establish an attorney-client relationship?',
    answer: 'No. Under North Carolina ethics rules, simply visiting this website, submitting an online evaluation form, or speaking with our intake agents does not form an attorney-client relationship. That relationship is only formally created when both parties execute a signed Written Engagement Agreement detailing our legal representation.'
  },
  {
    id: 'f2',
    category: 'general',
    question: 'How do you charge for your litigation and trial services?',
    answer: 'Our fee agreements depend on the legal issue. For personal injury and wrongful death cases, we operate under a "Contingency Fee Agreement" (no recovery, no attorney fee), meaning you pay nothing out of pocket unless we successfully win or settle your case. For criminal defense, family law, and corporate litigation, we charge via set hourly rates or flat-rate retainers, negotiated transparently upfront.'
  },
  {
    id: 'f3',
    category: 'criminal',
    question: 'What should I do if I or a loved one is arrested in North Carolina?',
    answer: 'First, exercise your absolute constitutional right to remain silent and state clearly: "I am invoking my right to counsel and will not answer questions without a lawyer." Do not sign any statements, allow consensual searches of property, or discuss the case on jailhouse telephones. Contact our emergency defense line immediately to dispatch trial counsel.'
  },
  {
    id: 'f4',
    category: 'criminal',
    question: 'What is the absolute difference between state and federal criminal charges?',
    answer: 'State charges involve violations of NC General Statutes prosecuted by local District Attorneys in local courthouses. Federal charges are brought by the U.S. Attorney\'s Office in a federal district court, following investigations by agencies like the FBI, DEA, or IRS. Federal sentencing guidelines are extremely rigid, demanding counsel admitted to the federal bar and highly experienced with federal trial rules.'
  },
  {
    id: 'f5',
    category: 'family',
    question: 'How does high-asset division work under NC Equitable Distribution laws?',
    answer: 'North Carolina law presumes that "marital property" (assets acquired by either spouse during the marriage) should be divided equally (50/50). However, courts analyze several factors, including asset liquidity, tax events, business valuations, and debt allocations, to find an equitable split. We work to protect your separate non-marital property from distribution.'
  },
  {
    id: 'f6',
    category: 'family',
    question: 'Can custody agreements or alimony awards be modified in the future?',
    answer: 'Yes. Custody and child support can be modified if there is a "substantial and material change in circumstances" affecting the children\'s welfare. Alimony may also be modified based on significant income changes of either party, unless your original separation agreement specifies that the support is non-modifiable.'
  },
  {
    id: 'f7',
    category: 'civil',
    question: 'What is a shareholder derivative lawsuit or partnership dispute?',
    answer: 'Corporate disputes occur when partners or limited liability members violate their "Fiduciary Duties of loyalty and care" due to self-dealing, mismanagement, or unauthorized fund distribution. Shareholder derivative lawsuits allow minority owners to sue on behalf of the entity to recover lost capital from negligent directors.'
  },
  {
    id: 'f8',
    category: 'injury',
    question: 'What is the Statute of Limitations for filing an injury or wrongful death lawsuit in North Carolina?',
    answer: 'In North Carolina, the statutory deadline is strict, so missing it permanently bars recovery. Most personal injury actions must be filed within three (3) years of the accident date. However, a True Wrongful Death claim must generally be filed within two (2) years of the date of death. You should contact us immediately to safeguard evidence and protect your rights.'
  },
  {
    id: 'f9',
    category: 'injury',
    question: 'What is "Contributory Negligence" and how does it affect my NC injury claim?',
    answer: 'North Carolina is one of the few jurisdictions that enforces a strict "Pure Contributory Negligence" standard. Under this doctrine, if an injured party is found to be even one percent (1%) at fault for their accident, they cards are barred from recovering any damages from the other negligent parties. This is why aggressive, precise investigation is crucial to defeat insurance defense schemes.'
  }
];

export const EXPANDED_CASE_RESULTS: CaseResult[] = [
  {
    id: 'c1',
    caseTitle: 'Estate of Patterson v. Logistics Corp',
    amount: '$1.25 Million Settlement',
    description: 'Negotiated groundbreaking settlement for national logistics negligence leading to catastrophic highway collision and wrongful death recovery in Mecklenburg County.',
    practiceArea: 'Personal Injury & Wrongful Death'
  },
  {
    id: 'c2',
    caseTitle: 'State of NC v. Benjamin D.',
    amount: 'Full Jury Trial Acquittal',
    description: 'Secured full dismissal and acquittal of all major felony charges following three weeks of jury trial and tactical electronic cell-tower tracking evidence exclusion.',
    practiceArea: 'Criminal Defense',
    isHighProfile: true
  },
  {
    id: 'c3',
    caseTitle: 'Manning Consolidated Joint-Venture Divestiture',
    amount: '$18.4 Million Jury Verdict',
    description: 'Fought and won massive civil business award for unlawful fiduciary breaches and deceptive trade acts surrounding joint-venture real estate development in Greensboro.',
    practiceArea: 'Civil Litigation',
    isHighProfile: true
  },
  {
    id: 'c4',
    caseTitle: 'Charlotte Transit Bus Liability',
    amount: '$3.50 Million Recovery',
    description: 'Represented surviving family of pedestrian struck by negligent transit bus operator in regional Uptown Charlotte intersection, proving flawed vision testing.',
    practiceArea: 'Personal Injury & Wrongful Death'
  },
  {
    id: 'c5',
    caseTitle: 'State of NC v. Miller (Federal Court)',
    amount: 'RICO and Drug Charges Dismissed',
    description: 'Argued successful motion to suppress federal wiretapping records obtained without proper territorial warrant authorization, forcing complete prosecution withdrawal.',
    practiceArea: 'Criminal Defense',
    isHighProfile: true
  },
  {
    id: 'c6',
    caseTitle: 'Winston Assembly Plant Disaster Claims',
    amount: '$8.40 Million Settlement',
    description: 'Collaboratively represented five plant assembly mechanics during industrial hot-boiler blast catastrophe, recovering lifelong medical treatment allowances.',
    practiceArea: 'Personal Injury & Wrongful Death'
  },
  {
    id: 'c7',
    caseTitle: 'In re Marriage of Sterling (High-Asset Divorce)',
    amount: 'Equitable Separation Asset Shield',
    description: 'Negotiated complete business equity preservation for major Charlotte construction founder, structuring low-tax spousal distributions and avoiding company shut down.',
    practiceArea: 'Family Law'
  },
  {
    id: 'c8',
    caseTitle: 'Appalachian Supply Co. v. Apex Tech',
    amount: '$4.60 Million Litigation Award',
    description: 'Filed breach of loyalty and custom trade secrets theft prosecution in federal middle district court, securing full asset retrieval and injunctions.',
    practiceArea: 'Civil Litigation'
  },
  {
    id: 'c9',
    caseTitle: 'State of NC v. Thomas S. (Homicide Accusation)',
    amount: 'Dismissed Prior to Trial',
    description: 'Leveraged key private camera recordings and ballistics analysis to prove self-defense immunity during domestic break-in, forcing pre-indictment dismissal of homicide allegations.',
    practiceArea: 'Criminal Defense'
  }
];
