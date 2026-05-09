# Synapse Consulting — Corporate Website

A production-ready React + TypeScript + Tailwind website for **Synapse Consulting**, a boutique Retail & CPG data and analytics consultancy headquartered in Bengaluru, India. Includes a working contact-form backend that sends a notification to your inbox and an automated thank-you reply to the user.

Founded by **Jayanta Banerjee** and **Krishanu Banerjee**.

---

## Tech Stack

**Frontend:** Vite 5 · React 18 · TypeScript 5 · Tailwind CSS 3 · react-router-dom 6 (HashRouter)
**Backend:** Node.js · Express · Nodemailer · dotenv
**Typography:** Helvetica Neue (Inter web fallback)

---

## Quick Start

```bash
# 1. Install all dependencies (frontend + backend)
npm install

# 2. Configure SMTP for the contact form
cp .env.example .env
# then open .env and fill in your SMTP credentials (see "Email setup" below)

# 3. Run frontend + backend together
npm run dev:full
# Vite:    http://localhost:5173  (opens automatically)
# API:     http://localhost:3001  (proxied from /api/*)

# 4. Build for production
npm run build
# Static bundle is emitted to dist/
```

To run pieces individually:

```bash
npm run dev       # frontend only (Vite, port 5173)
npm run server    # backend only  (Express, port 3001)
npm run preview   # preview the production build locally
```

---

## Project Structure

```
synapse-consulting/
├── public/
│   ├── synapse-logo.png       ← Tightly cropped logo (transparent BG, primary)
│   ├── synapse-logo.jpg       ← Cropped JPG fallback
│   └── synapse-logo.svg       ← SVG fallback
├── server/
│   └── index.js               ← Express + Nodemailer email backend
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx          ← Retail Analytics Solutions
│   │   ├── CPGServicesSection.tsx       ← CPG Analytics Solutions
│   │   ├── ExpertiseSection.tsx         ← Retail industry expertise
│   │   ├── CPGExpertiseSection.tsx      ← CPG category expertise
│   │   ├── CaseStudiesSection.tsx       ← 5 verbatim case studies
│   │   ├── ApproachSection.tsx          ← 4-step delivery approach
│   │   ├── InsightsSection.tsx          ← Articles with reader modal
│   │   ├── TeamSection.tsx              ← Founders + Why Synapse
│   │   ├── ContactSection.tsx           ← Form → /api/contact
│   │   ├── Footer.tsx
│   │   └── SynapseLogo.tsx
│   ├── pages/
│   │   ├── Index.tsx                    ← Composes all sections
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                        ← Brand tokens & utilities
├── index.html
├── tailwind.config.js                   ← Brand color palette
├── vite.config.ts                       ← /api proxy for dev
├── tsconfig.json
├── package.json
├── .env.example                         ← SMTP config template
└── .gitignore
```

---

## Brand Identity

The Synapse brand palette is baked into `tailwind.config.js` and `src/index.css`:

| Token            | Hex       | Usage                              |
|------------------|-----------|------------------------------------|
| `brand-blue`     | `#007BFF` | Primary — headings, primary CTAs   |
| `brand-orange`   | `#FF6B00` | Secondary — accents, highlights    |
| `brand-cyan`     | `#33CCFF` | Accent — gradients, hover states   |
| `brand-yellow`   | `#FFD43B` | Accent — badges, micro-highlights  |

Use Tailwind utilities like `bg-brand-blue`, `text-brand-orange`, `border-brand-cyan`, etc.

---

## Email Setup (Contact Form)

The contact form POSTs to `/api/contact` (proxied to the Node backend in dev, same-origin in prod). The backend sends two emails on each submission:

1. **Notification** → `contact@synapseconsulting.in` with all form fields. `Reply-To` is set to the user, so hitting reply goes straight to them.
2. **Auto-reply** → the user, thanking them and confirming the team will respond within one business day.

### 1. Copy the env template

```bash
cp .env.example .env
```

### 2. Fill in SMTP credentials in `.env`

| Provider          | `SMTP_HOST`                            | `SMTP_PORT` | `SMTP_SECURE` | `SMTP_USER`         |
|-------------------|----------------------------------------|-------------|---------------|---------------------|
| Google Workspace  | `smtp.gmail.com`                       | `465`       | `true`        | mailbox + app pwd   |
| Zoho Mail         | `smtp.zoho.in`                         | `465`       | `true`        | mailbox + app pwd   |
| SendGrid          | `smtp.sendgrid.net`                    | `587`       | `false`       | `apikey`            |
| AWS SES           | `email-smtp.<region>.amazonaws.com`    | `587`       | `false`       | SMTP IAM creds      |

> **Google Workspace tip:** generate an [App Password](https://myaccount.google.com/apppasswords) — your normal password will not work over SMTP.
> **Zoho tip:** generate an app-specific password under *Mail Accounts → Security*.

### 3. Verify it works

```bash
npm run dev:full
```

Open `http://localhost:5173`, fill in the contact form, hit Send. You should see:
- "Sending..." → success state with the user's email confirmed
- A notification in `contact@synapseconsulting.in`
- An auto-reply in the email entered in the form

If the backend can't reach your SMTP server, the form shows an error message and falls back to a `mailto:` direct-email suggestion.

---

## Key Features Delivered

- **Cleanly integrated logo** — tightly cropped PNG with transparent background; sits flush on any backdrop (white navbar, dark footer, dark hero) with no white box around it
- **Working contact form with email** — Express + Nodemailer backend; team notification + user auto-reply on every submission
- **Dual practice areas** — separate Services & Expertise sections for Retail and CPG
- **5 verbatim case studies** — Grocery price/assortment, Luxury fashion segmentation, Fashion clienteling, CPG GTM transformation, CPG salesforce productivity
- **Working article modal** — Insights section opens full reader with ESC-to-close & body-scroll lock
- **Contact form with Industry Type select** — Retail / CPG / Others
- **Founder bios** — full Jayanta Banerjee bio + Krishanu Banerjee tech-focused profile
- **Why Synapse stat tile** — 100% Domain-Focused, 10-week avg. time to first value, 6+ international clients, Bengaluru HQ
- **Dynamic copyright year** via `new Date().getFullYear()`
- **Brand contact details** integrated — `contact@synapseconsulting.in`, Bangalore, Karnataka, India
- **Mobile-responsive** — fully responsive layout with mobile drawer navigation
- **Hash-based routing** — works on any static host without server config

---

## Production Deployment

The frontend (static bundle in `dist/`) and the backend (Node service) deploy separately, but the frontend expects `/api/contact` to reach the backend.

### Option A — Single host (recommended)

Run both behind one domain. Common setup on a VPS:

```bash
# Build the frontend
npm run build

# Run the backend with pm2
pm2 start server/index.js --name synapse-api

# nginx routes:
#   /api/*  → http://localhost:3001
#   /*      → /var/www/synapse/dist (your built frontend)
```

### Option B — Separate hosts

- **Frontend:** Netlify / Vercel / Cloudflare Pages / S3 + CloudFront — point at `dist/`
- **Backend:** Render / Railway / Fly.io / EC2 — start command `npm run server`, set `SMTP_*` and `CONTACT_EMAIL` as environment variables

If hosts differ, update the `fetch("/api/contact"…)` call in `ContactSection.tsx` to the backend's absolute URL, and configure CORS on the backend to allow the frontend origin.

### Option C — Serverless

Port `server/index.js` to a single function (e.g. `api/contact.js` on Vercel/Netlify). The handler body is portable — only the Express boilerplate goes away.

---

## Customization Notes

- **Replace logo:** swap `public/synapse-logo.png` (and the `.jpg` fallback). The `SynapseLogo` component reads from `/synapse-logo.png`.
- **Update copy:** all section copy lives inside its respective component file under `src/components/`.
- **Add real article content:** in `src/components/InsightsSection.tsx`, replace the `body` HTML on each article object with the long-form content.
- **Change recipient email:** edit `CONTACT_EMAIL` in `.env`.
- **Customize email templates:** edit the HTML in `buildNotificationEmail` / `buildAutoReplyEmail` inside `server/index.js`.

---

## Browser Support

Modern evergreen browsers. The build targets ES2020+ via Vite defaults.

---

© Synapse Consulting. Founded by Jayanta Banerjee & Krishanu Banerjee.
