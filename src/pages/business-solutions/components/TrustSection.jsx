import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrustSection = () => {
  const [activeTab, setActiveTab] = useState('security');

  const securityCertifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Comprehensive security, availability, and confidentiality controls',
      icon: 'Shield',
      status: 'Certified',
      validUntil: '2025-12-31'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      icon: 'Award',
      status: 'Certified',
      validUntil: '2025-08-15'
    },
    {
      name: 'GDPR Compliant',
      description: 'Full compliance with European data protection regulations',
      icon: 'Lock',
      status: 'Compliant',
      validUntil: 'Ongoing'
    },
    {
      name: 'PCI DSS Level 1',
      description: 'Highest level of payment card industry security standards',
      icon: 'CreditCard',
      status: 'Certified',
      validUntil: '2025-06-30'
    }
  ];

  const complianceDocuments = [
    {
      title: 'Security Whitepaper',
      description: 'Comprehensive overview of our security architecture and practices',
      type: 'PDF',
      size: '2.4 MB',
      lastUpdated: '2024-12-15'
    },
    {
      title: 'Compliance Report',
      description: 'Annual third-party security and compliance audit results',
      type: 'PDF',
      size: '1.8 MB',
      lastUpdated: '2024-11-30'
    },
    {
      title: 'Privacy Policy',
      description: 'Detailed privacy policy and data handling procedures',
      type: 'PDF',
      size: '0.9 MB',
      lastUpdated: '2024-12-01'
    },
    {
      title: 'Terms of Service',
      description: 'Enterprise terms of service and service level agreements',
      type: 'PDF',
      size: '1.2 MB',
      lastUpdated: '2024-12-10'
    }
  ];

  const clientTestimonials = [
    {
      company: 'TechGlobal Solutions',
      industry: 'Technology',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
      testimonial: `VirtSIM Hub has transformed our global connectivity strategy. Their enterprise-grade security and reliable service have enabled us to scale our IoT operations across 40+ countries with complete confidence.`,
      author: 'David Chen',
      position: 'CTO',
      metrics: {
        deployment: '25,000+ devices',
        uptime: '99.98%',
        savings: '35% cost reduction'
      }
    },
    {
      company: 'GlobalComm Enterprise',
      industry: 'Telecommunications',
      logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&h=100&fit=crop&crop=center',
      testimonial: `The level of support and technical expertise from VirtSIM Hub is exceptional. Their white-label solution allowed us to launch our virtual SIM service in just 6 weeks, generating significant new revenue streams.`,
      author: 'Sarah Martinez',
      position: 'VP of Product',
      metrics: {
        revenue: '$2.8M+ annual',
        customers: '12,000+ users',
        timeToMarket: '6 weeks'
      }
    },
    {
      company: 'LogiTrack Systems',
      industry: 'Fleet Management',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center',
      testimonial: `VirtSIM Hub's API integration capabilities are outstanding. We were able to seamlessly integrate their services into our existing platform, providing our customers with global connectivity without any disruption.`,
      author: 'Michael Thompson',
      position: 'Head of Engineering',
      metrics: {
        integration: '< 2 weeks',
        coverage: '180+ countries',
        reliability: '99.95% uptime'
      }
    }
  ];

  const tabs = [
    { id: 'security', label: 'Security & Compliance', icon: 'Shield' },
    { id: 'testimonials', label: 'Client Testimonials', icon: 'Users' },
    { id: 'documentation', label: 'Documentation', icon: 'FileText' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trust & Transparency Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on a foundation of security, compliance, and transparency. Discover why leading enterprises trust VirtSIM Hub with their critical communications infrastructure.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        {/* Security & Compliance Tab */}
        {activeTab === 'security' && (
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
                Enterprise Security Certifications
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {securityCertifications?.map((cert, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Icon name={cert?.icon} size={24} className="text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-gray-900">{cert?.name}</h4>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            {cert?.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{cert?.description}</p>
                        <div className="text-sm text-gray-500">
                          Valid until: {new Date(cert.validUntil)?.toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-12">
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
                Security Highlights
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-sm">
                    <Icon name="Lock" size={24} className="text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Encryption</h4>
                  <p className="text-gray-600">All data encrypted in transit and at rest using AES-256 encryption</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-sm">
                    <Icon name="Eye" size={24} className="text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Monitoring</h4>
                  <p className="text-gray-600">Continuous security monitoring and threat detection systems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-sm">
                    <Icon name="UserCheck" size={24} className="text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Access Controls</h4>
                  <p className="text-gray-600">Multi-factor authentication and role-based access controls</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Client Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="space-y-8">
            {clientTestimonials?.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial?.logo}
                        alt={`${testimonial?.company} logo`}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{testimonial?.company}</h4>
                        <p className="text-gray-600">{testimonial?.industry}</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 italic mb-6">
                      "{testimonial?.testimonial}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial?.author}</div>
                        <div className="text-gray-600">{testimonial?.position}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6">
                    <h5 className="font-semibold text-gray-900 mb-4">Key Results</h5>
                    <div className="space-y-4">
                      {Object.entries(testimonial?.metrics)?.map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-gray-600 capitalize">{key?.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-semibold text-blue-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Documentation Tab */}
        {activeTab === 'documentation' && (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              Compliance Documentation
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {complianceDocuments?.map((doc, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon name="FileText" size={20} className="text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{doc?.title}</h4>
                      <p className="text-gray-600 mb-4">{doc?.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{doc?.type} • {doc?.size}</span>
                        <span>Updated: {new Date(doc.lastUpdated)?.toLocaleDateString()}</span>
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Download"
                        iconPosition="left"
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Need additional documentation or have specific compliance questions?
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Contact Compliance Team
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustSection;