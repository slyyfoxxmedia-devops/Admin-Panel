import { useState } from 'react'
import StripeConfig from './StripeConfig'

const Billing = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'stripe-config', label: 'Stripe Config' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-burnt-orange text-burnt-orange'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 border rounded bg-blue-50">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">💳</span>
                  <span className="font-medium">Cards</span>
                </div>
              </div>
              <div className="p-3 border rounded bg-yellow-50">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🏦</span>
                  <span className="font-medium">ACH</span>
                </div>
              </div>
              <div className="p-3 border rounded bg-green-50">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  <span className="font-medium">Wallets</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Operations</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-3 text-left border rounded hover:bg-blue-50">
                <div className="font-medium text-blue-700">Process Subscriptions</div>
              </button>
              <button className="p-3 text-left border rounded hover:bg-red-50">
                <div className="font-medium text-red-700">Cancel Subscriptions</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'stripe-config' && <StripeConfig />}
    </div>
  )
}

export default Billing