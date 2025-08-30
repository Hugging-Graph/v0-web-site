import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Code, Zap, Users, ArrowRight, ExternalLink, Copy, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const docSections = [
  {
    title: "Getting Started",
    description: "Learn the basics of HuggingGraph",
    icon: BookOpen,
    color: "bg-blue-500",
    items: [
      { title: "Quick Start", href: "/docs/quickstart", description: "Get up and running in 5 minutes" },
      { title: "Installation", href: "/docs/installation", description: "Install HuggingGraph SDK" },
      { title: "Your First Workflow", href: "/docs/first-workflow", description: "Build your first AI workflow" },
      { title: "Core Concepts", href: "/docs/concepts", description: "Understand workflows, nodes, and graphs" },
    ],
  },
  {
    title: "API Reference",
    description: "Complete API documentation",
    icon: Code,
    color: "bg-green-500",
    items: [
      { title: "Python SDK", href: "/docs/python-sdk", description: "Python client library reference" },
      { title: "REST API", href: "/docs/rest-api", description: "HTTP API endpoints" },
      { title: "GraphQL API", href: "/docs/graphql", description: "GraphQL schema and queries" },
      { title: "Webhooks", href: "/docs/webhooks", description: "Event-driven integrations" },
    ],
  },
  {
    title: "Workflows",
    description: "Build and share AI workflows",
    icon: Zap,
    color: "bg-purple-500",
    items: [
      { title: "Creating Workflows", href: "/docs/creating-workflows", description: "Design and build workflows" },
      { title: "Publishing", href: "/docs/publishing", description: "Share your workflows" },
      { title: "Best Practices", href: "/docs/best-practices", description: "Workflow design patterns" },
      { title: "Testing", href: "/docs/testing", description: "Test and validate workflows" },
    ],
  },
  {
    title: "Community",
    description: "Connect and contribute",
    icon: Users,
    color: "bg-orange-500",
    items: [
      { title: "Contributing", href: "/docs/contributing", description: "How to contribute to HuggingGraph" },
      { title: "Code of Conduct", href: "/docs/code-of-conduct", description: "Community guidelines" },
      { title: "Discord", href: "/discord", description: "Join our community chat" },
      { title: "GitHub", href: "/github", description: "Source code and issues" },
    ],
  },
]

export default function DocsPage() {
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
                  <p className="text-xs text-slate-600">Documentation</p>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/models" className="text-slate-600 hover:text-slate-900 transition-colors">
                Models
              </Link>
              <Link href="/workflows" className="text-slate-600 hover:text-slate-900 transition-colors">
                Workflows
              </Link>
              <Link href="/docs" className="text-blue-600 font-medium">
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
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-slate-900">Documentation</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to build, share, and deploy AI workflows with HuggingGraph
              </p>
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search documentation..." className="pl-10 h-12 text-base" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  Quick Start
                </Badge>
                <h2 className="text-3xl font-bold text-slate-900">Get Started in Minutes</h2>
                <p className="text-lg text-slate-600">
                  Install HuggingGraph and run your first AI workflow in just a few commands.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Install HuggingGraph</span>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <code className="text-sm">pip install hugginggraph</code>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Run a workflow</span>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <code className="text-sm">hugginggraph run quiz-agent-pro</code>
                </div>
              </div>

              <Button size="lg">
                <Play className="h-4 w-4 mr-2" />
                Try Interactive Tutorial
              </Button>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Example: Quiz Generator</CardTitle>
                <CardDescription>Generate educational quizzes with AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 p-4 rounded-lg text-sm font-mono">
                  <pre>{`from hugginggraph import load_workflow

# Load the quiz generator workflow
quiz_agent = load_workflow("quiz-agent-pro")

# Generate a quiz
result = quiz_agent.run({
    "topic": "Machine Learning",
    "difficulty": "intermediate",
    "num_questions": 5
})

print(result.questions)`}</pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Explore the Docs</h2>
            <p className="text-lg text-slate-600">Comprehensive guides and references for every use case</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section) => {
              const Icon = section.icon
              return (
                <Card key={section.title} className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${section.color} flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle>{section.title}</CardTitle>
                        <CardDescription>{section.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div>
                            <div className="font-medium text-slate-900 group-hover:text-blue-600">{item.title}</div>
                            <div className="text-sm text-slate-600">{item.description}</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Popular Guides</h2>
            <p className="text-slate-600">Most helpful resources from our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Tutorial
                </Badge>
                <CardTitle className="text-lg">Building Your First Chatbot</CardTitle>
                <CardDescription>Step-by-step guide to creating a conversational AI workflow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>15 min read</span>
                  <Link href="/docs/chatbot-tutorial" className="text-blue-600 hover:text-blue-700">
                    Read guide <ArrowRight className="h-3 w-3 ml-1 inline" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Guide
                </Badge>
                <CardTitle className="text-lg">Workflow Best Practices</CardTitle>
                <CardDescription>Design patterns and optimization techniques for AI workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>8 min read</span>
                  <Link href="/docs/best-practices" className="text-blue-600 hover:text-blue-700">
                    Read guide <ArrowRight className="h-3 w-3 ml-1 inline" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  Reference
                </Badge>
                <CardTitle className="text-lg">Python SDK Reference</CardTitle>
                <CardDescription>Complete API reference for the HuggingGraph Python library</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Reference</span>
                  <Link href="/docs/python-sdk" className="text-blue-600 hover:text-blue-700">
                    View docs <ExternalLink className="h-3 w-3 ml-1 inline" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Need Help?</h2>
          <p className="text-xl text-blue-100">Join our community of developers building the future of AI workflows</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Users className="h-4 w-4 mr-2" />
              Join Discord
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <ExternalLink className="h-4 w-4 mr-2" />
              GitHub Discussions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
