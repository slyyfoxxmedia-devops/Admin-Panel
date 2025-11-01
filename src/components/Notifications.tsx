import { useState } from 'react'

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('alert-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'alert-rules', label: 'Alert Rules', icon: '⚙️' },
            { id: 'channels', label: 'Channel Config', icon: '📡' },
            { id: 'templates', label: 'Template Rules', icon: '📝' },
            { id: 'escalation', label: 'Escalation Rules', icon: '🚨' }
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

      {/* Alert Rules */}
      {activeTab === 'alert-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Notification Trigger Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">System Alert Categories</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">Critical Alerts</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• System outages or downtime</li>
                    <li>• Security breaches or intrusions</li>
                    <li>• Payment processing failures</li>
                    <li>• Data corruption or loss</li>
                    <li>• Legal compliance violations</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">High Priority Alerts</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Performance degradation</li>
                    <li>• High error rates (5%+)</li>
                    <li>• Failed login attempts (50+/hour)</li>
                    <li>• Large transactions ($10,000+)</li>
                    <li>• Content violation reports</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Trigger Conditions</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• System health drops below 95% → Critical alert</li>
                <li>• Response time exceeds 2000ms → High priority alert</li>
                <li>• Error rate exceeds 5% → High priority alert</li>
                <li>• Failed payments exceed 10/hour → High priority alert</li>
                <li>• CPU usage exceeds 90% → Medium priority alert</li>
                <li>• Memory usage exceeds 95% → High priority alert</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Alert Frequency Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Critical alerts → Immediate notification, no rate limiting</li>
                <li>• High priority → Maximum 1 per 5 minutes per rule</li>
                <li>• Medium priority → Maximum 1 per 15 minutes per rule</li>
                <li>• Low priority → Maximum 1 per hour per rule</li>
                <li>• Duplicate alerts suppressed for 30 minutes</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Alert Rules
            </button>
          </div>
        </div>
      )}

      {/* Channel Config */}
      {activeTab === 'channels' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Notification Channel Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Available Channels</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Email</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• SMTP server: smtp.slyyfox.com</li>
                    <li>• From: alerts@slyyfox.com</li>
                    <li>• HTML + plain text support</li>
                    <li>• Delivery confirmation required</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">SMS</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Provider: Twilio</li>
                    <li>• Character limit: 160</li>
                    <li>• Critical alerts only</li>
                    <li>• Delivery receipts enabled</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Slack</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Workspace: slyyfox-team</li>
                    <li>• Channels: #alerts, #critical</li>
                    <li>• Rich formatting support</li>
                    <li>• Thread replies for updates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Channel Priority Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Critical alerts → Email + SMS + Slack + Phone call</li>
                <li>• High priority → Email + Slack</li>
                <li>• Medium priority → Email only</li>
                <li>• Low priority → Email digest (daily)</li>
                <li>• System maintenance → Email + Slack (advance notice)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Delivery Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All channels must confirm delivery</li>
                <li>• Failed delivery triggers backup channel</li>
                <li>• Maximum 3 retry attempts per channel</li>
                <li>• Delivery timeout: 30 seconds</li>
                <li>• Failed deliveries logged for investigation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Channel Failover Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Primary email fails → Secondary email provider</li>
                <li>• SMS fails → Voice call for critical alerts</li>
                <li>• Slack fails → Microsoft Teams backup</li>
                <li>• All channels fail → Escalate to management</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Channel Config
            </button>
          </div>
        </div>
      )}

      {/* Template Rules */}
      {activeTab === 'templates' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Notification Template Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Required Template Categories</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium">System Templates</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• System outage alert</li>
                    <li>• Performance degradation</li>
                    <li>• Maintenance notification</li>
                    <li>• Service restoration</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Security Templates</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Security incident alert</li>
                    <li>• Failed login attempts</li>
                    <li>• Unauthorized access</li>
                    <li>• Data breach notification</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Financial Templates</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Payment failure alert</li>
                    <li>• High value transaction</li>
                    <li>• Fraud detection</li>
                    <li>• Billing issue notification</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Content Templates</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Content violation report</li>
                    <li>• DMCA takedown notice</li>
                    <li>• Moderation action alert</li>
                    <li>• Content approval notification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Template Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All templates must include timestamp and severity</li>
                <li>• Critical templates require clear action items</li>
                <li>• Templates must be mobile-friendly (SMS/push)</li>
                <li>• Include relevant links for more information</li>
                <li>• Personalization variables: {{user}}, {{service}}, {{timestamp}}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Template Approval Process</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• New templates require manager approval</li>
                <li>• Critical alert templates require CTO approval</li>
                <li>• Customer-facing templates require marketing review</li>
                <li>• Legal templates require legal team approval</li>
                <li>• All templates tested before activation</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Template Rules
            </button>
          </div>
        </div>
      )}

      {/* Escalation Rules */}
      {activeTab === 'escalation' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Alert Escalation Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Escalation Tiers</h4>
              <div className="space-y-3">
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-blue-800">Tier 1 - On-Call Engineer</h5>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Immediate</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Primary contact for all alerts</li>
                    <li>• 24/7 availability required</li>
                    <li>• Response time: 15 minutes</li>
                    <li>• Escalates if no acknowledgment</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-orange-800">Tier 2 - Engineering Manager</h5>
                    <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">15 minutes</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Escalated from Tier 1</li>
                    <li>• Decision authority for major changes</li>
                    <li>• Response time: 30 minutes</li>
                    <li>• Can authorize emergency procedures</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-red-800">Tier 3 - CTO + Executive Team</h5>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">30 minutes</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Critical incidents only</li>
                    <li>• Business impact decisions</li>
                    <li>• External communication authority</li>
                    <li>• Final escalation tier</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Escalation Triggers</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• No acknowledgment within 15 minutes → Escalate to Tier 2</li>
                <li>• No resolution within 1 hour → Escalate to Tier 3</li>
                <li>• Critical system down → Immediate Tier 3 notification</li>
                <li>• Security breach → Immediate all-tier notification</li>
                <li>• Data loss incident → Immediate executive notification</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Business Hours Configuration</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Business hours: Monday-Friday 9:00 AM - 6:00 PM UTC</li>
                <li>• After hours: Escalation timers reduced by 50%</li>
                <li>• Weekends: Critical alerts only, immediate escalation</li>
                <li>• Holidays: Emergency contact list activated</li>
                <li>• Time zone: All times in UTC for consistency</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Escalation Bypass Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Security incidents → Skip to Tier 2 immediately</li>
                <li>• Payment system down → Skip to Tier 3 immediately</li>
                <li>• Data breach → All tiers notified simultaneously</li>
                <li>• Legal compliance issue → Legal team + executives</li>
                <li>• PR crisis → Marketing + executives + legal</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Escalation Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Notifications