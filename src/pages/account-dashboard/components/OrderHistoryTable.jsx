import React, { useState } from 'react';

import Button from '../../../components/ui/Button';

const OrderHistoryTable = ({ orders, onDownloadInvoice }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(orders?.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = orders?.slice(startIndex, endIndex);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'failed':
        return 'text-red-600 bg-red-50';
      case 'processing':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Order History</h3>
        <p className="text-sm text-muted-foreground">Track your recent purchases and downloads</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {currentOrders?.map((order) => (
              <tr key={order?.id} className="hover:bg-muted/50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-mono text-sm text-foreground">#{order?.id}</span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">{order?.serviceName}</p>
                    <p className="text-xs text-muted-foreground">{order?.provider}</p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-foreground">Rp {order?.amount?.toLocaleString('id-ID')}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order?.status)}`}>
                    {order?.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {order?.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => onDownloadInvoice(order)}
                    disabled={order?.status !== 'completed'}
                  >
                    Invoice
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-border flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(endIndex, orders?.length)} of {orders?.length} orders
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="ChevronLeft"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            />
            <span className="text-sm text-foreground px-3 py-1">
              {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              iconName="ChevronRight"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryTable;