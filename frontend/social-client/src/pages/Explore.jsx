import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TopHeader from "../components/TopHeader";

export default function Explore() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen bg-gray-100 pb-16 lg:pb-0">
      <TopHeader />

      <div className="flex">
        <LeftSidebar />

        <main className="flex-1 bg-white lg:ml-[220px] xl:mr-[320px] mt-14">
          {/* Header */}
          <div className="border-b border-gray-200 px-4 py-3 sticky top-14 z-10 bg-white">
            <h1 className="text-xl font-semibold mb-4">Explore</h1>

            {/* Tabs */}
            <div className="flex gap-2">
              {["posts", "hashtags", "news", "people"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm rounded-full capitalize transition-colors ${
                    activeTab === tab
                      ? "bg-gray-100 font-medium"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {activeTab === "posts" && <ExplorePosts />}
            {activeTab === "hashtags" && <ExploreHashtags />}
            {activeTab === "news" && <ExploreNews />}
            {activeTab === "people" && <ExplorePeople />}
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}

function ExplorePosts() {
  const posts = [
    {
      id: 1,
      user: "Elena Rodriguez",
      handle: "elena_dev",
      time: "2h",
      content: "Just finished implementing a new accessibility feature for our open-source project. It's amazing how small changes can make such a big difference for users with disabilities. ♿",
      likes: 234,
      comments: 45,
      boosts: 67
    },
    {
      id: 2,
      user: "Marcus Johnson",
      handle: "marcusj",
      time: "4h",
      content: "The decentralized nature of the Fediverse is what drew me here. No single point of control, no algorithmic manipulation. Just genuine conversations between real people.",
      likes: 189,
      comments: 32,
      boosts: 54
    },
    {
      id: 3,
      user: "Yuki Tanaka",
      handle: "yukicode",
      time: "6h",
      content: "Working on a new blog post about privacy-first web development. It's 2026 and we still need to fight for user privacy every single day. What are your thoughts on data minimization?",
      likes: 312,
      comments: 78,
      boosts: 91
    }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4 text-center">
        <p className="font-medium text-gray-700">Trending posts from across Chirp</p>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors">
          <div className="flex gap-3">
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.handle}`}
              alt={post.user}
              className="w-12 h-12 rounded-full flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="font-semibold text-sm">{post.user}</span>
                <span className="text-gray-500 text-sm">@{post.handle}</span>
                <span className="text-gray-500 text-sm">· {post.time}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-gray-900">{post.content}</p>
              
              <div className="flex items-center gap-6 mt-3 text-gray-500">
                <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-xs">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-xs">{post.boosts}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-xs">{post.likes}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ExploreHashtags() {
  return (
    <div className="space-y-4">
      {[
        { tag: "#OpenSource", posts: "12.4K", growth: "+23%" },
        { tag: "#WebDev", posts: "15.7K", growth: "+18%" },
        { tag: "#Privacy", posts: "6.1K", growth: "+45%" },
        { tag: "#Accessibility", posts: "8.2K", growth: "+31%" },
        { tag: "#Fediverse", posts: "9.8K", growth: "+27%" },
        { tag: "#React", posts: "21.3K", growth: "+15%" },
      ].map((item) => (
        <div
          key={item.tag}
          className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <div>
            <p className="font-semibold text-blue-600 text-lg">{item.tag}</p>
            <p className="text-sm text-gray-500">{item.posts} posts</p>
          </div>
          <span className="text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
            {item.growth}
          </span>
        </div>
      ))}
    </div>
  );
}

function ExploreNews() {
  return (
    <div className="space-y-4">
      {[
        {
          title: "New Web Standards Approved for Enhanced Privacy Controls",
          source: "Tech News",
          time: "2h ago"
        },
        {
          title: "Open Source Community Reaches Major Accessibility Milestone",
          source: "Dev Weekly",
          time: "5h ago"
        },
        {
          title: "Decentralized Platforms See Massive User Growth",
          source: "Social Media Today",
          time: "8h ago"
        },
        {
          title: "Privacy-First Development Becomes Industry Standard",
          source: "Code Magazine",
          time: "12h ago"
        },
      ].map((article, index) => (
        <div
          key={index}
          className="bg-[#f8f9fa] border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <div className="p-4">
            <p className="font-semibold text-gray-900 mb-2">{article.title}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{article.source}</span>
              <span>•</span>
              <span>{article.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ExplorePeople() {
  return (
    <div className="space-y-4">
      {[
        { name: "Dr. Emma Thompson", handle: "emma_research", bio: "Research scientist specializing in AI ethics" },
        { name: "Carlos Santos", handle: "carlos_design", bio: "Product designer passionate about accessibility" },
        { name: "Nina Patel", handle: "nina_security", bio: "Cybersecurity expert and privacy advocate" },
        { name: "James Chen", handle: "james_dev", bio: "Full-stack developer, open source contributor" },
        { name: "Sofia Rodriguez", handle: "sofia_writes", bio: "Tech writer covering web standards and APIs" },
      ].map((user) => (
        <div
          key={user.handle}
          className="bg-[#f8f9fa] border border-gray-200 rounded-xl p-4 hover:bg-gray-100 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3 flex-1">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.handle}`}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">@{user.handle}</p>
                <p className="text-sm text-gray-600 mt-1">{user.bio}</p>
              </div>
            </div>
            <button className="bg-black text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0">
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}