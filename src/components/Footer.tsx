import React from "react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-10">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a className="inline-flex items-center gap-2.5 font-bold text-slate-900 text-lg tracking-tight" href="#top">
              <span className="w-7.5 h-7.5 rounded-lg bg-orange-600 text-white flex items-center justify-center font-extrabold text-sm rotate-45">
                <span className="-rotate-45">N</span>
              </span>
              Nova Restro
            </a>
            <p className="text-sm text-slate-600 mt-4 max-w-xs leading-relaxed">
              One system for the whole restaurant.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">How it works</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#step-1" className="hover:text-orange-600 transition-colors">1. Scan</a></li>
              <li><a href="#step-2" className="hover:text-orange-600 transition-colors">2. Ask</a></li>
              <li><a href="#step-3" className="hover:text-orange-600 transition-colors">3. Order</a></li>
              <li><a href="#step-4" className="hover:text-orange-600 transition-colors">4. Check</a></li>
              <li><a href="#step-5" className="hover:text-orange-600 transition-colors">5. Cook</a></li>
              <li><a href="#step-6" className="hover:text-orange-600 transition-colors">6. Serve</a></li>
              <li><a href="#step-7" className="hover:text-orange-600 transition-colors">7. Pay</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">For your team</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#team" className="hover:text-orange-600 transition-colors">Guest</a></li>
              <li><a href="#team" className="hover:text-orange-600 transition-colors">Kitchen</a></li>
              <li><a href="#team" className="hover:text-orange-600 transition-colors">Waiter</a></li>
              <li><a href="#team" className="hover:text-orange-600 transition-colors">Manager</a></li>
              <li><a href="#team" className="hover:text-orange-600 transition-colors">Owner</a></li>
              <li><a href="#roi" className="hover:text-orange-600 transition-colors">What it&apos;s worth</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><a href="#" className="hover:text-orange-600 transition-colors">About</a></li>
              <li><a href="mailto:hello@novarestro.com" className="hover:text-orange-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <span>© 2026 Nova Restro</span>
          <span>Built by NovaCrystara AI Labs</span>
        </div>
      </div>
    </footer>
  );
}
