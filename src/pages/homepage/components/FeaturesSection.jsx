import React from 'react';
import Icon from '../../../components/AppIcon';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: 'Zap',
      title: 'Automated Procurement',
      description: 'Intelligent system automatically sources the best virtual SIM services from multiple providers, ensuring optimal availability and competitive pricing.',
      benefits: ['Real-time sourcing', 'Multi-provider integration', 'Instant activation'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: 'TrendingUp',
      title: 'Dynamic Pricing Intelligence',
      description: 'Advanced algorithms continuously analyze market rates to provide transparent, competitive pricing with real-time updates and cost optimization.',
      benefits: ['Live price feeds', 'Cost optimization', 'Transparent pricing'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: 'Code',
      title: 'Seamless API Integration',
      description: 'Robust API gateway enables effortless integration with comprehensive documentation, SDKs, and sandbox environments for developers.',
      benefits: ['RESTful APIs', 'Comprehensive docs', 'Developer tools'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Core Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose VirtSIM Hub?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of intelligent automation, transparent pricing, and seamless integration 
            in the virtual telecommunications ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div 
              key={feature?.id}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Feature Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature?.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={feature?.icon} size={28} color="white" strokeWidth={2} />
              </div>

              {/* Feature Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                  {feature?.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature?.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2">
                  {feature?.benefits?.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Flow Animation */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 text-green-600">
              <Icon name="CheckCircle" size={20} />
              <span className="font-semibold">99.9% Uptime Guaranteed</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2 text-blue-600">
              <Icon name="Clock" size={20} />
              <span className="font-semibold">&lt;2s Response Time</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2 text-orange-600">
              <Icon name="Shield" size={20} />
              <span className="font-semibold">Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;