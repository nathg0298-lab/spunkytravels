"use client";

import { STEPS, COLOR_MAP } from "@/lib/constants";
import { ICON_MAP, EditIcon } from "./Icons";

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        background: "var(--navy)",
        padding: "90px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Deco circles */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          border: "2px dashed rgba(255,255,255,0.04)",
          top: -200,
          right: -200,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          border: "2px dashed rgba(255,255,255,0.04)",
          bottom: -150,
          left: -100,
        }}
      />

      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal">
          <div
            className="font-display"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(245,183,49,0.15)",
              color: "var(--gold)",
              fontWeight: 700,
              fontSize: "0.85rem",
              padding: "8px 20px",
              borderRadius: 50,
              marginBottom: 16,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            <EditIcon size={16} stroke="var(--gold)" />
            How It Works
          </div>
          <h2
            className="font-display"
            style={{ fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "#fff", marginBottom: 12, lineHeight: 1.15 }}
          >
            Three Steps. Zero Hassle.
            <br />
            Maximum Savings.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.05rem", maxWidth: 520, marginBottom: 50, lineHeight: 1.6, fontWeight: 600 }}>
            No coupon codes, no hunting, no nonsense. Just instant discounts, every single time.
          </p>
        </div>

        <div className="steps-grid-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {STEPS.map((step) => {
            const colors = COLOR_MAP[step.color];
            const IconComp = ICON_MAP[step.icon];
            return (
              <div
                key={step.num}
                className="reveal"
                style={{
                  background: "var(--navy-mid)",
                  borderRadius: "var(--r)",
                  padding: "36px 28px",
                  position: "relative",
                  border: "1.5px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontWeight: 800,
                    fontSize: "3.5rem",
                    position: "absolute",
                    top: 16,
                    right: 22,
                    background: "linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {step.num}
                </span>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    background: `rgba(${step.color === "sky" ? "58,173,224" : step.color === "pink" ? "232,57,124" : "245,183,49"}, 0.15)`,
                  }}
                >
                  {IconComp && <IconComp size={24} stroke={colors.stroke} />}
                </div>
                <h3
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: "1.2rem", color: "#fff", marginBottom: 10 }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.92rem", lineHeight: 1.6, fontWeight: 600 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .steps-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          section {
            padding: 50px 22px !important;
          }
        }
      `}</style>
    </section>
  );
}
