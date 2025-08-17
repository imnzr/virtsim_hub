import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ApiStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const statusData = {
    overall: {
      status: 'operational',
      uptime: '99.98%',
      responseTime: '142ms',
      lastIncident: '12 days ago'
    },
    services: [
      {
        name: 'API Gateway',
        status: 'operational',
        uptime: '99.99%',
        responseTime: '89ms',
        description: 'Main API endpoint handling all requests'
      },
      {
        name: 'Order Processing',
        status: 'operational',
        uptime: '99.97%',
        responseTime: '156ms',
        description: 'Virtual SIM order creation and management'
      },
      {
        name: 'Webhook Delivery',
        status: 'operational',
        uptime: '99.95%',
        responseTime: '203ms',
        description: 'Real-time webhook notifications'
      },
      {
        name: 'Authentication',
        status: 'operational',
        uptime: '100%',
        responseTime: '45ms',
        description: 'API key validation and rate limiting'
      },
      {
        name: 'Provider Integration',
        status: 'degraded',
        uptime: '98.12%',
        responseTime: '2.1s',
        description: '5sim.net integration for service provisioning'
      }
    ],
    metrics: [
      { name: 'Total Requests', value: '2.4M', change: '+12%', period: 'Last 24h' },
      { name: 'Success Rate', value: '99.94%', change: '+0.02%', period: 'Last 24h' },
      { name: 'Avg Response Time', value: '142ms', change: '-8ms', period: 'Last 24h' },
      { name: 'Active Orders', value: '1,247', change: '+156', period: 'Current' }
    ],
    incidents: [
      {
        id: 1,
        title: 'Increased response times for order creation',
        status: 'resolved',
        severity: 'minor',
        startTime: '2025-01-05T14:30:00Z',
        endTime: '2025-01-05T15:45:00Z',
        description: 'Some users experienced slower order processing due to high demand'
      },
      {
        id: 2,
        title: 'Webhook delivery delays',
        status: 'resolved',
        severity: 'major',
        startTime: '2024-12-28T09:15:00Z',
        endTime: '2024-12-28T11:30:00Z',
        description: 'Webhook notifications were delayed by up to 10 minutes'
      }
    ]
  };

  const getStatusColor = (status) => {
    const colors = {
      operational: 'text-green-600 bg-green-100',
      degraded: 'text-yellow-600 bg-yellow-100',
      outage: 'text-red-600 bg-red-100',
      maintenance: 'text-blue-600 bg-blue-100'
    };
    return colors?.[status] || 'text-gray-600 bg-gray-100';
  };

  const getStatusIcon = (status) => {
    const icons = {
      operational: 'CheckCircle',
      degraded: 'AlertTriangle',
      outage: 'XCircle',
      maintenance: 'Settings'
    };
    return icons?.[status] || 'Circle';
  };

  const getSeverityColor = (severity) => {
    const colors = {
      minor: 'text-yellow-600 bg-yellow-100',
      major: 'text-red-600 bg-red-100',
      critical: 'text-red-800 bg-red-200'
    };
    return colors?.[severity] || 'text-gray-600 bg-gray-100';
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <Icon name="Activity" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">API Status</h3>
            <p className="text-sm text-muted-foreground">
              Real-time system status and performance metrics
            </p>
          </div>
        </div>

        {/* Overall Status */}
        <div className="bg-muted rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Icon name={getStatusIcon(statusData?.overall?.status)} size={24} className="text-green-600" />
              <div>
                <h4 className="text-lg font-semibold text-foreground">All Systems Operational</h4>
                <p className="text-sm text-muted-foreground">
                  Last updated: {currentTime?.toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{statusData?.overall?.uptime}</div>
              <div className="text-xs text-muted-foreground">Uptime (30 days)</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{statusData?.overall?.responseTime}</div>
              <div className="text-xs text-muted-foreground">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{statusData?.overall?.lastIncident}</div>
              <div className="text-xs text-muted-foreground">Last Incident</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">99.94%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Service Status */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-4">Service Status</h4>
          <div className="space-y-3">
            {statusData?.services?.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name={getStatusIcon(service?.status)} size={20} className={
                    service?.status === 'operational' ? 'text-green-600' : 
                    service?.status === 'degraded' ? 'text-yellow-600' : 'text-red-600'
                  } />
                  <div>
                    <div className="font-medium text-foreground">{service?.name}</div>
                    <div className="text-xs text-muted-foreground">{service?.description}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-right">
                  <div>
                    <div className="text-sm font-medium text-foreground">{service?.uptime}</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{service?.responseTime}</div>
                    <div className="text-xs text-muted-foreground">Response</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${getStatusColor(service?.status)}`}>
                    {service?.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-4">Performance Metrics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {statusData?.metrics?.map((metric, index) => (
              <div key={index} className="bg-muted rounded-lg p-4">
                <div className="text-2xl font-bold text-foreground">{metric?.value}</div>
                <div className="text-sm text-muted-foreground mb-1">{metric?.name}</div>
                <div className="flex items-center space-x-1">
                  <span className={`text-xs font-medium ${
                    metric?.change?.startsWith('+') && metric?.name !== 'Avg Response Time' ? 'text-green-600' : 
                    metric?.change?.startsWith('-') ? 'text-green-600' : 'text-muted-foreground'
                  }`}>
                    {metric?.change}
                  </span>
                  <span className="text-xs text-muted-foreground">{metric?.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Recent Incidents</h4>
          <div className="space-y-3">
            {statusData?.incidents?.map((incident) => (
              <div key={incident?.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertCircle" size={16} className="text-muted-foreground mt-0.5" />
                    <div>
                      <h5 className="font-medium text-foreground">{incident?.title}</h5>
                      <p className="text-sm text-muted-foreground mt-1">{incident?.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${getSeverityColor(incident?.severity)}`}>
                      {incident?.severity}
                    </span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                      {incident?.status}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatDate(incident?.startTime)} - {formatDate(incident?.endTime)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiStatus;