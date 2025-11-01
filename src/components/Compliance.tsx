const Compliance = () => {
  return (
    <div className="space-y-6">
      {/* Regulatory Compliance Requirements */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Regulatory Compliance Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-blue-50">
            <h4 className="font-semibold text-blue-700 mb-2">GDPR (EU)</h4>
            <div className="space-y-2 text-sm">
              <div>• Data processing consent required</div>
              <div>• Cookie consent mandatory</div>
              <div>• Data retention limits enforced</div>
              <div>• Right to deletion honored</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-purple-50">
            <h4 className="font-semibold text-purple-700 mb-2">CCPA (California)</h4>
            <div className="space-y-2 text-sm">
              <div>• Privacy rights disclosure</div>
              <div>• Data sales opt-out available</div>
              <div>• Personal info categories listed</div>
              <div>• Consumer request portal active</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">PCI DSS</h4>
            <div className="space-y-2 text-sm">
              <div>• Payment data encrypted (AES-256)</div>
              <div>• Secure transmission protocols</div>
              <div>• Regular security audits</div>
              <div>• Access controls implemented</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Moderation Policies */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Content Moderation Policies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-red-50">
            <h4 className="font-semibold text-red-700 mb-2">Prohibited Content</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Copyrighted material without permission</div>
              <div>• Adult/explicit content</div>
              <div>• Hate speech or discrimination</div>
              <div>• Illegal or harmful content</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-yellow-50">
            <h4 className="font-semibold text-yellow-700 mb-2">Review Required</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Content flagged by users</div>
              <div>• AI-detected potential violations</div>
              <div>• First-time seller uploads</div>
              <div>• High-value transactions</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">Auto-Approved</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Trusted seller content</div>
              <div>• Pre-approved file types</div>
              <div>• Educational materials</div>
              <div>• Business templates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Compliance Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Compliance Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">US Sales Tax</div>
            <div className="text-sm text-gray-500 mt-1">
              <div>• State-specific rates applied</div>
              <div>• Automatic rate updates</div>
              <div>• Nexus threshold monitoring</div>
            </div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">EU VAT</div>
            <div className="text-sm text-gray-500 mt-1">
              <div>• Country-specific rates</div>
              <div>• MOSS registration maintained</div>
              <div>• B2B reverse charge applied</div>
            </div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Digital Services Tax</div>
            <div className="text-sm text-gray-500 mt-1">
              <div>• UK: 2% on digital services</div>
              <div>• France: 3% on digital services</div>
              <div>• Revenue threshold monitoring</div>
            </div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Reporting</div>
            <div className="text-sm text-gray-500 mt-1">
              <div>• Automated tax filings</div>
              <div>• Transaction record keeping</div>
              <div>• Audit trail maintenance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Response Procedures */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Response Procedures</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">DMCA Takedowns</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• 24-hour response time</div>
              <div>• Content removal upon valid claim</div>
              <div>• Counter-notification process</div>
              <div>• Repeat infringer policy</div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Legal Subpoenas</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Validity verification required</div>
              <div>• User notification (if permitted)</div>
              <div>• Minimal data disclosure</div>
              <div>• Legal counsel review</div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Privacy Requests</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Identity verification required</div>
              <div>• 30-day response window</div>
              <div>• Data portability provided</div>
              <div>• Deletion confirmation sent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compliance