const Licensing = () => {
  return (
    <div className="space-y-6">
      {/* Licensing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Active Licenses</h3>
          <p className="text-3xl font-bold text-burnt-orange">8,921</p>
          <p className="text-sm text-gray-500">Currently valid</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Expiring Soon</h3>
          <p className="text-3xl font-bold text-yellow-500">234</p>
          <p className="text-sm text-gray-500">Next 30 days</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Revoked</h3>
          <p className="text-3xl font-bold text-red-500">45</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-3xl font-bold text-green-500">$127K</p>
          <p className="text-sm text-gray-500">License sales</p>
        </div>
      </div>

      {/* License Types */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">License Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Perpetual</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Active: 3,421</div>
              <div>Revenue: $89,234</div>
              <div>No expiration</div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Subscription</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Active: 4,892</div>
              <div>Revenue: $23,891/mo</div>
              <div>Auto-renewal</div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Trial</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Active: 456</div>
              <div>Conversion: 23%</div>
              <div>14-30 days</div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Single-Use</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Issued: 152</div>
              <div>Used: 134</div>
              <div>One-time only</div>
            </div>
          </div>
        </div>
      </div>

      {/* License Management Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-700">Generate License</div>
                  <div className="text-sm text-gray-500">Create new license token</div>
                </div>
                <span className="text-blue-600 font-bold">Create</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-yellow-700">Extend Expiring</div>
                  <div className="text-sm text-gray-500">234 licenses expiring soon</div>
                </div>
                <span className="text-yellow-600 font-bold">Extend</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-red-700">Revoke License</div>
                  <div className="text-sm text-gray-500">Disable unauthorized usage</div>
                </div>
                <span className="text-red-600 font-bold">Revoke</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-green-50 border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-green-700">Bulk Operations</div>
                  <div className="text-sm text-gray-500">Mass license management</div>
                </div>
                <span className="text-green-600 font-bold">Manage</span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Security Features</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Token Encryption</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Device Binding</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Anti-Piracy Detection</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Monitoring</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Usage Validation API</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* License Details Table */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">License Management</h3>
          <div className="flex gap-2">
            <select className="px-3 py-1 border rounded text-sm">
              <option>All Types</option>
              <option>Perpetual</option>
              <option>Subscription</option>
              <option>Trial</option>
              <option>Expiring</option>
            </select>
            <button className="px-4 py-1 bg-burnt-orange text-white rounded text-sm hover:bg-orange-600">
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Key</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">LIC-2024-A1B2C3</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Premium Software</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">john.doe@email.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Perpetual</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Never</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1/1 devices</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">View</button>
                  <button className="text-red-600 hover:text-red-700">Revoke</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">LIC-2024-D4E5F6</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Design Suite</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">sarah.m@email.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">Subscription</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-02-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2/3 devices</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Expiring</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">View</button>
                  <button className="text-green-600 hover:text-green-700">Extend</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">LIC-2024-G7H8I9</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Trial Version</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">mike.j@email.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">Trial</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-25</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1/1 devices</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">View</button>
                  <button className="text-blue-600 hover:text-blue-700">Upgrade</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* License Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Usage Analytics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Daily Validations:</span>
              <span className="font-bold text-burnt-orange">45,231</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Failed Validations:</span>
              <span className="font-bold text-red-600">234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Piracy Attempts:</span>
              <span className="font-bold text-red-600">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Trial Conversions:</span>
              <span className="font-bold text-green-600">23.4%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature Controls</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Geographic Restrictions</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Enabled</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Concurrent User Limits</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Enabled</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">License Transfers</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Restricted</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Auto-Renewal</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Licensing