import { useState, useEffect } from 'react'
import { useApi } from '../hooks/useApi'

const BlogAdmin = () => {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [showEditor, setShowEditor] = useState(false)
  const [activeTab, setActiveTab] = useState('posts')
  const { loading, error, request } = useApi()

  useEffect(() => {
    loadPosts()
    loadCategories()
  }, [])

  const loadPosts = async () => {
    const data = await request('/api/blog/posts')
    if (data) setPosts(data)
  }

  const loadCategories = async () => {
    const data = await request('/api/blog/categories')
    if (data) setCategories(data)
  }

  const publishPost = async (postId) => {
    await request(`/api/blog/posts/${postId}/publish`, 'POST')
    loadPosts()
  }

  const unpublishPost = async (postId) => {
    await request(`/api/blog/posts/${postId}/unpublish`, 'POST')
    loadPosts()
  }

  const deletePost = async (postId) => {
    await request(`/api/blog/posts/${postId}`, 'DELETE')
    loadPosts()
  }

  const savePost = async (postData) => {
    if (selectedPost) {
      await request(`/api/blog/posts/${selectedPost.id}`, 'PUT', postData)
    } else {
      await request('/api/blog/posts', 'POST', postData)
    }
    loadPosts()
    setShowEditor(false)
    setSelectedPost(null)
  }

  const blogStats = {
    totalPosts: posts.length,
    publishedPosts: posts.filter(p => p.status === 'published').length,
    draftPosts: posts.filter(p => p.status === 'draft').length,
    totalViews: posts.reduce((sum, p) => sum + (p.views || 0), 0)
  }

  return (
    <div className="space-y-6">
      {/* Blog Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Total Posts</h3>
          <p className="text-3xl font-bold text-blue-600">{blogStats.totalPosts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Published</h3>
          <p className="text-3xl font-bold text-green-600">{blogStats.publishedPosts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Drafts</h3>
          <p className="text-3xl font-bold text-yellow-600">{blogStats.draftPosts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-2">Total Views</h3>
          <p className="text-3xl font-bold text-purple-600">{blogStats.totalViews.toLocaleString()}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow border">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {['posts', 'categories', 'seo', 'analytics'].map(tab => (
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

        {/* Posts Tab */}
        {activeTab === 'posts' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Blog Posts</h3>
              <button
                onClick={() => {
                  setSelectedPost(null)
                  setShowEditor(true)
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                New Post
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {posts.map(post => (
                    <tr key={post.id}>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{post.title}</div>
                        <div className="text-sm text-gray-500">{post.excerpt}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          post.status === 'published' ? 'bg-green-100 text-green-800' :
                          post.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{post.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{post.views || 0}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm space-x-2">
                        <button
                          onClick={() => {
                            setSelectedPost(post)
                            setShowEditor(true)
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Edit
                        </button>
                        {post.status === 'draft' ? (
                          <button
                            onClick={() => publishPost(post.id)}
                            className="text-green-600 hover:text-green-800"
                          >
                            Publish
                          </button>
                        ) : (
                          <button
                            onClick={() => unpublishPost(post.id)}
                            className="text-yellow-600 hover:text-yellow-800"
                          >
                            Unpublish
                          </button>
                        )}
                        <button
                          onClick={() => deletePost(post.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Categories</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add Category
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map(category => (
                <div key={category.id} className="border rounded-lg p-4">
                  <h4 className="font-medium">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.description}</p>
                  <p className="text-xs text-gray-500 mt-2">{category.postCount} posts</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEO Tab */}
        {activeTab === 'seo' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">SEO Settings</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Meta Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="Default meta description for blog posts..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Keywords
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="digital marketing, web development, SlyyFoxxMedia"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog URL Structure
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>/blog/post-title</option>
                  <option>/blog/category/post-title</option>
                  <option>/blog/2024/post-title</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Blog Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Top Performing Posts</h4>
                <div className="space-y-2">
                  {posts.slice(0, 5).map(post => (
                    <div key={post.id} className="flex justify-between">
                      <span className="text-sm">{post.title}</span>
                      <span className="text-sm text-gray-500">{post.views || 0} views</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">Traffic Sources</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Organic Search</span>
                    <span className="text-sm text-gray-500">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Social Media</span>
                    <span className="text-sm text-gray-500">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Direct</span>
                    <span className="text-sm text-gray-500">25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Post Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {selectedPost ? 'Edit Post' : 'New Post'}
            </h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              savePost({
                title: formData.get('title'),
                content: formData.get('content'),
                excerpt: formData.get('excerpt'),
                category: formData.get('category'),
                tags: formData.get('tags'),
                metaDescription: formData.get('metaDescription'),
                status: formData.get('status')
              })
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    name="title"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    defaultValue={selectedPost?.title || ''}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <textarea
                    name="content"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={12}
                    defaultValue={selectedPost?.content || ''}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      name="category"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      defaultValue={selectedPost?.category || ''}
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      name="status"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      defaultValue={selectedPost?.status || 'draft'}
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="scheduled">Scheduled</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                  <textarea
                    name="excerpt"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    defaultValue={selectedPost?.excerpt || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                  <input
                    name="tags"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="web development, marketing, tips"
                    defaultValue={selectedPost?.tags || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                  <textarea
                    name="metaDescription"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={2}
                    defaultValue={selectedPost?.metaDescription || ''}
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {selectedPost ? 'Update Post' : 'Create Post'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowEditor(false)
                    setSelectedPost(null)
                  }}
                  className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}
    </div>
  )
}

export default BlogAdmin