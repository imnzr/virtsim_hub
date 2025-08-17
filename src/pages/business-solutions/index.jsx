import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import UseCasesSection from './components/UseCasesSection';
import ServicePackagesSection from './components/ServicePackagesSection';
import BulkOrderingSection from './components/BulkOrderingSection';
import APIIntegrationSection from './components/APIIntegrationSection';
import WhiteLabelSection from './components/WhiteLabelSection';
import EnterpriseDashboardSection from './components/EnterpriseDashboardSection';
import DedicatedSupportSection from './components/DedicatedSupportSection';
import PricingSection from './components/PricingSection';
import TrustSection from './components/TrustSection';
import CTASection from './components/CTASection';

const BusinessSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <UseCasesSection />
        <ServicePackagesSection />
        <BulkOrderingSection />
        <APIIntegrationSection />
        <WhiteLabelSection />
        <EnterpriseDashboardSection />
        <DedicatedSupportSection />
        <PricingSection />
        <TrustSection />
        <CTASection />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold">VirtSIM Hub</span>
          </div>
          <p className="text-gray-400">
            © {new Date()?.getFullYear()} VirtSIM Hub. All rights reserved. Empowering global connectivity through intelligent automation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BusinessSolutions;