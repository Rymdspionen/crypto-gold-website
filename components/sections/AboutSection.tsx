
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Award, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: MapPin,
      title: 'Strategic Location',
      description: "Madagascar's Precambrian greenstone belts offer world-class geological formations with exceptional gold potential.",
    },
    {
      icon: Award,
      title: 'Proven Reserves',
      description: 'Historical production of 70+ tons with 15 active projects at various development stages across the island.',
    },
    {
      icon: Users,
      title: 'Established Network',
      description: 'Over 600,000 people involved in artisanal mining, creating a robust foundation for scaled operations.',
    },
    {
      icon: Sparkles,
      title: 'Innovation Focus',
      description: 'Combining traditional mining expertise with blockchain tokenization for transparent, secure investments.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-black">
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
            About <span className="gold-gradient">Crypto Gold</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We're pioneering the intersection of traditional precious metals mining and cutting-edge blockchain technology,
            unlocking unprecedented investment opportunities in Madagascar's vast gold reserves.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg gold-bg-gradient">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gold-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Card with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Vision Text */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gold-500/30">
            <h3 className="text-2xl font-bold mb-4 gold-gradient">Our Vision</h3>
            <p className="text-gray-300 mb-4">
              To revolutionize precious metals investment by creating the world's first fully transparent,
              blockchain-backed gold mining ecosystem that benefits investors, local communities, and the environment.
            </p>
            <p className="text-gray-300">
              Through innovative technology and sustainable practices, we're transforming how the world invests in gold
              while supporting Madagascar's economic development.
            </p>
          </div>

          {/* Image with Floating Badges */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://i.ytimg.com/vi/z3LI8c7yskE/maxresdefault.jpg"
              alt="Professional gold bars representing investment opportunity"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Floating Badge Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-8 left-8 p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-gold-500/50"
            >
              <div className="text-3xl font-bold gold-gradient">15+</div>
              <div className="text-sm text-gray-300">Active Projects</div>
            </motion.div>

            {/* Floating Badge Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-8 right-8 p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-gold-500/50"
            >
              <div className="text-3xl font-bold gold-gradient">3-4</div>
              <div className="text-sm text-gray-300">Tons/Year Current</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
