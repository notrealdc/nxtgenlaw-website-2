/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'greensboro' | 'charlotte' | 'launchpad' | 'contact' | 'podcast' | 'about' | 'attorney-detail' | 'practice-detail' | 'testimonials' | 'case-results' | 'faqs';

export interface Attorney {
  id: string;
  name: string;
  role: string;
  email: string;
  imageUrl: string;
  specialty: string;
  bio: string;
}

export interface CaseResult {
  id: string;
  caseTitle: string;
  amount: string;
  description: string;
  practiceArea: string;
  isHighProfile?: boolean;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  duration: string;
  date: string;
  category: string;
  youtubeId: string;
  summary: string;
  takeaways: string[];
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  features: string[];
}
