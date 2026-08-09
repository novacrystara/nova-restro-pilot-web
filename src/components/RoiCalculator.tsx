"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";

const gbp0 = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});
const plain0 = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 });

const money = (n: number) => gbp0.format(Math.round(n));
const count = (n: number) => plain0.format(Math.round(n));
const hoursFmt = (n: number) =>
  plain0.format(Math.round(n)) + (Math.round(n) === 1 ? " hour" : " hours");
const pct = (n: number) => (Math.round(n * 10) / 10) + "%";

export function RoiCalculator() {
  // Main sliders
  const [orders, setOrders] = useState<number>(80);
  const [value, setValue] = useState<number>(24);
  const [loss, setLoss] = useState<number>(2);

  // Assumptions
  const [days, setDays] = useState<number>(30);
  const [mins, setMins] = useState<number>(10);
  const [wage, setWage] = useState<number>(18);
  const [recov, setRecov] = useState<number>(80);
  const [ai, setAi] = useState<number>(3);
  const [newg, setNewg] = useState<number>(50);
  const [rep, setRep] = useState<number>(10);

  // Animated numbers state
  const [displayTotal, setDisplayTotal] = useState<number>(0);
  const [displayYear, setDisplayYear] = useState<number>(0);
  const [displayMoney, setDisplayMoney] = useState<number>(0);
  const [displayHours, setDisplayHours] = useState<number>(0);
  const [displayTimeVal, setDisplayTimeVal] = useState<number>(0);
  const [displayBdTime, setDisplayBdTime] = useState<number>(0);
  const [displayBdRefund, setDisplayBdRefund] = useState<number>(0);
  const [displayBdAi, setDisplayBdAi] = useState<number>(0);
  const [displayBdLoyal, setDisplayBdLoyal] = useState<number>(0);

  const prevTotalRef = useRef<number>(0);
  const secRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  // Calculate live model metrics
  const model = useMemo(() => {
    const N = orders || 80;
    const A = value || 24;
    const L = (loss || 2) / 100;
    const D = days || 30;
    const W = mins || 10;
    const H = wage || 18;
    const R = (recov || 80) / 100;
    const C = (ai || 3) / 100;
    const Ng = (newg || 50) / 100;
    const Rp = (rep || 10) / 100;

    const mOrders = N * D;
    const mRev = mOrders * A;

    const hrs = (mOrders * W) / 60;
    const timeVal = hrs * H;
    const writeOff = mRev * L;
    const recovered = writeOff * R;
    const uplift = mRev * C;
    const newG = mOrders * Ng;
    const newReg = newG * Rp;
    const loyalty = newReg * A;

    const cash = recovered + uplift + loyalty;
    const total = cash + timeVal;

    return {
      N,
      A,
      L,
      D,
      W,
      H,
      R,
      C,
      Ng,
      Rp,
      mOrders,
      mRev,
      hrs,
      timeVal,
      writeOff,
      recovered,
      uplift,
      newG,
      newReg,
      loyalty,
      cash,
      total,
      year: total * 12,
    };
  }, [orders, value, loss, days, mins, wage, recov, ai, newg, rep]);

  // Handle animation on initial viewport reveal or value updates
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setDisplayTotal(model.total);
      setDisplayYear(model.year);
      setDisplayMoney(model.cash);
      setDisplayHours(model.hrs);
      setDisplayTimeVal(model.timeVal);
      setDisplayBdTime(model.timeVal);
      setDisplayBdRefund(model.recovered);
      setDisplayBdAi(model.uplift);
      setDisplayBdLoyal(model.loyalty);
      return;
    }

    if (!hasAnimatedRef.current && secRef.current && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            hasAnimatedRef.current = true;
            animateValues(0, model);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(secRef.current);
      return () => observer.disconnect();
    } else {
      animateValues(prevTotalRef.current, model);
    }
    prevTotalRef.current = model.total;
  }, [model]);

  const animateValues = (startFrom: number, m: typeof model) => {
    let startTimestamp: number | null = null;
    const duration = 750;

    const startTotal = startFrom;
    const targetTotal = m.total;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(1, (timestamp - startTimestamp) / duration);
      const ease = 1 - Math.pow(1 - progress, 3);

      setDisplayTotal(startTotal + (targetTotal - startTotal) * ease);
      setDisplayYear((startTotal + (targetTotal - startTotal) * ease) * 12);
      setDisplayMoney(m.cash * ease);
      setDisplayHours(m.hrs * ease);
      setDisplayTimeVal(m.timeVal * ease);
      setDisplayBdTime(m.timeVal * ease);
      setDisplayBdRefund(m.recovered * ease);
      setDisplayBdAi(m.uplift * ease);
      setDisplayBdLoyal(m.loyalty * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayTotal(m.total);
        setDisplayYear(m.year);
        setDisplayMoney(m.cash);
        setDisplayHours(m.hrs);
        setDisplayTimeVal(m.timeVal);
        setDisplayBdTime(m.timeVal);
        setDisplayBdRefund(m.recovered);
        setDisplayBdAi(m.uplift);
        setDisplayBdLoyal(m.loyalty);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100" id="roi" ref={secRef}>
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">What it&apos;s worth</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold font-serif-heading text-slate-900 leading-[1.12] mt-3">
            Put your own numbers in.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Move three sliders. We will show you what Nova Restro is likely to be
            worth to your restaurant, every month, and exactly how we got there.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT CARD — YOUR RESTAURANT */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Your restaurant</p>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-900 text-base" htmlFor="roi-orders">
                  Orders a day
                </label>
                <output className="font-extrabold text-slate-900 text-lg" htmlFor="roi-orders">
                  {count(orders)}
                </output>
              </div>
              <input
                type="range"
                id="roi-orders"
                min="10"
                max="400"
                step="5"
                value={orders}
                onChange={(e) => setOrders(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <p className="text-xs text-slate-400">
                How many orders your kitchen sends out on an average day.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-900 text-base" htmlFor="roi-value">
                  Average order size
                </label>
                <output className="font-extrabold text-orange-600 text-lg" htmlFor="roi-value">
                  {money(value)}
                </output>
              </div>
              <input
                type="range"
                id="roi-value"
                min="5"
                max="120"
                step="1"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <p className="text-xs text-slate-400">
                What one order is worth on average, before tips.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-900 text-base" htmlFor="roi-loss">
                  Revenue lost to wrong orders
                </label>
                <output className="font-extrabold text-orange-600 text-lg" htmlFor="roi-loss">
                  {pct(loss)}
                </output>
              </div>
              <input
                type="range"
                id="roi-loss"
                min="0"
                max="8"
                step="0.5"
                value={loss}
                onChange={(e) => setLoss(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <p className="text-xs text-slate-400">
                Money written off for mistakes, remakes and comped dishes.
              </p>
            </div>

            {/* Editable assumptions fold */}
            <details className="pt-4 border-t border-slate-100 group">
              <summary className="text-sm font-semibold text-slate-900 cursor-pointer select-none group-open:mb-4 flex items-center justify-between">
                Change our assumptions
                <svg className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
              </summary>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label htmlFor="a-days" className="block text-slate-600 font-medium mb-1">Days open a month</label>
                  <input type="number" id="a-days" value={days} min="1" max="31" step="1" onChange={(e) => setDays(Number(e.target.value))} className="w-full p-2 border border-slate-200 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="a-mins" className="block text-slate-600 font-medium mb-1">Minutes saved per order</label>
                  <input type="number" id="a-mins" value={mins} min="0" max="60" step="1" onChange={(e) => setMins(Number(e.target.value))} className="w-full p-2 border border-slate-200 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="a-wage" className="block text-slate-600 font-medium mb-1">Waiter hourly wage (£)</label>
                  <input type="number" id="a-wage" value={wage} min="0" max="60" step="0.5" onChange={(e) => setWage(Number(e.target.value))} className="w-full p-2 border border-slate-200 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="a-recov" className="block text-slate-600 font-medium mb-1">Wrong-order loss removed (%)</label>
                  <input type="number" id="a-recov" value={recov} min="0" max="100" step="5" onChange={(e) => setRecov(Number(e.target.value))} className="w-full p-2 border border-slate-200 rounded-lg" />
                </div>
              </div>
            </details>
          </div>

          {/* RIGHT CARD — THE ANSWER (WHITE CARD) */}
          <div className="bg-white text-slate-900 p-7 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* Orange top accent border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-orange-600" />

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-3">Estimated value, every month</p>
              <p className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none">{money(displayTotal)}</p>
              <p className="text-sm text-slate-600 mt-3">
                That is about <strong className="text-slate-900 font-bold">{money(displayYear)}</strong> a year.
              </p>
            </div>

            {/* Two equal stat sub-cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#f95722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">{money(displayMoney)}</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">Extra money coming in</p>
              </div>
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#f95722" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="#f95722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">{hoursFmt(displayHours)}</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  Waiter time given back, worth <span className="text-orange-600 font-semibold">{money(displayTimeVal)}</span>
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              These are estimates, not a promise. They come from the assumptions on the left, which you can change. Your real numbers will differ.
            </p>
          </div>
        </div>

        {/* WHERE THE MONEY COMES FROM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Card 1: Waiter time given back */}
          <article className="bg-white p-6 sm:p-7 rounded-[28px] border border-slate-200/80 shadow-sm text-center flex flex-col items-center justify-between h-full group hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-50/80 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 p-3.5 group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icons_2/user profile 2.png"
                  alt="Waiter time given back icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900 mb-2 leading-snug">
                Waiter time<br />given back
              </h3>
              <p className="text-2xl font-black text-[#f95722] mb-3">{money(displayBdTime)}</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[220px] mx-auto">
                Ten minutes of staff time per order, no longer spent writing orders down and walking to the kitchen.
              </p>
            </div>
          </article>

          {/* Card 2: Fewer wrong orders */}
          <article className="bg-white p-6 sm:p-7 rounded-[28px] border border-slate-200/80 shadow-sm text-center flex flex-col items-center justify-between h-full group hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-50/80 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 p-3.5 group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icons_2/checkbox.png"
                  alt="Fewer wrong orders icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900 mb-2 leading-snug">
                Fewer wrong<br />orders
              </h3>
              <p className="text-2xl font-black text-[#16a34a] mb-3">{money(displayBdRefund)}</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[220px] mx-auto">
                Digital tickets cannot be misread. We remove most of the money you currently write off for mistakes.
              </p>
            </div>
          </article>

          {/* Card 3: Bigger orders */}
          <article className="bg-white p-6 sm:p-7 rounded-[28px] border border-slate-200/80 shadow-sm text-center flex flex-col items-center justify-between h-full group hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-50/80 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 p-3.5 group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icons_2/growth chart 2.png"
                  alt="Bigger orders icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900 mb-2 leading-snug">
                Bigger orders
              </h3>
              <p className="text-2xl font-black text-[#2563eb] mb-3">{money(displayBdAi)}</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[220px] mx-auto">
                Guests who can ask the menu their own questions order more sides, more drinks and more dessert.
              </p>
            </div>
          </article>

          {/* Card 4: Guests who come back */}
          <article className="bg-white p-6 sm:p-7 rounded-[28px] border border-slate-200/80 shadow-sm text-center flex flex-col items-center justify-between h-full group hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-50/80 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-5 p-3.5 group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icons_2/gift.png"
                  alt="Guests who come back icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif-heading text-slate-900 mb-2 leading-snug">
                Guests who<br />come back
              </h3>
              <p className="text-2xl font-black text-[#f95722] mb-3">{money(displayBdLoyal)}</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[220px] mx-auto">
                Loyalty points turn a slice of your new guests into regulars, and a regular comes back again.
              </p>
            </div>
          </article>
        </div>

        {/* GREEN NOTE */}
        <div className="bg-emerald-50/80 border-l-4 border-emerald-600 p-5 sm:p-6 rounded-r-2xl text-slate-900 text-sm sm:text-base max-w-4xl mx-auto mt-8 shadow-2xs">
          <strong className="text-emerald-950 font-bold">🤩 And one thing we will not put a number on.</strong> Your team stops writing orders down and chasing the kitchen. They spend that time with your guests instead. Better service, better reviews, better regulars — that is real, but we are not going to invent a figure for it.
        </div>

        {/* HOW WE WORKED THIS OUT - COLLAPSIBLE ACCORDION */}
        <details className="bg-white rounded-3xl border border-slate-200/80 shadow-sm max-w-4xl mx-auto mt-5 group overflow-hidden transition-all">
          <summary className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none list-none hover:bg-slate-50/50 transition-colors">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100/80 border border-slate-200/60 flex items-center justify-center text-slate-700 flex-none shadow-2xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <line x1="10" y1="9" x2="8" y2="9"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">How we worked this out</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Open the detail behind these numbers.</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-open:rotate-180 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </summary>

          <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700 space-y-4">
            <div className="divide-y divide-slate-100">
              {/* Header section */}
              <div className="py-2.5 bg-slate-50/80 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 mt-2">
                Starting from your numbers
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">Orders a month</span>
                <span className="font-bold text-slate-900">{count(model.mOrders)}</span>
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">Revenue a month</span>
                <span className="font-bold text-slate-900">{money(model.mRev)}</span>
              </div>

              {/* Step 1 */}
              <div className="py-2.5 bg-slate-50/80 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 mt-4">
                1 · Waiter time given back
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">{count(model.mOrders)} orders × {mins} minutes</span>
                <span className="font-bold text-slate-900">{hoursFmt(model.hrs)}</span>
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">{hoursFmt(model.hrs)} × {money(wage)} an hour</span>
                <span className="font-bold text-[#f95722]">{money(model.timeVal)}</span>
              </div>

              {/* Step 2 */}
              <div className="py-2.5 bg-slate-50/80 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 mt-4">
                2 · Fewer wrong orders
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">Written off today — {pct(loss)} of {money(model.mRev)}</span>
                <span className="font-bold text-slate-900">{money(model.writeOff)}</span>
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">We remove {pct(recov)} of that</span>
                <span className="font-bold text-[#16a34a]">{money(model.recovered)}</span>
              </div>

              {/* Step 3 */}
              <div className="py-2.5 bg-slate-50/80 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 mt-4">
                3 · Bigger orders
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">{pct(ai)} more on {money(model.mRev)}</span>
                <span className="font-bold text-[#2563eb]">{money(model.uplift)}</span>
              </div>

              {/* Step 4 */}
              <div className="py-2.5 bg-slate-50/80 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-500 mb-2 mt-4">
                4 · Guests who come back
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">New guests a month — {pct(newg)} of {count(model.mOrders)} orders</span>
                <span className="font-bold text-slate-900">{count(model.newG)}</span>
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">Who become regulars — {pct(rep)} of those</span>
                <span className="font-bold text-slate-900">{count(model.newReg)}</span>
              </div>
              <div className="py-2.5 px-4 flex items-center justify-between">
                <span className="text-slate-600">One more visit each, at {money(value)}</span>
                <span className="font-bold text-[#f95722]">{money(model.loyalty)}</span>
              </div>

              {/* Total row */}
              <div className="py-3.5 px-4 bg-orange-50/60 border border-orange-100 rounded-xl flex items-center justify-between mt-4">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Total value a month</span>
                <span className="font-black text-[#f95722] text-lg sm:text-xl">{money(model.total)}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 pt-2 leading-relaxed">
              Waiter time is counted at what that time costs you. It is time handed back to your floor, not staff you have to let go. Everything else is money.
            </p>
          </div>
        </details>

        <p className="text-center text-sm sm:text-base text-slate-400 italic mt-10 pt-6 border-t border-slate-200/60 max-w-md mx-auto">
          Here are the questions we are asked most.
        </p>
      </div>
    </section>
  );
}
