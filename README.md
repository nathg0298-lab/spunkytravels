# Spunky Travel Market

A vibrant, playful landing page for **Spunky Travel Market** — a discount marketplace for flights, hotels, food, entertainment, car rentals, bill payments, and more.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Google Fonts** (Baloo 2 + Nunito)
- Custom SVG icon system
- Scroll-reveal animations + mouse parallax

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1: Git Push (Recommended)
1. Push this repo to GitHub/GitLab
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Click **Deploy** — zero config needed

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design tokens + animations
│   ├── layout.tsx        # Root layout + meta + fonts
│   └── page.tsx          # Page composition
├── components/
│   ├── Icons.tsx          # Custom SVG icon library
│   ├── ClientEffects.tsx  # Scroll reveal + parallax
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WaveDivider.tsx
│   ├── Marquee.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── Stats.tsx
│   ├── Reviews.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── lib/
│   └── constants.ts      # All data (services, steps, reviews, stats)
public/
└── spunky-mascot.jpg     # Mascot image
```

## Customization

- **Colors**: Edit CSS variables in `globals.css` under `:root`
- **Services**: Edit `SERVICES` array in `lib/constants.ts`
- **Copy/Text**: Each section component has its own text inline
- **Mascot**: Replace `public/spunky-mascot.jpg`
