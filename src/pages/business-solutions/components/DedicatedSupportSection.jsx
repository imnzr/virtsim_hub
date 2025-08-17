import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DedicatedSupportSection = () => {
  const supportTiers = [
    {
      tier: 'Standard Support',
      description: 'Essential support for growing businesses',
      responseTime: '24 hours',
      availability: 'Business Hours',
      channels: ['Email', 'Knowledge Base'],
      features: [
        'Email support during business hours',
        'Comprehensive knowledge base',
        'Community forums access',
        'Standard documentation',
        'Basic troubleshooting guides'
      ],
      sla: '95% resolution within 48 hours'
    },
    {
      tier: 'Priority Support',
      description: 'Enhanced support for mission-critical operations',
      responseTime: '4 hours',
      availability: '24/7',
      channels: ['Email', 'Phone', 'Live Chat'],
      features: [
        '24/7 phone and email support',
        'Priority ticket handling',
        'Live chat support',
        'Advanced troubleshooting',
        'Escalation management',
        'Monthly health checks'
      ],
      sla: '99% resolution within 24 hours',
      popular: true
    },
    {
      tier: 'Enterprise Support',
      description: 'Dedicated support for large-scale deployments',
      responseTime: '1 hour',
      availability: '24/7',
      channels: ['Dedicated Manager', 'Phone', 'Email', 'Slack'],
      features: [
        'Dedicated account manager',
        'Direct phone line access',
        'Slack integration support',
        'Custom SLA agreements',
        'Proactive monitoring',
        'Quarterly business reviews',
        'On-site support available'
      ],
      sla: '99.9% resolution within 4 hours'
    }
  ];

  const supportTeam = [
    {
      name: 'Sarah Chen',
      role: 'Enterprise Account Manager',
      expertise: 'Large-scale deployments, Strategic planning',
      experience: '8+ years',
      contact: 'sarah.chen@virtsimhub.com',
      phone: '+1 (555) 123-4567'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Technical Integration Lead',
      expertise: 'API integrations, Custom solutions',
      experience: '10+ years',
      contact: 'michael.rodriguez@virtsimhub.com',
      phone: '+1 (555) 123-4568'
    },
    {
      name: 'Emily Watson',
      role: 'Customer Success Manager',
      expertise: 'Onboarding, Training, Optimization',
      experience: '6+ years',
      contact: 'emily.watson@virtsimhub.com',
      phone: '+1 (555) 123-4569'
    }
  ];

  const slaGuarantees = [
    {
      metric: 'API Uptime',
      guarantee: '99.99%',
      description: 'Guaranteed API availability with automatic failover',
      icon: 'Activity'
    },
    {
      metric: 'Response Time',
      guarantee: '< 200ms',
      description: 'Average API response time globally',
      icon: 'Zap'
    },
    {
      metric: 'Support Response',
      guarantee: '< 1 hour',
      description: 'Enterprise tier support response time',
      icon: 'Clock'
    },
    {
      metric: 'Issue Resolution',
      guarantee: '99.5%',
      description: 'First-contact resolution rate',
      icon: 'CheckCircle'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dedicated Account Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience unparalleled support with our dedicated account management services, designed to ensure your success at every stage of your journey.
          </p>
        </div>

        {/* Support Tiers */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Support Service Levels
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {supportTiers?.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border-2 ${
                  tier?.popular
                    ? 'border-blue-500 shadow-xl scale-105'
                    : 'border-gray-200 shadow-sm hover:shadow-lg'
                } transition-all duration-300`}
              >
                {tier?.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Recommended
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{tier?.tier}</h4>
                  <p className="text-gray-600 mb-6">{tier?.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600">{tier?.responseTime}</div>
                      <div className="text-xs text-gray-500">Response Time</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600">{tier?.availability}</div>
                      <div className="text-xs text-gray-500">Availability</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {tier?.channels?.map((channel, channelIndex) => (
                      <span
                        key={channelIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {channel}
                      </span>
                    ))}
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

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="text-sm font-medium text-gray-900 mb-1">SLA Guarantee</div>
                  <div className="text-sm text-gray-600">{tier?.sla}</div>
                </div>

                <Button
                  variant={tier?.popular ? "default" : "outline"}
                  fullWidth
                  size="lg"
                  className={tier?.popular ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  Contact Support Team
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Meet Your Dedicated Support Team
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {supportTeam?.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member?.name}</h4>
                <p className="text-blue-600 font-medium mb-4">{member?.role}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Expertise</div>
                    <div className="text-sm text-gray-600">{member?.expertise}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Experience</div>
                    <div className="text-sm text-gray-600">{member?.experience}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Mail" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{member?.contact}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Phone" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{member?.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SLA Guarantees */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-12">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Service Level Guarantees
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {slaGuarantees?.map((sla, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <Icon name={sla?.icon} size={24} className="text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{sla?.guarantee}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{sla?.metric}</div>
                <div className="text-sm text-gray-600">{sla?.description}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All SLA guarantees are backed by our commitment to excellence and include service credits for any downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                iconName="FileText"
                iconPosition="left"
              >
                View Full SLA Agreement
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Discuss Custom SLA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedSupportSection;