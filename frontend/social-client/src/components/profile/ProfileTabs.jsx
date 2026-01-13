import { useState } from "react";

const tabs = ["Posts", "Replies", "Media", "Likes"];

export default function ProfileTabs() {
  const [active, setActive] = useState("Posts");

  return (
    <div className="bg-white border border-gray-200 rounded-xl">
      <div className="flex gap-6 px-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${
              active === tab
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}