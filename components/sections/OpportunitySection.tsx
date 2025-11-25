
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Shield, TrendingUp, Zap, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function OpportunitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const opportunities = [
    {
      icon: Globe,
      title: 'Geological Advantage',
      description: 'Ancient Archean formations (2.5-3.5 billion years) similar to world-class gold districts in Australia and South Africa.',
    },
    {
      icon: Shield,
      title: 'Regulatory Support',
      description: 'New Mining Code (2023) offers investment stability guarantees, tax benefits, and streamlined permitting processes.',
    },
    {
      icon: TrendingUp,
      title: 'Market Timing',
      description: 'Gold tokenization market projected to reach $16.1 trillion by 2030, with Madagascar positioned as a key supplier.',
    },
    {
      icon: Zap,
      title: 'Scalable Operations',
      description: 'Existing artisanal mining network provides foundation for rapid scaling and community integration.',
    },
  ]

  const metrics = [
    { value: '$16.1T', label: 'Projected Market Size', detail: 'Tokenized commodities by 2030' },
    { value: '97%', label: 'Gold Dominance', detail: 'Of tokenized precious metals' },
    { value: '$1B+', label: 'Current Market', detail: 'Tokenized precious metals 2024' },
  ]

  return (
    <section id="opportunity" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Investment <span className="gold-gradient">Opportunity</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Madagascar represents one of the world's last untapped gold frontiers, with massive potential
            amplified by blockchain innovation and favorable regulatory developments.
          </p>
        </motion.div>

        {/* Opportunity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-96 lg:h-auto rounded-2xl overflow-hidden"
          >
            <Image
              src="https://i.vimeocdn.com/video/508174155-511809b42103d368190794c59f08ad437de26531f85cce9ed1455b395aa38a4d-d?f=webp"
              alt="Madagascar mining landscape"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 px-4 py-2 rounded-full gold-bg-gradient text-black font-bold text-sm">
              Prime Location
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">Madagascar's Golden Potential</h3>
            
            {opportunities.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg gold-bg-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-gold-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gold-500/30 text-center hover:border-gold-500 transition-all hover:shadow-xl hover:shadow-gold-500/20"
            >
              <div className="text-4xl md:text-5xl font-bold gold-gradient mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-white mb-1">{metric.label}</div>
              <div className="text-sm text-gray-500">{metric.detail}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="p-8 md:p-12 rounded-2xl shimmer-effect bg-gradient-to-br from-gray-900 to-black border border-gold-500/50 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Explore the Opportunity?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to our detailed prospectus with geological surveys, financial projections,
            and investment terms. Limited availability.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gold-bg-gradient text-black font-bold text-lg hover:shadow-xl hover:shadow-gold-500/40 transition-all hover:-translate-y-1"
          >
            Request Detailed Prospectus
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
