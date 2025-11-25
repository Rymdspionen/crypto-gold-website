
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Lock, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#opportunity', label: 'Opportunity' },
    { href: '#technology', label: 'Technology' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="https://static.abacusaicdn.net/images/717d92aa-621e-44f8-b1f7-e66d23e1ff08.png"
                alt="Crypto Gold Logo"
                fill
                className="object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <span className="text-2xl font-bold gold-gradient">Crypto Gold</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Investor Portal Button */}
            <Link
              href="https://skylark.abacusai.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg gold-bg-gradient text-black font-semibold hover:shadow-lg hover:shadow-gold-500/30 transition-all hover:-translate-y-0.5"
            >
              <Lock className="w-4 h-4" />
              Investor Portal
            </Link>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="px-6 py-2 rounded-lg bg-white/10 border border-gold-500 text-gold-500 font-semibold hover:bg-gold-500 hover:text-black transition-all"
            >
              Get Prospectus
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-gold-500 transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://skylark.abacusai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg gold-bg-gradient text-black font-semibold justify-center"
              >
                <Lock className="w-4 h-4" />
                Investor Portal
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg bg-white/10 border border-gold-500 text-gold-500 font-semibold text-center"
              >
                Get Prospectus
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
