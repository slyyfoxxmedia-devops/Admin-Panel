import { useState } from 'react'

const SearchIndex = () => {
  const [activeTab, setActiveTab] = useState('index-config')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'index-config', label: 'Index Configuration', icon: '🗂️' },
            { id: 'search-rules', label: 'Search Rules', icon: '🔍' },
            { id: 'indexing-rules', label: 'Indexing Rules', icon: '⚡' },
            { id: 'performance-rules', label: 'Performance Rules', icon: '📈' }
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

      {/* Index Configuration */}
      {activeTab === 'index-config' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Search Index Structure</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Required Indices</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Products Index</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Product title, description, tags</li>
                    <li>• Category, subcategory, type</li>
                    <li>• Price, seller information</li>
                    <li>• File metadata, formats</li>
                    <li>• Ratings, reviews, popularity</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Users Index</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Username, display name</li>
                    <li>• Profile information, bio</li>
                    <li>• Skills, specializations</li>
                    <li>• Location, contact info</li>
                    <li>• Verification status, ratings</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Content Index</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• CMS pages, blog posts</li>
                    <li>• Social media content</li>
                    <li>• Help documentation</li>
                    <li>• Community discussions</li>
                    <li>• News and announcements</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Transactions Index</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Order details, status</li>
                    <li>• Payment information</li>
                    <li>• Buyer/seller data</li>
                    <li>• Transaction history</li>
                    <li>• Refund/dispute records</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Index Field Configuration</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All text fields must be analyzed and searchable</li>
                <li>• Numeric fields (price, ratings) must support range queries</li>
                <li>• Date fields must support date range filtering</li>
                <li>• Category fields must support faceted search</li>
                <li>• Location fields must support geo-spatial queries</li>
                <li>• File type fields must support exact match filtering</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Index Mapping Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Text fields → Standard analyzer with stemming</li>
                <li>• Keywords → Keyword analyzer (exact match)</li>
                <li>• Numbers → Numeric field types with precision</li>
                <li>• Dates → Date field type with multiple formats</li>
                <li>• Nested objects → Nested field type</li>
                <li>• Arrays → Multi-value field support</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Index Configuration
            </button>
          </div>
        </div>
      )}

      {/* Search Rules */}
      {activeTab === 'search-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Search Behavior Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Search Query Processing</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Minimum query length: 2 characters</li>
                <li>• Maximum query length: 200 characters</li>
                <li>• Auto-complete suggestions after 3 characters</li>
                <li>• Fuzzy matching enabled for typos (edit distance: 2)</li>
                <li>• Stemming enabled for English language</li>
                <li>• Stop words removed from queries</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Search Result Ranking</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium">Relevance Factors (Weighted)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Title match: 40% weight</li>
                    <li>• Description match: 25% weight</li>
                    <li>• Tags match: 20% weight</li>
                    <li>• Category match: 10% weight</li>
                    <li>• Popularity score: 5% weight</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Boost Rules</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Premium products: 1.5x boost</li>
                    <li>• Recently updated: 1.2x boost</li>
                    <li>• High ratings (4.5+): 1.3x boost</li>
                    <li>• Verified sellers: 1.2x boost</li>
                    <li>• Featured products: 2.0x boost</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Search Filters</h4>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Category</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Price Range</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">File Type</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded">Rating</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Date Added</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded">Seller Type</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Search Result Limits</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Maximum results per page: 50</li>
                <li>• Default results per page: 20</li>
                <li>• Maximum total results: 10,000</li>
                <li>• Search timeout: 30 seconds</li>
                <li>• Auto-complete suggestions: 10 maximum</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Search Rules
            </button>
          </div>
        </div>
      )}

      {/* Indexing Rules */}
      {activeTab === 'indexing-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Content Indexing Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Real-time Indexing Triggers</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Product creation/update → Immediate indexing</li>
                <li>• User profile changes → Index within 5 minutes</li>
                <li>• Content publication → Immediate indexing</li>
                <li>• Transaction completion → Index within 1 minute</li>
                <li>• Review/rating submission → Index within 2 minutes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Batch Indexing Schedule</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium">Daily Operations</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Full product reindex: 2:00 AM UTC</li>
                    <li>• User profile sync: 3:00 AM UTC</li>
                    <li>• Content optimization: 4:00 AM UTC</li>
                    <li>• Analytics data update: 5:00 AM UTC</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Weekly Operations</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Complete index rebuild: Sunday 1:00 AM UTC</li>
                    <li>• Index optimization: Sunday 6:00 AM UTC</li>
                    <li>• Cleanup deleted documents: Sunday 7:00 AM UTC</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Indexing Priority Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Critical: Payment/transaction data (immediate)</li>
                <li>• High: New products, user registrations (1 minute)</li>
                <li>• Medium: Content updates, profile changes (5 minutes)</li>
                <li>• Low: Analytics data, logs (15 minutes)</li>
                <li>• Bulk operations: Queued during off-peak hours</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Content Filtering Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Exclude deleted/inactive content from indexing</li>
                <li>• Skip private/draft content unless explicitly included</li>
                <li>• Filter out spam/flagged content automatically</li>
                <li>• Exclude system-generated temporary data</li>
                <li>• Apply content moderation rules before indexing</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Indexing Rules
            </button>
          </div>
        </div>
      )}

      {/* Performance Rules */}
      {activeTab === 'performance-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Search Performance Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Response Time Requirements</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium">Search Queries</h5>
                    <span className="text-sm text-gray-500">Target response times</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Simple: 50ms</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Complex: 200ms</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded">Aggregated: 500ms</span>
                  </div>
                </div>
                <div className="border rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-medium">Auto-complete</h5>
                    <span className="text-sm text-gray-500">Real-time suggestions</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Target: 100ms</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">Maximum: 300ms</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Caching Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Popular search queries cached for 15 minutes</li>
                <li>• Auto-complete suggestions cached for 1 hour</li>
                <li>• Category filters cached for 30 minutes</li>
                <li>• Search result pages cached for 5 minutes</li>
                <li>• Cache invalidation on content updates</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Load Balancing Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Distribute queries across multiple search nodes</li>
                <li>• Route complex queries to dedicated high-performance nodes</li>
                <li>• Implement circuit breaker for failing nodes</li>
                <li>• Auto-scale based on query volume (threshold: 1000 QPS)</li>
                <li>• Failover to backup cluster if primary unavailable</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Resource Limits</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Maximum concurrent searches per user: 10</li>
                <li>• Query complexity limit: 100 clauses</li>
                <li>• Memory usage limit per query: 100MB</li>
                <li>• CPU time limit per query: 5 seconds</li>
                <li>• Rate limiting: 100 queries per minute per IP</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Monitoring Thresholds</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Alert if average response time exceeds 500ms</li>
                <li>• Alert if error rate exceeds 1%</li>
                <li>• Alert if query volume drops by 50%</li>
                <li>• Alert if index size grows by 200%</li>
                <li>• Alert if search cluster CPU exceeds 80%</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Performance Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchIndex