const Billing = () => {
  return (
    <div className="space-y-6">
      {/* Billing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-3xl font-bold text-burnt-orange">$127,543</p>
          <p className="text-sm text-gray-500">+15.2% this month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Pending Payments</h3>
          <p className="text-3xl font-bold text-yellow-500">$8,921</p>
          <p className="text-sm text-gray-500">23 transactions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Failed Payments</h3>
          <p className="text-3xl font-bold text-red-500">$2,134</p>
          <p className="text-sm text-gray-500">12 transactions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Refunds</h3>
          <p className="text-3xl font-bold text-blue-500">$1,892</p>
          <p className="text-sm text-gray-500">8 this month</p>
        </div>
      </div>

      {/* Revenue by Platform */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Revenue by Platform</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Marketplace</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Sales:</span>
                <span className="font-medium">$89,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Commission:</span>
                <span className="font-medium">$8,923</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Net:</span>
                <span className="font-medium text-burnt-orange">$80,311</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Subscriptions</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Monthly:</span>
                <span className="font-medium">$23,891</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Annual:</span>
                <span className="font-medium">$12,450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total:</span>
                <span className="font-medium text-burnt-orange">$36,341</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Licensing</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Software:</span>
                <span className="font-medium">$8,921</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Content:</span>
                <span className="font-medium">$1,970</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total:</span>
                <span className="font-medium text-burnt-orange">$10,891</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Recent Transactions</h3>
          <div className="flex gap-2">
            <select className="px-3 py-1 border rounded text-sm">
              <option>All Types</option>
              <option>Sales</option>
              <option>Subscriptions</option>
              <option>Refunds</option>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">#TXN-2024-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">john.doe@email.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Product Sale</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$299.99</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15 14:32</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">View</button>
                  <button className="text-blue-600 hover:text-blue-700">Refund</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">#TXN-2024-002</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">sarah.m@email.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">Subscription</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$29.99</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15 13:45</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">View</button>
                  <button className="text-green-600 hover:text-green-700">Retry</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">#TXN-2024-003</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">mike.j@email.com</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Refund</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">-$149.99</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Processed</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15 12:18</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Methods & Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">💳</span>
                </div>
                <span className="font-medium">Credit Cards</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">78.2%</div>
                <div className="text-xs text-gray-500">$99,234</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🏦</span>
                </div>
                <span className="font-medium">Bank Transfer</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">15.8%</div>
                <div className="text-xs text-gray-500">$20,123</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">💰</span>
                </div>
                <span className="font-medium">Digital Wallet</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">6.0%</div>
                <div className="text-xs text-gray-500">$8,186</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full p-3 text-left border rounded hover:bg-gray-50">
              <div className="font-medium">Process Pending Payments</div>
              <div className="text-sm text-gray-500">23 payments awaiting processing</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-gray-50">
              <div className="font-medium">Generate Revenue Report</div>
              <div className="text-sm text-gray-500">Monthly financial summary</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-gray-50">
              <div className="font-medium">Manage Tax Settings</div>
              <div className="text-sm text-gray-500">Configure tax rates and compliance</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-gray-50">
              <div className="font-medium">Payout Management</div>
              <div className="text-sm text-gray-500">Seller payouts and schedules</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing