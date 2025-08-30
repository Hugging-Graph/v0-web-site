import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, Download, GitBranch, Clock, User, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock workflow data
const workflows = [
  {
    id: "quiz-agent-pro",
    name: "Quiz Agent Pro",
    description:
      "Advanced quiz generation and evaluation workflow with multiple choice, true/false, and open-ended questions.",
    author: "Duncan Krebs",
    downloads: "2.3k",
    stars: 156,
    category: "Education",
    tags: ["quiz", "education", "evaluation", "langchain"],
    lastUpdated: "2 days ago",
    featured: true,
  },
  {
    id: "chart-generator",
    name: "Chart Generator",
    description: "Transform data into beautiful charts and visualizations with natural language descriptions.",
    author: "AI Community",
    downloads: "1.8k",
    stars: 89,
    category: "Visualization",
    tags: ["charts", "visualization", "data", "analysis"],
    lastUpdated: "1 week ago",
    featured: true,
  },
  {
    id: "document-summarizer",
    name: "Document Summarizer",
    description: "Intelligent document summarization with key point extraction and customizable length.",
    author: "Research Team",
    downloads: "3.1k",
    stars: 203,
    category: "Text Processing",
    tags: ["summarization", "nlp", "documents", "extraction"],
    lastUpdated: "3 days ago",
    featured: false,
  },
  {
    id: "code-reviewer",
    name: "Code Reviewer",
    description: "Automated code review workflow with security checks, best practices, and improvement suggestions.",
    author: "DevTools Inc",
    downloads: "1.2k",
    stars: 67,
    category: "Development",
    tags: ["code", "review", "security", "best-practices"],
    lastUpdated: "5 days ago",
    featured: false,
  },
  {
    id: "customer-support-bot",
    name: "Customer Support Bot",
    description: "Multi-turn customer support workflow with escalation handling and knowledge base integration.",
    author: "Support Systems",
    downloads: "4.2k",
    stars: 312,
    category: "Customer Service",
    tags: ["support", "chatbot", "escalation", "knowledge-base"],
    lastUpdated: "1 day ago",
    featured: true,
  },
  {
    id: "content-moderator",
    name: "Content Moderator",
    description: "Automated content moderation with toxicity detection, spam filtering, and custom rule sets.",
    author: "Safety First",
    downloads: "987",
    stars: 45,
    category: "Moderation",
    tags: ["moderation", "safety", "toxicity", "filtering"],
    lastUpdated: "1 week ago",
    featured: false,
  },
]

const categories = [
  "All",
  "Education",
  "Visualization",
  "Text Processing",
  "Development",
  "Customer Service",
  "Moderation",
]

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/hugger-logo.png" alt="HuggingGraph" width={40} height={40} className="rounded-lg" />
                <div>
                  <h1 className="text-xl font-bold text-slate-900">HuggingGraph</h1>
                  <p className="text-xs text-slate-600">Reusable AI Workflows</p>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/models" className="text-slate-600 hover:text-slate-900 transition-colors">
                Models
              </Link>
              <Link href="/workflows" className="text-blue-600 font-medium">
                Workflows
              </Link>
              <Link href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors">
                Docs
              </Link>
              <Link href="/community" className="text-slate-600 hover:text-slate-900 transition-colors">
                Community
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-slate-900">AI Workflows</h1>
              <p className="text-xl text-slate-600">
                Discover and share reusable LangGraph workflows for every use case
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search workflows..." className="pl-10 h-12 text-base" />
              </div>
              <div className="flex gap-3">
                <Select defaultValue="all">
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="recent">Recently Updated</SelectItem>
                    <SelectItem value="downloads">Most Downloads</SelectItem>
                    <SelectItem value="stars">Most Stars</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="lg" className="h-12 bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workflows */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-5 w-5 text-yellow-500" />
            <h2 className="text-2xl font-bold text-slate-900">Featured Workflows</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {workflows
              .filter((w) => w.featured)
              .map((workflow) => (
                <Card key={workflow.id} className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">
                          <Link href={`/workflows/${workflow.id}`} className="hover:text-blue-600 transition-colors">
                            {workflow.name}
                          </Link>
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <User className="h-3 w-3" />
                          <span>{workflow.author}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200">
                        Featured
                      </Badge>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">{workflow.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {workflow.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {workflow.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{workflow.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            <span>{workflow.downloads}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            <span>{workflow.stars}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{workflow.lastUpdated}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-3 w-3 mr-1" />
                          Install
                        </Button>
                        <Button variant="outline" size="sm">
                          <GitBranch className="h-3 w-3 mr-1" />
                          Fork
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Workflows */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">All Workflows</h2>
            <div className="text-sm text-slate-600">Showing {workflows.length} workflows</div>
          </div>

          <div className="space-y-4">
            {workflows.map((workflow) => (
              <Card key={workflow.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">
                          <Link href={`/workflows/${workflow.id}`} className="hover:text-blue-600 transition-colors">
                            {workflow.name}
                          </Link>
                        </h3>
                        {workflow.featured && (
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200">
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline">{workflow.category}</Badge>
                      </div>

                      <p className="text-slate-600 leading-relaxed">{workflow.description}</p>

                      <div className="flex items-center gap-6 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{workflow.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{workflow.downloads} downloads</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          <span>{workflow.stars} stars</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Updated {workflow.lastUpdated}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {workflow.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 ml-6">
                      <Button size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Install
                      </Button>
                      <Button variant="outline" size="sm">
                        <GitBranch className="h-3 w-3 mr-1" />
                        Fork
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Workflows
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
