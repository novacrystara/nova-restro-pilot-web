import React from "react";

export function SevenStepsMap() {
  const steps = [
    {
      num: 1,
      word: "SCAN",
      line: "The guest scans the code on the table.",
      target: "step-1",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 40 40" fill="none">
          {/* 4 Dark Navy Corner Brackets */}
          <path d="M6 13V8a3 3 0 0 1 3-3h5" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
          <path d="M26 5h5a3 3 0 0 1 3 3v5" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
          <path d="M34 27v5a3 3 0 0 1-3 3h-5" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
          <path d="M14 35H9a3 3 0 0 1-3-3v-5" stroke="#263238" strokeWidth="3" strokeLinecap="round" />

          {/* Top Left Peach/Terracotta Hollow Square */}
          <rect x="10" y="9.5" width="7" height="7" rx="1.5" stroke="#d97757" strokeWidth="2.2" fill="none" />

          {/* Top Right Peach/Terracotta Hollow Square */}
          <rect x="23" y="9.5" width="7" height="7" rx="1.5" stroke="#d97757" strokeWidth="2.2" fill="none" />

          {/* Top Center Small Dots */}
          <circle cx="20" cy="11" r="1" fill="#d97757" />
          <circle cx="20" cy="15" r="1" fill="#d97757" />

          {/* Thick Solid Orange Center Scan Line */}
          <line x1="7" y1="20" x2="33" y2="20" stroke="#f95722" strokeWidth="3.5" strokeLinecap="round" />

          {/* Bottom Left Dark Navy Hollow Square */}
          <rect x="10" y="23.5" width="7" height="7" rx="1.5" stroke="#263238" strokeWidth="2.2" fill="none" />

          {/* Bottom Right Dark Navy QR Matrix Dots */}
          <rect x="23" y="23.5" width="3" height="3" rx="0.5" fill="#263238" />
          <rect x="27.5" y="23.5" width="2.5" height="2.5" rx="0.5" fill="#263238" />
          <rect x="23" y="28" width="2.5" height="2.5" rx="0.5" fill="#263238" />
          <rect x="27" y="27.5" width="3" height="3" rx="0.5" fill="#263238" />
        </svg>
      ),
    },
    {
      num: 2,
      word: "ASK",
      line: "They ask anything about the food.",
      target: "step-2",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 40 40">
          <defs>
            <linearGradient id="askGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7043" />
              <stop offset="100%" stopColor="#e64a19" />
            </linearGradient>
          </defs>
          {/* Smooth Oval Speech Bubble */}
          <path
            d="M 20,7 C 28.5,7 35,11.5 35,17 C 35,22.5 28.5,27 20,27 C 17.5,27 15.2,26.5 13.2,25.5 C 9.5,28.5 6,29 5,29 C 4.5,29 4.2,28.6 4.4,28.1 C 5.3,25.8 6.5,23.2 6.1,21.5 C 4.2,19.9 3,18.5 3,17 C 3,11.5 9.5,7 20,7 Z"
            fill="url(#askGrad)"
          />
          {/* 3 White Dots */}
          <circle cx="14" cy="17" r="2.2" fill="#ffffff" />
          <circle cx="20" cy="17" r="2.2" fill="#ffffff" />
          <circle cx="26" cy="17" r="2.2" fill="#ffffff" />
        </svg>
      ),
    },
    {
      num: 3,
      word: "ORDER",
      line: "Everyone at the table orders onto one bill.",
      target: "step-3",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 40 40">
          <defs>
            <linearGradient id="orderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7043" />
              <stop offset="100%" stopColor="#e64a19" />
            </linearGradient>
          </defs>
          {/* Shopping Cart Body & Handle */}
          <path d="M 6,8 C 6,6.9 6.9,6 8,6 L 11,6 L 14.5,14 L 32,14 C 33.1,14 34,14.9 33.8,16 L 31.8,24 C 31.5,25.2 30.5,26 29.3,26 L 16.5,26 C 15.3,26 14.3,25.1 14,23.9 L 10.2,8 L 6,8 Z" fill="url(#orderGrad)" />
          {/* Lower Frame Rail */}
          <rect x="13" y="27.5" width="16" height="2.5" rx="1.2" fill="url(#orderGrad)" />
          {/* 2 Solid Wheels */}
          <circle cx="15.5" cy="33.5" r="2.8" fill="url(#orderGrad)" />
          <circle cx="27.5" cy="33.5" r="2.8" fill="url(#orderGrad)" />
        </svg>
      ),
    },
    {
      num: 4,
      word: "CHECK",
      line: "Three safety checks run before cooking.",
      target: "step-4",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 40 40">
          <defs>
            <linearGradient id="checkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff7a45" />
              <stop offset="100%" stopColor="#ea4c19" />
            </linearGradient>
          </defs>
          <path d="M20 3L6 8v10c0 9.25 6.38 17.88 14 20 7.62-2.12 14-10.75 14-20V8L20 3z" fill="url(#checkGrad)" />
          <path d="M17 25.5l-6-6 2.6-2.6 3.4 3.4 9.4-9.4 2.6 2.6L17 25.5z" fill="#ffffff" />
        </svg>
      ),
    },
    {
      num: 5,
      word: "COOK",
      line: "The kitchen sees the order in three seconds.",
      target: "step-5",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 40 40">
          <defs>
            <linearGradient id="cookGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff7a45" />
              <stop offset="100%" stopColor="#ea4c19" />
            </linearGradient>
          </defs>
          {/* 3 Wavy Steam Lines */}
          <path d="M15 3c1 1 1 2.5 0 3.5s-1 2.5 0 3.5" stroke="url(#cookGrad)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M20 2c1 1 1 2.5 0 3.5s-1 2.5 0 3.5" stroke="url(#cookGrad)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M25 3c1 1 1 2.5 0 3.5s-1 2.5 0 3.5" stroke="url(#cookGrad)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Top Knob */}
          <circle cx="20" cy="13" r="2" fill="url(#cookGrad)" />
          {/* Cloche Dome */}
          <path d="M20 15c-7.73 0-14 6.27-14 14h28c0-7.73-6.27-14-14-14z" fill="url(#cookGrad)" />
          {/* Bottom Tray Base */}
          <rect x="4" y="30.5" width="32" height="3" rx="1.5" fill="url(#cookGrad)" />
        </svg>
      ),
    },
    {
      num: 6,
      word: "SERVE",
      line: "The waiter is told the moment food is ready.",
      target: "step-6",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 40 40">
          <defs>
            <linearGradient id="serveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff7a45" />
              <stop offset="100%" stopColor="#ea4c19" />
            </linearGradient>
          </defs>
          {/* Top loop/knob */}
          <circle cx="20" cy="6" r="2.5" fill="url(#serveGrad)" />
          {/* Bell body */}
          <path d="M20 9c-5.5 0-9.5 4.5-9.5 11v6H8v3.5h24V26h-2.5v-6c0-6.5-4-11-9.5-11z" fill="url(#serveGrad)" />
          {/* Clapper */}
          <path d="M17 31.5c0 1.66 1.34 3 3 3s3-1.34 3-3.5h-6z" fill="url(#serveGrad)" />
        </svg>
      ),
    },
    {
      num: 7,
      word: "PAY",
      line: "The bill is split and paid from the phone.",
      target: "step-7",
      icon: (
        <svg className="w-11 h-11" viewBox="0 0 40 40">
          <defs>
            <linearGradient id="payGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff7a45" />
              <stop offset="100%" stopColor="#ea4c19" />
            </linearGradient>
          </defs>
          {/* Credit Card Body */}
          <rect x="4" y="8" width="32" height="20" rx="3.5" fill="url(#payGrad)" />
          {/* White Magnetic Stripe */}
          <rect x="4" y="12" width="32" height="4" fill="#ffffff" opacity="0.85" />
          {/* White Chip / Line Details */}
          <rect x="8" y="19" width="5" height="4" rx="1" fill="#ffffff" opacity="0.6" />
          <rect x="15" y="20" width="7" height="2" rx="1" fill="#ffffff" opacity="0.6" />
          {/* Bottom Right Checkmark Badge */}
          <circle cx="29" cy="25" r="5.5" fill="url(#payGrad)" stroke="#ffffff" strokeWidth="1.8" />
          <path d="M26.5 25l1.8 1.8 3.7-3.7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section className="pt-6 pb-14 md:pt-8 md:pb-20 bg-[#fdf9f5] border-t border-slate-100/60" id="how">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-[#f95722] mb-3">HOW IT WORKS</div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-serif-heading text-slate-900 tracking-tight leading-tight">
            Seven steps. That is the whole system<span className="text-[#f95722]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Read these seven words and you already understand Nova Restro.
            <br className="hidden sm:inline" />
            The next seven sections just show each one.
          </p>
        </div>

        {/* 7 Steps Map */}
        <nav className="relative" aria-label="The seven steps">
          {/* Horizontal wavy connecting line with hollow orange ring bubbles centered between each step */}
          <div className="absolute top-[56px] left-[7.14%] right-[7.14%] hidden lg:flex items-center justify-between pointer-events-none z-0">
            <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 30" fill="none">
              {/* Smooth Wavy Line passing through center of all 7 steps */}
              <path
                d="M 0,15 C 41.6,8 83.3,22 125,15 C 166.6,8 208.3,22 250,15 C 291.6,8 333.3,22 375,15 C 416.6,8 458.3,22 500,15 C 541.6,8 583.3,22 625,15 C 666.6,8 708.3,22 750,15 C 791.6,8 833.3,22 875,15 C 916.6,8 958.3,22 1000,15"
                stroke="#ff7a45"
                strokeWidth="2"
                strokeOpacity="0.7"
                fill="none"
              />
              {/* 6 Hollow Orange Ring Bubbles perfectly centered in the gap between each step circle */}
              <circle cx="83.3" cy="15" r="6.5" fill="#ffffff" stroke="#f95722" strokeWidth="2.8" />
              <circle cx="250.0" cy="15" r="6.5" fill="#ffffff" stroke="#f95722" strokeWidth="2.8" />
              <circle cx="416.7" cy="15" r="6.5" fill="#ffffff" stroke="#f95722" strokeWidth="2.8" />
              <circle cx="583.3" cy="15" r="6.5" fill="#ffffff" stroke="#f95722" strokeWidth="2.8" />
              <circle cx="750.0" cy="15" r="6.5" fill="#ffffff" stroke="#f95722" strokeWidth="2.8" />
              <circle cx="916.7" cy="15" r="6.5" fill="#ffffff" stroke="#f95722" strokeWidth="2.8" />
            </svg>
          </div>

          <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4 relative z-10">
            {steps.map((s) => (
              <li key={s.num} className="text-center group">
                <a href={`#${s.target}`} className="block group">
                  {/* Circle container with soft orange aura shadow */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#fff7f2] to-white border border-orange-100/90 shadow-[0_8px_20px_rgba(249,87,34,0.12)] group-hover:shadow-[0_12px_28px_rgba(249,87,34,0.22)] group-hover:scale-105 transition-all flex items-center justify-center mx-auto mb-4">
                    {/* Number Badge — top left */}
                    <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[#f95722] text-white text-xs font-bold flex items-center justify-center shadow-sm">
                      {s.num}
                    </div>

                    {/* Icon */}
                    <div className="flex items-center justify-center">
                      {s.icon}
                    </div>
                  </div>

                  {/* Step Title */}
                  <span className="block font-extrabold text-sm uppercase tracking-wider text-slate-900 mb-1 group-hover:text-[#f95722] transition-colors">
                    {s.word}
                  </span>

                  {/* Accent Line Under Title */}
                  <div className="w-4 h-0.5 bg-[#f95722] mx-auto mb-2.5 rounded-full" />

                  {/* Description */}
                  <span className="block text-xs text-slate-500 leading-snug max-w-[135px] mx-auto">
                    {s.line}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Callout Box Below 7 Steps */}
        <div className="bg-[#fff8f3] border border-orange-100/80 rounded-2xl p-4 sm:p-5 max-w-xl mx-auto mt-14 flex items-center justify-center gap-3 shadow-xs">
          <div className="w-7 h-7 rounded-full border-2 border-[#f95722] flex items-center justify-center flex-none text-[#f95722]">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z" />
            </svg>
          </div>
          <p className="text-slate-700 text-sm sm:text-[15px]">
            One flow. <strong className="text-[#f95722] font-bold">Zero confusion.</strong> Total clarity for guests, staff and owners.
          </p>
        </div>

        {/* Bottom Accent Line & Transition Text */}
        <div className="text-center mt-12">
          <div className="w-8 h-1 bg-[#f95722] rounded-full mx-auto mb-3" />
          <p className="text-center text-sm sm:text-base text-slate-400 italic font-serif-heading">
            Let&apos;s take them one at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

