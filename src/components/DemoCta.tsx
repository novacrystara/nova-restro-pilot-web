import React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function DemoCta() {
  const demos = [
    {
      title: "📱 Guest menu",
      desc: "Scan a table and order like a guest would.",
      what: "Guest menu thumbnail",
    },
    {
      title: "👨‍🍳 Kitchen screen",
      desc: "Watch the order arrive and mark it ready.",
      what: "Kitchen screen thumbnail",
    },
    {
      title: "🧑‍💼 Waiter view",
      desc: "See what is ready to carry out.",
      what: "Waiter view thumbnail",
    },
    {
      title: "👔 Manager panel",
      desc: "The live floor map and the reports.",
      what: "Manager panel thumbnail",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100" id="see-it">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold font-serif-heading text-slate-900 leading-[1.12]">
            Open it and try it yourself.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed max-w-xl mx-auto">
            Four live screens. Real data. Nothing to install.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((d, i) => (
            <article key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <ImagePlaceholder type="thumb" tag="Image" what={d.what} />
                <h3 className="text-lg font-bold font-serif-heading text-slate-900 mt-4 mb-1">{d.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{d.desc}</p>
              </div>
              <a className="inline-flex items-center justify-center py-2 px-4 rounded-xl border border-slate-200 text-slate-900 text-xs font-semibold hover:bg-slate-50 transition-colors w-full text-center" href="#">
                Open
              </a>
            </article>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-[32px] p-8 sm:p-12 text-center max-w-3xl mx-auto mt-12 shadow-xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading">Want it in your restaurant?</h3>
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tell us your restaurant name and how many tables you have. We will
            set up a demo with your own menu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] !text-white text-base font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-600/35"
              href="mailto:hello@novarestro.com?subject=Nova%20Restro%20walkthrough"
            >
              Book a walkthrough
            </a>
            <a className="text-slate-300 hover:text-white font-medium text-base transition-colors" href="mailto:hello@novarestro.com">
              hello@novarestro.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
