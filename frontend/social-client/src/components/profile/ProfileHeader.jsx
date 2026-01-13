export default function ProfileHeader() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Banner */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500" />

        {/* Avatar */}
        <div className="absolute -bottom-16 left-6">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
            alt="Elena Rodriguez"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="pt-20 px-6 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Elena Rodriguez</h1>
            <p className="text-gray-500">@elena_dev</p>
          </div>

          <button className="border border-gray-300 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            Edit profile
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-700 max-w-xl leading-relaxed">
          Software engineer passionate about accessibility, privacy, and open-source.
          Building tools that respect users. 🛠️✨
        </p>

        {/* Additional Info */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <a href="https://elena.dev" className="text-blue-600 hover:underline">elena.dev</a>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Joined March 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}