import { useState } from 'react'

const ReportsBI = () => {
  const [activeTab, setActiveTab] = useState('report-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'report-rules', label: 'Report Rules', icon: '📋' },
            { id: 'dashboard-config', label: 'Dashboard Config', icon: '📊' },
            { id: 'data-access', label: 'Data Access', icon: '🔐' },
            { id: 'export-rules', label: 'Export Rules', icon: '📤' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'border-burnt-orange text-burnt-orange'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Report Rules */}
      {activeTab === 'report-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Automated Report Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Available Report Types</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium">Financial Reports</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Daily revenue summary</li>
                    <li>• Monthly financial statement</li>
                    <li>• Quarterly business review</li>
                    <li>• Annual tax report</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Performance Reports</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• User engagement metrics</li>
                    <li>• Seller performance analysis</li>
                    <li>• Product category trends</li>
                    <li>• Platform health status</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Report Frequency Rules</h4>
              <div className="grid grid-cols-4 gap-2 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Daily (9:00 AM)</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Weekly (Monday 8:00 AM)</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">Monthly (1st, 10:00 AM)</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded">Quarterly (1st, 12:00 PM)</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Report Distribution Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Executive reports → C-level executives only</li>
                <li>• Financial reports → Finance team + CEO + CFO</li>
                <li>• Performance reports → Department heads + managers</li>
                <li>• Compliance reports → Legal team + compliance officer</li>
                <li>• All reports → Archived in secure document storage</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Report Format Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• PDF format for executive summaries</li>
                <li>• Excel format for detailed financial data</li>
                <li>• CSV format for raw data exports</li>
                <li>• Interactive dashboards for real-time metrics</li>
                <li>• Email notifications for critical alerts</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Report Rules
            </button>
          </div>
        </div>
      )}

      {/* Dashboard Config */}
      {activeTab === 'dashboard-config' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Dashboard Configuration Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Available Dashboard Templates</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded p-3 text-center">
                  <div className="text-2xl mb-2">👔</div>
                  <h5 className="font-medium">Executive Overview</h5>
                  <p className="text-sm text-gray-600">High-level KPIs and strategic metrics</p>
                </div>
                <div className="border rounded p-3 text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <h5 className="font-medium">Financial Dashboard</h5>
                  <p className="text-sm text-gray-600">Revenue, costs, and financial health</p>
                </div>
                <div className="border rounded p-3 text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <h5 className="font-medium">Operations Dashboard</h5>
                  <p className="text-sm text-gray-600">Platform performance and user metrics</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Widget Categories</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Revenue Metrics</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">User Analytics</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">Performance KPIs</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded">Growth Indicators</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Alert Monitors</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded">Custom Charts</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Dashboard Access Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Executive dashboards → C-level access only</li>
                <li>• Department dashboards → Department heads + team members</li>
                <li>• Personal dashboards → Individual user access</li>
                <li>• Public dashboards → All authenticated users</li>
                <li>• Guest dashboards → Limited read-only access</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Refresh Rate Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Real-time widgets → 30-second refresh</li>
                <li>• Financial widgets → 15-minute refresh</li>
                <li>• Performance widgets → 5-minute refresh</li>
                <li>• Historical widgets → Daily refresh</li>
                <li>• Static widgets → Manual refresh only</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Dashboard Config
            </button>
          </div>
        </div>
      )}

      {/* Data Access */}
      {activeTab === 'data-access' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Data Access Control Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Data Classification Levels</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">Confidential</h5>
                  <p className="text-sm text-gray-600">Financial data, user PII, business strategy</p>
                  <p className="text-xs text-gray-500">Access: C-level executives only</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Restricted</h5>
                  <p className="text-sm text-gray-600">Detailed analytics, customer data, internal metrics</p>
                  <p className="text-xs text-gray-500">Access: Department heads + managers</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Internal</h5>
                  <p className="text-sm text-gray-600">General platform metrics, aggregated data</p>
                  <p className="text-xs text-gray-500">Access: All employees</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Public</h5>
                  <p className="text-sm text-gray-600">Platform status, general statistics</p>
                  <p className="text-xs text-gray-500">Access: All users</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Role-Based Access Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• CEO/CFO → Full access to all data levels</li>
                <li>• Department heads → Access to department + internal data</li>
                <li>• Managers → Access to team + internal data</li>
                <li>• Employees → Access to internal data only</li>
                <li>• Contractors → Access to public data only</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Data Retention Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Financial data → 7 years retention</li>
                <li>• User analytics → 2 years retention</li>
                <li>• Performance logs → 1 year retention</li>
                <li>• System logs → 6 months retention</li>
                <li>• Temporary reports → 30 days retention</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Access Rules
            </button>
          </div>
        </div>
      )}

      {/* Export Rules */}
      {activeTab === 'export-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Data Export Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Allowed Export Formats</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">PDF Reports</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Excel Spreadsheets</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">CSV Data Files</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded">JSON API Export</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Image Charts</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded">PowerPoint Slides</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Export Limitations</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Maximum 100,000 rows per CSV export</li>
                <li>• PDF reports limited to 50 pages</li>
                <li>• Excel files limited to 10MB</li>
                <li>• API exports rate-limited to 10 requests/hour</li>
                <li>• Bulk exports require manager approval</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Export Security Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All exports logged with user ID and timestamp</li>
                <li>• Confidential data exports require 2FA</li>
                <li>• Exported files auto-expire after 7 days</li>
                <li>• Email exports encrypted with password protection</li>
                <li>• Download links single-use only</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Scheduled Export Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Daily exports → Automated at 6:00 AM</li>
                <li>• Weekly exports → Every Monday at 7:00 AM</li>
                <li>• Monthly exports → 1st of month at 8:00 AM</li>
                <li>• Quarterly exports → Manual trigger only</li>
                <li>• Annual exports → December 31st at 11:59 PM</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Export Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReportsBI