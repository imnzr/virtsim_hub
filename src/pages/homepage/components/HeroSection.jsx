import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentPrice, setCurrentPrice] = useState(0.85);
  const [availableServices, setAvailableServices] = useState(247);

  // Mock real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice(prev => {
        const change = (Math.random() - 0.5) * 0.1;
        return Math.max(0.5, Math.min(2.0, prev + change));
      });
      setAvailableServices(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Icon name="Zap" size={16} className="text-yellow-400" />
                <span>Intelligent Automation</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Intelligent Virtual SIM Solutions with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Transparent Pricing
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Your trusted bridge in the virtual telecommunications ecosystem. 
                Automated procurement, dynamic pricing, and seamless API integration 
                for global connectivity without barriers.
              </p>
            </div>

            {/* Live Pricing Widget */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Live Pricing</h3>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Real-time</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    ${currentPrice.toFixed(2)}
                  </div>
                  <div className="text-sm text-blue-200">Starting from</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {availableServices}
                  </div>
                  <div className="text-sm text-blue-200">Services available</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/service-marketplace">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 w-full sm:w-auto"
                  iconName="Store"
                  iconPosition="left"
                >
                  Browse Services
                </Button>
              </Link>
              
              <Link to="/api-documentation-hub">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 w-full sm:w-auto"
                  iconName="Code"
                  iconPosition="left"
                >
                  View API Docs
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Service Availability Checker */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Service Availability</h3>
                <p className="text-blue-200">Check real-time service status globally</p>
              </div>

              {/* Mock Global Coverage Map */}
              <div className="relative bg-white/5 rounded-2xl p-6 h-64 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="Globe" size={64} className="text-blue-300 mx-auto" />
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-green-400">180+</div>
                    <div className="text-sm text-blue-200">Countries covered</div>
                  </div>
                </div>
                
                {/* Status Indicators */}
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Active</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span>Limited</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span>Offline</span>
                  </div>
                </div>
              </div>

              {/* Quick Check */}
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter country or region..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <Button 
                  variant="default" 
                  fullWidth 
                  className="bg-teal-600 hover:bg-teal-700"
                  iconName="Search"
                  iconPosition="left"
                >
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;