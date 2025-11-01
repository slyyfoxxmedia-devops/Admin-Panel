import { useState } from 'react'

const AWSAmplify = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'auth', label: 'Authentication' },
            { id: 'api', label: 'API' },
            { id: 'functions', label: 'Functions' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-burnt-orange text-burnt-orange'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Amplify Backend Status</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 border rounded">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Auth</span>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div className="text-sm text-gray-600 mt-1">Not configured</div>
              </div>
              <div className="p-3 border rounded">
                <div className="flex items-center justify-between">
                  <span className="font-medium">API</span>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div className="text-sm text-gray-600 mt-1">Not configured</div>
              </div>
              <div className="p-3 border rounded">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Functions</span>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div className="text-sm text-gray-600 mt-1">Not configured</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Setup</h3>
            <div className="space-y-2">
              <button className="w-full p-3 text-left border rounded hover:bg-blue-50">
                <div className="font-medium text-blue-700">Initialize Amplify Project</div>
                <div className="text-sm text-gray-500">Set up backend infrastructure</div>
              </button>
              <button className="w-full p-3 text-left border rounded hover:bg-green-50">
                <div className="font-medium text-green-700">Add Authentication</div>
                <div className="text-sm text-gray-500">Configure Cognito user pool</div>
              </button>
              <button className="w-full p-3 text-left border rounded hover:bg-purple-50">
                <div className="font-medium text-purple-700">Add GraphQL API</div>
                <div className="text-sm text-gray-500">Set up data layer</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'auth' && (
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Cognito Authentication</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">User Pool ID</label>
              <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Not configured" disabled />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">App Client ID</label>
              <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Not configured" disabled />
            </div>
            <button className="bg-burnt-orange text-white px-4 py-2 rounded">
              Configure Authentication
            </button>
          </div>
        </div>
      )}

      {activeTab === 'api' && (
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">GraphQL API</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">API Endpoint</label>
              <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Not configured" disabled />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">API Key</label>
              <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Not configured" disabled />
            </div>
            <button className="bg-burnt-orange text-white px-4 py-2 rounded">
              Configure API
            </button>
          </div>
        </div>
      )}

      {activeTab === 'functions' && (
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Lambda Functions</h3>
          <div className="space-y-4">
            <div className="border rounded p-3">
              <h4 className="font-medium">Stripe Webhook Handler</h4>
              <div className="text-sm text-gray-600 mt-1">Process Stripe webhook events</div>
              <div className="text-xs text-red-600 mt-1">Not deployed</div>
            </div>
            <div className="border rounded p-3">
              <h4 className="font-medium">User Management</h4>
              <div className="text-sm text-gray-600 mt-1">Handle user CRUD operations</div>
              <div className="text-xs text-red-600 mt-1">Not deployed</div>
            </div>
            <button className="bg-burnt-orange text-white px-4 py-2 rounded">
              Deploy Functions
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AWSAmplify