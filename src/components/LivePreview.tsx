import { useState } from 'react'

const LivePreview = () => {
  const [activeTab, setActiveTab] = useState('preview-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'preview-rules', label: 'Preview Rules', icon: '👁️' },
            { id: 'environment-config', label: 'Environment Config', icon: '🖥️' },
            { id: 'template-rules', label: 'Template Rules', icon: '🎨' },
            { id: 'security-rules', label: 'Security Rules', icon: '🔒' }
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

      {/* Preview Rules */}
      {activeTab === 'preview-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Live Preview Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Supported Preview Types</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Web Templates</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• HTML/CSS/JavaScript templates</li>
                    <li>• Responsive design preview</li>
                    <li>• Multi-device viewport testing</li>
                    <li>• Live code editing capability</li>
                    <li>• Performance metrics display</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Mobile Apps</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• iOS/Android app simulation</li>
                    <li>• Touch gesture support</li>
                    <li>• Device frame rendering</li>
                    <li>• Screen recording capability</li>
                    <li>• App store preview generation</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">3D Models</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• 360-degree model rotation</li>
                    <li>• Material and texture preview</li>
                    <li>• AR/VR compatibility testing</li>
                    <li>• Animation playback</li>
                    <li>• Export format validation</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Interactive Demos</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• UI component libraries</li>
                    <li>• Interactive prototypes</li>
                    <li>• User flow demonstrations</li>
                    <li>• Feature showcase</li>
                    <li>• Integration examples</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Preview Generation Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Auto-generate preview on product upload</li>
                <li>• Preview builds triggered by file changes</li>
                <li>• Maximum build time: 10 minutes</li>
                <li>• Failed builds retry 3 times automatically</li>
                <li>• Preview expires after 30 days of inactivity</li>
                <li>• Premium users get priority build queue</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Access Control Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Public previews → Anyone with link can view</li>
                <li>• Private previews → Seller and buyers only</li>
                <li>• Premium previews → Licensed users only</li>
                <li>• Demo previews → Time-limited access (24 hours)</li>
                <li>• Watermarked previews → Non-licensed viewers</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Preview Rules
            </button>
          </div>
        </div>
      )}

      {/* Environment Config */}
      {activeTab === 'environment-config' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Preview Environment Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Environment Types</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Web Template Sandbox</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Node.js runtime environment</li>
                    <li>• Modern browser engine (Chromium)</li>
                    <li>• CSS preprocessor support</li>
                    <li>• JavaScript framework compatibility</li>
                    <li>• Hot reload for live editing</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Mobile App Simulator</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• iOS/Android device emulation</li>
                    <li>• Touch event simulation</li>
                    <li>• Device-specific screen sizes</li>
                    <li>• Native API mocking</li>
                    <li>• Performance profiling tools</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">3D Model Viewer</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• WebGL rendering engine</li>
                    <li>• Multiple 3D format support</li>
                    <li>• Real-time lighting simulation</li>
                    <li>• Texture and material preview</li>
                    <li>• VR/AR compatibility testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Resource Allocation Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Standard preview: 1 CPU core, 2GB RAM, 1GB storage</li>
                <li>• Premium preview: 2 CPU cores, 4GB RAM, 5GB storage</li>
                <li>• 3D/AR preview: 4 CPU cores, 8GB RAM, 10GB storage</li>
                <li>• Maximum concurrent previews per user: 5 (standard), 20 (premium)</li>
                <li>• Auto-scaling based on demand (max 100 instances)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Environment Lifecycle</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Environment spins up on first preview request</li>
                <li>• Idle timeout: 30 minutes of inactivity</li>
                <li>• Maximum session duration: 4 hours</li>
                <li>• Automatic cleanup of temporary files</li>
                <li>• Environment recycling every 24 hours</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Environment Config
            </button>
          </div>
        </div>
      )}

      {/* Template Rules */}
      {activeTab === 'template-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Preview Template Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Template Categories</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium">Website Templates</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Responsive design showcase</li>
                    <li>• Cross-browser compatibility</li>
                    <li>• Performance optimization</li>
                    <li>• SEO-friendly structure</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">UI/UX Kits</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Component interaction demos</li>
                    <li>• Color scheme variations</li>
                    <li>• Typography showcase</li>
                    <li>• Animation previews</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Code Templates</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Live code execution</li>
                    <li>• Syntax highlighting</li>
                    <li>• Documentation integration</li>
                    <li>• API testing interface</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Design Assets</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• High-resolution previews</li>
                    <li>• Multiple format exports</li>
                    <li>• Usage context examples</li>
                    <li>• Brand guideline demos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Template Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All templates must include responsive breakpoints</li>
                <li>• Loading time must not exceed 5 seconds</li>
                <li>• Templates must work without external dependencies</li>
                <li>• Include fallback content for failed resources</li>
                <li>• Accessibility compliance (WCAG 2.1 AA minimum)</li>
                <li>• Cross-browser testing required (Chrome, Firefox, Safari, Edge)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Customization Options</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Color scheme customization (primary, secondary, accent)</li>
                <li>• Typography selection (Google Fonts integration)</li>
                <li>• Layout variations (grid, flexbox, custom)</li>
                <li>• Content placeholder replacement</li>
                <li>• Logo and branding integration</li>
                <li>• Real-time preview updates</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Preview Display Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Default viewport: Desktop (1920x1080)</li>
                <li>• Mobile-first responsive testing</li>
                <li>• Device frame simulation available</li>
                <li>• Screenshot generation for thumbnails</li>
                <li>• Video recording for interactive demos</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Template Rules
            </button>
          </div>
        </div>
      )}

      {/* Security Rules */}
      {activeTab === 'security-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Preview Security Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Sandbox Security Rules</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-red-800">Critical Security</h5>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">High Risk</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Complete filesystem isolation</li>
                    <li>• Network access restrictions</li>
                    <li>• Process execution limits</li>
                    <li>• Memory access controls</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-orange-800">Resource Protection</h5>
                    <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">Medium Risk</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• CPU usage throttling</li>
                    <li>• Memory allocation limits</li>
                    <li>• Disk I/O restrictions</li>
                    <li>• Network bandwidth limits</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-blue-800">Session Management</h5>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Low Risk</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automatic session timeouts</li>
                    <li>• User activity monitoring</li>
                    <li>• Session data encryption</li>
                    <li>• Cleanup on termination</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Content Security Policy</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Block inline scripts and styles by default</li>
                <li>• Whitelist approved external domains</li>
                <li>• Prevent iframe embedding from untrusted sources</li>
                <li>• Disable eval() and similar dynamic code execution</li>
                <li>• Enforce HTTPS for all external resources</li>
                <li>• Block access to sensitive browser APIs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Resource Limits</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Maximum CPU usage: 50% per preview instance</li>
                <li>• Maximum memory: 2GB per preview instance</li>
                <li>• Maximum storage: 1GB per preview instance</li>
                <li>• Network bandwidth: 100 Mbps per instance</li>
                <li>• Maximum concurrent connections: 100</li>
                <li>• Request rate limiting: 1000 requests/minute</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Monitoring and Logging</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All preview activities logged and monitored</li>
                <li>• Suspicious behavior detection and alerting</li>
                <li>• Resource usage tracking and reporting</li>
                <li>• Security incident response procedures</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Compliance with data protection regulations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Incident Response Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Automatic termination of malicious previews</li>
                <li>• IP blocking for repeated violations</li>
                <li>• Account suspension for security breaches</li>
                <li>• Immediate escalation for critical incidents</li>
                <li>• Forensic data collection and preservation</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Security Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LivePreview