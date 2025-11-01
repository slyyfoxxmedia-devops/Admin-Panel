import { useState } from 'react'

const BlogAdmin = () => {
  const [activeTab, setActiveTab] = useState('content-rules')

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'content-rules', label: 'Content Rules', icon: '✍️' },
            { id: 'category-rules', label: 'Category Rules', icon: '📂' },
            { id: 'seo-rules', label: 'SEO Rules', icon: '🔍' },
            { id: 'publishing-rules', label: 'Publishing Rules', icon: '📅' }
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

      {/* Content Rules */}
      {activeTab === 'content-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Blog Content Standards</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Content Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Minimum word count: 500 words per post</li>
                <li>• Maximum word count: 3,000 words per post</li>
                <li>• Required featured image (1200x630px minimum)</li>
                <li>• Alt text required for all images</li>
                <li>• Excerpt required (150-160 characters)</li>
                <li>• At least 2 internal links per post</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Content Quality Standards</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Original content only (no plagiarism)</li>
                <li>• Professional tone and grammar</li>
                <li>• Fact-checking required for statistics</li>
                <li>• Sources must be cited for external claims</li>
                <li>• Content must align with brand voice</li>
                <li>• No promotional content without disclosure</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Content Structure Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• H1 tag for main title only</li>
                <li>• H2-H6 tags for section headers</li>
                <li>• Bullet points or numbered lists for readability</li>
                <li>• Paragraph length: 3-4 sentences maximum</li>
                <li>• Call-to-action in conclusion</li>
                <li>• Table of contents for posts over 1,500 words</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Prohibited Content</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Copyrighted material without permission</li>
                <li>• Offensive or discriminatory language</li>
                <li>• Misleading or false information</li>
                <li>• Spam or overly promotional content</li>
                <li>• Personal attacks or defamatory statements</li>
                <li>• Content violating privacy rights</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Content Rules
            </button>
          </div>
        </div>
      )}

      {/* Category Rules */}
      {activeTab === 'category-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Blog Category Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Required Categories</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Business Categories</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Digital Marketing</li>
                    <li>• Web Development</li>
                    <li>• E-commerce</li>
                    <li>• Business Strategy</li>
                    <li>• Entrepreneurship</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Creative Categories</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Design Trends</li>
                    <li>• Audio Production</li>
                    <li>• Content Creation</li>
                    <li>• Brand Identity</li>
                    <li>• Creative Tools</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-purple-800">Technology Categories</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Software Reviews</li>
                    <li>• Tech Tutorials</li>
                    <li>• Industry News</li>
                    <li>• Platform Updates</li>
                    <li>• API Documentation</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-orange-800">Community Categories</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Success Stories</li>
                    <li>• Community Spotlights</li>
                    <li>• Events & Webinars</li>
                    <li>• User Guides</li>
                    <li>• FAQ & Support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Category Management Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Each post must be assigned to exactly one primary category</li>
                <li>• Maximum 3 secondary categories per post</li>
                <li>• Category descriptions required (50-150 characters)</li>
                <li>• Category URLs must be SEO-friendly slugs</li>
                <li>• New categories require content manager approval</li>
                <li>• Minimum 5 posts required before category goes live</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Category Display Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Categories displayed in alphabetical order</li>
                <li>• Post count shown for each category</li>
                <li>• Featured categories highlighted on homepage</li>
                <li>• Empty categories hidden from navigation</li>
                <li>• Category archives paginated (10 posts per page)</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Category Rules
            </button>
          </div>
        </div>
      )}

      {/* SEO Rules */}
      {activeTab === 'seo-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">SEO Configuration Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Title Tag Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Title length: 50-60 characters optimal</li>
                <li>• Include primary keyword in title</li>
                <li>• Brand name at end: "Post Title | SlyyFoxxMedia"</li>
                <li>• Unique titles for each post</li>
                <li>• No keyword stuffing in titles</li>
                <li>• Action words encouraged (How to, Guide, Tips)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Meta Description Standards</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Length: 150-160 characters optimal</li>
                <li>• Include primary and secondary keywords</li>
                <li>• Compelling call-to-action included</li>
                <li>• Unique descriptions for each post</li>
                <li>• No duplicate meta descriptions</li>
                <li>• Preview snippet optimization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">URL Structure Rules</h4>
              <div className="border rounded p-3 bg-gray-50">
                <h5 className="font-medium mb-2">URL Format Options</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Standard: /blog/post-title-slug</li>
                  <li>• Category: /blog/category/post-title-slug</li>
                  <li>• Date: /blog/2024/01/post-title-slug</li>
                </ul>
              </div>
              <ul className="text-sm space-y-1 text-gray-600 mt-2">
                <li>• URLs must be lowercase with hyphens</li>
                <li>• Maximum 5 words in URL slug</li>
                <li>• No special characters or spaces</li>
                <li>• Include primary keyword in URL</li>
                <li>• Permanent redirects for changed URLs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Schema Markup Requirements</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Article schema for all blog posts</li>
                <li>• Author schema with bio and image</li>
                <li>• Organization schema for SlyyFoxxMedia</li>
                <li>• Breadcrumb schema for navigation</li>
                <li>• FAQ schema for Q&A posts</li>
                <li>• Review schema for product reviews</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Internal Linking Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Minimum 2 internal links per post</li>
                <li>• Link to related posts in same category</li>
                <li>• Link to cornerstone content when relevant</li>
                <li>• Use descriptive anchor text (no "click here")</li>
                <li>• Link to service pages when appropriate</li>
                <li>• Update old posts with links to new content</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update SEO Rules
            </button>
          </div>
        </div>
      )}

      {/* Publishing Rules */}
      {activeTab === 'publishing-rules' && (
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Publishing Workflow Rules</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Content Approval Workflow</h4>
              <div className="space-y-2">
                <div className="border rounded p-3">
                  <h5 className="font-medium text-yellow-800">Draft Stage</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Author creates and saves draft</li>
                    <li>• Content review checklist completed</li>
                    <li>• SEO optimization verified</li>
                    <li>• Images and media uploaded</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-blue-800">Review Stage</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Editor reviews for quality and accuracy</li>
                    <li>• SEO specialist checks optimization</li>
                    <li>• Legal review for sensitive topics</li>
                    <li>• Brand compliance verification</li>
                  </ul>
                </div>
                <div className="border rounded p-3">
                  <h5 className="font-medium text-green-800">Published Stage</h5>
                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                    <li>• Content manager final approval</li>
                    <li>• Scheduled or immediate publication</li>
                    <li>• Social media promotion scheduled</li>
                    <li>• Analytics tracking enabled</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Publishing Schedule Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Minimum 2 posts per week</li>
                <li>• Maximum 1 post per day</li>
                <li>• Optimal posting times: Tuesday-Thursday 10 AM EST</li>
                <li>• No publishing on weekends unless urgent</li>
                <li>• Holiday schedule adjusted in advance</li>
                <li>• Content calendar planned 30 days ahead</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Post Status Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Draft: Work in progress, not visible to public</li>
                <li>• Pending Review: Submitted for editorial review</li>
                <li>• Scheduled: Approved and scheduled for publication</li>
                <li>• Published: Live and visible to public</li>
                <li>• Archived: Removed from public but preserved</li>
                <li>• Deleted: Permanently removed (requires admin approval)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Content Update Rules</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Major updates require re-approval</li>
                <li>• Minor edits (typos, formatting) can be published immediately</li>
                <li>• Updated date shown for significant changes</li>
                <li>• Version history maintained for all posts</li>
                <li>• Redirects created for URL changes</li>
                <li>• Social media re-promotion for major updates</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-2">Author Permissions</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Authors can create and edit own drafts</li>
                <li>• Editors can review and approve all content</li>
                <li>• Content managers can publish immediately</li>
                <li>• Admins have full access to all posts</li>
                <li>• Guest authors require editor supervision</li>
              </ul>
            </div>

            <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
              Update Publishing Rules
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogAdmin