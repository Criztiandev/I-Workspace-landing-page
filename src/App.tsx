import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone,
  Laptop,
  Target,
  TrendingUp,
  Award,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Play,
  ChevronDown,
  Quote
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Animation hook for sections
  const useAnimateOnScroll = () => {
    const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: true
    });
    return { ref, inView };
  };

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Hero Section Component
  const HeroSection = () => {
    const { ref, inView } = useAnimateOnScroll();
    
    return (
      <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-colors">
            🚀 New Product Launch
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent leading-tight">
            Build Amazing
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into reality with our cutting-edge platform. 
            Create, launch, and scale your digital products faster than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Features Section Component
  const FeaturesSection = () => {
    const { ref, inView } = useAnimateOnScroll();
    
    const features = [
      {
        icon: <Zap className="h-8 w-8" />,
        title: "Lightning Fast",
        description: "Built for speed with modern technologies and optimized performance."
      },
      {
        icon: <Shield className="h-8 w-8" />,
        title: "Secure & Reliable",
        description: "Enterprise-grade security with 99.9% uptime guarantee."
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: "Global Scale",
        description: "Deploy worldwide with our global CDN and infrastructure."
      },
      {
        icon: <Smartphone className="h-8 w-8" />,
        title: "Mobile First",
        description: "Responsive design that works perfectly on all devices."
      },
      {
        icon: <Target className="h-8 w-8" />,
        title: "Precision Tools",
        description: "Advanced analytics and targeting for better results."
      },
      {
        icon: <TrendingUp className="h-8 w-8" />,
        title: "Growth Focused",
        description: "Built-in tools to help you scale and grow your business."
      }
    ];

    return (
      <section id="features" ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
              Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Powerful features designed to help you build, launch, and scale your digital products with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-slate-100">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // About Section Component
  const AboutSection = () => {
    const { ref, inView } = useAnimateOnScroll();
    
    return (
      <section id="about" ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                About Us
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                Empowering Digital Innovation
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                We're on a mission to democratize digital product creation. Our platform combines 
                cutting-edge technology with intuitive design to help entrepreneurs, startups, and 
                enterprises bring their ideas to life.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                With over 10,000 successful launches and counting, we've proven that great ideas 
                deserve great tools. Join the revolution and see what you can build.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
                  <div className="text-slate-400">Products Launched</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                  <div className="text-slate-400">Happy Users</div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <Card className="relative bg-slate-800/60 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-100">Industry Recognition</h3>
                        <p className="text-slate-400">Award-winning platform</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        <span className="text-slate-300">Best Product of the Year 2024</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        <span className="text-slate-300">Top Innovation Award</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        <span className="text-slate-300">Customer Choice Winner</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Testimonials Section Component
  const TestimonialsSection = () => {
    const { ref, inView } = useAnimateOnScroll();
    
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        content: "This platform transformed how we build and launch products. The speed and efficiency gains are incredible.",
        rating: 5
      },
      {
        name: "Michael Chen",
        role: "Product Manager, InnovateCorp",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        content: "The best investment we've made for our product development process. Highly recommended!",
        rating: 5
      },
      {
        name: "Emily Rodriguez",
        role: "Founder, DigitalFlow",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        content: "From idea to launch in record time. The tools and support are absolutely phenomenal.",
        rating: 5
      }
    ];

    return (
      <section id="testimonials" ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our amazing community has to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-100">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-slate-600 mb-2" />
                  <p className="text-slate-300 leading-relaxed">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Pricing Section Component
  const PricingSection = () => {
    const { ref, inView } = useAnimateOnScroll();
    
    const plans = [
      {
        name: "Starter",
        price: "$29",
        period: "/month",
        description: "Perfect for individuals and small projects",
        features: [
          "Up to 5 projects",
          "Basic analytics",
          "Email support",
          "1GB storage",
          "Standard templates"
        ],
        popular: false
      },
      {
        name: "Professional",
        price: "$79",
        period: "/month",
        description: "Ideal for growing businesses and teams",
        features: [
          "Unlimited projects",
          "Advanced analytics",
          "Priority support",
          "10GB storage",
          "Premium templates",
          "Team collaboration",
          "Custom branding"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "$199",
        period: "/month",
        description: "For large organizations with advanced needs",
        features: [
          "Everything in Professional",
          "Dedicated account manager",
          "Custom integrations",
          "Unlimited storage",
          "White-label solution",
          "Advanced security",
          "SLA guarantee"
        ],
        popular: false
      }
    ];

    return (
      <section id="pricing" ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/20">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Flexible pricing options to fit your needs. Start free and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-500 ${plan.popular ? 'ring-2 ring-blue-500/50 scale-105' : ''} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-slate-100 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-100">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <CardDescription className="text-slate-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-8 ${plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'bg-slate-700 hover:bg-slate-600 text-slate-100'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Section Component
  const ContactSection = () => {
    const { ref, inView } = useAnimateOnScroll();
    
    return (
      <section id="contact" ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-4 bg-pink-500/10 text-pink-400 border-pink-500/20">
              Contact
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to start your journey? We'd love to hear from you. Let's build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Start a Conversation</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you have questions about our platform, need help getting started, or want to discuss 
                a custom solution, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">Email</h4>
                    <p className="text-slate-400">hello@yourcompany.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">Phone</h4>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">Office</h4>
                    <p className="text-slate-400">123 Innovation Street, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className={`bg-slate-800/40 border-slate-700/50 backdrop-blur-sm transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                      <Input placeholder="John" className="bg-slate-700/50 border-slate-600 text-slate-100" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                      <Input placeholder="Doe" className="bg-slate-700/50 border-slate-600 text-slate-100" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-slate-700/50 border-slate-600 text-slate-100" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                    <Input placeholder="How can we help?" className="bg-slate-700/50 border-slate-600 text-slate-100" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={4}
                      className="bg-slate-700/50 border-slate-600 text-slate-100"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  };

  // Navigation Component
  const Navigation = () => {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-100">ProductLab</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors hover:text-blue-400 ${
                      activeSection === item.id ? 'text-blue-400' : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Sign In
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };

  // Footer Component
  const Footer = () => {
    return (
      <footer className="bg-slate-900 border-t border-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-100">ProductLab</span>
              </div>
              <p className="text-slate-400 mb-4">
                Empowering digital innovation with cutting-edge tools and platforms.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <MessageSquare className="h-4 w-4 text-slate-400" />
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <Mail className="h-4 w-4 text-slate-400" />
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors">
                  <Globe className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-100 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Features</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-100 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">About</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-100 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Community</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Status</a></li>
                <li><a href="#" className="text-slate-400 hover:text-slate-300 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 ProductLab. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-slate-300 text-sm transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-slate-300 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-slate-300 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;