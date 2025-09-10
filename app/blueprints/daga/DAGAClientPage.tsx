"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"

export default function DAGAClientPage() {
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

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/blueprints">
            <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blueprints
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className="bg-orange-600 text-white">Architecture</Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Featured
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Distributed Agent Graph Architecture (DAGA)
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            A comprehensive architectural pattern for building scalable, distributed AI agent systems using LangGraph.
            Learn how to design resilient multi-agent workflows that can handle complex, real-world scenarios.
          </p>

          <div className="flex items-center space-x-6 text-sm text-slate-500 border-b border-slate-200 pb-6">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="font-medium">Duncan Krebs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>September 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p className="text-slate-700 leading-relaxed">
                As AI systems become more complex, the need for distributed, scalable agent architectures becomes
                critical. The Distributed Agent Graph Architecture (DAGA) pattern provides a robust framework for
                building multi-agent systems that can scale horizontally while maintaining coordination and consistency.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Core Principles</h2>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
                <h3 className="font-semibold text-orange-800 mb-2">Key Design Principles</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>
                    <strong>Decentralized Coordination:</strong> Agents coordinate through message passing rather than
                    centralized control
                  </li>
                  <li>
                    <strong>Fault Tolerance:</strong> System continues operating even when individual agents fail
                  </li>
                  <li>
                    <strong>Horizontal Scalability:</strong> Add more agents to handle increased load
                  </li>
                  <li>
                    <strong>Composable Workflows:</strong> Agents can be combined in different configurations
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Architecture Overview</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                DAGA consists of three main components working together to create a resilient distributed system:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Agent Nodes</h3>
                  <p className="text-sm text-slate-600">
                    Individual processing units that handle specific tasks and communicate with other agents
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Message Bus</h3>
                  <p className="text-sm text-slate-600">
                    Reliable communication layer that handles message routing and delivery guarantees
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Coordination Layer</h3>
                  <p className="text-sm text-slate-600">
                    Manages workflow state, handles failures, and ensures system consistency
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Implementation with LangGraph</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                LangGraph provides the perfect foundation for implementing DAGA patterns. Here's how the key components
                map to LangGraph concepts:
              </p>

              <div className="bg-slate-900 text-slate-100 p-6 rounded-lg mb-6 overflow-x-auto">
                <pre className="text-sm">
                  <code>{`# Example DAGA implementation with LangGraph
from langgraph import StateGraph, END
from typing import TypedDict, List

class DAGAState(TypedDict):
    messages: List[str]
    agent_results: dict
    coordination_state: dict

def create_distributed_workflow():
    workflow = StateGraph(DAGAState)
    
    # Add agent nodes
    workflow.add_node("coordinator", coordinator_agent)
    workflow.add_node("processor_1", processing_agent)
    workflow.add_node("processor_2", processing_agent)
    workflow.add_node("aggregator", aggregation_agent)
    
    # Define distributed flow
    workflow.add_edge("coordinator", "processor_1")
    workflow.add_edge("coordinator", "processor_2")
    workflow.add_edge("processor_1", "aggregator")
    workflow.add_edge("processor_2", "aggregator")
    
    return workflow.compile()`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Benefits & Use Cases</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                DAGA is particularly effective for scenarios requiring high availability, scalability, and complex
                coordination:
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Multi-modal AI pipelines</strong> where different agents handle text, image, and audio
                    processing
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Real-time decision systems</strong> that need to process multiple data streams
                    simultaneously
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Collaborative AI workflows</strong> where agents specialize in different domains
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Next Steps</h2>
              <p className="text-slate-700 leading-relaxed">
                Get a stable DAGA prototype in our GitHub organization with a message based agent runtime showing an
                example of HuggingGraph worklows in a distributed architecture.
              </p>
            </section>
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
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => alert("Sure I'll look around")}
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
