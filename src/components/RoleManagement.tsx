import { useState } from 'react'

const RoleManagement = () => {
  const [activeTab, setActiveTab] = useState('role-hierarchy')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'role-hierarchy', label: 'Role Hierarchy', icon: '🔐' },
            { id: 'permission-rules', label: 'Permission Rules', icon: '🔑' },
            { id: 'access-control', label: 'Access Control', icon: '🛡️' },
            { id: 'assignment-rules', label: 'Assignment Rules', icon: '👥' }
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

      {/* Role Hierarchy */}
      {activeTab === 'role-hierarchy' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">System Role Hierarchy</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Administrative Roles (Highest Authority)</h4>
              <div className="space-y-2">
                <div className="border rounded p-3 bg-red-50">
                  <h5 className="font-medium text-red-800">Super Admin</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Full system access and control</li>
                    <li>• Can create/modify/delete any role</li>
                    <li>• Access to all platforms and data</li>
                    <li>• System configuration and security settings</li>
                  </ul>
                </div>
                <div className="border rounded p-3 bg-orange-50">
                  <h5 className="font-medium text-orange-800">System Admin</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Technical system management</li>
                    <li>• User account management</li>
                    <li>• Platform configuration</li>
                    <li>• Cannot modify Super Admin settings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Management Roles</h4>
              <div className="space-y-2">
                <div className="border rounded p-3 bg-blue-50">
                  <h5 className="font-medium text-blue-800">Content Manager</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Content approval and moderation</li>
                    <li>• CMS and blog management</li>
                    <li>• SEO and marketing content</li>
                    <li>• User-generated content oversight</li>
                  </ul>
                </div>
                <div className="border rounded p-3 bg-purple-50">
                  <h5 className="font-medium text-purple-800">Finance Admin</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Payment and billing management</li>
                    <li>• Financial reporting access</li>
                    <li>• Subscription management</li>
                    <li>• Tax and compliance oversight</li>
                  </ul>
                </div>
                <div className="border rounded p-3 bg-green-50">
                  <h5 className="font-medium text-green-800">Community Moderator</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Social platform moderation</li>
                    <li>• User behavior monitoring</li>
                    <li>• Community guidelines enforcement</li>
                    <li>• Dispute resolution</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Platform-Specific Roles</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Marketplace Roles</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Seller (can list and sell products)</li>
                    <li>• Buyer (can purchase products)</li>
                    <li>• Verified Seller (enhanced privileges)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Social Platform Roles</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Social User (basic social features)</li>
                    <li>• Content Creator (enhanced posting)</li>
                    <li>• Influencer (verified status)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Business Roles</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Project Manager (PM dashboard access)</li>
                    <li>• Client (project collaboration)</li>
                    <li>• Team Member (limited PM access)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Base User Roles</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Guest (limited read-only access)</li>
                    <li>• Registered (basic account features)</li>
                    <li>• Verified (full platform access)</li>
                  </ul>
                </div>
              </div>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Role Hierarchy
            </button>
          </div>
        </div>
      )}

      {/* Permission Rules */}
      {activeTab === 'permission-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Permission System Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Permission Categories</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">System Permissions</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• system.admin (full system access)</li>
                    <li>• system.config (system configuration)</li>
                    <li>• system.users (user management)</li>
                    <li>• system.roles (role management)</li>
                    <li>• system.security (security settings)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Content Permissions</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• content.create (create content)</li>
                    <li>• content.edit (edit content)</li>
                    <li>• content.delete (delete content)</li>
                    <li>• content.publish (publish content)</li>
                    <li>• content.moderate (moderate content)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Commerce Permissions</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• commerce.sell (list products for sale)</li>
                    <li>• commerce.buy (purchase products)</li>
                    <li>• commerce.manage (manage orders)</li>
                    <li>• commerce.refund (process refunds)</li>
                    <li>• commerce.analytics (view sales data)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Social Permissions</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• social.post (create posts)</li>
                    <li>• social.comment (comment on posts)</li>
                    <li>• social.message (send messages)</li>
                    <li>• social.moderate (moderate community)</li>
                    <li>• social.admin (admin social features)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Permission Inheritance Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Higher-level roles inherit all permissions from lower levels</li>
                <li>• Platform-specific roles inherit base user permissions</li>
                <li>• Admin roles inherit all platform permissions</li>
                <li>• Custom roles can combine permissions from multiple categories</li>
                <li>• Explicit deny permissions override inherited permissions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Permission Validation Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All API endpoints require specific permissions</li>
                <li>• UI elements hidden based on user permissions</li>
                <li>• Database queries filtered by user access level</li>
                <li>• File access controlled by content permissions</li>
                <li>• Admin actions logged with permission verification</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Permission Rules
            </button>
          </div>
        </div>
      )}

      {/* Access Control */}
      {activeTab === 'access-control' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Access Control Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Platform Access Rules</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Marketplace Access</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Guest: Browse products (read-only)</li>
                    <li>• Registered: Browse + add to cart</li>
                    <li>• Verified: Full buying capabilities</li>
                    <li>• Seller: Selling + buying capabilities</li>
                    <li>• Admin: Full marketplace management</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Social Platform Access</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Guest: View public posts only</li>
                    <li>• Social User: Post, comment, message</li>
                    <li>• Content Creator: Enhanced posting features</li>
                    <li>• Moderator: Community moderation tools</li>
                    <li>• Admin: Full social platform control</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">PM Dashboard Access</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Client: View assigned projects only</li>
                    <li>• Team Member: Collaborate on projects</li>
                    <li>• Project Manager: Full project management</li>
                    <li>• Admin: All projects and settings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Data Access Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Users can only access their own data by default</li>
                <li>• Shared data requires explicit permission grants</li>
                <li>• Admin roles can access data within their domain</li>
                <li>• Cross-platform data access requires multiple role assignments</li>
                <li>• Sensitive data (PII, financial) requires elevated permissions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Feature Access Control</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Premium features require subscription verification</li>
                <li>• Beta features limited to specific user groups</li>
                <li>• Administrative features require admin role verification</li>
                <li>• API access controlled by role-based rate limits</li>
                <li>• Export/import features require elevated permissions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Time-Based Access Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Temporary role assignments with expiration dates</li>
                <li>• Business hours restrictions for certain operations</li>
                <li>• Maintenance mode access limited to system admins</li>
                <li>• Emergency access procedures for critical situations</li>
                <li>• Audit trail for all time-sensitive access grants</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Access Control Rules
            </button>
          </div>
        </div>
      )}

      {/* Assignment Rules */}
      {activeTab === 'assignment-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Role Assignment Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Automatic Role Assignment</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• New users automatically assigned "Registered" role</li>
                <li>• Email verification upgrades to "Verified" role</li>
                <li>• First product listing assigns "Seller" role</li>
                <li>• Social platform signup adds "Social User" role</li>
                <li>• Subscription purchase adds relevant platform roles</li>
                <li>• Business account creation assigns "Project Manager" role</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Manual Assignment Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Admin roles require Super Admin approval</li>
                <li>• Management roles require System Admin approval</li>
                <li>• Special permissions require justification and approval</li>
                <li>• Temporary role assignments require expiration date</li>
                <li>• Role changes logged with timestamp and approver</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Role Combination Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Users can have multiple platform-specific roles</li>
                <li>• Only one admin role per user allowed</li>
                <li>• Base roles are mutually exclusive (Guest OR Registered OR Verified)</li>
                <li>• Business roles can coexist with personal roles</li>
                <li>• Conflicting permissions resolved by highest authority</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Role Revocation Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Account suspension removes all non-base roles</li>
                <li>• Subscription cancellation removes premium roles</li>
                <li>• Inactivity (1 year) downgrades to basic roles</li>
                <li>• Policy violations can result in role restrictions</li>
                <li>• Admin roles require formal review process for removal</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Approval Workflow</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Self-Service (Automatic)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Basic user roles (Guest → Registered → Verified)</li>
                    <li>• Platform access roles (Seller, Social User)</li>
                    <li>• Subscription-based roles</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-yellow-800">Manager Approval Required</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Content management roles</li>
                    <li>• Community moderation roles</li>
                    <li>• Special access permissions</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">Executive Approval Required</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• System administration roles</li>
                    <li>• Financial management roles</li>
                    <li>• Super admin role assignments</li>
                  </ul>
                </div>
              </div>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Assignment Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RoleManagement