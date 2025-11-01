const Licensing = () => {
  return (
    <div className="space-y-6">
      {/* License Types */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Available License Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border rounded bg-blue-50">
            <h4 className="font-semibold text-blue-700 mb-2">Perpetual</h4>
            <div className="text-sm text-gray-600">No expiration, one-time purchase</div>
          </div>
          <div className="p-4 border rounded bg-purple-50">
            <h4 className="font-semibold text-purple-700 mb-2">Subscription</h4>
            <div className="text-sm text-gray-600">Auto-renewal, monthly/annual</div>
          </div>
          <div className="p-4 border rounded bg-orange-50">
            <h4 className="font-semibold text-orange-700 mb-2">Trial</h4>
            <div className="text-sm text-gray-600">14-30 days, limited features</div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">Single-Use</h4>
            <div className="text-sm text-gray-600">One-time activation only</div>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">License Security Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded bg-green-50">
              <span className="font-medium">Token Encryption</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded bg-green-50">
              <span className="font-medium">Device Binding</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded bg-yellow-50">
              <span className="font-medium">Anti-Piracy Detection</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Monitoring</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded bg-green-50">
              <span className="font-medium">Usage Validation API</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Controls */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">License Feature Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="font-medium">Geographic Restrictions</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Enabled</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="font-medium">Concurrent User Limits</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Enabled</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="font-medium">License Transfers</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Restricted</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="font-medium">Auto-Renewal</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* License Management Actions */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">License Management Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
              <div className="font-medium text-blue-700">Generate License</div>
              <div className="text-sm text-gray-500">Create new license token</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="font-medium text-yellow-700">Extend License</div>
              <div className="text-sm text-gray-500">Extend expiration dates</div>
            </button>
          </div>
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
              <div className="font-medium text-red-700">Revoke License</div>
              <div className="text-sm text-gray-500">Disable unauthorized usage</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-green-50 border-green-200">
              <div className="font-medium text-green-700">Bulk Operations</div>
              <div className="text-sm text-gray-500">Mass license management</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Licensing