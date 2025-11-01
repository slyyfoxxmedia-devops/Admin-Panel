import { useState } from 'react'

const PaymentProcessing = () => {
  const [activeTab, setActiveTab] = useState('payment-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'payment-rules', label: 'Payment Rules', icon: '💰' },
            { id: 'processor-config', label: 'Processor Config', icon: '🔧' },
            { id: 'webhook-rules', label: 'Webhook Rules', icon: '🔗' },
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

      {/* Payment Rules */}
      {activeTab === 'payment-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Processing Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Subscription Payment Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Subscription-only model (no one-time purchases)</li>
                <li>• Immediate seller payouts upon subscription payment</li>
                <li>• No escrow holding for subscription payments</li>
                <li>• Monthly/annual billing cycles supported</li>
                <li>• Automatic renewal with 7-day advance notice</li>
                <li>• Grace period: 3 days for failed renewals</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Payment Flow Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Payment intent created before checkout</li>
                <li>• 3D Secure authentication required for high-value transactions</li>
                <li>• Payment confirmation within 30 seconds</li>
                <li>• Failed payments retry automatically (3 attempts over 7 days)</li>
                <li>• Successful payments trigger immediate access</li>
                <li>• Refunds processed within 5-10 business days</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Transaction Limits</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Minimum transaction: $5.00</li>
                <li>• Maximum transaction: $10,000.00</li>
                <li>• Daily limit per user: $25,000.00</li>
                <li>• Monthly limit per user: $100,000.00</li>
                <li>• Velocity checks: Max 10 transactions per hour</li>
                <li>• High-value transactions ($5,000+) require additional verification</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Currency and Pricing Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Primary currency: USD</li>
                <li>• Multi-currency support for international users</li>
                <li>• Dynamic currency conversion at checkout</li>
                <li>• Tax calculation based on billing address</li>
                <li>• Platform fee: 3% of transaction value</li>
                <li>• Processing fees passed to customers</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Payment Rules
            </button>
          </div>
        </div>
      )}

      {/* Processor Config */}
      {activeTab === 'processor-config' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Processor Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Primary Processor: Stripe</h4>
              <div className="border rounded p-3 bg-blue-50">
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Processing fee: 2.9% + $0.30 per transaction</li>
                  <li>• Settlement time: 2 business days</li>
                  <li>• Supported payment methods: Cards, ACH, digital wallets</li>
                  <li>• 3D Secure authentication enabled</li>
                  <li>• Automatic retry logic for failed payments</li>
                  <li>• Real-time fraud detection</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Supported Payment Methods</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Credit/Debit Cards</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Visa, Mastercard, American Express</li>
                    <li>• Discover, JCB, Diners Club</li>
                    <li>• International cards supported</li>
                    <li>• Card verification (CVV) required</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Digital Wallets</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Apple Pay</li>
                    <li>• Google Pay</li>
                    <li>• Samsung Pay</li>
                    <li>• PayPal (via Stripe)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Bank Transfers</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• ACH Direct Debit (US)</li>
                    <li>• SEPA Direct Debit (EU)</li>
                    <li>• Bank redirects (iDEAL, Sofort)</li>
                    <li>• Wire transfers for large amounts</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Alternative Methods</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Buy now, pay later (Klarna, Afterpay)</li>
                    <li>• Cryptocurrency (Bitcoin, Ethereum)</li>
                    <li>• Gift cards and store credit</li>
                    <li>• Corporate purchasing cards</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Processor Failover Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Primary: Stripe (handles 100% of transactions)</li>
                <li>• Backup processor activated if Stripe downtime exceeds 5 minutes</li>
                <li>• Automatic routing for declined transactions</li>
                <li>• Geographic routing for international payments</li>
                <li>• Load balancing during high-volume periods</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Processor Config
            </button>
          </div>
        </div>
      )}

      {/* Webhook Rules */}
      {activeTab === 'webhook-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Webhook Configuration Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Required Webhook Events</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Payment Events</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• payment_intent.succeeded</li>
                    <li>• payment_intent.payment_failed</li>
                    <li>• payment_method.attached</li>
                    <li>• charge.dispute.created</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Subscription Events</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• customer.subscription.created</li>
                    <li>• customer.subscription.updated</li>
                    <li>• customer.subscription.deleted</li>
                    <li>• invoice.payment_succeeded</li>
                    <li>• invoice.payment_failed</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Customer Events</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• customer.created</li>
                    <li>• customer.updated</li>
                    <li>• customer.deleted</li>
                    <li>• customer.source.created</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Webhook Processing Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Webhook signature verification required</li>
                <li>• Idempotency handling for duplicate events</li>
                <li>• Event processing within 30 seconds</li>
                <li>• Failed webhook retries: 3 attempts with exponential backoff</li>
                <li>• Dead letter queue for permanently failed webhooks</li>
                <li>• Webhook event logging for 90 days</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Webhook Security Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• HTTPS endpoints required</li>
                <li>• Webhook signing secret validation</li>
                <li>• IP whitelisting for webhook sources</li>
                <li>• Rate limiting: 1000 webhooks per minute</li>
                <li>• Webhook endpoint health monitoring</li>
                <li>• Alert on webhook delivery failures</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Event Handling Priorities</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Critical: Payment success/failure (immediate processing)</li>
                <li>• High: Subscription changes (within 1 minute)</li>
                <li>• Medium: Customer updates (within 5 minutes)</li>
                <li>• Low: Reporting events (within 15 minutes)</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Webhook Rules
            </button>
          </div>
        </div>
      )}

      {/* Security Rules */}
      {activeTab === 'security-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Security Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Fraud Prevention Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Real-time fraud scoring for all transactions</li>
                <li>• Machine learning-based risk assessment</li>
                <li>• Velocity checks: Max 5 cards per user per day</li>
                <li>• Geographic risk scoring based on IP location</li>
                <li>• Device fingerprinting for repeat customers</li>
                <li>• Manual review for high-risk transactions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Authentication Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• 3D Secure (SCA) required for EU customers</li>
                <li>• Strong Customer Authentication for transactions over €30</li>
                <li>• Biometric authentication for mobile payments</li>
                <li>• Two-factor authentication for account changes</li>
                <li>• CVV verification for all card transactions</li>
                <li>• Address verification for high-value transactions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Data Protection Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• PCI DSS Level 1 compliance maintained</li>
                <li>• Card data never stored on our servers</li>
                <li>• Tokenization for recurring payments</li>
                <li>• End-to-end encryption for sensitive data</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• GDPR compliance for EU customer data</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Risk Management Rules</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Low Risk (Auto-approve)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Returning customers with good history</li>
                    <li>• Transactions under $100</li>
                    <li>• Domestic payments with matching billing</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-yellow-800">Medium Risk (Additional checks)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• New customers with transactions over $100</li>
                    <li>• International payments</li>
                    <li>• Mismatched billing/shipping addresses</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">High Risk (Manual review)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Transactions over $1,000 from new customers</li>
                    <li>• Multiple failed payment attempts</li>
                    <li>• Suspicious IP or device patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Chargeback Prevention</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Clear billing descriptor: "SLYYFOXMEDIA.COM"</li>
                <li>• Detailed transaction receipts sent immediately</li>
                <li>• Customer service contact info on all receipts</li>
                <li>• Proactive dispute resolution process</li>
                <li>• Chargeback alerts for early intervention</li>
                <li>• Automatic evidence submission for disputes</li>
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

export default PaymentProcessing