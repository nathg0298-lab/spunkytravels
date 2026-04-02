"use client";

import Image from "next/image";
import Link from "next/link";
import TelegramCTA from "./TelegramCTA";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "12px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(255,253,247,0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "2px solid rgba(110,197,49,0.15)",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
        }}
      >
        <Image
          src="/spunky-mascot.jpg"
          alt="Spunky"
          width={46}
          height={46}
          style={{ borderRadius: 12 }}
          priority
        />
        <div className="font-display" style={{ lineHeight: 1.1 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: "1.45rem",
              color: "var(--navy)",
            }}
          >
            Spunky Travel
          </span>
          <span
            style={{
              display: "block",
              color: "var(--pink)",
              fontSize: "0.7em",
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Market
          </span>
        </div>
      </Link>

      <ul
        className="nav-links-desktop"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          listStyle: "none",
        }}
      >
        {[
          { label: "Services", id: "services" },
          { label: "How It Works", id: "how" },
          { label: "Reviews", id: "reviews" },
          // { label: "Contact", id: "contact" },t.me
        ].map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollTo(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--navy)",
                fontWeight: 700,
                fontSize: "0.92rem",
                fontFamily: "inherit",
                padding: "4px 0",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--lime)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--navy)")}
            >
              {item.label}
            </button>
          </li>
        ))}
        <li>
          {/* <a
            href="https://t.me/spunkytravel"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display"
            style={{
              background: "#29A9EB",
              color: "#fff",
              border: "none",
              padding: "12px 26px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(41,169,235,0.3)",
              transition: "all 0.3s",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(41,169,235,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(41,169,235,0.3)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            Join now!
          </a> */}
          <TelegramCTA size="nav" label="Join now on Telegram →" />
        </li>
      </ul>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
