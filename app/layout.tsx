
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crypto Gold - Madagascar Gold Mining & Blockchain Investment',
  description: "Unlock Madagascar's untapped gold potential through revolutionary blockchain technology. Where ancient treasures meet modern innovation.",
  keywords: 'gold mining, blockchain, Madagascar, cryptocurrency, investment, precious metals, tokenization',
  authors: [{ name: 'Crypto Gold' }],
  openGraph: {
    title: 'Crypto Gold - Golden Frontier Investment',
    description: "Unlock Madagascar's untapped gold potential through blockchain",
    images: ['/crypto-gold-logo-square.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
