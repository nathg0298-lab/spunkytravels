"use client";

export default function TelegramCTA({
  size = "large",
  label = "Join now on Telegram →",
}: {
  size?: "large" | "medium" | "nav";
  label?: string;
}) {
  const paddings = {
    large: "20px 52px",
    medium: "18px 42px",
    nav: "12px 26px",
  };

  const fontSizes = {
    large: "1.15rem",
    medium: "1.1rem",
    nav: "0.95rem",
  };

  const iconSizes = {
    large: 24,
    medium: 22,
    nav: 18,
  };

  return (
    <a
      href="https://t.me/spunkytravel"
      target="_blank"
      rel="noopener noreferrer"
      className="tg-cta font-display"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: paddings[size],
        borderRadius: 60,
        fontWeight: 800,
        fontSize: fontSizes[size],
        color: "#fff",
        textDecoration: "none",
        cursor: "pointer",
        zIndex: 1,
        background: "linear-gradient(135deg, #29A9EB 0%, #1E95D4 50%, #29A9EB 100%)",
        backgroundSize: "200% 200%",
        border: "none",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Glow pulse behind button */}
      <span className="tg-glow" />

      {/* Shimmer sweep */}
      <span className="tg-shimmer" />

      {/* Telegram icon with bounce */}
      <span className="tg-icon">
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </span>

      {/* Label */}
      <span className="tg-label">{label}</span>

      {/* Orbiting sparkles */}
      <span className="sparkle s1">✦</span>
      <span className="sparkle s2">✦</span>
      <span className="sparkle s3">✦</span>
      <span className="sparkle s4">⚡</span>

      <style jsx>{`
        .tg-cta {
          animation: tg-bg-shift 4s ease-in-out infinite, tg-nudge 3s ease-in-out infinite;
          box-shadow:
            0 6px 25px rgba(41, 169, 235, 0.35),
            0 0 0 0 rgba(41, 169, 235, 0);
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tg-cta:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow:
            0 14px 40px rgba(41, 169, 235, 0.45),
            0 0 30px rgba(41, 169, 235, 0.2);
          animation: tg-bg-shift 2s ease-in-out infinite;
        }

        .tg-cta:active {
          transform: translateY(-1px) scale(0.98);
        }

        /* Background gradient shift */
        @keyframes tg-bg-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Gentle bounce nudge */
        @keyframes tg-nudge {
          0%, 100% { transform: translateY(0); }
          15% { transform: translateY(-5px); }
          30% { transform: translateY(0); }
          45% { transform: translateY(-3px); }
          60% { transform: translateY(0); }
        }

        /* Glow pulse ring */
        .tg-glow {
          position: absolute;
          inset: -3px;
          border-radius: 60px;
          background: linear-gradient(135deg, rgba(41,169,235,0.6), rgba(110,197,49,0.4), rgba(245,183,49,0.5), rgba(232,57,124,0.4));
          background-size: 300% 300%;
          z-index: -2;
          animation: tg-glow-spin 4s linear infinite;
          filter: blur(8px);
          opacity: 0.6;
        }

        .tg-cta:hover .tg-glow {
          opacity: 1;
          filter: blur(12px);
          inset: -5px;
        }

        @keyframes tg-glow-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Shimmer sweep */
        .tg-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(255, 255, 255, 0.25) 50%,
            transparent 70%
          );
          z-index: 2;
          animation: tg-shimmer-sweep 3.5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes tg-shimmer-sweep {
          0%, 65% { left: -100%; }
          85% { left: 150%; }
          100% { left: 150%; }
        }

        /* Telegram icon bounce */
        .tg-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 3;
          animation: tg-icon-bounce 2.5s ease-in-out infinite;
        }

        .tg-cta:hover .tg-icon {
          animation: tg-icon-wiggle 0.5s ease-in-out;
        }

        @keyframes tg-icon-bounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-2px) rotate(-5deg); }
          75% { transform: translateY(1px) rotate(3deg); }
        }

        @keyframes tg-icon-wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-12deg) scale(1.15); }
          50% { transform: rotate(8deg) scale(1.1); }
          75% { transform: rotate(-4deg); }
          100% { transform: rotate(0deg); }
        }

        /* Label */
        .tg-label {
          position: relative;
          z-index: 3;
        }

        /* Orbiting sparkles */
        .sparkle {
          position: absolute;
          font-size: 0.7rem;
          pointer-events: none;
          z-index: 4;
          opacity: 0;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .s1 {
          color: var(--gold);
          top: -8px;
          right: 15%;
          animation: sparkle-pop 4s 0s infinite;
        }
        .s2 {
          color: var(--lime);
          bottom: -6px;
          left: 20%;
          animation: sparkle-pop 4s 1s infinite;
        }
        .s3 {
          color: var(--pink);
          top: -10px;
          left: 35%;
          animation: sparkle-pop 4s 2s infinite;
        }
        .s4 {
          color: var(--gold);
          bottom: -8px;
          right: 25%;
          font-size: 0.65rem;
          animation: sparkle-pop 4s 3s infinite;
        }

        @keyframes sparkle-pop {
          0%, 80%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0.5);
          }
          5% {
            opacity: 1;
            transform: translateY(-14px) scale(1.2);
          }
          12% {
            opacity: 0.8;
            transform: translateY(-18px) scale(0.9);
          }
          20% {
            opacity: 0;
            transform: translateY(-24px) scale(0.4);
          }
        }

        .tg-cta:hover .sparkle {
          animation-duration: 2s;
        }
      `}</style>
    </a>
  );
}