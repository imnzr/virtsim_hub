import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BulkOrderingSection = () => {
  const [orderData, setOrderData] = useState({
    quantity: '',
    country: '',
    duration: '',
    dataAllowance: ''
  });

  const [estimatedCost, setEstimatedCost] = useState(0);

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'au', label: 'Australia' },
    { value: 'ca', label: 'Canada' },
    { value: 'sg', label: 'Singapore' }
  ];

  const durationOptions = [
    { value: '7', label: '7 Days' },
    { value: '30', label: '30 Days' },
    { value: '90', label: '90 Days' },
    { value: '180', label: '180 Days' },
    { value: '365', label: '1 Year' }
  ];

  const dataOptions = [
    { value: '1gb', label: '1 GB' },
    { value: '5gb', label: '5 GB' },
    { value: '10gb', label: '10 GB' },
    { value: '20gb', label: '20 GB' },
    { value: 'unlimited', label: 'Unlimited' }
  ];

  const handleInputChange = (field, value) => {
    const newData = { ...orderData, [field]: value };
    setOrderData(newData);
    
    // Calculate estimated cost
    if (newData?.quantity && newData?.country && newData?.duration && newData?.dataAllowance) {
      const basePrice = 5; // Base price per SIM
      const quantity = parseInt(newData?.quantity);
      const duration = parseInt(newData?.duration);
      const dataMultiplier = newData?.dataAllowance === 'unlimited' ? 3 : 1;
      
      const cost = quantity * basePrice * (duration / 30) * dataMultiplier;
      const discount = quantity > 100 ? 0.15 : quantity > 50 ? 0.1 : quantity > 20 ? 0.05 : 0;
      
      setEstimatedCost(cost * (1 - discount));
    }
  };

  const bulkFeatures = [
    {
      icon: 'Package',
      title: 'Volume Discounts',
      description: 'Save up to 25% on bulk orders of 100+ SIMs'
    },
    {
      icon: 'CreditCard',
      title: 'Consolidated Billing',
      description: 'Single invoice for all your virtual SIM services'
    },
    {
      icon: 'Settings',
      title: 'Centralized Management',
      description: 'Manage all SIMs from one unified dashboard'
    },
    {
      icon: 'Zap',
      title: 'Instant Activation',
      description: 'Bulk activation with automated provisioning'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Bulk Ordering Interface
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your procurement process with our intelligent bulk ordering system designed for enterprise efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Configure Your Bulk Order
              </h3>
              
              <div className="space-y-6">
                <Input
                  label="Quantity"
                  type="number"
                  placeholder="Enter number of SIMs"
                  value={orderData?.quantity}
                  onChange={(e) => handleInputChange('quantity', e?.target?.value)}
                  description="Minimum order: 10 SIMs"
                />

                <Select
                  label="Target Country"
                  options={countryOptions}
                  value={orderData?.country}
                  onChange={(value) => handleInputChange('country', value)}
                  placeholder="Select country"
                />

                <Select
                  label="Service Duration"
                  options={durationOptions}
                  value={orderData?.duration}
                  onChange={(value) => handleInputChange('duration', value)}
                  placeholder="Select duration"
                />

                <Select
                  label="Data Allowance"
                  options={dataOptions}
                  value={orderData?.dataAllowance}
                  onChange={(value) => handleInputChange('dataAllowance', value)}
                  placeholder="Select data plan"
                />

                {estimatedCost > 0 && (
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-blue-900">Estimated Cost</h4>
                      <Icon name="Calculator" size={20} className="text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      ${estimatedCost?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                    <div className="text-sm text-blue-700">
                      Includes volume discount • Final pricing may vary
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    fullWidth
                    className="bg-blue-600 hover:bg-blue-700"
                    iconName="ShoppingCart"
                    iconPosition="left"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                    iconName="FileText"
                    iconPosition="left"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Bulk Ordering Benefits
              </h3>
              
              <div className="space-y-6">
                {bulkFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Icon name={feature?.icon} size={20} className="text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature?.title}
                      </h4>
                      <p className="text-gray-600">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Percent" size={24} />
                <h3 className="text-xl font-semibold">Volume Pricing Tiers</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>10-49 SIMs</span>
                  <span className="font-semibold">Standard Rate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>50-99 SIMs</span>
                  <span className="font-semibold">5% Discount</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>100-499 SIMs</span>
                  <span className="font-semibold">15% Discount</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>500+ SIMs</span>
                  <span className="font-semibold">25% Discount</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-sm opacity-90">
                  Enterprise customers with 1000+ SIMs qualify for custom pricing and dedicated account management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrderingSection;