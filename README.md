# DesignBureau — Architecture & Design Studio Website

A full-stack website for **DesignBureau**, a multidisciplinary architecture and interior design studio based in Tbilisi, Georgia. Built with Next.js and TypeScript on the frontend, consuming a dedicated NestJS REST API backend, and deployed on Vercel.

🔗 **Live site:** [design-bureau.vercel.app](https://design-bureau.vercel.app)

---



## Features

### Public Site
- **Home** — Hero section with studio intro, selected work showcase, and philosophy statement
- **Projects** — Portfolio gallery of architecture and interior design work
- **Studio** — About page covering team, history, and the Design Georgia partnership
- **Services** — Overview of the studio's offerings
- **Contact** — Contact form and studio location info

### Admin Dashboard (`/admin/dashboard`)
A protected route accessible only to authenticated admins. Not visible to public visitors.

## Screenshots
<img width="959" height="413" alt="Screenshot 2026-03-10 153641" src="https://github.com/user-attachments/assets/037dc5c6-a8d2-408f-9640-f3cfbfbd44a1" />
<img width="959" height="412" alt="Screenshot 2026-03-10 153717" src="https://github.com/user-attachments/assets/dce9d955-d218-4058-af50-75112f880b8c" />
<img width="959" height="410" alt="Screenshot 2026-03-10 153850" src="https://github.com/user-attachments/assets/1e140c5e-5026-497d-840a-98a42218b290" />


---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Frontend Deployment | [Vercel](https://vercel.com/) |

---



## Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/ketevan20/design-bureau.git
cd design-bureau/my-app

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
```

Fill in your `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Admin Access

The admin dashboard is protected and requires authentication. Make sure `NEXT_PUBLIC_API_URL` in `.env.local` points to your running backend.

> **Note:** The `/admin/dashboard` route is not accessible to public visitors — unauthenticated users are redirected automatically.

---

## Deployment

### Vercel

1. Push to `main` — Vercel auto-deploys on every push.
2. In your Vercel project settings, add the environment variable:
```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

---

## Contact

**DesignBureau**
- info@designbureau.ge
- +995 32 2 123 456
- 12 Shota Rustaveli Ave, Tbilisi, Georgia

---

## Design

UI/UX Design by **[Guga Samukashvili](https://gugasamukashvili.framer.website/)**.

---

## License

This project is private. All rights reserved © 2024 DesignBureau.
