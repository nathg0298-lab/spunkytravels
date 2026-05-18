"use client";

import Image from "next/image";
import Link from "next/link";

const FOOTER_COLS = [
  {
    title: "Travel",
    links: ["Flights", "Hotels", "Airbnb", "Expedia", "Car Rentals"],
  },
  {
    title: "Lifestyle",
    links: ["Food & Dining", "Movies", "Experiences", "Bill Payments"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact", "Help Center"],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy)",
        padding: "60px 60px 28px",
        borderTop: "3px solid var(--lime)",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 36,
            marginBottom: 44,
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 14 }}
            >
              <Image
                src="/spunky-mascot.jpg"
                alt="Spunky"
                width={40}
                height={40}
                style={{ borderRadius: 10 }}
              />
              <div className="font-display" style={{ lineHeight: 1.1 }}>
                <span style={{ fontWeight: 800, fontSize: "1.3rem", color: "#fff" }}>
                  Spunky Travel
                </span>
                <span
                  style={{
                    display: "block",
                    color: "var(--pink)",
                    fontSize: "0.65em",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Market
                </span>
              </div>
            </Link>
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: "0.88rem",
                lineHeight: 1.6,
                maxWidth: 280,
                fontWeight: 600,
              }}
            >
              Your one-stop marketplace for massive discounts on travel, entertainment, home
              improvement, dining and everyday bills.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4
                className="font-display"
                style={{ fontWeight: 700, fontSize: "0.95rem", color: "#fff", marginBottom: 16 }}
              >
                {col.title}
              </h4>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    fontSize: "0.88rem",
                    marginBottom: 10,
                    fontWeight: 600,
                    transition: "color 0.2s",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="footer-bottom-row"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.82rem", fontWeight: 600 }}>
            &copy; 2026 Spunky Travel Market. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.82rem", fontWeight: 600 }}>
            <Link
              href="/privacy-policy"
              style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            {" · "}
            Terms of Service
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          footer {
            padding: 36px 22px 18px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom-row {
            flex-direction: column !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </footer>
  );
}
