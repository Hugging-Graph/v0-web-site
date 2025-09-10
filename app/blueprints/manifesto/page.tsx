import type { Metadata } from "next"
import ManifestoClientPage from "./ManifestoClientPage"

export const metadata: Metadata = {
  title: "The AI Reusability Manifesto | HuggingGraph — Reusable AI Workflows with LangGraph",
  description:
    "Building the open, distributed future of artificial intelligence. A comprehensive vision for reusable, composable AI systems that break free from proprietary model monopolies by Duncan Krebs.",
  keywords:
    "AI Reusability Manifesto, Open AI, Distributed AI, MAP Protocol, Multi-Agent Systems, Duncan Krebs, HuggingGraph, Composable AI, Democratic AI",
  openGraph: {
    title: "The AI Reusability Manifesto | HuggingGraph",
    description:
      "Building the open, distributed future of artificial intelligence. A vision for reusable, composable AI systems.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Reusability Manifesto | HuggingGraph",
    description:
      "Building the open, distributed future of artificial intelligence. A vision for reusable, composable AI systems.",
  },
}

export default function ManifestoPage() {
  return <ManifestoClientPage />
}
