import { useState } from 'react'

const APIManagement = () => {
  const [activeTab, setActiveTab] = useState('api-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'api-rules', label: 'API Rules', icon: '🔌' },
            { id: 'authentication', label: 'Authentication Rules', icon: '🔐' },
            { id: 'rate-limiting', label: 'Rate Limiting', icon: '⏱️' },
            { id: 'versioning', label: 'Versioning Rules', icon: '📋' }
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

      {/* API Rules */}
      {activeTab === 'api-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">API Design and Standards</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Ecosystem API Structure</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Core APIs</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Marketplace API (product management)</li>
                    <li>• User Management API (authentication)</li>
                    <li>• Payment Processing API (transactions)</li>
                    <li>• Content Management API (CMS)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Platform APIs</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Social Platform API (community)</li>
                    <li>• Seller Dashboard API (analytics)</li>
                    <li>• PM Dashboard API (project management)</li>
                    <li>• Fantasy Sports API (gaming)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">API Design Standards</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• RESTful architecture with standard HTTP methods</li>
                <li>• JSON request/response format exclusively</li>
                <li>• Consistent URL structure: /api/v{version}/{resource}</li>
                <li>• Proper HTTP status codes (200, 201, 400, 401, 404, 500)</li>
                <li>• Standardized error response format</li>
                <li>• HTTPS required for all API endpoints</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Response Format Standards</h4>
              <div className="border rounded p-3 bg-gray-50">
                <h5 className="font-medium mb-2">Success Response</h5>
                <pre className="text-xs text-gray-700">
{`{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1.2"
  }
}`}
                </pre>
              </div>
              <div className="border rounded p-3 bg-gray-50 mt-2">
                <h5 className="font-medium mb-2">Error Response</h5>
                <pre className="text-xs text-gray-700">
{`{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": { ... }
  }
}`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Documentation Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• OpenAPI 3.0 specification for all endpoints</li>
                <li>• Interactive documentation with examples</li>
                <li>• SDK generation for major languages</li>
                <li>• Postman collections for testing</li>
                <li>• Changelog for API updates</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update API Rules
            </button>
          </div>
        </div>
      )}

      {/* Authentication Rules */}
      {activeTab === 'authentication' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">API Authentication Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Authentication Methods</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">API Keys (Primary)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Header-based authentication: X-API-Key</li>
                    <li>• 32-character alphanumeric keys</li>
                    <li>• Environment-specific keys (dev/staging/prod)</li>
                    <li>• Automatic key rotation every 90 days</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">OAuth 2.0 (Advanced)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Authorization code flow for web applications</li>
                    <li>• Client credentials flow for server-to-server</li>
                    <li>• JWT tokens with 1-hour expiration</li>
                    <li>• Refresh token mechanism</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Session-based (Internal)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Cookie-based authentication for web apps</li>
                    <li>• CSRF protection required</li>
                    <li>• Session timeout: 24 hours</li>
                    <li>• Secure and HttpOnly flags</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Permission Levels</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Read Only</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• GET requests only</li>
                    <li>• Public data access</li>
                    <li>• No sensitive information</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Read & Write</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• GET, POST, PUT requests</li>
                    <li>• User-owned data access</li>
                    <li>• Standard operations</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">Admin Access</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• All HTTP methods</li>
                    <li>• System-level operations</li>
                    <li>• Sensitive data access</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Security Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All API keys encrypted at rest</li>
                <li>• Request signing for sensitive operations</li>
                <li>• IP whitelisting for admin-level access</li>
                <li>• Audit logging for all authenticated requests</li>
                <li>• Automatic key revocation on suspicious activity</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Authentication Rules
            </button>
          </div>
        </div>
      )}

      {/* Rate Limiting */}
      {activeTab === 'rate-limiting' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Rate Limiting Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Rate Limit Tiers</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-gray-800">Free Tier</h5>
                    <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">Default</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 1,000 requests per hour</li>
                    <li>• 100 requests per minute (burst)</li>
                    <li>• Read-only access primarily</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-blue-800">Premium Tier</h5>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Paid</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 10,000 requests per hour</li>
                    <li>• 500 requests per minute (burst)</li>
                    <li>• Full read/write access</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium text-purple-800">Enterprise Tier</h5>
                    <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">Custom</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 100,000 requests per hour</li>
                    <li>• 2,000 requests per minute (burst)</li>
                    <li>• Priority support and SLA</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Rate Limiting Strategy</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Token bucket algorithm for smooth rate limiting</li>
                <li>• Per-API-key tracking with Redis backend</li>
                <li>• Sliding window for burst detection</li>
                <li>• Graceful degradation with 429 status codes</li>
                <li>• Rate limit headers in all responses</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Rate Limit Headers</h4>
              <div className="border rounded p-3 bg-gray-50">
                <pre className="text-xs text-gray-700">
{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642248000
X-RateLimit-Retry-After: 3600`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Throttling Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Exponential backoff for repeated violations</li>
                <li>• Temporary IP blocking for abuse (1-24 hours)</li>
                <li>• Whitelist for trusted internal services</li>
                <li>• Dynamic rate adjustment based on system load</li>
                <li>• Alert notifications for unusual traffic patterns</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Rate Limiting Rules
            </button>
          </div>
        </div>
      )}

      {/* Versioning Rules */}
      {activeTab === 'versioning' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">API Versioning Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Versioning Strategy</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Semantic versioning (major.minor.patch)</li>
                <li>• URL-based versioning: /api/v1/, /api/v2/</li>
                <li>• Backward compatibility for minor versions</li>
                <li>• Breaking changes only in major versions</li>
                <li>• Minimum 12-month support for deprecated versions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Version Lifecycle</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Active Versions</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• v1.2 - Current stable version</li>
                    <li>• v1.1 - Previous stable (maintenance mode)</li>
                    <li>• v2.0 - Beta version (testing)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Deprecated Versions</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• v1.0 - Deprecated (EOL: June 2024)</li>
                    <li>• v0.9 - Legacy (EOL: March 2024)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Breaking Change Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Removing endpoints or fields</li>
                <li>• Changing response data types</li>
                <li>• Modifying authentication requirements</li>
                <li>• Altering error response formats</li>
                <li>• Changing rate limiting policies</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Migration Support</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 6-month advance notice for deprecations</li>
                <li>• Migration guides and code examples</li>
                <li>• Automated migration tools where possible</li>
                <li>• Developer support during transition</li>
                <li>• Gradual rollout of new versions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Version Detection</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• URL path versioning (preferred): /api/v1/</li>
                <li>• Header versioning (alternative): API-Version: v1</li>
                <li>• Default to latest stable if not specified</li>
                <li>• Version information in response headers</li>
                <li>• Client SDK automatic version handling</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Versioning Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default APIManagement