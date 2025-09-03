import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dunkware — Social & Learning AI for Kids | Growing in Circles",
  description:
    "Social, Learning & Gaming AI for kids — empowering their journey while parents stay at peace. Adaptive AI learning that grows with your child, safe social interactions, and gaming integration.",
  keywords: [
    "Dunkware",
    "Kids Learning AI",
    "Educational AI",
    "Safe Social Learning",
    "Gaming Integration",
    "Adaptive Learning",
    "Parent Dashboard",
    "Child Development",
    "AI Tutoring",
    "Learning Games",
    "Dunkcash Rewards",
  ],
  authors: [{ name: "Dunkware Team" }],
  creator: "Dunkware",
  publisher: "Dunkware",
  generator: "v0.app",
  openGraph: {
    title: "Dunkware — Social & Learning AI for Kids",
    description: "Social, Learning & Gaming AI for kids — empowering their journey while parents stay at peace.",
    url: "https://dunkware.com",
    siteName: "Dunkware",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunkware — Social & Learning AI for Kids",
    description: "Social, Learning & Gaming AI for kids — empowering their journey while parents stay at peace.",
    creator: "@dunkware",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
