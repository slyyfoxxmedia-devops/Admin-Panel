import { useState } from 'react'

const CRMAdmin = () => {
  const [activeTab, setActiveTab] = useState('lead-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'lead-rules', label: 'Lead Rules', icon: '🎯' },
            { id: 'customer-tiers', label: 'Customer Tiers', icon: '👥' },
            { id: 'project-types', label: 'Project Types', icon: '📋' },
            { id: 'activity-rules', label: 'Activity Rules', icon: '📞' }
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

      {/* Lead Rules */}
      {activeTab === 'lead-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Lead Management Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Lead Sources</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Website Contact Form</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Social Media</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Referral Program</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Direct Outreach</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Lead Status Workflow</h4>
              <div className="flex items-center space-x-2 text-sm">
                <span className="px-3 py-1 bg-gray-100 rounded">New</span>
                <span>→</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded">Qualified</span>
                <span>→</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Proposal</span>
                <span>→</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Closed Won</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Auto-Assignment Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Website leads → Round-robin to available sales reps</li>
                <li>• Enterprise leads ($10K+) → Senior account managers only</li>
                <li>• Referral leads → Original referrer's account manager</li>
                <li>• Social media leads → Digital marketing specialist</li>
              </ul>
            </div>

            <div className="flex space-x-2">
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Update Lead Rules
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
                Test Assignment Logic
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customer Tiers */}
      {activeTab === 'customer-tiers' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Customer Tier Definitions</h3>
          
          <div className="space-y-4">
            <div className="border rounded p-4">
              <h4 className="font-medium text-purple-800">Enterprise Tier</h4>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Annual spend: $50,000+</li>
                <li>• Dedicated account manager</li>
                <li>• Priority support (2-hour response)</li>
                <li>• Custom project pricing</li>
                <li>• Quarterly business reviews</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-medium text-blue-800">Premium Tier</h4>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Annual spend: $15,000 - $49,999</li>
                <li>• Assigned account manager</li>
                <li>• Priority support (4-hour response)</li>
                <li>• 10% discount on projects</li>
                <li>• Monthly check-ins</li>
              </ul>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-medium text-gray-800">Standard Tier</h4>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Annual spend: Under $15,000</li>
                <li>• Shared account management</li>
                <li>• Standard support (24-hour response)</li>
                <li>• Standard project pricing</li>
                <li>• Quarterly newsletters</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Tier Upgrade Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Auto-upgrade when spend threshold reached</li>
                <li>• Tier review every 6 months</li>
                <li>• Grace period: 3 months below threshold before downgrade</li>
                <li>• Manual override available for strategic accounts</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Tier Rules
            </button>
          </div>
        </div>
      )}

      {/* Project Types */}
      {activeTab === 'project-types' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Project Type Categories</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Available Project Types</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium">Brand Identity</h5>
                  <p className="text-sm text-gray-600">Logo, brand guidelines, visual identity</p>
                  <p className="text-xs text-gray-500 mt-1">Timeline: 2-4 weeks</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Audio Production</h5>
                  <p className="text-sm text-gray-600">Music production, sound design, mixing</p>
                  <p className="text-xs text-gray-500 mt-1">Timeline: 1-6 weeks</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Web Development</h5>
                  <p className="text-sm text-gray-600">Website design and development</p>
                  <p className="text-xs text-gray-500 mt-1">Timeline: 4-12 weeks</p>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Content Creation</h5>
                  <p className="text-sm text-gray-600">Video, photography, copywriting</p>
                  <p className="text-xs text-gray-500 mt-1">Timeline: 1-3 weeks</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Project Status Rules</h4>
              <div className="flex items-center space-x-2 text-sm">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded">Planning</span>
                <span>→</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">In Progress</span>
                <span>→</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">Review</span>
                <span>→</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Completed</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Project Assignment Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Brand projects → Creative team lead</li>
                <li>• Audio projects → Audio production specialist</li>
                <li>• Web projects → Development team lead</li>
                <li>• Content projects → Content creation manager</li>
                <li>• Enterprise clients → Senior project managers only</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Project Rules
            </button>
          </div>
        </div>
      )}

      {/* Activity Rules */}
      {activeTab === 'activity-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Activity Tracking Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Required Activity Types</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Email</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Phone Call</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">Meeting</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded">Proposal Sent</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Follow-up</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded">Note</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Activity Logging Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All client communications must be logged within 24 hours</li>
                <li>• Meeting notes required for all client meetings</li>
                <li>• Follow-up activities auto-created for proposals</li>
                <li>• Email tracking enabled for all client emails</li>
                <li>• Call recordings required for enterprise clients</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Auto-Reminder Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Follow-up reminder: 3 days after proposal sent</li>
                <li>• Check-in reminder: 30 days after project completion</li>
                <li>• Renewal reminder: 60 days before contract expiry</li>
                <li>• Escalation: 7 days without client response</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Activity Reporting Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Weekly activity reports required from all sales reps</li>
                <li>• Monthly client touchpoint summary</li>
                <li>• Quarterly relationship health assessment</li>
                <li>• Annual client satisfaction survey</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Activity Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CRMAdmin