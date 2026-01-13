import PostCard from "../PostCard";

export default function ProfileFeed() {
  const userPosts = [
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
      username: "Elena Rodriguez",
      handle: "elena_dev",
      time: "5h",
      content: "Working on a new blog post about privacy-first web development. It's 2026 and we still need to fight for user privacy every single day. What are your thoughts on data minimization?",
      comments: 45,
      retweets: 91,
      likes: 203
    },
    {
      id: 3,
      username: "Elena Rodriguez",
      handle: "elena_dev",
      time: "1d",
      content: "Reminder: Open source doesn't mean 'free labor.' If you use open source software in your business, consider sponsoring the maintainers. They're keeping your infrastructure running.",
      comments: 18,
      retweets: 156,
      likes: 287
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {userPosts.map((post) => (
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
  );
}