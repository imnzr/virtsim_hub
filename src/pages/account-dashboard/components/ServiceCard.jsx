import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onReorder, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50';
      case 'expired':
        return 'text-red-600 bg-red-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return 'CheckCircle';
      case 'expired':
        return 'XCircle';
      case 'pending':
        return 'Clock';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name="Smartphone" size={24} color="white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{service?.name}</h3>
            <p className="text-sm text-muted-foreground">{service?.provider}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service?.status)}`}>
          <Icon name={getStatusIcon(service?.status)} size={12} />
          <span className="capitalize">{service?.status}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Phone Number</p>
          <p className="font-mono text-sm text-foreground">{service?.phoneNumber}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Country</p>
          <p className="text-sm text-foreground">{service?.country}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Credits Remaining</p>
          <p className="text-sm font-medium text-foreground">{service?.creditsRemaining}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Expires</p>
          <p className="text-sm text-foreground">{service?.expiresAt}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          iconName="Eye"
          iconPosition="left"
          onClick={() => onViewDetails(service)}
        >
          Details
        </Button>
        <Button
          variant="default"
          size="sm"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={() => onReorder(service)}
          disabled={service?.status === 'pending'}
        >
          Reorder
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;