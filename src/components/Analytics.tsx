const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Page Views</h3>
          <p className="text-3xl font-bold text-burnt-orange">2.4M</p>
          <p className="text-sm text-gray-500">+18.2% vs last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Conversions</h3>
          <p className="text-3xl font-bold text-burnt-orange">12.8%</p>
          <p className="text-sm text-gray-500">+2.1% vs last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Avg Session</h3>
          <p className="text-3xl font-bold text-burnt-orange">4m 32s</p>
          <p className="text-sm text-gray-500">+0.8% vs last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Bounce Rate</h3>
          <p className="text-3xl font-bold text-red-500">24.1%</p>
          <p className="text-sm text-gray-500">-3.2% vs last month</p>
        </div>
      </div>

      {/* Platform Analytics */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Platform Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Marketplace</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Users:</span>
                <span className="font-medium">8,432</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Sales:</span>
                <span className="font-medium">$23,891</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Conversion:</span>
                <span className="font-medium">15.2%</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Seller Dashboard</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Active Sellers:</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Products:</span>
                <span className="font-medium">5,678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Avg Revenue:</span>
                <span className="font-medium">$892</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Landing Page</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Visitors:</span>
                <span className="font-medium">45,231</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Signups:</span>
                <span className="font-medium">2,891</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Conversion:</span>
                <span className="font-medium">6.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Traffic Sources</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
              <span className="text-sm font-medium">Organic Search</span>
            </div>
            <div className="text-right">
              <span className="font-bold">42.3%</span>
              <span className="text-sm text-gray-500 ml-2">18,921 users</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
              <span className="text-sm font-medium">Direct</span>
            </div>
            <div className="text-right">
              <span className="font-bold">28.7%</span>
              <span className="text-sm text-gray-500 ml-2">12,834 users</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
              <span className="text-sm font-medium">Social Media</span>
            </div>
            <div className="text-right">
              <span className="font-bold">18.9%</span>
              <span className="text-sm text-gray-500 ml-2">8,456 users</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-500 rounded mr-3"></div>
              <span className="text-sm font-medium">Referral</span>
            </div>
            <div className="text-right">
              <span className="font-bold">10.1%</span>
              <span className="text-sm text-gray-500 ml-2">4,521 users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics