import React from "react";

export function Hero() {
  return (
    <section className="relative min-h-[540px] sm:min-h-[580px] lg:min-h-[660px] flex flex-col justify-center py-10 sm:py-12 lg:py-16 overflow-hidden bg-[#faf8f5]" id="top">
      {/* Full Bleed Seamless Background Image Layer for Mobile & Desktop */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero_section/home_sec_1.png"
          alt="Nova Restro Hero"
          className="w-full h-full object-cover object-[80%_center] sm:object-center translate-z-0 border-0"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
      </div>

      {/* Soft Left-to-Right Warm Gradient Overlay — Ensures 100% Text Readability while keeping QR Stand & Phone Crisp */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-[#faf8f5]/95 via-[#faf8f5]/75 to-transparent w-[65%] sm:w-[50%] lg:w-[40%]" />

      <div className="relative z-2 max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-[280px] xs:max-w-xs sm:max-w-xl lg:max-w-2xl">
          {/* Serif Headline matching 'One system for the whole restaurant' font typography */}
          <h1 className="text-[28px] xs:text-[34px] sm:text-5xl lg:text-[62px] font-serif-heading text-slate-900 leading-[1.08] tracking-tight">
            Your table
            <br />
            takes the
            <br />
            order<span className="text-orange-600">.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-lg lg:text-xl text-slate-700 font-medium mt-3 sm:mt-5 leading-relaxed">
            A guest sits down, scans the code on the table,
            <br className="hidden sm:inline" />
            and orders from their own phone.
            <br className="hidden sm:inline" />
            The kitchen sees it in three seconds.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mt-5 sm:mt-8">
            <a
              className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[48px] px-6 sm:px-8 rounded-full bg-[#ea580c] hover:bg-[#c2410c] !text-white text-xs sm:text-base font-semibold transition-all transform-gpu hover:-translate-y-0.5 shadow-lg shadow-orange-600/35 active:scale-95"
              href="#see-it"
            >
              See it working
            </a>
            <a
              className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[48px] px-6 sm:px-8 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-xs sm:text-base font-semibold transition-all transform-gpu hover:-translate-y-0.5 shadow-sm active:scale-95"
              href="#how"
            >
              How it works
            </a>
          </div>

          {/* Feature Badge Chips */}
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-6 gap-y-2 mt-5 sm:mt-8 text-[11px] sm:text-base font-medium text-slate-700">
            <span className="inline-flex items-center gap-1 sm:gap-2">
              <span className="text-emerald-600 font-extrabold text-xs sm:text-base">✓</span> No app to download
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-2">
              <span className="text-emerald-600 font-extrabold text-xs sm:text-base">✓</span> Works on any phone
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-2">
              <span className="text-emerald-600 font-extrabold text-xs sm:text-base">✓</span> Ready in one day
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
