const Users = () => {
  return (
    <div className="space-y-6">
      {/* User Search & Filters */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search users by email, name, or ID..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange">
              <option>All Status</option>
              <option>Active</option>
              <option>Suspended</option>
              <option>Banned</option>
            </select>
            <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange">
              <option>All Platforms</option>
              <option>Marketplace</option>
              <option>Seller Dashboard</option>
              <option>Social Platform</option>
            </select>
            <button className="px-6 py-2 bg-burnt-orange text-white rounded-lg hover:bg-orange-600">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-3xl font-bold text-burnt-orange">12,543</p>
          <p className="text-sm text-gray-500">+234 this week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Active Sellers</h3>
          <p className="text-3xl font-bold text-burnt-orange">1,234</p>
          <p className="text-sm text-gray-500">+45 this week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Suspended</h3>
          <p className="text-3xl font-bold text-red-500">23</p>
          <p className="text-sm text-gray-500">-5 this week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Verification Pending</h3>
          <p className="text-3xl font-bold text-yellow-500">89</p>
          <p className="text-sm text-gray-500">+12 this week</p>
        </div>
      </div>

      {/* User List */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h3 className="text-xl font-semibold text-gray-800">User Management</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platforms</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">JD</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">john.doe@email.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex gap-1">
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Marketplace</span>
                    <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Seller</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$2,450</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">View</button>
                  <button className="text-yellow-600 hover:text-yellow-700 mr-3">Suspend</button>
                  <button className="text-red-600 hover:text-red-700">Ban</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">SM</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Sarah Miller</div>
                      <div className="text-sm text-gray-500">sarah.m@email.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex gap-1">
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Marketplace</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 day ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">View</button>
                  <button className="text-green-600 hover:text-green-700 mr-3">Verify</button>
                  <button className="text-red-600 hover:text-red-700">Reject</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">MJ</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Mike Johnson</div>
                      <div className="text-sm text-gray-500">mike.j@email.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Suspended</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex gap-1">
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Marketplace</span>
                    <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Seller</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Social</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$8,920</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 days ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">View</button>
                  <button className="text-green-600 hover:text-green-700 mr-3">Restore</button>
                  <button className="text-red-600 hover:text-red-700">Ban</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users