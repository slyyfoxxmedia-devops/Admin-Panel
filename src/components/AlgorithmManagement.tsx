import { useState } from 'react'

interface Algorithm {
  id: string
  name: string
  platform: string
  status: 'active' | 'inactive' | 'testing'
  performance: number
  lastUpdated: string
  description: string
}

const AlgorithmManagement = () => {
  const [algorithms] = useState<Algorithm[]>([
    {
      id: 'fantasy-scoring',
      name: 'Fantasy Player Scoring',
      platform: 'Fantasy Sports',
      status: 'active',
      performance: 87,
      lastUpdated: '2024-01-15',
      description: 'Calculates player fantasy points based on real-world performance'
    },
    {
      id: 'social-feed',
      name: 'Social Feed Ranking',
      platform: 'Social Platform',
      status: 'active',
      performance: 92,
      lastUpdated: '2024-01-14',
      description: 'Ranks posts in user feeds based on engagement and relevance'
    },
    {
      id: 'marketplace-search',
      name: 'Marketplace Search',
      platform: 'Marketplace',
      status: 'testing',
      performance: 78,
      lastUpdated: '2024-01-13',
      description: 'Optimizes product search results and recommendations'
    },
    {
      id: 'content-recommend',
      name: 'Content Recommendations',
      platform: 'CMS',
      status: 'active',
      performance: 85,
      lastUpdated: '2024-01-12',
      description: 'Suggests relevant content to users based on behavior'
    },
    {
      id: 'fraud-detection',
      name: 'Fraud Detection',
      platform: 'Cross-Platform',
      status: 'active',
      performance: 94,
      lastUpdated: '2024-01-15',
      description: 'Identifies suspicious activities across all platforms'
    }
  ])

  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-red-100 text-red-800'
      case 'testing': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Fantasy Sports': return '🏆'
      case 'Social Platform': return '👥'
      case 'Marketplace': return '🛒'
      case 'CMS': return '📝'
      case 'Cross-Platform': return '🌐'
      default: return '🔧'
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Algorithms</p>
              <p className="text-2xl font-semibold">{algorithms.length}</p>
            </div>
            <span className="text-3xl">🧠</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active</p>
              <p className="text-2xl font-semibold text-green-600">
                {algorithms.filter(a => a.status === 'active').length}
              </p>
            </div>
            <span className="text-3xl">✅</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Testing</p>
              <p className="text-2xl font-semibold text-yellow-600">
                {algorithms.filter(a => a.status === 'testing').length}
              </p>
            </div>
            <span className="text-3xl">🧪</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Performance</p>
              <p className="text-2xl font-semibold text-blue-600">
                {Math.round(algorithms.reduce((acc, a) => acc + a.performance, 0) / algorithms.length)}%
              </p>
            </div>
            <span className="text-3xl">📈</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Algorithms List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Algorithm Management</h3>
              <p className="text-sm text-gray-600 mt-1">Monitor and configure algorithms across platforms</p>
            </div>
            
            <div className="divide-y">
              {algorithms.map((algorithm) => (
                <div
                  key={algorithm.id}
                  onClick={() => setSelectedAlgorithm(algorithm)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedAlgorithm?.id === algorithm.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getPlatformIcon(algorithm.platform)}</span>
                      <div>
                        <h4 className="font-medium">{algorithm.name}</h4>
                        <p className="text-sm text-gray-600">{algorithm.platform}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-sm font-medium">{algorithm.performance}%</div>
                        <div className="text-xs text-gray-500">Performance</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(algorithm.status)}`}>
                        {algorithm.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Algorithm Details */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Algorithm Details</h3>
            </div>
            
            {selectedAlgorithm ? (
              <div className="p-4 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{getPlatformIcon(selectedAlgorithm.platform)}</span>
                  <div>
                    <h4 className="font-semibold">{selectedAlgorithm.name}</h4>
                    <p className="text-sm text-gray-600">{selectedAlgorithm.platform}</p>
                  </div>
                </div>
                
                <div>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(selectedAlgorithm.status)}`}>
                    {selectedAlgorithm.status}
                  </span>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Performance</h5>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${selectedAlgorithm.performance}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{selectedAlgorithm.performance}% efficiency</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Description</h5>
                  <p className="text-sm text-gray-600">{selectedAlgorithm.description}</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Last Updated</h5>
                  <p className="text-sm text-gray-600">{selectedAlgorithm.lastUpdated}</p>
                </div>
                
                <div className="pt-4 border-t space-y-2">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                    Configure
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                    View Metrics
                  </button>
                  <button className="w-full border border-red-300 text-red-700 py-2 px-4 rounded-md hover:bg-red-50 transition-colors">
                    Disable
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <span className="text-4xl mb-4 block">🧠</span>
                <p>Select an algorithm to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmManagement