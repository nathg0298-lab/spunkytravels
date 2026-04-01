import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // duplicate for seamless loop

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "rgba(255,255,255,0.75)",
                fontWeight: 700,
                fontSize: "0.88rem",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                padding: "0 30px",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--gold)", fontSize: "1.2rem", padding: "0 4px" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
