"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { OfferingsGrid } from "@/components/offerings-grid"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <OfferingsGrid />
      <TestimonialsCarousel />
      <ContactForm />
      <Footer />
    </main>
  )
}
