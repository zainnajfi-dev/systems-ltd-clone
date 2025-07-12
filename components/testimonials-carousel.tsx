"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"

export function TestimonialsCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index)
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 0
      const gap = 24 // gap-6 = 24px
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      })
    }
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonials.length
    scrollToIndex(newIndex)
  }

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    scrollToIndex(newIndex)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading <span className="text-secondary">Financial Institutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we've helped banks and financial institutions transform their digital capabilities and achieve
            remarkable results across the globe.
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-primary hover:text-white transition-colors duration-300 bg-white border-2 border-gray-200 hover:border-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.slice(0, 8).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-primary hover:text-white transition-colors duration-300 bg-white border-2 border-gray-200 hover:border-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-96"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-white border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <img
                        src={testimonial.logo || "/placeholder.svg"}
                        alt={testimonial.company}
                        className="h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `/placeholder.svg?height=48&width=120&text=${encodeURIComponent(testimonial.company)}`
                        }}
                      />
                    </div>

                    <div className="mb-6">
                      <Quote className="h-8 w-8 text-secondary mb-4" />
                      <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>

                    <div className="mb-6 border-t pt-6">
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-secondary font-medium">{testimonial.title}</p>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>

                    <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold">
                      Read Press Release →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300 bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={testimonial.company}
                      className="h-10 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = `/placeholder.svg?height=40&width=100&text=${encodeURIComponent(testimonial.company)}`
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <Quote className="h-6 w-6 text-secondary mb-3" />
                    <blockquote className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</blockquote>
                  </div>

                  <div className="mb-4 border-t pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-secondary font-medium text-sm">{testimonial.title}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>

                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold">
                    Read Press Release →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
