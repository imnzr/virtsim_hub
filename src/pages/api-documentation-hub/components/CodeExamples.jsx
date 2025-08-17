import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodeExamples = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [selectedExample, setSelectedExample] = useState('get-services');

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: 'Code' },
    { id: 'python', name: 'Python', icon: 'FileCode' },
    { id: 'php', name: 'PHP', icon: 'Terminal' },
    { id: 'curl', name: 'cURL', icon: 'Command' }
  ];

  const examples = [
    { id: 'get-services', name: 'Get Services', description: 'Fetch available virtual SIM services' },
    { id: 'create-order', name: 'Create Order', description: 'Place a new virtual SIM order' },
    { id: 'webhook-handler', name: 'Webhook Handler', description: 'Handle incoming webhooks' },
    { id: 'error-handling', name: 'Error Handling', description: 'Proper error management' }
  ];

  const codeSnippets = {
    javascript: {
      'get-services': `// Get available services
const response = await fetch('https://api.virtsimhub.com/v1/services', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const services = await response.json();
console.log('Available services:', services.data);

// Filter by country
const indonesianServices = await fetch('https://api.virtsimhub.com/v1/services?country=ID', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});`,
      'create-order': `// Create a new order
const orderData = {
  service_id: 'service_001',
  quantity: 1,
  webhook_url: 'https://yoursite.com/webhook'
};

const response = await fetch('https://api.virtsimhub.com/v1/orders', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(orderData)
});

const order = await response.json();
console.log('Order created:', order.data);`,
      'webhook-handler': `// Express.js webhook handler
app.post('/webhook', express.json(), (req, res) => {
  const { event, data } = req.body;
  
  switch(event) {
    case 'order.completed':
      console.log('Order completed:', data.order_id);
      // Process completed order
      break;
    case 'order.failed': console.log('Order failed:', data.order_id);
      // Handle failed order
      break;
    default:
      console.log('Unknown event:', event);
  }
  
  res.status(200).json({ received: true });
});`,
      'error-handling': `// Robust error handling
async function createOrder(serviceId) {
  try {
    const response = await fetch('https://api.virtsimhub.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ service_id: serviceId })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(\`API Error: \${error.message}\`);
    }

    return await response.json();
  } catch (error) {
    console.error('Order creation failed:', error.message);
    throw error;
  }
}`
    },
    python: {
      'get-services': `import requests

# Get available services
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.virtsimhub.com/v1/services', headers=headers)
services = response.json()

print('Available services:', services['data'])

# Filter by country
params = {'country': 'ID'}
indonesian_services = requests.get(
    'https://api.virtsimhub.com/v1/services', 
    headers=headers, 
    params=params
)`,
      'create-order': `import requests
import json

# Create a new order
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

order_data = {
    'service_id': 'service_001',
    'quantity': 1,
    'webhook_url': 'https://yoursite.com/webhook'
}

response = requests.post(
    'https://api.virtsimhub.com/v1/orders',
    headers=headers,
    json=order_data
)

order = response.json()
print('Order created:', order['data'])`,
      'webhook-handler': `from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def handle_webhook():
    data = request.get_json()
    event = data.get('event')
    payload = data.get('data')
    
    if event == 'order.completed': print(f'Order completed: {payload["order_id"]}')
        # Process completed order
    elif event == 'order.failed': print(f'Order failed: {payload["order_id"]}')
        # Handle failed order
    else:
        print(f'Unknown event: {event}')
    
    return jsonify({'received': True})`,
      'error-handling': `import requests
from requests.exceptions import RequestException

def create_order(service_id):
    try:
        headers = {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        }
        
        data = {'service_id': service_id}
        
        response = requests.post(
            'https://api.virtsimhub.com/v1/orders',
            headers=headers,
            json=data,
            timeout=30
        )
        
        response.raise_for_status()
        return response.json()
        
    except RequestException as e:
        print(f'Order creation failed: {e}')
        raise`
    },
    php: {
      'get-services': `<?php
// Get available services
$apiKey = 'YOUR_API_KEY';
$url = 'https://api.virtsimhub.com/v1/services';

$headers = [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$services = json_decode($response, true);

echo 'Available services: ' . print_r($services['data'], true);

curl_close($ch);
?>`,
      'create-order': `<?php
// Create a new order
$apiKey = 'YOUR_API_KEY';
$url = 'https://api.virtsimhub.com/v1/orders';

$orderData = [
    'service_id' => 'service_001',
    'quantity' => 1,
    'webhook_url' => 'https://yoursite.com/webhook'
];

$headers = [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($orderData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$order = json_decode($response, true);

echo 'Order created: ' . print_r($order['data'], true);

curl_close($ch);
?>`,
      'webhook-handler': `<?php
// Webhook handler
$input = file_get_contents('php://input');
$data = json_decode($input, true);

$event = $data['event'];
$payload = $data['data'];

switch($event) {
    case 'order.completed':
        error_log('Order completed: ' . $payload['order_id']);
        // Process completed order
        break;
    case 'order.failed': error_log('Order failed: ' . $payload['order_id']);
        // Handle failed order
        break;
    default:
        error_log('Unknown event: ' . $event);
}

http_response_code(200);
echo json_encode(['received' => true]);
?>`,
      'error-handling': `<?php
function createOrder($serviceId) {
    $apiKey = 'YOUR_API_KEY';
    $url = 'https://api.virtsimhub.com/v1/orders';
    
    $orderData = ['service_id' => $serviceId];
    
    $headers = [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json'
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($orderData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (curl_error($ch)) {
        throw new Exception('cURL Error: ' . curl_error($ch));
    }
    
    if ($httpCode !== 200 && $httpCode !== 201) {
        $error = json_decode($response, true);
        throw new Exception('API Error: ' . $error['message']);
    }
    
    curl_close($ch);
    return json_decode($response, true);
}
?>`
    },
    curl: {
      'get-services': `# Get available services
curl -X GET "https://api.virtsimhub.com/v1/services" \\
  -H "Authorization: Bearer YOUR_API_KEY"\ -H"Content-Type: application/json"

# Filter by country
curl -X GET "https://api.virtsimhub.com/v1/services?country=ID" \\
  -H "Authorization: Bearer YOUR_API_KEY"\ -H"Content-Type: application/json"

# Filter by provider
curl -X GET "https://api.virtsimhub.com/v1/services?provider=telkomsel" \\
  -H "Authorization: Bearer YOUR_API_KEY"\ -H"Content-Type: application/json"`,
      'create-order': `# Create a new order
curl -X POST "https://api.virtsimhub.com/v1/orders" \\
  -H "Authorization: Bearer YOUR_API_KEY"\ -H"Content-Type: application/json" \\
  -d '{
    "service_id": "service_001",
    "quantity": 1,
    "webhook_url": "https://yoursite.com/webhook"
  }'

# Create bulk order
curl -X POST "https://api.virtsimhub.com/v1/orders" \\
  -H "Authorization: Bearer YOUR_API_KEY"\ -H"Content-Type: application/json" \\
  -d '{
    "service_id": "service_001",
    "quantity": 5
  }'`,
      'webhook-handler': `# Test webhook endpoint
curl -X POST "https://yoursite.com/webhook" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "order.completed",
    "data": {
      "order_id": "ord_12345",
      "service_id": "service_001",
      "status": "completed",
      "sim_details": {
        "number": "+628123456789",
        "iccid": "89628012345678901234"
      }
    }
  }'`,
      'error-handling': `# Check API status
curl -X GET "https://api.virtsimhub.com/v1/status" \\
  -H "Authorization: Bearer YOUR_API_KEY"\ -w"HTTP Status: %{http_code}\\nResponse Time: %{time_total}s\\n"

# Validate API key
curl -X GET "https://api.virtsimhub.com/v1/auth/validate" \\
  -H "Authorization: Bearer YOUR_API_KEY"\ -w"HTTP Status: %{http_code}\\n"

# Get rate limit info
curl -X GET "https://api.virtsimhub.com/v1/rate-limit" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -I`
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
  };

  const currentCode = codeSnippets?.[selectedLanguage]?.[selectedExample] || '';

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <Icon name="Code2" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Code Examples</h3>
            <p className="text-sm text-muted-foreground">Ready-to-use code snippets in multiple languages</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Language Selection */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground mb-3">Languages</h4>
            {languages?.map((lang) => (
              <button
                key={lang?.id}
                onClick={() => setSelectedLanguage(lang?.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedLanguage === lang?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={lang?.icon} size={16} />
                <span>{lang?.name}</span>
              </button>
            ))}
          </div>

          {/* Example Selection */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground mb-3">Examples</h4>
            {examples?.map((example) => (
              <button
                key={example?.id}
                onClick={() => setSelectedExample(example?.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  selectedExample === example?.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <div className="font-medium">{example?.name}</div>
                <div className="text-xs opacity-80 mt-1">{example?.description}</div>
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-foreground">
                {examples?.find(e => e?.id === selectedExample)?.name} - {languages?.find(l => l?.id === selectedLanguage)?.name}
              </h4>
              <Button
                variant="ghost"
                size="sm"
                iconName="Copy"
                onClick={() => copyToClipboard(currentCode)}
              >
                Copy
              </Button>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-sm font-mono text-gray-100 whitespace-pre-wrap">
                {currentCode}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExamples;