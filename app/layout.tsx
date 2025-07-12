import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fransiscus Radito - Web Developer Portfolio',
  description: 'Portofolio pribadi Radito: proyek, keterampilan, dan kontak.',
  generator: 'Next.js + v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}