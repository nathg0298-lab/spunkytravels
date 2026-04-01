"use client";

import { useState } from "react";

export default function FloatingTelegram() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://t.me/spunkytravels"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Message us on Telegram"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 998,
        display: "flex",
        alignItems: "center",
        gap: hovered ? 10 : 0,
        background: "#29A9EB",
        color: "#fff",
        borderRadius: 60,
        padding: hovered ? "16px 28px 16px 20px" : "16px",
        boxShadow: hovered
          ? "0 8px 32px rgba(41,169,235,0.5)"
          : "0 6px 24px rgba(41,169,235,0.35)",
        textDecoration: "none",
        transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontFamily: "'Baloo 2', cursive",
        fontWeight: 700,
        fontSize: "0.92rem",
      }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="#fff"
        style={{ flexShrink: 0 }}
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
      <span
        style={{
          maxWidth: hovered ? 200 : 0,
          opacity: hovered ? 1 : 0,
          transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          overflow: "hidden",
        }}
      >
        Chat with Us
      </span>

      {/* Pulse ring animation */}
      <span
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          border: "2px solid rgba(41,169,235,0.4)",
          animation: "tg-pulse 2s ease-out infinite",
          pointerEvents: "none",
          display: hovered ? "none" : "block",
        }}
      />

      <style jsx>{`
        @keyframes tg-pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </a>
  );
}
