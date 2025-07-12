# Systems Limited Financial Services Clone

A pixel-perfect clone of the Systems Limited Financial Services industry page built with Next.js 13 App Router, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Full-screen background with compelling headline and CTA
- **Contact Form**: Responsive form with client-side validation and success toast
- **Intro Section**: Two-column layout with fade-in animations
- **Offerings Grid**: 8 service cards with hover effects and staggered animations
- **Testimonials Carousel**: Horizontally scrollable on desktop, stacked on mobile
- **Responsive Design**: Mobile-first approach with seamless breakpoints
- **Smooth Animations**: Framer Motion scroll-triggered animations throughout
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd systems-limited-clone
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build and Deploy

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Deploy to Vercel

1. Install Vercel CLI:
\`\`\`bash
npm i -g vercel
\`\`\`

2. Deploy:
\`\`\`bash
vercel
\`\`\`

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── hero-section.tsx
│   ├── contact-form.tsx
│   ├── intro-section.tsx
│   ├── offerings-grid.tsx
│   └── testimonials-carousel.tsx
├── data/
│   ├── offerings.js
│   └── testimonials.js
├── public/
├── tailwind.config.ts
└── README.md
\`\`\`

## Customization

### Brand Colors

The project uses Systems Limited's brand colors defined in `tailwind.config.ts`:
- Primary: `#1E2A38` (Dark Blue)
- Secondary: `#00AAB2` (Teal)
- Neutral grays for text and backgrounds

### Content

Update the content in the data files:
- `data/offerings.js` - Service offerings
- `data/testimonials.js` - Customer testimonials

### Images

Replace placeholder images in the `public/` directory with actual assets.

## Performance

- Optimized images with Next.js Image component
- Lazy loading for off-screen content
- Minimal bundle size with tree-shaking
- Server-side rendering for improved SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes only.
