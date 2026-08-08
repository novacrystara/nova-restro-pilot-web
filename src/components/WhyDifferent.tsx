import React from "react";

export function WhyDifferent() {
  const items = [
    {
      num: "01",
      title: "The assistant knows your kitchen",
      desc: "It answers from the notes your chef wrote. Not from the internet. Not guessed.",
    },
    {
      num: "02",
      title: "Allergy safety is a chain, not a tick-box",
      desc: "Six steps, each one recorded with a time. The chef cannot start cooking until they confirm.",
    },
    {
      num: "03",
      title: "It understands how a kitchen actually works",
      desc: "Drinks go to the bar. Food goes to the hot section. Dishes are marked ready one at a time.",
    },
    {
      num: "04",
      title: "Nothing is quietly forgotten",
      desc: "Late orders go red. Unanswered bill requests move up to the manager. Ready food does not sit.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-orange-600 mb-3">WHY NOVA RESTRO</div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-serif-heading text-slate-900 tracking-tight">
            Four things other systems do not do<span className="text-orange-600">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <article key={i} className="relative bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 transition-all overflow-hidden">
              <span className="absolute top-2 right-5 text-7xl font-extrabold text-orange-600/10 select-none" aria-hidden="true">
                {item.num}
              </span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-3 relative z-10 max-w-sm">{item.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 relative z-10 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <p className="text-center text-sm sm:text-base text-slate-400 italic mt-10 pt-6 border-t border-slate-100 max-w-md mx-auto">
          All of that is the story. Now put your own numbers on it.
        </p>
      </div>
    </section>
  );
}
