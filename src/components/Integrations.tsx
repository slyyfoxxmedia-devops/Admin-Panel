import { useState } from 'react'

const Integrations = () => {
  const [activeTab, setActiveTab] = useState('integration-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'integration-rules', label: 'Integration Rules', icon: '🔗' },
            { id: 'api-standards', label: 'API Standards', icon: '🔌' },
            { id: 'security-rules', label: 'Security Rules', icon: '🔒' },
            { id: 'sync-rules', label: 'Sync Rules', icon: '🔄' }
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

      {/* Integration Rules */}
      {activeTab === 'integration-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Third-Party Integration Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Required Integrations</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Payment Services</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Stripe (Primary payment processor)</li>
                    <li>• PayPal (Alternative payment method)</li>
                    <li>• Apple Pay/Google Pay (Mobile payments)</li>
                    <li>• Bank transfer integrations</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Cloud Services</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• AWS S3 (File storage)</li>
                    <li>• AWS SES (Email delivery)</li>
                    <li>• CloudFlare (CDN and security)</li>
                    <li>• AWS Lambda (Serverless functions)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Business Tools</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• QuickBooks (Accounting)</li>
                    <li>• Slack (Team communication)</li>
                    <li>• Google Analytics (Web analytics)</li>
                    <li>• Mailchimp (Email marketing)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Social Platforms</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Facebook/Instagram API</li>
                    <li>• Twitter API</li>
                    <li>• LinkedIn API</li>
                    <li>• YouTube API</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Integration Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All integrations must use OAuth 2.0 or API keys</li>
                <li>• Credentials stored encrypted in secure vault</li>
                <li>• Rate limiting compliance for all external APIs</li>
                <li>• Fallback mechanisms for critical integrations</li>
                <li>• Health checks every 5 minutes for active integrations</li>
                <li>• Automatic retry logic with exponential backoff</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Integration Approval Process</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• New integrations require CTO approval</li>
                <li>• Security review mandatory for all integrations</li>
                <li>• Data privacy impact assessment required</li>
                <li>• Testing in staging environment before production</li>
                <li>• Documentation and runbook creation required</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Integration Rules
            </button>
          </div>
        </div>
      )}

      {/* API Standards */}
      {activeTab === 'api-standards' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">API Integration Standards</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">API Communication Standards</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All API calls must use HTTPS/TLS 1.2+</li>
                <li>• JSON format for request/response bodies</li>
                <li>• RESTful API design principles</li>
                <li>• Proper HTTP status codes (200, 400, 401, 500, etc.)</li>
                <li>• Request/response logging for debugging</li>
                <li>• API versioning support (v1, v2, etc.)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Authentication Standards</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium">OAuth 2.0 (Preferred)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Authorization code flow for web apps</li>
                    <li>• Client credentials flow for server-to-server</li>
                    <li>• Token refresh mechanism implementation</li>
                    <li>• Scope-based access control</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">API Keys (Alternative)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Keys transmitted in Authorization header</li>
                    <li>• Regular key rotation (every 90 days)</li>
                    <li>• Environment-specific keys (dev/staging/prod)</li>
                    <li>• Key usage monitoring and alerting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Error Handling Standards</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Standardized error response format</li>
                <li>• Meaningful error messages and codes</li>
                <li>• Retry logic for transient failures</li>
                <li>• Circuit breaker pattern for failing services</li>
                <li>• Graceful degradation when services unavailable</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Rate Limiting Compliance</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Respect API provider rate limits</li>
                <li>• Implement request queuing and throttling</li>
                <li>• Monitor rate limit headers (X-RateLimit-*)</li>
                <li>• Exponential backoff for rate limit violations</li>
                <li>• Alert when approaching rate limits</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update API Standards
            </button>
          </div>
        </div>
      )}

      {/* Security Rules */}
      {activeTab === 'security-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Integration Security Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Credential Management</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All credentials encrypted at rest using AES-256</li>
                <li>• Credentials stored in dedicated secrets manager</li>
                <li>• No hardcoded credentials in source code</li>
                <li>• Environment-specific credential isolation</li>
                <li>• Regular credential rotation (quarterly)</li>
                <li>• Access logging for all credential operations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Network Security</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All external API calls through secure proxy</li>
                <li>• IP whitelisting for sensitive integrations</li>
                <li>• VPN or private network connections when available</li>
                <li>• Certificate pinning for critical services</li>
                <li>• Network traffic monitoring and anomaly detection</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Data Protection</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• PII data encryption in transit and at rest</li>
                <li>• Data minimization - only request necessary data</li>
                <li>• Data retention policies for integrated data</li>
                <li>• GDPR compliance for EU user data</li>
                <li>• Data breach notification procedures</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Access Control</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Role-based access to integration configurations</li>
                <li>• Multi-factor authentication for admin access</li>
                <li>• Principle of least privilege for API scopes</li>
                <li>• Regular access reviews and audits</li>
                <li>• Immediate revocation for terminated employees</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Security Monitoring</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Real-time monitoring of API calls</li>
                <li>• Anomaly detection for unusual patterns</li>
                <li>• Security incident response procedures</li>
                <li>• Regular penetration testing</li>
                <li>• Vulnerability scanning of integration endpoints</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Security Rules
            </button>
          </div>
        </div>
      )}

      {/* Sync Rules */}
      {activeTab === 'sync-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Data Synchronization Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Sync Frequency Rules</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">Real-time Sync</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Payment transactions (immediate)</li>
                    <li>• User authentication events (immediate)</li>
                    <li>• Critical system alerts (immediate)</li>
                    <li>• Security incidents (immediate)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Hourly Sync</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• User profile updates</li>
                    <li>• Product catalog changes</li>
                    <li>• Inventory levels</li>
                    <li>• Analytics data</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Daily Sync</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Financial reports</li>
                    <li>• User engagement metrics</li>
                    <li>• System health reports</li>
                    <li>• Backup verifications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Data Consistency Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Master data source defined for each data type</li>
                <li>• Conflict resolution rules for data discrepancies</li>
                <li>• Data validation before sync operations</li>
                <li>• Rollback procedures for failed syncs</li>
                <li>• Data integrity checks after sync completion</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Sync Failure Handling</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Automatic retry with exponential backoff</li>
                <li>• Maximum retry attempts: 5 per sync operation</li>
                <li>• Dead letter queue for permanently failed syncs</li>
                <li>• Alert notifications for sync failures</li>
                <li>• Manual intervention procedures for critical failures</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Performance Optimization</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Batch processing for bulk data operations</li>
                <li>• Delta sync to transfer only changed data</li>
                <li>• Compression for large data transfers</li>
                <li>• Parallel processing where possible</li>
                <li>• Caching for frequently accessed data</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Monitoring and Alerting</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Sync success/failure rate monitoring</li>
                <li>• Data freshness tracking</li>
                <li>• Performance metrics (sync duration, throughput)</li>
                <li>• Alert thresholds for sync delays</li>
                <li>• Dashboard for sync status visibility</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Sync Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Integrations