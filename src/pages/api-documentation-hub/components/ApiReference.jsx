import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ApiReference = () => {
  const [selectedCategory, setSelectedCategory] = useState('services');
  const [expandedEndpoint, setExpandedEndpoint] = useState(null);

  const categories = [
    { id: 'services', name: 'Services', icon: 'Smartphone', count: 4 },
    { id: 'orders', name: 'Orders', icon: 'ShoppingCart', count: 6 },
    { id: 'webhooks', name: 'Webhooks', icon: 'Webhook', count: 3 },
    { id: 'auth', name: 'Authentication', icon: 'Shield', count: 2 }
  ];

  const endpoints = {
    services: [
      {
        id: 'get-services',
        method: 'GET',
        path: '/api/v1/services',
        title: 'List Services',
        description: 'Retrieve all available virtual SIM services with filtering options',
        parameters: [
          { name: 'country', type: 'string', required: false, description: 'Filter by country code (e.g., ID, SG)' },
          { name: 'provider', type: 'string', required: false, description: 'Filter by provider name' },
          { name: 'page', type: 'integer', required: false, description: 'Page number for pagination (default: 1)' },
          { name: 'per_page', type: 'integer', required: false, description: 'Items per page (default: 10, max: 100)' }
        ],
        responses: {
          200: {
            description: 'Successful response',
            example: {
              services: [
                {
                  id: "service_001",
                  name: "Indonesia Premium",
                  country: "ID",
                  provider: "Telkomsel",
                  price: 15000,
                  currency: "IDR",
                  validity_days: 30,
                  data_allowance: "10GB",
                  available: true
                }
              ],
              total: 25,
              page: 1,
              per_page: 10
            }
          }
        }
      },
      {
        id: 'get-service',
        method: 'GET',
        path: '/api/v1/services/{id}',
        title: 'Get Service Details',
        description: 'Retrieve detailed information about a specific service',
        parameters: [
          { name: 'id', type: 'string', required: true, description: 'Service identifier' }
        ],
        responses: {
          200: {
            description: 'Service details',
            example: {
              id: "service_001",
              name: "Indonesia Premium",
              country: "ID",
              provider: "Telkomsel",
              price: 15000,
              currency: "IDR",
              validity_days: 30,
              data_allowance: "10GB",
              features: ["Voice", "SMS", "Data"],
              available: true,
              stock_level: "high"
            }
          },
          404: {
            description: 'Service not found',
            example: {
              error: "Service not found",
              code: "SERVICE_NOT_FOUND"
            }
          }
        }
      }
    ],
    orders: [
      {
        id: 'create-order',
        method: 'POST',
        path: '/api/v1/orders',
        title: 'Create Order',
        description: 'Create a new virtual SIM order',
        parameters: [
          { name: 'service_id', type: 'string', required: true, description: 'Service identifier' },
          { name: 'quantity', type: 'integer', required: false, description: 'Number of SIMs (default: 1)' },
          { name: 'webhook_url', type: 'string', required: false, description: 'URL for order status webhooks' }
        ],
        responses: {
          201: {
            description: 'Order created successfully',
            example: {
              order_id: "ord_12345",
              service_id: "service_001",
              quantity: 1,
              status: "processing",
              total_amount: 15000,
              currency: "IDR",
              created_at: "2025-01-17T00:45:34Z",
              estimated_delivery: "2025-01-17T00:50:34Z"
            }
          }
        }
      },
      {
        id: 'get-order',
        method: 'GET',
        path: '/api/v1/orders/{id}',
        title: 'Get Order Status',
        description: 'Retrieve order details and current status',
        parameters: [
          { name: 'id', type: 'string', required: true, description: 'Order identifier' }
        ],
        responses: {
          200: {
            description: 'Order details',
            example: {
              order_id: "ord_12345",
              service_id: "service_001",
              status: "completed",
              sim_details: {
                number: "+628123456789",
                iccid: "89628012345678901234",
                activation_code: "ACT123"
              },
              created_at: "2025-01-17T00:45:34Z",
              completed_at: "2025-01-17T00:47:12Z"
            }
          }
        }
      }
    ],
    webhooks: [
      {
        id: 'order-webhooks',
        method: 'POST',
        path: 'Your webhook URL',
        title: 'Order Status Webhooks',
        description: 'Receive real-time notifications about order status changes',
        parameters: [
          { name: 'event', type: 'string', required: true, description: 'Event type (order.completed, order.failed)' },
          { name: 'data', type: 'object', required: true, description: 'Event payload with order details' }
        ],
        responses: {
          200: {
            description: 'Webhook received successfully',
            example: {
              event: "order.completed",
              data: {
                order_id: "ord_12345",
                service_id: "service_001",
                status: "completed",
                sim_details: {
                  number: "+628123456789",
                  iccid: "89628012345678901234"
                }
              }
            }
          }
        }
      }
    ],
    auth: [
      {
        id: 'validate-key',
        method: 'GET',
        path: '/api/v1/auth/validate',
        title: 'Validate API Key',
        description: 'Verify that your API key is valid and active',
        parameters: [],
        responses: {
          200: {
            description: 'API key is valid',
            example: {
              valid: true,
              user_id: "user_123",
              rate_limit: {
                requests_per_minute: 60,
                remaining: 58
              }
            }
          },
          401: {
            description: 'Invalid API key',
            example: {
              error: "Invalid API key",
              code: "INVALID_API_KEY"
            }
          }
        }
      }
    ]
  };

  const toggleEndpoint = (endpointId) => {
    setExpandedEndpoint(expandedEndpoint === endpointId ? null : endpointId);
  };

  const getMethodColor = (method) => {
    const colors = {
      GET: 'bg-blue-100 text-blue-800',
      POST: 'bg-green-100 text-green-800',
      PUT: 'bg-yellow-100 text-yellow-800',
      DELETE: 'bg-red-100 text-red-800'
    };
    return colors?.[method] || 'bg-gray-100 text-gray-800';
  };

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
  };

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
            <Icon name="Book" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">API Reference</h3>
            <p className="text-sm text-muted-foreground">Complete documentation for all API endpoints</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground mb-3">Categories</h4>
            {categories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name={category?.icon} size={16} />
                  <span>{category?.name}</span>
                </div>
                <span className="text-xs opacity-80">{category?.count}</span>
              </button>
            ))}
          </div>

          {/* Endpoints */}
          <div className="lg:col-span-3 space-y-4">
            {endpoints?.[selectedCategory]?.map((endpoint) => (
              <div key={endpoint?.id} className="border border-border rounded-lg">
                <button
                  onClick={() => toggleEndpoint(endpoint?.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-muted transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getMethodColor(endpoint?.method)}`}>
                      {endpoint?.method}
                    </span>
                    <div>
                      <h5 className="font-medium text-foreground">{endpoint?.title}</h5>
                      <p className="text-sm text-muted-foreground font-mono">{endpoint?.path}</p>
                    </div>
                  </div>
                  <Icon 
                    name={expandedEndpoint === endpoint?.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground"
                  />
                </button>

                {expandedEndpoint === endpoint?.id && (
                  <div className="border-t border-border p-4 space-y-6">
                    <p className="text-sm text-muted-foreground">{endpoint?.description}</p>

                    {/* Parameters */}
                    {endpoint?.parameters?.length > 0 && (
                      <div>
                        <h6 className="text-sm font-medium text-foreground mb-3">Parameters</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-2 text-muted-foreground">Name</th>
                                <th className="text-left py-2 text-muted-foreground">Type</th>
                                <th className="text-left py-2 text-muted-foreground">Required</th>
                                <th className="text-left py-2 text-muted-foreground">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {endpoint?.parameters?.map((param, index) => (
                                <tr key={index} className="border-b border-border">
                                  <td className="py-2 font-mono text-foreground">{param?.name}</td>
                                  <td className="py-2 text-muted-foreground">{param?.type}</td>
                                  <td className="py-2">
                                    <span className={`px-2 py-1 rounded text-xs ${
                                      param?.required 
                                        ? 'bg-red-100 text-red-800' :'bg-gray-100 text-gray-600'
                                    }`}>
                                      {param?.required ? 'Required' : 'Optional'}
                                    </span>
                                  </td>
                                  <td className="py-2 text-muted-foreground">{param?.description}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Responses */}
                    <div>
                      <h6 className="text-sm font-medium text-foreground mb-3">Responses</h6>
                      {Object.entries(endpoint?.responses)?.map(([status, response]) => (
                        <div key={status} className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                status?.startsWith('2') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {status}
                              </span>
                              <span className="text-sm text-muted-foreground">{response?.description}</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              iconName="Copy"
                              onClick={() => copyToClipboard(JSON.stringify(response?.example, null, 2))}
                            >
                              Copy
                            </Button>
                          </div>
                          <div className="bg-gray-900 rounded p-3">
                            <pre className="text-xs font-mono text-gray-100 overflow-x-auto">
                              {JSON.stringify(response?.example, null, 2)}
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiReference;