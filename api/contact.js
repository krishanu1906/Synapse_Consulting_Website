/**
 * Synapse Consulting — Vercel Serverless Function
 * /api/contact
 *
 * Receives the website contact form, sends:
 *   1. Notification email → CONTACT_EMAIL (with all submitted details)
 *   2. Auto-reply         → user (thank-you confirmation)
 *
 * This file is what Vercel runs in production. The Express server in /server
 * is for local development only.
 *
 * Configure SMTP via Vercel project Environment Variables (NOT a .env file):
 *   SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS,
 *   CONTACT_EMAIL, FROM_EMAIL, FROM_NAME
 */

import nodemailer from "nodemailer";

// ---------- Config ----------
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_EMAIL,
  FROM_EMAIL,
  FROM_NAME,
} = process.env;

const TARGET_EMAIL = CONTACT_EMAIL || "contact@synapseconsulting.in";
const SENDER_EMAIL = FROM_EMAIL || SMTP_USER || "no-reply@synapseconsulting.in";
const SENDER_NAME = FROM_NAME || "Synapse Consulting";

// ---------- Utilities ----------
const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isValidEmail = (e) =>
  typeof e === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

// ---------- Email templates ----------
// Templates intentionally keep wording natural and avoid spam-trigger phrases
// ("act now", "free", excessive exclamation, all caps, etc.). They include
// proper headers (List-Unsubscribe, Auto-Submitted) on the outbound auto-reply.

const buildNotificationEmail = ({ name, company, email, industryType, challenge }) => {
  const safe = {
    name: escapeHtml(name),
    company: escapeHtml(company),
    email: escapeHtml(email),
    industryType: escapeHtml(industryType || "Not specified"),
    challenge: escapeHtml(challenge || "(no message provided)").replace(/\n/g, "<br>"),
  };

  const html = `
  <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background:#f5f7fa;padding:32px 16px;color:#0A1628">
    <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(15,30,60,0.08)">
      <div style="background:linear-gradient(135deg,#007BFF 0%,#33CCFF 100%);padding:24px 28px">
        <h1 style="margin:0;color:#fff;font-size:22px;letter-spacing:-0.01em">New enquiry from the website</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:14px">Synapse Consulting &middot; contact form</p>
      </div>
      <div style="padding:28px">
        <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.55">
          <tr><td style="padding:10px 0;color:#475569;width:140px;vertical-align:top">Name</td>     <td style="padding:10px 0;font-weight:600">${safe.name}</td></tr>
          <tr><td style="padding:10px 0;color:#475569;vertical-align:top">Company</td>              <td style="padding:10px 0;font-weight:600">${safe.company}</td></tr>
          <tr><td style="padding:10px 0;color:#475569;vertical-align:top">Email</td>                <td style="padding:10px 0;font-weight:600"><a href="mailto:${safe.email}" style="color:#007BFF;text-decoration:none">${safe.email}</a></td></tr>
          <tr><td style="padding:10px 0;color:#475569;vertical-align:top">Industry</td>             <td style="padding:10px 0;font-weight:600">${safe.industryType}</td></tr>
          <tr><td style="padding:10px 0;color:#475569;vertical-align:top;border-top:1px solid #e2e8f0">Challenge</td>
              <td style="padding:10px 0;border-top:1px solid #e2e8f0">${safe.challenge}</td></tr>
        </table>
      </div>
      <div style="background:#f8fafc;padding:14px 28px;font-size:12px;color:#64748b;border-top:1px solid #e2e8f0">
        Replying to this email goes directly to ${safe.name} at ${safe.email}.
      </div>
    </div>
  </div>`;

  const text = [
    "New enquiry from the Synapse Consulting website",
    "----------------------------------------------",
    `Name:     ${name}`,
    `Company:  ${company}`,
    `Email:    ${email}`,
    `Industry: ${industryType || "Not specified"}`,
    "",
    "Challenge:",
    challenge || "(no message provided)",
  ].join("\n");

  return { html, text };
};

const buildAutoReplyEmail = ({ name }) => {
  const safeName = escapeHtml(name);

  // Plain, conversational copy — avoids the patterns spam filters dislike.
  const html = `
  <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background:#ffffff;padding:32px 16px;color:#0A1628">
    <div style="max-width:600px;margin:0 auto">
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6">Hi ${safeName},</p>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6">
        Thanks for getting in touch with Synapse Consulting. We have received your message and one of our partners will get back to you within one business day.
      </p>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6">
        If your enquiry is time-sensitive, you can reply directly to this email or write to us at
        <a href="mailto:contact@synapseconsulting.in" style="color:#007BFF;text-decoration:none">contact@synapseconsulting.in</a>.
      </p>
      <p style="margin:24px 0 0;font-size:16px;line-height:1.6">
        Warm regards,<br>
        Jayanta &amp; Krishanu<br>
        Synapse Consulting
      </p>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0 14px">
      <p style="margin:0;font-size:12px;color:#64748b;line-height:1.5">
        Synapse Consulting &middot; Bangalore, Karnataka, India<br>
        <a href="https://synapseconsulting.in" style="color:#64748b;text-decoration:none">synapseconsulting.in</a>
      </p>
    </div>
  </div>`;

  const text =
    `Hi ${name},\n\n` +
    `Thanks for getting in touch with Synapse Consulting. We have received your message and one of our partners will get back to you within one business day.\n\n` +
    `If your enquiry is time-sensitive, you can reply directly to this email or write to us at contact@synapseconsulting.in.\n\n` +
    `Warm regards,\n` +
    `Jayanta & Krishanu\n` +
    `Synapse Consulting\n\n` +
    `--\n` +
    `Synapse Consulting · Bangalore, Karnataka, India\n` +
    `https://synapseconsulting.in`;

  return { html, text };
};

// ---------- Vercel handler ----------
export default async function handler(req, res) {
  // CORS — allow same-origin and (optionally) preview deploys
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed." });
  }

  try {
    // Vercel parses JSON bodies automatically when Content-Type is application/json,
    // but we defensively handle both shapes.
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const { name, company, email, industryType, challenge } = body;

    // Validation
    if (!name || !company || !email) {
      return res.status(400).json({ ok: false, message: "Name, company and email are required." });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, message: "Please provide a valid email address." });
    }
    if ([name, company, email, industryType, challenge].some((v) => typeof v === "string" && v.length > 4000)) {
      return res.status(400).json({ ok: false, message: "Submission too large." });
    }

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("[/api/contact] SMTP env vars are missing");
      return res.status(500).json({
        ok: false,
        message: "Email service is not configured. Please write to contact@synapseconsulting.in directly.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT ? Number(SMTP_PORT) : 587,
      secure: SMTP_SECURE === "true",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const payload = { name, company, email, industryType, challenge };
    const notif = buildNotificationEmail(payload);
    const reply = buildAutoReplyEmail(payload);

    const fromHeader = `"${SENDER_NAME}" <${SENDER_EMAIL}>`;

    // 1) Notification to internal team
    const notifyPromise = transporter.sendMail({
      from: fromHeader,
      to: TARGET_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `New website enquiry — ${name} (${company})`,
      text: notif.text,
      html: notif.html,
    });

    // 2) Auto-reply to user — extra headers help avoid spam classification
    const autoReplyPromise = transporter.sendMail({
      from: fromHeader,
      to: `"${name}" <${email}>`,
      replyTo: TARGET_EMAIL,
      subject: "Thanks for contacting Synapse Consulting",
      text: reply.text,
      html: reply.html,
      headers: {
        "Auto-Submitted": "auto-replied",
        "X-Auto-Response-Suppress": "All",
        Precedence: "auto_reply",
        "List-Unsubscribe": `<mailto:${TARGET_EMAIL}?subject=Unsubscribe>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    });

    await Promise.all([notifyPromise, autoReplyPromise]);

    return res.status(200).json({ ok: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("[/api/contact] error:", err);
    return res.status(500).json({
      ok: false,
      message:
        "We couldn't send your message right now. Please email us directly at contact@synapseconsulting.in.",
    });
  }
}
