/**
 * PostCard
 * Represents ONE post in the feed.
 */
export default function PostCard({ username, handle, time, content, avatar, comments, retweets, likes }) {
  return (
    <div className="bg-white border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex gap-3">
        {/* Avatar */}
        <img 
          src={avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${handle}`}
          alt={username}
          className="w-12 h-12 rounded-full flex-shrink-0"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* User info */}
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-semibold text-sm">{username}</span>
            <span className="text-gray-500 text-sm">@{handle}</span>
            <span className="text-gray-500 text-sm">· {time}</span>
          </div>

          {/* Post content */}
          <p className="mt-1 text-sm leading-relaxed text-gray-900">
            {content}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-6 mt-3 text-gray-500">
            <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-xs">{comments || 12}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-xs">{retweets || 34}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs">{likes || 89}</span>
            </button>
            <button className="hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}