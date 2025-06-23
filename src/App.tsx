import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
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
  Clock,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const App = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownload = (plan: string) => {
    setSelectedPlan(plan);
    setDownloadModalOpen(true);
  };

  const floatingElements = [
    { icon: Zap, delay: "0s", duration: "6s" },
    { icon: Target, delay: "1s", duration: "8s" },
    { icon: Rocket, delay: "2s", duration: "7s" },
    { icon: Brain, delay: "3s", duration: "9s" },
    { icon: Coffee, delay: "4s", duration: "6s" },
    { icon: Heart, delay: "5s", duration: "8s" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        
        {/* Floating icons */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`,
              animationDelay: element.delay,
              animationDuration: element.duration,
            }}
          >
            <element.icon className="w-6 h-6 text-blue-400" />
          </div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-xl relative z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6 text-white animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-2xl font-bold text-slate-100 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TaskVibe
            </span>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 animate-pulse">
              LIVE
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-300 hover:scale-105 transform">
              Features
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors duration-300 hover:scale-105 transform">
              Pricing
            </a>
            <a href="#team" className="text-slate-300 hover:text-white transition-colors duration-300 hover:scale-105 transform">
              Team
            </a>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:scale-105 transform transition-all duration-300"
            >
              Login
            </Button>
          </nav>
          <Button className="md:hidden" variant="ghost" size="sm">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center max-w-5xl">
          <div className="flex justify-center mb-8">
            <Badge
              variant="outline"
              className="mb-6 px-6 py-2 text-base bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 mx-auto hover:scale-105 transform transition-all duration-300 cursor-pointer"
            >
              <Star className="h-4 w-4 mr-2 animate-spin" />
              🚀 Revolutionizing Task Management
              <Sparkles className="h-4 w-4 ml-2 animate-pulse" />
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            The First Task Manager That{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                Follows You Everywhere
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pin Point Task Manager combines personal focus management with
            intelligent team collaboration. Eliminate productivity friction with
            our floating task window and AI-powered prioritization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              onClick={() => handleDownload("free")}
            >
              <Download className="h-6 w-6 mr-3 animate-bounce" />
              Download Free
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 group"
            >
              <Play className="h-5 w-5 mr-3 group-hover:animate-pulse" />
              Watch Demo
              <Globe className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50K+", label: "Active Users", icon: Users },
              { number: "99.9%", label: "Uptime", icon: Shield },
              { number: "2.5x", label: "Productivity Boost", icon: TrendingUp },
              { number: "24/7", label: "Support", icon: Clock },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transform transition-all duration-300"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-800/20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-base bg-purple-500/20 text-purple-300 border-purple-500/30 mx-auto hover:scale-105 transform transition-all duration-300"
            >
              ✨ Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Pin Point Task Manager?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our revolutionary approach to task management combines
              cutting-edge technology with intuitive design to boost your
              productivity like never before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-4 bg-blue-500/20 rounded-2xl w-fit mb-6 group-hover:scale-110 transform transition-all duration-300">
                  <Laptop className="h-8 w-8 text-blue-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  🎯 Floating Focus Window
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  A persistent, always-on-top task window that follows you across
                  all applications, ensuring you never lose focus on what matters most.
                </p>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group hover:scale-105 transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-4 bg-purple-500/20 rounded-2xl w-fit mb-6 group-hover:scale-110 transform transition-all duration-300">
                  <Brain className="h-8 w-8 text-purple-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  🧠 Smart AI Prioritization
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  AI-powered algorithm that automatically reorders tasks based on
                  urgency, impact, dependencies, and team capacity. Work smarter, not harder.
                </p>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 group hover:scale-105 transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="p-4 bg-emerald-500/20 rounded-2xl w-fit mb-6 group-hover:scale-110 transform transition-all duration-300">
                  <Users className="h-8 w-8 text-emerald-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                  🤝 Team Collaboration
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Real-time team awareness and coordination tools with live
                  presence, instant updates, and activity feeds that keep everyone in sync.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-base bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mx-auto hover:scale-105 transform transition-all duration-300"
            >
              💰 Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible pricing options for individuals, teams, and enterprises.
              All plans include core features with premium options for growing teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 transform">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-3">🆓 Free</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-slate-400 mb-2">/month</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Perfect for individual users getting started with task
                  management. No credit card required!
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Personal Kanban Board",
                  "Basic Floating Window (Desktop)",
                  "Up to 3 projects",
                  "Basic task analytics",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
                onClick={() => handleDownload("free")}
              >
                <Download className="h-5 w-5 mr-2" />
                Get Started Free
              </Button>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/50 hover:border-blue-400 transition-all duration-500 relative group hover:scale-110 transform shadow-2xl">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-2 text-sm font-semibold animate-pulse">
                  🔥 MOST POPULAR
                </Badge>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-3">⚡ Pro</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold text-white">$9.99</span>
                  <span className="text-slate-400 mb-2">/month</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  For professionals who need advanced features and team
                  collaboration. Boost your productivity to the next level!
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Everything in Free plan",
                  "Advanced Floating Window",
                  "Team collaboration (up to 5 members)",
                  "Basic AI prioritization",
                  "Unlimited projects",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => handleDownload("pro")}
              >
                <Rocket className="h-5 w-5 mr-2 animate-bounce" />
                Upgrade to Pro
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 group hover:scale-105 transform">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-3">🏢 Enterprise</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold text-white">$24.99</span>
                  <span className="text-slate-400 mb-2">/month</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  For large teams and organizations with advanced needs.
                  Enterprise-grade security and support included.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Everything in Pro plan",
                  "Advanced AI prioritization",
                  "Unlimited team members",
                  "Advanced analytics & reporting",
                  "Priority support & training",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white transform hover:scale-105 transition-all duration-300"
                onClick={() => handleDownload("enterprise")}
              >
                <Shield className="h-5 w-5 mr-2" />
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-slate-800/20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-base bg-blue-500/20 text-blue-300 border-blue-500/30 mx-auto hover:scale-105 transform transition-all duration-300"
            >
              👥 Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet the Creators
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our talented team of developers and designers who brought Pin
              Point Task Manager to life with passion and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 text-center group hover:scale-105 transform">
              <Avatar className="h-32 w-32 mx-auto mb-6 group-hover:scale-110 transform transition-all duration-300">
                <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                  CJ
                </AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Criztian Jade
              </h3>
              <p className="text-blue-400 mb-4 font-semibold">🚀 Lead Developer</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Full-stack developer with expertise in React, Next.js, and
                TypeScript. Passionate about creating intuitive user
                experiences that make people's lives easier.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="sm" className="rounded-full hover:scale-110 transform transition-all duration-300">
                  <Github className="h-5 w-5 text-slate-400 hover:text-white" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full hover:scale-110 transform transition-all duration-300">
                  <Globe className="h-5 w-5 text-slate-400 hover:text-white" />
                </Button>
              </div>
            </Card>

            {/* Team Member 2 */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 text-center group hover:scale-105 transform">
              <Avatar className="h-32 w-32 mx-auto mb-6 group-hover:scale-110 transform transition-all duration-300">
                <AvatarFallback className="text-2xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white font-bold">
                  TF
                </AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Ted Fabiona
              </h3>
              <p className="text-emerald-400 mb-4 font-semibold">🎨 Graphics Designer</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Creative designer with a keen eye for detail and user interface
                design. Specializes in creating beautiful, functional designs
                that users love to interact with.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="sm" className="rounded-full hover:scale-110 transform transition-all duration-300">
                  <Github className="h-5 w-5 text-slate-400 hover:text-white" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full hover:scale-110 transform transition-all duration-300">
                  <Globe className="h-5 w-5 text-slate-400 hover:text-white" />
                </Button>
              </div>
            </Card>

            {/* Team Member 3 */}
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 text-center group hover:scale-105 transform">
              <Avatar className="h-32 w-32 mx-auto mb-6 group-hover:scale-110 transform transition-all duration-300">
                <AvatarFallback className="text-2xl bg-gradient-to-br from-amber-500 to-red-600 text-white font-bold">
                  EM
                </AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-semibold text-white mb-2">Erman</h3>
              <p className="text-amber-400 mb-4 font-semibold">⚙️ Backend Developer</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Experienced backend developer with expertise in Node.js,
                databases, and API development. Focused on performance,
                security, and building rock-solid foundations.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="sm" className="rounded-full hover:scale-110 transform transition-all duration-300">
                  <Github className="h-5 w-5 text-slate-400 hover:text-white" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full hover:scale-110 transform transition-all duration-300">
                  <Globe className="h-5 w-5 text-slate-400 hover:text-white" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <Card className="p-12 bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30 relative overflow-hidden group hover:scale-105 transform transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Productivity? 🚀
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                Join thousands of professionals who have already boosted their
                productivity with Pin Point Task Manager. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 shadow-2xl"
                  onClick={() => handleDownload("pro")}
                >
                  <Download className="h-6 w-6 mr-3 animate-bounce" />
                  Start Free Trial
                  <Sparkles className="h-5 w-5 ml-2 animate-pulse" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-500 text-slate-300 hover:bg-slate-700 px-10 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 group"
                >
                  <Play className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                  Watch Demo
                  <Globe className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-xl py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white animate-pulse" />
                </div>
                <span className="text-2xl font-bold text-slate-100 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TaskVibe
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The first productivity tool that follows you everywhere AND
                tells you exactly what to work on next. Made with ❤️ for productivity enthusiasts.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
              <ul className="space-y-3">
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
              <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
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
              <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
              <ul className="space-y-3">
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

          <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 TaskVibe. All rights reserved. Made with 💜 for productivity lovers.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="rounded-full hover:scale-110 transform transition-all duration-300">
                <Github className="h-5 w-5 text-slate-400 hover:text-white" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full hover:scale-110 transform transition-all duration-300">
                <Globe className="h-5 w-5 text-slate-400 hover:text-white" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Download Modal */}
      <Dialog open={downloadModalOpen} onOpenChange={setDownloadModalOpen}>
        <DialogContent className="sm:max-w-md bg-slate-800 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-slate-100 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download{" "}
              {selectedPlan &&
                selectedPlan.charAt(0).toUpperCase() +
                  selectedPlan.slice(1)}{" "}
              Version
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <p className="text-slate-300">
              Choose your preferred platform to download Pin Point Task Manager:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* Windows */}
              <Card className="p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer hover:scale-105 transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Windows</h3>
                    <p className="text-slate-400 text-sm">Windows 10/11</p>
                  </div>
                </div>
              </Card>

              {/* macOS */}
              <Card className="p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer hover:scale-105 transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-500/20 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-slate-300"
                    >
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                      <path d="M10 2c1 .5 2 2 2 5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">macOS</h3>
                    <p className="text-slate-400 text-sm">macOS 11+</p>
                  </div>
                </div>
              </Card>

              {/* Linux */}
              <Card className="p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer hover:scale-105 transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-amber-400"
                    >
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20" />
                      <path d="M12 8v8" />
                      <path d="M8 12h8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Linux</h3>
                    <p className="text-slate-400 text-sm">
                      Ubuntu, Debian, Fedora
                    </p>
                  </div>
                </div>
              </Card>

              {/* Mobile */}
              <Card className="p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer hover:scale-105 transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-emerald-400"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" x2="12.01" y1="18" y2="18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Mobile</h3>
                    <p className="text-slate-400 text-sm">iOS & Android</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-slate-400 text-sm mb-4">
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
    </div>
  );
};

export default App;