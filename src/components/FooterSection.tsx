import { Heart, Coffee } from "lucide-react";
export const FooterSection = () => {
  return <footer className="relative bg-zinc-900 text-white overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-pink-600/10 rounded-full blur-[80px] animate-pulse [animation-delay:4s]" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-[10%] w-1 h-1 bg-blue-400 rounded-full animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-8 left-[25%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute top-6 right-[30%] w-1 h-1 bg-pink-400 rounded-full animate-[float_7s_ease-in-out_infinite_2s]" />
        <div className="absolute top-10 right-[15%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]" />
        <div className="absolute bottom-12 left-[40%] w-1 h-1 bg-emerald-400 rounded-full animate-[float_9s_ease-in-out_infinite_3s]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Top accent line with animation */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-gray-300 text-sm">
              <span className="font-medium">© 2026 Kartik Bhalerao.</span>
              <span>Crafted with</span>
              <span className="relative group/heart cursor-pointer">
                <Heart className="w-4 h-4 text-red-500 animate-[heartbeat_1.2s_ease-in-out_infinite] group-hover/heart:scale-125 transition-transform" />
              </span>
              <span>& lots of</span>
              <span className="relative group/coffee cursor-pointer">
                <Coffee className="w-4 h-4 text-amber-400 group-hover/coffee:rotate-12 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};