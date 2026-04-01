"use client";

import Image from "next/image";
import { PlaneIcon, HotelIcon, FoodIcon, MovieIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "130px 60px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(170deg, var(--cream) 0%, var(--sky-light) 40%, var(--lime-light) 70%, var(--gold-light) 100%)",
      }}
    >
      {/* Blobs */}
      <div className="blob" style={{ width: 500, height: 500, background: "var(--lime)", top: -150, right: -100, animation: "drift 18s ease-in-out infinite" }} />
      <div className="blob" style={{ width: 350, height: 350, background: "var(--pink)", bottom: -100, left: -80, animation: "drift 14s ease-in-out infinite reverse" }} />
      <div className="blob" style={{ width: 280, height: 280, background: "var(--gold)", top: "30%", left: "50%", animation: "drift 20s ease-in-out infinite 3s" }} />

      <div className="hero-grid" style={{ position: "relative", zIndex: 1, maxWidth: 1300, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }}>

        {/* Text */}
        <div className="reveal hero-text-col">
          <h1 className="font-display" style={{ fontWeight: 800, fontSize: "clamp(2.6rem, 5vw, 4.4rem)", lineHeight: 1.1, color: "var(--navy)", marginBottom: 20 }}>
            Explore More.
            <br />
            Spend{" "}
            <span style={{ color: "var(--pink)", position: "relative", display: "inline-block" }}>
              Way Less
              <span style={{ content: "", position: "absolute", bottom: 2, left: -4, right: -4, height: 14, background: "var(--gold)", opacity: 0.35, borderRadius: 4, zIndex: -1, transform: "rotate(-1deg)", display: "block" }} />
            </span>
            .
            <br />
            Live <span style={{ color: "var(--lime)" }}>Spunky</span>.
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#555", lineHeight: 1.7, maxWidth: 500, marginBottom: 36, fontWeight: 600 }}>
            Massive discounts on flights, hotels, food, entertainment, home improvement, bill payments, and more — all from one playful marketplace.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="https://t.me/spunkytravels"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display"
              style={{
                background: "#29A9EB",
                color: "#fff",
                border: "none",
                padding: "18px 42px",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: "1.15rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 6px 25px rgba(41,169,235,0.35)",
                transition: "all 0.3s",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Message Us on Telegram
            </a>
            <a
              href="#services"
              className="font-display"
              style={{
                background: "transparent",
                color: "var(--navy)",
                border: "2.5px solid var(--navy)",
                padding: "16px 36px",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: "1.05rem",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Explore Deals
            </a>
          </div>
        </div>

        {/* Mascot */}
        <div className="reveal hero-mascot-col" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            src="/spunky-mascot.jpg"
            alt="Spunky Travel Market Mascot"
            width={420}
            height={420}
            priority
            style={{
              width: "min(420px, 90%)",
              height: "auto",
              borderRadius: 40,
              position: "relative",
              zIndex: 2,
              filter: "drop-shadow(0 20px 40px rgba(30,30,63,0.15))",
              animation: "mascot-bounce 4s ease-in-out infinite",
            }}
          />

          {/* Floating stickers */}
          <Sticker pos={{ top: "8%", left: "-10%" }} delay="0s" icon={<PlaneIcon size={22} stroke="var(--sky)" />} label="Flights" save="Save 45%" />
          <Sticker pos={{ top: "5%", right: "-5%" }} delay="1s" icon={<HotelIcon size={22} stroke="var(--pink)" />} label="Hotels" save="Save 40%" />
          <Sticker pos={{ bottom: "25%", left: "-15%" }} delay="0.5s" icon={<FoodIcon size={22} stroke="var(--gold)" />} label="Food" save="Save 25%" />
          <Sticker pos={{ bottom: "10%", right: "-8%" }} delay="2s" icon={<MovieIcon size={22} stroke="var(--lime)" />} label="Movies" save="Save 30%" />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-text-col {
            order: 2;
          }
          .hero-mascot-col {
            order: 1;
          }
        }
        @media (max-width: 640px) {
          section {
            padding: 100px 22px 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

function Sticker({
  pos,
  delay,
  icon,
  label,
  save,
}: {
  pos: React.CSSProperties;
  delay: string;
  icon: React.ReactNode;
  label: string;
  save: string;
}) {
  return (
    <div
      className="sticker-float"
      style={{
        position: "absolute",
        zIndex: 3,
        background: "#fff",
        borderRadius: 16,
        padding: "12px 18px",
        boxShadow: "0 12px 40px rgba(30,30,63,0.12)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontWeight: 700,
        fontSize: "0.85rem",
        color: "var(--navy)",
        whiteSpace: "nowrap",
        border: "2px solid rgba(110,197,49,0.15)",
        animation: `float-s 5s ease-in-out infinite ${delay}`,
        ...pos,
      }}
    >
      {icon}
      <div style={{ fontFamily: "'Baloo 2', cursive" }}>
        {label}
        <br />
        <span style={{ color: "var(--lime)", fontSize: "0.8rem" }}>{save}</span>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .sticker-float {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
