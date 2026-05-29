"use client";
// import { useState } from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 px-6">
      {/* Logo */}
      <div className="flex-1">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-purple-600 text-white p-1.5 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span className="font-bold text-base leading-tight">Programming<br/>Hero</span>
        </a>
      </div>

      {/* Center Links */}
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-1 px-1">
          <li><a href="#" className="font-medium">Browse Jobs</a></li>
          <li><a href="#" className="font-medium">Company</a></li>
          <li><a href="#" className="font-medium">Pricing</a></li>

          {/* Divider */}
          <li className="flex items-center px-2">
            <span className="text-gray-500">|</span>
          </li>

          {/* Sign In */}
          <li><a href="#" className="font-medium text-purple-500">Sign In</a></li>
        </ul>
      </div>

      {/* Get Started Button */}
      <div className="flex-none ml-2">
        <a href="#" className="btn bg-white rounded-lg text-black px-5">
          Get Started
        </a>
      </div>
    </div>
  );
}