import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [selectedVolume, setSelectedVolume] = useState('medium');

  const volumeTiers = [
    { id: 'small', label: '10-99 SIMs', discount: 0 },
    { id: 'medium', label: '100-499 SIMs', discount: 15 },
    { id: 'large', label: '500-999 SIMs', discount: 25 },
    { id: 'enterprise', label: '1000+ SIMs', discount: 35 }
  ];

  const basePrice = 5.99;
  const getCurrentPrice = () => {
    const tier = volumeTiers?.find(t => t?.id === selectedVolume);
    return basePrice * (1 - tier?.discount / 100);
  };

  const pricingFeatures = [
    {
      category: 'Volume Discounts',
      icon: 'Percent',
      items: [
        'Automatic volume pricing',
        'Tiered discount structure',
        'No minimum commitment',
        'Flexible scaling options'
      ]
    },
    {
      category: 'Enterprise Benefits',
      icon: 'Star',
      items: [
        'Custom pricing available',
        'Dedicated account manager',
        'Priority technical support',
        'Custom SLA agreements'
      ]
    },
    {
      category: 'Billing Features',
      icon: 'CreditCard',
      items: [
        'Consolidated monthly billing',
        'Multiple payment methods',
        'Automated invoicing',
        'Detailed usage reports'
      ]
    },
    {
      category: 'Cost Optimization',
      icon: 'TrendingDown',
      items: [
        'Real-time cost monitoring',
        'Usage optimization alerts',
        'Automated cost controls',
        'Savings recommendations'
      ]
    }
  ];

  const customQuoteFeatures = [
    'Volume-based custom pricing',
    'Multi-year contract discounts',
    'Custom integration services',
    'Dedicated infrastructure options',
    'White-label solutions',
    'Priority feature development'
  ];

  const savingsCalculator = {
    traditional: 8.99,
    virtsim: getCurrentPrice(),
    monthlySavings: (8.99 - getCurrentPrice()) * 100,
    annualSavings: (8.99 - getCurrentPrice()) * 100 * 12
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Enterprise Pricing & Volume Discounts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, volume-based pricing designed to scale with your business needs and deliver maximum value.
          </p>
        </div>

        {/* Volume Selector */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Select Your Volume Tier
            </h3>
            <p className="text-gray-600">
              Choose your expected volume to see personalized pricing
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {volumeTiers?.map((tier) => (
              <button
                key={tier?.id}
                onClick={() => setSelectedVolume(tier?.id)}
                className={`px-6 py-4 rounded-xl font-medium transition-all duration-200 ${
                  selectedVolume === tier?.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="text-lg font-semibold">{tier?.label}</div>
                {tier?.discount > 0 && (
                  <div className="text-sm opacity-80">Save {tier?.discount}%</div>
                )}
              </button>
            ))}
          </div>

          {/* Pricing Display */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="mb-4">
                  <span className="text-5xl font-bold text-blue-600">
                    ${getCurrentPrice()?.toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-600 ml-2">per SIM</span>
                </div>
                
                {selectedVolume !== 'small' && (
                  <div className="mb-4">
                    <span className="text-lg text-gray-500 line-through">
                      ${basePrice?.toFixed(2)}
                    </span>
                    <span className="ml-2 text-green-600 font-semibold">
                      Save {volumeTiers?.find(t => t?.id === selectedVolume)?.discount}%
                    </span>
                  </div>
                )}
                
                <p className="text-gray-600 mb-6">
                  {volumeTiers?.find(t => t?.id === selectedVolume)?.label} pricing tier
                </p>
                
                <Button
                  variant="default"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  iconName="Calculator"
                  iconPosition="left"
                >
                  Calculate Total Cost
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Savings Comparison
                </h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Traditional Provider</span>
                    <span className="font-semibold">${savingsCalculator?.traditional}/SIM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">VirtSIM Hub</span>
                    <span className="font-semibold text-blue-600">${getCurrentPrice()?.toFixed(2)}/SIM</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-900 font-medium">Monthly Savings (100 SIMs)</span>
                      <span className="font-bold text-green-600">
                        ${savingsCalculator?.monthlySavings?.toFixed(0)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">Annual Savings</span>
                      <span className="font-bold text-green-600">
                        ${savingsCalculator?.annualSavings?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            What's Included in Enterprise Pricing
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {pricingFeatures?.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name={feature?.icon} size={24} className="text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{feature?.category}</h4>
                </div>
                
                <div className="space-y-3">
                  {feature?.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Quote Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Need Custom Pricing?
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                For large deployments, multi-year contracts, or specialized requirements, we offer custom pricing solutions tailored to your specific needs.
              </p>
              
              <div className="space-y-3 mb-8">
                {customQuoteFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-green-300 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Request Custom Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Schedule Call
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6">Enterprise Benefits</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Volume Discounts</span>
                  <span className="font-semibold">Up to 50%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Contract Terms</span>
                  <span className="font-semibold">1-5 Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Payment Terms</span>
                  <span className="font-semibold">Net 30-90</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Support Level</span>
                  <span className="font-semibold">24/7 Dedicated</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-blue-100">
                  Custom quotes typically include additional services, dedicated infrastructure, and specialized support packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;