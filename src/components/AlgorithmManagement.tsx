import { useState } from 'react'

const AlgorithmManagement = () => {
  const [activeTab, setActiveTab] = useState('algorithm-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'algorithm-rules', label: 'Algorithm Rules', icon: '🧠' },
            { id: 'scoring-rules', label: 'Scoring Rules', icon: '🏆' },
            { id: 'ranking-rules', label: 'Ranking Rules', icon: '📊' },
            { id: 'optimization-rules', label: 'Optimization Rules', icon: '⚡' }
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

      {/* Algorithm Rules */}
      {activeTab === 'algorithm-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Algorithm Configuration Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Platform-Specific Algorithms</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Marketplace Algorithms</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Product search ranking</li>
                    <li>• Recommendation engine</li>
                    <li>• Price optimization</li>
                    <li>• Seller performance scoring</li>
                    <li>• Fraud detection</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Social Platform Algorithms</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Feed ranking algorithm</li>
                    <li>• Content discovery</li>
                    <li>• User matching</li>
                    <li>• Engagement prediction</li>
                    <li>• Content moderation</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Fantasy Sports Algorithms</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Player scoring system</li>
                    <li>• Performance prediction</li>
                    <li>• League balancing</li>
                    <li>• Draft optimization</li>
                    <li>• Matchup analysis</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Cross-Platform Algorithms</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• User behavior analysis</li>
                    <li>• Personalization engine</li>
                    <li>• Security monitoring</li>
                    <li>• Performance optimization</li>
                    <li>• Data quality assessment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Algorithm Deployment Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• All algorithms must pass A/B testing before production</li>
                <li>• Minimum 30-day testing period for new algorithms</li>
                <li>• Performance benchmarks must exceed current by 5%</li>
                <li>• Gradual rollout: 10% → 50% → 100% user base</li>
                <li>• Rollback procedures available within 24 hours</li>
                <li>• Algorithm changes require data science team approval</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Performance Monitoring Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Real-time performance metrics tracking</li>
                <li>• Alert thresholds: 10% performance degradation</li>
                <li>• Daily algorithm health reports</li>
                <li>• Weekly performance review meetings</li>
                <li>• Monthly algorithm optimization cycles</li>
                <li>• Quarterly algorithm strategy reviews</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Algorithm Rules
            </button>
          </div>
        </div>
      )}

      {/* Scoring Rules */}
      {activeTab === 'scoring-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Scoring System Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Fantasy Sports Scoring Rules</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Standard Scoring</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Passing TD: 4 points</li>
                    <li>• Rushing/Receiving TD: 6 points</li>
                    <li>• Field Goal: 3 points</li>
                    <li>• Safety: 2 points</li>
                    <li>• Interception/Fumble: -2 points</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">PPR Scoring (Points Per Reception)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Reception: 1 point</li>
                    <li>• Receiving yards: 0.1 points per yard</li>
                    <li>• Rushing yards: 0.1 points per yard</li>
                    <li>• Passing yards: 0.04 points per yard</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Defensive Scoring</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Sack: 1 point</li>
                    <li>• Interception: 2 points</li>
                    <li>• Fumble Recovery: 2 points</li>
                    <li>• Touchdown: 6 points</li>
                    <li>• Points allowed adjustments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">User Engagement Scoring</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Post likes: 1 point each</li>
                <li>• Comments: 2 points each</li>
                <li>• Shares: 3 points each</li>
                <li>• Profile views: 0.5 points each</li>
                <li>• Content creation: 5 points per post</li>
                <li>• Community participation: 10 points per event</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Seller Performance Scoring</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Product sales: 10 points per sale</li>
                <li>• Customer ratings: 1-5 points based on rating</li>
                <li>• Response time: Bonus points for quick responses</li>
                <li>• Product quality: Based on return rates</li>
                <li>• Customer service: Based on support interactions</li>
                <li>• Platform compliance: Penalty points for violations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Content Quality Scoring</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Originality: AI-powered plagiarism detection</li>
                <li>• Engagement rate: Views, likes, comments ratio</li>
                <li>• Relevance: Topic matching and trending analysis</li>
                <li>• Quality metrics: Grammar, readability, structure</li>
                <li>• User feedback: Community ratings and reports</li>
                <li>• SEO optimization: Keyword usage and meta data</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Scoring Rules
            </button>
          </div>
        </div>
      )}

      {/* Ranking Rules */}
      {activeTab === 'ranking-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Ranking Algorithm Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Search Result Ranking Factors</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Relevance Factors (60% weight)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Keyword match in title: 25%</li>
                    <li>• Keyword match in description: 15%</li>
                    <li>• Category relevance: 10%</li>
                    <li>• Tag matching: 10%</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Quality Factors (25% weight)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• User ratings: 10%</li>
                    <li>• Sales history: 8%</li>
                    <li>• Seller reputation: 7%</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Freshness Factors (15% weight)</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Recently updated: 8%</li>
                    <li>• New products: 7%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Social Feed Ranking Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Recency: Posts from last 24 hours prioritized</li>
                <li>• Engagement velocity: Rapid likes/comments boost ranking</li>
                <li>• User relationship: Friends and followed users ranked higher</li>
                <li>• Content type preference: Based on user interaction history</li>
                <li>• Diversity: Prevent echo chambers with varied content</li>
                <li>• Quality signals: Minimize spam and low-quality content</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Recommendation Engine Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Collaborative filtering: Users with similar preferences</li>
                <li>• Content-based filtering: Similar item characteristics</li>
                <li>• Hybrid approach: Combine multiple recommendation methods</li>
                <li>• Cold start handling: New users and items</li>
                <li>• Diversity injection: Avoid filter bubbles</li>
                <li>• Real-time updates: Incorporate recent user behavior</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Leaderboard Ranking Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Fantasy leagues: Total points with tiebreaker rules</li>
                <li>• Seller rankings: Weighted score of multiple metrics</li>
                <li>• Content creator rankings: Engagement and quality metrics</li>
                <li>• Community rankings: Participation and contribution scores</li>
                <li>• Time-based rankings: Daily, weekly, monthly, all-time</li>
                <li>• Fair play enforcement: Detect and penalize gaming</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Ranking Rules
            </button>
          </div>
        </div>
      )}

      {/* Optimization Rules */}
      {activeTab === 'optimization-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Algorithm Optimization Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Performance Optimization Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Algorithm execution time must not exceed 100ms</li>
                <li>• Memory usage limited to 512MB per algorithm instance</li>
                <li>• Batch processing for non-real-time algorithms</li>
                <li>• Caching results for frequently accessed data</li>
                <li>• Lazy loading for complex calculations</li>
                <li>• Parallel processing where applicable</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Machine Learning Model Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Model retraining schedule: Weekly for critical algorithms</li>
                <li>• Feature engineering pipeline automated</li>
                <li>• Cross-validation required for model evaluation</li>
                <li>• A/B testing for model performance comparison</li>
                <li>• Model versioning and rollback capabilities</li>
                <li>• Bias detection and fairness monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Data Quality Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Input data validation before algorithm execution</li>
                <li>• Outlier detection and handling procedures</li>
                <li>• Missing data imputation strategies</li>
                <li>• Data freshness requirements (max 24 hours old)</li>
                <li>• Data consistency checks across platforms</li>
                <li>• Privacy-preserving data processing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Scalability Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Horizontal scaling for increased load</li>
                <li>• Load balancing across algorithm instances</li>
                <li>• Queue management for batch processing</li>
                <li>• Resource allocation based on priority</li>
                <li>• Auto-scaling triggers and thresholds</li>
                <li>• Graceful degradation during high load</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Monitoring and Alerting Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Real-time performance monitoring</li>
                <li>• Error rate thresholds and alerting</li>
                <li>• Resource utilization monitoring</li>
                <li>• Algorithm drift detection</li>
                <li>• Business metric impact tracking</li>
                <li>• Automated incident response procedures</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Continuous Improvement Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Regular algorithm performance reviews</li>
                <li>• User feedback integration into optimization</li>
                <li>• Competitive benchmarking against industry standards</li>
                <li>• Research and development pipeline</li>
                <li>• Innovation experiments and prototyping</li>
                <li>• Knowledge sharing and documentation</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Optimization Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AlgorithmManagement