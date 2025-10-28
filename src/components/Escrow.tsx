const Escrow = () => {
  return (
    <div className="space-y-6">
      {/* Escrow Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Total Held Funds</h3>
          <p className="text-3xl font-bold text-burnt-orange">$89,234</p>
          <p className="text-sm text-gray-500">Across 234 transactions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Ready to Release</h3>
          <p className="text-3xl font-bold text-green-500">$23,891</p>
          <p className="text-sm text-gray-500">45 transactions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Dispute Claims</h3>
          <p className="text-3xl font-bold text-red-500">$8,921</p>
          <p className="text-sm text-gray-500">12 active disputes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Guarantee Period</h3>
          <p className="text-3xl font-bold text-blue-500">30 Days</p>
          <p className="text-sm text-gray-500">Default hold period</p>
        </div>
      </div>

      {/* Escrow Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full p-3 text-left border rounded hover:bg-green-50 border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-green-700">Release Funds</div>
                  <div className="text-sm text-gray-500">45 transactions ready for release</div>
                </div>
                <span className="text-green-600 font-bold">$23,891</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-red-700">Process Disputes</div>
                  <div className="text-sm text-gray-500">12 money-back guarantee claims</div>
                </div>
                <span className="text-red-600 font-bold">$8,921</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-yellow-700">Extend Hold Period</div>
                  <div className="text-sm text-gray-500">23 transactions need extension</div>
                </div>
                <span className="text-yellow-600 font-bold">$12,456</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-700">Configure Guarantees</div>
                  <div className="text-sm text-gray-500">Manage guarantee periods by product</div>
                </div>
                <span className="text-blue-600 font-bold">Settings</span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Release Settings</h3>
          <div className="space-y-4">
            <div className="p-4 border rounded">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium">Auto-Release Rules</div>
                <button className="text-burnt-orange hover:text-orange-600 text-sm">Configure</button>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Trusted Sellers (4.5+ rating):</span>
                  <span className="font-medium text-green-600">Auto-Release</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">New Sellers (under 30 days):</span>
                  <span className="font-medium text-yellow-600">Manual Review</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">High Value (over $500):</span>
                  <span className="font-medium text-yellow-600">Manual Review</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disputed Transactions:</span>
                  <span className="font-medium text-red-600">Always Manual</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium">Guarantee Periods</div>
                <button className="text-burnt-orange hover:text-orange-600 text-sm">Edit</button>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Digital Products:</span>
                  <span className="font-medium">30 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Software Licenses:</span>
                  <span className="font-medium">60 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Courses/Training:</span>
                  <span className="font-medium">90 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Final Sale Items:</span>
                  <span className="font-medium">No guarantee</span>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium">Business Rules</div>
                <button className="text-burnt-orange hover:text-orange-600 text-sm">Manage</button>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Auto-release after:</span>
                  <span className="font-medium">Guarantee period + 7 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dispute window:</span>
                  <span className="font-medium">24 hours after guarantee</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Emergency hold:</span>
                  <span className="font-medium">Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Held Transactions */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Held Transactions</h3>
          <div className="flex gap-2">
            <select className="px-3 py-1 border rounded text-sm">
              <option>All Status</option>
              <option>Holding</option>
              <option>Ready to Release</option>
              <option>Disputed</option>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hold Period</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Release Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">#ESC-2024-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Premium Software License</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$299.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30 days</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-02-15</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Ready</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-green-600 hover:text-green-700 mr-3">Release</button>
                  <button className="text-burnt-orange hover:text-orange-600">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">#ESC-2024-002</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Digital Marketing Course</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$149.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">60 days</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-03-01</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Holding</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-yellow-600 hover:text-yellow-700 mr-3">Extend</button>
                  <button className="text-burnt-orange hover:text-orange-600">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">#ESC-2024-003</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">E-book Collection</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$49.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30 days</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-02-20</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Disputed</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-red-600 hover:text-red-700 mr-3">Resolve</button>
                  <button className="text-burnt-orange hover:text-orange-600">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Escrow