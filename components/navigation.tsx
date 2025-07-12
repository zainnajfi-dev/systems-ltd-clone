"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form")
    contactSection?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logos/systems-limited-logo.png"
              alt="Systems Limited"
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=32&width=120&text=Systems+Limited"
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Industries
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Solutions
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Careers
            </a>
            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-semibold"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4 bg-white"
          >
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Industries
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Solutions
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Careers
              </a>
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white w-full font-semibold"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
