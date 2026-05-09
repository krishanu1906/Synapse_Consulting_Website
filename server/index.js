import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json({ limit: "100kb" }));
app.use(cors());

const PORT = process.env.PORT || 3001;

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

// ---------- Mail transport ----------
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT ? Number(SMTP_PORT) : 587,
  secure: SMTP_SECURE === "true", // true for 465, false for 587/STARTTLS
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

// Verify transporter at startup (logs but does not crash on failure)
transporter.verify((err) => {
  if (err) {
    console.warn("[mail] SMTP verify failed:", err.message);
    console.warn("[mail] Check your .env SMTP_* settings.");
  } else {
    console.log("[mail] SMTP transport ready.");
  }
});

// ---------- Utilities ----------
const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isValidEmail = (e) => typeof e === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

// ---------- Email templates ----------
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
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:14px">Synapse Consulting · contact form</p>
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
  const html = `
  <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background:#f5f7fa;padding:32px 16px;color:#0A1628">
    <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(15,30,60,0.08)">
      <div style="background:linear-gradient(135deg,#007BFF 0%,#33CCFF 100%);padding:28px 32px">
        <h1 style="margin:0;color:#fff;font-size:24px;letter-spacing:-0.01em">Thank you, ${safeName}</h1>
        <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:15px">We've received your message.</p>
      </div>
      <div style="padding:32px;font-size:15px;line-height:1.65;color:#0A1628">
        <p style="margin:0 0 16px">Hi ${safeName},</p>
        <p style="margin:0 0 16px">
          Thank you for reaching out to <strong>Synapse Consulting</strong>. We've received your details
          and one of our partners will get back to you within <strong>one business day</strong>.
        </p>
        <p style="margin:0 0 16px">
          In the meantime, if your enquiry is urgent, feel free to reply directly to this email or write
          to us at <a href="mailto:contact@synapseconsulting.in" style="color:#007BFF;text-decoration:none">contact@synapseconsulting.in</a>.
        </p>
        <p style="margin:24px 0 0">
          Warm regards,<br>
          <strong>The Synapse Consulting Team</strong><br>
          <span style="color:#FF6B00;font-weight:600">Boutique Retail &amp; CPG Analytics</span>
        </p>
      </div>
      <div style="background:#0A1628;padding:18px 32px;color:rgba(255,255,255,0.7);font-size:12px;text-align:center">
        Synapse Consulting · Bangalore, Karnataka, India · contact@synapseconsulting.in
      </div>
    </div>
  </div>`;

  const text =
    `Hi ${name},\n\n` +
    `Thank you for reaching out to Synapse Consulting. We've received your details and one of our partners will get back to you within one business day.\n\n` +
    `If your enquiry is urgent, feel free to reply directly to this email or write to us at contact@synapseconsulting.in.\n\n` +
    `Warm regards,\nThe Synapse Consulting Team\n` +
    `Synapse Consulting · Bangalore, Karnataka, India`;

  return { html, text };
};

// ---------- Routes ----------
app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const { name, company, email, industryType, challenge } = req.body || {};

    // Server-side validation
    if (!name || !company || !email) {
      return res.status(400).json({ ok: false, message: "Name, company and email are required." });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, message: "Please provide a valid email address." });
    }

    // Light spam guard — reject overly long inputs
    if ([name, company, email, industryType, challenge].some((v) => typeof v === "string" && v.length > 4000)) {
      return res.status(400).json({ ok: false, message: "Submission too large." });
    }

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

    // 2) Auto-reply to user
    const autoReplyPromise = transporter.sendMail({
      from: fromHeader,
      to: `"${name}" <${email}>`,
      replyTo: TARGET_EMAIL,
      subject: "We've received your message — Synapse Consulting",
      text: reply.text,
      html: reply.html,
    });

    await Promise.all([notifyPromise, autoReplyPromise]);

    return res.json({ ok: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("[/api/contact] error:", err);
    return res.status(500).json({
      ok: false,
      message:
        "We couldn't send your message right now. Please email us directly at contact@synapseconsulting.in.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`[server] Synapse contact API listening on http://localhost:${PORT}`);
});
