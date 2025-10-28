const Email = () => {
  return (
    <div className="space-y-6">
      {/* Email Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Emails Sent</h3>
          <p className="text-3xl font-bold text-burnt-orange">45,231</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Delivery Rate</h3>
          <p className="text-3xl font-bold text-green-500">98.7%</p>
          <p className="text-sm text-gray-500">Successfully delivered</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Bounced</h3>
          <p className="text-3xl font-bold text-red-500">234</p>
          <p className="text-sm text-gray-500">Failed deliveries</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Queue</h3>
          <p className="text-3xl font-bold text-yellow-500">12</p>
          <p className="text-sm text-gray-500">Pending send</p>
        </div>
      </div>

      {/* Email Types */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Transactional</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Receipts:</span>
                <span className="font-medium">8,921</span>
              </div>
              <div className="flex justify-between">
                <span>Password Reset:</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span>Account Verification:</span>
                <span className="font-medium">2,891</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Marketing</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Newsletters:</span>
                <span className="font-medium">15,432</span>
              </div>
              <div className="flex justify-between">
                <span>Promotions:</span>
                <span className="font-medium">3,456</span>
              </div>
              <div className="flex justify-between">
                <span>Product Updates:</span>
                <span className="font-medium">1,892</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Notifications</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Order Updates:</span>
                <span className="font-medium">5,678</span>
              </div>
              <div className="flex justify-between">
                <span>Security Alerts:</span>
                <span className="font-medium">234</span>
              </div>
              <div className="flex justify-between">
                <span>System Messages:</span>
                <span className="font-medium">567</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Support</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Welcome Series:</span>
                <span className="font-medium">2,345</span>
              </div>
              <div className="flex justify-between">
                <span>Help Requests:</span>
                <span className="font-medium">891</span>
              </div>
              <div className="flex justify-between">
                <span>Feedback:</span>
                <span className="font-medium">456</span>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold text-gray-700 mb-2">Project Management</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Task Assignments:</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span>Project Updates:</span>
                <span className="font-medium">567</span>
              </div>
              <div className="flex justify-between">
                <span>Deadline Reminders:</span>
                <span className="font-medium">890</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Templates */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Transactional Templates</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium text-sm">Purchase Receipt</div>
                  <div className="text-xs text-gray-500">Order confirmation & receipt</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-burnt-orange hover:text-orange-600 text-sm">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium text-sm">Password Reset</div>
                  <div className="text-xs text-gray-500">Secure password reset link</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-burnt-orange hover:text-orange-600 text-sm">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium text-sm">Account Verification</div>
                  <div className="text-xs text-gray-500">Email verification for new users</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-burnt-orange hover:text-orange-600 text-sm">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium text-sm">Welcome Email</div>
                  <div className="text-xs text-gray-500">New user onboarding</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-burnt-orange hover:text-orange-600 text-sm">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Marketing Templates</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium text-sm">Monthly Newsletter</div>
                  <div className="text-xs text-gray-500">Platform updates & featured products</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-burnt-orange hover:text-orange-600 text-sm">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium text-sm">Product Launch</div>
                  <div className="text-xs text-gray-500">New product announcements</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-burnt-orange hover:text-orange-600 text-sm">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium text-sm">Promotional Offer</div>
                  <div className="text-xs text-gray-500">Sales & discount campaigns</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-burnt-orange hover:text-orange-600 text-sm">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded">
                <div>
                  <div className="font-medium text-sm">Abandoned Cart</div>
                  <div className="text-xs text-gray-500">Recovery email sequence</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-burnt-orange hover:text-orange-600 text-sm">Edit</button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">Preview</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Email Activity */}
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Recent Email Activity</h3>
          <div className="flex gap-2">
            <select className="px-3 py-1 border rounded text-sm">
              <option>All Types</option>
              <option>Transactional</option>
              <option>Marketing</option>
              <option>Notifications</option>
            </select>
            <button className="px-4 py-1 bg-burnt-orange text-white rounded text-sm hover:bg-orange-600">
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">john.doe@email.com</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Purchase Receipt</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Transactional</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 min ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">sarah.m@email.com</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Password Reset</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Transactional</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 min ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">mike.j@email.com</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Account Verification</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Transactional</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8 min ago</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-burnt-orange hover:text-orange-600 mr-3">View</button>
                  <button className="text-blue-600 hover:text-blue-700">Resend</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
              <div className="font-medium text-blue-700">Send Test Email</div>
              <div className="text-sm text-gray-500">Test email delivery & templates</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-green-50 border-green-200">
              <div className="font-medium text-green-700">Create Campaign</div>
              <div className="text-sm text-gray-500">New marketing email campaign</div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="font-medium text-yellow-700">Manage Bounces</div>
              <div className="text-sm text-gray-500">Handle failed deliveries</div>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">SMTP Configuration</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">DKIM Authentication</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Verified</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">SPF Record</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Valid</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Unsubscribe Handling</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Automated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Email