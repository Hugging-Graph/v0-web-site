import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Share2, Zap, Users, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Image src="/hugger-face.png" alt="HuggingGraph" width={48} height={48} className="rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold text-slate-900">HuggingGraph</h1>
                <p className="text-sm text-slate-600">Reusable AI Workflows</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Button size="sm" asChild>
                <Link href="/about">About</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                  Phase 1 • Community Establishment
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight text-balance">
                  Reusable AI Workflows. <span className="text-blue-600">Shared, Composed, Extended</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed text-pretty">
                  What HuggingFace did for models, HuggingGraph does for workflows. Share, version, and compose
                  LangGraph modules like never before.
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Open Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>LangGraph Native</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hugger-transparent.png"
                  alt="HuggingGraph AI Workflows"
                  width={500}
                  height={500}
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              The Infrastructure Play for AI Development
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              Like HuggingFace unlocked models, HuggingGraph will unlock workflows — starting with a library of
              shareable, remixable graphs anyone can extend.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Share & Discover</CardTitle>
                <CardDescription>
                  Browse a curated library of reusable AI workflows. From quiz agents to chart generators, find the
                  perfect graph for your project.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Compose & Remix</CardTitle>
                <CardDescription>
                  Mix and match workflows like building blocks. Compose multiple graphs into sophisticated multi-agent
                  systems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Deploy & Scale</CardTitle>
                <CardDescription>
                  Drop-in LangGraph modules with protocol-driven canvases. Seamless integration from backend workflows
                  to UI components.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">From Concept to Production in Minutes</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              Don't reinvent a quiz agent, retrieval chain, or event handler — just grab a graph.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Browse & Search</h3>
              <p className="text-slate-600">
                Search by type: quiz, tutor, chart, summarizer. Find exactly what you need from our growing library of
                workflows.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Install & Configure</h3>
              <p className="text-slate-600">
                Install via pip/npm, load as LangGraph. Versioned, documented, and ready to plug into your app's
                backend.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Deploy & Extend</h3>
              <p className="text-slate-600">
                Use our common protocol interface for frontend components. Extend, remix, and share your improvements
                back to the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
            Ready to Build the Future of AI Workflows?
          </h2>
          <p className="text-xl text-blue-100 text-pretty">
            Join the community building reusable AI infrastructure. Start with 10 really good graphs. The network
            effects will do the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/workflows">Browse Workflows</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/community">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="https://github.com/hugging-graph" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Image src="/hugger-face.png" alt="HuggingGraph" width={32} height={32} className="rounded" />
              <div>
                <h3 className="font-bold text-white">HuggingGraph</h3>
                <p className="text-sm text-slate-400">Reusable AI Workflows</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              The HuggingFace for workflows. Share, compose, and extend AI workflows with the power of LangGraph.
            </p>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">© 2025 HuggingGraph. Founded by Duncan Krebs.</p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <Badge variant="outline" className="border-slate-600 text-slate-400">
                Phase 1
              </Badge>
              <span className="text-sm text-slate-400">Built with ❤️ for the AI community</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
