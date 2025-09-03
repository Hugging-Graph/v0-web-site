import SharedLayout from "@/components/shared-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, BookOpen, MessageCircle, BarChart3, Camera, Target } from "lucide-react"

export default function AITutoringPage() {
  return (
    <SharedLayout
      title="AI Tutoring"
      subtitle="Personalized tutoring that adapts in real time. AI analyzes learning patterns, identifies knowledge gaps, and creates custom learning paths that evolve with your child."
      gradientFrom="from-blue-600"
      gradientTo="to-indigo-600"
    >
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              How AI Tutoring{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Adapts to Your Child
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              Every new word tracked with scores and practice. Upload assignments → get conversational guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Smart Assessment</CardTitle>
                <CardDescription>
                  AI continuously analyzes your child's responses, identifying strengths and knowledge gaps in real-time
                  to personalize every lesson.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Photo-to-Help</CardTitle>
                <CardDescription>
                  Upload homework photos and get step-by-step conversational guidance. AI breaks down complex problems
                  into manageable steps.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Conversational Learning</CardTitle>
                <CardDescription>
                  AI tutors that explain concepts naturally, ask clarifying questions, and celebrate progress just like
                  a human tutor would.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Vocabulary Mastery</CardTitle>
                <CardDescription>
                  Every new word is tracked with mastery scores. AI creates personalized practice sessions to ensure
                  long-term retention.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Adaptive Difficulty</CardTitle>
                <CardDescription>
                  Lessons automatically adjust difficulty based on performance, ensuring your child is always challenged
                  but never overwhelmed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Progress Insights</CardTitle>
                <CardDescription>
                  Detailed analytics help parents understand learning patterns and celebrate milestones with their
                  children.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">How AI Tutoring Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              From homework help to skill building, AI tutoring adapts to your child's unique learning style.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Upload & Analyze</h3>
              <p className="text-slate-600">
                Take a photo of homework or start a lesson. AI instantly analyzes the content and your child's current
                skill level.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Personalized Guidance</h3>
              <p className="text-slate-600">
                AI provides step-by-step explanations, asks questions to check understanding, and adapts to your child's
                pace.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Track & Improve</h3>
              <p className="text-slate-600">
                Progress is tracked automatically. AI identifies areas for improvement and creates targeted practice
                sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
            Ready to Experience Personalized AI Tutoring?
          </h2>
          <p className="text-xl text-blue-100 text-pretty">
            Join families who are seeing real results with adaptive, intelligent tutoring that grows with their child.
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
              Try Photo-to-Help Demo
            </Button>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}
