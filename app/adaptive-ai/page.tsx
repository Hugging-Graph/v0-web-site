import SharedLayout from "@/components/shared-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Target, TrendingUp, Lightbulb, Puzzle, Eye, Sparkles } from "lucide-react"

export default function AdaptiveAIPage() {
  return (
    <SharedLayout
      title="Adaptive AI"
      subtitle="Intelligence that grows with your child. AI that knows your child and adapts to their way of learning, creating personalized experiences that evolve daily."
      gradientFrom="from-purple-600"
      gradientTo="to-pink-600"
    >
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              AI That{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Learns Your Child
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              Our adaptive AI understands learning patterns, emotional states, and individual preferences to create
              truly personalized educational experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-purple-200 transition-colors bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Learning Style Recognition</CardTitle>
                <CardDescription>
                  AI identifies whether your child learns best through visual, auditory, or kinesthetic methods and
                  adapts content accordingly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Real-time Adaptation</CardTitle>
                <CardDescription>
                  Lessons adjust instantly based on performance, engagement levels, and emotional responses to maintain
                  optimal learning flow.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Personalized Pacing</CardTitle>
                <CardDescription>
                  AI adjusts the speed and complexity of lessons to match your child's natural learning rhythm and
                  attention span.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Emotional Intelligence</CardTitle>
                <CardDescription>
                  AI recognizes frustration, excitement, and confusion, adjusting its approach to maintain positive
                  learning experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Puzzle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Interest-Based Learning</CardTitle>
                <CardDescription>
                  Incorporates your child's hobbies and interests into lessons, making math problems about their
                  favorite games or sports.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Predictive Learning</CardTitle>
                <CardDescription>
                  AI predicts future learning needs and proactively introduces concepts when your child is most ready to
                  absorb them.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How AI Adapts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">How AI Adapts to Your Child</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              Every interaction teaches our AI more about your child's unique learning profile, creating increasingly
              personalized experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Continuous Learning</h3>
                  <p className="text-slate-600">
                    AI analyzes every response, mistake, and success to build a comprehensive understanding of your
                    child's learning patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Dynamic Difficulty</h3>
                  <p className="text-slate-600">
                    Lessons automatically become more challenging as skills improve, or provide additional support when
                    concepts are difficult.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Personalized Explanations</h3>
                  <p className="text-slate-600">
                    AI learns which explanation styles work best for your child and adapts its teaching approach
                    accordingly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">AI Learning Profile</h3>
                <p className="text-slate-600">
                  A unique digital profile that captures your child's learning preferences, strengths, and growth areas
                  for truly personalized education.
                </p>
                <Badge variant="secondary" className="bg-purple-200 text-purple-800">
                  Updates Every Session
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">The Power of Adaptive Learning</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              When AI truly understands your child, learning becomes more effective, engaging, and enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-purple-600">3x</div>
              <h3 className="text-xl font-semibold text-slate-900">Faster Learning</h3>
              <p className="text-slate-600">
                Personalized AI instruction helps children learn concepts 3x faster than traditional one-size-fits-all
                approaches.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-pink-600">90%</div>
              <h3 className="text-xl font-semibold text-slate-900">Engagement Rate</h3>
              <p className="text-slate-600">
                Children stay engaged 90% longer when learning is adapted to their interests and learning style
                preferences.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-purple-600">95%</div>
              <h3 className="text-xl font-semibold text-slate-900">Retention Rate</h3>
              <p className="text-slate-600">
                Adaptive learning techniques result in 95% better long-term retention of concepts and skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
            Experience AI That Truly Knows Your Child
          </h2>
          <p className="text-xl text-purple-100 text-pretty">
            Discover how adaptive AI can transform your child's learning experience with personalized, intelligent
            education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all"
            >
              Start Adaptive Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              See AI in Action
            </Button>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}
