import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ServiceCard from './components/ServiceCard';
import CreditCard from './components/CreditCard';
import OrderHistoryTable from './components/OrderHistoryTable';
import UsageAnalytics from './components/UsageAnalytics';
import QuickActions from './components/QuickActions';
import NotificationCenter from './components/NotificationCenter';
import AccountSettings from './components/AccountSettings';

const AccountDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock data for active services
  const activeServices = [
    {
      id: "SIM001",
      name: "Indonesia Virtual SIM",
      provider: "Telkomsel",
      phoneNumber: "+62 812-3456-7890",
      country: "Indonesia",
      creditsRemaining: 45,
      expiresAt: "25 Aug 2025",
      status: "active"
    },
    {
      id: "SIM002",
      name: "Singapore Business SIM",
      provider: "Singtel",
      phoneNumber: "+65 9123-4567",
      country: "Singapore",
      creditsRemaining: 12,
      expiresAt: "18 Aug 2025",
      status: "active"
    },
    {
      id: "SIM003",
      name: "Malaysia Travel SIM",
      provider: "Maxis",
      phoneNumber: "+60 12-345-6789",
      country: "Malaysia",
      creditsRemaining: 0,
      expiresAt: "10 Aug 2025",
      status: "expired"
    },
    {
      id: "SIM004",
      name: "Thailand Premium SIM",
      provider: "AIS",
      phoneNumber: "+66 81-234-5678",
      country: "Thailand",
      creditsRemaining: 28,
      expiresAt: "Processing...",
      status: "pending"
    }
  ];

  // Mock data for order history
  const orderHistory = [
    {
      id: "ORD001",
      serviceName: "Indonesia Virtual SIM",
      provider: "Telkomsel",
      amount: 125000,
      status: "completed",
      date: "15 Aug 2025"
    },
    {
      id: "ORD002",
      serviceName: "Singapore Business SIM",
      provider: "Singtel",
      amount: 185000,
      status: "completed",
      date: "12 Aug 2025"
    },
    {
      id: "ORD003",
      serviceName: "Malaysia Travel SIM",
      provider: "Maxis",
      amount: 95000,
      status: "completed",
      date: "08 Aug 2025"
    },
    {
      id: "ORD004",
      serviceName: "Thailand Premium SIM",
      provider: "AIS",
      amount: 155000,
      status: "processing",
      date: "16 Aug 2025"
    },
    {
      id: "ORD005",
      serviceName: "Vietnam Standard SIM",
      provider: "Viettel",
      amount: 75000,
      status: "failed",
      date: "14 Aug 2025"
    }
  ];

  // Mock data for notifications
  const [notifications, setNotifications] = useState([
    {
      id: "NOT001",
      type: "service",
      title: "Service Activated",
      message: "Your Thailand Premium SIM has been successfully activated and is ready to use.",
      timestamp: "2 hours ago",
      read: false
    },
    {
      id: "NOT002",
      type: "payment",
      title: "Payment Successful",
      message: "Your credit top-up of Rp 200,000 has been processed successfully.",
      timestamp: "5 hours ago",
      read: false
    },
    {
      id: "NOT003",
      type: "system",
      title: "System Maintenance",
      message: "Scheduled maintenance will occur on 20 Aug 2025 from 02:00 to 04:00 WIB.",
      timestamp: "1 day ago",
      read: true
    },
    {
      id: "NOT004",
      type: "promotion",
      title: "Special Offer",
      message: "Get 20% off on all Southeast Asian SIM packages this week!",
      timestamp: "2 days ago",
      read: false
    }
  ]);

  // Mock user profile
  const userProfile = {
    fullName: "Ahmad Rizki Pratama",
    email: "ahmad.rizki@email.com",
    phone: "+62 812-3456-7890",
    company: "PT Digital Solutions",
    accountType: "Business",
    memberSince: "March 2024"
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'services', label: 'My Services', icon: 'Smartphone' },
    { id: 'orders', label: 'Order History', icon: 'ShoppingBag' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' },
    { id: 'settings', label: 'Settings', icon: 'Settings' }
  ];

  const handleReorder = (service) => {
    console.log('Reordering service:', service);
    // Implementation for reordering service
  };

  const handleViewDetails = (service) => {
    console.log('Viewing service details:', service);
    // Implementation for viewing service details
  };

  const handleTopUp = () => {
    console.log('Opening top-up modal');
    // Implementation for credit top-up
  };

  const handleViewHistory = () => {
    setActiveTab('orders');
  };

  const handleDownloadInvoice = (order) => {
    console.log('Downloading invoice for order:', order);
    // Implementation for downloading invoice
  };

  const handleQuickAction = (actionId) => {
    console.log('Quick action:', actionId);
    switch (actionId) {
      case 'new-service':
        window.location.href = '/service-marketplace';
        break;
      case 'top-up':
        handleTopUp();
        break;
      case 'api-keys': setActiveTab('settings');
        break;
      case 'support': console.log('Opening support');
        break;
      default:
        break;
    }
  };

  const handleMarkAsRead = (notificationId) => {
    setNotifications(prev =>
      prev?.map(notification =>
        notification?.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev =>
      prev?.map(notification => ({ ...notification, read: true }))
    );
  };

  const handleUpdateProfile = (formData) => {
    console.log('Updating profile:', formData);
    // Implementation for updating user profile
  };

  const handleGenerateApiKey = () => {
    console.log('Generating new API key');
    // Implementation for generating API key
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, {userProfile?.fullName}!</h2>
            <p className="text-white/80">
              You have {activeServices?.filter(s => s?.status === 'active')?.length} active services and {notifications?.filter(n => !n?.read)?.length} unread notifications
            </p>
          </div>
          <div className="hidden md:block">
            <Icon name="User" size={64} color="white" className="opacity-20" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon name="Smartphone" size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{activeServices?.filter(s => s?.status === 'active')?.length}</p>
              <p className="text-sm text-muted-foreground">Active Services</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Icon name="Wallet" size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">Rp 485K</p>
              <p className="text-sm text-muted-foreground">Credit Balance</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon name="ShoppingBag" size={24} className="text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{orderHistory?.length}</p>
              <p className="text-sm text-muted-foreground">Total Orders</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" size={24} className="text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">92%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CreditCard
            balance={485000}
            onTopUp={handleTopUp}
            onViewHistory={handleViewHistory}
          />
        </div>
        <div>
          <QuickActions onAction={handleQuickAction} />
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">My Services</h2>
          <p className="text-muted-foreground">Manage your active virtual SIM services</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Active</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Expired</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span>Pending</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeServices?.map((service) => (
          <ServiceCard
            key={service?.id}
            service={service}
            onReorder={handleReorder}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <span>Dashboard</span>
              <Icon name="ChevronRight" size={16} />
              <span className="text-foreground">Account Overview</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Account Dashboard</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-border mb-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab?.id
                      ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                  {tab?.id === 'notifications' && notifications?.filter(n => !n?.read)?.length > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                      {notifications?.filter(n => !n?.read)?.length}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="animate-slide-up">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'services' && renderServices()}
            {activeTab === 'orders' && (
              <OrderHistoryTable
                orders={orderHistory}
                onDownloadInvoice={handleDownloadInvoice}
              />
            )}
            {activeTab === 'analytics' && <UsageAnalytics />}
            {activeTab === 'notifications' && (
              <NotificationCenter
                notifications={notifications}
                onMarkAsRead={handleMarkAsRead}
                onMarkAllAsRead={handleMarkAllAsRead}
              />
            )}
            {activeTab === 'settings' && (
              <AccountSettings
                userProfile={userProfile}
                onUpdateProfile={handleUpdateProfile}
                onGenerateApiKey={handleGenerateApiKey}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;