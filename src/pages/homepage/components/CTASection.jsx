import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const quickActions = [
    {
      id: 1,
      title: 'Browse Services',
      description: 'Explore our comprehensive marketplace of virtual SIM services',
      icon: 'Store',
      link: '/service-marketplace',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      id: 2,
      title: 'API Documentation',
      description: 'Integrate our services with comprehensive developer resources',
      icon: 'Code',
      link: '/api-documentation-hub',
      color: 'from-green-600 to-green-700',
      hoverColor: 'hover:from-green-700 hover:to-green-800'
    },
    {
      id: 3,
      title: 'Business Solutions',
      description: 'Enterprise-grade packages for large-scale deployments',
      icon: 'Building2',
      link: '/business-solutions',
      color: 'from-purple-600 to-purple-700',
      hoverColor: 'hover:from-purple-700 hover:to-purple-800'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Icon name="Rocket" size={16} className="text-yellow-400" />
            <span>Get Started Today</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Connectivity?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses and developers who trust VirtSIM Hub 
            for their virtual telecommunications needs. Start with our free tier 
            or explore enterprise solutions.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/account-dashboard">
              <Button 
                variant="default" 
                size="xl" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 text-lg w-full sm:w-auto"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Free Trial
              </Button>
            </Link>
            
            <Link to="/service-marketplace">
              <Button 
                variant="outline" 
                size="xl" 
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-4 text-lg w-full sm:w-auto"
                iconName="Eye"
                iconPosition="left"
              >
                View Pricing
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-blue-200">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span className="text-sm">10,000+ Active Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={20} />
              <span className="text-sm">180+ Countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={20} />
              <span className="text-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {quickActions.map((action) => (
            <Link 
              key={action.id}
              to={action.link}
              className="group block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${action.color} ${action.hoverColor} transition-all duration-300 group-hover:scale-110`}>
                    <Icon name={action.icon} size={28} color="white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {action.title}
                    </h3>
                    
                    <p className="text-blue-100 leading-relaxed">
                      {action.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center space-x-2 text-white/70 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <Icon 
                      name="ArrowRight" 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Custom Solutions?
                </h3>
                <p className="text-blue-100 mb-6">
                  Our enterprise team can help you build custom integrations, 
                  bulk pricing packages, and dedicated support channels.
                </p>
                <Link to="/business-solutions">
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Right Content */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Developer Resources
                </h3>
                <p className="text-blue-100 mb-6">
                  Comprehensive API documentation, SDKs, and sandbox environments 
                  to help you integrate quickly and efficiently.
                </p>
                <Link to="/api-documentation-hub">
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                    iconName="Code"
                    iconPosition="left"
                  >
                    View API Docs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;