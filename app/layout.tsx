import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "HuggingGraph — Reusable AI Workflows with LangGraph | Duncan Krebs",
  description:
    "The ultimate workflow hub for reusable AI workflows. HuggingGraph by Duncan Krebs enables developers to share, compose, and extend AI workflows built with LangGraph. Discover curated AI workflows for your next project.",
  keywords: [
    "HuggingGraph",
    "Hugging Graph",
    "Reusable AI Workflows",
    "AI Workflows",
    "Duncan Krebs",
    "Workflow hub",
    "LangGraph",
    "AI workflow repository",
    "Conversational AI",
    "Workflow automation",
    "AI development tools",
  ],
  authors: [{ name: "Duncan Krebs" }],
  creator: "Duncan Krebs",
  publisher: "HuggingGraph",
  generator: "v0.app",
  openGraph: {
    title: "HuggingGraph — Reusable AI Workflows with LangGraph",
    description:
      "The workflow hub for reusable AI workflows. Share, compose, and extend AI workflows built with LangGraph.",
    url: "https://hugginggraph.com",
    siteName: "HuggingGraph",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HuggingGraph — Reusable AI Workflows with LangGraph",
    description:
      "The workflow hub for reusable AI workflows by Duncan Krebs. Share, compose, and extend AI workflows built with LangGraph.",
    creator: "@duncankrebs",
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
