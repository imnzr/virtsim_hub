import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const [stats, setStats] = useState({
    uptime: 99.94,
    responseTime: 1.8,
    ordersProcessed: 15847,
    activeSessions: 2341
  });

  // Mock real-time stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        uptime: Math.max(99.5, Math.min(99.99, prev?.uptime + (Math.random() - 0.5) * 0.01)),
        responseTime: Math.max(1.0, Math.min(3.0, prev?.responseTime + (Math.random() - 0.5) * 0.2)),
        ordersProcessed: prev?.ordersProcessed + Math.floor(Math.random() * 3),
        activeSessions: Math.max(1000, prev?.activeSessions + Math.floor(Math.random() * 10) - 5)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const trustMetrics = [
    {
      id: 1,
      icon: 'Activity',
      label: 'System Uptime',
      value: `${stats?.uptime?.toFixed(2)}%`,
      description: 'Last 30 days',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 2,
      icon: 'Zap',
      label: 'Response Time',
      value: `${stats?.responseTime?.toFixed(1)}s`,
      description: 'Average API response',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 3,
      icon: 'ShoppingCart',
      label: 'Orders Processed',
      value: stats?.ordersProcessed?.toLocaleString(),
      description: 'This month',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 4,
      icon: 'Users',
      label: 'Active Sessions',
      value: stats?.activeSessions?.toLocaleString(),
      description: 'Right now',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'ISO 27001',
      description: 'Information Security Management',
      icon: 'Shield',
      verified: true
    },
    {
      id: 2,
      name: 'SOC 2 Type II',
      description: 'Security & Availability',
      icon: 'Lock',
      verified: true
    },
    {
      id: 3,
      name: 'GDPR Compliant',
      description: 'Data Protection Regulation',
      icon: 'FileCheck',
      verified: true
    },
    {
      id: 4,
      name: 'PCI DSS',
      description: 'Payment Card Industry',
      icon: 'CreditCard',
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Trust & Reliability</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Enterprise Trust
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading security, reliability, and performance metrics 
            that enterprises trust for their critical communications.
          </p>
        </div>

        {/* Live Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics?.map((metric) => (
            <div 
              key={metric?.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl ${metric?.bgColor} flex items-center justify-center`}>
                  <Icon name={metric?.icon} size={24} className={metric?.color} />
                </div>
                
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {metric?.value}
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    {metric?.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {metric?.description}
                  </div>
                </div>
              </div>
              
              {/* Live indicator */}
              <div className="flex items-center justify-end mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Live</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Certifications */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Security Certifications
            </h3>
            <p className="text-gray-600">
              Certified and compliant with industry-leading security standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert) => (
              <div 
                key={cert?.id}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={28} className="text-blue-600" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <h4 className="font-bold text-gray-900">{cert?.name}</h4>
                    {cert?.verified && (
                      <Icon name="CheckCircle" size={16} className="text-green-500" />
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600">{cert?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Signals */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 text-gray-700">
              <Icon name="Clock" size={20} className="text-blue-600" />
              <span className="font-medium">24/7 Monitoring</span>
            </div>
            
            <div className="w-px h-6 bg-gray-200"></div>
            
            <div className="flex items-center space-x-2 text-gray-700">
              <Icon name="Headphones" size={20} className="text-green-600" />
              <span className="font-medium">Expert Support</span>
            </div>
            
            <div className="w-px h-6 bg-gray-200"></div>
            
            <div className="flex items-center space-x-2 text-gray-700">
              <Icon name="Award" size={20} className="text-purple-600" />
              <span className="font-medium">99.9% SLA</span>
            </div>
            
            <div className="w-px h-6 bg-gray-200"></div>
            
            <div className="flex items-center space-x-2 text-gray-700">
              <Icon name="Globe" size={20} className="text-orange-600" />
              <span className="font-medium">Global Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;