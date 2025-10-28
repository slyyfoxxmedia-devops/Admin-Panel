import { useState } from 'react'

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('recent')

  const recentNotifications = [
    { id: 1, type: 'Critical', title: 'System Outage Detected', message: 'CDN service experiencing high latency', timestamp: '2024-01-15 15:45:00', status: 'Sent', channels: ['Email', 'SMS', 'Slack'] },
    { id: 2, type: 'High', title: 'Payment Failure Alert', message: 'Multiple payment failures detected in last 10 minutes', timestamp: '2024-01-15 15:30:00', status: 'Sent', channels: ['Email', 'Slack'] },
    { id: 3, type: 'Medium', title: 'Content Violation Report', message: 'New DMCA takedown request received', timestamp: '2024-01-15 15:15:00', status: 'Sent', channels: ['Email'] },
    { id: 4, type: 'Low', title: 'Weekly Report Ready', message: 'Weekly analytics report has been generated', timestamp: '2024-01-15 14:00:00', status: 'Sent', channels: ['Email'] }
  ]

  const alertRules = [
    { id: 1, name: 'Critical System Alerts', trigger: 'System Health < 95%', channels: ['Email', 'SMS', 'Slack'], recipients: 'DevOps Team', status: 'Active' },
    { id: 2, name: 'Payment Failures', trigger: 'Failed Payments > 10/hour', channels: ['Email', 'Slack'], recipients: 'Finance Team', status: 'Active' },
    { id: 3, name: 'Security Incidents', trigger: 'Failed Logins > 50/hour', channels: ['Email', 'SMS'], recipients: 'Security Team', status: 'Active' },
    { id: 4, name: 'High Value Transactions', trigger: 'Transaction > $10,000', channels: ['Email'], recipients: 'Management', status: 'Active' }
  ]

  const channels = [
    { name: 'Email', status: 'Active', delivered: 1247, failed: 3, lastUsed: '2024-01-15 15:45:00' },
    { name: 'SMS', status: 'Active', delivered: 89, failed: 1, lastUsed: '2024-01-15 15:45:00' },
    { name: 'Slack', status: 'Active', delivered: 234, failed: 0, lastUsed: '2024-01-15 15:30:00' },
    { name: 'Webhook', status: 'Active', delivered: 567, failed: 12, lastUsed: '2024-01-15 15:15:00' },
    { name: 'Push Notifications', status: 'Inactive', delivered: 0, failed: 0, lastUsed: 'Never' }
  ]

  const templates = [
    { id: 1, name: 'System Outage Alert', category: 'System', usage: 45, lastModified: '2024-01-10' },
    { id: 2, name: 'Payment Failure Notice', category: 'Financial', usage: 123, lastModified: '2024-01-08' },
    { id: 3, name: 'Security Incident Alert', category: 'Security', usage: 67, lastModified: '2024-01-05' },
    { id: 4, name: 'Content Violation Report', category: 'Content', usage: 89, lastModified: '2024-01-03' }
  ]

  return (
    <div className="space-y-6">
      {/* Notifications Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Sent Today</h3>
          <p className="text-3xl font-bold text-blue-600">247</p>
          <p className="text-sm text-blue-600">+18% from yesterday</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800">Critical Alerts</h3>
          <p className="text-3xl font-bold text-red-600">3</p>
          <p className="text-sm text-red-600">Last 24 hours</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Delivery Rate</h3>
          <p className="text-3xl font-bold text-green-600">99.2%</p>
          <p className="text-sm text-green-600">Success rate</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Active Rules</h3>
          <p className="text-3xl font-bold text-purple-600">12</p>
          <p className="text-sm text-purple-600">Monitoring triggers</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'recent', label: 'Recent Alerts', icon: '🔔' },
            { id: 'rules', label: 'Alert Rules', icon: '⚙️' },
            { id: 'channels', label: 'Channels', icon: '📡' },
            { id: 'templates', label: 'Templates', icon: '📝' },
            { id: 'settings', label: 'Settings', icon: '🔧' }
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

      {/* Recent Alerts */}
      {activeTab === 'recent' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Notifications</h3>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Types</option>
                  <option>Critical</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
                <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                  Send Test Alert
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Channels</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentNotifications.map((notification) => (
                  <tr key={notification.id}>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        notification.type === 'Critical' ? 'bg-red-100 text-red-800' :
                        notification.type === 'High' ? 'bg-orange-100 text-orange-800' :
                        notification.type === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {notification.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{notification.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{notification.message}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="flex space-x-1">
                        {notification.channels.map((channel, index) => (
                          <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{notification.timestamp}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        {notification.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Alert Rules */}
      {activeTab === 'rules' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Alert Rules & Triggers</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Create Rule
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rule Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trigger Condition</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Channels</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipients</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {alertRules.map((rule) => (
                  <tr key={rule.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{rule.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{rule.trigger}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="flex space-x-1">
                        {rule.channels.map((channel, index) => (
                          <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                            {channel}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{rule.recipients}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        rule.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {rule.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                      <button className="text-green-600 hover:text-green-800">Test</button>
                      <button className="text-red-600 hover:text-red-800">Disable</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Channels */}
      {activeTab === 'channels' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Notification Channels</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Add Channel
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Channel</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Delivered</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Failed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Used</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {channels.map((channel, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{channel.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        channel.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {channel.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{channel.delivered.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{channel.failed}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{channel.lastUsed}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Configure</button>
                      <button className="text-green-600 hover:text-green-800">Test</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Templates */}
      {activeTab === 'templates' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Notification Templates</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Create Template
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Template Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usage Count</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Modified</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {templates.map((template) => (
                  <tr key={template.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{template.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        template.category === 'System' ? 'bg-blue-100 text-blue-800' :
                        template.category === 'Financial' ? 'bg-green-100 text-green-800' :
                        template.category === 'Security' ? 'bg-red-100 text-red-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {template.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{template.usage}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{template.lastModified}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                      <button className="text-green-600 hover:text-green-800">Preview</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Settings */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Global Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">Enable Notifications</span>
                  <p className="text-sm text-gray-600">Master switch for all notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">Rate Limiting</span>
                  <p className="text-sm text-gray-600">Prevent notification spam</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">Delivery Confirmation</span>
                  <p className="text-sm text-gray-600">Track notification delivery status</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Escalation Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Critical Alert Escalation</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>Immediate</option>
                  <option>5 minutes</option>
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">High Priority Escalation</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" defaultValue="9:00 AM - 6:00 PM" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>UTC</option>
                  <option>EST</option>
                  <option>PST</option>
                  <option>CST</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Notifications