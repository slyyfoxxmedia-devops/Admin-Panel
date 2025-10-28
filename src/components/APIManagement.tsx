import { useState, useEffect } from 'react'
import { useApi } from '../hooks/useApi'

const APIManagement = () => {
  const [apis, setApis] = useState([])
  const [apiKeys, setApiKeys] = useState([])
  const [selectedAPI, setSelectedAPI] = useState(null)
  const [showKeyModal, setShowKeyModal] = useState(false)
  const { loading, error, request } = useApi()

  useEffect(() => {
    loadAPIs()
    loadAPIKeys()
  }, [])

  const loadAPIs = async () => {
    const data = await request('/api/management/apis')
    if (data) setApis(data)
  }

  const loadAPIKeys = async () => {
    const data = await request('/api/management/keys')
    if (data) setApiKeys(data)
  }

  const generateAPIKey = async (apiId, keyData) => {
    await request('/api/management/keys', 'POST', { apiId, ...keyData })
    loadAPIKeys()
    setShowKeyModal(false)
  }

  const revokeAPIKey = async (keyId) => {
    await request(`/api/management/keys/${keyId}/revoke`, 'POST')
    loadAPIKeys()
  }

  const ecosystemAPIs = [
    {
      id: 'marketplace-api',
      name: 'Marketplace API',
      description: 'Product listings, purchases, seller management',
      version: 'v1.2',
      status: 'active',
      endpoints: 45,
      requests: 12500,
      uptime: '99.9%'
    },
    {
      id: 'seller-dashboard-api',
      name: 'Seller Dashboard API',
      description: 'Seller analytics, product management, payouts',
      version: 'v1.1',
      status: 'active',
      endpoints: 32,
      requests: 8200,
      uptime: '99.8%'
    },
    {
      id: 'pm-dashboard-api',
      name: 'PM Dashboard API',
      description: 'Project management, client communication, forms',
      version: 'v1.0',
      status: 'active',
      endpoints: 28,
      requests: 3400,
      uptime: '99.7%'
    },
    {
      id: 'social-platform-api',
      name: 'Social Platform API',
      description: 'User profiles, posts, messaging, content moderation',
      version: 'v0.9',
      status: 'beta',
      endpoints: 38,
      requests: 1200,
      uptime: '98.5%'
    },
    {
      id: 'cms-api',
      name: 'CMS API',
      description: 'Content management, templates, media library',
      version: 'v1.0',
      status: 'active',
      endpoints: 25,
      requests: 2800,
      uptime: '99.6%'
    },
    {
      id: 'fantasy-sports-api',
      name: 'Fantasy Sports API',
      description: 'League management, player stats, scoring',
      version: 'v0.8',
      status: 'development',
      endpoints: 22,
      requests: 450,
      uptime: '97.2%'
    }
  ]

  return (
    <div className="space-y-6">
      {/* API Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Total APIs</h3>
          <p className="text-3xl font-bold text-blue-600">{ecosystemAPIs.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Active Keys</h3>
          <p className="text-3xl font-bold text-green-600">{apiKeys.filter(k => k.status === 'active').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Total Requests</h3>
          <p className="text-3xl font-bold text-purple-600">28.5K</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Avg Uptime</h3>
          <p className="text-3xl font-bold text-orange-600">99.2%</p>
        </div>
      </div>

      {/* API List */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">SlyyFoxxMedia APIs</h3>
            <button
              onClick={() => setShowKeyModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Generate API Key
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">API</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Version</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Endpoints</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Requests</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uptime</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {ecosystemAPIs.map(api => (
                <tr key={api.id}>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{api.name}</div>
                      <div className="text-sm text-gray-500">{api.description}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{api.version}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      api.status === 'active' ? 'bg-green-100 text-green-800' :
                      api.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {api.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{api.endpoints}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{api.requests.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{api.uptime}</td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => setSelectedAPI(api)}
                      className="text-blue-600 hover:text-blue-800 mr-3"
                    >
                      Manage
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      Docs
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* API Keys Management */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">API Keys</h3>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {apiKeys.map(key => (
              <div key={key.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">{key.name}</div>
                  <div className="text-sm text-gray-500">
                    API: {key.apiName} • Created: {new Date(key.created).toLocaleDateString()}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">{key.keyPreview}...</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    key.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {key.status}
                  </span>
                  <div className="text-sm text-gray-500">
                    {key.requests.toLocaleString()} requests
                  </div>
                  <button
                    onClick={() => revokeAPIKey(key.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Revoke
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rate Limiting */}
      <div className="bg-white rounded-lg shadow border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Rate Limiting</h3>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Rate Limit
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>1000 requests/hour</option>
                <option>5000 requests/hour</option>
                <option>10000 requests/hour</option>
                <option>Unlimited</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Burst Limit
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>100 requests/minute</option>
                <option>500 requests/minute</option>
                <option>1000 requests/minute</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Throttling Strategy
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Queue requests</option>
                <option>Reject with 429</option>
                <option>Adaptive throttling</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* API Key Generation Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Generate API Key</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              generateAPIKey(formData.get('apiId'), {
                name: formData.get('name'),
                permissions: formData.get('permissions')
              })
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Key Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="My API Key"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    API
                  </label>
                  <select name="apiId" className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                    <option value="">Select API</option>
                    {ecosystemAPIs.map(api => (
                      <option key={api.id} value={api.id}>{api.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Permissions
                  </label>
                  <select name="permissions" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option value="read">Read Only</option>
                    <option value="write">Read & Write</option>
                    <option value="admin">Full Access</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Generate Key
                </button>
                <button
                  type="button"
                  onClick={() => setShowKeyModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}
    </div>
  )
}

export default APIManagement