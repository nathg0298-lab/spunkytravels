import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Receives contact form submissions. Plug in your preferred backend:
 *
 * OPTION 1: Send to a Google Sheet via Apps Script webhook
 *   await fetch("https://script.google.com/macros/s/YOUR_ID/exec", { method: "POST", body: JSON.stringify(data) });
 *
 * OPTION 2: Send to Telegram bot
 *   await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ chat_id: CHAT_ID, text: formatMessage(data), parse_mode: "HTML" }),
 *   });
 *
 * OPTION 3: Send email via Resend
 *   await resend.emails.send({ from: "...", to: "...", subject: "New Query", html: formatEmail(data) });
 *
 * OPTION 4: Store in a database (Supabase, Neon, MongoDB, etc.)
 */

interface ContactPayload {
  name: string;
  email: string;
  telegram: string;
  whatsapp: string;
  service: string;
  description: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactPayload = await req.json();

    // ─── Validation ───
    const required: (keyof ContactPayload)[] = [
      "name",
      "email",
      "telegram",
      "whatsapp",
      "service",
      "description",
    ];

    for (const field of required) {
      if (!data[field] || !String(data[field]).trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // ─── Process submission ───
    // TODO: Replace this console.log with your preferred backend integration
    console.log("═══════════════════════════════════════");
    console.log("📩 NEW CONTACT QUERY");
    console.log("═══════════════════════════════════════");
    console.log(`Name:        ${data.name}`);
    console.log(`Email:       ${data.email}`);
    console.log(`Telegram:    @${data.telegram}`);
    console.log(`WhatsApp:    ${data.whatsapp}`);
    console.log(`Service:     ${data.service}`);
    console.log(`Description: ${data.description}`);
    console.log("═══════════════════════════════════════");

    // ─── Example: Send to Telegram ───
    // Uncomment and set env vars TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
    //
    // const botToken = process.env.TELEGRAM_BOT_TOKEN;
    // const chatId = process.env.TELEGRAM_CHAT_ID;
    // if (botToken && chatId) {
    //   const text = [
    //     `<b>📩 New Query</b>`,
    //     ``,
    //     `<b>Name:</b> ${data.name}`,
    //     `<b>Email:</b> ${data.email}`,
    //     `<b>Telegram:</b> @${data.telegram}`,
    //     `<b>WhatsApp:</b> ${data.whatsapp}`,
    //     `<b>Service:</b> ${data.service}`,
    //     `<b>Description:</b> ${data.description}`,
    //   ].join("\n");
    //
    //   await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    //   });
    // }

    return NextResponse.json(
      { success: true, message: "Query submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
