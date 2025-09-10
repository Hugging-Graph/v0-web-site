import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Technical Blueprints | HuggingGraph — Reusable AI Workflows with LangGraph",
  description:
    "Technical blueprints and architectural patterns for building reusable AI workflows with LangGraph. Learn from expert implementations by Duncan Krebs and the HuggingGraph community.",
  keywords:
    "HuggingGraph, AI Workflows, LangGraph, Technical Blueprints, Duncan Krebs, Distributed Agent Architecture, AI Patterns",
  openGraph: {
    title: "Technical Blueprints | HuggingGraph",
    description: "Technical blueprints and architectural patterns for building reusable AI workflows with LangGraph.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Blueprints | HuggingGraph",
    description: "Technical blueprints and architectural patterns for building reusable AI workflows with LangGraph.",
  },
}

// Blueprint articles data - easy to add new articles
const blueprints = [
  {
    id: "manifesto",
    title: "The AI Reusability Manifesto",
    description:
      "Building the open, distributed future of artificial intelligence. A comprehensive vision for reusable, composable AI systems that break free from proprietary model monopolies.",
    author: "Duncan Krebs",
    readTime: "15 min read",
    category: "Vision",
    tags: ["Open AI", "Reusability", "Distributed Systems", "Manifesto", "MAP Protocol"],
    publishDate: "September 2025",
    featured: true,
  },
  {
    id: "daga",
    title: "Distributed Agent Graph Architecture (DAGA)",
    description:
      "A comprehensive architectural pattern for building scalable, distributed AI agent systems using LangGraph. Learn how to design resilient multi-agent workflows.",
    author: "Duncan Krebs",
    readTime: "12 min read",
    category: "Architecture",
    tags: ["LangGraph", "Multi-Agent", "Distributed Systems", "Architecture"],
    publishDate: "September 2025",
    featured: true,
  },
  // Easy to add more articles here
  // {
  //   id: 'workflow-patterns',
  //   title: 'Common Workflow Patterns',
  //   description: 'Essential patterns for building robust AI workflows...',
  //   author: 'Duncan Krebs',
  //   readTime: '8 min read',
  //   category: 'Patterns',
  //   tags: ['Patterns', 'Best Practices'],
  //   publishDate: 'Coming Soon'
  // }
]

export default function BlueprintsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-orange-600">Hugging Graph</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/blueprints">
                <Button
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Blueprints
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  About
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">Technical Blueprints</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Deep-dive technical articles and architectural patterns for building production-ready AI workflows. Learn
            from real-world implementations and expert insights.
          </p>
        </div>

        {/* Blueprints Grid */}
        <div className="grid gap-8 md:gap-12">
          {blueprints.map((blueprint) => (
            <Card key={blueprint.id} className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      {blueprint.category}
                    </Badge>
                    {blueprint.featured && <Badge className="bg-orange-600 text-white">Featured</Badge>}
                  </div>
                  <div className="flex items-center text-sm text-slate-500 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blueprint.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blueprint.author}</span>
                    </div>
                  </div>
                </div>

                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {blueprint.title}
                </CardTitle>

                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  {blueprint.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {blueprint.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/blueprints/${blueprint.id}`}>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white group">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>Published {blueprint.publishDate}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">More Blueprints Coming Soon</h3>
            <p className="text-slate-600 mb-4">
              We're working on more technical blueprints covering workflow patterns, optimization strategies, and
              advanced LangGraph techniques.
            </p>
            <Link href="/community">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent">
                Join Community for Updates
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">Hugging Graph</h3>
            <p className="text-slate-300 max-w-md mx-auto">
              Building the future of reusable AI workflows with LangGraph
            </p>
          </div>
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400 text-sm">
              © 2025 HuggingGraph. Built with ❤️ by{" "}
              <span className="font-bold text-lg text-white">Duncan Krebs - Founder</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
