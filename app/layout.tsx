import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GlobalHeader from '../components/GlobalHeader/GlobalHeader'
import LocalHeader from '../components/LocalHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CorporateCo - Leading Innovation',
  description: 'Welcome to CorporateCo - Shaping the future of technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <GlobalHeader />
          <LocalHeader />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center">
                <p>&copy; 2024 CorporateCo. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 