import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import BusinessSolutions from './pages/business-solutions';
import ApiDocumentationHub from './pages/api-documentation-hub';
import ServiceMarketplace from './pages/service-marketplace';
import AccountDashboard from './pages/account-dashboard';
import AboutVirtSimHub from './pages/about-virt-sim-hub';
import Homepage from './pages/homepage';
import UserRegistration from './pages/user-registration';
import UserLogin from './pages/user-login';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutVirtSimHub />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />
        <Route path="/api-documentation-hub" element={<ApiDocumentationHub />} />
        <Route path="/service-marketplace" element={<ServiceMarketplace />} />
        <Route path="/account-dashboard" element={<AccountDashboard />} />
        <Route path="/about-virt-sim-hub" element={<AboutVirtSimHub />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/user-registration" element={<UserRegistration />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;