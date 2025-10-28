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

      {/* Form Categories */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Form Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Project Management</h4>
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
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">User Feedback</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Product Reviews:</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between">
                <span>Support Tickets:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Feature Requests:</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Lead Generation</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Contact Forms:</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Newsletter Signup:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Demo Requests:</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Compliance</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>GDPR Requests:</span>
                <span className="font-medium">1</span>
              </div>
              <div className="flex justify-between">
                <span>Content Reports:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span>Legal Forms:</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Builder */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Form Builder</h3>
          <button className="px-4 py-2 bg-burnt-orange text-white rounded hover:bg-orange-600">
            Create New Form
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">📋 Task Status Update</div>
            <div className="text-sm text-gray-500 mb-3">Collect task progress from team members</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">💬 Client Feedback</div>
            <div className="text-sm text-gray-500 mb-3">Gather client input on project milestones</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">⏰ Time Tracking</div>
            <div className="text-sm text-gray-500 mb-3">Log hours worked on specific tasks</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">📞 Contact Request</div>
            <div className="text-sm text-gray-500 mb-3">Lead generation and inquiry forms</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">⭐ Product Review</div>
            <div className="text-sm text-gray-500 mb-3">Collect user feedback on marketplace items</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Use Template</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
            </div>
          </div>
          <div className="p-4 border rounded hover:bg-gray-50 cursor-pointer">
            <div className="font-medium text-gray-700 mb-2">🛠️ Custom Form</div>
            <div className="text-sm text-gray-500 mb-3">Build from scratch with drag & drop</div>
            <div className="flex gap-2">
              <button className="text-burnt-orange hover:text-orange-600 text-sm">Start Building</button>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Examples</button>
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
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Integration Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Project Management API</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Connected</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Email Notifications</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Database Storage</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Synced</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Analytics Tracking</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Partial</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forms