const Email = () => {
  return (
    <div className="space-y-6">
      {/* Email Categories */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border rounded bg-blue-50">
            <h4 className="font-semibold text-blue-700 mb-2">Transactional</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Purchase receipts</div>
              <div>• Password resets</div>
              <div>• Account verification</div>
              <div>• Welcome emails</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-purple-50">
            <h4 className="font-semibold text-purple-700 mb-2">Marketing</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Newsletters</div>
              <div>• Promotional offers</div>
              <div>• Product updates</div>
              <div>• Abandoned cart recovery</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">Notifications</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Order updates</div>
              <div>• Security alerts</div>
              <div>• System messages</div>
              <div>• Subscription changes</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-orange-50">
            <h4 className="font-semibold text-orange-700 mb-2">Support</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Help requests</div>
              <div>• Feedback surveys</div>
              <div>• Onboarding series</div>
              <div>• Support responses</div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Templates */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Email Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Transactional Templates</h4>
            <div className="space-y-2">
              <div className="p-3 border rounded">
                <div className="font-medium text-sm">Purchase Receipt</div>
                <div className="text-xs text-gray-500">Order confirmation & receipt details</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-medium text-sm">Password Reset</div>
                <div className="text-xs text-gray-500">Secure password reset link</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-medium text-sm">Account Verification</div>
                <div className="text-xs text-gray-500">Email verification for new users</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-medium text-sm">Welcome Email</div>
                <div className="text-xs text-gray-500">New user onboarding</div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Marketing Templates</h4>
            <div className="space-y-2">
              <div className="p-3 border rounded">
                <div className="font-medium text-sm">Monthly Newsletter</div>
                <div className="text-xs text-gray-500">Platform updates & featured content</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-medium text-sm">Product Launch</div>
                <div className="text-xs text-gray-500">New product announcements</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-medium text-sm">Promotional Offer</div>
                <div className="text-xs text-gray-500">Sales & discount campaigns</div>
              </div>
              <div className="p-3 border rounded">
                <div className="font-medium text-sm">Subscription Reminder</div>
                <div className="text-xs text-gray-500">Renewal and billing notifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Configuration Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Configuration Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 border rounded bg-green-50">
              <div className="font-medium">Authentication Required</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• DKIM signing enabled</div>
                <div>• SPF record configured</div>
                <div>• DMARC policy active</div>
              </div>
            </div>
            <div className="p-3 border rounded bg-blue-50">
              <div className="font-medium">Delivery Rules</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• Rate limiting: 1000/hour</div>
                <div>• Bounce handling automated</div>
                <div>• Retry failed sends (3x)</div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 border rounded bg-yellow-50">
              <div className="font-medium">Compliance Rules</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• Unsubscribe link required</div>
                <div>• CAN-SPAM compliance</div>
                <div>• GDPR consent tracking</div>
              </div>
            </div>
            <div className="p-3 border rounded bg-purple-50">
              <div className="font-medium">Content Rules</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• No spam trigger words</div>
                <div>• Image-to-text ratio limits</div>
                <div>• Subject line length limits</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Actions */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Management Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
            <div className="font-medium text-blue-700">Send Test Email</div>
            <div className="text-sm text-gray-500">Test delivery & templates</div>
          </button>
          <button className="p-3 text-left border rounded hover:bg-green-50 border-green-200">
            <div className="font-medium text-green-700">Create Campaign</div>
            <div className="text-sm text-gray-500">New marketing campaign</div>
          </button>
          <button className="p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
            <div className="font-medium text-yellow-700">Manage Templates</div>
            <div className="text-sm text-gray-500">Edit email templates</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Email