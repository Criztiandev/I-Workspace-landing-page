import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Sparkles, Heart } from "lucide-react";
import { useEffect } from "react";

interface ThankYouPageProps {
  onBackToHome: () => void;
  plan?: string;
}

const ThankYouPage = ({ onBackToHome, plan = "free" }: ThankYouPageProps) => {
  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-8 sm:left-20 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:25px_25px] sm:bg-[size:50px_50px]"></div>
      </div>

      {/* Thank You Card */}
      <div className="max-w-3xl mx-auto w-full">
        <div className="p-6 sm:p-10 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl sm:rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Logo and Header */}
          <div className="flex flex-col items-center mb-8 sm:mb-10">
            <img 
              src="/logo/iworkspace.png" 
              alt="IWorkspace Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-contain bg-white p-1 mb-6 animate-bounce"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4">
              Thank You for Downloading
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x mt-2">
                IWorkspace {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </span>
            </h1>
          </div>
          
          {/* Message */}
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-lg sm:text-xl text-slate-300 mb-4 sm:mb-6">
              Your download should start automatically. If it doesn't,{" "}
              <Button variant="link" className="text-blue-400 p-0 h-auto font-semibold">
                click here
              </Button>{" "}
              to download manually.
            </p>
            
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg py-4 px-6 mb-6 sm:mb-8">
              <p className="text-emerald-400 flex items-center justify-center gap-2 font-medium">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Installation Instructions
              </p>
              <ol className="text-left text-slate-300 mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500/20 text-blue-400 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <span>Extract the downloaded zip file</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500/20 text-blue-400 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <span>Run the setup file and follow the installation wizard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500/20 text-blue-400 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <span>Launch IWorkspace and sign in with your account</span>
                </li>
              </ol>
            </div>
            
            <div className="flex justify-center gap-4 sm:gap-6">
              <Button
                variant="outline"
                onClick={onBackToHome}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 gap-2"
              >
                <Download className="h-4 w-4" />
                Download Again
              </Button>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center text-slate-400 text-sm">
            <p className="flex items-center justify-center gap-1">
              Thank you for choosing IWorkspace! We hope you enjoy using it.
              <Heart className="h-3 w-3 text-red-400 ml-1 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating logo at the bottom corner */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none transition-all duration-300">
        <img 
          src="/logo/white_circle_360x360.png" 
          alt="IWorkspace Logo" 
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={onBackToHome}
        />
      </div>
    </div>
  );
};

export default ThankYouPage; 