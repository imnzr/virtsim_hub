import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ServiceCard = ({ service, onCompare, onPurchase, isComparing }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })?.format(price);
  };

  const getAvailabilityColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-success bg-success/10';
      case 'limited':
        return 'text-warning bg-warning/10';
      case 'unavailable':
        return 'text-destructive bg-destructive/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getAvailabilityText = (status) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'limited':
        return 'Limited Stock';
      case 'unavailable':
        return 'Out of Stock';
      default:
        return 'Unknown';
    }
  };

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name={i < Math.floor(rating) ? "Star" : "Star"}
        size={14}
        className={i < Math.floor(rating) ? "text-warning fill-current" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {service?.country}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(service?.availability)}`}>
              {getAvailabilityText(service?.availability)}
            </span>
            {service?.priceChange && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                service?.priceChange > 0 ? 'text-destructive bg-destructive/10' : 'text-success bg-success/10'
              }`}>
                {service?.priceChange > 0 ? '+' : ''}{service?.priceChange}%
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-2">{service?.provider}</p>
          <div className="flex items-center space-x-1 mb-2">
            {getRatingStars(service?.rating)}
            <span className="text-sm text-muted-foreground ml-1">
              ({service?.reviewCount} reviews)
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={isComparing}
            onChange={(e) => onCompare(service?.id, e?.target?.checked)}
            label=""
            size="sm"
          />
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
          </button>
        </div>
      </div>
      {/* Price */}
      <div className="mb-4">
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-foreground">
            {formatPrice(service?.price)}
          </span>
          {service?.originalPrice && service?.originalPrice > service?.price && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(service?.originalPrice)}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">per {service?.validity}</p>
      </div>
      {/* Key Features */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Database" size={16} className="text-primary" />
          <span className="text-sm text-foreground">{service?.dataAllowance}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Clock" size={16} className="text-primary" />
          <span className="text-sm text-foreground">{service?.validity}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Zap" size={16} className="text-primary" />
          <span className="text-sm text-foreground">{service?.speed}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Globe" size={16} className="text-primary" />
          <span className="text-sm text-foreground">{service?.coverage}</span>
        </div>
      </div>
      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-border pt-4 mb-4 animate-slide-up">
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Features</h4>
              <div className="flex flex-wrap gap-2">
                {service?.features?.map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Use Cases</h4>
              <p className="text-sm text-muted-foreground">{service?.useCases?.join(', ')}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Activation</h4>
              <p className="text-sm text-muted-foreground">{service?.activationTime}</p>
            </div>
          </div>
        </div>
      )}
      {/* Actions */}
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          iconName="Eye"
          iconPosition="left"
          disabled={service?.availability === 'unavailable'}
        >
          View Details
        </Button>
        <Button
          variant="default"
          size="sm"
          className="flex-1 bg-brand-orange hover:bg-brand-orange/90"
          iconName="ShoppingCart"
          iconPosition="left"
          onClick={() => onPurchase(service)}
          disabled={service?.availability === 'unavailable'}
        >
          {service?.availability === 'unavailable' ? 'Out of Stock' : 'Purchase'}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;