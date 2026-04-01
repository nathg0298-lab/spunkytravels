"use client";

import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, var(--lime) 0%, #50B020 100%)",
        padding: "50px 60px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        className="stats-container"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          textAlign: "center",
        }}
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="reveal">
            <h3
              className="font-display"
              style={{ fontWeight: 800, fontSize: "2.8rem", color: "#fff", lineHeight: 1 }}
            >
              {stat.value}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.92rem", marginTop: 6, fontWeight: 700 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          div:first-child {
            padding: 36px 22px !important;
          }
        }
      `}</style>
    </div>
  );
}
