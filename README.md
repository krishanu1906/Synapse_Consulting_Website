# Synapse Consulting — Corporate Website

Production-ready React + TypeScript + Tailwind website for **Synapse Consulting**, a boutique Retail & CPG data and analytics consultancy headquartered in Bengaluru, India. Includes a working contact-form backend that runs as a **Vercel serverless function** in production and as an Express server locally.

Founded by **Jayanta Banerjee** and **Krishanu Banerjee**.

---

## Tech Stack

**Frontend:** Vite 5 · React 18 · TypeScript 5 · Tailwind CSS 3 · react-router-dom 6 (HashRouter)
**Backend:**
- Production → Vercel serverless function (`api/contact.js`)
- Local dev → Express server (`server/index.js`)
- Both use Nodemailer over SMTP

**Typography:** Helvetica Neue (Inter web fallback)

---

## Quick Start (Local)

```bash
# 1. Install dependencies
npm install

# 2. Configure SMTP for the contact form
cp .env.example .env
# fill in SMTP_HOST, SMTP_USER, SMTP_PASS, etc.

# 3. Run frontend + backend together
npm run dev:full
# Vite:    http://localhost:5173 (auto-opens)
# API:     http://localhost:3001 (proxied from /api/*)

# 4. Build for production
npm run build
# static bundle is emitted to dist/
```

Run pieces individually:

```bash
npm run dev       # frontend only (Vite, port 5173)
npm run server    # backend only  (Express, port 3001)
npm run preview   # preview the production build locally
```

---

## Deploying to Vercel (Production)

The project is preconfigured for Vercel. Push to GitHub, connect the repo to a Vercel project, and Vercel handles the rest — but **you must set the env vars below**, otherwise the contact form returns 500 / 404.

### Step 1 — Set Environment Variables in Vercel

Go to **Project → Settings → Environment Variables** and add these (apply to Production, Preview, Development):

| Key             | Example value                                  |
|-----------------|------------------------------------------------|
| `SMTP_HOST`     | `smtp.gmail.com` / `smtp.zoho.in` / `smtp.resend.com` |
| `SMTP_PORT`     | `465` (SSL) or `587` (STARTTLS)                |
| `SMTP_SECURE`   | `true` for port 465, `false` for 587           |
| `SMTP_USER`     | mailbox or API key username                    |
| `SMTP_PASS`     | app password / API key secret                  |
| `CONTACT_EMAIL` | `contact@synapseconsulting.in`                 |
| `FROM_EMAIL`    | `contact@synapseconsulting.in` (must match an authenticated sender) |
| `FROM_NAME`     | `Synapse Consulting`                           |

After adding env vars, **redeploy** (Vercel does not pick up env-var changes without a redeploy).

### Step 2 — Verify the route

After deploy, hit `https://yourdomain.com/api/contact` with a POST. You should get a JSON response. If you get a `404`, your env vars or `vercel.json` are off — see Troubleshooting below.

### Step 3 — Hostinger custom domain

Point your Hostinger domain to Vercel by adding the Vercel-provided records to Hostinger DNS (Vercel shows them under Domains). Once propagated, `synapseconsulting.in` serves the site and `synapseconsulting.in/api/contact` runs the function.

---

## Fixing "Auto-reply Goes to Spam"

Auto-reply emails landing in spam is almost always a **sender reputation / DNS authentication** problem, not a code problem. The fix has to happen at your DNS provider (Hostinger), not in the codebase.

### A — Set up SPF, DKIM, DMARC on `synapseconsulting.in`

These three DNS records prove to receiving mail servers that your sending mail provider is authorized to send on behalf of `@synapseconsulting.in`. Without them, Gmail/Outlook will flag almost every message.

**SPF** — add a TXT record at the root (`@`):

| If using…           | TXT value                                              |
|---------------------|--------------------------------------------------------|
| Google Workspace    | `v=spf1 include:_spf.google.com ~all`                  |
| Zoho Mail           | `v=spf1 include:zoho.in ~all`                          |
| SendGrid            | `v=spf1 include:sendgrid.net ~all`                     |
| Resend              | `v=spf1 include:amazonses.com ~all`                    |
| AWS SES             | `v=spf1 include:amazonses.com ~all`                    |

If you already use the domain for normal mail (Hostinger inbox), combine them: `v=spf1 include:_spf.mail.hostinger.com include:sendgrid.net ~all`.

**DKIM** — your sending provider gives you specific records. For each:

- **Google Workspace:** Admin Console → Apps → Gmail → Authenticate email → generate DKIM, add the resulting TXT record.
- **Zoho:** Domain Admin Console → Email Configuration → DKIM → publish records given.
- **SendGrid / Resend:** dashboard hands you 2-3 CNAME records to add.

**DMARC** — add a TXT record at `_dmarc.synapseconsulting.in`:

```
v=DMARC1; p=none; rua=mailto:contact@synapseconsulting.in
```

(`p=none` is the safe starting policy — start here, then move to `quarantine` after a couple of weeks of clean delivery.)

### B — Use a Transactional Email Provider Instead of Gmail SMTP

Free Gmail/Workspace SMTP works for personal mail but is unreliable for transactional sends (your auto-reply). Two recommended providers, both free for low volumes:

**Resend (easiest, designed for transactional):**

1. Sign up at https://resend.com (free tier: 100 emails/day, 3,000/month)
2. Add and verify `synapseconsulting.in` (Resend gives you DNS records to paste into Hostinger — handles SPF + DKIM in one go)
3. Generate an API key
4. Set Vercel env vars:
   - `SMTP_HOST=smtp.resend.com`
   - `SMTP_PORT=465`
   - `SMTP_SECURE=true`
   - `SMTP_USER=resend`
   - `SMTP_PASS=<your-api-key>`
   - `FROM_EMAIL=contact@synapseconsulting.in`

**SendGrid (alternative, also good):**

1. Sign up, verify your domain (DNS records into Hostinger)
2. `SMTP_HOST=smtp.sendgrid.net`, `SMTP_PORT=587`, `SMTP_SECURE=false`, `SMTP_USER=apikey`, `SMTP_PASS=<api-key>`

### C — Built-in Code Protections (already done)

The auto-reply function already includes these to reduce spam classification:

- `Auto-Submitted: auto-replied` header
- `Precedence: auto_reply` header
- `List-Unsubscribe` and `List-Unsubscribe-Post` headers (signals legitimate bulk practices to Gmail)
- `X-Auto-Response-Suppress: All` (prevents loops)
- Plain conversational subject line ("Thanks for contacting Synapse Consulting") — no caps, no emoji, no spam-trigger words
- HTML and plain-text alternatives both sent
- `Reply-To` separate from `From` (uses `contact@synapseconsulting.in` for replies)

These help — but **the DNS records in section A are the dominant factor**. With SPF + DKIM + DMARC + a verified domain on a transactional provider, deliverability should be 95%+.

---

## Troubleshooting

**Production form returns 404**
- The serverless function isn't being deployed. Confirm `api/contact.js` is in the repo and pushed to GitHub.
- Check `vercel.json` exists and includes the rewrite for `/api/:path*`.
- In Vercel project Settings → Functions, confirm `api/contact.js` is listed.

**Production form returns 500**
- Env vars are missing or wrong. Vercel → Project → Settings → Environment Variables. Make sure `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` are set, then **redeploy**.
- Check Vercel function logs (Project → Deployments → click deployment → Functions tab) for the actual error.

**Local form returns 404**
- The Vite proxy isn't reaching the Express server. Make sure you ran `npm run dev:full` (not just `npm run dev`).
- Verify the Express server logs `[server] Synapse contact API listening on http://localhost:3001`.

**Notification email arrives but auto-reply doesn't**
- Check the user's spam folder first.
- Most likely SPF/DKIM not set on `synapseconsulting.in`. See section above.

**SMTP verify fails on startup**
- Wrong port/secure combination — port 465 needs `SMTP_SECURE=true`; port 587 needs `SMTP_SECURE=false`.
- For Gmail, you used your account password instead of an [App Password](https://myaccount.google.com/apppasswords).

---

## Brand Identity

| Token            | Hex       | Usage                              |
|------------------|-----------|------------------------------------|
| `brand-blue`     | `#007BFF` | Primary — headings, primary CTAs   |
| `brand-orange`   | `#FF6B00` | Secondary — accents, highlights    |
| `brand-cyan`     | `#33CCFF` | Accent — gradients, hover states   |
| `brand-yellow`   | `#FFD43B` | Accent — badges, micro-highlights  |

The palette is baked into `tailwind.config.js` and `src/index.css`. Use Tailwind utilities like `bg-brand-blue`, `text-brand-orange`, `border-brand-cyan`.

### Logo

Only one logo asset is used: `public/synapse-logo.jpg` — the official light-mode artwork. The `SynapseLogo` component handles two display modes:

- `variant="dark"` → image rendered inline (used on white surfaces, e.g. scrolled navbar)
- `variant="light"` → image wrapped in a clean white rounded card (used on dark surfaces — hero, footer, mobile drawer — so the brand colors keep their intended contrast)

To replace the logo, swap `public/synapse-logo.jpg` and rebuild.

---

## Project Structure

```
synapse-consulting/
├── api/
│   └── contact.js              ← Vercel serverless function (PROD)
├── public/
│   └── synapse-logo.jpg        ← Single logo asset
├── server/
│   └── index.js                ← Express backend (LOCAL DEV ONLY)
├── src/
│   ├── components/             ← All sections + Navbar + Footer + Logo
│   ├── pages/                  ← Index.tsx + NotFound.tsx
│   ├── App.tsx · main.tsx · index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts              ← /api proxy for dev
├── vercel.json                 ← Serverless routing config for Vercel
├── .env.example                ← SMTP config template
├── package.json
└── README.md
```

---

## Key Features Delivered

- **Working contact form** with team notification + user auto-reply, runs as Vercel serverless in prod and Express locally
- **Single logo asset** (JPG only) used consistently — wrapped in a clean white card on dark surfaces for design consistency
- **Spam-resistant auto-reply** with proper email headers (`Auto-Submitted`, `List-Unsubscribe`, `Precedence`, etc.)
- **Dual practice areas** — separate Services & Expertise sections for Retail and CPG
- **5 verbatim case studies** — Grocery price/assortment, Luxury fashion segmentation, Fashion clienteling, CPG GTM transformation, CPG salesforce productivity
- **Working article modal** in Insights section — ESC-to-close & body-scroll lock
- **Founder bios** — full Jayanta Banerjee bio + Krishanu Banerjee tech-focused profile
- **Mobile-responsive** — fully responsive layout with mobile drawer navigation

---

© Synapse Consulting. Founded by Jayanta Banerjee & Krishanu Banerjee.
