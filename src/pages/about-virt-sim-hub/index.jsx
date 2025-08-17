import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import TechnologySection from './components/TechnologySection';
import TrustSection from './components/TrustSection';
import ContactSection from './components/ContactSection';

const AboutVirtSimHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About VirtSIM Hub - Trusted Bridge in Virtual Telecommunications</title>
        <meta 
          name="description" 
          content="Learn about VirtSIM Hub's mission as Indonesia's leading virtual SIM marketplace. Discover our intelligent automation, transparent pricing, and commitment to connecting Indonesia to the global digital world." 
        />
        <meta name="keywords" content="VirtSIM Hub, virtual SIM, Indonesia, telecommunications, about us, company profile" />
        <meta property="og:title" content="About VirtSIM Hub - Trusted Bridge in Virtual Telecommunications" />
        <meta property="og:description" content="VirtSIM Hub adalah platform marketplace virtual SIM terdepan yang menghubungkan konsumen dan bisnis Indonesia dengan penyedia layanan virtual SIM global." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-virt-sim-hub" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <TeamSection />
        <TechnologySection />
        <TrustSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold">VirtSIM Hub</span>
              </div>
              <p className="text-sm text-background/80">
                Jembatan terpercaya dalam ekosistem telekomunikasi virtual Indonesia.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/homepage" className="block text-sm text-background/80 hover:text-background transition-colors">Home</a>
                <a href="/service-marketplace" className="block text-sm text-background/80 hover:text-background transition-colors">Marketplace</a>
                <a href="/api-documentation-hub" className="block text-sm text-background/80 hover:text-background transition-colors">API Docs</a>
                <a href="/business-solutions" className="block text-sm text-background/80 hover:text-background transition-colors">Business</a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <p className="text-sm text-background/80">Email: support@virtsimhub.id</p>
                <p className="text-sm text-background/80">Phone: +62 21 1234 5678</p>
                <p className="text-sm text-background/80">WhatsApp: +62 811 2345 6789</p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">Terms of Service</a>
                <a href="#" className="block text-sm text-background/80 hover:text-background transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm text-background/60">
              © {new Date()?.getFullYear()} VirtSIM Hub. All rights reserved. | PT. VirtSIM Indonesia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutVirtSimHub;