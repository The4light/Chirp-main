  import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TopHeader from "../components/TopHeader";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all");


  const notifications = [
    {
      id: 1,
      type: "follow",
      user: "Sarah Mitchell",
      handle: "sarahmitch",
      time: "5m",
      isRead: false
    },
    {
      id: 2,
      type: "like",
      user: "Michael Brown",
      handle: "mbrown",
      time: "12m",
      content: "Just finished implementing a new accessibility feature for our open-source project...",
      isRead: false
    },
    {
      id: 3,
      type: "boost",
      user: "Jennifer Lee",
      handle: "jlee",
      time: "28m",
      content: "The decentralized nature of the Fediverse is what drew me here...",
      isRead: false
    },
    {
      id: 4,
      type: "mention",
      user: "David Park",
      handle: "dpark",
      time: "1h",
      content: "@you Great insights on privacy-first development! Have you considered writing about data encryption standards as well?",
      isRead: true
    },
    {
      id: 5,
      type: "reply",
      user: "Amanda Chen",
      handle: "amandac",
      time: "2h",
      content: "I completely agree with your point about open source sustainability. We need more companies to step up and support maintainers.",
      isRead: true
    },
    {
      id: 6,
      type: "boost",
      user: "Robert Taylor",
      handle: "rtaylor",
      time: "3h",
      content: "Working on a new blog post about privacy-first web development...",
      isRead: true
    },
    {
      id: 7,
      type: "like",
      user: "Jessica Wang",
      handle: "jwang",
      time: "4h",
      content: "Started learning Rust this week. The compiler is strict but I appreciate...",
      isRead: true
    },
    {
      id: 8,
      type: "follow",
      user: "Tom Anderson",
      handle: "tanderson",
      time: "5h",
      isRead: true
    },
    {
      id: 9,
      type: "mention",
      user: "Lisa Martinez",
      handle: "lmartinez",
      time: "6h",
      content: "@you Thanks for sharing this resource! Exactly what I needed for my project.",
      isRead: true
    },
    {
      id: 10,
      type: "boost",
      user: "Chris Johnson",
      handle: "cjohnson",
      time: "8h",
      content: "The beauty of Mastodon is that each instance has its own community culture...",
      isRead: true
    }
  ];

  // Filter notifications based on active tab
  const filteredNotifications = activeTab === "all" 
    ? notifications 
    : notifications.filter(notif => {
        if (activeTab === "mentions") {
          return notif.type === "mention" || notif.type === "reply";
        }
        if (activeTab === "likes") {
          return notif.type === "like";
        }
        if (activeTab === "boosts") {
          return notif.type === "boost";
        }
        if (activeTab === "follows") {
          return notif.type === "follow";
        }
        return true;
      });

  return (
    <div className="min-h-screen bg-gray-100 pb-16 lg:pb-0">
      <TopHeader />

      <div className="flex">
        <LeftSidebar />

        <main className="flex-1 bg-white lg:ml-[220px] xl:mr-[320px] mt-14">
          {/* Header */}
          <div className="border-b border-gray-200 px-3 lg:px-4 py-3 sticky top-14 z-10 bg-white">
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <h1 className="text-lg lg:text-xl font-semibold flex items-center gap-2">
                Notifications
                <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </h1>
              <button className="hidden lg:flex text-sm text-gray-500 hover:text-gray-800 items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Settings
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 lg:gap-2 overflow-x-auto pb-1 -mx-3 px-3 lg:mx-0 lg:px-0 scrollbar-hide">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-sm rounded-full flex items-center gap-1 lg:gap-2 whitespace-nowrap flex-shrink-0 ${
                  activeTab === "all"
                    ? "bg-gray-100 font-medium"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                All
              </button>
              <button
                onClick={() => setActiveTab("mentions")}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-sm rounded-full flex items-center gap-1 lg:gap-2 whitespace-nowrap flex-shrink-0 ${
                  activeTab === "mentions"
                    ? "bg-gray-100 font-medium"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Mentions
              </button>
              <button
                onClick={() => setActiveTab("likes")}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-sm rounded-full flex items-center gap-1 lg:gap-2 whitespace-nowrap flex-shrink-0 ${
                  activeTab === "likes"
                    ? "bg-gray-100 font-medium"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Likes
              </button>
              <button
                onClick={() => setActiveTab("boosts")}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-sm rounded-full flex items-center gap-1 lg:gap-2 whitespace-nowrap flex-shrink-0 ${
                  activeTab === "boosts"
                    ? "bg-gray-100 font-medium"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Boosts
              </button>
              <button
                onClick={() => setActiveTab("follows")}
                className={`px-3 lg:px-4 py-2 text-xs lg:text-sm rounded-full flex items-center gap-1 lg:gap-2 whitespace-nowrap flex-shrink-0 ${
                  activeTab === "follows"
                    ? "bg-gray-100 font-medium"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Follows
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div>
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notif) => (
                <NotificationItem key={notif.id} {...notif} />
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <p>No notifications in this category</p>
              </div>
            )}
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}

function NotificationItem({ type, user, handle, time, content, isRead }) {
  const [expanded, setExpanded] = useState(false);
  const getIcon = () => {
    switch (type) {
      case "like":
        return (
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        );
      case "follow":
        return (
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        );
      case "mention":
        return (
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
        );
      case "boost":
        return (
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        );
      case "reply":
        return (
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const getActionText = () => {
    switch (type) {
      case "like":
        return "liked your post";
      case "follow":
        return "followed you";
      case "mention":
        return "mentioned you";
      case "boost":
        return "boosted your post";
      case "reply":
        return "replied to your post";
      default:
        return "";
    }
  };

  return (
    <div className={`border-b border-gray-200 p-3 lg:p-4 hover:bg-gray-50 transition-colors flex gap-2 lg:gap-3 ${!isRead ? 'bg-blue-50' : ''}`}>
      {/* Icon */}
      <div className="flex-shrink-0">
        {getIcon()}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Avatar and User Info */}
        <div className="flex items-start gap-2">
          <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${handle}`}
            alt={user}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs lg:text-sm">
              <span className="font-semibold">{user}</span>{" "}
              <span className="text-gray-500">@{handle}</span>{" "}
              <span className="text-gray-500">{getActionText()}</span>{" "}
              <span className="text-gray-400">· {time}</span>
            </p>

            {content && (
<div
  onClick={() => setExpanded(!expanded)}
  className={`
    mt-2
    text-xs lg:text-sm
    text-gray-700
    bg-gray-100
    border border-gray-200
    rounded-lg
    p-2 lg:p-3
    break-words
    cursor-pointer
    transition-all
    ${expanded ? '' : 'line-clamp-2 lg:line-clamp-3'}
  `}
>
  {content}
</div>




            )}

            {type === "follow" && (
              <button className="mt-2 lg:mt-3 bg-black text-white text-xs lg:text-sm px-3 lg:px-4 py-1 lg:py-1.5 rounded-full hover:bg-gray-800 transition-colors">
                Follow Back
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Unread indicator */}
      {!isRead && (
        <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-1 lg:mt-2"></div>
      )}
    </div>
  );
}