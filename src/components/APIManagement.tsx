import { useState } from 'react'

const APIManagement = () => {
  const [activeTab, setActiveTab] = useState('integrations')
  const [showForm, setShowForm] = useState(null)
  const [formData, setFormData] = useState({})

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = (apiName) => {
    console.log(`Saving ${apiName} configuration:`, formData)
    setShowForm(null)
    setFormData({})
  }

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'integrations', label: 'API Integrations', icon: '🔌' },
            { id: 'authentication', label: 'Authentication', icon: '🔐' },
            { id: 'monitoring', label: 'Monitoring', icon: '📊' },
            { id: 'documentation', label: 'Documentation', icon: '📚' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* API Integrations */}
      {activeTab === 'integrations' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Third-Party API Integrations</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded p-4">
                <h4 className="font-medium text-blue-800 mb-2">Payment & Financial APIs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Stripe API</strong> - Payment processing & Connect</li>
                  <li>• <strong>Stripe Webhooks</strong> - Real-time payment events</li>
                  <li>• <strong>QuickBooks API</strong> - Accounting integration</li>
                  <li>• <strong>QuickBooks Payments</strong> - Additional payment options</li>
                </ul>
              </div>
              
              <div className="border rounded p-4">
                <h4 className="font-medium text-green-800 mb-2">Sports & Data APIs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Yahoo Fantasy Sports API</strong> - League management</li>
                  <li>• <strong>Yahoo Sports API</strong> - Live scores & stats</li>
                  <li>• <strong>ESPN API</strong> - Additional sports data</li>
                  <li>• <strong>Sports data feeds</strong> - Real-time updates</li>
                </ul>
              </div>
              
              <div className="border rounded p-4">
                <h4 className="font-medium text-purple-800 mb-2">AWS Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>AWS SES</strong> - Email delivery service</li>
                  <li>• <strong>AWS S3</strong> - File storage and CDN</li>
                  <li>• <strong>AWS Lambda</strong> - Serverless functions</li>
                  <li>• <strong>AWS AppSync</strong> - GraphQL API</li>
                </ul>
              </div>
              
              <div className="border rounded p-4">
                <h4 className="font-medium text-orange-800 mb-2">Future Integrations</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Social Media APIs</strong> - Twitter, Facebook</li>
                  <li>• <strong>Analytics APIs</strong> - Google Analytics</li>
                  <li>• <strong>Communication APIs</strong> - Twilio, SendGrid</li>
                  <li>• <strong>Additional Payment Providers</strong></li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">API Configuration Status</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <span className="font-medium">Stripe API</span>
                    <p className="text-sm text-gray-500">Payment processing</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Configured</span>
                    <button 
                      onClick={() => setShowForm('stripe')}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <span className="font-medium">Yahoo Fantasy API</span>
                    <p className="text-sm text-gray-500">Fantasy sports data</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Pending</span>
                    <button 
                      onClick={() => setShowForm('yahoo')}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Configure
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <span className="font-medium">QuickBooks API</span>
                    <p className="text-sm text-gray-500">Accounting integration</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Pending</span>
                    <button 
                      onClick={() => setShowForm('quickbooks')}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Configuration Forms */}
            {showForm === 'stripe' && (
              <div className="mt-6 p-4 border rounded bg-gray-50">
                <h4 className="font-medium mb-4">Configure Stripe API</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Publishable Key
                    </label>
                    <input
                      type="text"
                      placeholder="pk_test_..."
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('stripePublishableKey', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Secret Key
                    </label>
                    <input
                      type="password"
                      placeholder="sk_test_..."
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('stripeSecretKey', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Webhook Secret
                    </label>
                    <input
                      type="password"
                      placeholder="whsec_..."
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('stripeWebhookSecret', e.target.value)}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleSave('Stripe')}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Save Configuration
                    </button>
                    <button 
                      onClick={() => setShowForm(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showForm === 'yahoo' && (
              <div className="mt-6 p-4 border rounded bg-gray-50">
                <h4 className="font-medium mb-4">Configure Yahoo Fantasy API</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Client ID
                    </label>
                    <input
                      type="text"
                      placeholder="Your Yahoo Client ID"
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('yahooClientId', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Client Secret
                    </label>
                    <input
                      type="password"
                      placeholder="Your Yahoo Client Secret"
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('yahooClientSecret', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Redirect URI
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourdomain.com/auth/yahoo/callback"
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('yahooRedirectUri', e.target.value)}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleSave('Yahoo Fantasy')}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Save Configuration
                    </button>
                    <button 
                      onClick={() => setShowForm(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showForm === 'quickbooks' && (
              <div className="mt-6 p-4 border rounded bg-gray-50">
                <h4 className="font-medium mb-4">Configure QuickBooks API</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      App Key
                    </label>
                    <input
                      type="text"
                      placeholder="Your QuickBooks App Key"
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('quickbooksAppKey', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      App Secret
                    </label>
                    <input
                      type="password"
                      placeholder="Your QuickBooks App Secret"
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('quickbooksAppSecret', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Environment
                    </label>
                    <select 
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('quickbooksEnvironment', e.target.value)}
                    >
                      <option value="">Select Environment</option>
                      <option value="sandbox">Sandbox</option>
                      <option value="production">Production</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Redirect URI
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourdomain.com/auth/quickbooks/callback"
                      className="w-full p-2 border rounded"
                      onChange={(e) => handleInputChange('quickbooksRedirectUri', e.target.value)}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleSave('QuickBooks')}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Save Configuration
                    </button>
                    <button 
                      onClick={() => setShowForm(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Authentication */}
      {activeTab === 'authentication' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">API Authentication</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Authentication Methods</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">API Keys</h5>
                  <p className="text-sm text-gray-600 mt-1">Secure API key authentication for external services</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">OAuth 2.0</h5>
                  <p className="text-sm text-gray-600 mt-1">OAuth authentication for user-authorized access</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">API Key Management</h4>
              <div className="space-y-4">
                <div className="p-4 border rounded">
                  <h5 className="font-medium mb-2">Generate New API Key</h5>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="API Key Name"
                      className="flex-1 p-2 border rounded"
                    />
                    <select className="p-2 border rounded">
                      <option>Read Only</option>
                      <option>Read & Write</option>
                      <option>Admin Access</option>
                    </select>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                      Generate
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <span className="font-medium">Admin Panel API Key</span>
                      <p className="text-sm text-gray-500">ap_***************</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">Copy</button>
                      <button className="text-red-600 hover:text-red-800 text-sm">Revoke</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <span className="font-medium">Mobile App API Key</span>
                      <p className="text-sm text-gray-500">ma_***************</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">Copy</button>
                      <button className="text-red-600 hover:text-red-800 text-sm">Revoke</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
              Update Authentication
            </button>
          </div>
        </div>
      )}

      {/* Monitoring */}
      {activeTab === 'monitoring' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">API Monitoring</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded p-4 text-center">
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="border rounded p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">1,234</div>
                <div className="text-sm text-gray-600">API Calls Today</div>
              </div>
              <div className="border rounded p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">45ms</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Recent API Activity</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded">
                  <span>Stripe Payment API</span>
                  <span className="text-green-600">✓ Success</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <span>AWS S3 Upload</span>
                  <span className="text-green-600">✓ Success</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <span>Yahoo Sports API</span>
                  <span className="text-red-600">✗ Error</span>
                </div>
              </div>
            </div>

            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
              View Detailed Logs
            </button>
          </div>
        </div>
      )}

      {/* Documentation */}
      {activeTab === 'documentation' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">API Documentation</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Available Documentation</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <span className="font-medium">Stripe Integration Guide</span>
                    <p className="text-sm text-gray-500">Payment processing and Connect setup</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <span className="font-medium">Yahoo Fantasy API Guide</span>
                    <p className="text-sm text-gray-500">Fantasy sports league integration</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <span className="font-medium">QuickBooks API Guide</span>
                    <p className="text-sm text-gray-500">Accounting system integration</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </div>
              </div>
            </div>

            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
              Generate API Documentation
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default APIManagement