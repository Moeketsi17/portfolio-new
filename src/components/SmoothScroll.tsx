"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SmoothScroll() {
  useGSAP(() => {
    if (typeof window === "undefined") {
      return;
    }

    ScrollTrigger.normalizeScroll(false);

    const refresh = () => ScrollTrigger.refresh();
    const refreshFrame = window.requestAnimationFrame(refresh);
    const refreshTimeout = window.setTimeout(refresh, 300);

    window.addEventListener("load", refresh, { once: true });
    window.addEventListener("resize", refresh);
    document.fonts?.ready.then(refresh).catch(() => undefined);

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      window.clearTimeout(refreshTimeout);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return null;
}
