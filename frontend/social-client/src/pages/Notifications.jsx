import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import TopHeader from "../components/TopHeader";

const tabs = ["all", "mentions", "likes", "boosts", "follows"];

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <TopHeader />

      <div className="flex">
        <LeftSidebar />

        <main className="flex-1 max-w-3xl mx-auto px-6 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">
              Notifications <span className="text-blue-600">3</span>
            </h1>
            <button className="text-sm text-gray-500 hover:text-gray-800">
              Settings
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-gray-200 mb-6">
            {tabs.map((tab) => (
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
          <div className="space-y-4">
            <NotificationItem
              type="follow"
              user="Sarah Mitchell"
              handle="sarahmitch"
              time="5m"
            />

            <NotificationItem
              type="like"
              user="Michael Brown"
              handle="mbrown"
              time="12m"
              content="Just finished implementing a new accessibility feature..."
            />

            <NotificationItem
              type="mention"
              user="David Park"
              handle="dpark"
              time="1h"
              content="@you Great insights on privacy-first development!"
            />
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}

function NotificationItem({ type, user, handle, time, content }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3">
      {/* Icon */}
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
        {type === "like" && "❤️"}
        {type === "follow" && "➕"}
        {type === "mention" && "💬"}
        {type === "boost" && "🔁"}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-sm">
          <span className="font-medium">{user}</span>{" "}
          <span className="text-gray-500">@{handle}</span>{" "}
          <span className="text-gray-400">· {time}</span>
        </p>

        {content && (
          <div className="mt-2 text-sm text-gray-700 bg-gray-50 border rounded-lg p-3">
            {content}
          </div>
        )}

        {type === "follow" && (
          <button className="mt-3 bg-black text-white text-sm px-4 py-1 rounded-full">
            Follow Back
          </button>
        )}
      </div>
    </div>
  );
}

