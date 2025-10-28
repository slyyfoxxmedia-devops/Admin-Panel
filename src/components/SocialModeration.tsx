import { useState } from 'react'

const SocialModeration = () => {
  const [activeTab, setActiveTab] = useState('queue')

  const pendingContent = [
    { id: 1, type: 'post', content: 'This is a flagged post content...', user: 'user123', reason: 'Spam Detection', priority: 'High', timestamp: '2024-01-15 10:30' },
    { id: 2, type: 'comment', content: 'Inappropriate comment here...', user: 'user456', reason: 'User Report', priority: 'Medium', timestamp: '2024-01-15 09:15' },
    { id: 3, type: 'post', content: 'Another flagged post...', user: 'user789', reason: 'NSFW Content', priority: 'High', timestamp: '2024-01-15 08:45' }
  ]

  const userReports = [
    { id: 1, reporter: 'user001', reported: 'user123', reason: 'Harassment', content: 'Reported content preview...', status: 'Open', timestamp: '2024-01-15 11:00' },
    { id: 2, reporter: 'user002', reported: 'user456', reason: 'Spam', content: 'Spam content preview...', status: 'Under Review', timestamp: '2024-01-15 10:15' }
  ]

  const appeals = [
    { id: 1, user: 'user123', originalAction: 'Post Removed', reason: 'False positive claim', status: 'Pending', timestamp: '2024-01-15 12:00' },
    { id: 2, user: 'user789', originalAction: '24h Suspension', reason: 'Context misunderstood', status: 'Under Review', timestamp: '2024-01-15 11:30' }
  ]

  return (
    <div className="space-y-6">
      {/* Moderation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800">Pending Review</h3>
          <p className="text-3xl font-bold text-red-600">23</p>
          <p className="text-sm text-red-600">+5 in last hour</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800">User Reports</h3>
          <p className="text-3xl font-bold text-yellow-600">12</p>
          <p className="text-sm text-yellow-600">3 high priority</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Appeals</h3>
          <p className="text-3xl font-bold text-blue-600">8</p>
          <p className="text-sm text-blue-600">2 overdue</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Auto-Approved</h3>
          <p className="text-3xl font-bold text-green-600">1,247</p>
          <p className="text-sm text-green-600">Today</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'queue', label: 'Review Queue', icon: '📋' },
            { id: 'reports', label: 'User Reports', icon: '🚨' },
            { id: 'appeals', label: 'Appeals', icon: '⚖️' },
            { id: 'filters', label: 'Auto Filters', icon: '🤖' },
            { id: 'analytics', label: 'Analytics', icon: '📊' }
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

      {/* Review Queue */}
      {activeTab === 'queue' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Content Review Queue</h3>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Types</option>
                  <option>Posts</option>
                  <option>Comments</option>
                  <option>Images</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Priorities</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Content</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingContent.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="mr-2">{item.type === 'post' ? '📝' : '💬'}</span>
                        <div className="text-sm text-gray-900 max-w-xs truncate">{item.content}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.reason}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.priority === 'High' ? 'bg-red-100 text-red-800' :
                        item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.timestamp}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-green-600 hover:text-green-800">Approve</button>
                      <button className="text-red-600 hover:text-red-800">Reject</button>
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* User Reports */}
      {activeTab === 'reports' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">User Reports</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reporter</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reported User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Content</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userReports.map((report) => (
                  <tr key={report.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{report.reporter}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{report.reported}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{report.reason}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{report.content}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        report.status === 'Open' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Investigate</button>
                      <button className="text-green-600 hover:text-green-800">Resolve</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Appeals */}
      {activeTab === 'appeals' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Moderation Appeals</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Original Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Appeal Reason</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appeals.map((appeal) => (
                  <tr key={appeal.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{appeal.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{appeal.originalAction}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{appeal.reason}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        appeal.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {appeal.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{appeal.timestamp}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-green-600 hover:text-green-800">Approve</button>
                      <button className="text-red-600 hover:text-red-800">Deny</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Auto Filters */}
      {activeTab === 'filters' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Automated Content Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Spam Detection</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Hate Speech</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">NSFW Content</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sensitivity Level</label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Auto-Action</label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2">
                    <option>Flag for Review</option>
                    <option>Auto-Remove</option>
                    <option>Shadow Ban</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Analytics */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border">
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-3xl font-bold text-blue-600">2.3h</p>
              <p className="text-sm text-gray-600">Average response time</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border">
              <h3 className="text-lg font-semibold mb-2">Accuracy Rate</h3>
              <p className="text-3xl font-bold text-green-600">94.2%</p>
              <p className="text-sm text-gray-600">Auto-filter accuracy</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border">
              <h3 className="text-lg font-semibold mb-2">Appeal Success</h3>
              <p className="text-3xl font-bold text-yellow-600">12.8%</p>
              <p className="text-sm text-gray-600">Appeals overturned</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Moderation Activity</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Moderation Activity Chart Placeholder]
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SocialModeration