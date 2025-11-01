const SocialModeration = () => {
  return (
    <div className="space-y-6">
      {/* Content Moderation Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Content Moderation Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-red-50">
            <h4 className="font-semibold text-red-700 mb-2">Auto-Remove</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Spam content</div>
              <div>• Hate speech</div>
              <div>• NSFW content</div>
              <div>• Copyright violations</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-yellow-50">
            <h4 className="font-semibold text-yellow-700 mb-2">Flag for Review</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Suspicious links</div>
              <div>• Potential harassment</div>
              <div>• Misleading information</div>
              <div>• User reports (3+)</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">Auto-Approve</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Verified user content</div>
              <div>• Educational material</div>
              <div>• Business updates</div>
              <div>• Community guidelines compliant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-Filter Configuration */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Auto-Filter Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-3 border rounded">
              <div className="flex justify-between items-center">
                <span className="font-medium">Spam Detection</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Enabled</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">Sensitivity: High</div>
            </div>
            <div className="p-3 border rounded">
              <div className="flex justify-between items-center">
                <span className="font-medium">Hate Speech Detection</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Enabled</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">Sensitivity: High</div>
            </div>
            <div className="p-3 border rounded">
              <div className="flex justify-between items-center">
                <span className="font-medium">NSFW Content Detection</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Enabled</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">Sensitivity: Medium</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-3 border rounded">
              <div className="font-medium mb-2">Auto-Action Rules</div>
              <div className="space-y-1 text-sm text-gray-600">
                <div>• High confidence violations: Auto-remove</div>
                <div>• Medium confidence: Flag for review</div>
                <div>• Low confidence: Allow with monitoring</div>
                <div>• Repeat offenders: Escalate to suspension</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Profile Verification Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Profile Verification Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-blue-50">
            <h4 className="font-semibold text-blue-700 mb-2">Required Documentation</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Business registration certificate</div>
              <div>• Tax identification number</div>
              <div>• Proof of business address</div>
              <div>• Authorized representative ID</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">Verification Criteria</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Valid business registration</div>
              <div>• Active business operations</div>
              <div>• Legitimate business website</div>
              <div>• No fraud/scam history</div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Posting Approval Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Job Posting Approval Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">Auto-Approve Criteria</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Verified business profile</div>
              <div>• Complete job description</div>
              <div>• Legitimate salary range</div>
              <div>• Clear job requirements</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-red-50">
            <h4 className="font-semibold text-red-700 mb-2">Rejection Criteria</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Misleading job titles</div>
              <div>• Unrealistic salary offers</div>
              <div>• Discriminatory language</div>
              <div>• MLM/pyramid schemes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Moderation Actions */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Moderation Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
              <div className="font-medium text-blue-700">Review Content</div>
              <div className="text-sm text-gray-500">Manual content review</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-green-50 border-green-200">
              <div className="font-medium text-green-700">Approve Content</div>
              <div className="text-sm text-gray-500">Approve flagged content</div>
            </button>
          </div>
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
              <div className="font-medium text-red-700">Remove Content</div>
              <div className="text-sm text-gray-500">Delete violating content</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="font-medium text-yellow-700">Suspend User</div>
              <div className="text-sm text-gray-500">Temporary account suspension</div>
            </button>
          </div>
          <div className="space-y-2">
            <button className="w-full p-3 text-left border rounded hover:bg-purple-50 border-purple-200">
              <div className="font-medium text-purple-700">Handle Appeals</div>
              <div className="text-sm text-gray-500">Process user appeals</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-orange-50 border-orange-200">
              <div className="font-medium text-orange-700">Update Filters</div>
              <div className="text-sm text-gray-500">Modify auto-filter rules</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialModeration