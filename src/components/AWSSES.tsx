import { useState } from 'react'

const AWSSES = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const sesStats = {
    sent24h: 12847,
    bounces: 23,
    complaints: 2,
    reputation: 99.8,
    sendingQuota: 50000,
    sendRate: 14
  }

  const verifiedDomains = [
    { domain: 'slyyfoxmedia.com', status: 'Verified', dkim: true, spf: true, dmarc: true },
    { domain: 'marketplace.slyyfoxmedia.com', status: 'Verified', dkim: true, spf: true, dmarc: false },
    { domain: 'notifications.slyyfoxmedia.com', status: 'Pending', dkim: false, spf: true, dmarc: false }
  ]

  const recentBounces = [
    { email: 'user@example.com', type: 'Hard', reason: 'Mailbox does not exist', timestamp: '2024-01-15 14:30' },
    { email: 'test@domain.com', type: 'Soft', reason: 'Mailbox full', timestamp: '2024-01-15 14:15' }
  ]

  const suppressionList = [
    { email: 'blocked@example.com', type: 'Bounce', reason: 'Hard bounce', date: '2024-01-10' },
    { email: 'complaint@test.com', type: 'Complaint', reason: 'Spam report', date: '2024-01-12' }
  ]

  return (
    <div className="space-y-6">
      {/* SES Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-sm font-semibold text-blue-800">Sent (24h)</h3>
          <p className="text-2xl font-bold text-blue-600">{sesStats.sent24h.toLocaleString()}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="text-sm font-semibold text-red-800">Bounces</h3>
          <p className="text-2xl font-bold text-red-600">{sesStats.bounces}</p>
          <p className="text-xs text-red-600">{((sesStats.bounces / sesStats.sent24h) * 100).toFixed(2)}%</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-sm font-semibold text-yellow-800">Complaints</h3>
          <p className="text-2xl font-bold text-yellow-600">{sesStats.complaints}</p>
          <p className="text-xs text-yellow-600">{((sesStats.complaints / sesStats.sent24h) * 100).toFixed(3)}%</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-sm font-semibold text-green-800">Reputation</h3>
          <p className="text-2xl font-bold text-green-600">{sesStats.reputation}%</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="text-sm font-semibold text-purple-800">Daily Quota</h3>
          <p className="text-2xl font-bold text-purple-600">{sesStats.sendingQuota.toLocaleString()}</p>
          <p className="text-xs text-purple-600">{((sesStats.sent24h / sesStats.sendingQuota) * 100).toFixed(1)}% used</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h3 className="text-sm font-semibold text-indigo-800">Send Rate</h3>
          <p className="text-2xl font-bold text-indigo-600">{sesStats.sendRate}</p>
          <p className="text-xs text-indigo-600">emails/sec</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'domains', label: 'Verified Domains', icon: '🌐' },
            { id: 'bounces', label: 'Bounces & Complaints', icon: '⚠️' },
            { id: 'suppression', label: 'Suppression List', icon: '🚫' },
            { id: 'configuration', label: 'Configuration', icon: '⚙️' }
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
              <h3 className="text-lg font-semibold mb-4">Sending Statistics (Last 7 Days)</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Email Volume Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Bounce & Complaint Rates</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Bounce Rate Chart Placeholder]
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Account Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="font-medium">Sending Enabled</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="font-medium">Production Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="font-medium">Reputation Monitoring</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Region:</strong> us-east-1
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Account Level:</strong> Production
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> 2024-01-15 15:30 UTC
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Verified Domains */}
      {activeTab === 'domains' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Verified Domains & Email Addresses</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Add Domain
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Domain</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">DKIM</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SPF</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">DMARC</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {verifiedDomains.map((domain, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{domain.domain}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        domain.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {domain.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`${domain.dkim ? 'text-green-600' : 'text-red-600'}`}>
                        {domain.dkim ? '✓' : '✗'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`${domain.spf ? 'text-green-600' : 'text-red-600'}`}>
                        {domain.spf ? '✓' : '✗'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`${domain.dmarc ? 'text-green-600' : 'text-red-600'}`}>
                        {domain.dmarc ? '✓' : '✗'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Configure</button>
                      <button className="text-red-600 hover:text-red-800">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Bounces & Complaints */}
      {activeTab === 'bounces' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Recent Bounces</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBounces.map((bounce, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-gray-900">{bounce.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          bounce.type === 'Hard' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {bounce.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{bounce.reason}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{bounce.timestamp}</td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-800">Add to Suppression</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Suppression List */}
      {activeTab === 'suppression' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Global Suppression List</h3>
              <div className="flex space-x-2">
                <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                  Add Email
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
                  Import CSV
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date Added</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {suppressionList.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.type === 'Bounce' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.reason}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-red-600 hover:text-red-800">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Configuration */}
      {activeTab === 'configuration' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">SES Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default From Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  defaultValue="noreply@slyyfoxmedia.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default From Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  defaultValue="SlyyFoxxMedia"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Configuration Set</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>default-config-set</option>
                  <option>marketing-config-set</option>
                  <option>transactional-config-set</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reputation Tracking</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-burnt-orange text-white px-6 py-2 rounded hover:bg-burnt-orange/90">
                Save Configuration
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">SMTP Credentials</h3>
            <div className="bg-gray-50 p-4 rounded border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>SMTP Server:</strong> email-smtp.us-east-1.amazonaws.com
                </div>
                <div>
                  <strong>Port:</strong> 587 (TLS) / 465 (SSL)
                </div>
                <div>
                  <strong>Username:</strong> AKIA***************
                </div>
                <div>
                  <strong>Password:</strong> ****************
                </div>
              </div>
              <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm">
                Generate New SMTP Credentials
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AWSSES