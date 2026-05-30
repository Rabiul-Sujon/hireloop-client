"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-black/40 backdrop-blur-md px-6 md:px-16 lg:px-24 py-4 fixed top-0 z-50 border-b border-neutral-900/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 1. Left Side: Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-tr from-purple-600 to-indigo-500 text-white p-1.5 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span className="font-bold text-base leading-tight text-white tracking-tight">
            Programming<br/>
            <span className="text-xs font-medium block text-neutral-400 -mt-0.5">Hero</span>
          </span>
        </Link>

        {/* Right Action Group */}
        <div className="flex items-center gap-4">
          
          {/* 2. Center-Right: The Custom Floating Capsule Menu */}
          <nav className="bg-[#161618]/90 border border-neutral-800/40 rounded-xl px-2 py-1.5 hidden md:flex items-center">
            <ul className="flex items-center gap-1 text-sm font-medium text-neutral-400">
              <li>
                <Link href="/jobs" className="px-4 py-2 rounded-lg hover:text-white transition-colors block">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/companies" className="px-4 py-2 rounded-lg hover:text-white transition-colors block">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="px-4 py-2 rounded-lg hover:text-white transition-colors block">
                  Pricing
                </Link>
              </li>

              {/* Elegant thin divider line */}
              <div className="w-[1px] h-4 bg-neutral-800 self-center mx-2" />

              {/* Sign In Links */}
              <li>
                <Link href="/sign-in" className="px-4 py-2 text-indigo-400 hover:text-indigo-300 transition-colors block">
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>

          {/* 3. Far Right: Accent CTA Button */}
          <Link 
            href="/get-started" 
            className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-neutral-200 transition-all shadow-lg active:scale-95 block"
          >
            Get Started
          </Link>
          
        </div>
      </div>
    </header>
  );
}