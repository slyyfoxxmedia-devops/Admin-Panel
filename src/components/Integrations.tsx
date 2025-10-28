import { useState, useEffect } from 'react'
import { useApi } from '../hooks/useApi'

const Integrations = () => {
  const [integrations, setIntegrations] = useState([])
  const [testResults, setTestResults] = useState({})
  const { loading, error, request } = useApi()

  useEffect(() => {
    loadIntegrations()
  }, [])

  const loadIntegrations = async () => {
    const data = await request('/api/integrations')
    if (data) setIntegrations(data)
  }

  const testConnection = async (service) => {
    const result = await request(`/api/integrations/${service}/test`)
    setTestResults(prev => ({ ...prev, [service]: result }))
  }

  const updateCredentials = async (service, credentials) => {
    await request(`/api/integrations/${service}`, 'PUT', credentials)
    loadIntegrations()
  }

  const services = [
    {
      id: 'aws-ses',
      name: 'AWS SES',
      icon: '📮',
      description: 'Email delivery service',
      fields: ['accessKeyId', 'secretAccessKey', 'region']
    },
    {
      id: 'aws-s3',
      name: 'AWS S3',
      icon: '🗄️',
      description: 'File storage service',
      fields: ['accessKeyId', 'secretAccessKey', 'bucketName', 'region']
    },
    {
      id: 'stripe',
      name: 'Stripe',
      icon: '💳',
      description: 'Payment processing',
      fields: ['publishableKey', 'secretKey', 'webhookSecret']
    },
    {
      id: 'quickbooks',
      name: 'QuickBooks',
      icon: '📊',
      description: 'Accounting integration',
      fields: ['clientId', 'clientSecret', 'redirectUri']
    },
    {
      id: 'yahoo-fantasy',
      name: 'Yahoo Fantasy',
      icon: '🏆',
      description: 'Fantasy sports data',
      fields: ['clientId', 'clientSecret', 'apiKey']
    }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => {
          const integration = integrations.find(i => i.service === service.id)
          const testResult = testResults[service.id]
          
          return (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  integration?.status === 'active' ? 'bg-green-500' : 
                  integration?.status === 'error' ? 'bg-red-500' : 'bg-gray-400'
                }`} />
              </div>

              <div className="space-y-3">
                {service.fields.map(field => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </label>
                    <input
                      type={field.includes('secret') || field.includes('key') ? 'password' : 'text'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      defaultValue={integration?.[field] || ''}
                      onBlur={(e) => {
                        if (e.target.value !== integration?.[field]) {
                          updateCredentials(service.id, {
                            ...integration,
                            [field]: e.target.value
                          })
                        }
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => testConnection(service.id)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                  disabled={loading}
                >
                  Test Connection
                </button>
                {testResult && (
                  <div className={`px-3 py-2 rounded-md text-sm ${
                    testResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {testResult.success ? '✓' : '✗'}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-4">Integration Status</h3>
        <div className="space-y-3">
          {services.map(service => {
            const integration = integrations.find(i => i.service === service.id)
            return (
              <div key={service.id} className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center">
                  <span className="mr-3">{service.icon}</span>
                  <span className="font-medium">{service.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    integration?.status === 'active' ? 'bg-green-100 text-green-800' :
                    integration?.status === 'error' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {integration?.status || 'Not configured'}
                  </span>
                  {integration?.lastSync && (
                    <span className="text-sm text-gray-500">
                      Last sync: {new Date(integration.lastSync).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}
    </div>
  )
}

export default Integrations