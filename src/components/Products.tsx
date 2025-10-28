const Products = () => {
  return (
    <div className="space-y-6">
      {/* Product Enforcement Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Approved Products</h3>
          <p className="text-3xl font-bold text-burnt-orange">2,341</p>
          <p className="text-sm text-gray-500">Active listings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Pending Review</h3>
          <p className="text-3xl font-bold text-yellow-500">89</p>
          <p className="text-sm text-gray-500">Awaiting approval</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Rejected</h3>
          <p className="text-3xl font-bold text-red-500">23</p>
          <p className="text-sm text-gray-500">Policy violations</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-700">Categories</h3>
          <p className="text-3xl font-bold text-blue-500">12</p>
          <p className="text-sm text-gray-500">Allowed categories</p>
        </div>
      </div>

      {/* Allowed Product Types */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Security Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-green-50">
            <h4 className="font-semibold text-green-700 mb-2">Auto-Approved (Safe)</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Images (.jpg, .png)</li>
              <li>• Audio (.mp3, .wav)</li>
              <li>• Video (.mp4)</li>
              <li>• 3D Models (.obj, .stl, .ply)</li>
              <li>• E-books (.epub, .mobi)</li>
              <li>• Text (.txt, .md, .csv)</li>
            </ul>
          </div>
          <div className="p-4 border rounded bg-yellow-50">
            <h4 className="font-semibold text-yellow-700 mb-2">Virus Scan Required</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• PDFs (script detection)</li>
              <li>• Office files (.docx, .xlsx, .pptx)</li>
              <li>• 3D Graphics (.fbx, .dae)</li>
              <li>• Design files (.psd, .ai, .svg)</li>
              <li>• Code files (.js, .py, .html)</li>
            </ul>
          </div>
          <div className="p-4 border rounded bg-orange-50">
            <h4 className="font-semibold text-orange-700 mb-2">Sandbox + Code Signing</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Windows software (.msi)</li>
              <li>• Mac software (.dmg)</li>
              <li>• Linux packages (.deb)</li>
              <li>• Windows Store (.appx)</li>
              <li>• Mobile apps (.apk, .ipa)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security Infrastructure */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Security Infrastructure Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Virus Scanning (ClamAV)</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Not Configured</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Code Signing Verification</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Not Configured</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Sandbox Environment</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Not Configured</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">PDF Script Detection</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Not Configured</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">File Type Validation</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-sm font-medium">Manual Review Queue</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prohibited File Types */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Prohibited File Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded bg-red-50">
            <h4 className="font-semibold text-red-700 mb-2">Executable Files</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• .exe (Windows executables)</li>
              <li>• .msi (Windows installers)</li>
              <li>• .app (Mac applications)</li>
              <li>• .deb, .rpm (Linux packages)</li>
              <li>• .bat, .cmd (Batch files)</li>
            </ul>
          </div>
          <div className="p-4 border rounded bg-red-50">
            <h4 className="font-semibold text-red-700 mb-2">Archive Files</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• .zip (Compressed archives)</li>
              <li>• .rar (WinRAR archives)</li>
              <li>• .7z (7-Zip archives)</li>
              <li>• .tar, .gz (Unix archives)</li>
              <li>• .dmg (Mac disk images)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Allowed Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Education</div>
            <div className="text-sm text-gray-500">Courses, tutorials, guides</div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Design</div>
            <div className="text-sm text-gray-500">Templates, graphics, assets</div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Business</div>
            <div className="text-sm text-gray-500">Tools, templates, resources</div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Marketing</div>
            <div className="text-sm text-gray-500">Materials, strategies, tools</div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Development</div>
            <div className="text-sm text-gray-500">Code, scripts, frameworks</div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Photography</div>
            <div className="text-sm text-gray-500">Stock photos, presets</div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Music & Audio</div>
            <div className="text-sm text-gray-500">Tracks, samples, loops</div>
          </div>
          <div className="p-3 border rounded">
            <div className="font-medium text-gray-700">Writing</div>
            <div className="text-sm text-gray-500">E-books, articles, content</div>
          </div>
        </div>
      </div>

      {/* Enforcement Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full p-3 text-left border rounded hover:bg-yellow-50 border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-yellow-700">Review Pending</div>
                  <div className="text-sm text-gray-500">89 products awaiting approval</div>
                </div>
                <span className="text-yellow-600 font-bold">Review</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-red-50 border-red-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-red-700">Scan for Violations</div>
                  <div className="text-sm text-gray-500">Check for prohibited file types</div>
                </div>
                <span className="text-red-600 font-bold">Scan</span>
              </div>
            </button>
            <button className="w-full p-3 text-left border rounded hover:bg-blue-50 border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-blue-700">Update Rules</div>
                  <div className="text-sm text-gray-500">Modify allowed file types</div>
                </div>
                <span className="text-blue-600 font-bold">Configure</span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Enforcement Stats</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Auto-rejected this month:</span>
              <span className="font-bold text-red-600">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Manual reviews:</span>
              <span className="font-bold text-yellow-600">89</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Approved products:</span>
              <span className="font-bold text-green-600">2,341</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Compliance rate:</span>
              <span className="font-bold text-burnt-orange">94.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products