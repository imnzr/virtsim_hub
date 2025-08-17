import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Icon name="Building2" size={16} />
                <span>Enterprise Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Scale Your Business with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  Enterprise VirtSIM
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Empower your organization with bulk virtual SIM solutions, custom API integrations, and dedicated support for seamless global connectivity.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                iconName="ArrowRight" 
                iconPosition="right"
              >
                Get Custom Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Phone" 
                iconPosition="left"
              >
                Schedule Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-blue-200">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">99.9%</div>
                <div className="text-sm text-blue-200">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-blue-200">Dedicated Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Enterprise Dashboard</h3>
                  <div className="flex items-center space-x-2 text-green-400">
                    <Icon name="CheckCircle" size={16} />
                    <span className="text-sm">Live</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-400">1,247</div>
                    <div className="text-sm text-blue-200">Active SIMs</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">$12,450</div>
                    <div className="text-sm text-blue-200">Monthly Savings</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Global Coverage</span>
                    <span className="text-white font-medium">180+ Countries</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">API Calls Today</span>
                    <span className="text-white font-medium">45,230</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Response Time</span>
                    <span className="text-green-400 font-medium">&lt; 200ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;