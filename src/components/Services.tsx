"use client";

import { useId } from "react";
import { SERVICES, COLOR_MAP } from "@/lib/constants";
import { ICON_MAP, StarIcon } from "./Icons";

export default function Services() {
  const id = useId().replace(/:/g, "");

  return (
    <section
      id="services"
      style={{ padding: "90px 60px", maxWidth: 1340, margin: "0 auto", position: "relative" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* Card base */
        .sc-${id} {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border-radius: 20px;
          padding: 30px 24px;
          transition: all 0.4s cubic-bezier(.25,.46,.45,.94);
          text-decoration: none;
          display: block;
        }

        /* Stamp circle */
        .sc-${id}::before {
          content: "";
          position: absolute;
          top: 12px;
          right: 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 3px dashed rgba(110, 197, 49, 0.15);
          transition: all 0.4s;
        }

        /* Bottom accent bar */
        .sc-${id}::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #29A9EB, #6ec531);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(.25,.46,.45,.94);
        }

        .sc-${id}:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(30, 30, 63, 0.12);
        }
        .sc-${id}:hover::before {
          border-color: #6ec531;
          transform: rotate(90deg);
        }
        .sc-${id}:hover::after {
          transform: scaleX(1);
        }

        /* Light card borders */
        .sc-light-${id} {
          background: #fff;
          border: 2px solid transparent;
        }
        .sc-light-${id}:hover {
          border-color: rgba(110, 197, 49, 0.3);
        }

        /* Dark featured cards */
        .sc-dark-${id} {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);
          border: 2px solid transparent;
          grid-column: span 2;
        }
        .sc-dark-${id}::before {
          border-color: rgba(245, 183, 49, 0.2);
        }
        .sc-dark-${id}::after {
          background: linear-gradient(90deg, #f5b731, #e8397c);
        }
        .sc-dark-${id}:hover {
          border-color: rgba(245, 183, 49, 0.3);
          box-shadow: 0 20px 50px rgba(30, 30, 63, 0.25);
        }
        .sc-dark-${id}:hover::before {
          border-color: #f5b731;
        }

        /* Icon container pulse */
        .sc-icon-${id} {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: all 0.4s;
          position: relative;
        }
        .sc-${id}:hover .sc-icon-${id} {
          transform: scale(1.1) rotate(-5deg);
        }

        /* Icon inner bounce */
        .sc-iconi-${id} {
          transition: transform 0.4s;
        }
        .sc-${id}:hover .sc-iconi-${id} {
          animation: sc-icon-wiggle-${id} 0.6s ease-in-out;
        }
        @keyframes sc-icon-wiggle-${id} {
          0% { transform: rotate(0deg) scale(1); }
          20% { transform: rotate(-10deg) scale(1.15); }
          40% { transform: rotate(8deg) scale(1.1); }
          60% { transform: rotate(-4deg) scale(1.05); }
          80% { transform: rotate(2deg) scale(1); }
          100% { transform: rotate(0deg) scale(1); }
        }

        /* Discount tag */
        .sc-tag-${id} {
          display: inline-block;
          margin-top: 14px;
          font-weight: 700;
          font-size: 0.82rem;
          padding: 5px 14px;
          border-radius: 50px;
          transition: all 0.3s;
        }
        .sc-${id}:hover .sc-tag-${id} {
          transform: scale(1.08);
        }

        /* Shimmer on hover */
        .sc-shimmer-${id} {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          z-index: 1;
          pointer-events: none;
          transition: none;
        }
        .sc-${id}:hover .sc-shimmer-${id} {
          animation: sc-shimmer-${id} 0.8s ease-out forwards;
        }
        @keyframes sc-shimmer-${id} {
          0% { left: -100%; }
          100% { left: 150%; }
        }

        /* Telegram arrow indicator */
        .sc-arrow-${id} {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(41, 169, 235, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.35s;
          z-index: 2;
        }
        .sc-${id}:hover .sc-arrow-${id} {
          opacity: 1;
          transform: translateX(0);
        }
        .sc-dark-${id} .sc-arrow-${id} {
          background: rgba(245, 183, 49, 0.15);
        }

        /* Sparkle on card */
        .sc-sparkle-${id} {
          position: absolute;
          top: 50%;
          left: 50%;
          font-size: 0.6rem;
          pointer-events: none;
          opacity: 0;
          z-index: 2;
        }
        .sc-${id}:hover .sc-sparkle-${id} {
          animation: sc-sparkle-burst-${id} 0.7s ease-out forwards;
        }
        .sc-sp1-${id} { color: #f5b731; }
        .sc-sp2-${id} { color: #6ec531; }
        .sc-sp3-${id} { color: #e8397c; }

        @keyframes sc-sparkle-burst-${id} {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
          30% { opacity: 1; transform: translate(calc(-50% + var(--sx, 20px)), calc(-50% + var(--sy, -20px))) scale(1.2); }
          100% { opacity: 0; transform: translate(calc(-50% + var(--sx, 20px) * 2), calc(-50% + var(--sy, -20px) * 2)) scale(0.5); }
        }

        /* Grid responsive */
        .srv-grid-${id} {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .srv-grid-${id} { grid-template-columns: repeat(2, 1fr) !important; }
          .sc-dark-${id} { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          #services { padding: 50px 22px !important; }
          .srv-grid-${id} { grid-template-columns: 1fr !important; }
          .sc-dark-${id} { grid-column: span 1; }
        }
      `}} />

      <div className="reveal">
        <div
          className="font-display"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--pink-light)",
            color: "var(--pink)",
            fontWeight: 700,
            fontSize: "0.85rem",
            padding: "8px 20px",
            borderRadius: 50,
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          <StarIcon size={16} fill="var(--pink)" />
          What We Offer
        </div>
        <h2
          className="font-display"
          style={{ fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--navy)", marginBottom: 12, lineHeight: 1.15 }}
        >
          Save Up to 50%
          <br />
          Across Top Categories
        </h2>
        <p style={{ color: "#666", fontSize: "1.05rem", maxWidth: 520, marginBottom: 50, lineHeight: 1.6, fontWeight: 600 }}>
          Stop paying full price on the things you already buy. Spunky Travels shares handpicked Telegram deals across flights, hotels, food, movies, bill payments, and more — helping you save more on things you already use.
        </p>
      </div>

      <div className={`srv-grid-${id}`}>
        {SERVICES.map((svc) => {
          const colors = COLOR_MAP[svc.color];
          const IconComp = ICON_MAP[svc.icon];
          const isDark = !!svc.big;

          return (
            <a
              key={svc.id}
              href="https://t.me/spunkytravel"
              target="_blank"
              rel="noopener noreferrer"
              className={`sc-${id} ${isDark ? `sc-dark-${id}` : `sc-light-${id}`} reveal`}
            >
              {/* Hover shimmer */}
              <span className={`sc-shimmer-${id}`} />

              {/* Sparkle burst on hover */}
              <span className={`sc-sparkle-${id} sc-sp1-${id}`} style={{ "--sx": "25px", "--sy": "-22px" } as React.CSSProperties}>✦</span>
              <span className={`sc-sparkle-${id} sc-sp2-${id}`} style={{ "--sx": "-20px", "--sy": "-18px" } as React.CSSProperties}>✦</span>
              <span className={`sc-sparkle-${id} sc-sp3-${id}`} style={{ "--sx": "15px", "--sy": "20px" } as React.CSSProperties}>✦</span>

              {/* Icon */}
              <div
                className={`sc-icon-${id}`}
                style={{
                  background: isDark
                    ? `rgba(${svc.color === "sky" ? "58,173,224" : "110,197,49"}, 0.12)`
                    : colors.bg,
                }}
              >
                <span className={`sc-iconi-${id}`}>
                  {IconComp && (
                    <IconComp
                      size={isDark ? 28 : 26}
                      stroke={isDark ? (svc.color === "sky" ? "var(--sky)" : "var(--lime)") : colors.stroke}
                    />
                  )}
                </span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: isDark ? "#fff" : "var(--navy)",
                  marginBottom: 6,
                }}
              >
                {svc.name}
              </h3>
              <p style={{ fontSize: "0.88rem", color: isDark ? "rgba(255,255,255,0.55)" : "#777", lineHeight: 1.5, fontWeight: 600 }}>
                {svc.desc}
              </p>
              <span
                className={`font-display sc-tag-${id}`}
                style={{
                  background: isDark ? "rgba(255,255,255,0.1)" : colors.tagBg,
                  color: isDark ? "var(--gold)" : colors.tagText,
                }}
              >
                {svc.discount}
              </span>

              {/* Telegram arrow */}
              <span className={`sc-arrow-${id}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#f5b731" : "#29A9EB"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}