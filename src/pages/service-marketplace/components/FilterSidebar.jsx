import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFiltersChange, onClearFilters, isOpen, onToggle }) => {
  const [searchCountry, setSearchCountry] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const countries = [
    'Indonesia', 'United States', 'United Kingdom', 'Singapore', 'Malaysia',
    'Thailand', 'Philippines', 'Vietnam', 'Australia', 'Japan', 'South Korea',
    'India', 'China', 'Germany', 'France', 'Netherlands', 'Canada', 'Brazil'
  ];

  const providers = [
    'Telkomsel Virtual', 'XL Axiata Digital', 'Indosat Ooredoo',
    'Smartfren Cloud', 'Three Indonesia', 'Global SIM Pro'
  ];

  const dataAllowances = [
    '1GB', '2GB', '5GB', '10GB', '20GB', '50GB', 'Unlimited'
  ];

  const validityPeriods = [
    '7 days', '15 days', '30 days', '60 days', '90 days', '180 days', '365 days'
  ];

  const useCases = [
    'Travel & Tourism', 'Business Communication', 'Development & Testing',
    'IoT Applications', 'Emergency Backup', 'International Calling'
  ];

  const filteredCountries = countries?.filter(country =>
    country?.toLowerCase()?.includes(searchCountry?.toLowerCase())
  );

  const handleCountryChange = (country, checked) => {
    const updatedCountries = checked
      ? [...(filters?.countries || []), country]
      : (filters?.countries || [])?.filter(c => c !== country);
    onFiltersChange({ ...filters, countries: updatedCountries });
  };

  const handleProviderChange = (provider, checked) => {
    const updatedProviders = checked
      ? [...(filters?.providers || []), provider]
      : (filters?.providers || [])?.filter(p => p !== provider);
    onFiltersChange({ ...filters, providers: updatedProviders });
  };

  const handleDataAllowanceChange = (allowance, checked) => {
    const updatedAllowances = checked
      ? [...(filters?.dataAllowances || []), allowance]
      : (filters?.dataAllowances || [])?.filter(a => a !== allowance);
    onFiltersChange({ ...filters, dataAllowances: updatedAllowances });
  };

  const handleValidityChange = (period, checked) => {
    const updatedPeriods = checked
      ? [...(filters?.validityPeriods || []), period]
      : (filters?.validityPeriods || [])?.filter(p => p !== period);
    onFiltersChange({ ...filters, validityPeriods: updatedPeriods });
  };

  const handleUseCaseChange = (useCase, checked) => {
    const updatedUseCases = checked
      ? [...(filters?.useCases || []), useCase]
      : (filters?.useCases || [])?.filter(u => u !== useCase);
    onFiltersChange({ ...filters, useCases: updatedUseCases });
  };

  const handlePriceRangeChange = () => {
    onFiltersChange({
      ...filters,
      priceRange: {
        min: priceRange?.min ? parseInt(priceRange?.min) : null,
        max: priceRange?.max ? parseInt(priceRange?.max) : null
      }
    });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-card border-r border-border
        transform transition-transform duration-300 ease-in-out z-50 lg:z-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Filters</h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
              <button
                onClick={onToggle}
                className="lg:hidden p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">Price Range (IDR)</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={priceRange?.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e?.target?.value })}
                  className="text-sm"
                />
                <Input
                  type="number"
                  placeholder="Max"
                  value={priceRange?.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e?.target?.value })}
                  className="text-sm"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handlePriceRangeChange}
                className="w-full"
              >
                Apply Range
              </Button>
            </div>
          </div>

          {/* Countries */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">Countries</h3>
            <Input
              type="search"
              placeholder="Search countries..."
              value={searchCountry}
              onChange={(e) => setSearchCountry(e?.target?.value)}
              className="mb-3"
            />
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {filteredCountries?.map((country) => (
                <Checkbox
                  key={country}
                  label={country}
                  checked={(filters?.countries || [])?.includes(country)}
                  onChange={(e) => handleCountryChange(country, e?.target?.checked)}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Providers */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">Providers</h3>
            <div className="space-y-2">
              {providers?.map((provider) => (
                <Checkbox
                  key={provider}
                  label={provider}
                  checked={(filters?.providers || [])?.includes(provider)}
                  onChange={(e) => handleProviderChange(provider, e?.target?.checked)}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Data Allowances */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">Data Allowance</h3>
            <div className="space-y-2">
              {dataAllowances?.map((allowance) => (
                <Checkbox
                  key={allowance}
                  label={allowance}
                  checked={(filters?.dataAllowances || [])?.includes(allowance)}
                  onChange={(e) => handleDataAllowanceChange(allowance, e?.target?.checked)}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Validity Periods */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">Validity Period</h3>
            <div className="space-y-2">
              {validityPeriods?.map((period) => (
                <Checkbox
                  key={period}
                  label={period}
                  checked={(filters?.validityPeriods || [])?.includes(period)}
                  onChange={(e) => handleValidityChange(period, e?.target?.checked)}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">Use Cases</h3>
            <div className="space-y-2">
              {useCases?.map((useCase) => (
                <Checkbox
                  key={useCase}
                  label={useCase}
                  checked={(filters?.useCases || [])?.includes(useCase)}
                  onChange={(e) => handleUseCaseChange(useCase, e?.target?.checked)}
                  size="sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;