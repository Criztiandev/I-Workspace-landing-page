import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ThankYouPage from "./components/ThankYouPage";
import {
  Download,
  Github,
  Globe,
  Laptop,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
  Target,
  Rocket,
  Brain,
  Coffee,
  Heart,
  ArrowRight,
  Play,
  TrendingUp,
  Shield,
  Smartphone,
  Monitor,
  HardDrive,
  Activity,
  Award,
  BarChart3,
  Headphones,
  Layers,
  Lock,
  MessageSquare,
  Workflow,
  Menu,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ErrorScreen from "./components/ErrorScreen";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Scroll reveal hooks
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [featuresRef, featuresInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [pricingRef, pricingInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Loading simulation
  useEffect(() => {
    if (showLoadingScreen) {
      const timer = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setShowLoadingScreen(false), 1000);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(timer);
    }
  }, [showLoadingScreen]);

  const handleDownload = (plan: string) => {
    setSelectedPlan(plan);
    setDownloadModalOpen(true);
  };

  const handleCompleteDownload = () => {
    setDownloadModalOpen(false);
    setShowThankYouPage(true);
  };

  // Demo function to show error screen
  const handleShowError = () => {
    setShowError(true);
  };

  const handleRetryError = () => {
    setShowError(false);
  };

  const handleShowLoading = () => {
    setLoadingProgress(0);
    setShowLoadingScreen(true);
  };

  const handleDownloadDesktopApp = () => {
    // Create a temporary link element to trigger download from Dropbox
    const link = document.createElement("a");
    link.href =
      "https://www.dropbox.com/scl/fi/bmost3ko2t17gzp9cmji2/IWorkspace-0.1.0-win.exe?rlkey=aca7hsmbujuvocs1fcbp54c1c&st=0jjfmzrw&dl=1";
    link.download = "IWorkspace-0.1.0-win.exe";
    link.target = "_blank"; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (showError) {
    return (
      <ErrorScreen
        title="Demo Error Screen"
        message="This is a demonstration of the error screen component with the same design aesthetic as your landing page."
        onRetry={handleRetryError}
        onHome={() => setShowError(false)}
      />
    );
  }

  if (showLoadingScreen) {
    return (
      <LoadingScreen
        message="Preparing your dashboard"
        subMessage="Setting up your personalized experience..."
        progress={loadingProgress}
        showProgress={true}
        variant="detailed"
        onComplete={() => setShowLoadingScreen(false)}
      />
    );
  }

  if (showThankYouPage && selectedPlan) {
    return (
      <ThankYouPage
        onBackToHome={() => setShowThankYouPage(false)}
        plan={selectedPlan}
      />
    );
  }

  const floatingElements = [
    { icon: Zap, delay: "0s", duration: "6s" },
    { icon: Target, delay: "1s", duration: "8s" },
    { icon: Rocket, delay: "2s", duration: "7s" },
    { icon: Brain, delay: "3s", duration: "9s" },
    { icon: Coffee, delay: "4s", duration: "6s" },
    { icon: Heart, delay: "5s", duration: "8s" },
    { icon: Award, delay: "6s", duration: "7s" },
    { icon: BarChart3, delay: "7s", duration: "9s" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden font-poppins">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes - responsive sizes */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-8 sm:left-20 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

        {/* Floating icons - hide on very small screens */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-bounce opacity-20 hidden sm:block"
            style={{
              left: `${10 + index * 12}%`,
              top: `${20 + index * 8}%`,
              animationDelay: element.delay,
              animationDuration: element.duration,
            }}
          >
            <element.icon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
          </div>
        ))}

        {/* Grid pattern - responsive size */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:25px_25px] sm:bg-[size:50px_50px]"></div>
      </div>

      {/* Mouse follower effect - hide on mobile */}
      <div
        className="fixed w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out z-0 hidden sm:block"
        style={{
          left: mousePosition.x - 96,
          top: mousePosition.y - 96,
        }}
      ></div>

      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-xl relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <img
                src="/logo/iworkspace.png"
                alt="IWorkspace Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl object-contain bg-white"
              />
            </div>
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IWorkspace
            </span>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 animate-pulse text-xs sm:text-sm px-1 sm:px-2">
              <Activity className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
              LIVE
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#features"
              className="text-slate-300 hover:text-white transition-colors duration-300 hover:scale-105 transform flex items-center gap-2 text-sm xl:text-base"
            >
              <Layers className="h-4 w-4" />
              Features
            </a>

            <a
              href="#team"
              className="text-slate-300 hover:text-white transition-colors duration-300 hover:scale-105 transform flex items-center gap-2 text-sm xl:text-base"
            >
              <Users className="h-4 w-4" />
              Team
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadDesktopApp}
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:scale-105 transform transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Desktop App
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden"
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-700/50 bg-slate-800/50 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a
                href="#features"
                className="block text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 py-2"
              >
                <Layers className="h-4 w-4" />
                Features
              </a>
              <a
                href="#pricing"
                className="block text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 py-2"
              >
                <BarChart3 className="h-4 w-4" />
                Pricing
              </a>
              <a
                href="#team"
                className="block text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 py-2"
              >
                <Users className="h-4 w-4" />
                Team
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadDesktopApp}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 w-full justify-start"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Desktop App
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative z-10 transition-all duration-1000 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto text-center max-w-5xl">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Badge
              variant="outline"
              className="mb-4 sm:mb-6 px-3 sm:px-6 py-1 sm:py-2 text-sm sm:text-base bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 mx-auto hover:scale-105 transform transition-all duration-300 cursor-pointer"
            >
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 animate-spin" />
              🚀 Revolutionizing Task Management
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 animate-pulse" />
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            The First Task Manager That{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                Follows You Everywhere
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            IWorkspace combines personal focus management with intelligent team
            collaboration. Eliminate productivity friction with our floating
            task window and AI-powered prioritization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              onClick={handleShowLoading}
            >
              <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 animate-bounce" />
              Get Started
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleShowError}
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 group"
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:animate-pulse" />
              Learn More
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
            {[
              { number: "50K+", label: "Active Users", icon: Users },
              { number: "99.9%", label: "Uptime", icon: Shield },
              { number: "2.5x", label: "Productivity Boost", icon: TrendingUp },
              { number: "24/7", label: "Support", icon: Headphones },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center group hover:scale-110 transform transition-all duration-300 ${
                  heroInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-800/20 relative z-10 transition-all duration-1000 ${
          featuresInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge
              variant="outline"
              className="mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base bg-purple-500/20 text-purple-300 border-purple-500/30 mx-auto hover:scale-105 transform transition-all duration-300"
            >
              <Workflow className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />✨
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
              Why Choose IWorkspace?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              Our revolutionary approach to task management combines
              cutting-edge technology with intuitive design to boost your
              productivity like never before.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <Card
              className={`p-6 sm:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 transform relative overflow-hidden ${
                featuresInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-3 sm:p-4 bg-blue-500/20 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6 group-hover:scale-110 transform transition-all duration-300">
                  <Monitor className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  🎯 Floating Focus Window
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  A persistent, always-on-top task window that follows you
                  across all applications, ensuring you never lose focus on what
                  matters most.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card
              className={`p-6 sm:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group hover:scale-105 transform relative overflow-hidden ${
                featuresInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-3 sm:p-4 bg-purple-500/20 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6 group-hover:scale-110 transform transition-all duration-300">
                  <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  🧠 Smart AI Prioritization
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  AI-powered algorithm that automatically reorders tasks based
                  on urgency, impact, dependencies, and team capacity. Work
                  smarter, not harder.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card
              className={`p-6 sm:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 group hover:scale-105 transform relative overflow-hidden sm:col-span-2 lg:col-span-1 ${
                featuresInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-3 sm:p-4 bg-emerald-500/20 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6 group-hover:scale-110 transform transition-all duration-300">
                  <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                  🤝 Team Collaboration
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Real-time team awareness and coordination tools with live
                  presence, instant updates, and activity feeds that keep
                  everyone in sync.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        ref={pricingRef}
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative z-10 transition-all duration-1000 ${
          pricingInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      ></section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative z-10 transition-all duration-1000 ${
          ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30 relative overflow-hidden group hover:scale-105 transform transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-center relative z-10">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Rocket className="h-12 w-12 sm:h-16 sm:w-16 text-blue-400 animate-bounce" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
                Ready to Transform Your Productivity? 🚀
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
                Join thousands of professionals who have already boosted their
                productivity with IWorkspace. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-110 transition-all duration-300 shadow-2xl"
                  onClick={() => handleDownload("pro")}
                >
                  <Download className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 animate-bounce" />
                  Start Free Trial
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 ml-2 animate-pulse" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setVideoModalOpen(true)}
                  className="border-slate-500 text-slate-300 hover:bg-slate-700 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-110 transition-all duration-300 group"
                >
                  <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:animate-pulse" />
                  Watch Demo
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-xl py-12 sm:py-16 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <img
                    src="/logo/iworkspace.png"
                    alt="IWorkspace Logo"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
                <span className="text-xl sm:text-2xl font-bold text-slate-100 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IWorkspace
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The first productivity tool that follows you everywhere AND
                tells you exactly what to work on next. Made with ❤️ for
                productivity enthusiasts.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg flex items-center gap-2">
                <Layers className="h-4 w-4 sm:h-5 sm:w-5" />
                Product
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg flex items-center gap-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#team"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg flex items-center gap-2">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
                Legal
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm flex items-center gap-2 text-center sm:text-left">
              © 2025 IWorkspace. All rights reserved. Made with
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              for productivity lovers.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full hover:scale-110 transform transition-all duration-300"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 hover:text-white" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full hover:scale-110 transform transition-all duration-300"
              >
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 hover:text-white" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Download Modal */}
      <Dialog open={downloadModalOpen} onOpenChange={setDownloadModalOpen}>
        <DialogContent className="sm:max-w-md bg-slate-800 border-slate-700 mx-4">
          <DialogHeader>
            <DialogTitle className="text-slate-100 flex items-center gap-2 text-lg sm:text-xl">
              <Download className="h-5 w-5" />
              Download{" "}
              {selectedPlan &&
                selectedPlan.charAt(0).toUpperCase() +
                  selectedPlan.slice(1)}{" "}
              Version
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <p className="text-slate-300 text-sm sm:text-base">
              Choose your preferred platform to download IWorkspace:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
              {/* Windows */}
              <Card
                className="p-3 sm:p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer hover:scale-105 transform duration-300"
                onClick={handleCompleteDownload}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg">
                    <Monitor className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base">
                      Windows
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Windows 10/11
                    </p>
                  </div>
                </div>
              </Card>

              {/* macOS */}
              <Card
                className="p-3 sm:p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer hover:scale-105 transform duration-300"
                onClick={handleCompleteDownload}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-slate-500/20 rounded-lg">
                    <Laptop className="h-5 w-5 sm:h-6 sm:w-6 text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base">
                      macOS
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      macOS 11+
                    </p>
                  </div>
                </div>
              </Card>

              {/* Linux */}
              <Card
                className="p-3 sm:p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer hover:scale-105 transform duration-300"
                onClick={handleCompleteDownload}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-amber-500/20 rounded-lg">
                    <HardDrive className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base">
                      Linux
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Ubuntu, Debian, Fedora
                    </p>
                  </div>
                </div>
              </Card>

              {/* Mobile */}
              <Card
                className="p-3 sm:p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer hover:scale-105 transform duration-300"
                onClick={handleCompleteDownload}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-emerald-500/20 rounded-lg">
                    <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm sm:text-base">
                      Mobile
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      iOS & Android
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-slate-400 text-xs sm:text-sm mb-4">
                By downloading, you agree to our{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
              <Button
                variant="outline"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                onClick={() => setDownloadModalOpen(false)}
              >
                <X className="h-4 w-4 mr-2" />
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Demo Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="sm:max-w-4xl bg-slate-800 border-slate-700 mx-4 p-0 overflow-hidden">
          <DialogHeader className="p-4 sm:p-6 border-b border-slate-700">
            <DialogTitle className="text-slate-100 flex items-center gap-2 text-lg sm:text-xl">
              <Play className="h-5 w-5" />
              IWorkspace Demo
            </DialogTitle>
          </DialogHeader>

          <div className="aspect-video w-full">
            <video
              src="/video/3163534-uhd_3840_2160_30fps.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-4 sm:p-6 border-t border-slate-700 flex justify-end">
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
              onClick={() => setVideoModalOpen(false)}
            >
              <X className="h-4 w-4 mr-2" />
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating logo at the bottom corner */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none transition-all duration-300">
        <img
          src="/logo/white_circle_360x360.png"
          alt="IWorkspace Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </div>
  );
};

export default App;
