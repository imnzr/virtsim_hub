import React from 'react';
import Icon from '../../../components/AppIcon';

const UseCasesSection = () => {
  const useCases = [
    {
      id: 1,
      icon: 'Cpu',
      title: 'IoT Device Connectivity',
      description: 'Connect thousands of IoT devices globally with automated SIM provisioning and centralized management.',
      features: ['Automated provisioning', 'Global coverage', 'Real-time monitoring', 'Cost optimization'],
      stats: { devices: '50K+', uptime: '99.9%', countries: '180+' }
    },
    {
      id: 2,
      icon: 'Globe',
      title: 'International Business Communications',
      description: 'Enable seamless communication for global teams with local numbers and competitive international rates.',
      features: ['Local presence', 'Team management', 'Unified billing', 'Multi-country support'],
      stats: { employees: '10K+', savings: '40%', locations: '25+' }
    },
    {
      id: 3,
      icon: 'Code',
      title: 'Developer Platform Integration',
      description: 'Build communication features into your applications with our robust API and SDK solutions.',
      features: ['RESTful APIs', 'Webhook support', 'SDK libraries', 'Sandbox environment'],
      stats: { apis: '500M+', latency: '<200ms', uptime: '99.99%' }
    },
    {
      id: 4,
      icon: 'Shield',
      title: 'Secure Enterprise Communications',
      description: 'Protect sensitive business communications with enterprise-grade security and compliance.',
      features: ['End-to-end encryption', 'Compliance ready', 'Audit trails', 'Access controls'],
      stats: { security: 'SOC2', compliance: 'GDPR', encryption: 'AES-256' }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Enterprise Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading organizations leverage VirtSIM Hub to transform their communication infrastructure and drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases?.map((useCase) => (
            <div key={useCase?.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name={useCase?.icon} size={24} className="text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {useCase?.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {useCase?.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {useCase?.features?.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={16} className="text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(useCase?.stats)?.map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;