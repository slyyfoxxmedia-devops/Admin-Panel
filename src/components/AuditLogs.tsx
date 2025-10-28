import { useState } from 'react'

const AuditLogs = () => {
  const [activeTab, setActiveTab] = useState('recent')

  const recentLogs = [
    { id: 1, timestamp: '2024-01-15 15:30:45', user: 'admin@slyyfox.com', action: 'User Account Suspended', target: 'user123@example.com', ip: '192.168.1.100', severity: 'High' },
    { id: 2, timestamp: '2024-01-15 15:25:12', user: 'sarah@slyyfox.com', action: 'Product Approved', target: 'Audio Pack #4567', ip: '192.168.1.101', severity: 'Medium' },
    { id: 3, timestamp: '2024-01-15 15:20:33', user: 'mike@slyyfox.com', action: 'Escrow Funds Released', target: 'Transaction #TX789', ip: '192.168.1.102', severity: 'High' },
    { id: 4, timestamp: '2024-01-15 15:15:07', user: 'admin@slyyfox.com', action: 'Email Template Updated', target: 'Welcome Email', ip: '192.168.1.100', severity: 'Low' },
    { id: 5, timestamp: '2024-01-15 15:10:22', user: 'alex@slyyfox.com', action: 'CMS Page Published', target: 'Seller Profile: Digital Studios', ip: '192.168.1.103', severity: 'Medium' }
  ]

  const securityEvents = [
    { id: 1, timestamp: '2024-01-15 14:45:12', event: 'Failed Login Attempt', user: 'unknown', ip: '203.0.113.45', attempts: 5, status: 'Blocked' },
    { id: 2, timestamp: '2024-01-15 13:30:08', event: 'Suspicious API Activity', user: 'api_user_456', ip: '198.51.100.23', attempts: 1, status: 'Investigating' },
    { id: 3, timestamp: '2024-01-15 12:15:33', event: 'Admin Password Changed', user: 'admin@slyyfox.com', ip: '192.168.1.100', attempts: 1, status: 'Success' },
    { id: 4, timestamp: '2024-01-15 11:20:45', event: 'Unauthorized Access Attempt', user: 'unknown', ip: '203.0.113.67', attempts: 3, status: 'Blocked' }
  ]

  const systemChanges = [
    { id: 1, timestamp: '2024-01-15 16:00:00', change: 'Database Schema Update', component: 'User Management', version: 'v2.1.3', user: 'system' },
    { id: 2, timestamp: '2024-01-15 14:30:00', change: 'API Rate Limit Updated', component: 'API Gateway', version: 'v1.8.2', user: 'admin@slyyfox.com' },
    { id: 3, timestamp: '2024-01-15 12:00:00', change: 'Email Service Configuration', component: 'AWS SES', version: 'v3.2.1', user: 'mike@slyyfox.com' },
    { id: 4, timestamp: '2024-01-15 10:15:00', change: 'S3 Bucket Policy Updated', component: 'File Storage', version: 'v1.5.4', user: 'sarah@slyyfox.com' }
  ]

  const complianceEvents = [
    { id: 1, timestamp: '2024-01-15 15:45:00', event: 'GDPR Data Export Request', user: 'user789@example.com', status: 'Completed', officer: 'compliance@slyyfox.com' },
    { id: 2, timestamp: '2024-01-15 14:20:00', event: 'Content Violation Report', user: 'reporter@example.com', status: 'Under Review', officer: 'sarah@slyyfox.com' },
    { id: 3, timestamp: '2024-01-15 13:10:00', event: 'Legal Request Received', user: 'legal@court.gov', status: 'Processing', officer: 'legal@slyyfox.com' },
    { id: 4, timestamp: '2024-01-15 11:30:00', event: 'Data Retention Policy Applied', user: 'system', status: 'Completed', officer: 'compliance@slyyfox.com' }
  ]

  return (
    <div className="space-y-6">
      {/* Audit Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Total Events (24h)</h3>
          <p className="text-3xl font-bold text-blue-600">1,247</p>
          <p className="text-sm text-blue-600">+15% from yesterday</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800">Security Alerts</h3>
          <p className="text-3xl font-bold text-red-600">8</p>
          <p className="text-sm text-red-600">3 high priority</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800">Failed Logins</h3>
          <p className="text-3xl font-bold text-yellow-600">23</p>
          <p className="text-sm text-yellow-600">5 IPs blocked</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Compliance Events</h3>
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-sm text-green-600">All processed</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'recent', label: 'Recent Activity', icon: '🕐' },
            { id: 'security', label: 'Security Events', icon: '🔒' },
            { id: 'system', label: 'System Changes', icon: '⚙️' },
            { id: 'compliance', label: 'Compliance', icon: '⚖️' },
            { id: 'search', label: 'Advanced Search', icon: '🔍' }
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

      {/* Recent Activity */}
      {activeTab === 'recent' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Administrative Actions</h3>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Actions</option>
                  <option>User Management</option>
                  <option>Product Management</option>
                  <option>Financial</option>
                  <option>Content</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Severity</option>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Severity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentLogs.map((log) => (
                  <tr key={log.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{log.timestamp}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{log.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{log.action}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{log.target}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{log.ip}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        log.severity === 'High' ? 'bg-red-100 text-red-800' :
                        log.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {log.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Security Events */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Security Events & Threats</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User/Source</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Attempts</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {securityEvents.map((event) => (
                  <tr key={event.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{event.timestamp}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{event.event}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{event.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{event.ip}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{event.attempts}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        event.status === 'Blocked' ? 'bg-red-100 text-red-800' :
                        event.status === 'Investigating' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* System Changes */}
      {activeTab === 'system' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">System Configuration Changes</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Change Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Component</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Version</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Changed By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {systemChanges.map((change) => (
                  <tr key={change.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{change.timestamp}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{change.change}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{change.component}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{change.version}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{change.user}</td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Compliance Events */}
      {activeTab === 'compliance' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Compliance & Legal Events</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Requestor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned Officer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {complianceEvents.map((event) => (
                  <tr key={event.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{event.timestamp}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{event.event}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{event.user}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        event.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        event.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{event.officer}</td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800">View Case</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Advanced Search */}
      {activeTab === 'search' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Advanced Audit Search</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <div className="flex space-x-2">
                  <input type="date" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm" />
                  <input type="date" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">User</label>
                <input type="text" placeholder="Enter email or username" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Action Type</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>All Actions</option>
                  <option>User Management</option>
                  <option>Product Management</option>
                  <option>Financial Operations</option>
                  <option>Content Management</option>
                  <option>Security Events</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">IP Address</label>
                <input type="text" placeholder="Enter IP address" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Severity</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>All Levels</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Resource</label>
                <input type="text" placeholder="Enter resource ID or name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="bg-burnt-orange text-white px-6 py-2 rounded hover:bg-burnt-orange/90">
                Search Logs
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-50">
                Export Results
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-50">
                Save Search
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Saved Searches</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">High Severity Events - Last 7 Days</div>
                  <div className="text-sm text-gray-600">Created by admin@slyyfox.com</div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Run</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">Failed Login Attempts</div>
                  <div className="text-sm text-gray-600">Created by security@slyyfox.com</div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Run</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AuditLogs