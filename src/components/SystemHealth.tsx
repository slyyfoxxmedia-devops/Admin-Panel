import { useState } from 'react'

const SystemHealth = () => {
  const [activeTab, setActiveTab] = useState('monitoring-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'monitoring-rules', label: 'Monitoring Rules', icon: '📊' },
            { id: 'alert-thresholds', label: 'Alert Thresholds', icon: '🚨' },
            { id: 'health-checks', label: 'Health Checks', icon: '🔍' },
            { id: 'maintenance-windows', label: 'Maintenance Windows', icon: '🛠️' }
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

      {/* Monitoring Rules */}
      {activeTab === 'monitoring-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">System Monitoring Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Critical Services to Monitor</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">Tier 1 - Critical</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• API Gateway (99.99% uptime required)</li>
                    <li>• Database Primary (99.95% uptime required)</li>
                    <li>• Payment Processing (99.99% uptime required)</li>
                    <li>• User Authentication (99.99% uptime required)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Tier 2 - Important</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Marketplace Services (99.9% uptime required)</li>
                    <li>• Email Service (99.5% uptime required)</li>
                    <li>• File Storage (99.9% uptime required)</li>
                    <li>• Search Index (99.5% uptime required)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Monitoring Intervals</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Critical services → 30-second health checks</li>
                <li>• Important services → 1-minute health checks</li>
                <li>• Supporting services → 5-minute health checks</li>
                <li>• Infrastructure metrics → 1-minute collection</li>
                <li>• Application logs → Real-time streaming</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Performance Metrics to Track</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Response Time</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Throughput</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">Error Rate</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded">CPU Usage</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Memory Usage</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded">Disk I/O</span>
              </div>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Monitoring Rules
            </button>
          </div>
        </div>
      )}

      {/* Alert Thresholds */}
      {activeTab === 'alert-thresholds' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Alert Threshold Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Performance Thresholds</h4>
              <div className="space-y-3">
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium">Response Time</h5>
                    <span className="text-sm text-gray-500">API endpoints</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Warning: 500ms</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded">Critical: 1000ms</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Emergency: 2000ms</span>
                  </div>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium">Error Rate</h5>
                    <span className="text-sm text-gray-500">Per service</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Warning: 1%</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded">Critical: 5%</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Emergency: 10%</span>
                  </div>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium">CPU Usage</h5>
                    <span className="text-sm text-gray-500">Per server</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Warning: 70%</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded">Critical: 85%</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Emergency: 95%</span>
                  </div>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium">Memory Usage</h5>
                    <span className="text-sm text-gray-500">Per server</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Warning: 75%</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded">Critical: 90%</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Emergency: 98%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Alert Escalation Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Warning alerts → DevOps team (email)</li>
                <li>• Critical alerts → DevOps team + Engineering manager (email + Slack)</li>
                <li>• Emergency alerts → All engineering + CTO (email + SMS + phone call)</li>
                <li>• Escalation after 15 minutes if unacknowledged</li>
                <li>• Auto-resolve alerts when metrics return to normal</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Alert Thresholds
            </button>
          </div>
        </div>
      )}

      {/* Health Checks */}
      {activeTab === 'health-checks' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Health Check Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Health Check Types</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium">Endpoint Health Checks</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• GET /health → Basic service status</li>
                    <li>• GET /health/deep → Database connectivity</li>
                    <li>• GET /health/ready → Service readiness</li>
                    <li>• GET /health/live → Service liveness</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Infrastructure Checks</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• TCP port connectivity</li>
                    <li>• SSL certificate validity</li>
                    <li>• DNS resolution</li>
                    <li>• Load balancer status</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Health Check Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Response time must be under 5 seconds</li>
                <li>• HTTP status code 200 for healthy services</li>
                <li>• JSON response with status and timestamp</li>
                <li>• Include dependency status in deep health checks</li>
                <li>• Graceful degradation for partial failures</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Failure Handling Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 3 consecutive failures trigger alert</li>
                <li>• 5 consecutive failures mark service as down</li>
                <li>• Auto-retry failed checks after 30 seconds</li>
                <li>• Remove from load balancer after 2 failures</li>
                <li>• Require 2 successful checks before marking healthy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Health Check Endpoints</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>API Gateway</span>
                  <span className="text-blue-600">https://api.slyyfox.com/health</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>User Service</span>
                  <span className="text-blue-600">https://users.slyyfox.com/health</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>Marketplace</span>
                  <span className="text-blue-600">https://marketplace.slyyfox.com/health</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>Payment Service</span>
                  <span className="text-blue-600">https://payments.slyyfox.com/health</span>
                </div>
              </div>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Health Checks
            </button>
          </div>
        </div>
      )}

      {/* Maintenance Windows */}
      {activeTab === 'maintenance-windows' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Maintenance Window Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Scheduled Maintenance Windows</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Regular Maintenance</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Every Sunday 2:00 AM - 4:00 AM UTC</li>
                    <li>• Database maintenance and optimization</li>
                    <li>• System updates and patches</li>
                    <li>• Performance tuning</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Emergency Maintenance</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Security patches (immediate deployment)</li>
                    <li>• Critical bug fixes (within 4 hours)</li>
                    <li>• Infrastructure failures (immediate response)</li>
                    <li>• Data corruption issues (immediate response)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Maintenance Approval Process</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Regular maintenance → Engineering manager approval</li>
                <li>• Major updates → CTO + Engineering manager approval</li>
                <li>• Emergency maintenance → CTO approval (can be retroactive)</li>
                <li>• Customer-facing changes → Product manager approval required</li>
                <li>• All maintenance → 48-hour advance notice to customers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Maintenance Communication Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Status page update 24 hours before maintenance</li>
                <li>• Email notification to enterprise customers</li>
                <li>• In-app notification for all users</li>
                <li>• Social media announcement for major maintenance</li>
                <li>• Real-time updates during maintenance window</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Rollback Procedures</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Automated rollback if error rate exceeds 5%</li>
                <li>• Manual rollback trigger available to on-call engineer</li>
                <li>• Database backup before any schema changes</li>
                <li>• Blue-green deployment for zero-downtime updates</li>
                <li>• Rollback completion within 15 minutes</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Maintenance Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SystemHealth