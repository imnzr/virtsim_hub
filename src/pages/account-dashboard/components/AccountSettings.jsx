import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AccountSettings = ({ userProfile, onUpdateProfile, onGenerateApiKey }) => {
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: userProfile?.fullName || '',
    email: userProfile?.email || '',
    phone: userProfile?.phone || '',
    company: userProfile?.company || '',
    notifications: {
      email: true,
      sms: false,
      push: true
    }
  });

  const sections = [
    { id: 'profile', label: 'Profile', icon: 'User' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' },
    { id: 'api', label: 'API Access', icon: 'Key' },
    { id: 'security', label: 'Security', icon: 'Shield' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (type, value) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev?.notifications,
        [type]: value
      }
    }));
  };

  const handleSaveProfile = () => {
    onUpdateProfile(formData);
  };

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-base font-medium text-foreground mb-4">Personal Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            value={formData?.fullName}
            onChange={(e) => handleInputChange('fullName', e?.target?.value)}
            placeholder="Enter your full name"
          />
          <Input
            label="Email Address"
            type="email"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Phone Number"
            type="tel"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            placeholder="Enter your phone number"
          />
          <Input
            label="Company (Optional)"
            type="text"
            value={formData?.company}
            onChange={(e) => handleInputChange('company', e?.target?.value)}
            placeholder="Enter company name"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="default" onClick={handleSaveProfile}>
          Save Changes
        </Button>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-base font-medium text-foreground mb-4">Notification Preferences</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData?.notifications?.email}
                onChange={(e) => handleNotificationChange('email', e?.target?.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">SMS Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates via SMS</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData?.notifications?.sms}
                onChange={(e) => handleNotificationChange('sms', e?.target?.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Push Notifications</p>
              <p className="text-sm text-muted-foreground">Receive browser notifications</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData?.notifications?.push}
                onChange={(e) => handleNotificationChange('push', e?.target?.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderApiSection = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-base font-medium text-foreground mb-4">API Access</h4>
        <div className="bg-muted rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">API Key</p>
              <p className="text-sm text-muted-foreground font-mono">vsh_live_••••••••••••••••••••••••••••••••</p>
            </div>
            <Button variant="outline" size="sm" onClick={onGenerateApiKey}>
              Regenerate
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h5 className="font-medium text-foreground mb-2">API Calls This Month</h5>
            <p className="text-2xl font-bold text-primary">1,247</p>
            <p className="text-sm text-muted-foreground">of 10,000 limit</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h5 className="font-medium text-foreground mb-2">Success Rate</h5>
            <p className="text-2xl font-bold text-green-600">99.8%</p>
            <p className="text-sm text-muted-foreground">last 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-base font-medium text-foreground mb-4">Security Settings</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Button variant="outline" size="sm">
              Enable 2FA
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Change Password</p>
              <p className="text-sm text-muted-foreground">Update your account password</p>
            </div>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Login Sessions</p>
              <p className="text-sm text-muted-foreground">Manage active sessions</p>
            </div>
            <Button variant="outline" size="sm">
              View Sessions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Account Settings</h3>
        <p className="text-sm text-muted-foreground">Manage your account preferences and security</p>
      </div>
      <div className="flex">
        <div className="w-64 border-r border-border">
          <nav className="p-4 space-y-1">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => setActiveSection(section?.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                  activeSection === section?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={section?.icon} size={16} />
                <span className="text-sm font-medium">{section?.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 p-6">
          {activeSection === 'profile' && renderProfileSection()}
          {activeSection === 'notifications' && renderNotificationsSection()}
          {activeSection === 'api' && renderApiSection()}
          {activeSection === 'security' && renderSecuritySection()}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;