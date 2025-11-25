
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lock, Database, Sparkles, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function TechnologySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: Lock,
      title: 'Security First',
      description: 'Military-grade encryption and multi-signature wallets protect all digital assets.',
    },
    {
      icon: Database,
      title: 'Full Transparency',
      description: 'Immutable blockchain records provide complete audit trail for all transactions.',
    },
    {
      icon: Sparkles,
      title: 'Smart Contracts',
      description: 'Automated, trustless execution of investment terms and profit distribution.',
    },
    {
      icon: CheckCircle,
      title: 'Regulatory Compliance',
      description: 'Built-in KYC/AML processes ensure full regulatory compliance across jurisdictions.',
    },
  ]

  return (
    <section id="technology" className="py-24 bg-black">
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
            Innovative <span className="gold-gradient">Technology</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our cutting-edge blockchain platform revolutionizes precious metals investment through
            transparent tokenization, secure custody, and seamless digital trading.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://slidebazaar.com/wp-content/uploads/2024/03/Crypto-PowerPoint-Theme.jpg"
              alt="Blockchain technology visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/80 backdrop-blur-sm border border-gold-500/50 text-sm font-semibold gold-gradient"
            >
              Blockchain Secured
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-black/80 backdrop-blur-sm border border-gold-500/50 text-sm font-semibold gold-gradient"
            >
              Smart Contracts
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Next-Generation Gold Tokenization
              </h3>
              <p className="text-gray-300">
                We leverage advanced blockchain technology to create the most transparent and secure
                precious metals investment platform, bridging traditional mining with digital finance.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-gold-500 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
