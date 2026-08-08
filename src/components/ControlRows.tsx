import React from "react";

export function ControlRows() {
  const rows = [
    { k: "Your menu", v: "Dishes, prices, photos, spice level, allergens, categories." },
    { k: "Sold out", v: "One tap marks a dish sold out. Every phone updates instantly." },
    { k: "Your kitchen", v: "How many prep stations you run, and which dish goes to which." },
    {
      k: "Your tables",
      v: (
        <>
          Name them anything — <code className="px-2 py-0.5 rounded bg-slate-100 font-mono text-xs text-orange-600">Table 1</code>, <code className="px-2 py-0.5 rounded bg-slate-100 font-mono text-xs text-orange-600">Patio 2</code>, <code className="px-2 py-0.5 rounded bg-slate-100 font-mono text-xs text-orange-600">VIP Booth A</code>. Print a QR stand for each.
        </>
      ),
    },
    { k: "Your staff", v: "Create logins for managers, waiters and kitchen staff." },
    { k: "Your rules", v: "Do orders go straight to the kitchen, or does staff approve first?" },
    { k: "Kitchen busy", v: "Running 20 minutes late? Say so, and guests are warned before they order." },
    { k: "Your tax", v: "Set your rate. Set a different rate for one menu category if you need to." },
    { k: "Your assistant", v: "Write your kitchen notes. That is exactly what the assistant knows." },
    { k: "Your rewards", v: "How many points per pound, and what they can be spent on." },
    { k: "Your brand", v: "Name, tagline, logo, cover photo, currency, review link." },
  ];

  return (
    <>
      {/* SEC 14 — YOU CONTROL EVERYTHING YOURSELF */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold font-serif-heading text-slate-900 leading-[1.12]">
              Change anything, any time.
              <br />
              No phone call to us.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
              Every part of the system is yours to edit. Changes appear on every
              guest&apos;s phone straight away.
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-slate-100 bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
            {rows.map((row, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 p-5 hover:bg-orange-50/40 transition-colors">
                <span className="text-emerald-600 font-extrabold text-lg flex-none">✓</span>
                <span className="font-bold text-slate-900 text-base sm:w-44 flex-none">{row.k}</span>
                <span className="text-slate-600 text-sm sm:text-base leading-relaxed">{row.v}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm sm:text-base text-slate-400 italic mt-10 pt-6 border-t border-slate-100 max-w-md mx-auto">
            While you run service, the paperwork writes itself.
          </p>
        </div>
      </section>

      {/* SEC 15 — EVERYTHING IS WRITTEN DOWN AUTOMATICALLY */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold font-serif-heading text-slate-900 leading-[1.12]">
              The paperwork is finished before you sit down to do it.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
              The reports are not a separate job. They are made out of the service
              you already ran.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl block mb-4" role="img" aria-label="Sales">📈</span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">Sales</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Revenue, order count, average spend, best-selling dishes, repeat guests.</p>
            </article>
            <article className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl block mb-4" role="img" aria-label="Tax">🧾</span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">Tax</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Day-by-day net, tax and gross. Download it as a spreadsheet.</p>
            </article>
            <article className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl block mb-4" role="img" aria-label="Tips">💷</span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">Tips</h3>
              <p className="text-sm text-slate-600 leading-relaxed">A permanent record of how tips were shared, for every period.</p>
            </article>
            <article className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl block mb-4" role="img" aria-label="Rewards">🎁</span>
              <h3 className="text-xl font-bold font-serif-heading text-slate-900 mb-2">Rewards</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Who your regulars are, what they earned, what they redeemed.</p>
            </article>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-5 rounded-r-2xl text-slate-900 text-base max-w-3xl mx-auto mt-8 shadow-sm">
            Tax is worked out on each order at the moment of sale, and stored with that order.
            If your rate changes next year, last year&apos;s receipts stay correct.
          </div>

          <p className="text-center text-sm sm:text-base text-slate-400 italic mt-10 pt-6 border-t border-slate-200/60 max-w-md mx-auto">
            So what makes this different from other systems?
          </p>
        </div>
      </section>
    </>
  );
}
