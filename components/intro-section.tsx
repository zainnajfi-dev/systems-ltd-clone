"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, TrendingUp, Shield, Zap } from "lucide-react"

export function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Accelerate your digital journey with cutting-edge solutions",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Bank-grade security with full regulatory compliance",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast systems that scale with your growth",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Powering banking transformation <span className="text-secondary">at scale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with financial institutions worldwide to deliver innovative solutions that drive digital
            transformation and create exceptional customer experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                In today's rapidly evolving financial landscape, banks must embrace digital transformation to remain
                competitive and meet customer expectations. Our comprehensive suite of banking solutions empowers
                financial institutions to modernize their operations, enhance customer experiences, and drive
                sustainable growth.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                From core system modernization to cutting-edge digital banking platforms, we provide end-to-end
                solutions that transform traditional banking into agile, customer-centric operations. Our expertise
                spans across regulatory compliance, risk management, and innovative fintech integrations.
              </p>

              <div className="flex items-start space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  <strong>25+ years</strong> of experience in financial services technology
                </p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  <strong>200+ successful</strong> banking transformation projects delivered
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  <strong>50+ countries</strong> where our solutions are deployed
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/banking-transformation.png"
                alt="Banking transformation illustration"
                className="rounded-2xl shadow-2xl w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=400&width=500&text=Banking+Transformation"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
