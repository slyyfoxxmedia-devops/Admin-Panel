import { useState } from 'react'

const AuditLogs = () => {
  const [activeTab, setActiveTab] = useState('logging-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'logging-rules', label: 'Logging Rules', icon: '📝' },
            { id: 'retention-policy', label: 'Retention Policy', icon: '🗄️' },
            { id: 'alert-config', label: 'Alert Configuration', icon: '🚨' },
            { id: 'access-control', label: 'Access Control', icon: '🔐' }
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

      {/* Logging Rules */}
      {activeTab === 'logging-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Audit Logging Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Required Audit Events</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">High Priority Events</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• User account creation/deletion</li>
                    <li>• Admin privilege changes</li>
                    <li>• Financial transactions</li>
                    <li>• Security policy changes</li>
                    <li>• Data export/backup operations</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Medium Priority Events</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Content moderation actions</li>
                    <li>• Product approval/rejection</li>
                    <li>• Email template changes</li>
                    <li>• CMS content updates</li>
                    <li>• API configuration changes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Log Entry Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Timestamp (UTC format required)</li>
                <li>• User ID and email address</li>
                <li>• Action performed with detailed description</li>
                <li>• Target resource (ID, name, type)</li>
                <li>• Source IP address and user agent</li>
                <li>• Session ID and request ID</li>
                <li>• Before/after values for changes</li>
                <li>• Success/failure status with error codes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Logging Exclusions</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Routine system health checks</li>
                <li>• Automated backup processes</li>
                <li>• Read-only data queries</li>
                <li>• Static file requests</li>
                <li>• Heartbeat/ping requests</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Logging Rules
            </button>
          </div>
        </div>
      )}

      {/* Retention Policy */}
      {activeTab === 'retention-policy' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Log Retention Policy</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Retention Periods by Category</h4>
              <div className="space-y-3">
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">Security Events</h5>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">7 Years</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Login attempts, access violations, privilege changes</p>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">Financial Transactions</h5>
                    <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">7 Years</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Payments, refunds, escrow operations, billing changes</p>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">User Management</h5>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">3 Years</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Account creation, profile changes, suspensions</p>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">Content Operations</h5>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">2 Years</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Product uploads, content moderation, CMS changes</p>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium">System Operations</h5>
                    <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">1 Year</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Configuration changes, deployments, maintenance</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Archive and Deletion Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Logs older than 90 days moved to cold storage</li>
                <li>• Logs older than 1 year compressed and encrypted</li>
                <li>• Legal hold prevents automatic deletion</li>
                <li>• Compliance officer approval required for early deletion</li>
                <li>• Secure deletion with certificate of destruction</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Retention Policy
            </button>
          </div>
        </div>
      )}

      {/* Alert Configuration */}
      {activeTab === 'alert-config' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Security Alert Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Critical Alert Triggers</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">Immediate Alerts (Real-time)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• 5+ failed login attempts from same IP (15 minutes)</li>
                    <li>• Admin privilege escalation</li>
                    <li>• Unauthorized API access attempts</li>
                    <li>• Large financial transaction ($10,000+)</li>
                    <li>• Mass user account changes (10+ accounts)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Hourly Alert Summary</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Unusual login patterns</li>
                    <li>• High volume of content reports</li>
                    <li>• System performance anomalies</li>
                    <li>• Failed payment processing spikes</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Daily Alert Digest</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Security event summary</li>
                    <li>• Compliance event status</li>
                    <li>• System health overview</li>
                    <li>• User activity patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Alert Recipients</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Critical alerts → Security team + CTO + CEO</li>
                <li>• Financial alerts → Finance team + CFO</li>
                <li>• Compliance alerts → Legal team + Compliance officer</li>
                <li>• System alerts → DevOps team + Engineering manager</li>
                <li>• User alerts → Customer support + Community manager</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Alert Delivery Methods</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Email (Critical)</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded">SMS (High Priority)</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Slack (Medium)</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Dashboard (Low)</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">Webhook (API)</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded">Mobile Push</span>
              </div>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Alert Configuration
            </button>
          </div>
        </div>
      )}

      {/* Access Control */}
      {activeTab === 'access-control' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Audit Log Access Control</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Access Levels</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">Full Access</h5>
                  <p className="text-sm text-gray-600">View all logs, export data, configure settings</p>
                  <p className="text-xs text-gray-500 mt-1">Roles: Security Admin, Compliance Officer, CTO</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Department Access</h5>
                  <p className="text-sm text-gray-600">View logs related to department operations</p>
                  <p className="text-xs text-gray-500 mt-1">Roles: Department Heads, Team Leads</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Limited Access</h5>
                  <p className="text-sm text-gray-600">View own actions and team activities</p>
                  <p className="text-xs text-gray-500 mt-1">Roles: Managers, Senior Staff</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-gray-800">No Access</h5>
                  <p className="text-sm text-gray-600">Cannot view audit logs</p>
                  <p className="text-xs text-gray-500 mt-1">Roles: Regular Users, Contractors</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Search and Export Restrictions</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Date range limited to 90 days for non-admin users</li>
                <li>• Export limited to 10,000 records per request</li>
                <li>• Sensitive data fields masked for limited access users</li>
                <li>• All search queries logged and monitored</li>
                <li>• Export approval required for bulk data requests</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Audit Trail for Audit Access</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Log all audit log access attempts</li>
                <li>• Record search queries and filters used</li>
                <li>• Track data exports and downloads</li>
                <li>• Monitor unusual access patterns</li>
                <li>• Alert on unauthorized access attempts</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Access Control
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AuditLogs