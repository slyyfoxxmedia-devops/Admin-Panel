import { useState } from 'react'

const AudioProcessing = () => {
  const [activeTab, setActiveTab] = useState('library')

  const processingStats = {
    totalFiles: '12,847',
    processingQueue: '23',
    storageUsed: '2.4 TB',
    monthlyPlays: '156K',
    conversionRate: '98.7%'
  }

  const audioLibrary = [
    { id: 1, filename: 'epic-orchestral-theme.mp3', title: 'Epic Orchestral Theme', artist: 'AudioMaster', duration: '3:45', size: '8.7 MB', format: 'MP3', status: 'Processed', uploadDate: '2024-01-15' },
    { id: 2, filename: 'podcast-episode-001.wav', title: 'Startup Stories Episode 1', artist: 'TechTalk', duration: '45:23', size: '156 MB', format: 'WAV', status: 'Processing', uploadDate: '2024-01-15' },
    { id: 3, filename: 'audiobook-chapter-1.m4a', title: 'Digital Marketing Guide Ch1', artist: 'BusinessBooks', duration: '28:12', size: '67 MB', format: 'M4A', status: 'Processed', uploadDate: '2024-01-14' },
    { id: 4, filename: 'sound-effects-pack.zip', title: 'UI Sound Effects Pack', artist: 'SoundDesign', duration: '12:34', size: '23 MB', format: 'ZIP', status: 'Failed', uploadDate: '2024-01-14' }
  ]

  const processingQueue = [
    { id: 1, filename: 'new-podcast-episode.wav', operation: 'Format Conversion', progress: 67, eta: '3 minutes', priority: 'High' },
    { id: 2, filename: 'music-album-track-5.flac', operation: 'Waveform Generation', progress: 23, eta: '8 minutes', priority: 'Medium' },
    { id: 3, filename: 'audiobook-chapter-12.mp3', operation: 'Transcription', progress: 89, eta: '1 minute', priority: 'Low' },
    { id: 4, filename: 'sound-effect-explosion.wav', operation: 'Quality Optimization', progress: 45, eta: '5 minutes', priority: 'Medium' }
  ]

  const playerTemplates = [
    { id: 1, name: 'Marketplace Player', type: 'Product Preview', features: ['Play/Pause', 'Progress Bar', 'Volume', 'Download'], usage: 1247 },
    { id: 2, name: 'Podcast Player', type: 'Full Episode', features: ['Play/Pause', 'Progress Bar', 'Speed Control', 'Chapters'], usage: 567 },
    { id: 3, name: 'Audiobook Player', type: 'Chapter Navigation', features: ['Play/Pause', 'Progress Bar', 'Bookmarks', 'Speed Control'], usage: 234 },
    { id: 4, name: 'Music Player', type: 'Track Listing', features: ['Play/Pause', 'Progress Bar', 'Playlist', 'Repeat'], usage: 890 }
  ]

  const contentModeration = [
    { id: 1, filename: 'suspicious-audio-file.mp3', issue: 'Potential Copyright Match', confidence: '87%', status: 'Under Review', flaggedDate: '2024-01-15' },
    { id: 2, filename: 'podcast-explicit-content.wav', issue: 'Explicit Language Detected', confidence: '94%', status: 'Approved', flaggedDate: '2024-01-14' },
    { id: 3, filename: 'music-track-sample.mp3', issue: 'Copyright Claim', confidence: '76%', status: 'Rejected', flaggedDate: '2024-01-13' },
    { id: 4, filename: 'audiobook-narration.m4a', issue: 'Quality Issues', confidence: '65%', status: 'Pending', flaggedDate: '2024-01-12' }
  ]

  return (
    <div className="space-y-6">
      {/* Audio Processing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">Total Files</h3>
          <p className="text-3xl font-bold text-blue-600">{processingStats.totalFiles}</p>
          <p className="text-sm text-blue-600">Audio files managed</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800">Processing Queue</h3>
          <p className="text-3xl font-bold text-yellow-600">{processingStats.processingQueue}</p>
          <p className="text-sm text-yellow-600">Files in queue</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-800">Storage Used</h3>
          <p className="text-3xl font-bold text-purple-600">{processingStats.storageUsed}</p>
          <p className="text-sm text-purple-600">Total audio storage</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-800">Monthly Plays</h3>
          <p className="text-3xl font-bold text-green-600">{processingStats.monthlyPlays}</p>
          <p className="text-sm text-green-600">+23% from last month</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800">Success Rate</h3>
          <p className="text-3xl font-bold text-orange-600">{processingStats.conversionRate}</p>
          <p className="text-sm text-orange-600">Processing success</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'library', label: 'Audio Library', icon: '🎵' },
            { id: 'processing', label: 'Processing Queue', icon: '⚙️' },
            { id: 'players', label: 'Player Templates', icon: '🎛️' },
            { id: 'moderation', label: 'Content Moderation', icon: '🛡️' },
            { id: 'settings', label: 'Processing Settings', icon: '🔧' }
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

      {/* Audio Library */}
      {activeTab === 'library' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Audio File Library</h3>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Formats</option>
                  <option>MP3</option>
                  <option>WAV</option>
                  <option>M4A</option>
                  <option>FLAC</option>
                </select>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>All Status</option>
                  <option>Processed</option>
                  <option>Processing</option>
                  <option>Failed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Artist</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Format</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {audioLibrary.map((file) => (
                  <tr key={file.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="flex items-center">
                        <span className="mr-2">🎵</span>
                        <div>
                          <div className="font-medium">{file.filename}</div>
                          <div className="text-xs text-gray-500">{file.size}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{file.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{file.artist}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{file.duration}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        file.format === 'MP3' ? 'bg-blue-100 text-blue-800' :
                        file.format === 'WAV' ? 'bg-green-100 text-green-800' :
                        file.format === 'M4A' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {file.format}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        file.status === 'Processed' ? 'bg-green-100 text-green-800' :
                        file.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {file.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Play</button>
                      <button className="text-green-600 hover:text-green-800">Generate Player</button>
                      <button className="text-purple-600 hover:text-purple-800">Embed</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Processing Queue */}
      {activeTab === 'processing' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Audio Processing Queue</h3>
              <div className="flex space-x-2">
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
                  Pause Queue
                </button>
                <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                  Process All
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Filename</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Operation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ETA</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {processingQueue.map((job) => (
                  <tr key={job.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{job.filename}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{job.operation}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-burnt-orange h-2 rounded-full" 
                            style={{ width: `${job.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{job.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{job.eta}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        job.priority === 'High' ? 'bg-red-100 text-red-800' :
                        job.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {job.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Prioritize</button>
                      <button className="text-red-600 hover:text-red-800">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Player Templates */}
      {activeTab === 'players' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Audio Player Templates</h3>
              <button className="bg-burnt-orange text-white px-4 py-2 rounded hover:bg-burnt-orange/90">
                Create Template
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {playerTemplates.map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{template.name}</h4>
                      <p className="text-sm text-gray-600">{template.type}</p>
                    </div>
                    <span className="text-sm text-gray-500">{template.usage} uses</span>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 text-blue-600 hover:text-blue-800 text-sm">Preview</button>
                    <button className="flex-1 text-green-600 hover:text-green-800 text-sm">Edit</button>
                    <button className="flex-1 text-purple-600 hover:text-purple-800 text-sm">Generate Code</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Player Customization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <div className="flex items-center space-x-2">
                  <input type="color" value="#ea580c" className="w-12 h-8 border border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Burnt Orange (#ea580c)</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                <div className="flex items-center space-x-2">
                  <input type="color" value="#000000" className="w-12 h-8 border border-gray-300 rounded" />
                  <span className="text-sm text-gray-600">Black (#000000)</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Player Height</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>Compact (60px)</option>
                  <option>Standard (80px)</option>
                  <option>Large (120px)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Auto-play</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Moderation */}
      {activeTab === 'moderation' && (
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Audio Content Moderation</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Filename</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Confidence</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Flagged Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contentModeration.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.filename}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.issue}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.confidence}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        item.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                        item.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.flaggedDate}</td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-green-600 hover:text-green-800">Approve</button>
                      <button className="text-red-600 hover:text-red-800">Reject</button>
                      <button className="text-blue-600 hover:text-blue-800">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Processing Settings */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Audio Processing Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Output Format</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>MP3 (320kbps)</option>
                  <option>MP3 (256kbps)</option>
                  <option>MP3 (128kbps)</option>
                  <option>AAC (256kbps)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preview Length</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>30 seconds</option>
                  <option>60 seconds</option>
                  <option>90 seconds</option>
                  <option>Full track</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Auto-generate Waveforms</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Copyright Detection</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border p-6">
            <h3 className="text-lg font-semibold mb-4">Storage & CDN Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Storage Location</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>S3 US-East-1</option>
                  <option>S3 US-West-2</option>
                  <option>S3 EU-West-1</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CDN Distribution</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burnt-orange"></div>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max File Size</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>100 MB</option>
                  <option>250 MB</option>
                  <option>500 MB</option>
                  <option>1 GB</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Backup Retention</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>30 days</option>
                  <option>90 days</option>
                  <option>1 year</option>
                  <option>Permanent</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AudioProcessing