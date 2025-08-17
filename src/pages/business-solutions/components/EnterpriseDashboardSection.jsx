import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EnterpriseDashboardSection = () => {
  const [activeView, setActiveView] = useState('overview');

  const dashboardFeatures = [
    {
      id: 'overview',
      title: 'Executive Overview',
      icon: 'LayoutDashboard',
      description: 'High-level metrics and KPIs for executive decision-making'
    },
    {
      id: 'team',
      title: 'Team Management',
      icon: 'Users',
      description: 'Comprehensive user and role management system'
    },
    {
      id: 'usage',
      title: 'Usage Monitoring',
      icon: 'Activity',
      description: 'Real-time usage tracking and analytics'
    },
    {
      id: 'automation',
      title: 'Automation Rules',
      icon: 'Settings',
      description: 'Automated procurement and management workflows'
    }
  ];

  const mockData = {
    overview: {
      totalSims: 12847,
      activeSims: 11234,
      monthlyCost: 45230,
      savings: 18500,
      countries: 45,
      uptime: 99.97
    },
    team: {
      totalUsers: 156,
      activeUsers: 142,
      adminUsers: 8,
      departments: 12
    },
    usage: {
      dataUsage: 2.4,
      apiCalls: 125000,
      avgResponseTime: 180,
      errorRate: 0.02
    },
    automation: {
      activeRules: 23,
      automatedOrders: 1847,
      timeSaved: 340,
      costOptimization: 15.2
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Enterprise Dashboard Preview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of our enterprise-grade dashboard with advanced features designed for large-scale operations and strategic decision-making.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {dashboardFeatures?.map((feature) => (
            <button
              key={feature?.id}
              onClick={() => setActiveView(feature?.id)}
              className={`p-6 rounded-xl text-left transition-all duration-200 ${
                activeView === feature?.id
                  ? 'bg-blue-600 shadow-lg'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Icon name={feature?.icon} size={24} className="text-blue-400" />
                <h3 className="font-semibold">{feature?.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{feature?.description}</p>
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          {activeView === 'overview' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Executive Dashboard</h3>
                <div className="flex items-center space-x-2 text-green-400">
                  <Icon name="CheckCircle" size={16} />
                  <span className="text-sm">Live Data</span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon name="Smartphone" size={20} className="text-blue-400" />
                    <span className="text-xs text-green-400">+12%</span>
                  </div>
                  <div className="text-2xl font-bold">{mockData?.overview?.totalSims?.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Total SIMs</div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon name="Activity" size={20} className="text-green-400" />
                    <span className="text-xs text-green-400">+8%</span>
                  </div>
                  <div className="text-2xl font-bold">{mockData?.overview?.activeSims?.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Active SIMs</div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon name="DollarSign" size={20} className="text-orange-400" />
                    <span className="text-xs text-red-400">-15%</span>
                  </div>
                  <div className="text-2xl font-bold">${mockData?.overview?.monthlyCost?.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Monthly Cost</div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon name="TrendingDown" size={20} className="text-green-400" />
                    <span className="text-xs text-green-400">+22%</span>
                  </div>
                  <div className="text-2xl font-bold">${mockData?.overview?.savings?.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Monthly Savings</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-700 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Global Coverage</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Active Countries</span>
                      <span className="font-semibold">{mockData?.overview?.countries}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Network Uptime</span>
                      <span className="font-semibold text-green-400">{mockData?.overview?.uptime}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Avg Response Time</span>
                      <span className="font-semibold">&lt; 200ms</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Recent Activity</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Plus" size={16} className="text-green-400" />
                      <span className="text-sm">250 new SIMs activated in Germany</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="AlertTriangle" size={16} className="text-yellow-400" />
                      <span className="text-sm">Usage alert: 85% threshold reached</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-green-400" />
                      <span className="text-sm">Bulk order completed: 500 SIMs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'team' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Team Management</h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-blue-400">{mockData?.team?.totalUsers}</div>
                  <div className="text-sm text-gray-300">Total Users</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-green-400">{mockData?.team?.activeUsers}</div>
                  <div className="text-sm text-gray-300">Active Users</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-orange-400">{mockData?.team?.adminUsers}</div>
                  <div className="text-sm text-gray-300">Admin Users</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-purple-400">{mockData?.team?.departments}</div>
                  <div className="text-sm text-gray-300">Departments</div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="font-semibold mb-4">User Roles & Permissions</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-600 rounded">
                    <div className="flex items-center space-x-3">
                      <Icon name="Shield" size={16} className="text-red-400" />
                      <span>Super Admin</span>
                    </div>
                    <span className="text-sm text-gray-300">Full system access</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-600 rounded">
                    <div className="flex items-center space-x-3">
                      <Icon name="Settings" size={16} className="text-blue-400" />
                      <span>Admin</span>
                    </div>
                    <span className="text-sm text-gray-300">Department management</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-600 rounded">
                    <div className="flex items-center space-x-3">
                      <Icon name="User" size={16} className="text-green-400" />
                      <span>Manager</span>
                    </div>
                    <span className="text-sm text-gray-300">Team oversight</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-600 rounded">
                    <div className="flex items-center space-x-3">
                      <Icon name="Eye" size={16} className="text-gray-400" />
                      <span>Viewer</span>
                    </div>
                    <span className="text-sm text-gray-300">Read-only access</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'usage' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Usage Monitoring</h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-blue-400">{mockData?.usage?.dataUsage}TB</div>
                  <div className="text-sm text-gray-300">Data Usage</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-green-400">{mockData?.usage?.apiCalls?.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">API Calls</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-orange-400">{mockData?.usage?.avgResponseTime}ms</div>
                  <div className="text-sm text-gray-300">Avg Response</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-red-400">{mockData?.usage?.errorRate}%</div>
                  <div className="text-sm text-gray-300">Error Rate</div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Real-time Monitoring</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Network Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">API Health</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400">Healthy</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Database Performance</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-yellow-400">Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'automation' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Automation Rules</h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-blue-400">{mockData?.automation?.activeRules}</div>
                  <div className="text-sm text-gray-300">Active Rules</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-green-400">{mockData?.automation?.automatedOrders?.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">Auto Orders</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-orange-400">{mockData?.automation?.timeSaved}h</div>
                  <div className="text-sm text-gray-300">Time Saved</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-purple-400">{mockData?.automation?.costOptimization}%</div>
                  <div className="text-sm text-gray-300">Cost Optimization</div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Automation Examples</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-600 rounded">
                    <div className="flex items-center space-x-3">
                      <Icon name="Zap" size={16} className="text-yellow-400" />
                      <span>Auto-reorder when stock &lt; 100</span>
                    </div>
                    <span className="text-sm text-green-400">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-600 rounded">
                    <div className="flex items-center space-x-3">
                      <Icon name="DollarSign" size={16} className="text-green-400" />
                      <span>Cost optimization alerts</span>
                    </div>
                    <span className="text-sm text-green-400">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-600 rounded">
                    <div className="flex items-center space-x-3">
                      <Icon name="Globe" size={16} className="text-blue-400" />
                      <span>Multi-country provisioning</span>
                    </div>
                    <span className="text-sm text-green-400">Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            iconName="ExternalLink"
            iconPosition="right"
          >
            Request Dashboard Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseDashboardSection;