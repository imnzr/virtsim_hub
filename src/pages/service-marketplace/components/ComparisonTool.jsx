import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonTool = ({ services, comparedServices, onRemoveFromComparison, onClearComparison }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })?.format(price);
  };

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={i < Math.floor(rating) ? "text-warning fill-current" : "text-muted-foreground"}
      />
    ));
  };

  const comparedServiceData = services?.filter(service => 
    comparedServices?.includes(service?.id)
  );

  if (comparedServiceData?.length === 0) {
    return null;
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Service Comparison ({comparedServiceData?.length}/4)
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearComparison}
          iconName="X"
          iconPosition="left"
        >
          Clear All
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-foreground">Feature</th>
              {comparedServiceData?.map((service) => (
                <th key={service?.id} className="text-left py-3 px-4 min-w-48">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{service?.country}</h3>
                      <p className="text-sm text-muted-foreground">{service?.provider}</p>
                    </div>
                    <button
                      onClick={() => onRemoveFromComparison(service?.id)}
                      className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <Icon name="X" size={16} />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Price */}
            <tr className="border-b border-border">
              <td className="py-3 px-4 font-medium text-foreground">Price</td>
              {comparedServiceData?.map((service) => (
                <td key={service?.id} className="py-3 px-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg font-semibold text-foreground">
                      {formatPrice(service?.price)}
                    </span>
                    {service?.originalPrice && service?.originalPrice > service?.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(service?.originalPrice)}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">per {service?.validity}</p>
                </td>
              ))}
            </tr>

            {/* Rating */}
            <tr className="border-b border-border">
              <td className="py-3 px-4 font-medium text-foreground">Rating</td>
              {comparedServiceData?.map((service) => (
                <td key={service?.id} className="py-3 px-4">
                  <div className="flex items-center space-x-1">
                    {getRatingStars(service?.rating)}
                    <span className="text-sm text-muted-foreground ml-2">
                      {service?.rating} ({service?.reviewCount})
                    </span>
                  </div>
                </td>
              ))}
            </tr>

            {/* Data Allowance */}
            <tr className="border-b border-border">
              <td className="py-3 px-4 font-medium text-foreground">Data Allowance</td>
              {comparedServiceData?.map((service) => (
                <td key={service?.id} className="py-3 px-4 text-foreground">
                  {service?.dataAllowance}
                </td>
              ))}
            </tr>

            {/* Validity */}
            <tr className="border-b border-border">
              <td className="py-3 px-4 font-medium text-foreground">Validity</td>
              {comparedServiceData?.map((service) => (
                <td key={service?.id} className="py-3 px-4 text-foreground">
                  {service?.validity}
                </td>
              ))}
            </tr>

            {/* Speed */}
            <tr className="border-b border-border">
              <td className="py-3 px-4 font-medium text-foreground">Speed</td>
              {comparedServiceData?.map((service) => (
                <td key={service?.id} className="py-3 px-4 text-foreground">
                  {service?.speed}
                </td>
              ))}
            </tr>

            {/* Coverage */}
            <tr className="border-b border-border">
              <td className="py-3 px-4 font-medium text-foreground">Coverage</td>
              {comparedServiceData?.map((service) => (
                <td key={service?.id} className="py-3 px-4 text-foreground">
                  {service?.coverage}
                </td>
              ))}
            </tr>

            {/* Features */}
            <tr className="border-b border-border">
              <td className="py-3 px-4 font-medium text-foreground">Features</td>
              {comparedServiceData?.map((service) => (
                <td key={service?.id} className="py-3 px-4">
                  <div className="space-y-1">
                    {service?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-success" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Activation Time */}
            <tr className="border-b border-border">
              <td className="py-3 px-4 font-medium text-foreground">Activation Time</td>
              {comparedServiceData?.map((service) => (
                <td key={service?.id} className="py-3 px-4 text-foreground">
                  {service?.activationTime}
                </td>
              ))}
            </tr>

            {/* Actions */}
            <tr>
              <td className="py-3 px-4 font-medium text-foreground">Actions</td>
              {comparedServiceData?.map((service) => (
                <td key={service?.id} className="py-3 px-4">
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      iconName="Eye"
                      iconPosition="left"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full bg-brand-orange hover:bg-brand-orange/90"
                      iconName="ShoppingCart"
                      iconPosition="left"
                      disabled={service?.availability === 'unavailable'}
                    >
                      Purchase
                    </Button>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTool;