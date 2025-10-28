import { useState } from 'react'

const S3Storage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const buckets = [
    { name: 'slyyfox-products', region: 'us-east-1', size: '2.4 TB', objects: 45672, public: false, versioning: true },
    { name: 'slyyfox-user-uploads', region: 'us-east-1', size: '890 GB', objects: 23451, public: false, versioning: true },
    { name: 'slyyfox-cdn-assets', region: 'us-east-1', size: '156 GB', objects: 8934, public: true, versioning: false },
    { name: 'slyyfox-backups', region: 'us-west-2', size: '1.8 TB', objects: 12456, public: false, versioning: true }
  ]

  const recentUploads = [
    { file: 'product_image_001.jpg', bucket: 'slyyfox-products', size: '2.4 MB', user: 'seller123', timestamp: '2024-01-15 15:30' },
    { file: 'audio_track_demo.mp3', bucket: 'slyyfox-user-uploads', size: '8.7 MB', user: 'creator456', timestamp: '2024-01-15 15:15' },
    { file: 'logo_variant_2.png', bucket: 'slyyfox-cdn-assets', size: '145 KB', user: 'admin', timestamp: '2024-01-15 14:45' }
  ]

  const storageMetrics = {
    totalStorage: '5.2 TB',
    totalObjects: 90513,
    monthlyRequests: 2847392,
    dataTransfer: '847 GB',
    monthlyCost: 127.45
  }

  return (
    <div className="space-y-6">
      {/* Storage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-sm font-semibold text-blue-800">Total Storage</h3>
          <p className="text-2xl font-bold text-blue-600">{storageMetrics.totalStorage}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="text-sm font-semibold text-green-800">Total Objects</h3>
          <p className="text-2xl font-bold text-green-600">{storageMetrics.totalObjects.toLocaleString()}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="text-sm font-semibold text-purple-800">Monthly Requests</h3>
          <p className="text-2xl font-bold text-purple-600">{storageMetrics.monthlyRequests.toLocaleString()}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="text-sm font-semibold text-orange-800">Data Transfer</h3>
          <p className="text-2xl font-bold text-orange-600">{storageMetrics.dataTransfer}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="text-sm font-semibold text-red-800">Monthly Cost</h3>
          <p className="text-2xl font-bold text-red-600">${storageMetrics.monthlyCost}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'buckets', label: 'Buckets', icon: '🪣' },
            { id: 'uploads', label: 'Recent Uploads', icon: '📤' },
            { id: 'security', label: 'Security', icon: '🔒' },
            { id: 'lifecycle', label: 'Lifecycle', icon: '♻️' }
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
              <h3 className="text-lg font-semibold mb-4">Storage Usage Trend</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Storage Usage Chart Placeholder]
              </div>
            </div>
            <div className="bg-white rounded-lg shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Request Volume</h3>
              <div className="h-48 flex items-center justify-center text-gray-500">
                [Request Volume Chart Placeholder]
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Storage Distribution by Bucket</h3>
            <div className="space-y-3">
              {buckets.map((bucket, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🪣</span>
                    <div>
                      <p className="font-medium">{bucket.name}</p>
                      <p className="text-sm text-gray-600">{bucket.objects.toLocaleString()} objects</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{bucket.size}</p>
                    <p className="text-sm text-gray-600">{bucket.region}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Buckets */}
      {activeTab === 'buckets' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">S3 Buckets</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Create Bucket
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bucket Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Region</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Objects</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Public</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Versioning</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {buckets.map((bucket, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{bucket.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{bucket.region}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{bucket.size}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{bucket.objects.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        bucket.public ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {bucket.public ? 'Public' : 'Private'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        bucket.versioning ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {bucket.versioning ? 'Enabled' : 'Disabled'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Browse</button>
                      <button className="text-green-600 hover:text-green-800">Configure</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Recent Uploads */}
      {activeTab === 'uploads' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Recent File Uploads</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bucket</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uploaded By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentUploads.map((upload, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900">{upload.file}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{upload.bucket}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{upload.size}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{upload.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{upload.timestamp}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                      <button className="text-green-600 hover:text-green-800">Download</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Security */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Bucket Policies & Permissions</h3>
            <div className="space-y-4">
              {buckets.map((bucket, index) => (
                <div key={index} className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{bucket.name}</h4>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Edit Policy</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Public Access:</span>
                      <span className={`ml-2 ${bucket.public ? 'text-red-600' : 'text-green-600'}`}>
                        {bucket.public ? 'Enabled' : 'Blocked'}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Encryption:</span>
                      <span className="ml-2 text-green-600">AES-256</span>
                    </div>
                    <div>
                      <span className="font-medium">Access Logging:</span>
                      <span className="ml-2 text-green-600">Enabled</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">Block Public Access (Account Level)</span>
                  <p className="text-sm text-gray-600">Prevent public access to all buckets</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">Default Encryption</span>
                  <p className="text-sm text-gray-600">Encrypt all new objects by default</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lifecycle */}
      {activeTab === 'lifecycle' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Lifecycle Management Rules</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Archive Old Product Files</h4>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Move files to IA after 30 days, Glacier after 90 days</p>
              <div className="text-sm text-gray-500">
                <span>Applies to: slyyfox-products/*</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Delete Temporary Uploads</h4>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Delete incomplete multipart uploads after 7 days</p>
              <div className="text-sm text-gray-500">
                <span>Applies to: slyyfox-user-uploads/temp/*</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Add Lifecycle Rule
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default S3Storage