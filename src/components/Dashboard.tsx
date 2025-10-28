const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-3xl font-bold text-burnt-orange">12,543</p>
          <p className="text-sm text-gray-500">+5.2% this month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-3xl font-bold text-burnt-orange">$45,231</p>
          <p className="text-sm text-gray-500">+12.8% this month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Active Licenses</h3>
          <p className="text-3xl font-bold text-burnt-orange">8,921</p>
          <p className="text-sm text-gray-500">+3.1% this month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">System Health</h3>
          <p className="text-3xl font-bold text-green-500">99.9%</p>
          <p className="text-sm text-gray-500">All systems operational</p>
        </div>
      </div>

      {/* Platform Status */}
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

      {/* AWS Services */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">AWS Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700">S3 Storage</h4>
            <p className="text-2xl font-bold text-burnt-orange">2.3 TB</p>
            <p className="text-sm text-gray-500">$89.50/month</p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700">SES Emails</h4>
            <p className="text-2xl font-bold text-burnt-orange">45.2K</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700">API Calls</h4>
            <p className="text-2xl font-bold text-burnt-orange">1.2M</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>
        </div>
      </div>

      {/* Payment Processing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Actions</h3>
          <div className="space-y-3">
            <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-red-700">Process Refunds</div>
                  <div className="text-sm text-gray-500">8 refund requests pending</div>
                </div>
                <span className="text-red-600 font-bold">$2,134</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-yellow-700">Retry Failed Payments</div>
                  <div className="text-sm text-gray-500">12 failed transactions</div>
                </div>
                <span className="text-yellow-600 font-bold">$3,891</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-green-50 border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-green-700">Process Seller Payouts</div>
                  <div className="text-sm text-gray-500">45 sellers awaiting payout</div>
                </div>
                <span className="text-green-600 font-bold">$23,456</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-700">Handle Disputes</div>
                  <div className="text-sm text-gray-500">3 payment disputes</div>
                </div>
                <span className="text-blue-600 font-bold">$1,299</span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="text-sm">Refund processed: $299.99</span>
              <span className="text-xs text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="text-sm">Seller payout: $1,234.56</span>
              <span className="text-xs text-gray-500">5 min ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="text-sm">Payment retry successful: $149.99</span>
              <span className="text-xs text-gray-500">8 min ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="text-sm">New user registration: john.doe@email.com</span>
              <span className="text-xs text-gray-500">12 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard