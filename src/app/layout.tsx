import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mackenzie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-l text-lg text-grey-m">{children}</body>
    </html>
  )
}
