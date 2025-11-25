
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Lock, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Vision', href: '#about' },
      { label: 'Team', href: '#about' },
    ],
    investment: [
      { label: 'Opportunity', href: '#opportunity' },
      { label: 'Technology', href: '#technology' },
      { label: 'Investor Portal', href: 'https://skylark.abacusai.app', external: true },
    ],
    resources: [
      { label: 'Request Prospectus', href: '#contact' },
      { label: 'Contact Us', href: '#contact' },
    ],
  }

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="#hero" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="https://static.abacusaicdn.net/images/717d92aa-621e-44f8-b1f7-e66d23e1ff08.png"
                  alt="Crypto Gold Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold gold-gradient">Crypto Gold</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Revolutionizing precious metals investment through blockchain technology and Madagascar's untapped gold potential.
            </p>
            <Link
              href="https://skylark.abacusai.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gold-bg-gradient text-black text-sm font-semibold hover:shadow-lg transition-all"
            >
              <Lock className="w-4 h-4" />
              Investor Portal
            </Link>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Investment</h3>
            <ul className="space-y-2">
              {footerLinks.investment.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="text-gray-400 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Crypto Gold. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-gold-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
