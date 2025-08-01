import { ArrowRight, Brain, Shield, GraduationCap, Mic, TrendingUp, Zap, Cpu, Database } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function AIHeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["safety intelligence", "next-gen education", "voice technologies", "AI transformation"]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-screen pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* AI Data Stream Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 animate-data-stream"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Dynamic Neural Network Lines */}
          {[...Array(15)].map((_, i) => (
            <g key={i}>
              <line
                x1={`${10 + i * 6}%`}
                y1={`${20 + Math.sin(i) * 30}%`}
                x2={`${30 + i * 5}%`}
                y2={`${60 + Math.cos(i) * 20}%`}
                stroke="url(#neuralGradient)"
                strokeWidth="1.5"
                filter="url(#glow)"
                className="animate-neural-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
              <circle
                cx={`${10 + i * 6}%`}
                cy={`${20 + Math.sin(i) * 30}%`}
                r="2"
                fill="#3B82F6"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </g>
          ))}
        </svg>

        {/* AI Processing Nodes */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-blue-500 rounded-full animate-processing-node opacity-70" />
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-purple-500 rounded-full animate-processing-node opacity-60"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-32 w-10 h-10 bg-cyan-500 rounded-full animate-processing-node opacity-50"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-60 right-20 w-4 h-4 bg-green-500 rounded-full animate-processing-node opacity-80"
          style={{ animationDelay: "3s" }}
        />

        {/* Holographic Panels */}
        <div className="absolute top-32 right-16 w-32 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/30 rounded-lg animate-hologram" />
        <div
          className="absolute bottom-32 left-16 w-28 h-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg animate-hologram"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Data Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs font-mono animate-matrix-rain"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              {Array.from({ length: 10 }, (_, j) => (
                <div key={j} className="opacity-30">
                  {Math.random() > 0.5 ? "1" : "0"}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Rotating AI Cores */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-blue-400/40 rounded-full animate-spin-slow">
          <div className="absolute inset-4 border border-blue-300/60 rounded-full animate-spin-reverse" />
          <div className="absolute inset-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-purple-400/40 rounded-full animate-spin-slow"
          style={{ animationDelay: "2s" }}
        >
          <div className="absolute inset-3 border border-purple-300/60 rounded-full animate-spin-reverse" />
          <div className="absolute inset-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex items-center min-h-[calc(100vh-88px)] w-full">
        <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Enhanced Technology Icons with AI Elements */}
            <div className="flex justify-center mb-16 space-x-16">
              <div
                className={`transform transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100 rotate-0" : "translate-y-20 opacity-0 rotate-180"}`}
              >
                <div className="relative group cursor-pointer">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-ai-pulse">
                    <Shield className="h-12 w-12 text-white" />
                    <div className="absolute inset-0 border-2 border-blue-300/50 rounded-full animate-ping" />
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-blue-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Safety Intelligence
                  </div>
                  {/* AI Data Streams */}
                  <div className="absolute top-0 left-0 w-1 h-1 bg-blue-300 rounded-full animate-data-orbit" />
                  <div
                    className="absolute bottom-0 right-0 w-1 h-1 bg-blue-300 rounded-full animate-data-orbit"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>

              <div
                className={`transform transition-all duration-1000 delay-300 ${mounted ? "translate-y-0 opacity-100 rotate-0" : "translate-y-20 opacity-0 rotate-180"}`}
              >
                <div className="relative group cursor-pointer">
                  <div
                    className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40 animate-ai-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <GraduationCap className="h-12 w-12 text-white" />
                    <div
                      className="absolute inset-0 border-2 border-purple-300/50 rounded-full animate-ping"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-purple-400 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-purple-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Next-Gen Education
                  </div>
                  <div
                    className="absolute top-0 right-0 w-1 h-1 bg-purple-300 rounded-full animate-data-orbit"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-1 h-1 bg-purple-300 rounded-full animate-data-orbit"
                    style={{ animationDelay: "1.5s" }}
                  />
                </div>
              </div>

              <div
                className={`transform transition-all duration-1000 delay-500 ${mounted ? "translate-y-0 opacity-100 rotate-0" : "translate-y-20 opacity-0 rotate-180"}`}
              >
                <div className="relative group cursor-pointer">
                  <div
                    className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/40 animate-ai-pulse"
                    style={{ animationDelay: "1s" }}
                  >
                    <Mic className="h-12 w-12 text-white" />
                    <div
                      className="absolute inset-0 border-2 border-cyan-300/50 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-cyan-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Voice Technologies
                  </div>
                  <div
                    className="absolute top-0 left-0 w-1 h-1 bg-cyan-300 rounded-full animate-data-orbit"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-300 rounded-full animate-data-orbit"
                    style={{ animationDelay: "2s" }}
                  />
                </div>
              </div>
            </div>

            {/* AI Processing Indicators */}
            <div className="flex justify-center mb-12 space-x-8">
              <div className="flex items-center space-x-2 text-blue-400 animate-pulse">
                <Cpu className="h-5 w-5 animate-spin" style={{ animationDuration: "3s" }} />
                <span className="text-sm font-mono">Processing...</span>
              </div>
              <div
                className="flex items-center space-x-2 text-green-400 animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                <Database className="h-5 w-5" />
                <span className="text-sm font-mono">Learning...</span>
              </div>
              <div
                className="flex items-center space-x-2 text-purple-400 animate-pulse"
                style={{ animationDelay: "2s" }}
              >
                <Zap className="h-5 w-5" />
                <span className="text-sm font-mono">Optimizing...</span>
              </div>
            </div>

            {/* Main Heading with Enhanced Animation */}
            <div
              className={`transform transition-all duration-1000 delay-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
                <span className="text-white">From </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r text-2xl md:text-4xl lg:text-5xl from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-flow capitalize">
                    {words[currentWord]}
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-lg animate-pulse" />
                </span>
                <span className="text-white text-2xl md:text-4xl lg:text-5xl"> to next-gen solutions</span>
                <br />
                <span className="text-white">We pioneer </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-flow">
                  AI-driven transformation
                </span>
                <br />
                <span className="text-gray-300 text-2xl md:text-3xl lg:text-4xl">
                  turning <span className="text-blue-400 font-semibold animate-data-glow">raw data</span> into{" "}
                  <span className="text-purple-400 font-semibold animate-data-glow" style={{ animationDelay: "0.5s" }}>
                    actionable intelligence
                  </span>
                  {" "}that empowers industries, educators, and innovators worldwide.
                </span>
              </h1>
            </div>

            {/* Sub Heading with Enhanced Effects */}
            <div
              className={`transform transition-all duration-1000 delay-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
                Driving transformation across industries by empowering{" "}
                <span className="text-blue-400 font-semibold animate-text-glow">educators</span>,{" "}
                <span className="text-purple-400 font-semibold animate-text-glow" style={{ animationDelay: "0.5s" }}>
                  innovators
                </span>
                , and{" "}
                <span className="text-cyan-400 font-semibold animate-text-glow" style={{ animationDelay: "1s" }}>
                  frontline teams
                </span>{" "}
                with cutting-edge, applied AI solutions.
              </p>
            </div>

            {/* Enhanced CTA buttons */}
            <div
              className={`transform transition-all duration-1000 delay-1300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link to="platforms">
                  <button
                    className="text-cyan-400 cursor-pointer group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-xl px-16 py-4 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-110 border-0 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Our Platforms
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  </button>
                </Link>
                <Link to="investor">
                  <button
                    //   variant="outline"
                    //   size="lg"
                    className="group cursor-pointer relative text-xl px-16 py-4 bg-transparent border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-500 transform hover:scale-110 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <TrendingUp className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                      Investor Relations
                    </span>
                    <div className="absolute inset-0 bg-cyan-400 rounded-md blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="absolute -inset-1 bg-cyan-400 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Custom CSS for AI Animations */}
      <style>{`
        @keyframes data-stream {
          0% { transform: translateY(100vh) translateX(0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px) scale(1); opacity: 0; }
        }
        
        @keyframes neural-pulse {
          0%, 100% { stroke-opacity: 0.3; stroke-width: 1; }
          50% { stroke-opacity: 1; stroke-width: 2; }
        }
        
        @keyframes processing-node {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
          50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
        }
        
        @keyframes hologram {
          0%, 100% { opacity: 0.1; transform: translateY(0) rotateX(0deg); }
          50% { opacity: 0.3; transform: translateY(-10px) rotateX(5deg); }
        }
        
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes ai-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { transform: scale(1.05); box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes data-orbit {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }
        
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes data-glow {
          0%, 100% { text-shadow: 0 0 10px currentColor; }
          50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px currentColor; }
          50% { text-shadow: 0 0 15px currentColor, 0 0 25px currentColor; }
        }
        
        .animate-data-stream { animation: data-stream 12s linear infinite; }
        .animate-neural-pulse { animation: neural-pulse 3s ease-in-out infinite; }
        .animate-processing-node { animation: processing-node 4s ease-in-out infinite; }
        .animate-hologram { animation: hologram 6s ease-in-out infinite; }
        .animate-matrix-rain { animation: matrix-rain 12s linear infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-ai-pulse { animation: ai-pulse 3s ease-in-out infinite; }
        .animate-data-orbit { animation: data-orbit 8s linear infinite; }
        .animate-gradient-flow { 
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }
        .animate-data-glow { animation: data-glow 2s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
