import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  Star,
  GitBranch,
  User,
  Calendar,
  Code,
  FileText,
  Play,
  Copy,
  ExternalLink,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock workflow detail data
const workflowDetail = {
  id: "quiz-agent-pro",
  name: "Quiz Agent Pro",
  description:
    "Advanced quiz generation and evaluation workflow with multiple choice, true/false, and open-ended questions. This workflow uses state-of-the-art language models to create engaging educational content.",
  author: "Duncan Krebs",
  downloads: "2.3k",
  stars: 156,
  forks: 23,
  category: "Education",
  tags: ["quiz", "education", "evaluation", "langchain", "multi-agent"],
  lastUpdated: "2 days ago",
  version: "1.2.0",
  license: "MIT",
  featured: true,
  readme: `# Quiz Agent Pro

A sophisticated LangGraph workflow for generating and evaluating educational quizzes.

## Features

- Multiple question types (MCQ, True/False, Open-ended)
- Adaptive difficulty adjustment
- Real-time evaluation and feedback
- Integration with popular LMS platforms
- Customizable question templates

## Quick Start

\`\`\`python
from hugginggraph import load_workflow

quiz_agent = load_workflow("quiz-agent-pro")
result = quiz_agent.run({
    "topic": "Machine Learning",
    "difficulty": "intermediate",
    "num_questions": 10
})
\`\`\`

## Configuration

The workflow accepts the following parameters:

- \`topic\`: Subject matter for the quiz
- \`difficulty\`: easy, intermediate, or advanced
- \`num_questions\`: Number of questions to generate
- \`question_types\`: List of question types to include

## Output Format

The workflow returns a structured quiz object with questions, answers, and evaluation criteria.`,
  installCommand: "pip install hugginggraph && hugginggraph install quiz-agent-pro",
}

export default function WorkflowDetailPage({ params }: { params: { id: string } }) {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
          <Link href="/workflows" className="hover:text-slate-900">
            Workflows
          </Link>
          <span>/</span>
          <span className="text-slate-900">{workflowDetail.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-slate-900">{workflowDetail.name}</h1>
                    {workflowDetail.featured && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{workflowDetail.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{workflowDetail.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {workflowDetail.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Code className="h-4 w-4" />
                  <span>v{workflowDetail.version}</span>
                </div>
                <Badge variant="outline">{workflowDetail.license}</Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                {workflowDetail.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="readme" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="readme">
                  <FileText className="h-4 w-4 mr-2" />
                  README
                </TabsTrigger>
                <TabsTrigger value="code">
                  <Code className="h-4 w-4 mr-2" />
                  Code
                </TabsTrigger>
                <TabsTrigger value="examples">
                  <Play className="h-4 w-4 mr-2" />
                  Examples
                </TabsTrigger>
                <TabsTrigger value="versions">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Versions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="readme" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="prose prose-slate max-w-none">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed">{workflowDetail.readme}</pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Workflow Definition</CardTitle>
                    <CardDescription>The core LangGraph workflow structure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm font-mono">
                      <pre>{`from langgraph import StateGraph
from typing import TypedDict

class QuizState(TypedDict):
    topic: str
    difficulty: str
    questions: list
    current_question: int

def generate_question(state: QuizState):
    # Question generation logic
    pass

def evaluate_answer(state: QuizState):
    # Answer evaluation logic
    pass

# Build the workflow graph
workflow = StateGraph(QuizState)
workflow.add_node("generate", generate_question)
workflow.add_node("evaluate", evaluate_answer)
workflow.add_edge("generate", "evaluate")
workflow.set_entry_point("generate")`}</pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="examples" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Usage Examples</CardTitle>
                    <CardDescription>Common use cases and implementation patterns</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Basic Quiz Generation</h4>
                      <div className="bg-slate-50 p-4 rounded-lg text-sm font-mono">
                        <pre>{`quiz = quiz_agent.run({
    "topic": "Python Programming",
    "difficulty": "beginner",
    "num_questions": 5
})`}</pre>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h4 className="font-semibold">Advanced Configuration</h4>
                      <div className="bg-slate-50 p-4 rounded-lg text-sm font-mono">
                        <pre>{`quiz = quiz_agent.run({
    "topic": "Machine Learning",
    "difficulty": "advanced",
    "num_questions": 10,
    "question_types": ["multiple_choice", "true_false"],
    "include_explanations": True
})`}</pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="versions" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Version History</CardTitle>
                    <CardDescription>Track changes and updates to this workflow</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-semibold">v1.2.0</div>
                          <div className="text-sm text-slate-600">Added support for custom question templates</div>
                        </div>
                        <div className="text-sm text-slate-500">2 days ago</div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-semibold">v1.1.0</div>
                          <div className="text-sm text-slate-600">Improved evaluation accuracy</div>
                        </div>
                        <div className="text-sm text-slate-500">1 week ago</div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-semibold">v1.0.0</div>
                          <div className="text-sm text-slate-600">Initial release</div>
                        </div>
                        <div className="text-sm text-slate-500">2 weeks ago</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Install Card */}
            <Card>
              <CardHeader>
                <CardTitle>Install</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Install command:</span>
                    <Button variant="ghost" size="sm">
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="bg-slate-900 text-slate-100 p-3 rounded text-sm font-mono">
                    {workflowDetail.installCommand}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Install
                  </Button>
                  <Button variant="outline">
                    <GitBranch className="h-4 w-4 mr-2" />
                    Fork
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-slate-600" />
                    <span className="text-sm">Downloads</span>
                  </div>
                  <span className="font-semibold">{workflowDetail.downloads}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-slate-600" />
                    <span className="text-sm">Stars</span>
                  </div>
                  <span className="font-semibold">{workflowDetail.stars}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-slate-600" />
                    <span className="text-sm">Forks</span>
                  </div>
                  <span className="font-semibold">{workflowDetail.forks}</span>
                </div>

                <Separator />

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Star className="h-3 w-3 mr-1" />
                    Star
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Heart className="h-3 w-3 mr-1" />
                    Like
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Author Card */}
            <Card>
              <CardHeader>
                <CardTitle>Author</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">{workflowDetail.author}</div>
                    <div className="text-sm text-slate-600">Founder, HuggingGraph</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Related Workflows */}
            <Card>
              <CardHeader>
                <CardTitle>Related Workflows</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Link href="/workflows/chart-generator" className="block text-sm font-medium hover:text-blue-600">
                    Chart Generator
                  </Link>
                  <p className="text-xs text-slate-600">Transform data into visualizations</p>
                </div>
                <div className="space-y-2">
                  <Link href="/workflows/document-summarizer" className="block text-sm font-medium hover:text-blue-600">
                    Document Summarizer
                  </Link>
                  <p className="text-xs text-slate-600">Intelligent document summarization</p>
                </div>
                <div className="space-y-2">
                  <Link
                    href="/workflows/customer-support-bot"
                    className="block text-sm font-medium hover:text-blue-600"
                  >
                    Customer Support Bot
                  </Link>
                  <p className="text-xs text-slate-600">Multi-turn support workflow</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
