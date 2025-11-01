const CMSAdmin = () => {
  return (
    <div className="space-y-6">
      {/* Page Template Categories */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Page Template Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border rounded bg-blue-50">
            <div className="text-center">
              <div className="text-3xl mb-2">🎵</div>
              <h4 className="font-semibold text-blue-700">Audio Creators</h4>
              <div className="text-sm text-gray-600 mt-2">
                <div>• Music producer profiles</div>
                <div>• Audio engineer pages</div>
                <div>• Sound designer portfolios</div>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded bg-green-50">
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold text-green-700">Visual Artists</h4>
              <div className="text-sm text-gray-600 mt-2">
                <div>• Digital artist portfolios</div>
                <div>• Graphic designer pages</div>
                <div>• Photography showcases</div>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded bg-purple-50">
            <div className="text-center">
              <div className="text-3xl mb-2">💻</div>
              <h4 className="font-semibold text-purple-700">Tech Creators</h4>
              <div className="text-sm text-gray-600 mt-2">
                <div>• Software developer profiles</div>
                <div>• App creator pages</div>
                <div>• Tech consultant portfolios</div>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded bg-orange-50">
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold text-orange-700">Content Creators</h4>
              <div className="text-sm text-gray-600 mt-2">
                <div>• Social media profiles</div>
                <div>• Influencer pages</div>
                <div>• Content creator hubs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Approval Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Content Approval Workflow</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">Auto-Approve</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Verified seller updates</div>
              <div>• Template-based content</div>
              <div>• Minor text changes</div>
              <div>• Media replacements</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-yellow-50">
            <h4 className="font-semibold text-yellow-700 mb-2">Review Required</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• New seller profiles</div>
              <div>• Custom page layouts</div>
              <div>• External link additions</div>
              <div>• Contact information changes</div>
            </div>
          </div>
          <div className="p-4 border rounded bg-red-50">
            <h4 className="font-semibold text-red-700 mb-2">Auto-Reject</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div>• Inappropriate content</div>
              <div>• Spam or misleading info</div>
              <div>• Copyright violations</div>
              <div>• Malicious links</div>
            </div>
          </div>
        </div>
      </div>

      {/* Media Upload Rules */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Media Upload Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 border rounded bg-blue-50">
              <h4 className="font-semibold text-blue-700 mb-2">Allowed File Types</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>Images:</strong> JPG, PNG, GIF, WebP</div>
                <div><strong>Videos:</strong> MP4, WebM (max 100MB)</div>
                <div><strong>Audio:</strong> MP3, WAV (max 50MB)</div>
                <div><strong>Documents:</strong> PDF (max 10MB)</div>
              </div>
            </div>
            <div className="p-4 border rounded bg-green-50">
              <h4 className="font-semibold text-green-700 mb-2">Image Requirements</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Profile images: 400x400px minimum</div>
                <div>• Banner images: 1200x400px recommended</div>
                <div>• Portfolio images: 800x600px minimum</div>
                <div>• Thumbnails: auto-generated</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 border rounded bg-yellow-50">
              <h4 className="font-semibold text-yellow-700 mb-2">Content Restrictions</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• No adult/explicit content</div>
                <div>• No copyrighted material</div>
                <div>• No offensive imagery</div>
                <div>• Virus scanning required</div>
              </div>
            </div>
            <div className="p-4 border rounded bg-purple-50">
              <h4 className="font-semibold text-purple-700 mb-2">Storage Limits</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Free tier: 1GB storage</div>
                <div>• Pro tier: 10GB storage</div>
                <div>• Enterprise: Unlimited</div>
                <div>• Auto-cleanup after 1 year</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Requirements */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">SEO Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 border rounded bg-green-50">
              <h4 className="font-semibold text-green-700 mb-2">Required Elements</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Unique page titles (50-60 characters)</div>
                <div>• Meta descriptions (150-160 characters)</div>
                <div>• H1 heading on every page</div>
                <div>• Alt text for all images</div>
              </div>
            </div>
            <div className="p-4 border rounded bg-blue-50">
              <h4 className="font-semibold text-blue-700 mb-2">URL Structure</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Clean, readable URLs</div>
                <div>• No special characters</div>
                <div>• Hyphens for word separation</div>
                <div>• Maximum 75 characters</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 border rounded bg-yellow-50">
              <h4 className="font-semibold text-yellow-700 mb-2">Content Guidelines</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Minimum 300 words for main content</div>
                <div>• Proper heading hierarchy (H1-H6)</div>
                <div>• Internal linking encouraged</div>
                <div>• Mobile-responsive design</div>
              </div>
            </div>
            <div className="p-4 border rounded bg-purple-50">
              <h4 className="font-semibold text-purple-700 mb-2">Performance Standards</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Page load time &lt; 3 seconds</div>
                <div>• Core Web Vitals compliance</div>
                <div>• Image optimization required</div>
                <div>• HTTPS enforced</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CMS Management Actions */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">CMS Management Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
            <div className="font-medium text-blue-700">Create Template</div>
            <div className="text-sm text-gray-500">Add new page template</div>
          </button>
          <button className="p-3 text-left border rounded hover:bg-green-50 border-green-200">
            <div className="font-medium text-green-700">Review Content</div>
            <div className="text-sm text-gray-500">Approve pending submissions</div>
          </button>
          <button className="p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
            <div className="font-medium text-yellow-700">Manage Media</div>
            <div className="text-sm text-gray-500">Upload and organize assets</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CMSAdmin