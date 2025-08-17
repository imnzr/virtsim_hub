import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GettingStarted = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    {
      id: 1,
      title: 'Get Your API Key',
      description: 'Sign up for a VirtSIM Hub account and generate your API key',
      content: `To get started with the VirtSIM Hub API, you'll need to create an account and generate an API key.

**Steps to get your API key:**
1. Visit the VirtSIM Hub dashboard
2. Navigate to API Settings
3. Click "Generate New API Key"
4. Copy and securely store your API key

**Important Security Notes:**
• Never share your API key publicly
• Use environment variables to store your key
• Regenerate your key if compromised
• Use different keys for development and production`,
      code: `// Store your API key securely
const API_KEY = process.env.VIRTSIMHUB_API_KEY;

// Initialize the client
const client = new VirtSimHub({
  apiKey: API_KEY,
  environment: 'production' // or 'sandbox'
});`
    },
    {
      id: 2,
      title: 'Make Your First Request',description: 'Test your API key by fetching available services',
      content: `Once you have your API key, you can make your first API request to fetch available virtual SIM services.

**Authentication:**
All API requests must include your API key in the Authorization header using Bearer token format.

**Base URL:**
• Production: https://api.virtsimhub.com/v1
• Sandbox: https://sandbox-api.virtsimhub.com/v1

**Rate Limits:**
• 60 requests per minute for standard accounts
• 300 requests per minute for premium accounts`,
      code: `// Using fetch API
const response = await fetch('https://api.virtsimhub.com/v1/services', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY','Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log('Available services:', data);

// Using our JavaScript SDK
import { VirtSimHub } from '@virtsimhub/sdk';

const client = new VirtSimHub({
  apiKey: 'YOUR_API_KEY'
});

const services = await client.services.list();
console.log('Services:', services);`
    },
    {
      id: 3,
      title: 'Create Your First Order',description: 'Place an order for a virtual SIM service',content: `Now that you can fetch services, let's create your first order. You'll need a service ID from the previous step.

**Order Process:**
1. Choose a service from the available list
2. Create an order with the service ID
3. Monitor the order status
4. Receive SIM details when ready

**Order Statuses:**
• pending: Order received, waiting for processing
• processing: Order is being fulfilled
• completed: SIM is ready for use
• failed: Order could not be completed`,
      code: `// Create an order
const orderData = {
  service_id: 'service_001', // From services list
  quantity: 1,
  webhook_url: 'https://yoursite.com/webhook' // Optional
};

const response = await fetch('https://api.virtsimhub.com/v1/orders', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY','Content-Type': 'application/json'
  },
  body: JSON.stringify(orderData)
});

const order = await response.json();
console.log('Order created:', order);

// Using SDK
const order = await client.orders.create({
  serviceId: 'service_001',
  quantity: 1
});`
    },
    {
      id: 4,
      title: 'Handle Webhooks',description: 'Set up webhook endpoints to receive real-time updates',
      content: `Webhooks allow you to receive real-time notifications about order status changes, eliminating the need to constantly poll our API.

**Webhook Events:**
• order.created: New order has been created
• order.processing: Order is being processed
• order.completed: Order is complete, SIM details available
• order.failed: Order processing failed

**Security:**
• Webhooks include a signature header for verification
• Always validate webhook signatures
• Use HTTPS endpoints only`,
      code: `// Express.js webhook handler
app.post('/webhook', express.json(), (req, res) => {
  const signature = req.headers['x-virtsimhub-signature'];
  const payload = JSON.stringify(req.body);
  
  // Verify webhook signature (recommended)
  const expectedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return res.status(401).send('Invalid signature');
  }
  
  const { event, data } = req.body;
  
  switch(event) {
    case 'order.completed':
      console.log('Order completed:', data.order_id);
      // Update your database, send notifications, etc.
      break;
    case 'order.failed': console.log('Order failed:', data.order_id);
      // Handle failed order
      break;
  }
  
  res.status(200).json({ received: true });
});`
    },
    {
      id: 5,
      title: 'Error Handling',
      description: 'Implement proper error handling and retry logic',
      content: `Robust error handling is crucial for production applications. Our API returns standard HTTP status codes and detailed error messages.

**Common HTTP Status Codes:**
• 200: Success
• 201: Created successfully
• 400: Bad request (invalid parameters)
• 401: Unauthorized (invalid API key)
• 429: Rate limit exceeded
• 500: Internal server error

**Best Practices:**
• Always check response status codes
• Implement exponential backoff for retries
• Log errors for debugging
• Handle rate limiting gracefully`,
      code: `// Robust error handling example
async function createOrderWithRetry(serviceId, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
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
        
        // Don't retry for client errors
        if (response.status >= 400 && response.status < 500) {
          throw new Error(\`Client error: \${error.message}\`);
        }
        
        // Retry for server errors
        if (attempt === maxRetries) {
          throw new Error(\`Server error after \${maxRetries} attempts\`);
        }
        
        // Exponential backoff
        await new Promise(resolve => 
          setTimeout(resolve, Math.pow(2, attempt) * 1000)
        );
        continue;
      }

      return await response.json();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
}`
    }
  ];

  const toggleStepCompletion = (stepId) => {
    setCompletedSteps(prev => 
      prev?.includes(stepId) 
        ? prev?.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
  };

  const currentStepData = steps?.find(step => step?.id === currentStep);

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
            <Icon name="Rocket" size={20} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Getting Started</h3>
            <p className="text-sm text-muted-foreground">Step-by-step guide to integrate with VirtSIM Hub API</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Steps Navigation */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground mb-3">Steps</h4>
            {steps?.map((step, index) => (
              <button
                key={step?.id}
                onClick={() => setCurrentStep(step?.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                  currentStep === step?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                    completedSteps?.includes(step?.id)
                      ? 'bg-green-500 text-white'
                      : currentStep === step?.id
                      ? 'bg-primary-foreground text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {completedSteps?.includes(step?.id) ? (
                      <Icon name="Check" size={12} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{step?.title}</div>
                    <div className="text-xs opacity-80 mt-1">{step?.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="lg:col-span-3 space-y-6">
            {currentStepData && (
              <>
                {/* Step Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{currentStepData?.title}</h4>
                    <p className="text-muted-foreground mt-1">{currentStepData?.description}</p>
                  </div>
                  <Button
                    variant={completedSteps?.includes(currentStep) ? "default" : "outline"}
                    size="sm"
                    iconName={completedSteps?.includes(currentStep) ? "Check" : "Circle"}
                    iconPosition="left"
                    onClick={() => toggleStepCompletion(currentStep)}
                  >
                    {completedSteps?.includes(currentStep) ? 'Completed' : 'Mark Complete'}
                  </Button>
                </div>

                {/* Step Content */}
                <div className="prose prose-sm max-w-none">
                  <div className="text-muted-foreground whitespace-pre-line">
                    {currentStepData?.content}
                  </div>
                </div>

                {/* Code Example */}
                {currentStepData?.code && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-sm font-medium text-foreground">Code Example</h5>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Copy"
                        onClick={() => copyToClipboard(currentStepData?.code)}
                      >
                        Copy
                      </Button>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 max-h-64 overflow-y-auto">
                      <pre className="text-sm font-mono text-gray-100 whitespace-pre-wrap">
                        {currentStepData?.code}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    iconName="ChevronLeft"
                    iconPosition="left"
                    disabled={currentStep === 1}
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  >
                    Previous
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    Step {currentStep} of {steps?.length}
                  </div>
                  
                  <Button
                    variant="default"
                    iconName="ChevronRight"
                    iconPosition="right"
                    disabled={currentStep === steps?.length}
                    onClick={() => setCurrentStep(Math.min(steps?.length, currentStep + 1))}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;