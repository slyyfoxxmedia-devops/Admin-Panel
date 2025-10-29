import { useState, useEffect } from 'react'
import { useApi } from '../hooks/useApi'

const PaymentProcessing = () => {
  const [transactions, setTransactions] = useState([])
  const [webhooks, setWebhooks] = useState([])
  const [activeTab, setActiveTab] = useState('overview')
  const { loading, error, request } = useApi()

  useEffect(() => {
    loadTransactions()
    loadWebhooks()
  }, [])

  const loadTransactions = async () => {
    const data = await request('/api/payments/transactions')
    if (data) setTransactions(data)
  }

  const loadWebhooks = async () => {
    const data = await request('/api/payments/webhooks')
    if (data) setWebhooks(data)
  }

  const retryPayment = async (transactionId) => {
    await request(`/api/payments/transactions/${transactionId}/retry`, 'POST')
    loadTransactions()
  }

  const refundPayment = async (transactionId, amount) => {
    await request(`/api/payments/transactions/${transactionId}/refund`, 'POST', { amount })
    loadTransactions()
  }

  const paymentStats = {
    totalTransactions: transactions.length,
    successfulPayments: transactions.filter(t => t.status === 'completed').length,
    failedPayments: transactions.filter(t => t.status === 'failed').length,
    pendingPayments: transactions.filter(t => t.status === 'pending').length,
    totalVolume: transactions.reduce((sum, t) => sum + (t.amount || 0), 0)
  }

  return (
    <div className="space-y-6">
      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Total Transactions</h3>
          <p className="text-3xl font-bold text-blue-600">{paymentStats.totalTransactions}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Successful</h3>
          <p className="text-3xl font-bold text-green-600">{paymentStats.successfulPayments}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Failed</h3>
          <p className="text-3xl font-bold text-red-600">{paymentStats.failedPayments}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Pending</h3>
          <p className="text-3xl font-bold text-yellow-600">{paymentStats.pendingPayments}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Total Volume</h3>
          <p className="text-3xl font-bold text-purple-600">${paymentStats.totalVolume.toLocaleString()}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow border">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {['overview', 'transactions', 'webhooks', 'processors', 'settings'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Payment Processing Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Payment Flow Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Order Creation</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payment Intent</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Webhook Processing</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Escrow Integration</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Connected</span>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Processor Health</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Stripe</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Healthy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">PayPal</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Warning</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">QuickBooks Sync</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Synced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Payment Transactions</h3>
              <div className="flex gap-2">
                <select className="px-3 py-2 border rounded text-sm">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>Failed</option>
                  <option>Pending</option>
                  <option>Refunded</option>
                </select>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                  Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Processor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { id: 'txn_001', customer: 'john@example.com', amount: 299.99, processor: 'Stripe', status: 'completed', date: '2024-01-15' },
                    { id: 'txn_002', customer: 'jane@example.com', amount: 149.50, processor: 'PayPal', status: 'failed', date: '2024-01-15' },
                    { id: 'txn_003', customer: 'bob@example.com', amount: 89.99, processor: 'Stripe', status: 'pending', date: '2024-01-15' },
                    { id: 'txn_004', customer: 'alice@example.com', amount: 199.99, processor: 'Stripe', status: 'refunded', date: '2024-01-14' }
                  ].map(transaction => (
                    <tr key={transaction.id}>
                      <td className="px-6 py-4 text-sm font-mono">{transaction.id}</td>
                      <td className="px-6 py-4 text-sm">{transaction.customer}</td>
                      <td className="px-6 py-4 text-sm font-medium">${transaction.amount}</td>
                      <td className="px-6 py-4 text-sm">{transaction.processor}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                          transaction.status === 'failed' ? 'bg-red-100 text-red-800' :
                          transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{transaction.date}</td>
                      <td className="px-6 py-4 text-sm space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">View</button>
                        {transaction.status === 'failed' && (
                          <button 
                            onClick={() => retryPayment(transaction.id)}
                            className="text-green-600 hover:text-green-800"
                          >
                            Retry
                          </button>
                        )}
                        {transaction.status === 'completed' && (
                          <button 
                            onClick={() => refundPayment(transaction.id, transaction.amount)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Refund
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Webhooks Tab */}
        {activeTab === 'webhooks' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Webhook Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Webhook Endpoints</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium text-sm">Stripe Webhooks</div>
                      <div className="text-xs text-gray-500">/api/webhooks/stripe</div>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium text-sm">PayPal Webhooks</div>
                      <div className="text-xs text-gray-500">/api/webhooks/paypal</div>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Active</span>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Recent Webhook Events</h4>
                <div className="space-y-2">
                  {[
                    { event: 'payment_intent.succeeded', processor: 'Stripe', time: '2 min ago' },
                    { event: 'payment.completed', processor: 'PayPal', time: '5 min ago' },
                    { event: 'payment_intent.payment_failed', processor: 'Stripe', time: '12 min ago' },
                    { event: 'refund.completed', processor: 'Stripe', time: '1 hour ago' }
                  ].map((webhook, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-medium">{webhook.event}</span>
                        <span className="text-gray-500 ml-2">({webhook.processor})</span>
                      </div>
                      <span className="text-gray-400">{webhook.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Processors Tab */}
        {activeTab === 'processors' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Payment Processors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">S</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Stripe</h4>
                      <p className="text-sm text-gray-500">Primary processor</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Connected</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-medium">98.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span className="font-medium">2.9% + $0.30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Settlement Time:</span>
                    <span className="font-medium">2 business days</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                  Configure
                </button>
              </div>
              
              <div className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">P</span>
                    </div>
                    <div>
                      <h4 className="font-medium">PayPal</h4>
                      <p className="text-sm text-gray-500">Secondary processor</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Warning</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-medium">94.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span className="font-medium">3.49% + $0.49</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Settlement Time:</span>
                    <span className="font-medium">1 business day</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                  Configure
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Payment Processing Settings</h3>
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Processing Rules</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Retry Failed Payments
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>3 attempts over 7 days</option>
                      <option>5 attempts over 14 days</option>
                      <option>Manual retry only</option>
                      <option>Disabled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Escrow Hold Period
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>7 days</option>
                      <option>14 days</option>
                      <option>30 days</option>
                      <option>Custom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Refund Processing
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Automatic approval under $100</option>
                      <option>Manual approval required</option>
                      <option>Automatic for all amounts</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Notification Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payment Success Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payment Failure Alerts</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Refund Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}
    </div>
  )
}

export default PaymentProcessing