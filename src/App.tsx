/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeGreensboro from './components/HomeGreensboro';
import HomeCharlotte from './components/HomeCharlotte';
import About from './components/About';
import Launchpad from './components/Launchpad';
import Contact from './components/Contact';
import Podcast from './components/Podcast';
import ConsultationModal from './components/ConsultationModal';

// New Individual Detail & Specialized Pages
import AttorneyDetail from './components/AttorneyDetail';
import PracticeDetail from './components/PracticeDetail';
import TestimonialsPage from './components/TestimonialsPage';
import CaseResultsPage from './components/CaseResultsPage';
import KeyFAQsPage from './components/KeyFAQsPage';
import EmergencyAnsweringWidget from './components/EmergencyAnsweringWidget';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('greensboro');
  const [activeCity, setActiveCity] = useState<'greensboro' | 'charlotte'>('greensboro');
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [selectedAttorneyId, setSelectedAttorneyId] = useState<string>('a1');
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>('criminal');

  // Scroll to top on page switches to mimic complete navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSetPage = (page: Page) => {
    if (page === 'greensboro' || page === 'charlotte') {
      setActiveCity(page);
    }
    setCurrentPage(page);
  };

  const handleSelectAttorney = (id: string) => {
    setSelectedAttorneyId(id);
    setCurrentPage('attorney-detail');
  };

  const handleSelectPracticeArea = (id: string) => {
    setSelectedPracticeId(id);
    setCurrentPage('practice-detail');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-secondary selection:text-white antialiased">
      {/* Universal Sticky Header Navigation */}
      <Header 
        currentPage={currentPage}
        setCurrentPage={handleSetPage}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Dynamic Main Body Content Router */}
      <main className="flex-grow">
        {currentPage === 'greensboro' && (
          <HomeGreensboro 
            onOpenConsultation={() => setConsultationOpen(true)}
            onSetPage={handleSetPage}
            onSelectAttorney={handleSelectAttorney}
            onSelectPracticeArea={handleSelectPracticeArea}
          />
        )}
        
        {currentPage === 'charlotte' && (
          <HomeCharlotte 
            onOpenConsultation={() => setConsultationOpen(true)}
            onSetPage={handleSetPage}
            onSelectAttorney={handleSelectAttorney}
            onSelectPracticeArea={handleSelectPracticeArea}
          />
        )}

        {currentPage === 'about' && (
          <About 
            onSetPage={handleSetPage}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )}

        {currentPage === 'launchpad' && (
          <Launchpad />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}

        {currentPage === 'podcast' && (
          <Podcast />
        )}

        {/* Dynamic Detail Pages */}
        {currentPage === 'attorney-detail' && (
          <AttorneyDetail
            attorneyId={selectedAttorneyId}
            onSetPage={handleSetPage}
            onSelectAttorney={handleSelectAttorney}
            onOpenConsultation={() => setConsultationOpen(true)}
            activeHomepage={activeCity}
          />
        )}

        {currentPage === 'practice-detail' && (
          <PracticeDetail
            practiceId={selectedPracticeId}
            onSetPage={handleSetPage}
            onSelectPracticeArea={handleSelectPracticeArea}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onSetPage={handleSetPage}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )}

        {currentPage === 'case-results' && (
          <CaseResultsPage
            onSetPage={handleSetPage}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )}

        {currentPage === 'faqs' && (
          <KeyFAQsPage
            onSetPage={handleSetPage}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )}
      </main>

      {/* Persistent Footer with logo grids and office directories */}
      <Footer 
        setCurrentPage={handleSetPage}
        onOpenConsultation={() => setConsultationOpen(true)}
        onSelectPracticeArea={handleSelectPracticeArea}
      />

      {/* Consultation Popup Dialog Overlay */}
      <ConsultationModal 
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Floating 24/7 After-Hours Emergency Call Responder */}
      <EmergencyAnsweringWidget />
    </div>
  );
}
