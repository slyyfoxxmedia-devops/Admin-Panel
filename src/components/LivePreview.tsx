import { useState } from 'react'

const LivePreview = () => {
  const [activeTab, setActiveTab] = useState('previews')

  const previewStats = {
    totalPreviews: '8,947',
    activeEnvironments: '23',
    monthlyViews: '234K',
    conversionRate: '12.4%',
    avgSessionTime: '3:45'
  }

  const livepreviews = [
    { id: 1, product: 'Modern Business Website Template', type: 'Web Template', status: 'Active', views: 2847, conversions: 89, lastUpdated: '2024-01-15', previewUrl: 'preview.slyyfox.com/web-001' },
    { id: 2, product: 'Mobile App UI Kit', type: 'UI/UX Kit', status: 'Building', views: 1234, conversions: 45, lastUpdated: '2024-01-15', previewUrl: 'preview.slyyfox.com/ui-002' },
    { id: 3, product: '3D Character Model Pack', type: '3D Models', status: 'Active', views: 567, conversions: 23, lastUpdated: '2024-01-14', previewUrl: 'preview.slyyfox.com/3d-003' },
    { id: 4, product: 'Email Marketing Templates', type: 'Email Templates', status: 'Failed', views: 890, conversions: 12, lastUpdated: '2024-01-14', previewUrl: 'preview.slyyfox.com/email-004' },
    { id: 5, product: 'React Dashboard Components', type: 'Code Templates', status: 'Active', views: 3456, conversions: 156, lastUpdated: '2024-01-13', previewUrl: 'preview.slyyfox.com/react-005' }
  ]

  const previewEnvironments = [
    { id: 1, name: 'Web Template Sandbox', type: 'Website', instances: 12, cpu: '45%', memory: '67%', status: 'Healthy' },
    { id: 2, name: 'Mobile App Simulator', type: 'Mobile', instances: 8, cpu: '23%', memory: '34%', status: 'Healthy' },
    { id: 3, name: '3D Model Viewer', type: '3D/AR', instances: 5, cpu: '78%', memory: '89%', status: 'Warning' },
    { id: 4, name: 'Document Preview Engine', type: 'Documents', instances: 15, cpu: '34%', memory: '45%', status: 'Healthy' },
    { id: 5, name: 'Interactive Demo Builder', type: 'Interactive', instances: 6, cpu: '56%', memory: '67%', status: 'Healthy' }
  ]

  const previewTemplates = [
    { id: 1, name: 'Website Template Preview', category: 'Web', features: ['Responsive Design', 'Live Editing', 'Device Preview', 'Performance Metrics'], usage: 234 },
    { id: 2, name: 'Mobile App Demo', category: 'Mobile', features: ['Touch Simulation', 'Device Frames', 'Gesture Support', 'Screen Recording'], usage: 156 },
    { id: 3, name: '3D Model Viewer', category: '3D', features: ['360° Rotation', 'Zoom Controls', 'Material Preview', 'AR Mode'], usage: 89 },
    { id: 4, name: 'Interactive UI Kit', category: 'Design', features: ['Component Library', 'Color Customization', 'Typography Preview', 'Export Options'], usage: 167 }
  ]

  const securitySettings = [
    { setting: 'Sandboxed Execution', description: 'Isolate preview code from main system', status: 'Enabled', risk: 'Low' },
    { setting: 'Resource Limits', description: 'Limit CPU and memory usage per preview', status: 'Enabled', risk: 'Low' },
    { setting: 'Network Restrictions', description: 'Block external API calls from previews', status: 'Enabled', risk: 'Medium' },
    { setting: 'File System Access', description: 'Prevent file system modifications', status: 'Enabled', risk: 'High' },
    { setting: 'Session Timeout', description: 'Auto-terminate inactive preview sessions', status: 'Enabled', risk: 'Low' }
  ]

  return (
    <div className="space-y-6">
      {/* Live Preview Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Total Previews</h3>
          <p className="text-3xl font-bold text-blue-600">{previewStats.totalPreviews}</p>
          <p className="text-sm text-blue-600">Active preview demos</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Environments</h3>
          <p className="text-3xl font-bold text-green-600">{previewStats.activeEnvironments}</p>
          <p className="text-sm text-green-600">Running instances</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Monthly Views</h3>
          <p className="text-3xl font-bold text-purple-600">{previewStats.monthlyViews}</p>
          <p className="text-sm text-purple-600">+18% from last month</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800">Conversion Rate</h3>
          <p className="text-3xl font-bold text-orange-600">{previewStats.conversionRate}</p>
          <p className="text-sm text-orange-600">Preview to purchase</p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="text-lg font-semibold text-red-800">Session Time</h3>
          <p className="text-3xl font-bold text-red-600">{previewStats.avgSessionTime}</p>
          <p className="text-sm text-red-600">Average engagement</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'previews', label: 'Live Previews', icon: '👁️' },
            { id: 'environments', label: 'Environments', icon: '🖥️' },
            { id: 'templates', label: 'Preview Templates', icon: '🎨' },
            { id: 'security', label: 'Security & Isolation', icon: '🔒' },
            { id: 'analytics', label: 'Preview Analytics', icon: '📊' }
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

      {/* Live Previews */}
      {activeTab === 'previews' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Active Live Previews</h3>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Types</option>
                  <option>Web Templates</option>
                  <option>UI/UX Kits</option>
                  <option>3D Models</option>
                  <option>Code Templates</option>
                </select>
                <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                  Create Preview
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Preview URL</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {livepreviews.map((preview) => (
                  <tr key={preview.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{preview.product}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        preview.type.includes('Web') ? 'bg-blue-100 text-blue-800' :
                        preview.type.includes('UI') ? 'bg-green-100 text-green-800' :
                        preview.type.includes('3D') ? 'bg-purple-100 text-purple-800' :
                        preview.type.includes('Email') ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {preview.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        preview.status === 'Active' ? 'bg-green-100 text-green-800' :
                        preview.status === 'Building' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {preview.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{preview.views.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{preview.conversions}</td>
                    <td className="px-6 py-4 text-sm text-blue-600 hover:text-blue-800">
                      <a href={`https://${preview.previewUrl}`} target="_blank" rel="noopener noreferrer">
                        {preview.previewUrl}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                      <button className="text-green-600 hover:text-green-800">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Rebuild</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Environments */}
      {activeTab === 'environments' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Preview Environments</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Add Environment
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Environment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instances</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CPU Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Memory Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {previewEnvironments.map((env) => (
                  <tr key={env.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{env.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{env.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{env.instances}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              parseInt(env.cpu) > 70 ? 'bg-red-500' :
                              parseInt(env.cpu) > 50 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: env.cpu }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{env.cpu}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              parseInt(env.memory) > 70 ? 'bg-red-500' :
                              parseInt(env.memory) > 50 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: env.memory }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{env.memory}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        env.status === 'Healthy' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {env.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Monitor</button>
                      <button className="text-green-600 hover:text-green-800">Scale</button>
                      <button className="text-red-600 hover:text-red-800">Restart</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Preview Templates */}
      {activeTab === 'templates' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Preview Templates</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Create Template
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {previewTemplates.map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{template.name}</h4>
                      <p className="text-sm text-gray-600">{template.category}</p>
                    </div>
                    <span className="text-sm text-gray-500">{template.usage} uses</span>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 text-blue-600 hover:text-blue-800 text-sm">Preview</button>
                    <button className="flex-1 text-green-600 hover:text-green-800 text-sm">Edit</button>
                    <button className="flex-1 text-purple-600 hover:text-purple-800 text-sm">Clone</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Template Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Viewport</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>Desktop (1920x1080)</option>
                  <option>Tablet (768x1024)</option>
                  <option>Mobile (375x667)</option>
                  <option>Responsive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enable Customization</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Analytics Tracking</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security & Isolation */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Security Configuration</h3>
            <div className="space-y-4">
              {securitySettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium text-gray-900">{setting.setting}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        setting.risk === 'Low' ? 'bg-green-100 text-green-800' :
                        setting.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {setting.risk} Risk
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{setting.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      setting.status === 'Enabled' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {setting.status}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Configure</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Resource Limits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max CPU per Preview</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>25%</option>
                  <option>50%</option>
                  <option>75%</option>
                  <option>100%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Memory per Preview</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>512 MB</option>
                  <option>1 GB</option>
                  <option>2 GB</option>
                  <option>4 GB</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Storage per Preview</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>100 MB</option>
                  <option>500 MB</option>
                  <option>1 GB</option>
                  <option>2 GB</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Network Bandwidth Limit</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>10 Mbps</option>
                  <option>50 Mbps</option>
                  <option>100 Mbps</option>
                  <option>Unlimited</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Analytics */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Preview Engagement</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Preview Engagement Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Conversion Funnel Chart Placeholder]
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Top Performing Previews</h3>
            <div className="space-y-3">
              {livepreviews.slice(0, 3).map((preview, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">{preview.product}</div>
                    <div className="text-sm text-gray-600">{preview.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{preview.views.toLocaleString()} views</div>
                    <div className="text-sm text-green-600">{preview.conversions} conversions</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LivePreview