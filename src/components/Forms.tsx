const Forms = () => {
  return (
    <div className="space-y-6">
      {/* Forms Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Active Forms</h3>
          <p className="text-3xl font-bold text-burnt-orange">23</p>
          <p className="text-sm text-gray-500">Currently deployed</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Submissions</h3>
          <p className="text-3xl font-bold text-green-500">1,234</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Completion Rate</h3>
          <p className="text-3xl font-bold text-blue-500">87.3%</p>
          <p className="text-sm text-gray-500">Average completion</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Pending Review</h3>
          <p className="text-3xl font-bold text-yellow-500">45</p>
          <p className="text-sm text-gray-500">Awaiting approval</p>
        </div>
      </div>

      {/* Ecosystem-Wide Form Categories */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Ecosystem Form Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">📊</span>Project Management
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Task Updates:</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span>Client Feedback:</span>
                <span className="font-medium">5</span>
              </div>
              <div className="flex justify-between">
                <span>Time Reports:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Project Intake:</span>
                <span className="font-medium">4</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">📝</span>CMS & Content
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Contact Forms:</span>
                <span className="font-medium">6</span>
              </div>
              <div className="flex justify-between">
                <span>Newsletter Signup:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Content Submission:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Event Registration:</span>
                <span className="font-medium">4</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">👥</span>Social Platform
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>User Registration:</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span>Profile Setup:</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span>Group Applications:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Report Forms:</span>
                <span className="font-medium">5</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">🏢</span>Business & Jobs
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Job Applications:</span>
                <span className="font-medium">7</span>
              </div>
              <div className="flex justify-between">
                <span>Business Verification:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Job Posting:</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between">
                <span>Company Profile:</span>
                <span className="font-medium">3</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">🛒</span>Marketplace
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Product Reviews:</span>
                <span className="font-medium">9</span>
              </div>
              <div className="flex justify-between">
                <span>Seller Applications:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Support Tickets:</span>
                <span className="font-medium">6</span>
              </div>
              <div className="flex justify-between">
                <span>Return Requests:</span>
                <span className="font-medium">2</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">📞</span>CRM & Leads
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Lead Capture:</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span>Demo Requests:</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between">
                <span>Consultation Forms:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Follow-up Surveys:</span>
                <span className="font-medium">5</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">🏆</span>Fantasy Sports
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>League Registration:</span>
                <span className="font-medium">6</span>
              </div>
              <div className="flex justify-between">
                <span>Player Feedback:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Tournament Entry:</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between">
                <span>Team Management:</span>
                <span className="font-medium">3</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
              <span className="mr-2">⚖️</span>Compliance
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>GDPR Requests:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Content Reports:</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between">
                <span>Legal Forms:</span>
                <span className="font-medium">1</span>
              </div>
              <div className="flex justify-between">
                <span>Audit Requests:</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Form Templates */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Ecosystem Form Templates</h3>
          <div className="flex gap-2">
            <select className="px-3 py-2 border rounded text-sm">
              <option>All Platforms</option>
              <option>Project Management</option>
              <option>CMS & Content</option>
              <option>Social Platform</option>
              <option>Marketplace</option>
              <option>CRM & Leads</option>
              <option>Fantasy Sports</option>
            </select>
            <button className="px-4 py-2 bg-burnt-orange text-white rounded hover:bg-orange-600">
              Create Custom Form
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* PM Templates */}
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">📊 Project Intake Form</div>
            <div className="text-sm text-gray-500 mb-3">Collect project requirements from new clients</div>
            <div className="text-xs text-blue-600 mb-2">PM Dashboard</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">💬 Client Feedback</div>
            <div className="text-sm text-gray-500 mb-3">Gather client input on project milestones</div>
            <div className="text-xs text-blue-600 mb-2">PM Dashboard</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          
          {/* CMS Templates */}
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">📞 Contact Form</div>
            <div className="text-sm text-gray-500 mb-3">Standard contact form for client websites</div>
            <div className="text-xs text-green-600 mb-2">CMS</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">📧 Newsletter Signup</div>
            <div className="text-sm text-gray-500 mb-3">Email list building for blogs and websites</div>
            <div className="text-xs text-green-600 mb-2">CMS</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          
          {/* Social Templates */}
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">👤 Profile Setup</div>
            <div className="text-sm text-gray-500 mb-3">Complete user profile creation form</div>
            <div className="text-xs text-purple-600 mb-2">Social Platform</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">🚨 Report Content</div>
            <div className="text-sm text-gray-500 mb-3">User reporting form for inappropriate content</div>
            <div className="text-xs text-purple-600 mb-2">Social Platform</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          
          {/* Business/Jobs Templates */}
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">💼 Job Application</div>
            <div className="text-sm text-gray-500 mb-3">Standard job application form template</div>
            <div className="text-xs text-orange-600 mb-2">Business Profiles</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">🏢 Business Verification</div>
            <div className="text-sm text-gray-500 mb-3">Company verification and documentation</div>
            <div className="text-xs text-orange-600 mb-2">Business Profiles</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          
          {/* Marketplace Templates */}
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">⭐ Product Review</div>
            <div className="text-sm text-gray-500 mb-3">Customer product review and rating form</div>
            <div className="text-xs text-indigo-600 mb-2">Marketplace</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">🛒 Seller Application</div>
            <div className="text-sm text-gray-500 mb-3">New seller onboarding and verification</div>
            <div className="text-xs text-indigo-600 mb-2">Marketplace</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          
          {/* Fantasy Sports Templates */}
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">🏆 League Registration</div>
            <div className="text-sm text-gray-500 mb-3">Fantasy league signup and team creation</div>
            <div className="text-xs text-red-600 mb-2">Fantasy Sports</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Forms Management */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Active Forms</h3>
          <div className="flex gap-2">
            <select className="px-3 py-1 border rounded text-sm">
              <option>All Categories</option>
              <option>Project Management</option>
              <option>User Feedback</option>
              <option>Lead Generation</option>
            </select>
            <button className="px-4 py-1 bg-burnt-orange text-white rounded text-sm hover:bg-orange-600">
              Export Data
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submissions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Project Status Update</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Project Management</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">234</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">92.1%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 mr-3">View Data</button>
                  <button className="text-gray-600 hover:text-gray-700">Share</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Client Feedback Survey</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">User Feedback</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">89</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78.5%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 day ago</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 mr-3">View Data</button>
                  <button className="text-gray-600 hover:text-gray-700">Share</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Contact Us Form</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Lead Generation</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">156</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">95.2%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 days ago</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Draft</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 mr-3">View Data</button>
                  <button className="text-green-600 hover:text-green-700">Publish</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Form Performance</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Average Completion Time:</span>
              <span className="font-bold text-burnt-orange">3m 42s</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Drop-off Rate:</span>
              <span className="font-bold text-red-600">12.7%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Mobile Submissions:</span>
              <span className="font-bold text-blue-600">68.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Peak Submission Time:</span>
              <span className="font-bold text-green-600">2-4 PM</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Ecosystem Integration Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">📊 PM Dashboard API</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Connected</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">📝 CMS Integration</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">👥 Social Platform</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Synced</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">🛒 Marketplace API</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Connected</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">📞 CRM Integration</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Partial</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">🏆 Fantasy Sports</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Testing</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">📧 Email Notifications</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">📊 Analytics Tracking</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forms