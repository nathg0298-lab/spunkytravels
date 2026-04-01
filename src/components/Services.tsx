"use client";

import { SERVICES, COLOR_MAP } from "@/lib/constants";
import { ICON_MAP, StarIcon } from "./Icons";

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: "90px 60px", maxWidth: 1340, margin: "0 auto", position: "relative" }}
    >
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
          Discounts Across Every
          <br />
          Category You Love
        </h2>
        <p style={{ color: "#666", fontSize: "1.05rem", maxWidth: 520, marginBottom: 50, lineHeight: 1.6, fontWeight: 600 }}>
          Stop paying full price on the things you already buy. SpunkyTravels partners with 500+ brands so you save every single time.
        </p>
      </div>

      <div
        className="srv-grid-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
      >
        {SERVICES.map((svc) => {
          const colors = COLOR_MAP[svc.color];
          const IconComp = ICON_MAP[svc.icon];

          return (
            <div
              key={svc.id}
              className={`srv-card reveal${svc.big ? " big" : ""}`}
              style={{
                background: svc.big
                  ? "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)"
                  : "#fff",
                borderRadius: "var(--r)",
                padding: "30px 24px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                border: svc.big ? "none" : "2px solid transparent",
                transition: "all 0.4s cubic-bezier(.25,.46,.45,.94)",
                gridColumn: svc.big ? "span 2" : undefined,
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                  background: svc.big
                    ? `rgba(${svc.color === "sky" ? "58,173,224" : "110,197,49"}, 0.12)`
                    : colors.bg,
                }}
              >
                {IconComp && (
                  <IconComp
                    size={svc.big ? 28 : 26}
                    stroke={svc.big ? (svc.color === "sky" ? "var(--sky)" : "var(--lime)") : colors.stroke}
                  />
                )}
              </div>
              <h3
                className="font-display"
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: svc.big ? "#fff" : "var(--navy)",
                  marginBottom: 6,
                }}
              >
                {svc.name}
              </h3>
              <p style={{ fontSize: "0.88rem", color: svc.big ? "rgba(255,255,255,0.55)" : "#777", lineHeight: 1.5, fontWeight: 600 }}>
                {svc.desc}
              </p>
              <span
                className="font-display"
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  padding: "5px 14px",
                  borderRadius: 50,
                  background: svc.big ? "rgba(255,255,255,0.1)" : colors.tagBg,
                  color: svc.big ? "var(--gold)" : colors.tagText,
                }}
              >
                {svc.discount}
              </span>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .srv-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          section {
            padding: 50px 22px !important;
          }
          .srv-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
