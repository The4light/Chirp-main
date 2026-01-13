export default function ProfileStats() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-6 py-4">
      <div className="flex gap-8 text-sm">
        <button className="hover:underline transition-all">
          <span className="font-bold text-gray-900">1,247</span>{" "}
          <span className="text-gray-600">Posts</span>
        </button>
        <button className="hover:underline transition-all">
          <span className="font-bold text-gray-900">432</span>{" "}
          <span className="text-gray-600">Following</span>
        </button>
        <button className="hover:underline transition-all">
          <span className="font-bold text-gray-900">1,893</span>{" "}
          <span className="text-gray-600">Followers</span>
        </button>
      </div>
    </div>
  );
}