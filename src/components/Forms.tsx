const Forms = () => {
  return (
    <div className="space-y-6">
      {/* Form Categories */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Allowed Form Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border rounded bg-blue-50">
            <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
              <span className="mr-2">📊</span>Project Management
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Task updates</div>
              <div>• Client feedback</div>
              <div>• Time reports</div>
              <div>• Project intake</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2 flex items-center">
              <span className="mr-2">📝</span>CMS & Content
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Contact forms</div>
              <div>• Newsletter signup</div>
              <div>• Content submission</div>
              <div>• Event registration</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-purple-50">
            <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
              <span className="mr-2">👥</span>Social Platform
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• User registration</div>
              <div>• Profile setup</div>
              <div>• Group applications</div>
              <div>• Report forms</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-orange-50">
            <h4 className="font-semibold text-orange-700 mb-2 flex items-center">
              <span className="mr-2">🛒</span>Marketplace
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Product reviews</div>
              <div>• Seller applications</div>
              <div>• Support tickets</div>
              <div>• Return requests</div>
            </div>
          </div>
        </div>
      </div>

      {/* Required Form Templates */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Form Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <div className="font-medium text-gray-700 mb-2">📊 Project Intake Form</div>
            <div className="text-sm text-gray-500 mb-2">Collect project requirements from new clients</div>
            <div className="text-xs text-blue-600">Required for PM Dashboard</div>
          </div>
          <div className="p-4 border rounded">
            <div className="font-medium text-gray-700 mb-2">📞 Contact Form</div>
            <div className="text-sm text-gray-500 mb-2">Standard contact form for client websites</div>
            <div className="text-xs text-green-600">Required for CMS</div>
          </div>
          <div className="p-4 border rounded">
            <div className="font-medium text-gray-700 mb-2">👤 Profile Setup</div>
            <div className="text-sm text-gray-500 mb-2">Complete user profile creation form</div>
            <div className="text-xs text-purple-600">Required for Social Platform</div>
          </div>
          <div className="p-4 border rounded">
            <div className="font-medium text-gray-700 mb-2">⭐ Product Review</div>
            <div className="text-sm text-gray-500 mb-2">Customer product review and rating form</div>
            <div className="text-xs text-orange-600">Required for Marketplace</div>
          </div>
          <div className="p-4 border rounded">
            <div className="font-medium text-gray-700 mb-2">🚨 Report Content</div>
            <div className="text-sm text-gray-500 mb-2">User reporting form for inappropriate content</div>
            <div className="text-xs text-red-600">Required for Compliance</div>
          </div>
          <div className="p-4 border rounded">
            <div className="font-medium text-gray-700 mb-2">🛒 Seller Application</div>
            <div className="text-sm text-gray-500 mb-2">New seller onboarding and verification</div>
            <div className="text-xs text-indigo-600">Required for Marketplace</div>
          </div>
        </div>
      </div>

      {/* Form Validation Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Form Validation Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 border rounded bg-green-50">
              <div className="font-medium">Required Fields</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• Email validation mandatory</div>
                <div>• Phone number format checking</div>
                <div>• Required field indicators (*)</div>
                <div>• CAPTCHA for public forms</div>
              </div>
            </div>
            <div className="p-3 border rounded bg-blue-50">
              <div className="font-medium">Data Protection</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• GDPR consent checkboxes</div>
                <div>• Data retention notices</div>
                <div>• Privacy policy links</div>
                <div>• Secure data transmission</div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 border rounded bg-yellow-50">
              <div className="font-medium">Submission Limits</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• Rate limiting: 5 submissions/hour</div>
                <div>• Duplicate submission prevention</div>
                <div>• File upload size limits (10MB)</div>
                <div>• Allowed file types only</div>
              </div>
            </div>
            <div className="p-3 border rounded bg-purple-50">
              <div className="font-medium">Integration Requirements</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• API endpoint validation</div>
                <div>• Database connection required</div>
                <div>• Email notification setup</div>
                <div>• Analytics tracking enabled</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Management Actions */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Form Management Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
            <div className="font-medium text-blue-700">Create Form</div>
            <div className="text-sm text-gray-500">Build new form from templates</div>
          </button>
          <button className="p-3 text-left border rounded hover:bg-green-50 border-green-200">
            <div className="font-medium text-green-700">Manage Templates</div>
            <div className="text-sm text-gray-500">Edit form templates</div>
          </button>
          <button className="p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
            <div className="font-medium text-yellow-700">Configure Integrations</div>
            <div className="text-sm text-gray-500">Set up platform connections</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Forms