import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SdkSection = () => {
  const [selectedSdk, setSelectedSdk] = useState('javascript');

  const sdks = [
    {
      id: 'javascript',
      name: 'JavaScript SDK',
      icon: 'Code',
      version: 'v2.1.0',
      description: 'Official JavaScript/TypeScript SDK for Node.js and browser environments',
      size: '45KB',
      downloads: '12.5K',
      lastUpdated: '2025-01-15',
      features: [
        'TypeScript support',
        'Promise-based API',
        'Automatic retries',
        'Built-in error handling',
        'Webhook validation',
        'Rate limit handling'
      ],
      installation: 'npm install @virtsimhub/sdk',
      quickStart: `import { VirtSimHub } from '@virtsimhub/sdk';

const client = new VirtSimHub({
  apiKey: 'your-api-key',
  environment: 'production' // or 'sandbox'
});

// Get available services
const services = await client.services.list({
  country: 'ID'
});

// Create an order
const order = await client.orders.create({
  serviceId: 'service_001',
  quantity: 1
});

console.log('Order created:', order.id);`
    },
    {
      id: 'python',
      name: 'Python SDK',
      icon: 'FileCode',
      version: 'v1.8.2',
      description: 'Official Python SDK with async support and comprehensive error handling',
      size: '120KB',
      downloads: '8.2K',
      lastUpdated: '2025-01-12',
      features: [
        'Async/await support',
        'Type hints',
        'Automatic pagination',
        'Request/response logging',
        'Custom retry policies',
        'Webhook utilities'
      ],
      installation: 'pip install virtsimhub-sdk',
      quickStart: `from virtsimhub import VirtSimHub

client = VirtSimHub(
    api_key='your-api-key',
    environment='production'
)

# Get available services
services = client.services.list(country='ID')

# Create an order
order = client.orders.create(
    service_id='service_001',
    quantity=1
)

print(f'Order created: {order.id}')`
    },
    {
      id: 'php',
      name: 'PHP SDK',
      icon: 'Terminal',
      version: 'v1.5.1',
      description: 'PHP SDK with PSR-4 autoloading and comprehensive documentation',
      size: '85KB',
      downloads: '5.8K',
      lastUpdated: '2025-01-10',
      features: [
        'PSR-4 autoloading',
        'Guzzle HTTP client',
        'Exception handling',
        'Response caching',
        'Debug mode',
        'Laravel integration'
      ],
      installation: 'composer require virtsimhub/sdk',
      quickStart: `<?php
require_once 'vendor/autoload.php';

use VirtSimHub\\Client;

$client = new Client([
    'api_key' => 'your-api-key',
    'environment' => 'production'
]);

// Get available services
$services = $client->services()->list(['country' => 'ID']);

// Create an order
$order = $client->orders()->create([
    'service_id' => 'service_001',
    'quantity' => 1
]);

echo 'Order created: ' . $order->getId();
?>`
    },
    {
      id: 'go',
      name: 'Go SDK',
      icon: 'Command',
      version: 'v1.3.0',
      description: 'Lightweight Go SDK with context support and structured logging',
      size: '2.1MB',
      downloads: '3.1K',
      lastUpdated: '2025-01-08',
      features: [
        'Context support',
        'Structured logging',
        'Connection pooling',
        'Timeout handling',
        'Custom middleware',
        'JSON streaming'
      ],
      installation: 'go get github.com/virtsimhub/go-sdk',
      quickStart: `package main

import (
    "context" "fmt" "github.com/virtsimhub/go-sdk"
)

func main() {
    client := virtsimhub.NewClient(&virtsimhub.Config{
        APIKey:      "your-api-key",
        Environment: "production",
    })

    // Get available services
    services, err := client.Services.List(context.Background(), &virtsimhub.ServiceListParams{
        Country: "ID",
    })
    if err != nil {
        panic(err)
    }

    // Create an order
    order, err := client.Orders.Create(context.Background(), &virtsimhub.OrderCreateParams{
        ServiceID: "service_001",
        Quantity:  1,
    })
    if err != nil {
        panic(err)
    }

    fmt.Printf("Order created: %s\\n", order.ID)
}`
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
  };

  const currentSdk = sdks?.find(sdk => sdk?.id === selectedSdk);

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Icon name="Package" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">SDKs & Libraries</h3>
            <p className="text-sm text-muted-foreground">Official SDKs for popular programming languages</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* SDK Selection */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground mb-3">Available SDKs</h4>
            {sdks?.map((sdk) => (
              <button
                key={sdk?.id}
                onClick={() => setSelectedSdk(sdk?.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                  selectedSdk === sdk?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name={sdk?.icon} size={16} />
                  <div>
                    <div className="font-medium text-sm">{sdk?.name}</div>
                    <div className="text-xs opacity-80">{sdk?.version}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* SDK Details */}
          <div className="lg:col-span-3 space-y-6">
            {currentSdk && (
              <>
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{currentSdk?.name}</h4>
                    <p className="text-muted-foreground mt-1">{currentSdk?.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Download"
                      iconPosition="left"
                    >
                      Download
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Version</div>
                    <div className="font-semibold text-foreground">{currentSdk?.version}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Size</div>
                    <div className="font-semibold text-foreground">{currentSdk?.size}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Downloads</div>
                    <div className="font-semibold text-foreground">{currentSdk?.downloads}</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Updated</div>
                    <div className="font-semibold text-foreground">{currentSdk?.lastUpdated}</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-3">Key Features</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentSdk?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Installation */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-sm font-medium text-foreground">Installation</h5>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Copy"
                      onClick={() => copyToClipboard(currentSdk?.installation)}
                    >
                      Copy
                    </Button>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <code className="text-sm font-mono text-gray-100">{currentSdk?.installation}</code>
                  </div>
                </div>

                {/* Quick Start */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-sm font-medium text-foreground">Quick Start</h5>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Copy"
                      onClick={() => copyToClipboard(currentSdk?.quickStart)}
                    >
                      Copy
                    </Button>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 max-h-64 overflow-y-auto">
                    <pre className="text-sm font-mono text-gray-100 whitespace-pre-wrap">
                      {currentSdk?.quickStart}
                    </pre>
                  </div>
                </div>

                {/* Additional Resources */}
                <div className="border-t border-border pt-6">
                  <h5 className="text-sm font-medium text-foreground mb-3">Additional Resources</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Book"
                      iconPosition="left"
                    >
                      Documentation
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Code2"
                      iconPosition="left"
                    >
                      Examples
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Support
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdkSection;