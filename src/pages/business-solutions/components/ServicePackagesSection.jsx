import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicePackagesSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const packages = [
    {
      id: 'startup',
      name: 'Startup',
      description: 'Perfect for growing businesses and small teams',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Up to 100 virtual SIMs',
        'Basic API access',
        'Email support',
        '99.5% uptime SLA',
        'Standard integration',
        'Monthly usage reports',
        'Basic dashboard access'
      ],
      limits: {
        sims: '100',
        apiCalls: '10K/month',
        support: 'Email',
        countries: '50+'
      },
      popular: false
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'Ideal for scaling businesses with advanced needs',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        'Up to 1,000 virtual SIMs',
        'Full API access',
        'Priority support',
        '99.9% uptime SLA',
        'Custom integrations',
        'Real-time analytics',
        'Advanced dashboard',
        'Bulk management tools',
        'Dedicated account manager'
      ],
      limits: {
        sims: '1,000',
        apiCalls: '100K/month',
        support: 'Priority',
        countries: '100+'
      },
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        'Unlimited virtual SIMs',
        'Enterprise API suite',
        '24/7 dedicated support',
        '99.99% uptime SLA',
        'White-label solutions',
        'Custom reporting',
        'Multi-tenant dashboard',
        'Advanced security features',
        'Dedicated infrastructure',
        'Custom SLA agreements'
      ],
      limits: {
        sims: 'Unlimited',
        apiCalls: 'Unlimited',
        support: '24/7 Dedicated',
        countries: '180+'
      },
      popular: false
    }
  ];

  const getPrice = (pkg) => {
    return billingCycle === 'monthly' ? pkg?.monthlyPrice : pkg?.yearlyPrice;
  };

  const getSavings = (pkg) => {
    const monthlyCost = pkg?.monthlyPrice * 12;
    const yearlyCost = pkg?.yearlyPrice;
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Service Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs with transparent pricing and no hidden fees.
          </p>
          
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billingCycle === 'monthly' ?'bg-white text-gray-900 shadow-sm' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billingCycle === 'yearly' ?'bg-white text-gray-900 shadow-sm' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save up to 25%
              </span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages?.map((pkg) => (
            <div
              key={pkg?.id}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                pkg?.popular
                  ? 'border-blue-500 shadow-xl scale-105'
                  : 'border-gray-200 shadow-sm hover:shadow-lg'
              } transition-all duration-300`}
            >
              {pkg?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg?.name}</h3>
                <p className="text-gray-600 mb-6">{pkg?.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${getPrice(pkg)?.toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                
                {billingCycle === 'yearly' && (
                  <div className="text-sm text-green-600 font-medium">
                    Save {getSavings(pkg)}% with yearly billing
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                  {Object.entries(pkg?.limits)?.map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key?.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {pkg?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant={pkg?.popular ? "default" : "outline"}
                fullWidth
                size="lg"
                className={pkg?.popular ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {pkg?.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored packages for unique requirements.
          </p>
          <Button variant="outline" iconName="MessageCircle" iconPosition="left">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicePackagesSection;