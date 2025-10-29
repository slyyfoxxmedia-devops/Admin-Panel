import { useState } from 'react'

interface Connection {
  id: string
  follower: string
  following: string
  followedAt: string
  status: 'active' | 'blocked' | 'muted'
  mutualFollows: boolean
}

interface NetworkStats {
  totalConnections: number
  activeConnections: number
  mutualConnections: number
  averageFollowers: number
  topInfluencers: Array<{
    username: string
    followers: number
    following: number
  }>
}

const SocialNetwork = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'connections' | 'analytics'>('overview')
  
  const [networkStats] = useState<NetworkStats>({
    totalConnections: 45672,
    activeConnections: 43891,
    mutualConnections: 12456,
    averageFollowers: 127,
    topInfluencers: [
      { username: '@sportsfan_mike', followers: 15420, following: 892 },
      { username: '@fantasy_guru', followers: 12890, following: 456 },
      { username: '@social_butterfly', followers: 9876, following: 2341 },
      { username: '@content_creator', followers: 8765, following: 234 },
      { username: '@sports_analyst', followers: 7654, following: 567 }
    ]
  })

  const [connections] = useState<Connection[]>([
    {
      id: '1',
      follower: '@john_doe',
      following: '@sports_fan',
      followedAt: '2024-01-15 10:30',
      status: 'active',
      mutualFollows: true
    },
    {
      id: '2',
      follower: '@jane_smith',
      following: '@fantasy_expert',
      followedAt: '2024-01-15 09:15',
      status: 'active',
      mutualFollows: false
    },
    {
      id: '3',
      follower: '@mike_wilson',
      following: '@content_king',
      followedAt: '2024-01-14 16:45',
      status: 'blocked',
      mutualFollows: false
    },
    {
      id: '4',
      follower: '@sarah_jones',
      following: '@social_star',
      followedAt: '2024-01-14 14:20',
      status: 'muted',
      mutualFollows: true
    },
    {
      id: '5',
      follower: '@alex_brown',
      following: '@sports_guru',
      followedAt: '2024-01-13 11:10',
      status: 'active',
      mutualFollows: false
    }
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'blocked': return 'bg-red-100 text-red-800'
      case 'muted': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {(['overview', 'connections', 'analytics'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Connections</p>
                  <p className="text-2xl font-semibold">{networkStats.totalConnections.toLocaleString()}</p>
                </div>
                <span className="text-3xl">🔗</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active</p>
                  <p className="text-2xl font-semibold text-green-600">{networkStats.activeConnections.toLocaleString()}</p>
                </div>
                <span className="text-3xl">✅</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Mutual Follows</p>
                  <p className="text-2xl font-semibold text-blue-600">{networkStats.mutualConnections.toLocaleString()}</p>
                </div>
                <span className="text-3xl">🤝</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Followers</p>
                  <p className="text-2xl font-semibold text-purple-600">{networkStats.averageFollowers}</p>
                </div>
                <span className="text-3xl">📊</span>
              </div>
            </div>
          </div>

          {/* Top Influencers */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Top Influencers</h3>
              <p className="text-sm text-gray-600 mt-1">Users with the most followers</p>
            </div>
            <div className="divide-y">
              {networkStats.topInfluencers.map((influencer, index) => (
                <div key={influencer.username} className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium">{influencer.username}</h4>
                      <p className="text-sm text-gray-600">{influencer.followers.toLocaleString()} followers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{influencer.following.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Following</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Connections Tab */}
      {activeTab === 'connections' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-4 border-b flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Recent Connections</h3>
              <p className="text-sm text-gray-600 mt-1">Manage follow relationships</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Export Data
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                Bulk Actions
              </button>
            </div>
          </div>
          
          <div className="divide-y">
            {connections.map((connection) => (
              <div key={connection.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{connection.follower}</span>
                      <span className="text-gray-400">→</span>
                      <span className="font-medium">{connection.following}</span>
                    </div>
                    {connection.mutualFollows && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        Mutual
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">{connection.followedAt}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(connection.status)}`}>
                      {connection.status}
                    </span>
                    <button className="text-blue-500 hover:text-blue-700 text-sm">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-lg font-semibold mb-4">Connection Growth</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <span className="text-4xl mb-2 block">📈</span>
                <p>Connection growth chart would go here</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-lg font-semibold mb-4">Network Health</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Connection Rate</span>
                <span className="font-medium">94.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Engagement Score</span>
                <span className="font-medium">87.5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87.5%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Network Density</span>
                <span className="font-medium">72.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '72.8%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SocialNetwork