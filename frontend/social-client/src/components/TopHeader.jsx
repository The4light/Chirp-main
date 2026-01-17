import { useState } from "react";

export default function TopHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center px-4 fixed top-0 left-0 right-0 lg:left-[220px] xl:right-[320px] z-20">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden mr-3"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Logo & App Name (Mobile) */}
      <div className="flex items-center gap-2 lg:hidden">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
          <span className="text-white font-semibold text-xs">C</span>
        </div>
        <span className="font-bold">Chirp</span>
      </div>

      {/* Search Bar (Desktop) */}
<div className="hidden lg:flex flex-1 justify-center px-4 max-w-2xl mx-auto">
  <div className="relative w-full">
    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input
      type="text"
      placeholder="Search Chirp"
      className="w-full bg-gray-100 rounded-full pl-12 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
    />
  </div>
</div>
      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Search Icon (Mobile) */}
      <button className="lg:hidden p-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Profile Avatar */}
      <img 
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
        alt="Profile"
        className="w-8 h-8 lg:w-10 lg:h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
      />

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="p-4">
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg">
              Settings
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-red-600">
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}