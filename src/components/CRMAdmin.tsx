import { useState } from 'react'

const CRMAdmin = () => {
  const [activeTab, setActiveTab] = useState('leads')

  const leads = [
    { id: 1, name: 'John Smith', email: 'john@example.com', source: 'Website', status: 'New', value: '$2,500', lastContact: '2024-01-15', assignedTo: 'Sarah' },
    { id: 2, name: 'Creative Agency X', email: 'contact@agencyx.com', source: 'Referral', status: 'Qualified', value: '$15,000', lastContact: '2024-01-14', assignedTo: 'Mike' },
    { id: 3, name: 'Music Producer Y', email: 'producer@music.com', source: 'Social Media', status: 'Proposal', value: '$8,500', lastContact: '2024-01-13', assignedTo: 'Sarah' }
  ]

  const customers = [
    { id: 1, name: 'Digital Studios Inc', email: 'hello@digitalstudios.com', tier: 'Premium', totalSpent: '$45,230', lastPurchase: '2024-01-10', status: 'Active' },
    { id: 2, name: 'Indie Creator Co', email: 'team@indiecreator.com', tier: 'Standard', totalSpent: '$12,450', lastPurchase: '2024-01-08', status: 'Active' },
    { id: 3, name: 'Audio Solutions', email: 'info@audiosolutions.com', tier: 'Enterprise', totalSpent: '$78,900', lastPurchase: '2024-01-05', status: 'At Risk' }
  ]

  const projects = [
    { id: 1, name: 'Brand Identity Package', client: 'Digital Studios Inc', status: 'In Progress', deadline: '2024-01-25', progress: 65, manager: 'Sarah' },
    { id: 2, name: 'Audio Production Suite', client: 'Music Producer Y', status: 'Planning', deadline: '2024-02-15', progress: 15, manager: 'Mike' },
    { id: 3, name: 'Website Redesign', client: 'Creative Agency X', status: 'Review', deadline: '2024-01-20', progress: 90, manager: 'Alex' }
  ]

  const activities = [
    { id: 1, type: 'Email', contact: 'John Smith', subject: 'Follow-up on proposal', timestamp: '2024-01-15 14:30', user: 'Sarah' },
    { id: 2, type: 'Call', contact: 'Creative Agency X', subject: 'Project kickoff meeting', timestamp: '2024-01-15 11:00', user: 'Mike' },
    { id: 3, type: 'Meeting', contact: 'Digital Studios Inc', subject: 'Quarterly review', timestamp: '2024-01-14 16:00', user: 'Alex' }
  ]

  return (
    <div className="space-y-6">
      {/* CRM Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Active Leads</h3>
          <p className="text-3xl font-bold text-blue-600">47</p>
          <p className="text-sm text-blue-600">+12 this week</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Active Customers</h3>
          <p className="text-3xl font-bold text-green-600">234</p>
          <p className="text-sm text-green-600">98% retention</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Active Projects</h3>
          <p className="text-3xl font-bold text-purple-600">18</p>
          <p className="text-sm text-purple-600">3 due this week</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800">Pipeline Value</h3>
          <p className="text-3xl font-bold text-orange-600">$127K</p>
          <p className="text-sm text-orange-600">+15% this month</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'leads', label: 'Leads', icon: '🎯' },
            { id: 'customers', label: 'Customers', icon: '👥' },
            { id: 'projects', label: 'Projects', icon: '📋' },
            { id: 'activities', label: 'Activities', icon: '📞' },
            { id: 'analytics', label: 'Analytics', icon: '📊' }
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

      {/* Leads */}
      {activeTab === 'leads' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Sales Leads</h3>
              <div className="flex space-x-2">
                <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                  Add Lead
                </button>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Status</option>
                  <option>New</option>
                  <option>Qualified</option>
                  <option>Proposal</option>
                  <option>Closed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{lead.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{lead.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{lead.source}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                        lead.status === 'Qualified' ? 'bg-green-100 text-green-800' :
                        lead.status === 'Proposal' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{lead.value}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{lead.assignedTo}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Contact</button>
                      <button className="text-green-600 hover:text-green-800">Convert</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Customers */}
      {activeTab === 'customers' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Customer Database</h3>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Tiers</option>
                  <option>Enterprise</option>
                  <option>Premium</option>
                  <option>Standard</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>At Risk</option>
                  <option>Churned</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Purchase</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{customer.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{customer.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        customer.tier === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                        customer.tier === 'Premium' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {customer.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{customer.totalSpent}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{customer.lastPurchase}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        customer.status === 'Active' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                      <button className="text-green-600 hover:text-green-800">Contact</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Projects */}
      {activeTab === 'projects' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Active Projects</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                New Project
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Manager</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{project.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{project.client}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                        project.status === 'Review' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-burnt-orange h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{project.deadline}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{project.manager}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                      <button className="text-green-600 hover:text-green-800">Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Activities */}
      {activeTab === 'activities' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Recent Activities</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Log Activity
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity) => (
                  <tr key={activity.id}>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        activity.type === 'Email' ? 'bg-blue-100 text-blue-800' :
                        activity.type === 'Call' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {activity.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{activity.contact}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{activity.subject}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{activity.timestamp}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{activity.user}</td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Analytics */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Sales Pipeline</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Sales Pipeline Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Customer Acquisition</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Customer Acquisition Chart Placeholder]
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">23%</div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$4,250</div>
                <div className="text-sm text-gray-600">Avg Deal Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">18 days</div>
                <div className="text-sm text-gray-600">Avg Sales Cycle</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">94%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CRMAdmin