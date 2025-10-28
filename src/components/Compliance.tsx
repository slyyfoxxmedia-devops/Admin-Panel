const Compliance = () => {
  return (
    <div className="space-y-6">
      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">GDPR Compliance</h3>
          <p className="text-3xl font-bold text-green-500">98.2%</p>
          <p className="text-sm text-gray-500">Data protection score</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Tax Compliance</h3>
          <p className="text-3xl font-bold text-burnt-orange">Active</p>
          <p className="text-sm text-gray-500">All jurisdictions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Content Violations</h3>
          <p className="text-3xl font-bold text-red-500">12</p>
          <p className="text-sm text-gray-500">Pending review</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Legal Requests</h3>
          <p className="text-3xl font-bold text-yellow-500">3</p>
          <p className="text-sm text-gray-500">Active cases</p>
        </div>
      </div>

      {/* Regulatory Compliance */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Regulatory Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">GDPR (EU)</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Data Processing:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Compliant</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Cookie Consent:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Data Retention:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Configured</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">CCPA (California)</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Privacy Rights:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Enabled</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Data Sales Opt-out:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Disclosure:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Updated</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">PCI DSS</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Payment Security:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Level 1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Encryption:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">AES-256</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Audit:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Due Q2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Moderation */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Content Moderation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-red-700">Copyright Violations</div>
                  <div className="text-sm text-gray-500">8 DMCA takedown requests</div>
                </div>
                <span className="text-red-600 font-bold">Review</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-yellow-700">Adult Content</div>
                  <div className="text-sm text-gray-500">3 flagged products</div>
                </div>
                <span className="text-yellow-600 font-bold">Review</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-orange-50 border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-orange-700">Spam Reports</div>
                  <div className="text-sm text-gray-500">1 seller flagged</div>
                </div>
                <span className="text-orange-600 font-bold">Investigate</span>
              </div>
            </button>
          </div>
          <div className="space-y-3">
            <div className="p-3 border rounded bg-gray-50">
              <div className="font-medium text-gray-700">Auto-Moderation Stats</div>
              <div className="text-sm text-gray-600 mt-2 space-y-1">
                <div className="flex justify-between">
                  <span>Content Scanned:</span>
                  <span className="font-medium">2,341 items</span>
                </div>
                <div className="flex justify-between">
                  <span>Auto-Approved:</span>
                  <span className="font-medium text-green-600">2,298 (98.2%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Flagged for Review:</span>
                  <span className="font-medium text-yellow-600">43 (1.8%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Compliance */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Tax Compliance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">US Sales Tax</div>
            <div className="text-sm text-gray-500 mt-1">
              <div>States: 45/50 configured</div>
              <div>Rate Updates: Auto</div>
            </div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">EU VAT</div>
            <div className="text-sm text-gray-500 mt-1">
              <div>Countries: 27/27 active</div>
              <div>MOSS Registration: Valid</div>
            </div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Digital Services Tax</div>
            <div className="text-sm text-gray-500 mt-1">
              <div>UK: 2% applied</div>
              <div>France: 3% applied</div>
            </div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Reporting</div>
            <div className="text-sm text-gray-500 mt-1">
              <div>Next Filing: Mar 15</div>
              <div>Status: Automated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Risk Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Legal Requests</h3>
          <div className="space-y-3">
            <div className="p-3 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-700">Subpoena #2024-001</div>
                  <div className="text-sm text-gray-500">User data request - Law enforcement</div>
                  <div className="text-xs text-gray-400">Due: Jan 30, 2024</div>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
              </div>
            </div>
            <div className="p-3 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-700">DMCA Takedown</div>
                  <div className="text-sm text-gray-500">Copyright infringement claim</div>
                  <div className="text-xs text-gray-400">Due: Jan 25, 2024</div>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Urgent</span>
              </div>
            </div>
            <div className="p-3 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-700">Privacy Request</div>
                  <div className="text-sm text-gray-500">GDPR data deletion request</div>
                  <div className="text-xs text-gray-400">Due: Feb 5, 2024</div>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">In Progress</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Assessment</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Overall Risk Score:</span>
              <span className="font-bold text-green-600">Low (2.3/10)</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Data Breach Risk:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Low</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Regulatory Risk:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Low</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Financial Risk:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Medium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Operational Risk:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Low</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-burnt-orange text-white rounded hover:bg-orange-600">
              Generate Risk Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compliance