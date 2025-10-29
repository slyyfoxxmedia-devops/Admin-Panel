import { useState } from 'react'

interface AutomationRule {
  id: string
  name: string
  trigger: string
  action: string
  status: 'active' | 'inactive' | 'paused'
  platform: string
  executions: number
  lastRun: string
  successRate: number
}

const AutomationRules = () => {
  const [rules] = useState<AutomationRule[]>([
    {
      id: 'user-onboarding',
      name: 'New User Onboarding',
      trigger: 'User Registration',
      action: 'Send Welcome Email + Grant Basic Roles',
      status: 'active',
      platform: 'Cross-Platform',
      executions: 1247,
      lastRun: '2024-01-15 14:32',
      successRate: 98
    },
    {
      id: 'subscription-upgrade',
      name: 'Subscription Upgrade Flow',
      trigger: 'Payment Successful',
      action: 'Update Roles + Send Confirmation + Update CRM',
      status: 'active',
      platform: 'Cross-Platform',
      executions: 342,
      lastRun: '2024-01-15 13:45',
      successRate: 95
    },
    {
      id: 'content-moderation',
      name: 'Auto Content Moderation',
      trigger: 'New Post Created',
      action: 'Scan Content + Flag if Inappropriate',
      status: 'active',
      platform: 'Social Platform',
      executions: 5678,
      lastRun: '2024-01-15 14:35',
      successRate: 92
    },
    {
      id: 'fantasy-scoring',
      name: 'Fantasy Score Updates',
      trigger: 'Game Completed',
      action: 'Calculate Scores + Update Leaderboards',
      status: 'active',
      platform: 'Fantasy Sports',
      executions: 234,
      lastRun: '2024-01-14 22:15',
      successRate: 99
    },
    {
      id: 'payment-failed',
      name: 'Failed Payment Recovery',
      trigger: 'Payment Failed',
      action: 'Send Notification + Retry Payment + Downgrade if Needed',
      status: 'paused',
      platform: 'Billing',
      executions: 89,
      lastRun: '2024-01-13 09:22',
      successRate: 67
    },
    {
      id: 'marketplace-inventory',
      name: 'Low Inventory Alert',
      trigger: 'Stock < 5 Items',
      action: 'Notify Seller + Update Product Status',
      status: 'active',
      platform: 'Marketplace',
      executions: 156,
      lastRun: '2024-01-15 11:18',
      successRate: 94
    }
  ])

  const [selectedRule, setSelectedRule] = useState<AutomationRule | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-red-100 text-red-800'
      case 'paused': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Cross-Platform': return '🌐'
      case 'Social Platform': return '👥'
      case 'Fantasy Sports': return '🏆'
      case 'Billing': return '💳'
      case 'Marketplace': return '🛒'
      case 'CMS': return '📝'
      default: return '⚡'
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Rules</p>
              <p className="text-2xl font-semibold">{rules.length}</p>
            </div>
            <span className="text-3xl">⚡</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Rules</p>
              <p className="text-2xl font-semibold text-green-600">
                {rules.filter(r => r.status === 'active').length}
              </p>
            </div>
            <span className="text-3xl">✅</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Executions</p>
              <p className="text-2xl font-semibold text-blue-600">
                {rules.reduce((acc, r) => acc + r.executions, 0).toLocaleString()}
              </p>
            </div>
            <span className="text-3xl">🔄</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Success Rate</p>
              <p className="text-2xl font-semibold text-purple-600">
                {Math.round(rules.reduce((acc, r) => acc + r.successRate, 0) / rules.length)}%
              </p>
            </div>
            <span className="text-3xl">📈</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rules List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-4 border-b flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Automation Rules</h3>
                <p className="text-sm text-gray-600 mt-1">Manage automated workflows and triggers</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                + New Rule
              </button>
            </div>
            
            <div className="divide-y">
              {rules.map((rule) => (
                <div
                  key={rule.id}
                  onClick={() => setSelectedRule(rule)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedRule?.id === rule.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getPlatformIcon(rule.platform)}</span>
                      <div>
                        <h4 className="font-medium">{rule.name}</h4>
                        <p className="text-sm text-gray-600">{rule.trigger} → {rule.action}</p>
                        <p className="text-xs text-gray-500 mt-1">{rule.platform}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-sm font-medium">{rule.executions}</div>
                        <div className="text-xs text-gray-500">Executions</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{rule.successRate}%</div>
                        <div className="text-xs text-gray-500">Success</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(rule.status)}`}>
                        {rule.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rule Details */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Rule Details</h3>
            </div>
            
            {selectedRule ? (
              <div className="p-4 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{getPlatformIcon(selectedRule.platform)}</span>
                  <div>
                    <h4 className="font-semibold">{selectedRule.name}</h4>
                    <p className="text-sm text-gray-600">{selectedRule.platform}</p>
                  </div>
                </div>
                
                <div>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(selectedRule.status)}`}>
                    {selectedRule.status}
                  </span>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Trigger</h5>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{selectedRule.trigger}</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Action</h5>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{selectedRule.action}</p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Performance</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Executions:</span>
                      <span className="font-medium">{selectedRule.executions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Success Rate:</span>
                      <span className="font-medium">{selectedRule.successRate}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Last Run:</span>
                      <span className="font-medium">{selectedRule.lastRun}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t space-y-2">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                    Edit Rule
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                    View Logs
                  </button>
                  <button className="w-full border border-yellow-300 text-yellow-700 py-2 px-4 rounded-md hover:bg-yellow-50 transition-colors">
                    {selectedRule.status === 'active' ? 'Pause' : 'Activate'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <span className="text-4xl mb-4 block">⚡</span>
                <p>Select a rule to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutomationRules