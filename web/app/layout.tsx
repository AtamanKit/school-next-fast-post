import { ThemeProvider } from '../context/themeContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rodion Next App',
  description: 'A simple application for Rodion to test some functionality of Next.js, FastAPI, PostgreSQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="lg:px-60 md:px-24 px-8">
            <Navbar />
            {children}
          </div>
        </body>
      </html>
    </ThemeProvider>
  )
}
