import React from "react";

export function Footer() {
  const ChevronIcon = () => (
    <svg className="w-4 h-4 text-[#f95722] flex-none mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );

  return (
    <footer className="bg-[#faf9f8] py-10 sm:py-14 px-4 sm:px-6 border-t border-slate-200/80">
      <div className="max-w-[1240px] mx-auto bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-sm">
        {/* Top Section: Branding + Links Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">
          {/* Left Branding Column */}
          <div className="lg:w-1/4 flex flex-col justify-between">
            <div>
              <a className="inline-flex items-center gap-3 font-bold text-slate-900 text-xl tracking-tight" href="#top">
                <span className="w-10 h-10 rounded-xl bg-[#f95722] text-white flex items-center justify-center font-extrabold text-lg rotate-45 shadow-sm">
                  <span className="-rotate-45">N</span>
                </span>
                <span className="font-serif-heading font-bold text-2xl text-slate-900">Nova Restro</span>
              </a>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed max-w-[220px]">
                One intelligent system<br />
                that runs your entire<br />
                restaurant, beautifully.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-600 hover:text-[#f95722] hover:bg-orange-50 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-600 hover:text-[#f95722] hover:bg-orange-50 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href="mailto:hello@novarestro.com" className="w-10 h-10 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-600 hover:text-[#f95722] hover:bg-orange-50 transition-colors" aria-label="Email">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1px] bg-slate-200/70 self-stretch my-1" />

          {/* Right Links Columns Grid */}
          <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {/* Column 1: HOW IT WORKS */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-orange-50/90 border border-orange-100/90 flex items-center justify-center p-2 flex-none shadow-2xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/contact/How it works.png" alt="How it works icon" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">HOW IT WORKS</h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li><a href="#step-1" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> 1. Scan</a></li>
                <li><a href="#step-2" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> 2. Ask</a></li>
                <li><a href="#step-3" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> 3. Order</a></li>
                <li><a href="#step-4" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> 4. Check</a></li>
                <li><a href="#step-5" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> 5. Cook</a></li>
                <li><a href="#step-6" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> 6. Serve</a></li>
                <li><a href="#step-7" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> 7. Pay</a></li>
              </ul>
            </div>

            {/* Column 2: FOR YOUR TEAM */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-orange-50/90 border border-orange-100/90 flex items-center justify-center p-2 flex-none shadow-2xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/contact/For your team.png" alt="For your team icon" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">FOR YOUR TEAM</h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li><a href="#team" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> Guest</a></li>
                <li><a href="#team" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> Kitchen</a></li>
                <li><a href="#team" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> Waiter</a></li>
                <li><a href="#team" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> Manager</a></li>
                <li><a href="#team" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> Owner</a></li>
                <li><a href="#roi" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> What it&apos;s worth</a></li>
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-orange-50/90 border border-orange-100/90 flex items-center justify-center p-2 flex-none shadow-2xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/contact/Company.png" alt="Company icon" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">COMPANY</h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li><a href="#" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> About</a></li>
                <li><a href="mailto:hello@novarestro.com" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> Contact</a></li>
                <li><a href="#" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> Privacy</a></li>
                <li><a href="#" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> Terms of Service</a></li>
              </ul>
            </div>

            {/* Column 4: SUPPORT */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-orange-50/90 border border-orange-100/90 flex items-center justify-center p-2 flex-none shadow-2xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/contact/support.png" alt="Support icon" className="w-full h-full object-contain" />
                </div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">SUPPORT</h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li><a href="#" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> Help Center</a></li>
                <li><a href="#questions" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> FAQ</a></li>
                <li><a href="#" className="inline-flex items-center hover:text-[#f95722] transition-colors"><ChevronIcon /> System Status</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Callout Card: Ready to see it in action? */}
        <div className="bg-[#fffbf8] border border-orange-200/60 rounded-2xl p-6 sm:p-8 shadow-2xs my-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left headset text */}
          <div className="flex items-center gap-4 text-left flex-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-50/90 border border-orange-100/90 flex items-center justify-center p-3 flex-none shadow-2xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/contact/headset.png" alt="Headset icon" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">Ready to see it in action?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Book a personalized walkthrough and see how Nova Restro can transform your restaurant operations.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <a
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#f95722] hover:bg-[#e04815] !text-white font-semibold text-sm sm:text-base transition-all shadow-md shadow-orange-500/20 whitespace-normal sm:whitespace-nowrap flex-none gap-2 inline-flex items-center justify-center"
            href="mailto:hello@novarestro.com?subject=Nova%20Restro%20walkthrough"
          >
            <span>Book a walkthrough</span>
            <span className="text-lg">→</span>
          </a>

          {/* Vertical divider */}
          <div className="hidden lg:block w-[1px] bg-slate-200/80 self-stretch my-1" />

          {/* Email right section */}
          <div className="flex items-center gap-4 flex-none text-left">
            <div className="w-[52px] h-[52px] sm:w-14 sm:h-14 rounded-full bg-orange-50/90 border border-orange-100/90 flex items-center justify-center p-3 flex-none shadow-2xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/contact/email.png" alt="Email icon" className="w-full h-full object-contain" />
            </div>
            <div>
              <a href="mailto:hello@novarestro.com" className="font-bold text-slate-900 text-sm sm:text-base hover:text-[#f95722] transition-colors block break-all">
                hello@novarestro.com
              </a>
              <p className="text-xs text-slate-400 mt-0.5">We usually reply within a few hours.</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>© 2026 Nova Restro. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>Secure. Reliable. Built for real restaurants.</span>
          </span>
          <span>Built by <strong className="text-[#f95722] font-semibold">NovaCrystara AI Labs</strong></span>
        </div>
      </div>
    </footer>
  );
}
