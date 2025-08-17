import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceGrid = ({ 
  services, 
  loading, 
  comparedServices, 
  onCompare, 
  onPurchase,
  currentPage,
  totalPages,
  onPageChange 
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 9 })?.map((_, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 animate-pulse">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="h-6 bg-muted rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-muted rounded mb-2 w-1/2"></div>
                <div className="h-4 bg-muted rounded w-1/3"></div>
              </div>
              <div className="h-6 w-6 bg-muted rounded"></div>
            </div>
            <div className="h-8 bg-muted rounded mb-4 w-1/2"></div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {Array.from({ length: 4 })?.map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded"></div>
              ))}
            </div>
            <div className="flex space-x-2">
              <div className="h-9 bg-muted rounded flex-1"></div>
              <div className="h-9 bg-muted rounded flex-1"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (services?.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">No services found</h3>
        <p className="text-muted-foreground mb-4">
          Try adjusting your filters or search terms to find more services.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {services?.map((service) => (
          <ServiceCard
            key={service?.id}
            service={service}
            onCompare={onCompare}
            onPurchase={onPurchase}
            isComparing={comparedServices?.includes(service?.id)}
          />
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md border border-border text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(pageNum)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === pageNum
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md border border-border text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceGrid;