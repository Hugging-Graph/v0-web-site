import type { Metadata } from "next"
import DAGAClientPage from "./DAGAClientPage"

export const metadata: Metadata = {
  title: "Distributed Agent Graph Architecture (DAGA) | HuggingGraph Technical Blueprints",
  description:
    "Learn how to build scalable, distributed AI agent systems using LangGraph. A comprehensive architectural pattern by Duncan Krebs for resilient multi-agent workflows.",
  keywords:
    "DAGA, Distributed Agent Architecture, LangGraph, Multi-Agent Systems, Duncan Krebs, AI Workflows, HuggingGraph",
  openGraph: {
    title: "Distributed Agent Graph Architecture (DAGA) | HuggingGraph",
    description: "Learn how to build scalable, distributed AI agent systems using LangGraph.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Distributed Agent Graph Architecture (DAGA) | HuggingGraph",
    description: "Learn how to build scalable, distributed AI agent systems using LangGraph.",
  },
}

export default function DAGAPage() {
  return <DAGAClientPage />
}
