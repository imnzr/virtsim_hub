import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const contactMethods = [
    {
      method: 'Schedule Demo',
      description: 'Book a personalized demo with our enterprise solutions team',
      icon: 'Calendar',
      action: 'Schedule Now',
      highlight: true
    },
    {
      method: 'Request Quote',
      description: 'Get custom pricing for your specific requirements',
      icon: 'FileText',
      action: 'Get Quote',
      highlight: false
    },
    {
      method: 'Call Sales',
      description: 'Speak directly with our enterprise sales specialists',
      icon: 'Phone',
      action: 'Call Now',
      highlight: false
    },
    {
      method: 'Email Us',
      description: 'Send us your requirements and we\'ll respond within 4 hours',
      icon: 'Mail',
      action: 'Send Email',
      highlight: false
    }
  ];

  const nextSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We\'ll understand your requirements and current challenges',
      duration: '30 minutes'
    },
    {
      step: '02',
      title: 'Custom Proposal',
      description: 'Receive a tailored solution with pricing and implementation plan',
      duration: '2-3 days'
    },
    {
      step: '03',
      title: 'Pilot Program',
      description: 'Start with a small-scale pilot to validate the solution',
      duration: '2-4 weeks'
    },
    {
      step: '04',
      title: 'Full Deployment',
      description: 'Scale to full production with dedicated support',
      duration: '4-8 weeks'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Business Communications?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join hundreds of enterprises who trust VirtSIM Hub for their global connectivity needs. Let's discuss how we can help scale your business.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-200 hover:scale-105 ${
                method?.highlight
                  ? 'bg-white text-gray-900 border-white shadow-xl'
                  : 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                  method?.highlight ? 'bg-blue-100' : 'bg-white/20'
                }`}>
                  <Icon 
                    name={method?.icon} 
                    size={24} 
                    className={method?.highlight ? 'text-blue-600' : 'text-white'} 
                  />
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 ${
                  method?.highlight ? 'text-gray-900' : 'text-white'
                }`}>
                  {method?.method}
                </h3>
                
                <p className={`text-sm mb-4 ${
                  method?.highlight ? 'text-gray-600' : 'text-blue-100'
                }`}>
                  {method?.description}
                </p>
                
                <Button
                  variant={method?.highlight ? "default" : "outline"}
                  size="sm"
                  fullWidth
                  className={method?.highlight 
                    ? "bg-blue-600 hover:bg-blue-700" :"border-white/30 text-white hover:bg-white/10"
                  }
                >
                  {method?.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Your Journey to Enterprise Success
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {nextSteps?.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{step?.step}</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2">{step?.title}</h4>
                    <p className="text-blue-100 text-sm mb-3">{step?.description}</p>
                    
                    <div className="inline-flex items-center space-x-1 text-xs text-orange-300">
                      <Icon name="Clock" size={12} />
                      <span>{step?.duration}</span>
                    </div>
                  </div>
                </div>
                
                {index < nextSteps?.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={20} className="text-white/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Start Your Enterprise Journey Today
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let connectivity challenges hold back your business growth. Our enterprise team is ready to design a solution that scales with your ambitions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              iconName="Rocket"
              iconPosition="left"
            >
              Get Started Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Talk to Expert
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-blue-200">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">99.99%</div>
                <div className="text-sm text-blue-200">SLA Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-blue-200">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;