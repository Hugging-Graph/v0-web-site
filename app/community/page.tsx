import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  MessageSquare,
  GitBranch,
  Star,
  ExternalLink,
  Heart,
  Code,
  BookOpen,
  Zap,
  Award,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const communityStats = [
  { label: "Active Developers", value: "2,847", icon: Users, color: "text-blue-600" },
  { label: "Workflows Shared", value: "156", icon: Zap, color: "text-green-600" },
  { label: "GitHub Stars", value: "1,203", icon: Star, color: "text-yellow-600" },
  { label: "Discord Members", value: "892", icon: MessageSquare, color: "text-purple-600" },
]

const topContributors = [
  {
    name: "Duncan Krebs",
    role: "Founder",
    avatar: "/hugger-logo.png",
    contributions: 47,
    workflows: 8,
    badge: "Founder",
  },
  {
    name: "Sarah Chen",
    role: "Core Contributor",
    avatar: null,
    contributions: 23,
    workflows: 5,
    badge: "Top Contributor",
  },
  {
    name: "Alex Rodriguez",
    role: "Community Moderator",
    avatar: null,
    contributions: 19,
    workflows: 3,
    badge: "Moderator",
  },
  {
    name: "Maya Patel",
    role: "Documentation Lead",
    avatar: null,
    contributions: 15,
    workflows: 2,
    badge: "Docs Lead",
  },
]

const recentActivity = [
  {
    type: "workflow",
    title: "New workflow: Advanced RAG Pipeline",
    author: "Sarah Chen",
    time: "2 hours ago",
    icon: Zap,
  },
  {
    type: "discussion",
    title: "Best practices for multi-agent workflows",
    author: "Alex Rodriguez",
    time: "4 hours ago",
    icon: MessageSquare,
  },
  {
    type: "release",
    title: "HuggingGraph v1.2.0 released",
    author: "Duncan Krebs",
    time: "1 day ago",
    icon: Code,
  },
  {
    type: "tutorial",
    title: "Building chatbots with HuggingGraph",
    author: "Maya Patel",
    time: "2 days ago",
    icon: BookOpen,
  },
]

export default function CommunityPage() {
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
                  <p className="text-xs text-slate-600">Community</p>
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
              <Link href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors">
                Docs
              </Link>
              <Link href="/community" className="text-blue-600 font-medium">
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
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-slate-900">Join the Community</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Connect with developers building the future of AI workflows. Share knowledge, contribute code, and grow
              together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4]">
              <MessageSquare className="h-4 w-4 mr-2" />
              Join Discord
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              <GitBranch className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              <ExternalLink className="h-4 w-4 mr-2" />
              Discussions
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {communityStats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <Icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                      <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-slate-900">{activity.title}</div>
                          <div className="text-sm text-slate-600">
                            by {activity.author} • {activity.time}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Contributing */}
            <Card>
              <CardHeader>
                <CardTitle>Contributing to HuggingGraph</CardTitle>
                <CardDescription>Help us build the future of AI workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Share Workflows</h4>
                    <p className="text-sm text-slate-600">
                      Create and publish reusable AI workflows for the community to discover and use.
                    </p>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Zap className="h-3 w-3 mr-2" />
                      Publish Workflow
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Improve Documentation</h4>
                    <p className="text-sm text-slate-600">
                      Help others learn by contributing tutorials, guides, and API documentation.
                    </p>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <BookOpen className="h-3 w-3 mr-2" />
                      Edit Docs
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Report Issues</h4>
                    <p className="text-sm text-slate-600">
                      Found a bug or have a feature request? Let us know on GitHub.
                    </p>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <GitBranch className="h-3 w-3 mr-2" />
                      Open Issue
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Join Discussions</h4>
                    <p className="text-sm text-slate-600">
                      Share ideas, ask questions, and help other community members.
                    </p>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <MessageSquare className="h-3 w-3 mr-2" />
                      Start Discussion
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="text-center space-y-4">
                  <h4 className="font-semibold text-slate-900">Ready to Contribute?</h4>
                  <p className="text-sm text-slate-600">Check out our contributor guidelines to get started.</p>
                  <Button>
                    <Heart className="h-4 w-4 mr-2" />
                    View Contributing Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={contributor.name} className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={contributor.avatar || undefined} />
                          <AvatarFallback>
                            {contributor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {index === 0 && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">👑</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-slate-900">{contributor.name}</div>
                        <div className="text-sm text-slate-600">{contributor.role}</div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">
                          {contributor.badge}
                        </Badge>
                        <div className="text-xs text-slate-500 mt-1">{contributor.contributions} contributions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-slate-900">Be Respectful</h4>
                  <p className="text-sm text-slate-600">Treat all community members with respect and kindness.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-slate-900">Share Knowledge</h4>
                  <p className="text-sm text-slate-600">Help others learn and grow by sharing your expertise.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-slate-900">Stay On Topic</h4>
                  <p className="text-sm text-slate-600">Keep discussions relevant to AI workflows and HuggingGraph.</p>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Read Full Code of Conduct
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/docs" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                  <BookOpen className="h-4 w-4" />
                  Documentation
                </Link>
                <Link href="/workflows" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                  <Zap className="h-4 w-4" />
                  Browse Workflows
                </Link>
                <Link href="/canvas" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                  <Code className="h-4 w-4" />
                  Workflow Canvas
                </Link>
                <Link href="/github" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                  <GitBranch className="h-4 w-4" />
                  Source Code
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
