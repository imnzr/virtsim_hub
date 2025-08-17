import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WhiteLabelSection = () => {
  const [activeFeature, setActiveFeature] = useState('branding');

  const whiteLabelFeatures = [
    {
      id: 'branding',
      title: 'Complete Brand Customization',
      description: 'Transform our platform into your own branded solution with full customization capabilities.',
      icon: 'Palette',
      details: [
        'Custom logo and color schemes',
        'Branded email templates',
        'Custom domain configuration',
        'White-label mobile apps',
        'Personalized user interface',
        'Custom documentation'
      ]
    },
    {
      id: 'reseller',
      title: 'Reseller Program',
      description: 'Join our partner network and offer virtual SIM services under your brand with competitive margins.',
      icon: 'Handshake',
      details: [
        'Up to 40% profit margins',
        'Dedicated partner portal',
        'Marketing materials provided',
        'Sales training and support',
        'Volume-based incentives',
        'Co-marketing opportunities'
      ]
    },
    {
      id: 'technical',
      title: 'Technical Integration',
      description: 'Seamlessly integrate our services into your existing platform with comprehensive technical support.',
      icon: 'Code',
      details: [
        'Complete API documentation',
        'SDK for multiple languages',
        'Webhook integration',
        'Custom endpoints',
        'Sandbox environment',
        'Technical consultation'
      ]
    },
    {
      id: 'support',
      title: 'Partner Support',
      description: 'Comprehensive support system designed to ensure your success as a white-label partner.',
      icon: 'HeadphonesIcon',
      details: [
        '24/7 technical support',
        'Dedicated account manager',
        'Partner training programs',
        'Marketing support',
        'Business development assistance',
        'Regular performance reviews'
      ]
    }
  ];

  const successStories = [
    {
      partner: 'CloudConnect Solutions',
      industry: 'Cloud Services',
      revenue: '$2.5M+ Annual Revenue',
      customers: '8,500+ Active Users',
      growth: '300% Year-over-Year',
      testimonial: `VirtSIM Hub's white-label solution allowed us to expand our service portfolio without the complexity of building our own infrastructure. The support team has been exceptional.`
    },
    {
      partner: 'GlobalTech Partners',industry: 'IT Services',revenue: '$1.8M+ Annual Revenue',customers: '5,200+ Active Users',growth: '250% Year-over-Year',
      testimonial: `The seamless integration and comprehensive documentation made it easy to launch our virtual SIM services. Our customers love the reliability and global coverage.`
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter Partner',
      monthlyFee: 499,
      commission: '25%',
      features: [
        'Basic white-label branding',
        'Standard API access',
        'Email support',
        'Monthly reporting',
        'Up to 1,000 customers'
      ],
      minCommitment: '6 months'
    },
    {
      name: 'Growth Partner',
      monthlyFee: 999,
      commission: '35%',
      features: [
        'Advanced branding options',
        'Priority API access',
        'Phone & email support',
        'Real-time analytics',
        'Up to 10,000 customers',
        'Marketing materials'
      ],
      minCommitment: '12 months',
      popular: true
    },
    {
      name: 'Enterprise Partner',
      monthlyFee: 'Custom',
      commission: '40%',
      features: [
        'Complete customization',
        'Dedicated infrastructure',
        '24/7 dedicated support',
        'Custom reporting',
        'Unlimited customers',
        'Co-marketing opportunities',
        'Dedicated account manager'
      ],
      minCommitment: '24 months'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            White-Label Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Launch your own virtual SIM service with our comprehensive white-label platform, complete branding, and dedicated partner support.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {whiteLabelFeatures?.map((feature) => (
              <button
                key={feature?.id}
                onClick={() => setActiveFeature(feature?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFeature === feature?.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon name={feature?.icon} size={16} />
                <span>{feature?.title}</span>
              </button>
            ))}
          </div>

          {whiteLabelFeatures?.map((feature) => (
            activeFeature === feature?.id && (
              <div key={feature?.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Icon name={feature?.icon} size={24} className="text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {feature?.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-lg">
                      {feature?.description}
                    </p>
                    
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      Learn More
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {feature?.details?.map((detail, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Partner Success Stories
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {successStories?.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{story?.partner}</h4>
                      <p className="text-gray-600">{story?.industry}</p>
                    </div>
                    <Icon name="Quote" size={32} className="text-purple-300" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{story?.revenue}</div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{story?.customers}</div>
                      <div className="text-xs text-gray-500">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{story?.growth}</div>
                      <div className="text-xs text-gray-500">Growth</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-600 italic">
                    "{story?.testimonial}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Partner Program Tiers
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers?.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border-2 ${
                  tier?.popular
                    ? 'border-purple-500 shadow-xl scale-105'
                    : 'border-gray-200 shadow-sm hover:shadow-lg'
                } transition-all duration-300`}
              >
                {tier?.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{tier?.name}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      {typeof tier?.monthlyFee === 'number' ? `$${tier?.monthlyFee}` : tier?.monthlyFee}
                    </span>
                    {typeof tier?.monthlyFee === 'number' && (
                      <span className="text-gray-600 ml-2">/month</span>
                    )}
                  </div>
                  <div className="text-lg font-semibold text-purple-600 mb-2">
                    {tier?.commission} Commission
                  </div>
                  <div className="text-sm text-gray-500">
                    Min. commitment: {tier?.minCommitment}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={tier?.popular ? "default" : "outline"}
                  fullWidth
                  size="lg"
                  className={tier?.popular ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {tier?.name === 'Enterprise Partner' ? 'Contact Sales' : 'Become Partner'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to start your white-label journey? Our partner success team is here to help.
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Schedule Partner Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelSection;