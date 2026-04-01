"use client";

import { useState, FormEvent } from "react";
import { SERVICES } from "@/lib/constants";
import { EditIcon } from "./Icons";

interface FormData {
  name: string;
  email: string;
  telegram: string;
  whatsappCode: string;
  whatsappNumber: string;
  service: string;
  description: string;
}

const COUNTRY_CODES = [
  { code: "+1", label: "US +1" },
  { code: "+44", label: "UK +44" },
  { code: "+91", label: "IN +91" },
  { code: "+61", label: "AU +61" },
  { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" },
  { code: "+81", label: "JP +81" },
  { code: "+86", label: "CN +86" },
  { code: "+971", label: "AE +971" },
  { code: "+55", label: "BR +55" },
  { code: "+52", label: "MX +52" },
  { code: "+234", label: "NG +234" },
  { code: "+27", label: "ZA +27" },
  { code: "+82", label: "KR +82" },
  { code: "+65", label: "SG +65" },
  { code: "+60", label: "MY +60" },
  { code: "+63", label: "PH +63" },
  { code: "+62", label: "ID +62" },
  { code: "+39", label: "IT +39" },
  { code: "+34", label: "ES +34" },
  { code: "+7", label: "RU +7" },
  { code: "+966", label: "SA +966" },
  { code: "+20", label: "EG +20" },
  { code: "+92", label: "PK +92" },
  { code: "+880", label: "BD +880" },
  { code: "+94", label: "LK +94" },
  { code: "+977", label: "NP +977" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    telegram: "",
    whatsappCode: "+1",
    whatsappNumber: "",
    service: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.telegram.trim()) errs.telegram = "Telegram username is required";
    if (!form.whatsappNumber.trim()) errs.whatsappNumber = "WhatsApp number is required";
    else if (!/^\d{6,15}$/.test(form.whatsappNumber.replace(/\s/g, "")))
      errs.whatsappNumber = "Enter a valid phone number";
    if (!form.service) errs.service = "Please select a service";
    if (!form.description.trim()) errs.description = "Please describe your query";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          whatsapp: `${form.whatsappCode}${form.whatsappNumber}`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        telegram: "",
        whatsappCode: "+1",
        whatsappNumber: "",
        service: "",
        description: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const update = (key: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 14,
    border: "2px solid rgba(110,197,49,0.15)",
    background: "var(--cream)",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "var(--navy)",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const inputFocusStyle = "2px solid var(--lime)";

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Baloo 2', cursive",
    fontWeight: 700,
    fontSize: "0.92rem",
    color: "var(--navy)",
    marginBottom: 6,
  };

  const errorStyle: React.CSSProperties = {
    color: "var(--pink)",
    fontSize: "0.78rem",
    fontWeight: 700,
    marginTop: 4,
  };

  if (status === "sent") {
    return (
      <section id="contact" style={{ padding: "90px 60px", maxWidth: 1340, margin: "0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 28,
            padding: "80px 60px",
            textAlign: "center",
            border: "2px solid rgba(110,197,49,0.15)",
            boxShadow: "0 12px 40px rgba(30,30,63,0.06)",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "var(--lime-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: "2.2rem",
            }}
          >
            ✓
          </div>
          <h2
            className="font-display"
            style={{ fontWeight: 800, fontSize: "2rem", color: "var(--navy)", marginBottom: 12 }}
          >
            Query Submitted!
          </h2>
          <p style={{ color: "#666", fontSize: "1.05rem", fontWeight: 600, maxWidth: 420, margin: "0 auto 28px" }}>
            Thanks for reaching out! Our team will get back to you within 24 hours via your preferred channel.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="font-display"
            style={{
              background: "var(--lime)",
              color: "#fff",
              border: "none",
              padding: "14px 36px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(110,197,49,0.3)",
            }}
          >
            Submit Another Query
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={{ padding: "90px 60px", maxWidth: 1340, margin: "0 auto" }}>
      <div className="reveal">
        <div
          className="font-display"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--sky-light)",
            color: "var(--sky)",
            fontWeight: 700,
            fontSize: "0.85rem",
            padding: "8px 20px",
            borderRadius: 50,
            marginBottom: 16,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          <EditIcon size={16} stroke="var(--sky)" />
          Get In Touch
        </div>
        <h2
          className="font-display"
          style={{
            fontWeight: 800,
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            color: "var(--navy)",
            marginBottom: 12,
            lineHeight: 1.15,
          }}
        >
          Have a Question?
          <br />
          We&apos;d Love to Help.
        </h2>
        <p style={{ color: "#666", fontSize: "1.05rem", maxWidth: 520, marginBottom: 50, lineHeight: 1.6, fontWeight: 600 }}>
          Fill out the form below and our team will reach out to you on your preferred channel.
        </p>
      </div>

      <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="contact-form-card"
          style={{
            background: "#fff",
            borderRadius: 24,
            padding: "40px 36px",
            border: "2px solid rgba(110,197,49,0.1)",
            boxShadow: "0 8px 30px rgba(30,30,63,0.06)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {/* Name */}
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                style={{
                  ...inputBase,
                  ...(errors.name ? { borderColor: "var(--pink)" } : {}),
                }}
                onFocus={(e) => (e.target.style.borderColor = inputFocusStyle.split(" ")[2])}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.name
                    ? "var(--pink)"
                    : "rgba(110,197,49,0.15)")
                }
              />
              {errors.name && <p style={errorStyle}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                style={{
                  ...inputBase,
                  ...(errors.email ? { borderColor: "var(--pink)" } : {}),
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--lime)")}
                onBlur={(e) =>
                  (e.target.style.borderColor = errors.email
                    ? "var(--pink)"
                    : "rgba(110,197,49,0.15)")
                }
              />
              {errors.email && <p style={errorStyle}>{errors.email}</p>}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
            {/* Telegram */}
            <div>
              <label style={labelStyle}>Telegram Username *</label>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    pointerEvents: "none",
                  }}
                >
                  @
                </span>
                <input
                  type="text"
                  placeholder="username"
                  value={form.telegram}
                  onChange={(e) => update("telegram", e.target.value.replace(/^@/, ""))}
                  style={{
                    ...inputBase,
                    paddingLeft: 34,
                    ...(errors.telegram ? { borderColor: "var(--pink)" } : {}),
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--lime)")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.telegram
                      ? "var(--pink)"
                      : "rgba(110,197,49,0.15)")
                  }
                />
              </div>
              {errors.telegram && <p style={errorStyle}>{errors.telegram}</p>}
            </div>

            {/* WhatsApp */}
            <div>
              <label style={labelStyle}>WhatsApp Number *</label>
              <div style={{ display: "flex", gap: 8 }}>
                <select
                  value={form.whatsappCode}
                  onChange={(e) => update("whatsappCode", e.target.value)}
                  style={{
                    ...inputBase,
                    width: 110,
                    flexShrink: 0,
                    cursor: "pointer",
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%231E1E3F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: 32,
                  }}
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="9876543210"
                  value={form.whatsappNumber}
                  onChange={(e) => update("whatsappNumber", e.target.value.replace(/\D/g, ""))}
                  style={{
                    ...inputBase,
                    flex: 1,
                    ...(errors.whatsappNumber ? { borderColor: "var(--pink)" } : {}),
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--lime)")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.whatsappNumber
                      ? "var(--pink)"
                      : "rgba(110,197,49,0.15)")
                  }
                />
              </div>
              {errors.whatsappNumber && <p style={errorStyle}>{errors.whatsappNumber}</p>}
            </div>
          </div>

          {/* Service */}
          <div style={{ marginTop: 18 }}>
            <label style={labelStyle}>Service You&apos;re Interested In *</label>
            <select
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
              style={{
                ...inputBase,
                cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%231E1E3F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
                paddingRight: 40,
                color: form.service ? "var(--navy)" : "#aaa",
                ...(errors.service ? { borderColor: "var(--pink)" } : {}),
              }}
            >
              <option value="" disabled>
                Select a service...
              </option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.service && <p style={errorStyle}>{errors.service}</p>}
          </div>

          {/* Description */}
          <div style={{ marginTop: 18 }}>
            <label style={labelStyle}>Describe Your Query *</label>
            <textarea
              placeholder="Tell us what you're looking for, any specific requirements, budget range, travel dates, etc."
              rows={4}
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              style={{
                ...inputBase,
                resize: "vertical",
                minHeight: 110,
                ...(errors.description ? { borderColor: "var(--pink)" } : {}),
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--lime)")}
              onBlur={(e) =>
                (e.target.style.borderColor = errors.description
                  ? "var(--pink)"
                  : "rgba(110,197,49,0.15)")
              }
            />
            {errors.description && <p style={errorStyle}>{errors.description}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="font-display"
            style={{
              marginTop: 24,
              width: "100%",
              background: status === "sending" ? "#aaa" : "var(--lime)",
              color: "#fff",
              border: "none",
              padding: "16px 36px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: "1.05rem",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              boxShadow: "0 6px 25px rgba(110,197,49,0.3)",
              transition: "all 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {status === "sending" ? (
              <>
                <span
                  style={{
                    width: 18,
                    height: 18,
                    border: "2.5px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "spin 0.6s linear infinite",
                  }}
                />
                Sending...
              </>
            ) : (
              <>
                Submit Query
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </>
            )}
          </button>

          {status === "error" && (
            <p
              style={{
                textAlign: "center",
                color: "var(--pink)",
                fontWeight: 700,
                fontSize: "0.88rem",
                marginTop: 14,
              }}
            >
              Something went wrong. Please try again or reach out on Telegram.
            </p>
          )}
        </form>

        {/* Info Side */}
        <div className="contact-info-col" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Quick Info Cards */}
          {[
            {
              icon: "💬",
              title: "Chat with us on Telegram",
              desc: "Get instant replies from our support team.",
              color: "var(--sky-light)",
              border: "var(--sky)",
            },
            {
              icon: "📱",
              title: "WhatsApp Support",
              desc: "Send us a message and we'll respond within hours.",
              color: "var(--lime-light)",
              border: "var(--lime)",
            },
            {
              icon: "📧",
              title: "Email Us",
              desc: "support@spunkytravelmarket.com",
              color: "var(--gold-light)",
              border: "var(--brown)",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "24px 26px",
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                border: "2px solid rgba(110,197,49,0.08)",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style.transform = "translateY(-4px)");
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(30,30,63,0.08)";
                e.currentTarget.style.borderColor = card.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(110,197,49,0.08)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: card.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <div>
                <h4
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: "1rem", color: "var(--navy)", marginBottom: 4 }}
                >
                  {card.title}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "#888", fontWeight: 600, lineHeight: 1.5 }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Trust badge */}
          <div
            style={{
              background: "var(--navy)",
              borderRadius: 18,
              padding: "28px 26px",
              marginTop: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(110,197,49,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                }}
              >
                🛡️
              </div>
              <h4
                className="font-display"
                style={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}
              >
                Your Info is Safe
              </h4>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", fontWeight: 600, lineHeight: 1.6 }}>
              We never share your personal information with third parties.
              Your data is only used to respond to your query and provide relevant deals.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 1024px) {
          section > div:last-child {
            grid-template-columns: 1fr !important;
          }
          .contact-info-col {
            order: -1;
          }
        }
        @media (max-width: 640px) {
          section {
            padding: 50px 22px !important;
          }
          .contact-form-card {
            padding: 28px 20px !important;
          }
          .contact-form-card > div:first-child,
          .contact-form-card > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
