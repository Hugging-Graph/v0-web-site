import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  BookOpen,
  Shield,
  Gamepad2,
  Users,
  Heart,
  BarChart3,
  CheckCircle,
  GraduationCap,
  MessageCircle,
  Brain,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DW</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900">Dunkware AI</h1>
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/ai-tutoring" className="text-slate-600 hover:text-blue-600 transition-colors">
                AI Tutoring
              </Link>
              <Link href="/smart-social" className="text-slate-600 hover:text-blue-600 transition-colors">
                Smart Social
              </Link>
              <Link href="/sat-ready" className="text-slate-600 hover:text-blue-600 transition-colors">
                SAT Ready
              </Link>
              <Link href="/adaptive-ai" className="text-slate-600 hover:text-blue-600 transition-colors">
                Adaptive AI
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                AI-Powered Platform
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                Join Early Access
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                  Pilot Program • Join Early Access
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight text-balance">
                  AI That{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Learns Your Child
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed text-pretty">
                  Personalized AI tutoring that adapts to your child's learning style, builds SAT mastery from age 7,
                  and creates safe social learning experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Experience AI Learning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Watch AI Demo
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>AI-Safe Environment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Parent Controlled</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* AI Tutoring Card */}
                <Link href="/ai-tutoring">
                  <Card className="bg-blue-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg">AI Tutoring</CardTitle>
                      <CardDescription className="text-blue-100 text-sm">
                        Personalized lessons that adapt in real-time
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                {/* Smart Social Card */}
                <Link href="/smart-social">
                  <Card
                    className="bg-green-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    style={{ animationDelay: "1s" }}
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg">Smart Social</CardTitle>
                      <CardDescription className="text-green-100 text-sm">
                        AI-moderated safe learning communities
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                {/* SAT Ready Card */}
                <Link href="/sat-ready">
                  <Card
                    className="bg-orange-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    style={{ animationDelay: "2s" }}
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg">SAT Ready</CardTitle>
                      <CardDescription className="text-orange-100 text-sm">
                        Building test mastery from age 7
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                {/* Adaptive AI Card */}
                <Link href="/adaptive-ai">
                  <Card
                    className="bg-purple-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse cursor-pointer"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg">Adaptive AI</CardTitle>
                      <CardDescription className="text-purple-100 text-sm">
                        Intelligence that grows with your child
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              AI Learning That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Evolves With Your Child
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              Our intelligent platform understands your child's unique learning patterns, adapts to their pace, and
              builds the foundation for academic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Smart Assessment</CardTitle>
                <CardDescription>
                  AI analyzes learning patterns and identifies knowledge gaps in real-time, creating personalized
                  learning paths.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Curriculum Intelligence</CardTitle>
                <CardDescription>
                  From multiplication tables to SAT prep — AI ensures perfect progression through grade levels and
                  beyond.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Interactive AI</CardTitle>
                <CardDescription>
                  Conversational learning makes complex topics engaging. AI tutors that explain, encourage, and
                  celebrate progress.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              AI Learning Journey That Grows With Your Child
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              Adaptive self-learning AI understands your child's development, aligns with school curriculums, and makes
              learning fun and interactive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Adaptive Learning</CardTitle>
                <CardDescription>
                  AI understands your child's learning style and pace, creating personalized lessons that evolve with
                  their development.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Curriculum Aligned</CardTitle>
                <CardDescription>
                  From multiplication tables to SAT prep — the journey evolves year by year, staying aligned with school
                  requirements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Interactive & Fun</CardTitle>
                <CardDescription>
                  Conversational learning makes study time engaging, turning educational moments into exciting
                  discoveries.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Safe Social Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Social, but Safe</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              Structured Circles provide spaces for collaboration — parent-managed and age-appropriate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Parent-Managed Circles</h3>
                  <p className="text-slate-600">
                    Kids can collaborate, share assignments, and celebrate achievements in safe, supervised
                    environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Smart Friend Matching</h3>
                  <p className="text-slate-600">
                    AI suggests safe matches for study buddies, vocabulary rivals, or team-based projects with parent
                    approval.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Built-in Safety</h3>
                  <p className="text-slate-600">
                    Advanced moderation and AI safety filters ensure peace of mind for parents.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Learning Circles</h3>
                <p className="text-slate-600">
                  Safe spaces where kids connect, learn together, and grow in confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Learn First, Play Smarter</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              Dunkware connects learning with gaming. Kids earn Dunkcash for achievements and unlock playtime on their
              favorite platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Gamepad2 className="h-6 w-6 text-blue-600" />
                    <CardTitle>Gaming Integration</CardTitle>
                  </div>
                  <CardDescription>
                    Ties into kids' favorite platforms like Roblox, Fortnite, and Minecraft. Learning unlocks playtime.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-green-600" />
                    <CardTitle>Dunkcash Rewards</CardTitle>
                  </div>
                  <CardDescription>
                    Earn Dunkcash for completing quizzes and learning milestones. Redeem for play tokens and fun time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-600 flex items-center">→</div>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-600 flex items-center">→</div>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Learning → Rewards → Gaming</h3>
                <p className="text-slate-600">Parents set ratios: "30 minutes learning = 15 minutes Roblox"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parents Dashboard Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Built for Parents Too</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              Transparent dashboards and insights help you guide your child's learning journey with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Monitor learning goals, milestones, and achievements with detailed insights into your child's
                  development.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Smart Controls</CardTitle>
                <CardDescription>
                  Balance fun and growth without daily fights. Set learning-to-playtime ratios and approve social
                  connections.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Peace of Mind</CardTitle>
                <CardDescription>
                  Understand strengths and growth areas while aligning learning with real-life goals and school
                  requirements.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
            Ready to Experience AI-Powered Learning?
          </h2>
          <p className="text-xl text-blue-100 text-pretty">
            Join families who are building their children's future with intelligent, adaptive education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all"
            >
              Start Free AI Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Schedule AI Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">Dunkware</h3>
                <p className="text-sm text-slate-400">Growing in Circles</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Social, Learning & Gaming AI for kids — empowering their journey while parents stay at peace.
            </p>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">© 2025 Dunkware. Empowering kids to learn and grow.</p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <Badge variant="outline" className="border-slate-600 text-slate-400">
                Pilot Program
              </Badge>
              <span className="text-sm text-slate-400">Built with ❤️ for families</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
