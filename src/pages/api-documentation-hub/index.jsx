import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ApiExplorer from './components/ApiExplorer';
import CodeExamples from './components/CodeExamples';
import ApiReference from './components/ApiReference';
import SdkSection from './components/SdkSection';
import ApiStatus from './components/ApiStatus';
import GettingStarted from './components/GettingStarted';

const ApiDocumentationHub = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  const tabs = [
    { id: 'getting-started', name: 'Getting Started', icon: 'Rocket' },
    { id: 'api-reference', name: 'API Reference', icon: 'Book' },
    { id: 'code-examples', name: 'Code Examples', icon: 'Code2' },
    { id: 'sdks', name: 'SDKs', icon: 'Package' },
    { id: 'api-explorer', name: 'API Explorer', icon: 'Play' },
    { id: 'status', name: 'API Status', icon: 'Activity' }
  ];

  const quickLinks = [
    { name: 'Authentication', href: '#auth', icon: 'Shield' },
    { name: 'Rate Limits', href: '#limits', icon: 'Clock' },
    { name: 'Webhooks', href: '#webhooks', icon: 'Webhook' },
    { name: 'Error Codes', href: '#errors', icon: 'AlertCircle' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'getting-started':
        return <GettingStarted />;
      case 'api-reference':
        return <ApiReference />;
      case 'code-examples':
        return <CodeExamples />;
      case 'sdks':
        return <SdkSection />;
      case 'api-explorer':
        return <ApiExplorer />;
      case 'status':
        return <ApiStatus />;
      default:
        return <GettingStarted />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center">
                  <Icon name="Code" size={32} color="white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                VirtSIM Hub API Documentation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Complete developer resources for integrating virtual SIM services. 
                Test endpoints, explore code examples, and build powerful applications with our RESTful API.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Rocket"
                  iconPosition="left"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('getting-started')}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  onClick={() => setActiveTab('api-explorer')}
                >
                  Try API Explorer
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.98%</div>
                <div className="text-sm text-muted-foreground">API Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">142ms</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Navigation Tabs */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-foreground mb-3">Documentation</h3>
                  <nav className="space-y-1">
                    {tabs?.map((tab) => (
                      <button
                        key={tab?.id}
                        onClick={() => setActiveTab(tab?.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeTab === tab?.id
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        <Icon name={tab?.icon} size={16} />
                        <span>{tab?.name}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Quick Links */}
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="text-sm font-medium text-foreground mb-3">Quick Links</h3>
                  <nav className="space-y-1">
                    {quickLinks?.map((link) => (
                      <a
                        key={link?.name}
                        href={link?.href}
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                      >
                        <Icon name={link?.icon} size={16} />
                        <span>{link?.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Support */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="MessageCircle" size={20} className="text-blue-600" />
                    <h3 className="text-sm font-medium text-foreground">Need Help?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our developer support team is here to help you integrate successfully.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of developers building amazing applications with VirtSIM Hub API.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Key"
                  iconPosition="left"
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  Get API Key
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocumentationHub;