export default function TopHeader() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 sticky top-0 z-10">
      {/* Left: Logo & App Name */}
      <div className="flex items-center gap-3 w-64">
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold">
          C
        </div>
        <span className="text-xl font-bold">Chirp</span>
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 flex justify-center px-4">
        <div className="relative w-full max-w-xl">
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-full pl-12 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right: Profile avatar */}
      <div className="w-64 flex justify-end">
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>
    </header>
  );
}