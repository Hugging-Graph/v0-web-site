import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, GitBranch, Workflow, Users } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About HuggingGraph - Reusable AI Workflows by Duncan Krebs",
  description:
    "Learn about the future of reusable AI workflows with HuggingGraph. Duncan Krebs explains why LangGraph-based workflow hubs are inevitable and how they'll transform AI development.",
  keywords: [
    "HuggingGraph",
    "Hugging Graph",
    "Duncan Krebs",
    "Reusable AI Workflows",
    "AI Workflows",
    "Workflow hub",
    "LangGraph workflows",
    "AI development",
    "Workflow automation",
    "Conversational AI",
  ],
  openGraph: {
    title: "About HuggingGraph - The Future of AI Workflows",
    description:
      "Duncan Krebs explains why reusable AI workflows built with LangGraph are inevitable and how HuggingGraph will become the workflow hub for developers.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About HuggingGraph - Reusable AI Workflows by Duncan Krebs",
    description:
      "Learn why LangGraph-based workflow hubs are inevitable and how HuggingGraph will transform AI development.",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div>
                <h1 className="text-3xl font-bold text-orange-600">Hugging Graph</h1>
                <p className="text-sm text-slate-600 text-center">Reusable AI Workflows</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-orange-600 mb-6 text-balance">
            The Future of AI Workflows Is Inevitable
          </h1>
          <p className="text-xl text-slate-600 mb-8 text-pretty">
            Wiring together complex AI workflows has long been one of the toughest challenges in applied AI. That
            reality is beginning to change.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            {/* Why LangGraph Matters */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <GitBranch className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Why LangGraph Matters</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                LangGraph provides a powerful abstraction for AI workflows: state-managed graphs with clear starts and
                ends. It is not designed to be a fully distributed multi-agent framework, but rather the groundwork for
                building reusable agents and workflows.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This position is strikingly similar to the role Hugging Face pipelines played for models. Hugging Face
                didn't solve every problem in NLP — it gave the community a way to share reusable building blocks. In
                the same way, LangGraph has the potential to become the foundation for reusable workflows. With a little
                nudge and an active community, it can open the door to collaborative, composable AI development.
              </p>
            </div>

            {/* Reusable Workflows */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Workflow className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">Reusable Workflows, Not Reinvented Wheels</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                The opportunity lies in treating workflows the same way Hugging Face treats models: as shareable,
                remixable, and composable units. A library of LangGraph-based workflows could emerge, where developers
                can simply pull in what they need:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />A quiz agent workflow that
                    contextualizes questions from an input document.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />A document anomaly
                    detection pipeline that applies multi-stage processing.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />A tutoring workflow that
                    blends conversational checks with interactive exercises.
                  </li>
                </ul>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Instead of reinventing controllers, each of these could be downloaded, extended, and composed into new
                systems.
              </p>
            </div>

            {/* The Missing Piece */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900 m-0">The Missing Piece: UI Glue</h2>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                For workflows to be truly reusable, they need to connect seamlessly with interfaces. A promising
                approach is an extendable UI canvas protocol that streams messages bidirectionally — not only text, but
                typed components such as quizzes, charts, diagrams, and interactive elements.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This allows LangGraph workflows running on the backend to dynamically drive rich, interactive frontends.
                Users can click, select, or manipulate components, and their actions flow back into the workflow as
                structured input. This kind of protocol-driven canvas provides the glue needed to make workflows usable
                and composable across different applications.
              </p>
            </div>

            {/* Where It Leads */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Where It Leads</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The path forward is simple but powerful: keep workflows modular, shareable, and easy to compose. If that
                vision takes hold, the outcome is clear:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Entire workflows and subgraphs can be published and shared like open-source packages.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Developers can assemble complex systems from proven pieces instead of rewriting logic from scratch.
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />A new ecosystem of
                    reusable AI agents and workflows can emerge, spanning everything from education to enterprise
                    automation.
                  </li>
                </ul>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg font-medium">
                This is not speculative — it's <strong>inevitable</strong>. The only open question is whether the
                ecosystem will form in a scattered way, or whether a common hub like HuggingGraph.com will provide the
                community and infrastructure to make it real.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center bg-slate-900 rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-1">Hugs & Graphs</h3>
              <p className="text-slate-300 mb-2 text-2xl font-bold">Duncan Krebs - Founder</p>
            </div>
          </div>
        </div>
      </section>

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
            <p className="text-sm text-slate-400">© 2025 HuggingGraph.</p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <Badge variant="outline" className="border-slate-600 text-slate-400">
                Phase 1
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
