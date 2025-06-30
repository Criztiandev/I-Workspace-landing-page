import React, { useEffect, useState } from "react";
import { Loader2, Sparkles, Zap, Star } from "lucide-react";

interface LoadingScreenProps {
  message?: string;
  subMessage?: string;
  progress?: number;
  showProgress?: boolean;
  variant?: "default" | "minimal" | "detailed";
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Loading your experience",
  subMessage = "Please wait while we prepare everything for you...",
  progress = 0,
  showProgress = false,
  variant = "default",
  onComplete,
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [loadingDots, setLoadingDots] = useState("");

  // Animate progress
  useEffect(() => {
    if (showProgress) {
      const timer = setInterval(() => {
        setCurrentProgress((prev) => {
          const newProgress = Math.min(prev + 1, progress);
          if (newProgress === 100 && onComplete) {
            setTimeout(onComplete, 500);
          }
          return newProgress;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [progress, showProgress, onComplete]);

  // Animate loading dots
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const renderMinimalLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <Loader2 className="h-12 w-12 text-blue-400 animate-spin" />
        <div className="absolute inset-0 h-12 w-12 border-2 border-blue-400/20 rounded-full animate-pulse"></div>
      </div>
      <p className="text-slate-300 text-lg font-medium">{message}</p>
    </div>
  );

  const renderDefaultLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Main Loading Animation */}
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-32 h-32 border-4 border-slate-700/30 rounded-full"></div>

        {/* Animated Ring */}
        <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>

        {/* Inner Glow */}
        <div className="absolute inset-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm animate-pulse"></div>

        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className="h-8 w-8 text-blue-400 animate-pulse" />
        </div>

        {/* Sparkle Effects */}
        <Sparkles
          className="absolute -top-2 -right-2 h-6 w-6 text-blue-300/60 animate-spin"
          style={{ animationDuration: "3s" }}
        />
        <Sparkles
          className="absolute -bottom-2 -left-2 h-5 w-5 text-purple-300/60 animate-spin"
          style={{ animationDuration: "4s", animationDirection: "reverse" }}
        />
        <Star className="absolute top-2 left-2 h-4 w-4 text-cyan-300/60 animate-pulse" />
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          {message}
          {loadingDots}
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto">
          {subMessage}
        </p>
      </div>

      {/* Progress Bar */}
      {showProgress && (
        <div className="w-full max-w-xs space-y-2">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Progress</span>
            <span>{currentProgress}%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${currentProgress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderDetailedLoader = () => (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Complex Loading Animation */}
      <div className="relative">
        {/* Multiple Rotating Rings */}
        <div className="w-40 h-40 border-2 border-slate-700/20 rounded-full"></div>
        <div className="absolute inset-2 w-36 h-36 border-2 border-slate-600/30 rounded-full"></div>
        <div className="absolute inset-4 w-32 h-32 border-2 border-slate-500/40 rounded-full"></div>

        {/* Animated Rings */}
        <div className="absolute inset-0 w-40 h-40 border-2 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        <div
          className="absolute inset-2 w-36 h-36 border-2 border-transparent border-r-purple-500 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "2s" }}
        ></div>
        <div
          className="absolute inset-4 w-32 h-32 border-2 border-transparent border-b-cyan-500 rounded-full animate-spin"
          style={{ animationDuration: "3s" }}
        ></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 text-blue-400 animate-spin mx-auto mb-2" />
            <div className="text-xs text-slate-400 font-mono">
              {currentProgress}%
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-700"></div>
        </div>
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
        </div>
      </div>

      {/* Loading Text with Typewriter Effect */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {message}
        </h2>
        <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
          {subMessage}
        </p>
      </div>

      {/* Detailed Progress */}
      {showProgress && (
        <div className="w-full max-w-md space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-300 font-medium">Loading Progress</span>
            <span className="text-blue-400 font-mono">{currentProgress}%</span>
          </div>
          <div className="relative">
            <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-slate-600/30">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ width: `${currentProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div
              className="absolute -top-1 -bottom-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm"
              style={{ width: `${currentProgress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-400/35 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-indigo-400/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400/30 rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-emerald-400/25 rounded-full animate-bounce delay-800"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Moving Gradient Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent animate-pulse delay-1500"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-2xl">
          {variant === "minimal" && renderMinimalLoader()}
          {variant === "default" && renderDefaultLoader()}
          {variant === "detailed" && renderDetailedLoader()}
        </div>
      </div>

      {/* Mouse Follower Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(59, 130, 246, 0.06), transparent 40%)`,
        }}
      ></div>

      {/* Custom Styles */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
