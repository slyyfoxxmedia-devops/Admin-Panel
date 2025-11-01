import { useState } from 'react'

const SocialNetwork = () => {
  const [activeTab, setActiveTab] = useState('network-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'network-rules', label: 'Network Rules', icon: '🔗' },
            { id: 'connection-rules', label: 'Connection Rules', icon: '🤝' },
            { id: 'privacy-rules', label: 'Privacy Rules', icon: '🔒' },
            { id: 'engagement-rules', label: 'Engagement Rules', icon: '💬' }
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

      {/* Network Rules */}
      {activeTab === 'network-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Social Network Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Network Structure Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Directed graph model: Users can follow others without reciprocation</li>
                <li>• Maximum following limit: 5,000 accounts per user</li>
                <li>• Maximum followers: No limit (organic growth)</li>
                <li>• Connection verification: Email-verified accounts only</li>
                <li>• Network depth: 6 degrees of separation maximum</li>
                <li>• Mutual connections prioritized in recommendations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">User Discovery Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Friend suggestions based on mutual connections</li>
                <li>• Interest-based recommendations using content analysis</li>
                <li>• Geographic proximity suggestions (opt-in)</li>
                <li>• Professional network suggestions (business accounts)</li>
                <li>• Similar engagement pattern matching</li>
                <li>• Exclude blocked or muted users from suggestions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Network Health Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Spam detection: Rapid following/unfollowing patterns</li>
                <li>• Bot identification: Automated behavior analysis</li>
                <li>• Fake account detection: Profile completeness scoring</li>
                <li>• Network manipulation prevention: Coordinated inauthentic behavior</li>
                <li>• Quality score calculation: Engagement authenticity metrics</li>
                <li>• Regular network cleanup: Remove inactive connections</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Platform Integration Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Cross-platform identity linking (marketplace, PM, fantasy)</li>
                <li>• Unified social graph across all platforms</li>
                <li>• Business relationship mapping (client-PM connections)</li>
                <li>• Professional network separation from personal</li>
                <li>• Platform-specific privacy controls</li>
                <li>• Consistent user experience across platforms</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Network Rules
            </button>
          </div>
        </div>
      )}

      {/* Connection Rules */}
      {activeTab === 'connection-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Connection Management Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Follow/Unfollow Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Instant follow: Public accounts (no approval needed)</li>
                <li>• Follow requests: Private accounts (approval required)</li>
                <li>• Follow limits: 100 follows per hour, 1000 per day</li>
                <li>• Unfollow restrictions: No limits on unfollowing</li>
                <li>• Mutual follow benefits: Enhanced visibility in feeds</li>
                <li>• Follow-back suggestions: Notify when followed by someone</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Connection Types</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Personal Connections</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Friends: Mutual following relationship</li>
                    <li>• Followers: One-way following relationship</li>
                    <li>• Close friends: Enhanced privacy and visibility</li>
                    <li>• Blocked users: No interaction allowed</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Professional Connections</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Business partners: Enhanced collaboration features</li>
                    <li>• Clients: Project-based connection with access controls</li>
                    <li>• Team members: Shared workspace access</li>
                    <li>• Industry contacts: Professional networking features</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Platform-Specific Connections</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Fantasy league members: Game-specific interactions</li>
                    <li>• Marketplace connections: Buyer-seller relationships</li>
                    <li>• Content collaborators: Creative project partnerships</li>
                    <li>• Community members: Shared interest groups</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Connection Quality Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Engagement scoring: Likes, comments, shares, messages</li>
                <li>• Interaction frequency: Regular vs. occasional connections</li>
                <li>• Content relevance: Shared interests and topics</li>
                <li>• Response rate: How often users interact with each other</li>
                <li>• Connection strength: Duration and depth of relationship</li>
                <li>• Mutual benefit assessment: Value exchange between users</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Connection Moderation Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Harassment prevention: Block abusive connection attempts</li>
                <li>• Spam filtering: Detect mass following/unfollowing</li>
                <li>• Fake connection detection: Identify bot networks</li>
                <li>• Age-appropriate connections: Protect minors</li>
                <li>• Geographic restrictions: Comply with local regulations</li>
                <li>• Professional boundaries: Maintain appropriate business relationships</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Connection Rules
            </button>
          </div>
        </div>
      )}

      {/* Privacy Rules */}
      {activeTab === 'privacy-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Privacy and Security Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Account Privacy Levels</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Public Account</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Profile visible to all users</li>
                    <li>• Posts visible in public feeds</li>
                    <li>• Can be found in search results</li>
                    <li>• Anyone can follow without approval</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Private Account</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Profile visible to followers only</li>
                    <li>• Posts visible to approved followers</li>
                    <li>• Limited search visibility</li>
                    <li>• Follow requests require approval</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Business Account</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Enhanced public visibility</li>
                    <li>• Professional contact information</li>
                    <li>• Business verification badge</li>
                    <li>• Analytics and insights access</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Data Sharing Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Connection data: Visible to mutual connections only</li>
                <li>• Activity status: Opt-in sharing of online/offline status</li>
                <li>• Location sharing: Explicit consent required</li>
                <li>• Contact information: User-controlled visibility</li>
                <li>• Cross-platform data: Unified privacy controls</li>
                <li>• Third-party sharing: Explicit opt-in required</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Content Privacy Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Post visibility: Public, followers, close friends, private</li>
                <li>• Story privacy: 24-hour content with restricted access</li>
                <li>• Message privacy: End-to-end encryption for sensitive content</li>
                <li>• Media sharing: Watermarking for protected content</li>
                <li>• Archive access: User-controlled content history</li>
                <li>• Content deletion: Permanent removal with verification</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Safety and Security Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Two-factor authentication: Required for sensitive operations</li>
                <li>• Login monitoring: Alert on suspicious access patterns</li>
                <li>• Device management: Track and control authorized devices</li>
                <li>• Session security: Automatic logout after inactivity</li>
                <li>• Data breach response: Immediate user notification</li>
                <li>• Privacy audit: Regular review of data handling practices</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Privacy Rules
            </button>
          </div>
        </div>
      )}

      {/* Engagement Rules */}
      {activeTab === 'engagement-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Engagement and Interaction Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Interaction Types</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Basic Interactions</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Likes: Simple appreciation gesture</li>
                    <li>• Comments: Text-based responses</li>
                    <li>• Shares: Repost to own feed</li>
                    <li>• Saves: Private bookmarking</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Advanced Interactions</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Reactions: Emoji-based responses</li>
                    <li>• Mentions: Tag other users in content</li>
                    <li>• Direct messages: Private conversations</li>
                    <li>• Collaborations: Joint content creation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Engagement Rate Limits</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Likes: 1,000 per hour, 10,000 per day</li>
                <li>• Comments: 100 per hour, 500 per day</li>
                <li>• Shares: 50 per hour, 200 per day</li>
                <li>• Direct messages: 200 per hour, 1,000 per day</li>
                <li>• Mentions: 50 per hour, 200 per day</li>
                <li>• Violation penalties: Temporary restrictions on excessive activity</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Content Engagement Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Engagement scoring: Weighted by interaction type and timing</li>
                <li>• Viral content detection: Rapid engagement growth monitoring</li>
                <li>• Quality engagement: Prioritize meaningful interactions</li>
                <li>• Engagement authenticity: Detect and penalize fake engagement</li>
                <li>• Cross-platform engagement: Unified interaction tracking</li>
                <li>• Engagement rewards: Incentivize quality participation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Community Engagement Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Group interactions: Enhanced engagement in communities</li>
                <li>• Event participation: Special engagement features for events</li>
                <li>• Challenge participation: Gamified engagement mechanics</li>
                <li>• User-generated campaigns: Community-driven content initiatives</li>
                <li>• Influencer engagement: Special features for high-engagement users</li>
                <li>• Engagement analytics: Detailed insights for content creators</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Engagement Moderation Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Spam prevention: Detect repetitive or automated engagement</li>
                <li>• Harassment protection: Monitor and prevent abusive interactions</li>
                <li>• Content appropriateness: Ensure engagement aligns with community standards</li>
                <li>• Fake engagement detection: Identify and remove artificial interactions</li>
                <li>• Engagement manipulation: Prevent coordinated inauthentic behavior</li>
                <li>• Quality control: Maintain high standards for community interactions</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Engagement Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SocialNetwork