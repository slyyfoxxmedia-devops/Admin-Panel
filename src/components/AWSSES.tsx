const AWSSES = () => {
  return (
    <div className="space-y-6">
      {/* Domain Verification Requirements */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Domain Verification Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-blue-50">
            <h4 className="font-semibold text-blue-700 mb-2">DKIM Authentication</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Required for all sending domains</div>
              <div>• 2048-bit RSA key minimum</div>
              <div>• DNS record verification needed</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">SPF Record</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Must include SES servers</div>
              <div>• "include:amazonses.com" required</div>
              <div>• Hard fail (-all) recommended</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-purple-50">
            <h4 className="font-semibold text-purple-700 mb-2">DMARC Policy</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Alignment policy: strict</div>
              <div>• Quarantine/reject for failures</div>
              <div>• Aggregate reports enabled</div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Configuration Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Configuration Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-3 border rounded">
              <div className="font-medium">Default From Email</div>
              <div className="text-sm text-gray-600 mt-1">noreply@slyyfoxmedia.com</div>
            </div>
            <div className="p-3 border rounded">
              <div className="font-medium">Default From Name</div>
              <div className="text-sm text-gray-600 mt-1">SlyyFoxxMedia</div>
            </div>
            <div className="p-3 border rounded">
              <div className="font-medium">Configuration Set</div>
              <div className="text-sm text-gray-600 mt-1">default-config-set</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-3 border rounded">
              <div className="font-medium">Sending Limits</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• Daily quota: 50,000 emails</div>
                <div>• Send rate: 14 emails/second</div>
                <div>• Burst capacity: 100 emails</div>
              </div>
            </div>
            <div className="p-3 border rounded">
              <div className="font-medium">Reputation Monitoring</div>
              <div className="text-sm text-gray-600 mt-1">
                <div>• Bounce rate threshold: &lt;5%</div>
                <div>• Complaint rate threshold: &lt;0.1%</div>
                <div>• Auto-pause if exceeded</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suppression List Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Suppression List Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded bg-red-50">
            <h4 className="font-semibold text-red-700 mb-2">Auto-Suppression Triggers</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Hard bounces (permanent failures)</div>
              <div>• Spam complaints</div>
              <div>• Unsubscribe requests</div>
              <div>• Multiple soft bounces (5+)</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-yellow-50">
            <h4 className="font-semibold text-yellow-700 mb-2">Suppression Management</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Global suppression list maintained</div>
              <div>• Manual additions allowed</div>
              <div>• CSV import/export supported</div>
              <div>• Automatic cleanup after 365 days</div>
            </div>
          </div>
        </div>
      </div>

      {/* SMTP Configuration */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">SMTP Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded bg-blue-50">
            <h4 className="font-semibold text-blue-700 mb-2">Connection Settings</h4>
            <div className="space-y-2 text-sm">
              <div><strong>Server:</strong> email-smtp.us-east-1.amazonaws.com</div>
              <div><strong>Port:</strong> 587 (TLS) / 465 (SSL)</div>
              <div><strong>Encryption:</strong> STARTTLS required</div>
              <div><strong>Authentication:</strong> Username/Password</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">Security Requirements</h4>
            <div className="space-y-2 text-sm">
              <div>• TLS 1.2 minimum encryption</div>
              <div>• IAM credentials rotation (90 days)</div>
              <div>• IP allowlist recommended</div>
              <div>• Connection rate limiting enabled</div>
            </div>
          </div>
        </div>
      </div>

      {/* SES Management Actions */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">SES Management Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
            <div className="font-medium text-blue-700">Verify Domain</div>
            <div className="text-sm text-gray-500">Add new sending domain</div>
          </button>
          <button className="p-3 text-left border rounded hover:bg-green-50 border-green-200">
            <div className="font-medium text-green-700">Manage Suppression</div>
            <div className="text-sm text-gray-500">Update suppression list</div>
          </button>
          <button className="p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
            <div className="font-medium text-yellow-700">Generate SMTP Credentials</div>
            <div className="text-sm text-gray-500">Create new SMTP access</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AWSSES