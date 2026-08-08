"use client";
import React, { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        <a className="flex items-center gap-2.5 font-bold text-slate-900 text-lg tracking-tight hover:opacity-90 transition-opacity" href="#top">
          <span className="w-7.5 h-7.5 rounded-lg bg-orange-600 text-white flex items-center justify-center font-extrabold text-sm rotate-45 shadow-sm">
            <span className="-rotate-45">N</span>
          </span>
          Nova Restro
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 ml-auto mr-4" aria-label="Main Navigation">
          <a className="text-[15px] font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#how">How it works</a>
          <a className="text-[15px] font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#team">For your team</a>
          <a className="text-[15px] font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#roi">What it&apos;s worth</a>
          <a className="text-[15px] font-medium text-slate-600 hover:text-orange-600 transition-colors" href="#questions">Questions</a>
        </nav>

        {/* CTA Button matching crisp white text */}
        <a className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] !text-white text-[15px] font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-600/35" href="#see-it">
          See it working
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 border border-slate-200 rounded-xl bg-white text-slate-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-600"
          id="burger"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="sheet"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Navigation Sheet */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3 animate-in slide-in-from-top duration-200" id="sheet">
          <a className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-orange-600" href="#how" onClick={handleLinkClick}>
            How it works
          </a>
          <a className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-orange-600" href="#team" onClick={handleLinkClick}>
            For your team
          </a>
          <a className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-orange-600" href="#roi" onClick={handleLinkClick}>
            What it&apos;s worth
          </a>
          <a className="block py-2.5 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-orange-600" href="#questions" onClick={handleLinkClick}>
            Questions
          </a>
          <a className="w-full flex items-center justify-center py-3 rounded-full bg-[#ea580c] hover:bg-[#c2410c] !text-white font-semibold text-center mt-4 shadow-lg shadow-orange-600/35" href="#see-it" onClick={handleLinkClick}>
            See it working
          </a>
        </div>
      )}
    </header>
  );
}
