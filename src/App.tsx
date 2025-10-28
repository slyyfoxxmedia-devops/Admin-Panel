import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'
import Users from './components/Users'
import Billing from './components/Billing'
import Escrow from './components/Escrow'
import Products from './components/Products'
import Licensing from './components/Licensing'
import Compliance from './components/Compliance'
import Email from './components/Email'
import Forms from './components/Forms'
import SocialModeration from './components/SocialModeration'
import AWSSES from './components/AWSSES'
import S3Storage from './components/S3Storage'
import CMSAdmin from './components/CMSAdmin'
import CRMAdmin from './components/CRMAdmin'
import ReportsBI from './components/ReportsBI'
import AuditLogs from './components/AuditLogs'
import SystemHealth from './components/SystemHealth'
import Notifications from './components/Notifications'
import SearchIndex from './components/SearchIndex'
import AudioProcessing from './components/AudioProcessing'
import LivePreview from './components/LivePreview'
import Integrations from './components/Integrations'

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
    { id: 'forms', label: 'Forms', icon: '📝' },
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
          
          {activeSection === 'dashboard' && <Dashboard />}
          
          {activeSection === 'analytics' && <Analytics />}

          {activeSection === 'users' && <Users />}

          {activeSection === 'billing' && <Billing />}

          {activeSection === 'escrow' && <Escrow />}

          {activeSection === 'products' && <Products />}

          {activeSection === 'licensing' && <Licensing />}

          {activeSection === 'compliance' && <Compliance />}

          {activeSection === 'email' && <Email />}

          {activeSection === 'forms' && <Forms />}

          {activeSection === 'social-mod' && <SocialModeration />}

          {activeSection === 'ses' && <AWSSES />}

          {activeSection === 's3' && <S3Storage />}

          {activeSection === 'cms-admin' && <CMSAdmin />}

          {activeSection === 'crm-admin' && <CRMAdmin />}

          {activeSection === 'reports' && <ReportsBI />}

          {activeSection === 'audit' && <AuditLogs />}

          {activeSection === 'health' && <SystemHealth />}

          {activeSection === 'notifications' && <Notifications />}

          {activeSection === 'search' && <SearchIndex />}

          {activeSection === 'audio' && <AudioProcessing />}

          {activeSection === 'preview' && <LivePreview />}

          {activeSection === 'integrations' && <Integrations />}

          {activeSection !== 'dashboard' && activeSection !== 'analytics' && activeSection !== 'users' && activeSection !== 'billing' && activeSection !== 'escrow' && activeSection !== 'products' && activeSection !== 'licensing' && activeSection !== 'compliance' && activeSection !== 'email' && activeSection !== 'forms' && activeSection !== 'social-mod' && activeSection !== 'ses' && activeSection !== 's3' && activeSection !== 'cms-admin' && activeSection !== 'crm-admin' && activeSection !== 'reports' && activeSection !== 'audit' && activeSection !== 'health' && activeSection !== 'notifications' && activeSection !== 'search' && activeSection !== 'audio' && activeSection !== 'preview' && activeSection !== 'integrations' && (
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