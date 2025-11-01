const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Platform Status - Defines which platforms are operational */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Platform Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded">
            <span className="text-sm font-medium">Marketplace</span>
            <span className="text-green-600 font-bold">Online</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded">
            <span className="text-sm font-medium">Seller Dashboard</span>
            <span className="text-green-600 font-bold">Online</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
            <span className="text-sm font-medium">Social Platform</span>
            <span className="text-yellow-600 font-bold">Building</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
            <span className="text-sm font-medium">Fantasy Sports</span>
            <span className="text-yellow-600 font-bold">Building</span>
          </div>
        </div>
      </div>

      {/* Subscription Actions - Defines available subscription operations */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Subscription Actions</h3>
        <div className="space-y-3">
          <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
            <div className="font-medium text-blue-700">Process Subscriptions</div>
          </button>
          <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
            <div className="font-medium text-yellow-700">Retry Failed Payments</div>
          </button>
          <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
            <div className="font-medium text-red-700">Cancel Subscriptions</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard