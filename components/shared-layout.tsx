import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, ArrowLeft } from "lucide-react"

interface SharedLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  gradientFrom: string
  gradientTo: string
}

export default function SharedLayout({ children, title, subtitle, gradientFrom, gradientTo }: SharedLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DW</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900">Dunkware AI</h1>
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/ai-tutoring" className="text-slate-600 hover:text-blue-600 transition-colors">
                AI Tutoring
              </Link>
              <Link href="/smart-social" className="text-slate-600 hover:text-blue-600 transition-colors">
                Smart Social
              </Link>
              <Link href="/sat-ready" className="text-slate-600 hover:text-blue-600 transition-colors">
                SAT Ready
              </Link>
              <Link href="/adaptive-ai" className="text-slate-600 hover:text-blue-600 transition-colors">
                Adaptive AI
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                AI-Powered Platform
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                Join Early Access
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="space-y-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
              AI-Powered Feature
            </Badge>
            <h1 className={`text-5xl lg:text-6xl font-bold text-slate-900 leading-tight text-balance`}>
              <span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                {title}
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed text-pretty max-w-3xl mx-auto">{subtitle}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Try This Feature
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      {children}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Dunkware</h3>
                <p className="text-sm text-slate-400">AI that learns your child</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Personalized AI tutoring that adapts to your child, builds vocabulary with measurable mastery, and powers
              safe social play.
            </p>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">© 2025 Dunkware. AI that learns your child.</p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <Badge variant="outline" className="border-slate-600 text-slate-400">
                Pilot Program
              </Badge>
              <span className="text-sm text-slate-400">Built with ❤️ for families</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
