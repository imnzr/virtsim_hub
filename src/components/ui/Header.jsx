import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Marketplace', path: '/service-marketplace', icon: 'Store' },
    { name: 'API Docs', path: '/api-documentation-hub', icon: 'Code' },
    { name: 'Dashboard', path: '/account-dashboard', icon: 'LayoutDashboard' },
  ];

  const secondaryNavItems = [
    { name: 'Business Solutions', path: '/business-solutions', icon: 'Building2' },
    { name: 'About', path: '/about-virt-sim-hub', icon: 'Info' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMoreMenuOpen(false);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo */}
        <Link 
          to="/homepage" 
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
          onClick={closeMobileMenu}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-foreground">VirtSIM Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {primaryNavItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={item?.icon} size={16} />
              <span>{item?.name}</span>
            </Link>
          ))}
          
          {/* More Menu */}
          <div className="relative">
            <button
              onClick={toggleMoreMenu}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isMoreMenuOpen
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name="MoreHorizontal" size={16} />
              <span>More</span>
            </button>
            
            {isMoreMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-md shadow-elevated z-50">
                <div className="py-1">
                  {secondaryNavItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      onClick={() => setIsMoreMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                        isActivePath(item?.path)
                          ? 'bg-accent text-accent-foreground'
                          : 'text-popover-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" size="sm" iconName="Search" iconPosition="left">
            Search
          </Button>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="default" size="sm" className="bg-brand-orange hover:bg-brand-orange/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-40">
          <div className="px-4 py-6 space-y-4">
            {/* Primary Navigation */}
            <div className="space-y-2">
              {primaryNavItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>

            {/* Secondary Navigation */}
            <div className="border-t border-border pt-4 space-y-2">
              <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                More
              </h3>
              {secondaryNavItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="border-t border-border pt-6 space-y-3">
              <Button 
                variant="outline" 
                fullWidth 
                iconName="Search" 
                iconPosition="left"
                onClick={closeMobileMenu}
              >
                Search Services
              </Button>
              <Button 
                variant="ghost" 
                fullWidth
                onClick={closeMobileMenu}
              >
                Sign In
              </Button>
              <Button 
                variant="default" 
                fullWidth 
                className="bg-brand-orange hover:bg-brand-orange/90"
                onClick={closeMobileMenu}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Click outside overlay to close more menu */}
      {isMoreMenuOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsMoreMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;