import { useState } from 'react'

const SystemHealth = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const systemStatus = {
    overall: 'Healthy',
    uptime: '99.97%',
    responseTime: '145ms',
    activeUsers: '12,847',
    errorRate: '0.03%'
  }

  const services = [
    { name: 'API Gateway', status: 'Healthy', uptime: '99.99%', responseTime: '89ms', lastCheck: '30s ago' },
    { name: 'User Management', status: 'Healthy', uptime: '99.95%', responseTime: '124ms', lastCheck: '45s ago' },
    { name: 'Marketplace', status: 'Warning', uptime: '99.87%', responseTime: '234ms', lastCheck: '1m ago' },
    { name: 'Payment Processing', status: 'Healthy', uptime: '99.98%', responseTime: '156ms', lastCheck: '30s ago' },
    { name: 'Email Service', status: 'Healthy', uptime: '99.96%', responseTime: '78ms', lastCheck: '45s ago' },
    { name: 'File Storage', status: 'Healthy', uptime: '99.99%', responseTime: '67ms', lastCheck: '30s ago' },
    { name: 'Database', status: 'Healthy', uptime: '99.98%', responseTime: '45ms', lastCheck: '30s ago' },
    { name: 'CDN', status: 'Critical', uptime: '98.23%', responseTime: '456ms', lastCheck: '2m ago' }
  ]

  const infrastructure = [
    { component: 'Load Balancer', status: 'Healthy', cpu: '23%', memory: '45%', connections: '2,847' },
    { component: 'Web Servers (3)', status: 'Healthy', cpu: '67%', memory: '78%', connections: '8,234' },
    { component: 'Database Primary', status: 'Healthy', cpu: '34%', memory: '56%', connections: '145' },
    { component: 'Database Replica', status: 'Healthy', cpu: '28%', memory: '52%', connections: '89' },
    { component: 'Redis Cache', status: 'Warning', cpu: '89%', memory: '92%', connections: '1,234' },
    { component: 'Background Workers', status: 'Healthy', cpu: '45%', memory: '67%', connections: '23' }
  ]

  const alerts = [
    { id: 1, severity: 'Critical', message: 'CDN response time above threshold', service: 'CDN', timestamp: '2024-01-15 15:45:00', status: 'Active' },
    { id: 2, severity: 'Warning', message: 'Redis memory usage high', service: 'Cache', timestamp: '2024-01-15 15:30:00', status: 'Investigating' },
    { id: 3, severity: 'Warning', message: 'Marketplace API slow response', service: 'Marketplace', timestamp: '2024-01-15 15:15:00', status: 'Acknowledged' },
    { id: 4, severity: 'Info', message: 'Scheduled maintenance completed', service: 'Database', timestamp: '2024-01-15 14:00:00', status: 'Resolved' }
  ]

  const metrics = [
    { name: 'CPU Usage', value: '67%', trend: '+5%', status: 'normal' },
    { name: 'Memory Usage', value: '78%', trend: '+12%', status: 'warning' },
    { name: 'Disk Usage', value: '45%', trend: '+2%', status: 'normal' },
    { name: 'Network I/O', value: '234 MB/s', trend: '+8%', status: 'normal' },
    { name: 'Database Connections', value: '234/500', trend: '+15%', status: 'normal' },
    { name: 'Queue Length', value: '12', trend: '-23%', status: 'good' }
  ]

  return (
    <div className="space-y-6">
      {/* System Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Overall Status</h3>
          <p className="text-3xl font-bold text-green-600">{systemStatus.overall}</p>
          <p className="text-sm text-green-600">All systems operational</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Uptime</h3>
          <p className="text-3xl font-bold text-blue-600">{systemStatus.uptime}</p>
          <p className="text-sm text-blue-600">Last 30 days</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Response Time</h3>
          <p className="text-3xl font-bold text-purple-600">{systemStatus.responseTime}</p>
          <p className="text-sm text-purple-600">Average</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800">Active Users</h3>
          <p className="text-3xl font-bold text-orange-600">{systemStatus.activeUsers}</p>
          <p className="text-sm text-orange-600">Currently online</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800">Error Rate</h3>
          <p className="text-3xl font-bold text-red-600">{systemStatus.errorRate}</p>
          <p className="text-sm text-red-600">Last 24 hours</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'services', label: 'Services', icon: '🔧' },
            { id: 'infrastructure', label: 'Infrastructure', icon: '🖥️' },
            { id: 'alerts', label: 'Alerts', icon: '🚨' },
            { id: 'metrics', label: 'Metrics', icon: '📈' }
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

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">System Performance (24h)</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Performance Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Traffic & Load</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Traffic Chart Placeholder]
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Status Check</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <div className="font-medium">API Services</div>
                <div className="text-sm text-green-600">All operational</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <div className="font-medium">Database</div>
                <div className="text-sm text-green-600">Healthy</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">⚠️</div>
                <div className="font-medium">Cache Layer</div>
                <div className="text-sm text-yellow-600">High usage</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl mb-2">❌</div>
                <div className="font-medium">CDN</div>
                <div className="text-sm text-red-600">Degraded</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services */}
      {activeTab === 'services' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Service Health Status</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uptime</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Response Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Check</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {services.map((service, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{service.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        service.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                        service.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{service.uptime}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{service.responseTime}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{service.lastCheck}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Details</button>
                      <button className="text-green-600 hover:text-green-800">Test</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Infrastructure */}
      {activeTab === 'infrastructure' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Infrastructure Components</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Component</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CPU Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Memory Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Connections</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {infrastructure.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.component}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'Healthy' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              parseInt(item.cpu) > 80 ? 'bg-red-500' :
                              parseInt(item.cpu) > 60 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: item.cpu }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{item.cpu}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              parseInt(item.memory) > 80 ? 'bg-red-500' :
                              parseInt(item.memory) > 60 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: item.memory }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{item.memory}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.connections}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Monitor</button>
                      <button className="text-green-600 hover:text-green-800">Scale</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Alerts */}
      {activeTab === 'alerts' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">System Alerts</h3>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Severities</option>
                  <option>Critical</option>
                  <option>Warning</option>
                  <option>Info</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Acknowledged</option>
                  <option>Resolved</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Severity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {alerts.map((alert) => (
                  <tr key={alert.id}>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        alert.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                        alert.severity === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {alert.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{alert.message}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{alert.service}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{alert.timestamp}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        alert.status === 'Active' ? 'bg-red-100 text-red-800' :
                        alert.status === 'Investigating' ? 'bg-yellow-100 text-yellow-800' :
                        alert.status === 'Acknowledged' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {alert.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Acknowledge</button>
                      <button className="text-green-600 hover:text-green-800">Resolve</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Metrics */}
      {activeTab === 'metrics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow border p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{metric.name}</h4>
                  <span className={`text-sm ${
                    metric.status === 'good' ? 'text-green-600' :
                    metric.status === 'warning' ? 'text-yellow-600' :
                    'text-gray-600'
                  }`}>
                    {metric.trend}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className={`text-sm ${
                  metric.status === 'good' ? 'text-green-600' :
                  metric.status === 'warning' ? 'text-yellow-600' :
                  'text-gray-600'
                }`}>
                  {metric.status === 'good' ? 'Optimal' :
                   metric.status === 'warning' ? 'Needs attention' :
                   'Normal'}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Performance Trends</h3>
            <div className="h-64 flex items-center justify-center text-gray-500">
              [Performance Metrics Chart Placeholder]
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SystemHealth