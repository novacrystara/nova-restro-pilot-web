import React from "react";

export function ControlRows() {
  const rows = [
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      ),
      k: "Your menu",
      v: "Dishes, prices, photos, spice level, allergens, categories.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l5.58-5.58c.94-.94.94-2.48 0-3.42L12 2Z" />
          <path d="M7 7h.01" />
        </svg>
      ),
      k: "Sold out",
      v: "One tap marks a dish sold out. Every phone updates instantly.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 10.42 0A4 4 0 0 1 18 13.87V18H6v-4.13Z" />
          <line x1="6" y1="18" x2="18" y2="18" />
        </svg>
      ),
      k: "Your kitchen",
      v: "How many prep stations you run, and which dish goes to which.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="16" height="4" rx="1" />
          <path d="M6 10v9" />
          <path d="M18 10v9" />
          <path d="M10 10v9" />
          <path d="M14 10v9" />
        </svg>
      ),
      k: "Your tables",
      v: (
        <>
          Name them anything —{" "}
          <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-[11px] text-slate-700 font-semibold border border-slate-200/60">
            Table 1
          </code>
          ,{" "}
          <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-[11px] text-slate-700 font-semibold border border-slate-200/60">
            Patio 2
          </code>
          ,{" "}
          <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-[11px] text-slate-700 font-semibold border border-slate-200/60">
            VIP Booth A
          </code>
          . Print a QR stand for each.
        </>
      ),
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      k: "Your staff",
      v: "Create logins for managers, waiters and kitchen staff.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      k: "Your rules",
      v: "Do orders go straight to the kitchen, or does staff approve first?",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      k: "Kitchen busy",
      v: "Running 20 minutes late? Say so, and guests are warned before they order.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="5" x2="5" y2="19" />
          <circle cx="6.5" cy="6.5" r="2.5" />
          <circle cx="17.5" cy="17.5" r="2.5" />
        </svg>
      ),
      k: "Your tax",
      v: "Set your rate. Set a different rate for one menu category if you need to.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      ),
      k: "Your assistant",
      v: "Write your kitchen notes. That is exactly what the assistant knows.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      ),
      k: "Your rewards",
      v: "How many points per pound, and what they can be spent on.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      k: "Your brand",
      v: "Name, tagline, logo, cover photo, currency, review link.",
    },
  ];

  return (
    <>
      {/* SEC 14 — YOU CONTROL EVERYTHING YOURSELF */}
      <section className="pt-14 md:pt-20 pb-20 md:pb-28 bg-[#fdfbf9] border-t border-slate-100 relative overflow-x-hidden">
        {/* Soft Background Restaurant Image Fade on Left */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 lg:w-5/12 pointer-events-none z-0 overflow-hidden opacity-30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero_section/home_sec_1.png"
            alt="Restaurant ambient background"
            className="w-full h-full object-cover filter blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fdfbf9]/80 to-[#fdfbf9]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf9] via-transparent to-[#fdfbf9]" />
        </div>

        {/* Decorative Top-Right Wave Pattern SVG */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] pointer-events-none opacity-45 z-0">
          <svg className="w-full h-full text-orange-200/50" viewBox="0 0 400 400" fill="none">
            <path d="M100 0C150 100 250 150 400 200M50 0C100 120 220 180 400 250M0 0C50 150 180 220 400 300" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#f95722] mb-3">
              YOU&apos;RE IN CONTROL
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold font-serif-heading text-slate-900 leading-[1.12] tracking-tight">
              Change anything, any time.
              <br />
              No phone call to us<span className="text-[#f95722]">.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mt-4 leading-relaxed max-w-2xl mx-auto font-medium">
              Every part of the system is yours to edit. Changes appear on every guest&apos;s phone straight away.
            </p>
          </div>

          {/* Centered Feature Card Container with Absolute Right Phone Mockup */}
          <div className="relative max-w-[1140px] mx-auto">
            {/* White Feature Table Card (Centered, max-w-[760px]) */}
            <div className="max-w-[760px] mx-auto lg:ml-8 xl:ml-12 lg:mr-auto bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden relative z-10">
              <div className="divide-y divide-slate-100">
                {rows.map((row, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3.5 px-4 sm:px-6 py-3 hover:bg-orange-50/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 flex-none">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none">
                        <span className="text-[9px] font-bold">✓</span>
                      </div>
                      <div className="w-5 h-5 flex items-center justify-center flex-none">
                        {row.icon}
                      </div>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm w-24 sm:w-32 flex-none">
                        {row.k}
                      </span>
                    </div>

                    <div className="hidden sm:block w-[1px] h-3.5 bg-slate-200/80 flex-none" />

                    <div className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6 sm:pl-0">
                      {row.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overlapping Tilted Phone Mockup (Desktop / Tablet: Absolute Right overlapping card by ~80px) */}
            <div className="hidden lg:block absolute -right-4 xl:-right-8 top-1/2 -translate-y-1/2 w-[310px] xl:w-[335px] pointer-events-none z-20 transform rotate-[6deg] hover:rotate-[2deg] transition-transform duration-500">
              <div className="relative rounded-[36px] bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/35 border-4 border-slate-800">
                {/* Phone Screen Mockup Container */}
                <div className="rounded-[28px] overflow-hidden bg-slate-50 border border-slate-200 text-left">
                  {/* Status Bar */}
                  <div className="bg-white px-4 pt-2.5 pb-1.5 flex items-center justify-between text-[11px] text-slate-900 font-bold border-b border-slate-100">
                    <span>9:41</span>
                    <div className="w-14 h-3.5 bg-slate-900 rounded-full mx-auto" />
                    <div className="flex items-center gap-1 text-[9px]">
                      <span>5G</span>
                      <div className="w-3.5 h-2 bg-slate-900 rounded-xs" />
                    </div>
                  </div>

                  {/* Dashboard Header */}
                  <div className="p-3.5 bg-white border-b border-slate-100">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Dashboard</span>
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center text-[10px] font-bold text-slate-700">
                        A
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">Good evening, Alex</h3>
                    <p className="text-[11px] text-slate-500">Manage your restaurant</p>
                  </div>

                  {/* Menu List */}
                  <div className="p-2.5 space-y-1.5 bg-slate-50/50">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#f95722] flex items-center justify-center font-bold text-xs">📖</div>
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 leading-none mb-0.5">Menu</h4>
                          <p className="text-[9px] text-slate-500">Edit dishes, prices & more</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">›</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#f95722] flex items-center justify-center font-bold text-xs">📦</div>
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 leading-none mb-0.5">Orders</h4>
                          <p className="text-[9px] text-slate-500">Manage orders & rules</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">›</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#f95722] flex items-center justify-center font-bold text-xs">🍳</div>
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 leading-none mb-0.5">Kitchen</h4>
                          <p className="text-[9px] text-slate-500">Stations & routing</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">›</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#f95722] flex items-center justify-center font-bold text-xs">🪑</div>
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 leading-none mb-0.5">Tables</h4>
                          <p className="text-[9px] text-slate-500">Manage tables & QR codes</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">›</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#f95722] flex items-center justify-center font-bold text-xs">👥</div>
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 leading-none mb-0.5">Staff</h4>
                          <p className="text-[9px] text-slate-500">Logins & permissions</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">›</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#f95722] flex items-center justify-center font-bold text-xs">📊</div>
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 leading-none mb-0.5">Reports</h4>
                          <p className="text-[9px] text-slate-500">Sales & analytics</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">›</span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#f95722] flex items-center justify-center font-bold text-xs">⚙️</div>
                        <div>
                          <h4 className="text-[11px] font-bold text-slate-900 leading-none mb-0.5">Settings</h4>
                          <p className="text-[9px] text-slate-500">Taxes, tips & more</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">›</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm sm:text-base text-slate-400 italic mt-14 pt-6 border-t border-slate-200/60 max-w-md mx-auto">
            While you run service, the paperwork writes itself.
          </p>
        </div>
      </section>

      {/* SEC 15 — EVERYTHING IS WRITTEN DOWN AUTOMATICALLY */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold font-serif-heading text-slate-900 leading-[1.12]">
              The paperwork is finished before you sit down to do it.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
              The reports are not a separate job. They are made out of the service
              you already ran.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl block mb-4" role="img" aria-label="Sales">📈</span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">Sales</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Revenue, order count, average spend, best-selling dishes, repeat guests.</p>
            </article>
            <article className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl block mb-4" role="img" aria-label="Tax">🧾</span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">Tax</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Day-by-day net, tax and gross. Download it as a spreadsheet.</p>
            </article>
            <article className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl block mb-4" role="img" aria-label="Tips">💷</span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">Tips</h3>
              <p className="text-sm text-slate-600 leading-relaxed">A permanent record of how tips were shared, for every period.</p>
            </article>
            <article className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl block mb-4" role="img" aria-label="Rewards">🎁</span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">Rewards</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Who your regulars are, what they earned, what they redeemed.</p>
            </article>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-5 rounded-r-2xl text-slate-900 text-base max-w-3xl mx-auto mt-8 shadow-sm">
            Tax is worked out on each order at the moment of sale, and stored with that order.
            If your rate changes next year, last year&apos;s receipts stay correct.
          </div>

          <p className="text-center text-sm sm:text-base text-slate-400 italic mt-10 pt-6 border-t border-slate-200/60 max-w-md mx-auto">
            So what makes this different from other systems?
          </p>
        </div>
      </section>
    </>
  );
}
