const Billing = () => {
  return (
    <div className="space-y-6">
      {/* Accepted Payment Methods */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Accepted Payment Methods</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 border rounded bg-blue-50">
            <div className="flex items-center">
              <span className="text-2xl mr-2">💳</span>
              <span className="font-medium">Credit Cards</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">Visa, MasterCard, Amex via Stripe</div>
          </div>
          <div className="p-3 border rounded bg-yellow-50">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏦</span>
              <span className="font-medium">Bank Transfer</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">ACH via Stripe</div>
          </div>
          <div className="p-3 border rounded bg-green-50">
            <div className="flex items-center">
              <span className="text-2xl mr-2">💰</span>
              <span className="font-medium">Digital Wallet</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">Apple Pay, Google Pay via Stripe</div>
          </div>
        </div>
      </div>

      {/* Transaction Types */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Transaction Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 border rounded">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">Subscription</span>
            <div className="text-sm text-gray-600 mt-2">Recurring monthly/annual payments</div>
          </div>
          <div className="p-3 border rounded">
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Cancellation</span>
            <div className="text-sm text-gray-600 mt-2">Subscription cancellations</div>
          </div>
        </div>
      </div>

      {/* Billing Actions */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Billing Operations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
              <div className="font-medium text-blue-700">Process Subscriptions</div>
              <div className="text-sm text-gray-500">Handle recurring payments</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
              <div className="font-medium text-red-700">Cancel Subscriptions</div>
              <div className="text-sm text-gray-500">Process cancellation requests</div>
            </button>
          </div>
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="font-medium text-yellow-700">Retry Failed Payments</div>
              <div className="text-sm text-gray-500">Handle failed subscription charges</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-green-50 border-green-200">
              <div className="font-medium text-green-700">Stripe Configuration</div>
              <div className="text-sm text-gray-500">Manage Stripe settings</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing