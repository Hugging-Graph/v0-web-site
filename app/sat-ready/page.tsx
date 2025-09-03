import SharedLayout from "@/components/shared-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, BookOpen, BarChart3, Clock, Trophy, TrendingUp } from "lucide-react"

export default function SATReadyPage() {
  return (
    <SharedLayout
      title="SAT Ready"
      subtitle="Building test mastery from age 7. AI creates personalized SAT prep paths that grow with your child, ensuring they're ready when it matters most."
      gradientFrom="from-orange-600"
      gradientTo="to-red-600"
    >
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              SAT Mastery{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Starts Early
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              From foundational skills at age 7 to test-day confidence at 17, AI builds the knowledge and strategies
              needed for SAT success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Foundational Building</CardTitle>
                <CardDescription>
                  Starting at age 7, AI identifies and strengthens core math and reading skills that form the foundation
                  for future SAT success.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Vocabulary Mastery</CardTitle>
                <CardDescription>
                  Systematic vocabulary building with spaced repetition and contextual learning to master SAT-level
                  words naturally over time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Detailed analytics show SAT readiness across all sections, with personalized recommendations for
                  improvement areas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Test Strategies</CardTitle>
                <CardDescription>
                  AI teaches proven test-taking strategies, time management skills, and stress reduction techniques for
                  optimal performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Practice Tests</CardTitle>
                <CardDescription>
                  Adaptive practice tests that simulate real SAT conditions while identifying specific areas for focused
                  improvement.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Score Prediction</CardTitle>
                <CardDescription>
                  AI predicts SAT scores based on current performance and provides targeted recommendations to reach
                  score goals.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">10-Year SAT Preparation Journey</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              A structured path from elementary foundations to test-day mastery, adapted to your child's pace and
              learning style.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-sm">Ages 7-9</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Foundation Building</h3>
              <p className="text-slate-600">
                Core math concepts, reading comprehension, and vocabulary building through engaging, age-appropriate
                activities.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-sm">Ages 10-12</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Skill Development</h3>
              <p className="text-slate-600">
                Advanced problem-solving, critical reading skills, and introduction to algebraic thinking and geometry
                concepts.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-sm">Ages 13-15</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Pre-SAT Mastery</h3>
              <p className="text-slate-600">
                PSAT preparation, advanced vocabulary, complex mathematical reasoning, and essay writing skills
                development.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-sm">Ages 16-17</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">SAT Excellence</h3>
              <p className="text-slate-600">
                Intensive SAT prep, test strategies, time management, and score optimization for college admissions
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Proven Results</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              Students who start early with AI-guided SAT prep show significant score improvements and college
              readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-orange-600">+200</div>
              <h3 className="text-xl font-semibold text-slate-900">Average Score Increase</h3>
              <p className="text-slate-600">
                Students using our 10-year program show an average 200-point improvement over traditional prep methods.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-red-600">95%</div>
              <h3 className="text-xl font-semibold text-slate-900">College Readiness</h3>
              <p className="text-slate-600">
                95% of our students meet or exceed college readiness benchmarks in both math and evidence-based reading.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-orange-600">85%</div>
              <h3 className="text-xl font-semibold text-slate-900">Target Score Achievement</h3>
              <p className="text-slate-600">
                85% of students achieve their target SAT scores, with many exceeding their initial goals significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
            Start Your Child's SAT Success Journey Today
          </h2>
          <p className="text-xl text-orange-100 text-pretty">
            Give your child the advantage of early, AI-guided SAT preparation that builds confidence and achieves
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all"
            >
              Start SAT Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              View Sample Questions
            </Button>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}
