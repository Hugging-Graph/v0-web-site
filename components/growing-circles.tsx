import { BookOpen, Gamepad2, Users, Heart } from "lucide-react"

export function GrowingCircles() {
  return (
    <div className="relative w-full max-w-md mx-auto h-96">
      {/* Learning Circle - Top Left */}
      <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-center text-white">
          <BookOpen className="h-8 w-8 mx-auto mb-1" />
          <span className="text-sm font-semibold">Learning</span>
        </div>
      </div>

      {/* Playing Circle - Top Right */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
        <div className="text-center text-white">
          <Gamepad2 className="h-8 w-8 mx-auto mb-1" />
          <span className="text-sm font-semibold">Playing</span>
        </div>
      </div>

      {/* Interacting Circle - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
        <div className="text-center text-white">
          <Users className="h-8 w-8 mx-auto mb-1" />
          <span className="text-sm font-semibold">Interacting</span>
        </div>
      </div>

      {/* Growing Circle - Center (overlapping all) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg z-10 hover:scale-105 transition-transform">
        <div className="text-center text-white">
          <Heart className="h-6 w-6 mx-auto mb-1" />
          <span className="text-xs font-semibold">Growing</span>
        </div>
      </div>

      {/* Smaller accent circles */}
      <div className="absolute top-16 left-1/2 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-16 left-16 w-6 h-6 bg-pink-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-16 w-10 h-10 bg-cyan-400 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-4 w-4 h-4 bg-indigo-400 rounded-full opacity-60"></div>
      <div className="absolute top-2/3 left-4 w-5 h-5 bg-emerald-400 rounded-full opacity-50"></div>
    </div>
  )
}
