import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  RefreshCw,
  Home,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

interface ErrorScreenProps {
  title?: string;
  message?: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  showRetryButton?: boolean;
  onRetry?: () => void;
  onHome?: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({
  title = "Oops! Something went wrong",
  message = "We encountered an unexpected error while processing your request. Don't worry, our team has been notified and we're working on it.",
  showHomeButton = true,
  showBackButton = true,
  showRetryButton = true,
  onRetry,
  onHome,
}) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleHome = () => {
    if (onHome) {
      onHome();
    } else {
      window.location.href = "/";
    }
  };

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

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-lg">
          {/* Error Card */}
          <Card className="relative overflow-hidden bg-slate-800/40 border-slate-700/50 backdrop-blur-xl shadow-2xl">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5 rounded-xl"></div>

            <div className="relative p-8 sm:p-10">
              {/* Error Icon with Animation */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-500/20 shadow-lg">
                    <AlertTriangle className="h-12 w-12 text-red-400 animate-pulse" />
                  </div>
                  {/* Sparkle Effects */}
                  <Sparkles
                    className="absolute -top-2 -right-2 h-6 w-6 text-red-300/60 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <Sparkles
                    className="absolute -bottom-1 -left-1 h-4 w-4 text-orange-300/60 animate-spin"
                    style={{
                      animationDuration: "4s",
                      animationDirection: "reverse",
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4 mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight">
                  {title}
                </h1>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                  {message}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {showRetryButton && (
                  <Button
                    onClick={handleRetry}
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <RefreshCw className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                    <span className="relative">Try Again</span>
                  </Button>
                )}

                {showBackButton && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="group relative overflow-hidden border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:border-slate-500"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="relative">Go Back</span>
                  </Button>
                )}

                {showHomeButton && (
                  <Button
                    variant="outline"
                    onClick={handleHome}
                    className="group relative overflow-hidden border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:border-slate-500"
                  >
                    <Home className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative">Home</span>
                  </Button>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-orange-500/5 to-transparent rounded-full blur-lg"></div>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              Error Code:{" "}
              <span className="font-mono text-slate-400">ERR_500</span> •
              <span className="ml-2">
                Need help?{" "}
                <button className="text-blue-400 hover:text-blue-300 underline transition-colors">
                  Contact Support
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Mouse Follower Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(59, 130, 246, 0.06), transparent 40%)`,
        }}
      ></div>
    </div>
  );
};

export default ErrorScreen;
