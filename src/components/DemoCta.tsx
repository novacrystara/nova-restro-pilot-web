import React from "react";

export function DemoCta() {
  const demos = [
    {
      imgSrc: "/images/see_it_in_action/Guest Menu.png",
      title: "Guest menu",
      desc: "Scan a table and order like a guest would.",
      icon: (
        <svg className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="3" height="3" />
          <path d="M14 20h3v1" />
          <path d="M20 14v3" />
          <path d="M20 20h1" />
        </svg>
      ),
    },
    {
      imgSrc: "/images/see_it_in_action/Kitchen screen.png",
      title: "Kitchen screen",
      desc: "Watch the order arrive and mark it ready.",
      icon: (
        <svg className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" />
          <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
      ),
    },
    {
      imgSrc: "/images/see_it_in_action/Waiter view.png",
      title: "Waiter view",
      desc: "See what is ready to carry out.",
      icon: (
        <svg className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      imgSrc: "/images/see_it_in_action/Manager panel.png",
      title: "Manager panel",
      desc: "The live floor map and the reports.",
      icon: (
        <svg className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100" id="see-it">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600 mb-2">
            SEE IT IN ACTION
          </div>
          <div className="w-8 h-[2.5px] bg-orange-600 rounded-full mx-auto mb-3" />
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold font-serif-heading text-slate-900 leading-[1.12] break-words">
            Open it and try it yourself.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed max-w-xl mx-auto">
            Four live screens. Real data. Nothing to install.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {demos.map((d, i) => (
            <article
              key={i}
              className="bg-white p-5 sm:p-6 rounded-[28px] border border-slate-200/80 shadow-sm flex flex-col justify-between items-center text-center hover:shadow-md hover:border-orange-200 transition-all group"
            >
              <div className="w-full flex flex-col items-center">
                {/* Mobile Screen Thumbnail Container */}
                <div className="w-full h-56 sm:h-64 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden mb-5 flex items-center justify-center p-2 group-hover:scale-[1.02] transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.imgSrc}
                    alt={d.title}
                    className="w-full h-full object-contain drop-shadow-sm rounded-xl"
                  />
                </div>

                {/* Orange Circular Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-orange-50/90 border border-orange-100/90 text-orange-600 flex items-center justify-center mb-4 flex-none shadow-2xs group-hover:bg-orange-600 transition-colors">
                  {d.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">
                  {d.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-[220px]">
                  {d.desc}
                </p>
              </div>

              {/* Bottom Action Button */}
              <a
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all flex items-center justify-center gap-1.5 shadow-2xs mt-auto group/btn"
                href="#"
              >
                <span>Open demo</span>
                <span className="text-orange-600 group-hover/btn:translate-x-0.5 transition-transform">→</span>
              </a>
            </article>
          ))}
        </div>

        {/* Want it in your restaurant card banner - Matching exact reference image */}
        <div className="bg-[#fff8f5] border border-orange-200/60 rounded-[32px] p-7 sm:p-10 lg:p-12 max-w-4xl mx-auto mt-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          {/* Left info column */}
          <div className="text-center md:text-left flex-1">
            <span className="bg-orange-100/80 border border-orange-200/70 text-orange-600 text-[11px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full inline-block mb-3">
              YOUR RESTAURANT, LIVE
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-serif-heading text-slate-900 tracking-tight leading-snug mb-2">
              Want it in your restaurant?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tell us your restaurant name and how many tables you have.
              <br className="hidden sm:inline" /> We will set up a demo with your own menu.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-[1px] bg-slate-200/80 self-stretch my-1" />

          {/* Right action column */}
          <div className="flex flex-col items-center justify-center gap-4 w-full sm:w-auto sm:flex-none sm:min-w-[240px] text-center">
            <a
              className="inline-flex items-center justify-center px-7 py-3 sm:py-3.5 rounded-full bg-[#f95722] hover:bg-[#e04815] !text-white text-sm sm:text-base font-semibold transition-all shadow-md shadow-orange-500/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] gap-2"
              href="mailto:hello@novarestro.com?subject=Nova%20Restro%20walkthrough"
            >
              <span>Book a walkthrough</span>
              <span className="text-base sm:text-lg">→</span>
            </a>

            <a
              className="inline-flex items-center gap-2.5 text-[#f95722] font-semibold hover:text-orange-700 transition-colors text-sm sm:text-base group/mail"
              href="mailto:hello@novarestro.com"
            >
              <svg className="w-5 h-5 text-[#f95722] flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="border-b border-[#f95722] pb-0.5 leading-none break-all">hello@novarestro.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
