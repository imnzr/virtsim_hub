import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const APIIntegrationSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const integrationServices = [
    {
      id: 'custom-api',
      title: 'Custom API Development',
      description: 'Tailored API solutions designed specifically for your business requirements and existing infrastructure.',
      features: ['Custom endpoints', 'Webhook integration', 'Real-time notifications', 'Custom authentication'],
      timeline: '4-8 weeks',
      price: 'From $15,000'
    },
    {
      id: 'sdk-development',
      title: 'SDK & Library Development',
      description: 'Native SDKs and libraries for seamless integration across multiple programming languages and platforms.',
      features: ['Multi-language support', 'Comprehensive documentation', 'Code examples', 'Testing frameworks'],
      timeline: '6-10 weeks',
      price: 'From $25,000'
    },
    {
      id: 'system-integration',
      title: 'Enterprise System Integration',
      description: 'Complete integration with your existing CRM, ERP, and business management systems.',
      features: ['CRM integration', 'ERP connectivity', 'Data synchronization', 'Automated workflows'],
      timeline: '8-12 weeks',
      price: 'From $35,000'
    }
  ];

  const caseStudies = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      industry: 'IoT Platform',
      challenge: 'Needed to provision 10,000+ SIMs for global IoT deployment',
      solution: 'Custom API integration with automated provisioning and monitoring',
      results: {
        timeReduction: '75%',
        costSavings: '$2.3M annually',
        efficiency: '99.8% success rate'
      }
    },
    {
      id: 2,
      company: 'GlobalComm Enterprise',
      industry: 'Telecommunications',
      challenge: 'Required white-label solution for reseller platform',
      solution: 'Complete API suite with custom branding and billing integration',
      results: {
        revenue: '$5M+ new revenue',
        customers: '15,000+ end users',
        satisfaction: '98% customer satisfaction'
      }
    },
    {
      id: 3,
      company: 'LogiTrack Systems',
      industry: 'Fleet Management',
      challenge: 'Needed real-time connectivity for 5,000 vehicles across 25 countries',
      solution: 'Multi-country API with real-time switching and cost optimization',
      results: {
        coverage: '100% global coverage',
        uptime: '99.95% connectivity',
        optimization: '40% cost reduction'
      }
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'services', label: 'Services', icon: 'Settings' },
    { id: 'case-studies', label: 'Case Studies', icon: 'FileText' },
    { id: 'roi-metrics', label: 'ROI Metrics', icon: 'TrendingUp' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Custom API Integration Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive API integration services and proven implementation expertise.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Enterprise-Grade API Solutions
                </h3>
                <p className="text-gray-600 text-lg">
                  Our API integration services are designed to seamlessly connect VirtSIM Hub's capabilities with your existing business infrastructure, enabling automated workflows and intelligent decision-making.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span className="text-gray-700">RESTful API architecture with comprehensive documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span className="text-gray-700">Real-time webhooks for instant status updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span className="text-gray-700">Sandbox environment for safe testing and development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-500" />
                    <span className="text-gray-700">24/7 technical support and monitoring</span>
                  </div>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  iconName="Code"
                  iconPosition="left"
                >
                  Explore API Documentation
                </Button>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold">API Performance Metrics</h4>
                  <Icon name="Activity" size={20} className="text-green-400" />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                    <div className="text-sm text-gray-300">API Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">&lt;150ms</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">500M+</div>
                    <div className="text-sm text-gray-300">API Calls/Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">180+</div>
                    <div className="text-sm text-gray-300">Countries Supported</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="text-sm text-gray-300 mb-2">Current API Status</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">All Systems Operational</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-8">
              {integrationServices?.map((service) => (
                <div key={service?.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {service?.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {service?.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service?.features?.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={16} className="text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-6 border border-gray-200">
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Timeline</div>
                            <div className="text-lg font-semibold text-gray-900">{service?.timeline}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Starting Price</div>
                            <div className="text-lg font-semibold text-blue-600">{service?.price}</div>
                          </div>
                        </div>
                        
                        <Button
                          variant="outline"
                          fullWidth
                          className="mt-4"
                          iconName="MessageCircle"
                          iconPosition="left"
                        >
                          Discuss Requirements
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'case-studies' && (
            <div className="space-y-8">
              {caseStudies?.map((study) => (
                <div key={study?.id} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {study?.company}
                        </h3>
                        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          <Icon name="Building" size={14} />
                          <span>{study?.industry}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{study?.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{study?.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Results Achieved</h4>
                      <div className="space-y-4">
                        {Object.entries(study?.results)?.map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span className="text-gray-600 capitalize">{key?.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="font-bold text-blue-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'roi-metrics' && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Proven ROI Metrics
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="TrendingUp" size={24} className="text-green-600" />
                      <h4 className="text-lg font-semibold text-green-900">Cost Reduction</h4>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">Average 35%</div>
                    <p className="text-green-700">Reduction in communication costs within 6 months</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="Clock" size={24} className="text-blue-600" />
                      <h4 className="text-lg font-semibold text-blue-900">Time Savings</h4>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">80% Faster</div>
                    <p className="text-blue-700">SIM provisioning and management processes</p>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="Users" size={24} className="text-orange-600" />
                      <h4 className="text-lg font-semibold text-orange-900">Operational Efficiency</h4>
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">60% Less</div>
                    <p className="text-orange-700">Manual intervention required for SIM management</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-semibold mb-6">ROI Calculator</h4>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-300 mb-2">Current Monthly Cost</div>
                      <div className="text-2xl font-bold text-white">$25,000</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-2">Projected Savings</div>
                      <div className="text-2xl font-bold text-green-400">$8,750</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="text-sm text-gray-300 mb-2">Annual ROI</div>
                    <div className="text-4xl font-bold text-green-400 mb-2">420%</div>
                    <div className="text-sm text-gray-300">Based on average customer data</div>
                  </div>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    className="border-white/30 text-white hover:bg-white/10"
                    iconName="Calculator"
                    iconPosition="left"
                  >
                    Calculate Your ROI
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default APIIntegrationSection;