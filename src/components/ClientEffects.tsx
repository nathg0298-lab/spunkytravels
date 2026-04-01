"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("show"), i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Parallax blobs on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.querySelectorAll<HTMLElement>(".blob").forEach((b, i) => {
        const f = (i + 1) * 0.4;
        b.style.transform = `translate(${x * f}px, ${y * f}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
