import React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function SevenStepsDetail() {
  return (
    <div className="relative bg-white text-slate-900">
      {/* SEC 6 — STEP 1: SCAN (Content Left, Image Right) */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-100 relative overflow-hidden" id="step-1">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="relative pl-8 sm:pl-10">
            {/* Continuous vertical line starting solid at badge 1 and fading to light peach at bottom */}
            <div className="absolute top-0 -bottom-24 left-0 w-[2px] bg-gradient-to-b from-[#f95722] via-[#f95722]/50 to-orange-200/30 pointer-events-none z-0" />

            {/* Circle badge 1 */}
            <span className="absolute -left-[17px] sm:-left-[21px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#f95722] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/30 z-10">
              1
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left side Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f95722] mb-1">
                  STEP ONE — SCAN
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif-heading text-slate-900 leading-[1.15] tracking-tight">
                  Sit down. Scan.
                  <br />
                  The menu is there<span className="text-[#f95722]">.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                  There is a small code on every table. The guest points their camera at it. The menu opens in one second.
                </p>

                {/* 3 Pill Cards */}
                <div className="space-y-3 pt-1 max-w-md">
                  <div className="bg-white/90 border border-slate-100/90 shadow-sm shadow-slate-100 rounded-2xl p-3.5 flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">No app to download.</span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm shadow-slate-100 rounded-2xl p-3.5 flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">No account to make.</span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm shadow-slate-100 rounded-2xl p-3.5 flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">Works on every phone.</span>
                  </div>
                </div>

                {/* Left-aligned transition bar & text */}
                <div className="pt-4">
                  <div className="w-8 h-[2.5px] bg-[#f95722] rounded-full mb-3" />
                  <p className="text-sm sm:text-base text-slate-400 italic font-serif-heading">
                    Now they can see the food. But they have a question.
                  </p>
                </div>
              </div>

              {/* Right side Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 max-w-[460px] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/The_real_problem/2nd_1.png"
                    alt="Restaurant table QR stand and Nova Restro mobile menu"
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 7 — STEP 2: ASK (Left Image, Right Content — Reduced bottom spacing) */}
      <section className="py-10 md:py-14 bg-slate-50/50 border-t border-slate-100 relative overflow-hidden" id="step-2">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="relative pl-8 sm:pl-10">
            {/* Continuous vertical line starting solid at badge 2 and fading to light peach towards badge 3 */}
            <div className="absolute top-0 -bottom-20 left-0 w-[2px] bg-gradient-to-b from-[#f95722] via-[#f95722]/50 to-orange-200/30 pointer-events-none z-0" />

            {/* Circle badge 2 */}
            <span className="absolute -left-[17px] sm:-left-[21px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#f95722] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/30 z-10">
              2
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left side Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 max-w-[460px] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/The_real_problem/The Chef AI chat on a phone.png"
                    alt="Chef AI chat assistant on phone"
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Right side Content */}
              <div className="lg:col-span-6 space-y-6 pt-1.5">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f95722] leading-none mb-1">
                  STEP TWO — ASK
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif-heading text-slate-900 leading-[1.15] tracking-tight">
                  Every dish can answer questions<span className="text-[#f95722]">.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                  Guests can ask about ingredients, allergies or spice level and get an answer in seconds. No waiting. No &quot;I think so?&quot;
                </p>

                {/* 3 Checkmark List */}
                <div className="space-y-3 pt-1 max-w-lg">
                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      The answers come from <strong className="text-slate-900 font-bold">your</strong> kitchen notes, not from the internet.
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Every dish shows ingredients, allergens and spice level (0–3 chillies).
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Sold-out dishes are clearly marked, so nobody orders them.
                    </span>
                  </div>
                </div>

                {/* Callout Box */}
                <div className="bg-[#fff8f3] border border-orange-200/60 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5 max-w-lg shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none text-[#f95722] mt-0.5">
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 18 13.87V21H6z" />
                      <line x1="6" y1="17" x2="18" y2="17" />
                    </svg>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-[14px] leading-snug">
                    <strong className="text-slate-900 font-bold">You write what your kitchen knows.</strong> The assistant only says what you wrote. Nothing is invented.
                  </p>
                </div>
              </div>
            </div>

            {/* Centered bottom transition bar & text with zero excess space */}
            <div className="mt-4 md:mt-5 text-center">
              <div className="w-8 h-[2.5px] bg-[#f95722] rounded-full mx-auto mb-2" />
              <p className="text-sm sm:text-base text-slate-400 italic font-serif-heading">
                They are ready to order — and they are four people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 8 — STEP 3: ORDER (Content Left, Image Right) */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-100 relative overflow-hidden" id="step-3">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="relative pl-8 sm:pl-10">
            {/* Continuous vertical line starting solid at badge 3 and fading to light peach towards badge 4 */}
            <div className="absolute top-0 -bottom-24 left-0 w-[2px] bg-gradient-to-b from-[#f95722] via-[#f95722]/50 to-orange-200/30 pointer-events-none z-0" />

            {/* Circle badge 3 */}
            <span className="absolute -left-[17px] sm:-left-[21px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#f95722] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/30 z-10">
              3
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left side Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f95722] mb-1">
                  STEP THREE — ORDER
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif-heading text-slate-900 leading-[1.15] tracking-tight">
                  Four people.
                  <br />
                  Four phones.
                  <br />
                  One bill<span className="text-[#f95722]">.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                  One guest shares the table code. Everyone orders from their own phone. It all lands on one bill.
                </p>

                {/* 3 Checkmark Items */}
                <div className="space-y-3 pt-1 max-w-lg">
                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Nobody has to shout an order across the table.
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Everyone can add a second drink later, in one tap.
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Special requests — &quot;extra spicy, no coriander&quot; — reach the chef exactly as typed.
                    </span>
                  </div>
                </div>

                {/* Callout Box */}
                <div className="bg-[#fff8f3] border border-orange-200/60 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 max-w-md shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-[#fff2e8] flex items-center justify-center flex-none text-[#f95722]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-semibold text-xs sm:text-sm">
                    Perfect for friends, families and business meals.
                  </span>
                </div>
              </div>

              {/* Right side Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 max-w-[460px] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/The_real_problem/Four people four mobiles one bill.png"
                    alt="Four people four mobiles one bill"
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Centered bottom transition bar & text */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="w-8 h-[2.5px] bg-[#f95722] rounded-full mx-auto mb-3" />
              <p className="text-sm sm:text-base text-slate-400 italic font-serif-heading">
                Before any of it reaches the kitchen, the system checks three things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 9 — STEP 4: CHECK (Left Image, Right Content) */}
      <section className="py-14 md:py-20 bg-slate-50/50 border-t border-slate-100 relative overflow-hidden" id="step-4">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="relative pl-8 sm:pl-10">
            {/* Continuous vertical line starting solid at badge 4 and fading to light peach towards badge 5 */}
            <div className="absolute top-0 -bottom-24 left-0 w-[2px] bg-gradient-to-b from-[#f95722] via-[#f95722]/50 to-orange-200/30 pointer-events-none z-0" />

            {/* Circle badge 4 */}
            <span className="absolute -left-[17px] sm:-left-[21px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#f95722] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/30 z-10">
              4
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left side Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 max-w-[460px] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/The_real_problem/Three checks before anything is cooked.png"
                    alt="Three checks before anything is cooked KDS display"
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Right side Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f95722] mb-1">
                  STEP FOUR — CHECK
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif-heading text-slate-900 leading-[1.15] tracking-tight">
                  Three checks before
                  <br />
                  anything is cooked<span className="text-[#f95722]">.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                  This is the part most systems skip. It is the part that protects the restaurant.
                </p>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                    <div className="w-7 h-7 rounded-full bg-orange-50 text-[#f95722] font-bold flex items-center justify-center text-xs mx-auto mb-2">1</div>
                    <h4 className="font-bold text-slate-900 text-xs mb-1">Is it available?</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">Sold-out dishes cannot be ordered.</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                    <div className="w-7 h-7 rounded-full bg-orange-50 text-[#f95722] font-bold flex items-center justify-center text-xs mx-auto mb-2">2</div>
                    <h4 className="font-bold text-slate-900 text-xs mb-1">Is the order real?</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">The guest confirms with a code sent to their phone.</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                    <div className="w-7 h-7 rounded-full bg-orange-50 text-[#f95722] font-bold flex items-center justify-center text-xs mx-auto mb-2">3</div>
                    <h4 className="font-bold text-slate-900 text-xs mb-1">Any allergy?</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">If yes, the order is locked until chef confirms.</p>
                  </div>
                </div>

                {/* Allergy Lock Banner */}
                <div className="bg-[#fff0f0] border border-rose-200/80 p-4 sm:p-5 rounded-2xl space-y-3 shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-none mt-0.5 text-xs">
                      🔒
                    </div>
                    <div className="text-slate-800 text-xs sm:text-sm leading-relaxed">
                      <strong className="text-rose-900 font-bold">The allergy lock.</strong> The chef cannot press &quot;start cooking&quot; until they tap <em className="font-semibold text-rose-700">Acknowledge Allergy Notice</em>. Every step below is stamped with a time and saved forever.
                    </div>
                  </div>

                  {/* 6 checkmark pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] font-medium px-2.5 py-1 bg-white border border-rose-100 rounded-full text-slate-700">✓ Guest declares</span>
                    <span className="text-[10px] font-medium px-2.5 py-1 bg-white border border-rose-100 rounded-full text-slate-700">✓ Guest confirms</span>
                    <span className="text-[10px] font-medium px-2.5 py-1 bg-white border border-rose-100 rounded-full text-slate-700">✓ Waiter attests</span>
                    <span className="text-[10px] font-medium px-2.5 py-1 bg-white border border-rose-100 rounded-full text-slate-700">✓ Kitchen warned</span>
                    <span className="text-[10px] font-medium px-2.5 py-1 bg-white border border-rose-100 rounded-full text-slate-700">✓ Kitchen acknowledges</span>
                    <span className="text-[10px] font-medium px-2.5 py-1 bg-white border border-rose-100 rounded-full text-slate-700">✓ Guest sees proof</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Centered bottom transition bar & text */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="w-8 h-[2.5px] bg-[#f95722] rounded-full mx-auto mb-3" />
              <p className="text-sm sm:text-base text-slate-400 italic font-serif-heading">
                Only now does the order reach the kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 10 — STEP 5: COOK (Content Left, Image Right) */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-100 relative overflow-hidden" id="step-5">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="relative pl-8 sm:pl-10">
            {/* Continuous vertical line starting solid at badge 5 and fading to light peach towards badge 6 */}
            <div className="absolute top-0 -bottom-24 left-0 w-[2px] bg-gradient-to-b from-[#f95722] via-[#f95722]/50 to-orange-200/30 pointer-events-none z-0" />

            {/* Circle badge 5 */}
            <span className="absolute -left-[17px] sm:-left-[21px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#f95722] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/30 z-10">
              5
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left side Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f95722] mb-1">
                  STEP FIVE — COOK
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif-heading text-slate-900 leading-[1.15] tracking-tight">
                  On the kitchen screen in three seconds<span className="text-[#f95722]">.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                  No paper. No handwriting. No guessing what the ticket says.
                </p>

                <div className="space-y-3 pt-1 max-w-lg">
                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      <strong className="font-bold text-slate-900">Drinks go to the bar. Food goes to the chef.</strong> Nobody scrolls past ten curries to find one drink.
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Each dish is marked ready on its own, as it is plated.
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      An order waiting too long turns red and beeps. Silence it for one hour; it comes back by itself.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side Image */}
              <div className="lg:col-span-6 flex justify-center">
                <ImagePlaceholder
                  type="wide"
                  tag="Image placeholder"
                  what="The live kitchen display: order cards with elapsed timers, and one overdue card turned red."
                  size="Suggested 1200 × 750 px"
                  caption="The kitchen screen during service"
                />
              </div>
            </div>

            {/* Centered bottom transition bar & text */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="w-8 h-[2.5px] bg-[#f95722] rounded-full mx-auto mb-3" />
              <p className="text-sm sm:text-base text-slate-400 italic font-serif-heading">
                The moment a dish is ready, someone needs to know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 11 — STEP 6: SERVE (Left Image, Right Content) */}
      <section className="py-14 md:py-20 bg-slate-50/50 border-t border-slate-100 relative overflow-hidden" id="step-6">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="relative pl-8 sm:pl-10">
            {/* Continuous vertical line starting solid at badge 6 and fading to light peach towards badge 7 */}
            <div className="absolute top-0 -bottom-24 left-0 w-[2px] bg-gradient-to-b from-[#f95722] via-[#f95722]/50 to-orange-200/30 pointer-events-none z-0" />

            {/* Circle badge 6 */}
            <span className="absolute -left-[17px] sm:-left-[21px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#f95722] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/30 z-10">
              6
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left side Image */}
              <div className="lg:col-span-6 flex justify-center">
                <ImagePlaceholder
                  type="wide"
                  tag="Image placeholder"
                  what="The waiter dashboard showing &quot;Ready to serve&quot; items and the queue of table alerts."
                  size="Suggested 1200 × 750 px"
                  caption="What is ready to carry out, right now"
                />
              </div>

              {/* Right side Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f95722] mb-1">
                  STEP SIX — SERVE
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif-heading text-slate-900 leading-[1.15] tracking-tight">
                  The bread goes out hot<span className="text-[#f95722]">.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                  The waiter is told the second a dish is plated — not when they next walk past the pass.
                </p>

                <div className="space-y-3 pt-1 max-w-lg">
                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Serve one dish now and leave the rest cooking.
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      A guest who prefers to talk to a person can still order from the waiter with a guided flow.
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      &quot;Call waiter&quot; and &quot;Bring the bill&quot; are one tap for the guest. Nobody waves an arm.
                    </span>
                  </div>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 sm:p-5 rounded-r-2xl text-slate-900 text-sm sm:text-[15px] shadow-xs">
                  <strong className="text-emerald-900 font-bold">Nothing is forgotten.</strong> If a bill request waits more than a minute, it moves up to the manager&apos;s screen by itself.
                </div>
              </div>
            </div>

            {/* Centered bottom transition bar & text */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="w-8 h-[2.5px] bg-[#f95722] rounded-full mx-auto mb-3" />
              <p className="text-sm sm:text-base text-slate-400 italic font-serif-heading">
                The meal is finished. Now comes the slowest part of the night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 12 — STEP 7: PAY (Content Left, Image Right) */}
      <section className="py-14 md:py-20 bg-white border-t border-slate-100 relative overflow-hidden" id="step-7">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="relative pl-8 sm:pl-10">
            {/* Continuous vertical line ending at step 7 */}
            <div className="absolute top-0 bottom-6 left-0 w-[2px] bg-gradient-to-b from-[#f95722] via-[#f95722]/40 to-transparent pointer-events-none z-0" />

            {/* Circle badge 7 */}
            <span className="absolute -left-[17px] sm:-left-[21px] top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#f95722] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/30 z-10">
              7
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left side Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f95722] mb-1">
                  STEP SEVEN — PAY
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif-heading text-slate-900 leading-[1.15] tracking-tight">
                  Fifteen minutes becomes
                  <br />
                  ninety seconds<span className="text-[#f95722]">.</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg">
                  The guest pays from the phone they already have in their hand.
                </p>

                <div className="space-y-3 pt-1 max-w-lg">
                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Pay all of it, split it evenly between 2–10 people, or pay a custom amount.
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Tip 10%, 12.5%, 15% or any amount — chosen privately, not while a waiter watches.
                    </span>
                  </div>

                  <div className="bg-white/90 border border-slate-100/90 shadow-sm rounded-2xl p-3.5 flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center flex-none mt-0.5">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-[15px]">
                      Prefer cash or card at the table? That option never goes away.
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-3 max-w-lg shadow-xs">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">And then, by itself</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-center gap-2"><span className="text-[#f95722] font-bold">·</span> Points are added to their loyalty account.</li>
                    <li className="flex items-center gap-2"><span className="text-[#f95722] font-bold">·</span> The tax on the order is worked out and stored.</li>
                    <li className="flex items-center gap-2"><span className="text-[#f95722] font-bold">·</span> The tip is written into the tips record.</li>
                    <li className="flex items-center gap-2"><span className="text-[#f95722] font-bold">·</span> The dish is counted in tonight&apos;s sales.</li>
                    <li className="flex items-center gap-2"><span className="text-[#f95722] font-bold">·</span> A review link appears at the right moment.</li>
                  </ul>
                </div>
              </div>

              {/* Right side Image */}
              <div className="lg:col-span-6 flex justify-center">
                <ImagePlaceholder
                  type="phone"
                  tag="Image placeholder"
                  what="The bill screen showing split options, custom tip percentages and standard payment methods."
                  size="Suggested 600 × 1130 px"
                  caption="Split, tip and pay in ninety seconds"
                />
              </div>
            </div>

            {/* Centered bottom transition bar & text */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="w-8 h-[2.5px] bg-[#f95722] rounded-full mx-auto mb-3" />
              <p className="text-sm sm:text-base text-slate-400 italic font-serif-heading">
                Seven steps. Now see what every person on your team gets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
