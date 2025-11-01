const Users = () => {
  return (
    <div className="space-y-6">
      {/* User Status Definitions */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">User Status Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-3 border rounded bg-green-50">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            <div className="text-sm text-gray-600 mt-2">Full platform access</div>
          </div>
          <div className="p-3 border rounded bg-yellow-50">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
            <div className="text-sm text-gray-600 mt-2">Awaiting verification</div>
          </div>
          <div className="p-3 border rounded bg-red-50">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Suspended</span>
            <div className="text-sm text-gray-600 mt-2">Temporary access restriction</div>
          </div>
          <div className="p-3 border rounded bg-gray-50">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">Banned</span>
            <div className="text-sm text-gray-600 mt-2">Permanent access revoked</div>
          </div>
        </div>
      </div>

      {/* Platform Access Control */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Platform Access Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 border rounded">
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Marketplace</span>
            <div className="text-sm text-gray-600 mt-2">Buy/browse products</div>
          </div>
          <div className="p-3 border rounded">
            <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Seller</span>
            <div className="text-sm text-gray-600 mt-2">Sell products, manage listings</div>
          </div>
          <div className="p-3 border rounded">
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Social</span>
            <div className="text-sm text-gray-600 mt-2">Social platform features</div>
          </div>
        </div>
      </div>

      {/* User Management Actions */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded hover:bg-green-50 border-green-200">
              <div className="font-medium text-green-700">Verify User</div>
              <div className="text-sm text-gray-500">Approve pending verification</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="font-medium text-yellow-700">Suspend User</div>
              <div className="text-sm text-gray-500">Temporary access restriction</div>
            </button>
          </div>
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
              <div className="font-medium text-blue-700">Restore User</div>
              <div className="text-sm text-gray-500">Remove suspension</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
              <div className="font-medium text-red-700">Ban User</div>
              <div className="text-sm text-gray-500">Permanent access revocation</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users