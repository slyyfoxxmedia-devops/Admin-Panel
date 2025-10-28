import { useState } from 'react'

const ReportsBI = () => {
  const [activeTab, setActiveTab] = useState('executive')

  const executiveMetrics = {
    totalRevenue: '$2.4M',
    monthlyGrowth: '+18.5%',
    activeUsers: '45,672',
    userGrowth: '+12.3%',
    totalSellers: '3,247',
    sellerGrowth: '+8.7%',
    avgOrderValue: '$127.50',
    conversionRate: '3.2%'
  }

  const revenueBreakdown = [
    { source: 'Marketplace Sales', amount: '$1,847,230', percentage: 77, growth: '+15.2%' },
    { source: 'Licensing Fees', amount: '$342,150', percentage: 14, growth: '+22.8%' },
    { source: 'Subscriptions', amount: '$156,890', percentage: 7, growth: '+31.4%' },
    { source: 'Premium Features', amount: '$53,730', percentage: 2, growth: '+45.1%' }
  ]

  const topProducts = [
    { name: 'Audio Production Pack', sales: 1247, revenue: '$156,875', category: 'Audio' },
    { name: 'Digital Art Bundle', sales: 892, revenue: '$89,200', category: 'Visual' },
    { name: 'Web Template Collection', sales: 634, revenue: '$63,400', category: 'Web' },
    { name: '3D Model Library', sales: 445, revenue: '$66,750', category: '3D' }
  ]

  const scheduledReports = [
    { name: 'Daily Revenue Summary', frequency: 'Daily', recipients: 'executives@slyyfox.com', lastSent: '2024-01-15 09:00' },
    { name: 'Weekly Seller Performance', frequency: 'Weekly', recipients: 'sales@slyyfox.com', lastSent: '2024-01-14 08:00' },
    { name: 'Monthly Financial Report', frequency: 'Monthly', recipients: 'finance@slyyfox.com', lastSent: '2024-01-01 10:00' },
    { name: 'Quarterly Business Review', frequency: 'Quarterly', recipients: 'board@slyyfox.com', lastSent: '2024-01-01 12:00' }
  ]

  const customDashboards = [
    { name: 'Executive Overview', owner: 'CEO', lastAccessed: '2024-01-15', widgets: 12 },
    { name: 'Sales Performance', owner: 'Sales Team', lastAccessed: '2024-01-15', widgets: 8 },
    { name: 'Product Analytics', owner: 'Product Team', lastAccessed: '2024-01-14', widgets: 15 },
    { name: 'Financial Metrics', owner: 'CFO', lastAccessed: '2024-01-13', widgets: 10 }
  ]

  return (
    <div className="space-y-6">
      {/* BI Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600">{executiveMetrics.totalRevenue}</p>
          <p className="text-sm text-green-600">{executiveMetrics.monthlyGrowth} this month</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Active Users</h3>
          <p className="text-3xl font-bold text-blue-600">{executiveMetrics.activeUsers}</p>
          <p className="text-sm text-blue-600">{executiveMetrics.userGrowth} growth</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Active Sellers</h3>
          <p className="text-3xl font-bold text-purple-600">{executiveMetrics.totalSellers}</p>
          <p className="text-sm text-purple-600">{executiveMetrics.sellerGrowth} growth</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800">Avg Order Value</h3>
          <p className="text-3xl font-bold text-orange-600">{executiveMetrics.avgOrderValue}</p>
          <p className="text-sm text-orange-600">{executiveMetrics.conversionRate} conversion</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'executive', label: 'Executive Dashboard', icon: '👔' },
            { id: 'revenue', label: 'Revenue Analysis', icon: '💰' },
            { id: 'products', label: 'Product Performance', icon: '📦' },
            { id: 'reports', label: 'Scheduled Reports', icon: '📅' },
            { id: 'dashboards', label: 'Custom Dashboards', icon: '📊' }
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

      {/* Executive Dashboard */}
      {activeTab === 'executive' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue Trend (Last 12 Months)</h3>
              <div className="h-64 flex items-center justify-center text-gray-500">
                [Revenue Trend Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">User Growth & Retention</h3>
              <div className="h-64 flex items-center justify-center text-gray-500">
                [User Growth Chart Placeholder]
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Geographic Distribution</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [World Map Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Key Performance Indicators</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Customer Acquisition Cost</span>
                  <span className="font-semibold">$23.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Customer Lifetime Value</span>
                  <span className="font-semibold">$847.30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Churn Rate</span>
                  <span className="font-semibold">2.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Net Promoter Score</span>
                  <span className="font-semibold">72</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Revenue Analysis */}
      {activeTab === 'revenue' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Revenue Breakdown by Source</h3>
            <div className="space-y-4">
              {revenueBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{item.source}</span>
                      <span className="text-sm text-gray-600">{item.amount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-burnt-orange h-2 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-sm font-medium">{item.percentage}%</div>
                    <div className="text-xs text-green-600">{item.growth}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Monthly Recurring Revenue</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [MRR Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue Forecast</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Forecast Chart Placeholder]
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Performance */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold">Top Performing Products</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Price</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topProducts.map((product, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          product.category === 'Audio' ? 'bg-blue-100 text-blue-800' :
                          product.category === 'Visual' ? 'bg-green-100 text-green-800' :
                          product.category === 'Web' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.sales.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.revenue}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        ${(parseInt(product.revenue.replace(/[$,]/g, '')) / product.sales).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Category Performance</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Category Performance Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Seller Performance Distribution</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Seller Distribution Chart Placeholder]
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scheduled Reports */}
      {activeTab === 'reports' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Automated Reports</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Create Report
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Report Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipients</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Sent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scheduledReports.map((report, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{report.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        report.frequency === 'Daily' ? 'bg-green-100 text-green-800' :
                        report.frequency === 'Weekly' ? 'bg-blue-100 text-blue-800' :
                        report.frequency === 'Monthly' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {report.frequency}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{report.recipients}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{report.lastSent}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                      <button className="text-green-600 hover:text-green-800">Send Now</button>
                      <button className="text-red-600 hover:text-red-800">Disable</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Custom Dashboards */}
      {activeTab === 'dashboards' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Custom Dashboards</h3>
                <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                  Create Dashboard
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
              {customDashboards.map((dashboard, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{dashboard.name}</h4>
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Owner: {dashboard.owner}</div>
                    <div>Widgets: {dashboard.widgets}</div>
                    <div>Last accessed: {dashboard.lastAccessed}</div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 text-blue-600 hover:text-blue-800 text-sm">View</button>
                    <button className="flex-1 text-green-600 hover:text-green-800 text-sm">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Dashboard Templates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">👔</div>
                <div className="font-medium">Executive Overview</div>
                <div className="text-sm text-gray-600">High-level KPIs and metrics</div>
                <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">Use Template</button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-medium">Financial Dashboard</div>
                <div className="text-sm text-gray-600">Revenue and financial metrics</div>
                <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">Use Template</button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📈</div>
                <div className="font-medium">Marketing Analytics</div>
                <div className="text-sm text-gray-600">Campaign and conversion metrics</div>
                <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">Use Template</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReportsBI