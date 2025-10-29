import { useState, useEffect } from 'react'
import { useApi } from '../hooks/useApi'

const MessagingAdmin = () => {
  const [conversations, setConversations] = useState([])
  const [channels, setChannels] = useState([])
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [messages, setMessages] = useState([])
  const { loading, error, request } = useApi()

  useEffect(() => {
    loadConversations()
    loadChannels()
  }, [])

  const loadConversations = async () => {
    const data = await request('/api/messaging/conversations')
    if (data) setConversations(data)
  }

  const loadChannels = async () => {
    const data = await request('/api/messaging/channels')
    if (data) setChannels(data)
  }

  const loadMessages = async (conversationId) => {
    const data = await request(`/api/messaging/conversations/${conversationId}/messages`)
    if (data) setMessages(data)
  }

  const moderateMessage = async (messageId, action) => {
    await request(`/api/messaging/messages/${messageId}/moderate`, 'POST', { action })
    if (selectedConversation) {
      loadMessages(selectedConversation.id)
    }
  }

  const createChannel = async (channelData) => {
    await request('/api/messaging/channels', 'POST', channelData)
    loadChannels()
  }

  const messagingStats = {
    totalMessages: conversations.reduce((sum, c) => sum + (c.messageCount || 0), 0),
    activeConversations: conversations.filter(c => c.status === 'active').length,
    flaggedMessages: conversations.reduce((sum, c) => sum + (c.flaggedCount || 0), 0),
    totalChannels: channels.length
  }

  const ecosystemChannels = [
    { id: 'marketplace-support', name: 'Marketplace Support', type: 'support', members: 1250 },
    { id: 'seller-community', name: 'Seller Community', type: 'community', members: 340 },
    { id: 'pm-general', name: 'PM General', type: 'business', members: 45 },
    { id: 'social-announcements', name: 'Social Announcements', type: 'announcements', members: 2100 },
    { id: 'fantasy-leagues', name: 'Fantasy Leagues', type: 'gaming', members: 890 },
    { id: 'cms-creators', name: 'CMS Creators', type: 'creative', members: 156 }
  ]

  return (
    <div className="space-y-6">
      {/* Messaging Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Total Messages</h3>
          <p className="text-3xl font-bold text-blue-600">{messagingStats.totalMessages.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Active Chats</h3>
          <p className="text-3xl font-bold text-green-600">{messagingStats.activeConversations}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Flagged Messages</h3>
          <p className="text-3xl font-bold text-red-600">{messagingStats.flaggedMessages}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Channels</h3>
          <p className="text-3xl font-bold text-purple-600">{messagingStats.totalChannels}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow border">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {['overview', 'conversations', 'channels', 'moderation', 'analytics'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Ecosystem Channels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystemChannels.map(channel => (
                <div key={channel.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{channel.name}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      channel.type === 'support' ? 'bg-blue-100 text-blue-800' :
                      channel.type === 'community' ? 'bg-green-100 text-green-800' :
                      channel.type === 'business' ? 'bg-purple-100 text-purple-800' :
                      channel.type === 'announcements' ? 'bg-yellow-100 text-yellow-800' :
                      channel.type === 'gaming' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {channel.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{channel.members} members</p>
                  <div className="flex gap-2 mt-3">
                    <button className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Manage
                    </button>
                    <button className="text-xs px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                      Settings
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Conversations Tab */}
        {activeTab === 'conversations' && (
          <div className="p-6">
            <div className="flex gap-6">
              {/* Conversation List */}
              <div className="w-1/3 border-r pr-6">
                <h3 className="text-lg font-semibold mb-4">Recent Conversations</h3>
                <div className="space-y-3">
                  {conversations.map(conv => (
                    <div
                      key={conv.id}
                      onClick={() => {
                        setSelectedConversation(conv)
                        loadMessages(conv.id)
                      }}
                      className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                        selectedConversation?.id === conv.id ? 'border-blue-500 bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{conv.participants.join(', ')}</span>
                        <span className="text-xs text-gray-500">
                          {new Date(conv.lastMessage).toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 truncate">{conv.lastMessageText}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          conv.platform === 'marketplace' ? 'bg-blue-100 text-blue-800' :
                          conv.platform === 'social' ? 'bg-green-100 text-green-800' :
                          conv.platform === 'pm' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {conv.platform}
                        </span>
                        {conv.flaggedCount > 0 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                            {conv.flaggedCount} flagged
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message View */}
              <div className="flex-1">
                {selectedConversation ? (
                  <div>
                    <div className="border-b pb-4 mb-4">
                      <h3 className="text-lg font-semibold">
                        {selectedConversation.participants.join(' & ')}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {selectedConversation.platform} • {selectedConversation.messageCount} messages
                      </p>
                    </div>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {messages.map(message => (
                        <div key={message.id} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs">
                            {message.sender.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm">{message.sender}</span>
                              <span className="text-xs text-gray-500">
                                {new Date(message.timestamp).toLocaleString()}
                              </span>
                              {message.flagged && (
                                <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                                  Flagged
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-700">{message.content}</p>
                            {message.flagged && (
                              <div className="flex gap-2 mt-2">
                                <button
                                  onClick={() => moderateMessage(message.id, 'approve')}
                                  className="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={() => moderateMessage(message.id, 'delete')}
                                  className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-gray-500">
                    Select a conversation to view messages
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Channels Tab */}
        {activeTab === 'channels' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Channel Management</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Create Channel
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Channel</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Members</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Messages/Day</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {ecosystemChannels.map(channel => (
                    <tr key={channel.id}>
                      <td className="px-6 py-4 font-medium text-gray-900">{channel.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{channel.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{channel.members}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{Math.floor(Math.random() * 500)}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">Settings</button>
                        <button className="text-gray-600 hover:text-gray-800">Archive</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Moderation Tab */}
        {activeTab === 'moderation' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Content Moderation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Auto-Moderation Rules</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Spam Detection</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Profanity Filter</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Link Scanning</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Moderation Queue</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                    <span className="text-sm">3 messages pending review</span>
                    <button className="text-xs px-2 py-1 bg-red-600 text-white rounded">Review</button>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                    <span className="text-sm">1 user reported</span>
                    <button className="text-xs px-2 py-1 bg-yellow-600 text-white rounded">Review</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Messaging Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Message Volume by Platform</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Social Platform</span>
                    <span className="text-sm text-gray-500">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Marketplace</span>
                    <span className="text-sm text-gray-500">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">PM Dashboard</span>
                    <span className="text-sm text-gray-500">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">CRM</span>
                    <span className="text-sm text-gray-500">10%</span>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Peak Activity Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">9:00 AM - 12:00 PM</span>
                    <span className="text-sm text-gray-500">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">1:00 PM - 5:00 PM</span>
                    <span className="text-sm text-gray-500">Very High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">6:00 PM - 9:00 PM</span>
                    <span className="text-sm text-gray-500">Medium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}
    </div>
  )
}

export default MessagingAdmin