import React from "react";

export function WhyDifferent() {
  const items = [
    {
      num: "01",
      title: "The assistant knows your kitchen",
      desc: "It answers from the notes your chef wrote. Not from the internet. Not guessed.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#f95722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="9" y="3" width="6" height="4" rx="1" stroke="#f95722" strokeWidth="2" />
          <path d="M9 12H15M9 16H13" stroke="#f95722" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Allergy safety is a chain, not a tick-box",
      desc: "Six steps, each one recorded with a time. The chef cannot start cooking until they confirm.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" stroke="#f95722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M9 12L11 14L15 10" stroke="#f95722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "It understands how a kitchen actually works",
      desc: "Drinks go to the bar. Food goes to the hot section. Dishes are marked ready one at a time.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V12Z" stroke="#f95722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12H21" stroke="#f95722" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 12V8C8 7 9 6 10 7" stroke="#f95722" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 12V7C12 6 13 5 14 6" stroke="#f95722" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 12V8C16 7 17 6 18 7" stroke="#f95722" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Nothing is quietly forgotten",
      desc: "Late orders go red. Unanswered bill requests move up to the manager. Ready food does not sit.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#f95722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#f95722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 rise">
          <div className="text-xs font-bold tracking-[0.18em] uppercase text-orange-600 mb-3">WHY NOVA RESTRO</div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold font-serif-heading text-slate-900 tracking-tight">
            Four things other systems do not do<span className="text-orange-600">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <article key={i} className="relative bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 transition-all rise" data-delay={String(i + 1)}>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-extrabold text-orange-600 leading-none mt-1">{item.num}</span>
                  <h3 className="text-xl font-bold font-serif-heading text-slate-900 max-w-[220px]">{item.title}</h3>
                </div>
                <div className="w-12 h-12 min-w-12 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-10">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center mt-10 pt-6">
          <div className="w-12 h-[3px] bg-orange-500 rounded-full mb-4" />
          <p className="text-center text-sm sm:text-base text-slate-400 italic max-w-md">
            All of that is the story. Now put your own numbers on it.
          </p>
        </div>
      </div>
    </section>
  );
}
