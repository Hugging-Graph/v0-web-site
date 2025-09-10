"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"

export default function ManifestoClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-orange-600">Hugging Graph</span>
            </Link>
            <div className="flex items-center gap-4">
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

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/blueprints" className="inline-flex items-center text-orange-600 hover:text-orange-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blueprints
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className="bg-orange-600 text-white">Featured</Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Vision
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 text-balance">
            The AI Reusability Manifesto
          </h1>

          <p className="text-xl text-slate-600 mb-8 text-pretty">
            Building the Open, Distributed Future of Artificial Intelligence
          </p>

          <div className="flex items-center space-x-6 text-sm text-slate-500 border-b border-slate-200 pb-6">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Duncan Krebs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>September 2025</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-lg max-w-none">
          <div className="text-slate-700 leading-relaxed space-y-6">
            <p className="text-xl font-medium text-slate-800">
              The future of AI is not more proprietary models. It's not bigger parameter counts or closed ecosystems.
              The future of AI is{" "}
              <strong className="text-orange-600">reusable, composable, and democratically governed</strong>.
            </p>

            <p>
              We stand at a crossroads. Down one path lies a future dominated by a handful of proprietary systems, where
              AI capabilities remain locked behind corporate APIs and paywalls. Down the other lies an open ecosystem
              where AI agents, workflows, and capabilities can be shared, composed, and deployed by anyone, anywhere.
            </p>

            <p className="text-lg font-semibold text-orange-600">We choose the open path.</p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Composability Imperative</h2>

            <p>
              The most powerful AI systems of tomorrow won't be monolithic models—they'll be networks of specialized
              agents working together. Just as the internet's power comes from connecting billions of independent nodes,
              AI's true potential will emerge when we can seamlessly connect thousands of purpose-built agents into
              coherent systems.
            </p>

            <p>
              This isn't speculation. We see it happening today with frameworks like LangGraph, which provide the
              building blocks for agent workflows. But current approaches fall short of what we need:{" "}
              <strong>truly distributed, interoperable agent ecosystems</strong>.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              Beyond Function Calls: The Agent Communication Revolution
            </h2>

            <p>
              Protocols like MCP (Model Context Protocol) represent important progress, giving AI models structured ways
              to interact with external systems. But MCP is designed for a single model calling external functions—a
              hub-and-spoke architecture that doesn't scale to the multi-agent future we're building toward.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8">
              <p className="font-semibold text-orange-800">
                We need something fundamentally different: Multi-Agent Protocol (MAP)—an information bus for
                agent-driven endpoints.
              </p>
            </div>

            <p>
              MAP agents don't just call functions; they establish rich, contextual relationships with other agents.
              They negotiate capabilities, share state, and compose into larger intelligent systems. Where MCP connects
              a model to tools, MAP connects agents to agents, creating emergent intelligence from the network itself.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
              The Three Pillars of Open AI Infrastructure
            </h2>

            <p>To realize this vision, we need three foundational layers:</p>

            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Realm-Based Governance</h3>

            <p>
              <strong>Realms are the fundamental unit of AI governance.</strong> A realm defines a trust boundary where
              agents operate under consistent policies and security models. Realms can be:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Local</strong>: Agents running in the same cluster or organization
              </li>
              <li>
                <strong>Federated</strong>: Trusted partnerships between organizations
              </li>
              <li>
                <strong>Public</strong>: Open networks with transparent governance
              </li>
            </ul>

            <p>
              Each realm establishes its own policies for agent interaction, data sharing, and resource allocation.
              Agents from different realms can interact only when their governing policies explicitly allow it, creating
              a security model that scales from single machines to global networks.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Distributed Agent Runtimes</h3>

            <p>
              <strong>Agents must be first-class citizens of distributed infrastructure.</strong> Just as containers
              revolutionized application deployment, we need agent runtimes that make distributed AI systems as easy to
              deploy as web services.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Agent-Driven Cloud Infrastructure</h3>

            <p>
              <strong>The cloud itself must become agent-aware.</strong> Today's cloud platforms treat AI workloads like
              any other application—static resource allocations managed by human operators. Tomorrow's cloud platforms
              will be <strong>agent-native</strong>.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Breaking the Proprietary Model Monopoly</h2>

            <p>
              This architecture fundamentally challenges the current AI landscape. Instead of depending on a few
              massive, proprietary models, we create an ecosystem where:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Specialized agents outperform generalists.</strong> Rather than one model trying to do
                everything, purpose-built agents excel in their domains and compose into more capable systems.
              </li>
              <li>
                <strong>Innovation happens at the edges.</strong> New capabilities emerge from the community, not just
                from well-funded labs.
              </li>
              <li>
                <strong>No single point of failure exists.</strong> The system's intelligence is distributed across
                thousands of agents and realms.
              </li>
              <li>
                <strong>Open models thrive.</strong> When agents can easily compose and specialize, the advantages of
                proprietary models diminish.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Path Forward</h2>

            <p>
              This vision isn't theoretical—it's achievable with today's technology. We have the distributed systems
              knowledge, the machine learning capabilities, and the open-source community needed to build it.
            </p>

            <p>
              What we need now is <strong>coordination</strong>. We need developers building MAP-compatible agents,
              infrastructure providers implementing agent-aware cloud platforms, and organizations establishing the
              first experimental realms.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-8">
              <p className="font-semibold text-slate-800 text-center">
                We need to prove that open, composable AI systems can outperform proprietary alternatives.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Join the Movement</h2>

            <p>
              The transition to reusable AI won't happen automatically. It requires intentional effort from everyone who
              believes in an open, composable future:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Developers</strong>: Build agents with MAP compatibility. Design for composition, not isolation.
              </li>
              <li>
                <strong>Infrastructure Providers</strong>: Create agent-aware cloud platforms. Make distributed AI
                deployment as simple as deploying a web app.
              </li>
              <li>
                <strong>Organizations</strong>: Establish experimental realms. Test cross-realm collaboration protocols.
              </li>
              <li>
                <strong>Researchers</strong>: Focus on agent interoperability, not just model capabilities.
              </li>
              <li>
                <strong>Community</strong>: Share workflows, agents, and best practices. Make reusability the default.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Choice Is Ours</h2>

            <p>
              We can accept a future where AI remains concentrated in the hands of a few corporations, where innovation
              is gated by proprietary APIs and licensing restrictions.
            </p>

            <p>
              Or we can build something better:{" "}
              <strong className="text-orange-600">
                a distributed, democratic, and endlessly composable AI ecosystem
              </strong>
              .
            </p>

            <div className="bg-orange-600 text-white rounded-lg p-8 my-12 text-center">
              <p className="text-xl font-bold mb-4">
                The future of AI is reusable. The future of AI is open. The future of AI is in our hands.
              </p>
            </div>

            <hr className="my-8 border-slate-200" />

            <p className="text-sm text-slate-600 italic">
              This manifesto represents a call to action for everyone building the next generation of AI systems. Join
              the conversation at HuggingGraph.com and help us make this vision reality.
            </p>
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 mb-2">Written by</p>
              <p className="font-semibold text-slate-900">Duncan Krebs - Hugs & Graphs</p>
            </div>
            <Button
              onClick={() => alert("Sure I'll look around")}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              More Blueprints
            </Button>
          </div>
        </footer>
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
              <span className="font-bold text-lg text-white">Duncan Krebs - Hugs & Graphs</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
