import SharedLayout from "@/components/shared-layout"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Shield, MessageCircle, UserCheck, Eye, Heart, CheckCircle, AlertTriangle } from "lucide-react"

export default function SmartSocialPage() {
  return (
    <SharedLayout
      title="Smart Social"
      subtitle="Safe social play: AI-matched friends, AI-moderated chat & voice. Parents set goals, limits, and approvals for worry-free social learning."
      gradientFrom="from-green-600"
      gradientTo="to-emerald-600"
    >
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Safe Social Learning{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                That Parents Trust
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              AI-moderated safe learning communities where kids can collaborate, share achievements, and build
              friendships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Smart Friend Matching</CardTitle>
                <CardDescription>
                  AI suggests safe matches for study buddies and learning partners based on interests, age, and learning
                  goals with parent approval.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI Moderation</CardTitle>
                <CardDescription>
                  Advanced AI monitors all interactions in real-time, ensuring conversations stay positive, educational,
                  and age-appropriate.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Safe Chat & Voice</CardTitle>
                <CardDescription>
                  Secure messaging and voice chat with built-in safety filters, inappropriate content detection, and
                  parent oversight.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Learning Circles</CardTitle>
                <CardDescription>
                  Parent-managed groups where kids collaborate on projects, share assignments, and celebrate learning
                  achievements together.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Parent Oversight</CardTitle>
                <CardDescription>
                  Complete transparency with conversation summaries, friend request approvals, and activity monitoring
                  for peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Positive Environment</CardTitle>
                <CardDescription>
                  AI promotes kindness, collaboration, and mutual support, creating a nurturing space for social and
                  academic growth.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Built-in Safety Features</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
              Multiple layers of protection ensure your child's online social experience is safe, positive, and
              educational.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Real-time Content Filtering</h3>
                  <p className="text-slate-600">
                    AI instantly detects and blocks inappropriate language, bullying attempts, or unsafe content before
                    it reaches your child.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Identity Verification</h3>
                  <p className="text-slate-600">
                    All users go through age-appropriate verification processes to ensure authentic, safe peer
                    connections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Instant Alerts</h3>
                  <p className="text-slate-600">
                    Parents receive immediate notifications about any concerning interactions or safety incidents.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">AI Safety Guardian</h3>
                <p className="text-slate-600">
                  Our AI safety system works 24/7 to monitor interactions, promote positive behavior, and ensure a
                  secure learning environment.
                </p>
                <Badge variant="secondary" className="bg-green-200 text-green-800">
                  99.9% Safe Interaction Rate
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">Ready for Safe Social Learning?</h2>
          <p className="text-xl text-green-100 text-pretty">
            Join families who trust AI-moderated social learning to keep their children safe while building meaningful
            connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all"
            >
              Join Safe Learning Circle
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              See Safety Features
            </Button>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}
