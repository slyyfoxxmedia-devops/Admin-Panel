import { useState } from 'react'
import { stripeConfig } from '../services/stripe'

const StripeConfig = () => {
  const [config, setConfig] = useState({
    publishableKey: stripeConfig.publishableKey,
    secretKey: stripeConfig.secretKey,
    webhookSecret: stripeConfig.webhookSecret,
  })

  const handleSave = () => {
    console.log('Stripe configuration saved:', config)
    // In production, this would save to your backend
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Stripe Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Publishable Key
            </label>
            <input
              type="text"
              value={config.publishableKey}
              onChange={(e) => setConfig({...config, publishableKey: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="pk_test_..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Secret Key
            </label>
            <input
              type="password"
              value={config.secretKey}
              onChange={(e) => setConfig({...config, secretKey: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="sk_test_..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Webhook Secret
            </label>
            <input
              type="password"
              value={config.webhookSecret}
              onChange={(e) => setConfig({...config, webhookSecret: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="whsec_..."
            />
          </div>
          
          <button
            onClick={handleSave}
            className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90"
          >
            Save Configuration
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Connection Status</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${config.publishableKey ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm">
            {config.publishableKey ? 'Connected to Stripe' : 'Not configured'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default StripeConfig