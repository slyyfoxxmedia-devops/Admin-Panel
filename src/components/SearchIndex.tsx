import { useState } from 'react'

const SearchIndex = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const indexStats = {
    totalDocuments: '2.4M',
    indexSize: '847 GB',
    searchesPerDay: '156K',
    avgResponseTime: '23ms',
    indexingRate: '1,247/min'
  }

  const indices = [
    { name: 'products', documents: 847230, size: '234 GB', status: 'Healthy', lastUpdate: '2024-01-15 15:45:00', health: 'green' },
    { name: 'users', documents: 156789, size: '89 GB', status: 'Healthy', lastUpdate: '2024-01-15 15:44:30', health: 'green' },
    { name: 'content', documents: 234567, size: '156 GB', status: 'Warning', lastUpdate: '2024-01-15 15:43:15', health: 'yellow' },
    { name: 'transactions', documents: 1234567, size: '345 GB', status: 'Healthy', lastUpdate: '2024-01-15 15:45:15', health: 'green' },
    { name: 'social', documents: 89456, size: '23 GB', status: 'Indexing', lastUpdate: '2024-01-15 15:45:30', health: 'blue' }
  ]

  const recentIndexing = [
    { id: 1, type: 'Product Update', document: 'Audio Pack #4567', action: 'Updated', timestamp: '2024-01-15 15:45:12', status: 'Success' },
    { id: 2, type: 'User Profile', document: 'seller123@example.com', action: 'Created', timestamp: '2024-01-15 15:44:58', status: 'Success' },
    { id: 3, type: 'CMS Page', document: 'Digital Studios Profile', action: 'Updated', timestamp: '2024-01-15 15:44:33', status: 'Success' },
    { id: 4, type: 'Transaction', document: 'Order #TX789', action: 'Created', timestamp: '2024-01-15 15:44:15', status: 'Success' },
    { id: 5, type: 'Social Post', document: 'Post #SP123', action: 'Deleted', timestamp: '2024-01-15 15:43:47', status: 'Failed' }
  ]

  const searchAnalytics = [
    { query: 'audio production', count: 12847, avgPosition: 2.3, ctr: '8.4%' },
    { query: 'digital art', count: 9234, avgPosition: 1.8, ctr: '12.1%' },
    { query: 'web templates', count: 7456, avgPosition: 3.1, ctr: '6.7%' },
    { query: '3d models', count: 5678, avgPosition: 2.7, ctr: '9.2%' },
    { query: 'music beats', count: 4321, avgPosition: 1.9, ctr: '11.8%' }
  ]

  const indexingQueue = [
    { id: 1, type: 'Bulk Product Update', items: 1247, priority: 'High', status: 'Processing', eta: '5 minutes' },
    { id: 2, type: 'User Profile Sync', items: 89, priority: 'Medium', status: 'Queued', eta: '12 minutes' },
    { id: 3, type: 'Content Reindex', items: 567, priority: 'Low', status: 'Queued', eta: '25 minutes' },
    { id: 4, type: 'Transaction Batch', items: 2345, priority: 'High', status: 'Queued', eta: '8 minutes' }
  ]

  return (
    <div className="space-y-6">
      {/* Search Index Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Total Documents</h3>
          <p className="text-3xl font-bold text-blue-600">{indexStats.totalDocuments}</p>
          <p className="text-sm text-blue-600">Across all indices</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Index Size</h3>
          <p className="text-3xl font-bold text-green-600">{indexStats.indexSize}</p>
          <p className="text-sm text-green-600">Total storage</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Daily Searches</h3>
          <p className="text-3xl font-bold text-purple-600">{indexStats.searchesPerDay}</p>
          <p className="text-sm text-purple-600">+15% from yesterday</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800">Response Time</h3>
          <p className="text-3xl font-bold text-orange-600">{indexStats.avgResponseTime}</p>
          <p className="text-sm text-orange-600">Average</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800">Indexing Rate</h3>
          <p className="text-3xl font-bold text-red-600">{indexStats.indexingRate}</p>
          <p className="text-sm text-red-600">Documents/minute</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'indices', label: 'Indices', icon: '🗂️' },
            { id: 'indexing', label: 'Real-time Indexing', icon: '⚡' },
            { id: 'analytics', label: 'Search Analytics', icon: '📈' },
            { id: 'queue', label: 'Indexing Queue', icon: '📋' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'border-burnt-orange text-burnt-orange'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Search Volume Trends</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Search Volume Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Index Health Status</h3>
              <div className="space-y-3">
                {indices.map((index, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        index.health === 'green' ? 'bg-green-500' :
                        index.health === 'yellow' ? 'bg-yellow-500' :
                        index.health === 'blue' ? 'bg-blue-500' : 'bg-red-500'
                      }`}></div>
                      <span className="font-medium capitalize">{index.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{index.documents.toLocaleString()} docs</div>
                      <div className="text-xs text-gray-600">{index.size}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Ecosystem Integration Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <div className="font-medium">Marketplace</div>
                <div className="text-sm text-green-600">Real-time sync</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <div className="font-medium">Social Platform</div>
                <div className="text-sm text-green-600">Connected</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <div className="font-medium">CMS</div>
                <div className="text-sm text-green-600">Auto-indexing</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">⚠️</div>
                <div className="font-medium">User Profiles</div>
                <div className="text-sm text-yellow-600">Partial sync</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Indices */}
      {activeTab === 'indices' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Search Indices</h3>
              <div className="flex space-x-2">
                <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                  Create Index
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
                  Bulk Reindex
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Index Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Documents</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Update</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {indices.map((index, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 capitalize">{index.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{index.documents.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{index.size}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        index.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                        index.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                        index.status === 'Indexing' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {index.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{index.lastUpdate}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Configure</button>
                      <button className="text-green-600 hover:text-green-800">Reindex</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Real-time Indexing */}
      {activeTab === 'indexing' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Real-time Indexing Activity</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live updates</span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Document</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentIndexing.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.type.includes('Product') ? 'bg-blue-100 text-blue-800' :
                        item.type.includes('User') ? 'bg-green-100 text-green-800' :
                        item.type.includes('CMS') ? 'bg-purple-100 text-purple-800' :
                        item.type.includes('Transaction') ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.document}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.action}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.timestamp}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'Success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Search Analytics */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Top Search Queries</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Query</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Search Count</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Click-through Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {searchAnalytics.map((query, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{query.query}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{query.count.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{query.avgPosition}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{query.ctr}</td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-800">Optimize</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Search Performance</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Search Performance Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Query Distribution</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Query Distribution Chart Placeholder]
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Indexing Queue */}
      {activeTab === 'queue' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Indexing Queue</h3>
              <div className="flex space-x-2">
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
                  Pause Queue
                </button>
                <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                  Clear Queue
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ETA</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {indexingQueue.map((job) => (
                  <tr key={job.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{job.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{job.items.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        job.priority === 'High' ? 'bg-red-100 text-red-800' :
                        job.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {job.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        job.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{job.eta}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Prioritize</button>
                      <button className="text-red-600 hover:text-red-800">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchIndex