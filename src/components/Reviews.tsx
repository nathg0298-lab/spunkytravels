"use client";

import { REVIEWS } from "@/lib/constants";
import { ChatIcon } from "./Icons";

export default function Reviews() {
  const colorMap: Record<string, string> = {
    pink: "var(--pink)",
    sky: "var(--sky)",
    gold: "var(--gold)",
  };

  return (
    <section id="reviews" style={{ padding: "90px 60px", maxWidth: 1340, margin: "0" }}>
      <div className="reveal">
        <div
          className="font-display"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--lime-light)",
            color: "var(--lime)",
            fontWeight: 700,
            fontSize: "0.85rem",
            padding: "8px 20px",
            borderRadius: 50,
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          <ChatIcon size={16} stroke="var(--lime)" />
          Testimonials
        </div>
        <h2
          className="font-display"
          style={{ fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--navy)", marginBottom: 12, lineHeight: 1.15 }}
        >
          Real People. Real Savings.
          <br />
          Really Happy.
        </h2>
        <p style={{ color: "#666", fontSize: "1.05rem", maxWidth: 520, marginBottom: 50, lineHeight: 1.6, fontWeight: 600 }}>
          Our community can&apos;t stop talking about how much they save.
        </p>
      </div>

      <div className="reviews-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
        {REVIEWS.map((rev, i) => (
          <div
            key={i}
            className="rev-card reveal"
            style={{
              background: "#fff",
              borderRadius: "var(--r)",
              padding: "32px 26px",
              border: "2px solid rgba(110,197,49,0.08)",
              transition: "all 0.35s",
              position: "relative",
            }}
          >
            <div style={{ color: "var(--gold)", fontSize: "1.1rem", marginBottom: 14, letterSpacing: 1 }}>
              ★★★★★
            </div>
            <blockquote
              style={{
                fontSize: "0.95rem",
                color: "#444",
                lineHeight: 1.65,
                marginBottom: 18,
                fontWeight: 600,
                fontStyle: "normal",
              }}
            >
              &ldquo;{rev.quote}&rdquo;
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                className="font-display"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  color: "#fff",
                  background: colorMap[rev.color],
                }}
              >
                {rev.initials}
              </div>
              <div>
                <strong style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, color: "var(--navy)" }}>
                  {rev.name}
                </strong>
                <span style={{ fontSize: "0.78rem", color: "#999", fontWeight: 600 }}>{rev.since}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .reviews-container {
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
