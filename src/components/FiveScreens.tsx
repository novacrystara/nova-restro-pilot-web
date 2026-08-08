import React from "react";

export function FiveScreens() {
  const roles = [
    {
      ico: "👤",
      title: "The guest",
      desc: "The menu, their order, and the bill. On their own phone. No login.",
    },
    {
      ico: "👨‍🍳",
      title: "The kitchen",
      desc: "One list: what to cook next. Drinks to the bar, food to the chef.",
    },
    {
      ico: "🧑‍💼",
      title: "The waiter",
      desc: "The floor, and what is ready to carry out right now.",
    },
    {
      ico: "👔",
      title: "The manager",
      desc: "A live map of every table, plus menu, staff, prices and reports.",
    },
    {
      ico: "🏢",
      title: "The owner",
      desc: "Every branch at once. Total sales. Which site is busiest.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {roles.map((r, i) => (
            <article key={i} className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 transition-all text-center flex flex-col items-center">
              <span className="text-4xl mb-4 block" aria-hidden="true">
                {r.ico}
              </span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">{r.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{r.desc}</p>
            </article>
          ))}
        </div>

        <p className="text-center text-sm sm:text-base text-slate-400 italic mt-10 pt-6 border-t border-slate-200/60 max-w-md mx-auto">
          And all of it is yours to change.
        </p>
      </div>
    </section>
  );
}
