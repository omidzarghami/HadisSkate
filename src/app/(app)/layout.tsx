import type { ReactNode } from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { Plus_Jakarta_Sans, Rubik } from 'next/font/google'
import React from 'react'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin', 'arabic'],
  variable: '--font-rubik',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  title: {
    default: 'حدیث اسکیت | Hadis Skate',
    template: '%s | حدیث اسکیت',
  },
  description: 'فروشگاه آنلاین اسکیت‌بورد، قطعات و لوازم اسکیت — hadisskate.ir',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={[rubik.variable, plusJakarta.variable].filter(Boolean).join(' ')}
      dir="rtl"
      lang="fa"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar />
          <LivePreviewListener />

          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
