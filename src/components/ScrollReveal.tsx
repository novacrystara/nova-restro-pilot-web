"use client";
import { useEffect } from "react";

/**
 * ScrollReveal — Production-grade scroll animation controller.
 *
 * Handles:
 *  - .rise, .rise-left, .rise-right, .scale-in, .fade  → fade-up reveal
 *  - .parallax → subtle parallax via CSS custom property --parallax-y
 *
 * All driven by IntersectionObserver + requestAnimationFrame.
 * Fully respects prefers-reduced-motion.
 * Zero external dependencies.
 */
export function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ── Reveal animations ────────────────────────────────────────────────── */
    const revealSelectors =
      ".rise, .rise-left, .rise-right, .scale-in, .fade";
    const items = document.querySelectorAll<HTMLElement>(revealSelectors);

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        // Trigger slightly before element enters — more premium feel
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.05,
      }
    );

    items.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("in");
      } else {
        revealObserver.observe(el);
      }
    });

    /* ── Parallax ─────────────────────────────────────────────────────────── */
    if (reducedMotion) return;

    const parallaxItems =
      document.querySelectorAll<HTMLElement>(".parallax");

    let rafId: number | null = null;

    function updateParallax() {
      const scrollY = window.scrollY;

      parallaxItems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;

        // How far from viewport center (−1 to +1 normalised)
        const distFromCenter =
          (centerY - viewportCenter) / window.innerHeight;

        // Strength: adjust 0.06 up/down for more/less parallax
        const parallaxY = distFromCenter * window.innerHeight * 0.06;

        el.style.setProperty("--parallax-y", `${parallaxY.toFixed(2)}px`);
      });

      rafId = requestAnimationFrame(updateParallax);
    }

    if (parallaxItems.length > 0) {
      rafId = requestAnimationFrame(updateParallax);
    }

    return () => {
      revealObserver.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
