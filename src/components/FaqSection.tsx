"use client";

import React, { useState, useRef, useEffect } from "react";

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

/** Animated accordion panel — height transitions from 0 to scrollHeight */
function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: (i: number) => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(0);

  useEffect(() => {
    if (!panelRef.current) return;
    if (isOpen) {
      // Measure natural height then lock to it so the transition works
      const scrollH = panelRef.current.scrollHeight;
      setHeight(scrollH);
    } else {
      // Collapse: first set explicit px height (from current), then to 0
      const scrollH = panelRef.current.scrollHeight;
      // Force a paint at current height before snapping to 0
      setHeight(scrollH);
      // Let the browser flush the above, then animate to 0
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight(0));
      });
    }
  }, [isOpen]);

  const buttonId = `faq-btn-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 ${
        isOpen
          ? "bg-white border-orange-200/70 shadow-md"
          : "bg-slate-50 border-slate-200/80 hover:bg-white hover:shadow-sm"
      }`}
    >
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 sm:py-5 text-left cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-2xl"
      >
        <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug pr-2">
          {faq.q}
        </span>
        {/* Orange +/× icon — rotates 45° when open */}
        <span
          aria-hidden="true"
          className={`text-orange-600 font-extrabold text-xl flex-none transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      {/* Animated answer panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        ref={panelRef}
        style={{
          height: height === "auto" ? "auto" : `${height}px`,
          overflow: "hidden",
          transition: "height 280ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed px-5 pb-5 pt-1 border-t border-slate-200/60">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export function FaqSection() {
  // First FAQ open by default; null = all closed
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100" id="questions">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold font-serif-heading text-slate-900 leading-[1.12] break-words">
            Questions people ask.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </div>

        <p className="text-center text-sm sm:text-base text-slate-400 italic mt-10 pt-6 border-t border-slate-100 max-w-md mx-auto">
          The fastest way to understand it is to open it.
        </p>
      </div>
    </section>
  );
}
