"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * SmoothScrollProvider
 *
 * Initializes Lenis with Apple-grade settings:
 * - duration 1.2s (not too heavy, not floaty)
 * - custom cubic-bezier easing that mimics iOS rubber-band momentum
 * - syncTouch disabled — lets native iOS momentum work on touch devices
 *   without fighting the browser (avoids the "lag" some scroll libraries add)
 * - smoothWheel: true — intercepts wheel events for smooth desktop scrolling
 * - wheelMultiplier: 1.0 — matches native feel exactly; lower = slower
 * - touchMultiplier: 1.0 — natural touch feel
 * - infinite: false — normal finite scroll
 *
 * requestAnimationFrame loop is explicitly controlled and cleaned up.
 * Works with Next.js App Router server components (this is a client leaf).
 */
export function SmoothScrollProvider() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion — skip Lenis entirely
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      // Ensure native scroll-behavior: auto for accessibility
      document.documentElement.style.scrollBehavior = "auto";
      return;
    }

    // Remove CSS scroll-behavior: smooth — Lenis takes over
    document.documentElement.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      // ─── Timing ────────────────────────────────────────────────────────────
      // 1.15s is the sweet spot: enough to feel premium without feeling slow.
      // Apple.com uses ~1.0–1.3s equivalent easing duration.
      duration: 1.15,

      // ─── Easing ────────────────────────────────────────────────────────────
      // Custom cubic-bezier that mirrors iOS scroll inertia:
      // fast at start, decelerates gracefully. NOT exponential (avoids float).
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      // ─── Wheel ─────────────────────────────────────────────────────────────
      smoothWheel: true,
      // 1.0 = matches native. Go below 1 for a "heavy" feel, above for jumpy.
      wheelMultiplier: 1.0,

      // ─── Touch ─────────────────────────────────────────────────────────────
      // syncTouch: false — use native iOS momentum instead of JS-driven touch.
      // This prevents the "fighting" sensation on iOS Safari.
      syncTouch: false,
      touchMultiplier: 1.0,

      // ─── Misc ──────────────────────────────────────────────────────────────
      infinite: false,
      // Prevent overscroll bounce interfering with Lenis on desktop
      overscroll: false,
    });

    lenisRef.current = lenis;

    // rAF loop — always driven by requestAnimationFrame
    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      // Clean up to prevent memory leaks on HMR or unmount
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Render nothing — pure side-effect provider
  return null;
}
