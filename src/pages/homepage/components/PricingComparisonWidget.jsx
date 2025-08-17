import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const PricingComparisonWidget = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'au', label: 'Australia' },
    { value: 'ca', label: 'Canada' },
    { value: 'sg', label: 'Singapore' }
  ];

  const providers = [
    { value: 'all', label: 'All Providers' },
    { value: 'provider1', label: 'TelecomPlus' },
    { value: 'provider2', label: 'GlobalSIM' },
    { value: 'provider3', label: 'ConnectWorld' },
    { value: 'provider4', label: 'VirtualNet' }
  ];

  const [pricingData, setPricingData] = useState([
    {
      id: 1,
      provider: 'TelecomPlus',
      price: 0.85,
      duration: '30 days',
      data: '1GB',
      status: 'available',
      rating: 4.8,
      features: ['SMS included', 'Voice calls', '24/7 support']
    },
    {
      id: 2,
      provider: 'GlobalSIM',
      price: 0.92,
      duration: '30 days',
      data: '1GB',
      status: 'available',
      rating: 4.6,
      features: ['SMS included', 'Voice calls', 'EU roaming']
    },
    {
      id: 3,
      provider: 'ConnectWorld',
      price: 0.78,
      duration: '30 days',
      data: '1GB',
      status: 'limited',
      rating: 4.4,
      features: ['SMS included', 'Data only', 'Fast activation']
    },
    {
      id: 4,
      provider: 'VirtualNet',
      price: 0.95,
      duration: '30 days',
      data: '1GB',
      status: 'available',
      rating: 4.9,
      features: ['SMS included', 'Voice calls', 'Premium support']
    }
  ]);

  // Mock price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPricingData(prev => prev?.map(item => ({
        ...item,
        price: Math.max(0.5, Math.min(1.5, item?.price + (Math.random() - 0.5) * 0.05))
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'limited': return 'text-yellow-600 bg-yellow-100';
      case 'offline': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredData = selectedProvider === 'all' 
    ? pricingData 
    : pricingData?.filter(item => item?.provider?.toLowerCase()?.includes(selectedProvider));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Icon name="DollarSign" size={16} />
            <span>Live Pricing</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Compare Prices in Real-Time
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant access to competitive pricing from multiple providers. 
            Our intelligent system ensures you always get the best deal.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4 items-end">
            <Select
              label="Select Country"
              options={countries}
              value={selectedCountry}
              onChange={setSelectedCountry}
              searchable
            />
            
            <Select
              label="Provider"
              options={providers}
              value={selectedProvider}
              onChange={setSelectedProvider}
            />
            
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700"
              iconName="Search"
              iconPosition="left"
              loading={isLoading}
              onClick={handleSearch}
            >
              Update Prices
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData?.map((item) => (
            <div 
              key={item?.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Provider Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">{item?.provider}</h3>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item?.status)}`}>
                  {item?.status}
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold text-gray-900">
                    ${item?.price?.toFixed(2)}
                  </span>
                  <span className="text-gray-500">/{item?.duration}</span>
                </div>
                <div className="text-sm text-gray-600">{item?.data} data included</div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={14}
                      className={i < Math.floor(item?.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{item?.rating}</span>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {item?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant={item?.status === 'available' ? 'default' : 'outline'}
                fullWidth
                className={item?.status === 'available' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                disabled={item?.status === 'offline'}
              >
                {item?.status === 'available' ? 'Select Plan' : 
                 item?.status === 'limited' ? 'Limited Stock' : 'Unavailable'}
              </Button>

              {/* Live Update Indicator */}
              <div className="flex items-center justify-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live pricing</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-blue-50 rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-2 text-blue-700">
              <Icon name="RefreshCw" size={16} />
              <span className="text-sm font-medium">Prices update every 30 seconds</span>
            </div>
            <div className="w-px h-4 bg-blue-200"></div>
            <div className="flex items-center space-x-2 text-blue-700">
              <Icon name="Shield" size={16} />
              <span className="text-sm font-medium">Price match guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparisonWidget;