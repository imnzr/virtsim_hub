import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, onSortChange, sortBy }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  const countries = [
    'Indonesia', 'United States', 'United Kingdom', 'Singapore', 'Malaysia',
    'Thailand', 'Philippines', 'Vietnam', 'Australia', 'Japan', 'South Korea',
    'India', 'China', 'Germany', 'France', 'Netherlands', 'Canada', 'Brazil'
  ];

  const providers = [
    'Telkomsel Virtual', 'XL Axiata Digital', 'Indosat Ooredoo',
    'Smartfren Cloud', 'Three Indonesia', 'Global SIM Pro'
  ];

  const sortOptions = [
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'availability', label: 'Available First' },
    { value: 'newest', label: 'Newest First' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef?.current && !searchRef?.current?.contains(event?.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm?.length > 0) {
      const filteredCountries = countries?.filter(country =>
        country?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )?.map(country => ({ type: 'country', value: country }));

      const filteredProviders = providers?.filter(provider =>
        provider?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      )?.map(provider => ({ type: 'provider', value: provider }));

      setSuggestions([...filteredCountries, ...filteredProviders]?.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    const value = e?.target?.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion?.value);
    onSearch(suggestion?.value);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e?.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md" ref={searchRef}>
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <Input
            type="search"
            placeholder="Search countries, providers..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={() => searchTerm?.length > 0 && setShowSuggestions(true)}
            className="pl-10 pr-4"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                onSearch('');
                setShowSuggestions(false);
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions?.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-elevated z-50 max-h-64 overflow-y-auto">
            {suggestions?.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-muted transition-colors"
              >
                <Icon 
                  name={suggestion?.type === 'country' ? 'MapPin' : 'Building2'} 
                  size={16} 
                  className="text-muted-foreground" 
                />
                <div>
                  <span className="text-sm text-foreground">{suggestion?.value}</span>
                  <span className="text-xs text-muted-foreground ml-2 capitalize">
                    {suggestion?.type}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Sort Dropdown */}
      <div className="flex items-center space-x-2">
        <Icon name="ArrowUpDown" size={16} className="text-muted-foreground" />
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e?.target?.value)}
          className="bg-card border border-border rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          {sortOptions?.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;