import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ApiExplorer = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('get-services');
  const [apiKey, setApiKey] = useState('demo_key_12345');
  const [parameters, setParameters] = useState({});
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const endpoints = [
    { value: 'get-services', label: 'GET /api/v1/services' },
    { value: 'get-countries', label: 'GET /api/v1/countries' },
    { value: 'create-order', label: 'POST /api/v1/orders' },
    { value: 'get-order', label: 'GET /api/v1/orders/{id}' },
    { value: 'get-balance', label: 'GET /api/v1/balance' }
  ];

  const endpointDetails = {
    'get-services': {
      method: 'GET',
      url: '/api/v1/services',
      description: 'Retrieve available virtual SIM services',
      parameters: [
        { name: 'country', type: 'string', required: false, description: 'Filter by country code' },
        { name: 'provider', type: 'string', required: false, description: 'Filter by provider' }
      ]
    },
    'get-countries': {
      method: 'GET',
      url: '/api/v1/countries',
      description: 'Get list of supported countries',
      parameters: []
    },
    'create-order': {
      method: 'POST',
      url: '/api/v1/orders',
      description: 'Create a new virtual SIM order',
      parameters: [
        { name: 'service_id', type: 'string', required: true, description: 'Service identifier' },
        { name: 'quantity', type: 'integer', required: false, description: 'Number of SIMs (default: 1)' }
      ]
    }
  };

  const mockResponses = {
    'get-services': {
      status: 200,
      data: {
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
          },
          {
            id: "service_002",
            name: "Singapore Business",
            country: "SG",
            provider: "Singtel",
            price: 25000,
            currency: "IDR",
            validity_days: 30,
            data_allowance: "20GB",
            available: true
          }
        ],
        total: 2,
        page: 1,
        per_page: 10
      }
    },
    'get-countries': {
      status: 200,
      data: {
        countries: [
          { code: "ID", name: "Indonesia", flag: "🇮🇩", services_count: 15 },
          { code: "SG", name: "Singapore", flag: "🇸🇬", services_count: 8 },
          { code: "MY", name: "Malaysia", flag: "🇲🇾", services_count: 12 }
        ]
      }
    },
    'create-order': {
      status: 201,
      data: {
        order_id: "ord_12345",
        service_id: "service_001",
        status: "processing",
        total_amount: 15000,
        currency: "IDR",
        created_at: "2025-01-17T00:45:34Z",
        estimated_delivery: "2025-01-17T00:50:34Z"
      }
    }
  };

  const handleTryIt = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setResponse(mockResponses?.[selectedEndpoint] || {
        status: 200,
        data: { message: "Mock response for " + selectedEndpoint }
      });
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
  };

  const currentEndpoint = endpointDetails?.[selectedEndpoint];

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <Icon name="Play" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">API Explorer</h3>
            <p className="text-sm text-muted-foreground">Test our API endpoints with live data</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Select
              label="Select Endpoint"
              options={endpoints}
              value={selectedEndpoint}
              onChange={setSelectedEndpoint}
            />

            <Input
              label="API Key"
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e?.target?.value)}
              description="Use demo_key_12345 for testing"
            />

            {currentEndpoint?.parameters?.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">Parameters</h4>
                {currentEndpoint?.parameters?.map((param) => (
                  <Input
                    key={param?.name}
                    label={`${param?.name} ${param?.required ? '*' : ''}`}
                    type={param?.type === 'integer' ? 'number' : 'text'}
                    placeholder={param?.description}
                    value={parameters?.[param?.name] || ''}
                    onChange={(e) => setParameters(prev => ({
                      ...prev,
                      [param?.name]: e?.target?.value
                    }))}
                    description={param?.description}
                    required={param?.required}
                  />
                ))}
              </div>
            )}

            <Button
              variant="default"
              onClick={handleTryIt}
              loading={isLoading}
              iconName="Send"
              iconPosition="left"
              className="w-full"
            >
              Try It Out
            </Button>
          </div>

          <div className="space-y-4">
            {currentEndpoint && (
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-foreground">Request</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Copy"
                    onClick={() => copyToClipboard(`${currentEndpoint?.method} ${currentEndpoint?.url}`)}
                  >
                    Copy
                  </Button>
                </div>
                <div className="bg-background rounded border p-3">
                  <code className="text-sm font-mono text-foreground">
                    <span className="text-blue-600 font-semibold">{currentEndpoint?.method}</span>{' '}
                    <span className="text-green-600">{currentEndpoint?.url}</span>
                  </code>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{currentEndpoint?.description}</p>
              </div>
            )}

            {response && (
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium text-foreground">Response</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      response?.status === 200 || response?.status === 201
                        ? 'bg-green-100 text-green-800' :'bg-red-100 text-red-800'
                    }`}>
                      {response?.status}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Copy"
                    onClick={() => copyToClipboard(JSON.stringify(response?.data, null, 2))}
                  >
                    Copy
                  </Button>
                </div>
                <div className="bg-background rounded border p-3 max-h-64 overflow-y-auto">
                  <pre className="text-xs font-mono text-foreground">
                    {JSON.stringify(response?.data, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiExplorer;