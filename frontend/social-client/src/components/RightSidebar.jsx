export default function RightSidebar() {
  return (
    <aside className="w-96 bg-white h-screen sticky top-16 p-4 space-y-6 border-l border-gray-200 overflow-y-auto flex-shrink-0">
      {/* Trending Now */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Trending Now
        </h3>
        <ul className="space-y-3">
          {[
            { tag: '#OpenSource', posts: '12.4K posts' },
            { tag: '#Accessibility', posts: '8.2K posts' },
            { tag: '#WebDev', posts: '15.7K posts' },
            { tag: '#Privacy', posts: '6.1K posts' },
            { tag: '#Fediverse', posts: '9.8K posts' }
          ].map((trend, i) => (
            <li key={i} className="text-sm">
              <div className="font-medium text-gray-900">{trend.tag}</div>
              <div className="text-xs text-gray-500">{trend.posts}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Who to Follow */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h3 className="font-semibold mb-4">Who to Follow</h3>
        <div className="space-y-3">
          {[
            { name: 'Sarah Chen', handle: 'sarahchen' },
            { name: 'Alex Rivera', handle: 'alexrivera' },
            { name: 'Maya Patel', handle: 'mayapatel' }
          ].map((user, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.handle}`}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium text-sm">{user.name}</div>
                  <div className="text-xs text-gray-500">@{user.handle}</div>
                </div>
              </div>
              <button className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Server Announcements */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h3 className="font-semibold mb-2">Server Announcements</h3>
        <p className="text-sm text-gray-600 mb-3">
          Welcome to the community! Please read our guidelines and introduce yourself.
        </p>
        <button className="text-sm text-blue-600 hover:underline">Read more →</button>
      </div>
    </aside>
  );
}