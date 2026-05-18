import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Spunky Travel Market",
  description:
    "Learn how Spunky Travel Market collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: [
      "**Account & Contact Information:** When you create an account or contact us, we collect your name, email address, phone number, and billing details needed to process purchases.",
      "**Usage Data:** We automatically collect information about how you interact with our platform, including pages visited, deals viewed, search queries, and clicks.",
      "**Device & Technical Data:** We collect IP addresses, browser type, operating system, and device identifiers to deliver and improve our service.",
      "**Travel Preferences:** To personalize your experience, we may collect information about your travel preferences, frequent destinations, and category interests (flights, hotels, dining, etc.).",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "**Service Delivery:** To process your orders, confirm bookings, and send receipts or deal confirmations via email or Telegram.",
      "**Personalization:** To recommend deals, discounts, and offers tailored to your preferences and browsing history.",
      "**Communications:** To send you promotional offers, platform updates, and newsletters. You may opt out of marketing emails at any time.",
      "**Analytics & Improvement:** To analyze usage patterns, fix bugs, and improve the quality and relevance of our deals marketplace.",
      "**Legal Compliance:** To comply with applicable laws, resolve disputes, and enforce our agreements.",
    ],
  },
  {
    title: "3. Sharing Your Information",
    body: [
      "**Travel & Service Partners:** We share necessary booking details with third-party providers (airlines, hotels, car rental agencies, restaurants) solely to fulfill your order.",
      "**Payment Processors:** Payment details are transmitted to our PCI-compliant payment partners. Spunky Travel Market does not store full card numbers.",
      "**Analytics Providers:** We use privacy-respecting analytics tools to understand aggregate usage trends. These tools do not receive personally identifiable information.",
      "**Legal Requirements:** We may disclose your information if required by law, court order, or to protect the rights, property, or safety of our users or others.",
      "We do **not** sell your personal information to third-party advertisers.",
    ],
  },
  {
    title: "4. Cookies & Tracking Technologies",
    body: [
      "We use cookies and similar technologies to maintain your session, remember preferences, and measure the performance of our pages.",
      "**Essential Cookies:** Required for core site functionality such as login sessions and shopping cart state.",
      "**Analytics Cookies:** Help us understand how visitors interact with our site (e.g., which deals are most popular).",
      "**Marketing Cookies:** Used to show you relevant promotions on partner sites. You can disable these via your browser settings.",
      "You can control cookies through your browser preferences. Disabling certain cookies may affect site functionality.",
    ],
  },
  {
    title: "5. Data Retention",
    body: [
      "We retain your personal data for as long as your account is active or as needed to provide you with services.",
      "When you delete your account, we remove or anonymize your personal information within 30 days, except where we are required by law to retain certain records (e.g., transaction records for tax purposes, which are kept for up to 7 years).",
    ],
  },
  {
    title: "6. Data Security",
    body: [
      "We implement industry-standard security measures including TLS encryption for data in transit, encrypted storage for sensitive fields, and regular security audits.",
      "No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. Please notify us immediately at the contact below if you suspect unauthorized access to your account.",
    ],
  },
  {
    title: "7. Your Rights & Choices",
    body: [
      "**Access & Correction:** You may request a copy of the personal data we hold about you and ask us to correct inaccuracies.",
      "**Deletion:** You may request deletion of your personal data, subject to legal retention requirements.",
      "**Opt-Out of Marketing:** Click 'Unsubscribe' in any marketing email, or contact us to be removed from our mailing list.",
      "**Data Portability:** You may request a machine-readable export of your data.",
      "To exercise any of these rights, contact us at the email address in Section 10.",
    ],
  },
  {
    title: "8. Children's Privacy",
    body: [
      "Our services are not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by posting a notice on our website or sending an email to your registered address.",
      "Continued use of Spunky Travel Market after changes take effect constitutes your acceptance of the revised policy. The 'Last updated' date at the top of this page reflects when the policy was last revised.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:",
      "**Spunky Travel Market**  \nEmail: privacy@spunkytravelmarket.com  \nResponse time: within 5 business days",
    ],
  },
];

function renderBody(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      {/* Hero banner */}
      <div
        style={{
          background: "var(--navy)",
          padding: "120px 24px 64px",
          textAlign: "center",
        }}
      >
        <p
          className="font-display"
          style={{
            color: "var(--lime)",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Legal
        </p>
        <h1
          className="font-display"
          style={{
            color: "#fff",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", fontWeight: 600 }}>
          Last updated: May 18, 2026
        </p>
      </div>

      {/* Content */}
      <main
        style={{
          background: "var(--cream)",
          padding: "64px 24px 80px",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          {/* Intro */}
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "var(--navy)",
              marginBottom: 48,
              fontWeight: 600,
            }}
          >
            At <strong>Spunky Travel Market</strong>, your privacy matters. This Privacy Policy
            explains what information we collect when you use our website and services, how we use
            it, and the choices you have. By using Spunky Travel Market, you agree to the
            practices described below.
          </p>

          {/* Sections */}
          {SECTIONS.map((section) => (
            <section key={section.title} style={{ marginBottom: 44 }}>
              <h2
                className="font-display"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "var(--navy)",
                  marginBottom: 16,
                  paddingBottom: 10,
                  borderBottom: "2px solid var(--lime)",
                  display: "inline-block",
                }}
              >
                {section.title}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.body.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.97rem",
                      lineHeight: 1.75,
                      color: "rgba(30,30,63,0.8)",
                      fontWeight: 600,
                      marginBottom: 12,
                      paddingLeft: 18,
                      borderLeft: "3px solid var(--lime-light)",
                    }}
                  >
                    {renderBody(item)}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Back link */}
          <div style={{ marginTop: 56, textAlign: "center" }}>
            <a
              href="/"
              style={{
                display: "inline-block",
                background: "var(--lime)",
                color: "var(--navy)",
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "14px 32px",
                borderRadius: 50,
                textDecoration: "none",
                letterSpacing: 0.5,
              }}
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
