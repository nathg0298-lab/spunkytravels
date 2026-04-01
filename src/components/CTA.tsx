"use client";

export default function CTA() {
  return (
    <section id="cta" style={{ padding: "30px 60px 90px", maxWidth: 1340, margin: "0 auto" }}>
      <div
        className="reveal"
        style={{
          background: "linear-gradient(135deg, var(--navy) 0%, #252560 50%, var(--navy-mid) 100%)",
          borderRadius: 32,
          padding: "80px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Deco circles */}
        <div className="deco-c" style={{ width: 300, height: 300, top: -80, left: -80 }} />
        <div className="deco-c" style={{ width: 200, height: 200, bottom: -60, right: -40 }} />
        <div
          className="deco-c"
          style={{ width: 150, height: 150, top: "20%", right: "10%", borderColor: "rgba(245,183,49,0.1)" }}
        />

        <h2
          className="font-display"
          style={{
            fontWeight: 800,
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            color: "#fff",
            position: "relative",
            zIndex: 1,
            marginBottom: 14,
          }}
        >
          Ready to Stop Overpaying
          <br />
          for Everything?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "1.05rem",
            marginBottom: 36,
            position: "relative",
            zIndex: 1,
            fontWeight: 600,
          }}
        >
          Join 250,000+ members saving on flights, food, hotels, entertainment, and way more.
        </p>
        <a
          href="https://t.me/spunkytravels"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display"
          style={{
            background: "#29A9EB",
            color: "#fff",
            border: "none",
            padding: "20px 52px",
            borderRadius: 50,
            fontWeight: 800,
            fontSize: "1.15rem",
            cursor: "pointer",
            transition: "all 0.3s",
            position: "relative",
            zIndex: 1,
            boxShadow: "0 6px 25px rgba(41,169,235,0.35)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          Message Us on Telegram →
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          section {
            padding: 20px 22px 60px !important;
          }
          section > div {
            padding: 50px 24px !important;
            border-radius: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
