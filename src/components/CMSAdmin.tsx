import { useState } from 'react'

const CMSAdmin = () => {
  const [activeTab, setActiveTab] = useState('pages')

  const pages = [
    { id: 1, title: 'John Doe - Music Producer', type: 'Seller Profile', status: 'Published', views: 2847, lastModified: '2024-01-15' },
    { id: 2, title: 'Creative Studio X', type: 'Seller Storefront', status: 'Draft', views: 0, lastModified: '2024-01-14' },
    { id: 3, title: 'Digital Artist Portfolio', type: 'Social Profile', status: 'Published', views: 1523, lastModified: '2024-01-13' },
    { id: 4, title: 'Audio Engineer Services', type: 'Seller Profile', status: 'Under Review', views: 456, lastModified: '2024-01-12' }
  ]

  const templates = [
    { id: 1, name: 'Music Producer Profile', category: 'Audio', usage: 45, preview: '🎵' },
    { id: 2, name: 'Digital Artist Portfolio', category: 'Visual', usage: 32, preview: '🎨' },
    { id: 3, name: 'Software Developer', category: 'Tech', usage: 28, preview: '💻' },
    { id: 4, name: 'Content Creator Hub', category: 'Social', usage: 67, preview: '📱' }
  ]

  const pendingContent = [
    { id: 1, user: 'seller123', type: 'Profile Update', content: 'Updated bio and portfolio images', status: 'Pending', timestamp: '2024-01-15 14:30' },
    { id: 2, user: 'creator456', type: 'New Page', content: 'Created new product showcase page', status: 'Under Review', timestamp: '2024-01-15 13:15' },
    { id: 3, user: 'artist789', type: 'Media Upload', content: 'Added 12 new portfolio images', status: 'Approved', timestamp: '2024-01-15 12:00' }
  ]

  const mediaLibrary = [
    { id: 1, name: 'hero-banner.jpg', type: 'Image', size: '2.4 MB', usage: 15, uploadDate: '2024-01-15' },
    { id: 2, name: 'product-demo.mp4', type: 'Video', size: '45.7 MB', usage: 8, uploadDate: '2024-01-14' },
    { id: 3, name: 'logo-variants.zip', type: 'Archive', size: '1.2 MB', usage: 23, uploadDate: '2024-01-13' }
  ]

  return (
    <div className="space-y-6">
      {/* CMS Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Total Pages</h3>
          <p className="text-3xl font-bold text-blue-600">1,247</p>
          <p className="text-sm text-blue-600">+23 this week</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Published</h3>
          <p className="text-3xl font-bold text-green-600">1,089</p>
          <p className="text-sm text-green-600">87.3% live</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800">Pending Review</h3>
          <p className="text-3xl font-bold text-yellow-600">34</p>
          <p className="text-sm text-yellow-600">Needs attention</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Page Views</h3>
          <p className="text-3xl font-bold text-purple-600">847K</p>
          <p className="text-sm text-purple-600">This month</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'pages', label: 'All Pages', icon: '📄' },
            { id: 'templates', label: 'Templates', icon: '🎨' },
            { id: 'content-review', label: 'Content Review', icon: '👁️' },
            { id: 'media', label: 'Media Library', icon: '🖼️' },
            { id: 'seo', label: 'SEO Tools', icon: '🔍' }
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

      {/* All Pages */}
      {activeTab === 'pages' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Profile Pages & Storefronts</h3>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Types</option>
                  <option>Seller Profiles</option>
                  <option>Social Profiles</option>
                  <option>Storefronts</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Status</option>
                  <option>Published</option>
                  <option>Draft</option>
                  <option>Under Review</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Page Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Modified</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pages.map((page) => (
                  <tr key={page.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{page.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{page.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        page.status === 'Published' ? 'bg-green-100 text-green-800' :
                        page.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {page.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{page.views.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{page.lastModified}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                      <button className="text-green-600 hover:text-green-800">Preview</button>
                      <button className="text-red-600 hover:text-red-800">Archive</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Templates */}
      {activeTab === 'templates' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Profile Page Templates</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Create Template
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="text-center mb-3">
                    <div className="text-4xl mb-2">{template.preview}</div>
                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                    <p className="text-sm text-gray-600">{template.category}</p>
                  </div>
                  <div className="text-center text-sm text-gray-500 mb-3">
                    Used by {template.usage} sellers
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 text-blue-600 hover:text-blue-800 text-sm">Preview</button>
                    <button className="flex-1 text-green-600 hover:text-green-800 text-sm">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Template Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🎵</div>
                <div className="font-medium">Audio</div>
                <div className="text-sm text-gray-600">12 templates</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-medium">Visual</div>
                <div className="text-sm text-gray-600">8 templates</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">💻</div>
                <div className="font-medium">Tech</div>
                <div className="text-sm text-gray-600">6 templates</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-medium">Social</div>
                <div className="text-sm text-gray-600">4 templates</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Review */}
      {activeTab === 'content-review' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Pending Content Review</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Content</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingContent.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.user}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{item.content}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.timestamp}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-green-600 hover:text-green-800">Approve</button>
                      <button className="text-red-600 hover:text-red-800">Reject</button>
                      <button className="text-blue-600 hover:text-blue-800">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Media Library */}
      {activeTab === 'media' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Media Library</h3>
              <div className="flex space-x-2">
                <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                  Upload Media
                </button>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Types</option>
                  <option>Images</option>
                  <option>Videos</option>
                  <option>Documents</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Upload Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mediaLibrary.map((media) => (
                  <tr key={media.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{media.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        media.type === 'Image' ? 'bg-blue-100 text-blue-800' :
                        media.type === 'Video' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {media.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{media.size}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{media.usage} pages</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{media.uploadDate}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                      <button className="text-green-600 hover:text-green-800">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SEO Tools */}
      {activeTab === 'seo' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">SEO Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">87%</div>
                <div className="text-sm text-gray-600">Average SEO Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2.4M</div>
                <div className="text-sm text-gray-600">Organic Impressions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">156K</div>
                <div className="text-sm text-gray-600">Organic Clicks</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">SEO Issues</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded border border-red-200">
                <div>
                  <div className="font-medium text-red-800">Missing Meta Descriptions</div>
                  <div className="text-sm text-red-600">23 pages need meta descriptions</div>
                </div>
                <button className="text-red-600 hover:text-red-800 text-sm">Fix Issues</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded border border-yellow-200">
                <div>
                  <div className="font-medium text-yellow-800">Duplicate Title Tags</div>
                  <div className="text-sm text-yellow-600">8 pages have duplicate titles</div>
                </div>
                <button className="text-yellow-600 hover:text-yellow-800 text-sm">Review</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded border border-blue-200">
                <div>
                  <div className="font-medium text-blue-800">Image Alt Text</div>
                  <div className="text-sm text-blue-600">45 images missing alt text</div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Update</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CMSAdmin