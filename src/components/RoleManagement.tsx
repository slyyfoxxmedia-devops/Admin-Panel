import { useState } from 'react'
import { Role, BASE_ROLES, PLATFORM_ROLES, ADMIN_ROLES } from '../types/roles'

const RoleManagement = () => {
  const [activeTab, setActiveTab] = useState<'base' | 'platform' | 'admin'>('base')
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)

  const getRolesByType = (type: 'base' | 'platform' | 'admin'): Role[] => {
    switch (type) {
      case 'base': return BASE_ROLES
      case 'platform': return PLATFORM_ROLES
      case 'admin': return ADMIN_ROLES
    }
  }

  const getTabColor = (type: 'base' | 'platform' | 'admin') => {
    switch (type) {
      case 'base': return 'bg-blue-500'
      case 'platform': return 'bg-green-500'
      case 'admin': return 'bg-red-500'
    }
  }

  const getRoleIcon = (roleId: string) => {
    const icons: Record<string, string> = {
      guest: '👤', registered: '📝', verified: '✅',
      social_user: '👥', fantasy_player: '🏆', content_creator: '✍️',
      seller: '🛒', project_manager: '📋', marketplace_buyer: '🛍️',
      super_admin: '👑', system_admin: '⚙️', finance_admin: '💰',
      content_manager: '📝', community_moderator: '🛡️'
    }
    return icons[roleId] || '🔧'
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {(['base', 'platform', 'admin'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? `${getTabColor(tab)} text-white`
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Roles
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Roles List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Roles
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {activeTab === 'base' && 'Basic user account types'}
                {activeTab === 'platform' && 'Platform-specific access roles'}
                {activeTab === 'admin' && 'Administrative and management roles'}
              </p>
            </div>
            
            <div className="divide-y">
              {getRolesByType(activeTab).map((role) => (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedRole?.id === role.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getRoleIcon(role.id)}</span>
                      <div>
                        <h4 className="font-medium">{role.name}</h4>
                        <p className="text-sm text-gray-600">{role.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        role.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {role.isActive ? 'Active' : 'Inactive'}
                      </span>
                      <span className="text-sm text-gray-500">
                        {role.permissions.length} permissions
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Role Details */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow border">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Role Details</h3>
            </div>
            
            {selectedRole ? (
              <div className="p-4 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{getRoleIcon(selectedRole.id)}</span>
                  <div>
                    <h4 className="font-semibold text-lg">{selectedRole.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs ${getTabColor(selectedRole.type)} text-white`}>
                      {selectedRole.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600">{selectedRole.description}</p>
                
                <div>
                  <h5 className="font-medium mb-2">Permissions ({selectedRole.permissions.length})</h5>
                  <div className="space-y-1 max-h-40 overflow-y-auto">
                    {selectedRole.permissions.map((permission, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-gray-700">{permission}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t space-y-2">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                    Edit Role
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                    Assign to Users
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <span className="text-4xl mb-4 block">🔧</span>
                <p>Select a role to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Base Roles</p>
              <p className="text-2xl font-semibold">{BASE_ROLES.length}</p>
            </div>
            <span className="text-3xl">👤</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Platform Roles</p>
              <p className="text-2xl font-semibold">{PLATFORM_ROLES.length}</p>
            </div>
            <span className="text-3xl">🚀</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Admin Roles</p>
              <p className="text-2xl font-semibold">{ADMIN_ROLES.length}</p>
            </div>
            <span className="text-3xl">⚙️</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleManagement