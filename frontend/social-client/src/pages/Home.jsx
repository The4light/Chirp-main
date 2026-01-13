import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import PostCard from "../components/PostCard";
import TopHeader from "../components/TopHeader";

/**
 * Home.jsx
 * Page shell. Layout orchestration.
 */
export default function Home() {
  const FEED = [
    {
      id: 1,
      username: "Elena Rodriguez",
      handle: "elena_dev",
      time: "2h",
      content: "Just finished implementing a new accessibility feature for our open-source project. It's amazing how small changes can make such a big difference for users with disabilities. ♿",
      comments: 12,
      retweets: 34,
      likes: 89
    },
    {
      id: 2,
      username: "Marcus Johnson",
      handle: "marcusj",
      time: "4h",
      content: "The decentralized nature of the Fediverse is what drew me here. No single point of control, no algorithmic manipulation. Just genuine conversations between real people.",
      comments: 23,
      retweets: 67,
      likes: 142
    },
    {
      id: 3,
      username: "Yuki Tanaka",
      handle: "yukicode",
      time: "6h",
      content: "Working on a new blog post about privacy-first web development. It's 2026 and we still need to fight for user privacy every single day. What are your thoughts on data minimization?",
      comments: 45,
      retweets: 91,
      likes: 203
    },
    {
      id: 4,
      username: "David Kim",
      handle: "davidkim",
      time: "8h",
      content: "Reminder: Open source doesn't mean 'free labor.' If you use open source software in your business, consider sponsoring the maintainers. They're keeping your infrastructure running.",
      comments: 18,
      retweets: 156,
      likes: 287
    },
    {
      id: 5,
      username: "Priya Sharma",
      handle: "priya_tech",
      time: "10h",
      content: "Started learning Rust this week. The compiler is strict but I appreciate how it guides you toward writing better code. Any resources you'd recommend for a beginner?",
      comments: 34,
      retweets: 28,
      likes: 76
    },
    {
      id: 6,
      username: "Thomas Mueller",
      handle: "tmueller",
      time: "12h",
      content: "The beauty of Mastodon is that each instance has its own community culture. Find one that aligns with your values and you'll have a much better experience than on corporate social media.",
      comments: 56,
      retweets: 124,
      likes: 298
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <TopHeader />

      <div className="flex">
        <LeftSidebar />

        <main className="flex-1 bg-white ml-[220px] mr-[320px] mt-16">
          {/* Timeline header */}
          <div className="border-b border-gray-200 px-4 py-3 sticky top-16 z-10 bg-white">
            <h2 className="text-lg font-semibold">Home Timeline</h2>
          </div>

          {/* Feed */}
          <div>
            {FEED.map((post) => (
              <PostCard
                key={post.id}
                username={post.username}
                handle={post.handle}
                time={post.time}
                content={post.content}
                comments={post.comments}
                retweets={post.retweets}
                likes={post.likes}
              />
            ))}
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}