import { useState } from 'react'

const MessagingAdmin = () => {
  const [activeTab, setActiveTab] = useState('messaging-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'messaging-rules', label: 'Messaging Rules', icon: '💬' },
            { id: 'channel-rules', label: 'Channel Rules', icon: '📺' },
            { id: 'moderation-rules', label: 'Moderation Rules', icon: '🛡️' },
            { id: 'notification-rules', label: 'Notification Rules', icon: '🔔' }
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

      {/* Messaging Rules */}
      {activeTab === 'messaging-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Messaging System Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Platform Messaging Integration</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Marketplace Messaging</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Buyer-seller communication</li>
                    <li>• Order-related discussions</li>
                    <li>• Support ticket integration</li>
                    <li>• File sharing for project details</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Social Platform Messaging</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Direct messages between users</li>
                    <li>• Group chat functionality</li>
                    <li>• Community discussions</li>
                    <li>• Event coordination</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">PM Dashboard Messaging</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Client-project manager communication</li>
                    <li>• Team collaboration</li>
                    <li>• Project status updates</li>
                    <li>• Document sharing</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">CRM Integration</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Lead communication tracking</li>
                    <li>• Customer support integration</li>
                    <li>• Sales conversation logging</li>
                    <li>• Follow-up reminders</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Message Format Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Maximum message length: 2,000 characters</li>
                <li>• File attachments: Max 25MB per file</li>
                <li>• Supported file types: Images, documents, audio, video</li>
                <li>• Rich text formatting allowed (bold, italic, links)</li>
                <li>• Emoji and reaction support enabled</li>
                <li>• Message editing allowed within 15 minutes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Privacy and Security Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• End-to-end encryption for sensitive conversations</li>
                <li>• Message retention: 2 years for business, 1 year for social</li>
                <li>• User blocking and reporting functionality</li>
                <li>• Admin access for legal compliance only</li>
                <li>• Data export available for users</li>
                <li>• GDPR compliance for EU users</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Rate Limiting Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Standard users: 100 messages per hour</li>
                <li>• Premium users: 500 messages per hour</li>
                <li>• Business accounts: 1,000 messages per hour</li>
                <li>• Burst limit: 10 messages per minute</li>
                <li>• Temporary restrictions for spam behavior</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Messaging Rules
            </button>
          </div>
        </div>
      )}

      {/* Channel Rules */}
      {activeTab === 'channel-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Channel Management Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Channel Types and Purposes</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Support Channels</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Customer support and help desk</li>
                    <li>• Technical assistance</li>
                    <li>• Billing and account issues</li>
                    <li>• Platform-specific support</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Community Channels</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• General discussions</li>
                    <li>• Industry-specific topics</li>
                    <li>• User showcases and feedback</li>
                    <li>• Networking and collaboration</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Business Channels</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Team collaboration</li>
                    <li>• Project coordination</li>
                    <li>• Client communication</li>
                    <li>• Internal announcements</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Announcement Channels</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Platform updates</li>
                    <li>• New feature releases</li>
                    <li>• Maintenance notifications</li>
                    <li>• Community events</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Channel Creation Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Admin approval required for new public channels</li>
                <li>• Channel names must be descriptive and appropriate</li>
                <li>• Maximum 50 characters for channel names</li>
                <li>• Channel descriptions required (100-500 characters)</li>
                <li>• Category assignment mandatory</li>
                <li>• Duplicate channel names not allowed</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Channel Membership Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Public channels: Open to all verified users</li>
                <li>• Private channels: Invitation-only access</li>
                <li>• Business channels: Team members and clients only</li>
                <li>• Support channels: Automatic access for customers</li>
                <li>• Maximum 1,000 members per channel</li>
                <li>• Inactive members removed after 90 days</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Channel Moderation Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Each channel must have at least 1 moderator</li>
                <li>• Moderators can mute, kick, and ban users</li>
                <li>• Channel owners can assign/remove moderators</li>
                <li>• Admin override available for all moderation actions</li>
                <li>• Moderation logs maintained for 1 year</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Channel Rules
            </button>
          </div>
        </div>
      )}

      {/* Moderation Rules */}
      {activeTab === 'moderation-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Content Moderation Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Automated Moderation Rules</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-red-800">Spam Detection</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Duplicate message detection (5+ identical messages)</li>
                    <li>• Excessive link posting (3+ links per message)</li>
                    <li>• Rapid message sending (10+ messages per minute)</li>
                    <li>• Promotional content without permission</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Content Filtering</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Profanity filter with severity levels</li>
                    <li>• Hate speech detection</li>
                    <li>• Personal information protection (PII)</li>
                    <li>• Malicious link scanning</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Behavioral Analysis</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Harassment pattern detection</li>
                    <li>• Coordinated inauthentic behavior</li>
                    <li>• Account age and reputation scoring</li>
                    <li>• Cross-platform behavior correlation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Manual Moderation Workflow</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Flagged content reviewed within 2 hours</li>
                <li>• Escalation to senior moderators for complex cases</li>
                <li>• User appeals processed within 24 hours</li>
                <li>• Moderation decisions logged with reasoning</li>
                <li>• Regular moderator training and calibration</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Enforcement Actions</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium">Warning System</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• First violation: Warning message</li>
                    <li>• Second violation: 24-hour mute</li>
                    <li>• Third violation: 7-day suspension</li>
                    <li>• Severe violations: Immediate action</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium">Penalty Types</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Message deletion</li>
                    <li>• Temporary muting (1-24 hours)</li>
                    <li>• Channel restrictions</li>
                    <li>• Account suspension (1-30 days)</li>
                    <li>• Permanent ban (severe cases)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Appeal Process Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Users can appeal moderation decisions within 7 days</li>
                <li>• Appeals reviewed by different moderator</li>
                <li>• Evidence and context considered in appeals</li>
                <li>• Appeal decisions are final</li>
                <li>• Successful appeals result in record expungement</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Moderation Rules
            </button>
          </div>
        </div>
      )}

      {/* Notification Rules */}
      {activeTab === 'notification-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Messaging Notification Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Notification Types</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Real-time Notifications</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Direct messages (immediate)</li>
                    <li>• Mentions in channels (immediate)</li>
                    <li>• Support ticket responses (immediate)</li>
                    <li>• Urgent business communications (immediate)</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Batched Notifications</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Channel activity summaries (hourly)</li>
                    <li>• Community updates (daily)</li>
                    <li>• Weekly digest of missed messages</li>
                    <li>• Monthly platform updates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Notification Delivery Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• In-app notifications: Always enabled</li>
                <li>• Email notifications: User preference based</li>
                <li>• Push notifications: Opt-in required</li>
                <li>• SMS notifications: Premium feature only</li>
                <li>• Do Not Disturb hours respected (10 PM - 8 AM)</li>
                <li>• Notification frequency limits to prevent spam</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">User Preference Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Users can customize notification preferences per channel</li>
                <li>• Granular control over notification types</li>
                <li>• Keyword-based notification filtering</li>
                <li>• VIP user lists for priority notifications</li>
                <li>• Temporary notification pausing (snooze)</li>
                <li>• Bulk notification management tools</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Business Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Business hours notifications prioritized</li>
                <li>• Client communications always delivered</li>
                <li>• Project deadline reminders automated</li>
                <li>• Team collaboration notifications grouped</li>
                <li>• Emergency contact override available</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Privacy and Compliance</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Notification content preview limited for privacy</li>
                <li>• Sensitive information excluded from previews</li>
                <li>• User consent required for marketing notifications</li>
                <li>• Opt-out mechanisms clearly provided</li>
                <li>• Notification data retention: 30 days maximum</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Notification Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MessagingAdmin