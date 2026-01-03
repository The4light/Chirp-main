import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TopHeader from "../components/TopHeader";

export default function Explore() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <TopHeader />

      <div className="flex">
        <LeftSidebar />

        <main className="flex-1 max-w-3xl mx-auto px-6 py-6">
          <h1 className="text-xl font-semibold mb-4">Explore</h1>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-gray-200 mb-6">
            {["posts", "hashtags", "news", "people"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm rounded-full capitalize ${
                  activeTab === tab
                    ? "bg-gray-200 font-medium"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === "posts" && <ExplorePosts />}
          {activeTab === "hashtags" && <ExploreHashtags />}
          {activeTab === "news" && <ExploreNews />}
          {activeTab === "people" && <ExplorePeople />}
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}
function ExplorePosts() {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <p className="font-medium">Trending posts from across Chirp</p>
      </div>
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
      ].map((item) => (
        <div
          key={item.tag}
          className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{item.tag}</p>
            <p className="text-sm text-gray-500">{item.posts} posts</p>
          </div>
          <span className="text-green-600 text-sm font-medium">
            {item.growth}
          </span>
        </div>
      ))}
    </div>
  );
}

function ExploreNews() {
  return (
    <div className="space-y-6">
      {[
        "New Web Standards Approved for Enhanced Privacy Controls",
        "Open Source Community Reaches Major Accessibility Milestone",
        "Decentralized Platforms See Massive User Growth",
      ].map((title) => (
        <div
          key={title}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden"
        >
          <div className="h-40 bg-gray-200" />
          <div className="p-4 font-medium">{title}</div>
        </div>
      ))}
    </div>
  );
}

function ExplorePeople() {
  return (
    <div className="space-y-4">
      {[
        { name: "Dr. Emma Thompson", handle: "emma_research" },
        { name: "Carlos Santos", handle: "carlos_design" },
        { name: "Nina Patel", handle: "nina_security" },
      ].map((user) => (
        <div
          key={user.handle}
          className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">@{user.handle}</p>
            </div>
          </div>
          <button className="bg-black text-white text-sm px-4 py-1 rounded-full">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
