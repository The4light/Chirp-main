import {Link} from "react-router-dom";

export default function LeftSidebar() {
  return (
    <aside className="w-64 bg-white h-screen sticky top-16 flex flex-col border-r border-gray-200 flex-shrink-0">
      {/* Scrollable Navigation */}
      <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
        <Link to="/">
          <button className="w-full text-left px-3 py-2.5 rounded-lg bg-gray-100 font-medium flex items-center gap-3 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </button> 
        </Link>
         
        <Link to="/explore">
          <button className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Explore
          </button>
        </Link>
        
        <Link to="/notifications">
          <button className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Notifications
          </button>
        </Link>

        <Link to="/profile">
          <button className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </button>
        </Link>
        
        <Link to="/settings">
          <button className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
        </Link>
      </nav>

      {/* Fixed New Post button at bottom */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <button className="w-full bg-black text-white py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors">
          New Post
        </button>
      </div>
    </aside>
  );
}