import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FilterSidebar from './components/FilterSidebar';
import SearchBar from './components/SearchBar';
import ComparisonTool from './components/ComparisonTool';
import ServiceGrid from './components/ServiceGrid';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ServiceMarketplace = () => {
  const [filters, setFilters] = useState({
    countries: [],
    providers: [],
    dataAllowances: [],
    validityPeriods: [],
    useCases: [],
    priceRange: { min: null, max: null }
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [comparedServices, setComparedServices] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

  // Mock services data
  const allServices = [
    {
      id: 1,
      country: 'Indonesia',
      provider: 'Telkomsel Virtual',
      price: 75000,
      originalPrice: 85000,
      dataAllowance: '10GB',
      validity: '30 days',
      speed: '4G/5G',
      coverage: 'Nationwide',
      rating: 4.8,
      reviewCount: 1247,
      availability: 'available',
      priceChange: -12,
      features: ['Unlimited calls', 'SMS included', 'Hotspot sharing', 'International roaming'],
      useCases: ['Travel & Tourism', 'Business Communication'],
      activationTime: 'Instant activation'
    },
    {
      id: 2,
      country: 'United States',
      provider: 'Global SIM Pro',
      price: 120000,
      originalPrice: null,
      dataAllowance: '20GB',
      validity: '30 days',
      speed: '5G',
      coverage: 'Nationwide + Puerto Rico',
      rating: 4.6,
      reviewCount: 892,
      availability: 'available',
      priceChange: null,
      features: ['5G network', 'Unlimited calls', 'International SMS', 'eSIM support'],
      useCases: ['Business Communication', 'Development & Testing'],
      activationTime: 'Within 5 minutes'
    },
    {
      id: 3,
      country: 'Singapore',
      provider: 'XL Axiata Digital',
      price: 95000,
      originalPrice: 110000,
      dataAllowance: '15GB',
      validity: '30 days',
      speed: '4G+',
      coverage: 'Island-wide',
      rating: 4.7,
      reviewCount: 654,
      availability: 'limited',
      priceChange: -14,
      features: ['High-speed data', 'Voice calls', 'SMS', 'Data rollover'],
      useCases: ['Travel & Tourism', 'IoT Applications'],
      activationTime: 'Instant activation'
    },
    {
      id: 4,
      country: 'United Kingdom',
      provider: 'Global SIM Pro',
      price: 135000,
      originalPrice: null,
      dataAllowance: '25GB',
      validity: '30 days',
      speed: '5G',
      coverage: 'UK + Northern Ireland',
      rating: 4.5,
      reviewCount: 1089,
      availability: 'available',
      priceChange: 5,
      features: ['5G speeds', 'EU roaming', 'Unlimited calls', 'Tethering'],
      useCases: ['Business Communication', 'Travel & Tourism'],
      activationTime: 'Within 10 minutes'
    },
    {
      id: 5,
      country: 'Malaysia',
      provider: 'Indosat Ooredoo',
      price: 65000,
      originalPrice: 75000,
      dataAllowance: '8GB',
      validity: '15 days',
      speed: '4G',
      coverage: 'Peninsular + East Malaysia',
      rating: 4.4,
      reviewCount: 432,
      availability: 'available',
      priceChange: -13,
      features: ['4G network', 'Voice calls', 'SMS', 'Social media packages'],
      useCases: ['Travel & Tourism', 'Emergency Backup'],
      activationTime: 'Instant activation'
    },
    {
      id: 6,
      country: 'Thailand',
      provider: 'Smartfren Cloud',
      price: 85000,
      originalPrice: null,
      dataAllowance: '12GB',
      validity: '30 days',
      speed: '4G+',
      coverage: 'Nationwide',
      rating: 4.3,
      reviewCount: 567,
      availability: 'available',
      priceChange: null,
      features: ['High-speed data', 'Voice calls', 'International SMS', 'Tourist packages'],
      useCases: ['Travel & Tourism', 'Business Communication'],
      activationTime: 'Within 15 minutes'
    },
    {
      id: 7,
      country: 'Japan',
      provider: 'Three Indonesia',
      price: 180000,
      originalPrice: 200000,
      dataAllowance: '30GB',
      validity: '30 days',
      speed: '5G',
      coverage: 'Major cities + rural areas',
      rating: 4.9,
      reviewCount: 1456,
      availability: 'limited',
      priceChange: -10,
      features: ['5G ultra-fast', 'Unlimited calls', 'International roaming', 'eSIM ready'],
      useCases: ['Business Communication', 'Development & Testing'],
      activationTime: 'Within 5 minutes'
    },
    {
      id: 8,
      country: 'Australia',
      provider: 'Global SIM Pro',
      price: 145000,
      originalPrice: null,
      dataAllowance: '22GB',
      validity: '30 days',
      speed: '5G',
      coverage: 'Major cities + regional',
      rating: 4.6,
      reviewCount: 789,
      availability: 'unavailable',
      priceChange: null,
      features: ['5G network', 'Unlimited calls', 'SMS included', 'Data sharing'],
      useCases: ['Business Communication', 'Travel & Tourism'],
      activationTime: 'Currently unavailable'
    },
    {
      id: 9,
      country: 'Philippines',
      provider: 'Telkomsel Virtual',
      price: 55000,
      originalPrice: 65000,
      dataAllowance: '6GB',
      validity: '15 days',
      speed: '4G',
      coverage: 'Major islands',
      rating: 4.2,
      reviewCount: 345,
      availability: 'available',
      priceChange: -15,
      features: ['4G speeds', 'Voice calls', 'SMS', 'Social apps'],
      useCases: ['Travel & Tourism', 'Emergency Backup'],
      activationTime: 'Instant activation'
    },
    {
      id: 10,
      country: 'Vietnam',
      provider: 'XL Axiata Digital',
      price: 70000,
      originalPrice: null,
      dataAllowance: '10GB',
      validity: '30 days',
      speed: '4G+',
      coverage: 'Nationwide',
      rating: 4.5,
      reviewCount: 623,
      availability: 'available',
      priceChange: null,
      features: ['High-speed 4G', 'Voice calls', 'SMS', 'Tourist-friendly'],
      useCases: ['Travel & Tourism', 'Business Communication'],
      activationTime: 'Within 10 minutes'
    },
    {
      id: 11,
      country: 'South Korea',
      provider: 'Global SIM Pro',
      price: 165000,
      originalPrice: 185000,
      dataAllowance: '35GB',
      validity: '30 days',
      speed: '5G',
      coverage: 'Nationwide',
      rating: 4.8,
      reviewCount: 1123,
      availability: 'available',
      priceChange: -11,
      features: ['Ultra-fast 5G', 'Unlimited calls', 'International SMS', 'Gaming optimized'],
      useCases: ['Business Communication', 'Development & Testing'],
      activationTime: 'Within 5 minutes'
    },
    {
      id: 12,
      country: 'India',
      provider: 'Indosat Ooredoo',
      price: 45000,
      originalPrice: 55000,
      dataAllowance: '5GB',
      validity: '28 days',
      speed: '4G',
      coverage: 'Pan-India',
      rating: 4.1,
      reviewCount: 892,
      availability: 'limited',
      priceChange: -18,
      features: ['4G network', 'Voice calls', 'SMS', 'App-specific data'],
      useCases: ['Travel & Tourism', 'Emergency Backup'],
      activationTime: 'Within 30 minutes'
    }
  ];

  // Filter and sort services
  const getFilteredAndSortedServices = () => {
    let filtered = allServices;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered?.filter(service =>
        service?.country?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        service?.provider?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }

    // Apply filters
    if (filters?.countries?.length > 0) {
      filtered = filtered?.filter(service => filters?.countries?.includes(service?.country));
    }

    if (filters?.providers?.length > 0) {
      filtered = filtered?.filter(service => filters?.providers?.includes(service?.provider));
    }

    if (filters?.dataAllowances?.length > 0) {
      filtered = filtered?.filter(service => filters?.dataAllowances?.includes(service?.dataAllowance));
    }

    if (filters?.validityPeriods?.length > 0) {
      filtered = filtered?.filter(service => filters?.validityPeriods?.includes(service?.validity));
    }

    if (filters?.useCases?.length > 0) {
      filtered = filtered?.filter(service =>
        service?.useCases?.some(useCase => filters?.useCases?.includes(useCase))
      );
    }

    if (filters?.priceRange?.min !== null || filters?.priceRange?.max !== null) {
      filtered = filtered?.filter(service => {
        const price = service?.price;
        const minCheck = filters?.priceRange?.min === null || price >= filters?.priceRange?.min;
        const maxCheck = filters?.priceRange?.max === null || price <= filters?.priceRange?.max;
        return minCheck && maxCheck;
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered?.sort((a, b) => a?.price - b?.price);
        break;
      case 'price-high':
        filtered?.sort((a, b) => b?.price - a?.price);
        break;
      case 'rating':
        filtered?.sort((a, b) => b?.rating - a?.rating);
        break;
      case 'availability':
        filtered?.sort((a, b) => {
          const order = { available: 0, limited: 1, unavailable: 2 };
          return order?.[a?.availability] - order?.[b?.availability];
        });
        break;
      case 'newest':
        filtered?.sort((a, b) => b?.id - a?.id);
        break;
      default: // popularity
        filtered?.sort((a, b) => b?.reviewCount - a?.reviewCount);
    }

    return filtered;
  };

  const filteredServices = getFilteredAndSortedServices();
  const totalPages = Math.ceil(filteredServices?.length / servicesPerPage);
  const currentServices = filteredServices?.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  // Simulate loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [filters, searchTerm, sortBy]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchTerm, sortBy]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      countries: [],
      providers: [],
      dataAllowances: [],
      validityPeriods: [],
      useCases: [],
      priceRange: { min: null, max: null }
    });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  const handleCompare = (serviceId, isComparing) => {
    if (isComparing) {
      if (comparedServices?.length < 4) {
        setComparedServices([...comparedServices, serviceId]);
      }
    } else {
      setComparedServices(comparedServices?.filter(id => id !== serviceId));
    }
  };

  const handleRemoveFromComparison = (serviceId) => {
    setComparedServices(comparedServices?.filter(id => id !== serviceId));
  };

  const handleClearComparison = () => {
    setComparedServices([]);
  };

  const handlePurchase = (service) => {
    // Mock purchase action
    alert(`Purchasing ${service?.country} service from ${service?.provider} for ${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })?.format(service?.price)}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Service Marketplace - VirtSIM Hub</title>
        <meta name="description" content="Browse and compare virtual SIM services from top providers. Find the perfect plan for your needs with real-time pricing and instant activation." />
        <meta name="keywords" content="virtual SIM, eSIM, mobile plans, international roaming, data plans, telecommunications" />
      </Helmet>
      <Header />
      <div className="pt-16">
        <div className="flex">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFiltersChange={handleFiltersChange}
            onClearFilters={handleClearFilters}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(!isFilterOpen)}
          />

          {/* Main Content */}
          <div className="flex-1 lg:ml-80">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Service Marketplace</h1>
                  <p className="text-muted-foreground">
                    Discover and compare virtual SIM services from trusted providers worldwide
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden"
                  iconName="Filter"
                  iconPosition="left"
                >
                  Filters
                </Button>
              </div>

              {/* Search and Sort */}
              <SearchBar
                onSearch={handleSearch}
                onSortChange={handleSortChange}
                sortBy={sortBy}
              />

              {/* Results Summary */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {currentServices?.length} of {filteredServices?.length} services
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
                {comparedServices?.length > 0 && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="GitCompare" size={16} />
                    <span>{comparedServices?.length} selected for comparison</span>
                  </div>
                )}
              </div>

              {/* Comparison Tool */}
              <ComparisonTool
                services={allServices}
                comparedServices={comparedServices}
                onRemoveFromComparison={handleRemoveFromComparison}
                onClearComparison={handleClearComparison}
              />

              {/* Services Grid */}
              <ServiceGrid
                services={currentServices}
                loading={loading}
                comparedServices={comparedServices}
                onCompare={handleCompare}
                onPurchase={handlePurchase}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMarketplace;