import { useState } from 'react'

const App = () => {
  const [activeSection, setActiveSection] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'users', label: 'User Management', icon: '👥' },
    { id: 'billing', label: 'Billing', icon: '💳' },
    { id: 'subscriptions', label: 'Subscriptions', icon: '🔄' },
    { id: 'escrow', label: 'Escrow', icon: '🏦' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'licensing', label: 'Licensing', icon: '🔑' },
    { id: 'compliance', label: 'Compliance', icon: '⚖️' },
    { id: 'email', label: 'Email', icon: '📧' },
    { id: 'ses', label: 'AWS SES', icon: '📮' },
    { id: 's3', label: 'S3 Storage', icon: '🗄️' },
    { id: 'social-mod', label: 'Social Moderation', icon: '🛡️' },
    { id: 'fantasy', label: 'Fantasy Sports', icon: '🏆' },
    { id: 'cms-admin', label: 'CMS Admin', icon: '📝' },
    { id: 'crm-admin', label: 'CRM Admin', icon: '📞' },
    { id: 'api', label: 'API Management', icon: '🔌' },
    { id: 'reports', label: 'Reports & BI', icon: '📋' },
    { id: 'audit', label: 'Audit Logs', icon: '📜' },
    { id: 'health', label: 'System Health', icon: '💚' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'integrations', label: 'Integrations', icon: '🔗' },
    { id: 'search', label: 'Search Index', icon: '🔍' },
    { id: 'audio', label: 'Audio Processing', icon: '🎵' },
    { id: 'preview', label: 'Live Preview', icon: '👁️' },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-black to-burnt-orange text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold">SlyyFoxxMedia</h1>
          <p className="text-sm opacity-75">Admin Panel</p>
        </div>
        
        <nav className="mt-8 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-white/10 transition-colors ${
                activeSection === item.id ? 'bg-white/20 border-r-4 border-white' : ''
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white overflow-auto">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {menuItems.find(item => item.id === activeSection)?.label}
          </h2>
          
          {activeSection === 'dashboard' && (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                  <p className="text-3xl font-bold text-burnt-orange">12,543</p>
                  <p className="text-sm text-gray-500">+5.2% this month</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
                  <p className="text-3xl font-bold text-burnt-orange">$45,231</p>
                  <p className="text-sm text-gray-500">+12.8% this month</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-700">Active Licenses</h3>
                  <p className="text-3xl font-bold text-burnt-orange">8,921</p>
                  <p className="text-sm text-gray-500">+3.1% this month</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border">
                  <h3 className="text-lg font-semibold text-gray-700">System Health</h3>
                  <p className="text-3xl font-bold text-green-500">99.9%</p>
                  <p className="text-sm text-gray-500">All systems operational</p>
                </div>
              </div>

              {/* Platform Status */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Platform Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <span className="text-sm font-medium">Marketplace</span>
                    <span className="text-green-600 font-bold">Online</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <span className="text-sm font-medium">Seller Dashboard</span>
                    <span className="text-green-600 font-bold">Online</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                    <span className="text-sm font-medium">Social Platform</span>
                    <span className="text-yellow-600 font-bold">Building</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                    <span className="text-sm font-medium">Fantasy Sports</span>
                    <span className="text-yellow-600 font-bold">Building</span>
                  </div>
                </div>
              </div>

              {/* AWS Services */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">AWS Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold text-gray-700">S3 Storage</h4>
                    <p className="text-2xl font-bold text-burnt-orange">2.3 TB</p>
                    <p className="text-sm text-gray-500">$89.50/month</p>
                  </div>
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold text-gray-700">SES Emails</h4>
                    <p className="text-2xl font-bold text-burnt-orange">45.2K</p>
                    <p className="text-sm text-gray-500">This month</p>
                  </div>
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold text-gray-700">API Calls</h4>
                    <p className="text-2xl font-bold text-burnt-orange">1.2M</p>
                    <p className="text-sm text-gray-500">This month</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">New user registration: john.doe@email.com</span>
                    <span className="text-xs text-gray-500">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">License activated: Premium Software License</span>
                    <span className="text-xs text-gray-500">5 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span className="text-sm">Payment processed: $299.99</span>
                    <span className="text-xs text-gray-500">12 min ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeSection !== 'dashboard' && (
            <div className="bg-white p-6 rounded-lg shadow border">
              <p className="text-gray-600">
                {menuItems.find(item => item.id === activeSection)?.label} module coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App