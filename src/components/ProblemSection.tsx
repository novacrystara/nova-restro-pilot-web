import React from "react";

export function ProblemSection() {
  return (
    <>
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100" id="problems">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            {/* Orange top accent dash */}
            <div className="w-8 h-[2.5px] bg-orange-600 rounded-full mx-auto mb-3" />

            <div className="text-xs font-bold tracking-[0.18em] uppercase text-orange-600 mb-3">THE PROBLEMS WE SOLVE</div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-serif-heading text-slate-900 tracking-tight leading-tight">
              A busy night, without a system<span className="text-orange-600">.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Four moments that happen in every restaurant, every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {/* Problem 1 */}
            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-start gap-5">
                {/* Round icon circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-orange-50 to-amber-50/60 border border-orange-100/80 flex items-center justify-center flex-none shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/THE PROBLEMS WE SOLVE/boy rasing bell.png"
                    alt="A table waits icon"
                    className="w-full h-full object-contain scale-[1.6]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900 mb-2 leading-snug">
                    A table waits to catch a waiter&apos;s eye.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-0">
                    They wanted a second drink
                    <br className="hidden sm:inline" />
                    and a dessert. The moment passed.
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-xs font-semibold text-orange-600">
                <svg className="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <span>It costs: they order less.</span>
              </div>
            </article>

            {/* Problem 2 */}
            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-start gap-5">
                {/* Round icon circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-orange-50 to-amber-50/60 border border-orange-100/80 flex items-center justify-center flex-none shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/THE PROBLEMS WE SOLVE/question mark1.png"
                    alt="Allergy question icon"
                    className="w-full h-full object-contain scale-[0.9]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900 mb-2 leading-snug">
                    Someone asks &ldquo;does this have nuts?&rdquo; Nobody is sure.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-0">
                    The waiter goes to ask. The chef is busy.
                    <br className="hidden sm:inline" />
                    The answer comes back as a guess.
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-xs font-semibold text-orange-600">
                <svg className="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>It costs: a safety risk.</span>
              </div>
            </article>

            {/* Problem 3 */}
            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-start gap-5">
                {/* Round icon circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/80 flex items-center justify-center flex-none shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/THE PROBLEMS WE SOLVE/receipt.png"
                    alt="Split bill icon"
                    className="w-full h-full object-contain scale-[0.6]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900 mb-2 leading-snug">
                    Six people split one bill.
                    <br className="hidden sm:inline" />
                    It takes fifteen minutes.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-0">
                    Three card taps, one calculator,
                    <br className="hidden sm:inline" />
                    and a queue at the door.
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-xs font-semibold text-orange-600">
                <svg className="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>It costs: the table can&apos;t be re-used.</span>
              </div>
            </article>

            {/* Problem 4 */}
            <article className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-start gap-5">
                {/* Round icon circle */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-emerald-50 to-green-50/60 border border-emerald-100/80 flex items-center justify-center flex-none shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/THE PROBLEMS WE SOLVE/calculator.png"
                    alt="Owner receipts icon"
                    className="w-full h-full object-contain scale-[1.4]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900 mb-2 leading-snug">
                    On Sunday the owner adds
                    <br className="hidden sm:inline" />
                    up receipts by hand.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-0">
                    Sales, tax and tips, worked out
                    <br className="hidden sm:inline" />
                    from a pile of paper.
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-xs font-semibold text-orange-600">
                <svg className="w-4 h-4 flex-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>It costs: hours lost. Mistakes made.</span>
              </div>
            </article>
          </div>

          <p className="text-center max-w-2xl mx-auto text-slate-600 text-base sm:text-lg mt-10">
            Nothing here is anyone&apos;s fault. This is just how restaurants have always worked.
          </p>

          <p className="text-center text-sm sm:text-base text-slate-400 italic mt-8 pt-6 border-t border-slate-200/60 max-w-md mx-auto">
            All four problems are actually the same problem.
          </p>
        </div>
      </section>

      <section className="pt-14 pb-6 md:pt-20 md:pb-8 bg-[#fdf9f5] border-t border-slate-100 overflow-x-hidden" id="real-problem">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          {/* ── Mobile layout: flex-col with explicit order ──────────────────────
              On mobile (<640px) we reorder as: label+heading+content → image → cards
              On lg+ we switch to side-by-side with the decorative floating cards.
          ─────────────────────────────────────────────────────────────────────── */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-14 lg:items-center">

            {/* ① Text content — order-1 on mobile so it appears FIRST */}
            <div className="order-1 lg:order-2">
              {/* Section tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-orange-600 font-bold text-sm">✕</span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">THE REAL PROBLEM</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold font-serif-heading text-slate-900 tracking-normal leading-tight whitespace-normal break-words mb-8">
                The right person did not get{" "}
                <br className="hidden sm:inline" />
                the right information in time<span className="text-orange-600">.</span>
              </h2>

              {/* Four role rows */}
              <div className="space-y-5">
                {/* The guest */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none">
                    <svg className="w-5 h-5 text-[#f95722]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <span className="font-bold text-slate-900 text-sm sm:text-lg w-24 sm:w-28 flex-none">The guest</span>
                  <span className="text-orange-400 flex-none font-sans">→</span>
                  <span className="text-slate-600 text-sm sm:text-base min-w-0">did not know what is in the dish.</span>
                </div>

                {/* The kitchen */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none">
                    <svg className="w-5.5 h-5.5 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" />
                      <line x1="6" y1="17" x2="18" y2="17" />
                    </svg>
                  </div>
                  <span className="font-bold text-slate-900 text-sm sm:text-lg w-24 sm:w-28 flex-none">The kitchen</span>
                  <span className="text-orange-400 flex-none font-sans">→</span>
                  <span className="text-slate-600 text-sm sm:text-base min-w-0">did not know about the allergy.</span>
                </div>

                {/* The waiter */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none">
                    <svg className="w-5 h-5 text-[#f95722]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C9.24 2 7 4.24 7 7v1c0 2.76 2.24 5 5 5s5-2.24 5-5V7c0-2.76-2.24-5-5-5zm-5 13.5C4.79 16.55 3 18.57 3 21h18c0-2.43-1.79-4.45-4-5.5l-2.5 3.5h-5L7 15.5z" />
                    </svg>
                  </div>
                  <span className="font-bold text-slate-900 text-sm sm:text-lg w-24 sm:w-28 flex-none">The waiter</span>
                  <span className="text-orange-400 flex-none font-sans">→</span>
                  <span className="text-slate-600 text-sm sm:text-base min-w-0">did not know the food was ready.</span>
                </div>

                {/* The owner */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none">
                    <svg className="w-5 h-5 text-[#f95722]" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="13" width="3.5" height="7" rx="1" />
                      <rect x="10.25" y="8" width="3.5" height="12" rx="1" />
                      <rect x="16.5" y="4" width="3.5" height="16" rx="1" />
                    </svg>
                  </div>
                  <span className="font-bold text-slate-900 text-sm sm:text-lg w-24 sm:w-28 flex-none">The owner</span>
                  <span className="text-orange-400 flex-none font-sans">→</span>
                  <span className="text-slate-600 text-sm sm:text-base min-w-0">did not know what was sold.</span>
                </div>
              </div>

              {/* Callout box */}
              <div className="bg-[#fff3eb]/70 border-l-4 border-[#f95722] rounded-r-2xl rounded-l-xs p-4 sm:p-5 mt-8 flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full border-2 border-[#f95722] flex items-center justify-center flex-none">
                  <svg className="w-3.5 h-3.5 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <p className="text-slate-800 text-sm sm:text-[15px] leading-snug">
                  <strong className="text-slate-900 font-bold">Nova Restro does one job:</strong> it puts the right information
                  <br />
                  in front of the right person, at the exact moment they need it.
                </p>
              </div>
            </div>

            {/* ② Image column — order-2 on mobile so image appears AFTER text.
                On lg+ this becomes the left column (order-1) via lg:order-1. */}
            <div className="order-2 lg:order-1">

              {/* ── DESKTOP (sm+): original decorative image with absolutely-positioned floating cards ── */}
              <div className="hidden sm:flex relative items-center justify-center min-h-[500px] sm:min-h-[560px]">
                <div className="relative w-full max-w-[560px] h-[520px] flex items-center justify-center">
                  {/* Decorative faint circular ring paths */}
                  <div className="absolute w-[400px] h-[400px] sm:w-[460px] sm:h-[460px] rounded-full border border-orange-200/35 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                  <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-orange-200/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                  {/* Faint clock graphic */}
                  <svg className="absolute top-[18%] left-1/2 -translate-x-1/2 w-36 h-36 sm:w-44 sm:h-44 opacity-30 pointer-events-none" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="50" y1="50" x2="34" y2="34" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="50" y1="50" x2="68" y2="38" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="3" fill="#f97316" />
                  </svg>

                  {/* Main waiter image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/The_real_problem/Stressed Waiter Among Stacked Plates.png"
                    alt="Stressed waiter among stacked plates"
                    className="relative z-10 w-[360px] sm:w-[440px] md:w-[500px] object-contain drop-shadow-xl"
                  />

                  {/* Floating card 1: Guest Order — Top Center above head */}
                  <div className="absolute z-20 top-[-2%] left-[26%] sm:top-[-4%] sm:left-[28%] bg-white rounded-2xl shadow-lg border border-slate-100/80 p-3.5 sm:p-4 max-w-[170px]">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-100/90 text-orange-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold leading-none">✕</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none mt-0.5">
                        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Guest Order</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">No idea what&apos;s in the dish</p>
                        <p className="text-[10px] font-bold text-orange-600 mt-1 italic">Time lost</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating card 2: Waiter — Middle Right */}
                  <div className="absolute z-20 top-[22%] right-[-2%] sm:top-[20%] sm:right-[-4%] bg-white rounded-2xl shadow-lg border border-slate-100/80 p-3.5 sm:p-4 max-w-[170px]">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-100/90 text-orange-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold leading-none">✕</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none mt-0.5">
                        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C9.24 2 7 4.24 7 7v1c0 2.76 2.24 5 5 5s5-2.24 5-5V7c0-2.76-2.24-5-5-5zm-5 13.5C4.79 16.55 3 18.57 3 21h18c0-2.43-1.79-4.45-4-5.5l-2.5 3.5h-5L7 15.5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Waiter</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Not sure if the food is ready</p>
                        <p className="text-[10px] font-bold text-orange-600 mt-1 italic">Delay in service</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating card 3: Kitchen — Middle Left */}
                  <div className="absolute z-20 top-[40%] left-[-4%] sm:top-[38%] sm:left-[-6%] bg-white rounded-2xl shadow-lg border border-slate-100/80 p-3.5 sm:p-4 max-w-[170px]">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-100/90 text-orange-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold leading-none">✕</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none mt-0.5">
                        <svg className="w-4.5 h-4.5 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" />
                          <line x1="6" y1="17" x2="18" y2="17" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Kitchen</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Allergy not communicated</p>
                        <p className="text-[10px] font-bold text-red-500 mt-1 italic">Risk of mistake</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating card 4: Owner */}
                  <div className="absolute z-20 bottom-[18%] right-[2%] sm:bottom-[16%] sm:right-[0%] bg-white rounded-2xl shadow-lg border border-slate-100/80 p-3.5 sm:p-4 max-w-[170px]">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-100/90 text-orange-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold leading-none">✕</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none mt-0.5">
                        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="4" y="13" width="3.5" height="7" rx="1" />
                          <rect x="10.25" y="8" width="3.5" height="12" rx="1" />
                          <rect x="16.5" y="4" width="3.5" height="16" rx="1" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Owner</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Unclear what actually sold</p>
                        <p className="text-[10px] font-bold text-orange-600 mt-1 italic">No real insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── MOBILE (<sm): image + stacked cards, no absolute positioning ── */}
              <div className="sm:hidden flex flex-col items-center gap-5">
                {/* Waiter image — capped at iPhone-portrait width, centred with side breathing room */}
                <div className="flex justify-center w-full px-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/The_real_problem/Stressed Waiter Among Stacked Plates.png"
                    alt="Stressed waiter among stacked plates"
                    className="w-full max-w-[270px] h-auto object-contain drop-shadow-xl"
                  />
                </div>

                {/* Stacked cards — static flow, no absolute positioning */}
                <div className="w-full flex flex-col gap-3">

                  {/* Card 1: Guest Order */}
                  <div className="relative bg-white rounded-2xl shadow-md border border-slate-100/80 p-3.5">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-100/90 text-orange-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold leading-none">✕</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none mt-0.5">
                        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Guest Order</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">No idea what&apos;s in the dish</p>
                        <p className="text-[10px] font-bold text-orange-600 mt-1 italic">Time lost</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Waiter */}
                  <div className="relative bg-white rounded-2xl shadow-md border border-slate-100/80 p-3.5">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-100/90 text-orange-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold leading-none">✕</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none mt-0.5">
                        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C9.24 2 7 4.24 7 7v1c0 2.76 2.24 5 5 5s5-2.24 5-5V7c0-2.76-2.24-5-5-5zm-5 13.5C4.79 16.55 3 18.57 3 21h18c0-2.43-1.79-4.45-4-5.5l-2.5 3.5h-5L7 15.5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Waiter</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Not sure if the food is ready</p>
                        <p className="text-[10px] font-bold text-orange-600 mt-1 italic">Delay in service</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Kitchen */}
                  <div className="relative bg-white rounded-2xl shadow-md border border-slate-100/80 p-3.5">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-100/90 text-orange-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold leading-none">✕</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none mt-0.5">
                        <svg className="w-4.5 h-4.5 text-[#f95722]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" />
                          <line x1="6" y1="17" x2="18" y2="17" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Kitchen</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Allergy not communicated</p>
                        <p className="text-[10px] font-bold text-red-500 mt-1 italic">Risk of mistake</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Owner */}
                  <div className="relative bg-white rounded-2xl shadow-md border border-slate-100/80 p-3.5">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-100/90 text-orange-600 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-[10px] font-bold leading-none">✕</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none mt-0.5">
                        <svg className="w-4 h-4 text-[#f95722]" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="4" y="13" width="3.5" height="7" rx="1" />
                          <rect x="10.25" y="8" width="3.5" height="12" rx="1" />
                          <rect x="16.5" y="4" width="3.5" height="16" rx="1" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Owner</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Unclear what actually sold</p>
                        <p className="text-[10px] font-bold text-orange-600 mt-1 italic">No real insights</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="text-center mt-10">
            <div className="w-8 h-1 bg-[#f95722] rounded-full mx-auto mb-3" />
            <p className="text-center text-sm sm:text-base text-slate-400 italic font-serif-heading">
              Here is how that happens, in seven steps.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
