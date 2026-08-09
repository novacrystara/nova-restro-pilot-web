import React from "react";

export function Overview() {
  return (
    <section className="py-12 md:py-16 bg-[#faf8f5]/60 border-t border-slate-100" id="overview">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 rise">
          {/* Orange top accent dash */}
          <div className="w-8 h-[2.5px] bg-orange-600 rounded-full mx-auto mb-3" />

          {/* Section Tag */}
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-orange-600 mb-3">
            EVERYTHING. CONNECTED.
          </div>

          {/* Headline - Playfair Display Serif font */}
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold font-serif-heading text-slate-900 tracking-tight leading-[1.12] mb-4">
            One system for
            <br />
            the whole restaurant<span className="text-orange-600">.</span>
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-[1.65] max-w-3xl mx-auto">
            Nova Restro is one system that runs a restaurant. Guests order from their phone.
            <br className="hidden sm:inline" />
            The kitchen gets the order instantly. Waiters know what to carry. Managers see
            <br className="hidden sm:inline" />
            everything. Owners get the numbers, automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: For your guests */}
          <article className="bg-white/90 p-8 sm:p-10 rounded-[28px] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all flex flex-col justify-between group cursor-pointer min-h-[380px] relative scale-in" data-delay="1">
            <div>
              {/* Round Circle Icon Container with Soft Orange Glow */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#fffaf4] to-[#fbf5eb] flex items-center justify-center mb-6 border border-amber-100/80 shadow-[0_10px_25px_-5px_rgba(234,88,12,0.15)] group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/everything_connected/NovaCrystara AI Login and QR Code.png"
                  alt="For your guests icon"
                  className="w-full h-full object-contain drop-shadow-md scale-[1.1]"
                />
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900">For your guests</h3>
              <div className="w-8 h-[3px] bg-orange-600 rounded-full my-3" />
              <p className="text-base text-slate-600 leading-relaxed">They order, track and pay from their own phone.</p>
            </div>
            <div className="w-11 h-11 rounded-full border-2 border-orange-200 text-orange-600 flex items-center justify-center font-bold text-lg mt-7 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 group-hover:translate-x-1 transition-all">
              →
            </div>
          </article>

          {/* Card 2: For your team (Middle Card with Soft Warm Tint Background matching Reference Image) */}
          <article className="bg-gradient-to-b from-[#fffbf7] via-white to-white p-8 sm:p-10 rounded-[28px] border border-orange-100/90 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all flex flex-col justify-between group cursor-pointer min-h-[380px] relative scale-in" data-delay="2">
            <div>
              {/* Round Circle Icon Container with Soft Orange Glow */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#fffaf4] to-[#fbf5eb] flex items-center justify-center mb-6 border border-amber-100/80 shadow-[0_10px_25px_-5px_rgba(234,88,12,0.15)] group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/everything_connected/NovaCrystara AI Task Dashboard.png"
                  alt="For your team icon"
                  className="w-full h-full object-contain drop-shadow-md scale-[1.2]"
                />
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900">For your team</h3>
              <div className="w-8 h-[3px] bg-orange-600 rounded-full my-3" />
              <p className="text-base text-slate-600 leading-relaxed">Kitchen, waiters and managers each get their own screen.</p>
            </div>
            <div className="w-11 h-11 rounded-full border-2 border-orange-200 text-orange-600 flex items-center justify-center font-bold text-lg mt-7 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 group-hover:translate-x-1 transition-all">
              →
            </div>
          </article>

          {/* Card 3: For you */}
          <article className="bg-white/90 p-8 sm:p-10 rounded-[28px] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all flex flex-col justify-between group cursor-pointer min-h-[380px] relative scale-in" data-delay="3">
            <div>
              {/* Round Circle Icon Container with Soft Orange Glow */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#fffaf4] to-[#fbf5eb] flex items-center justify-center mb-6 border border-amber-100/80 shadow-[0_10px_25px_-5px_rgba(234,88,12,0.15)] group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/everything_connected/graph1.png"
                  alt="For you icon"
                  className="w-full h-full object-contain drop-shadow-md scale-[0.65]"
                />
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900">For you</h3>
              <div className="w-8 h-[3px] bg-orange-600 rounded-full my-3" />
              <p className="text-base text-slate-600 leading-relaxed">Sales, tax and tips are recorded while service happens.</p>
            </div>
            <div className="w-11 h-11 rounded-full border-2 border-orange-200 text-orange-600 flex items-center justify-center font-bold text-lg mt-7 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 group-hover:translate-x-1 transition-all">
              →
            </div>
          </article>
        </div>

        <p className="text-center text-sm sm:text-base text-slate-400 italic mt-12 pt-6 border-t border-slate-100 max-w-md mx-auto rise">
          To see why this matters, look at a{" "}
          <span className="text-orange-600 font-bold not-italic">busy night</span>{" "}
          without it.
        </p>
      </div>
    </section>
  );
}
