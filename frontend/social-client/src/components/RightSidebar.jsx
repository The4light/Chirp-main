export default function RightSidebar() {
  const trendingTopics = [
    { tag: "#OpenSource", posts: "12.4k posts" },
    { tag: "#Accessibility", posts: "8.2k posts" },
    { tag: "#WebDev", posts: "15.7k posts" },
    { tag: "#Privacy", posts: "6.1k posts" },
    { tag: "#Fediverse", posts: "9.8k posts" },
  ];

  const suggestedUsers = [
    {
      name: "Sarah Chen",
      username: "sarahchen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Alex Rivera",
      username: "alexrivera",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    },
    {
      name: "Maya Patel",
      username: "mayapatel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <aside className="hidden xl:block w-[320px] h-screen fixed right-0 top-0 p-4 overflow-y-auto bg-white">
      {/* Trending Topics */}
      <div className="bg-[#f8f9fa] rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <h2 className="font-semibold text-gray-900">Trending Topics</h2>
        </div>
        <div className="space-y-4">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              className="w-full text-left hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <div className="text-blue-600 font-medium mb-0.5">
                {topic.tag}
              </div>
              <div className="text-sm text-gray-500">
                {topic.posts}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Who to Follow */}
      <div className="bg-[#f8f9fa] rounded-xl p-4 mb-4">
        <h2 className="font-semibold text-gray-900 mb-4">Who to Follow</h2>
        <div className="space-y-4">
          {suggestedUsers.map((user, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">
                  {user.name}
                </div>
                <div className="text-sm text-gray-500 truncate">
                  @{user.username}
                </div>
              </div>
              <button className="rounded-full bg-black text-white hover:bg-gray-800 px-4 py-1.5 text-xs font-medium transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Server Announcements */}
      <div className="bg-[#f8f9fa] rounded-xl p-4">
        <h2 className="font-semibold text-gray-900 mb-2">
          Server Announcements
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          Welcome to the community! Please read our guidelines and introduce yourself.
        </p>
        <button className="text-sm text-blue-600 hover:underline">
          Read more →
        </button>
      </div>
    </aside>
  );
}