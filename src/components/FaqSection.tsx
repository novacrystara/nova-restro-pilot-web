import React from "react";

export function FaqSection() {
  const faqs = [
    {
      q: "Do guests need to download an app?",
      a: "No. It opens in the phone's browser. Nothing to install.",
    },
    {
      q: "What if a guest does not have a phone?",
      a: "The waiter takes the order on theirs. Same system, same safety checks.",
    },
    {
      q: "Do we lose our waiters' jobs?",
      a: "No. Waiters stop taking down orders and start looking after guests.",
    },
    {
      q: "What if the internet goes down?",
      a: "Staff can keep taking orders on the staff screens, and pay-at-table always works.",
    },
    {
      q: "Can we still take cash?",
      a: "Yes. Card payment is a switch you turn on or off.",
    },
    {
      q: "How long does setup take?",
      a: "Your menu, tables and staff can be set up in a day.",
    },
    {
      q: "Does it work for a bar as well as a kitchen?",
      a: "Yes. You define your own prep stations and send each dish to the right one.",
    },
    {
      q: "Do we need new hardware?",
      a: "A tablet or screen for the kitchen. Everything else you already have.",
    },
    {
      q: "Is our data ours?",
      a: "Yes. Your menu, your guests, your sales. You can export it.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100" id="questions">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold font-serif-heading text-slate-900 leading-[1.12]">
            Questions people ask.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 group cursor-pointer transition-all hover:bg-white hover:shadow-md">
              <summary className="font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between list-none">
                <span>{faq.q}</span>
                <span className="text-orange-600 font-extrabold text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 pt-3 border-t border-slate-200/60">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-center text-sm sm:text-base text-slate-400 italic mt-10 pt-6 border-t border-slate-100 max-w-md mx-auto">
          The fastest way to understand it is to open it.
        </p>
      </div>
    </section>
  );
}
