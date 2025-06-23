import { useState } from "react";
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

  const handleDownload = (plan: string) => {
    setSelectedPlan(plan);
    setDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-100">TaskVibe</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white">
              Pricing
            </a>
            <a href="#team" className="text-slate-300 hover:text-white">
              Team
            </a>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
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
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1 text-sm bg-blue-500/20 text-blue-300 border-blue-500/30 mx-auto"
          >
            <Star className="h-3.5 w-3.5 mr-1" />
            Revolutionizing Task Management
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The First Task Manager That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Follows You Everywhere
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Pin Point Task Manager combines personal focus management with
            intelligent team collaboration. Eliminate productivity friction with
            our floating task window and AI-powered prioritization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
              onClick={() => handleDownload("free")}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8"
            >
              <Globe className="h-5 w-5 mr-2" />
              Try Web Version
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-sm bg-purple-500/20 text-purple-300 border-purple-500/30 mx-auto"
            >
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Pin Point Task Manager?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our revolutionary approach to task management combines
              cutting-edge technology with intuitive design to boost your
              productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-200">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <Laptop className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Floating Focus Window
              </h3>
              <p className="text-slate-300">
                A persistent, always-on-top task window that follows you across
                all applications, ensuring you never lose focus.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-200">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Smart Task Auto-Prioritization
              </h3>
              <p className="text-slate-300">
                AI-powered algorithm that automatically reorders tasks based on
                urgency, impact, dependencies, and team capacity.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-200">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Team Collaboration
              </h3>
              <p className="text-slate-300">
                Real-time team awareness and coordination tools with live
                presence, instant updates, and activity feeds.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-sm bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mx-auto"
            >
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Flexible pricing options for individuals, teams, and enterprises.
              All plans include core features with premium options for growing
              teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-200">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-slate-400 mb-1">/month</span>
                </div>
                <p className="text-slate-300">
                  Perfect for individual users getting started with task
                  management.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Personal Kanban Board</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Basic Floating Window (Desktop)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Up to 3 projects</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Basic task analytics</span>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => handleDownload("free")}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Free
              </Button>
            </Card>

            {/* Pro Plan */}
            <Card className="p-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30 hover:from-blue-900/60 hover:to-purple-900/60 transition-all duration-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-3 py-1">
                  Most Popular
                </Badge>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">$9.99</span>
                  <span className="text-slate-400 mb-1">/month</span>
                </div>
                <p className="text-slate-300">
                  For professionals who need advanced features and team
                  collaboration.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Everything in Free plan
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Advanced Floating Window
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Team collaboration (up to 5 members)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Basic AI prioritization
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Unlimited projects</span>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                onClick={() => handleDownload("pro")}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Pro
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-200">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Enterprise
                </h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">$24.99</span>
                  <span className="text-slate-400 mb-1">/month</span>
                </div>
                <p className="text-slate-300">
                  For large teams and organizations with advanced needs.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Everything in Pro plan</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Advanced AI prioritization
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Unlimited team members</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Advanced analytics & reporting
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    Priority support & training
                  </span>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white"
                onClick={() => handleDownload("enterprise")}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Enterprise
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-3 py-1 text-sm bg-blue-500/20 text-blue-300 border-blue-500/30 mx-auto"
            >
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet the Creators
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our talented team of developers and designers who brought Pin
              Point Task Manager to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-200 text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarFallback className="text-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-medium">
                  CJ
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-white mb-1">
                Criztian Jade
              </h3>
              <p className="text-blue-400 mb-4">Lead Developer</p>
              <p className="text-slate-300 text-sm">
                Full-stack developer with expertise in React, Next.js, and
                TypeScript. Passionate about creating intuitive user
                experiences.
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Github className="h-5 w-5 text-slate-400" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Globe className="h-5 w-5 text-slate-400" />
                </Button>
              </div>
            </Card>

            {/* Team Member 2 */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-200 text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarFallback className="text-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white font-medium">
                  TF
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-white mb-1">
                Ted Fabiona
              </h3>
              <p className="text-emerald-400 mb-4">Graphics Designer</p>
              <p className="text-slate-300 text-sm">
                Creative designer with a keen eye for detail and user interface
                design. Specializes in creating beautiful, functional designs.
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Github className="h-5 w-5 text-slate-400" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Globe className="h-5 w-5 text-slate-400" />
                </Button>
              </div>
            </Card>

            {/* Team Member 3 */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-200 text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarFallback className="text-xl bg-gradient-to-br from-amber-500 to-red-600 text-white font-medium">
                  EM
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-white mb-1">Erman</h3>
              <p className="text-amber-400 mb-4">Backend Developer</p>
              <p className="text-slate-300 text-sm">
                Experienced backend developer with expertise in Node.js,
                databases, and API development. Focused on performance and
                security.
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Github className="h-5 w-5 text-slate-400" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Globe className="h-5 w-5 text-slate-400" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-10 bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Productivity?
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                Join thousands of professionals who have already boosted their
                productivity with Pin Point Task Manager.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                  onClick={() => handleDownload("pro")}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-500 text-slate-300 hover:bg-slate-700 px-8"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Try Web Version
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-800/50 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-100">
                  TaskVibe
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                The first productivity tool that follows you everywhere AND
                tells you exactly what to work on next.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-slate-400 hover:text-white text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-slate-400 hover:text-white text-sm"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#team"
                    className="text-slate-400 hover:text-white text-sm"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 TaskVibe. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="rounded-full">
                <Github className="h-5 w-5 text-slate-400" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Globe className="h-5 w-5 text-slate-400" />
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
              <Card className="p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer">
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
              <Card className="p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer">
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
              <Card className="p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer">
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
              <Card className="p-4 bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all cursor-pointer">
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
