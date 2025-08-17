import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = ({ onAction }) => {
  const actions = [
    {
      id: 'new-service',
      title: 'New Service',
      description: 'Purchase a new virtual SIM',
      icon: 'Plus',
      color: 'bg-primary',
      action: () => onAction('new-service')
    },
    {
      id: 'top-up',
      title: 'Top Up Credits',
      description: 'Add funds to your account',
      icon: 'Wallet',
      color: 'bg-secondary',
      action: () => onAction('top-up')
    },
    {
      id: 'api-keys',
      title: 'API Keys',
      description: 'Manage your API access',
      icon: 'Key',
      color: 'bg-accent',
      action: () => onAction('api-keys')
    },
    {
      id: 'support',
      title: 'Get Support',
      description: 'Contact our support team',
      icon: 'MessageCircle',
      color: 'bg-warning',
      action: () => onAction('support')
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">Common tasks and shortcuts</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions?.map((action) => (
          <button
            key={action?.id}
            onClick={action?.action}
            className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-200 text-left group"
          >
            <div className={`w-12 h-12 ${action?.color} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
              <Icon name={action?.icon} size={20} color="white" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                {action?.title}
              </h4>
              <p className="text-sm text-muted-foreground">{action?.description}</p>
            </div>
            <Icon name="ChevronRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
          </button>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Need help getting started?</p>
            <p className="text-xs text-muted-foreground">Check out our comprehensive guides</p>
          </div>
          <Button variant="outline" size="sm" iconName="BookOpen" iconPosition="left">
            View Guides
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;