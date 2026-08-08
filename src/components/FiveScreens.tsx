import React from "react";

export function FiveScreens() {
  const roles = [
    {
      imgSrc: "/images/for_your_team/The guest.png",
      title: "The guest",
      desc: "The menu, their order, and the bill. On their own phone. No login.",
      badge: "Mobile view",
      badgeColor: "bg-purple-50/60 border-purple-100/90 text-purple-800",
      iconSvg: (
        <svg className="w-4 h-4 text-purple-600 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      imgSrc: "/images/for_your_team/The kitchen.png",
      title: "The kitchen",
      desc: "One list: what to cook next. Drinks to the bar, food to the chef.",
      badge: "Kitchen display",
      badgeColor: "bg-orange-50/60 border-orange-100/90 text-orange-800",
      iconSvg: (
        <svg className="w-4 h-4 text-orange-600 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      ),
    },
    {
      imgSrc: "/images/for_your_team/The waiter.png",
      title: "The waiter",
      desc: "The floor, and what is ready to carry out right now.",
      badge: "Floor view",
      badgeColor: "bg-emerald-50/60 border-emerald-100/90 text-emerald-800",
      iconSvg: (
        <svg className="w-4 h-4 text-emerald-600 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      imgSrc: "/images/for_your_team/The manager.png",
      title: "The manager",
      desc: "A live map of every table, plus menu, staff, prices and reports.",
      badge: "Live dashboard",
      badgeColor: "bg-blue-50/60 border-blue-100/90 text-blue-800",
      iconSvg: (
        <svg className="w-4 h-4 text-blue-600 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      imgSrc: "/images/for_your_team/The owner.png",
      title: "The owner",
      desc: "Every branch at once. Total sales. Which site is busiest.",
      badge: "Business overview",
      badgeColor: "bg-amber-50/60 border-amber-100/90 text-amber-800",
      iconSvg: (
        <svg className="w-4 h-4 text-amber-600 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100" id="team">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-orange-600 mb-3">FOR YOUR TEAM</div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-serif-heading text-slate-900 tracking-tight">
            Everyone sees only what they need<span className="text-orange-600">.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            One system, five different views. Nobody is shown a screen full of
            things that are not their job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
          {roles.map((r, i) => (
            <article key={i} className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 transition-all text-center flex flex-col items-center justify-between h-full group">
              <div className="flex flex-col items-center w-full">
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border border-slate-200/70 shadow-sm p-1 bg-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform flex-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.imgSrc}
                    alt={r.title}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900 mb-2">{r.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{r.desc}</p>
              </div>

              {/* Bottom Pill Button */}
              <div className={`w-full py-2.5 px-3 rounded-2xl border ${r.badgeColor} flex items-center justify-center gap-2 text-xs font-semibold shadow-2xs mt-auto`}>
                {r.iconSvg}
                <span>{r.badge}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Centered bottom transition bar & text */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="w-8 h-[2.5px] bg-[#f95722] rounded-full mx-auto mb-3" />
          <p className="text-sm sm:text-base text-slate-400 italic font-serif-heading">
            And all of it is yours to change.
          </p>
        </div>
      </div>
    </section>
  );
}
