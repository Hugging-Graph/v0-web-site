import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Plus,
  Zap,
  Download,
  Star,
  GitBranch,
  TrendingUp,
  Users,
  Calendar,
  Settings,
  Bell,
  Search,
  Filter,
  MoreHorizontal,
  Play,
  Edit,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const userWorkflows = [
  {
    id: "my-quiz-agent",
    name: "My Quiz Agent",
    description: "Custom quiz generator for educational content",
    status: "published",
    downloads: 45,
    stars: 12,
    lastUpdated: "2 days ago",
    visibility: "public",
  },
  {
    id: "data-analyzer",
    name: "Data Analyzer",
    description: "Automated data analysis and visualization workflow",
    status: "draft",
    downloads: 0,
    stars: 0,
    lastUpdated: "1 week ago",
    visibility: "private",
  },
  {
    id: "content-moderator",
    name: "Content Moderator",
    description: "AI-powered content moderation system",
    status: "published",
    downloads: 23,
    stars: 8,
    lastUpdated: "3 days ago",
    visibility: "public",
  },
]

const recentActivity = [
  {
    type: "workflow_created",
    title: "Created new workflow: Data Analyzer",
    time: "1 week ago",
    icon: Zap,
  },
  {
    type: "workflow_published",
    title: "Published My Quiz Agent",
    time: "2 weeks ago",
    icon: GitBranch,
  },
  {
    type: "workflow_starred",
    title: "Someone starred your Content Moderator",
    time: "3 weeks ago",
    icon: Star,
  },
]

export default function DashboardPage() {
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
                  <p className="text-xs text-slate-600">Dashboard</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, John!</h1>
            <p className="text-slate-600 mt-1">Manage your AI workflows and track your impact</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Import Workflow
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Workflow
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Workflows</p>
                  <p className="text-3xl font-bold text-slate-900">3</p>
                </div>
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Downloads</p>
                  <p className="text-3xl font-bold text-slate-900">68</p>
                </div>
                <Download className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Stars</p>
                  <p className="text-3xl font-bold text-slate-900">20</p>
                </div>
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Community Rank</p>
                  <p className="text-3xl font-bold text-slate-900">#47</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="workflows" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="workflows">My Workflows</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              <TabsContent value="workflows" className="space-y-4">
                {userWorkflows.map((workflow) => (
                  <Card key={workflow.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-slate-900">{workflow.name}</h3>
                            <Badge variant={workflow.status === "published" ? "default" : "secondary"}>
                              {workflow.status}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={
                                workflow.visibility === "public"
                                  ? "border-green-200 text-green-700"
                                  : "border-slate-200"
                              }
                            >
                              {workflow.visibility}
                            </Badge>
                          </div>

                          <p className="text-slate-600">{workflow.description}</p>

                          <div className="flex items-center gap-6 text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              <span>{workflow.downloads} downloads</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              <span>{workflow.stars} stars</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>Updated {workflow.lastUpdated}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 ml-4">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Play className="h-3 w-3 mr-1" />
                            Test
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="border-2 border-dashed border-slate-200 hover:border-blue-300 transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                        <Plus className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Create New Workflow</h3>
                        <p className="text-sm text-slate-600 mt-1">
                          Start building your next AI workflow from scratch or use a template
                        </p>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Create from Scratch
                        </Button>
                        <Button variant="outline" className="bg-transparent">
                          Browse Templates
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest actions and achievements</CardDescription>
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
                              <div className="text-sm text-slate-600">{activity.time}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Workflow Performance</CardTitle>
                    <CardDescription>Track how your workflows are performing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">My Quiz Agent</span>
                        <span className="text-sm text-slate-600">45 downloads</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Content Moderator</span>
                        <span className="text-sm text-slate-600">23 downloads</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Data Analyzer</span>
                        <span className="text-sm text-slate-600">0 downloads</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">John Doe</CardTitle>
                    <CardDescription>AI Workflow Developer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Member since</span>
                  <span className="font-medium">Jan 2025</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Community rank</span>
                  <Badge variant="outline">#47</Badge>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Zap className="h-4 w-4 mr-2" />
                  Create Workflow
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Browse Templates
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </Button>
              </CardContent>
            </Card>

            {/* Community Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Community Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-slate-900">Featured Workflow</div>
                  <div className="text-slate-600">Advanced RAG Pipeline by Sarah Chen</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-slate-900">Trending Topic</div>
                  <div className="text-slate-600">Multi-agent workflow patterns</div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
