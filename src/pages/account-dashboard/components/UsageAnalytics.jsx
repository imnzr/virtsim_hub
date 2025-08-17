import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UsageAnalytics = () => {
  const [activeTab, setActiveTab] = useState('usage');

  const usageData = [
    { month: 'Jan', usage: 45, cost: 125000 },
    { month: 'Feb', usage: 52, cost: 145000 },
    { month: 'Mar', usage: 38, cost: 105000 },
    { month: 'Apr', usage: 61, cost: 170000 },
    { month: 'May', usage: 55, cost: 155000 },
    { month: 'Jun', usage: 48, cost: 135000 },
  ];

  const serviceDistribution = [
    { name: 'SMS Services', value: 45, color: '#1E40AF' },
    { name: 'Voice Calls', value: 30, color: '#0F766E' },
    { name: 'Data Plans', value: 25, color: '#059669' },
  ];

  const tabs = [
    { id: 'usage', label: 'Usage Trends', icon: 'TrendingUp' },
    { id: 'costs', label: 'Cost Analysis', icon: 'DollarSign' },
    { id: 'distribution', label: 'Service Mix', icon: 'PieChart' },
  ];

  const renderUsageChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={usageData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="month" stroke="#6B7280" />
        <YAxis stroke="#6B7280" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px' 
          }} 
        />
        <Bar dataKey="usage" fill="#1E40AF" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderCostChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={usageData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="month" stroke="#6B7280" />
        <YAxis stroke="#6B7280" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px' 
          }}
          formatter={(value) => [`Rp ${value?.toLocaleString('id-ID')}`, 'Cost']}
        />
        <Line 
          type="monotone" 
          dataKey="cost" 
          stroke="#0F766E" 
          strokeWidth={3}
          dot={{ fill: '#0F766E', strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const renderDistributionChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={serviceDistribution}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}%`}
        >
          {serviceDistribution?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry?.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
      </PieChart>
    </ResponsiveContainer>
  );

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Usage Analytics</h3>
            <p className="text-sm text-muted-foreground">Monitor your service consumption patterns</p>
          </div>
          <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
            Export Report
          </Button>
        </div>
      </div>
      <div className="border-b border-border">
        <nav className="flex space-x-8 px-6">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === tab?.id
                  ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </nav>
      </div>
      <div className="p-6">
        {activeTab === 'usage' && (
          <div>
            <div className="mb-6">
              <h4 className="text-base font-medium text-foreground mb-2">Monthly Usage Trends</h4>
              <p className="text-sm text-muted-foreground">Service usage over the last 6 months</p>
            </div>
            {renderUsageChart()}
          </div>
        )}

        {activeTab === 'costs' && (
          <div>
            <div className="mb-6">
              <h4 className="text-base font-medium text-foreground mb-2">Cost Analysis</h4>
              <p className="text-sm text-muted-foreground">Monthly spending patterns and trends</p>
            </div>
            {renderCostChart()}
          </div>
        )}

        {activeTab === 'distribution' && (
          <div>
            <div className="mb-6">
              <h4 className="text-base font-medium text-foreground mb-2">Service Distribution</h4>
              <p className="text-sm text-muted-foreground">Breakdown of service usage by type</p>
            </div>
            {renderDistributionChart()}
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingUp" size={16} className="text-green-600" />
              <span className="text-sm font-medium text-foreground">Average Usage</span>
            </div>
            <p className="text-2xl font-bold text-foreground">49.8</p>
            <p className="text-xs text-muted-foreground">services per month</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="DollarSign" size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-foreground">Monthly Average</span>
            </div>
            <p className="text-2xl font-bold text-foreground">Rp 139K</p>
            <p className="text-xs text-muted-foreground">spending per month</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Percent" size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-foreground">Cost Efficiency</span>
            </div>
            <p className="text-2xl font-bold text-foreground">92%</p>
            <p className="text-xs text-muted-foreground">vs market average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageAnalytics;