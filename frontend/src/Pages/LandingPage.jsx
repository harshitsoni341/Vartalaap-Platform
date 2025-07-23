import { Link } from "react-router";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  Palette,
  MessagesSquare,
  Video,
  Bot,
  Globe,
  Users,
  Star,
  Play,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

 import Carousel from "../components/Carousel";
 import Footer from "../components/Footer";

const LandingPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const languages = ["Spanish", "French", "German", "Japanese", "Korean", "Italian" , "Hindi"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/*  Hero Section  */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Orbs */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl animate-pulse`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-transparent to-purple-400/10"></div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center max-md:mt-10">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-accent/5 backdrop-blur-sm rounded-full mb-6 border border-primary-content/40">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">Join 5,000+ language learners worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master{" "}
              <span
                key={currentLanguage}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse"
              >
                {languages[currentLanguage]}
              </span>
              <br />
              Through Real Conversations
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-base-content max-w-3xl mx-auto leading-relaxed">
              Skip boring textbooks. Connect with native speakers worldwide and learn languages 
              through authentic conversations, powered by AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={"/signup"}>
              <button className="btn btn-primary btn-lg px-8 py-4 text-lg font-semibold rounded-full border-none hover:bg-secondary shadow-xl hover:scale-105 transform transition-all duration-200">
                Start Learning Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
           
              <a href='https://github.com/harshitsoni341/Vartalaap-Platform' target="_blank">
              <button className="btn btn-ghost btn-lg px-8 py-4 text-lg font-semibold rounded-full border-1 border-base-content/80  hover:bg-primary/20 hover:scale-105 transform transition-all duration-200">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-base-content/80">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>4.9/5 from 1,000+ reviews</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-blue-400 mr-1" />
                <span>10+ languages available</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-green-400 mr-1" />
                <span>180+ countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-base-content/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-base-content/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 ">

        <div className="absolute inset-0">
          {/* Floating Orbs */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl animate-pulse`}
              style={{
                left: `${75 + i * -15}%`,
                top: `${140 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
          
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-primary">Vartalaap</span>?
              </h2>
              <p className="text-xl text-base-content max-w-3xl mx-auto leading-relaxed">
                Experience the future of language learning with our innovative platform that connects 
                you with real people for authentic conversations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Bot className="h-12 w-12 text-blue-600" />,
                title: "AI-Powered Assistant",
                description: "Get instant help with pronunciation, grammar, and cultural context from our smart AI that learns your learning style.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <MessagesSquare className="h-12 w-12 text-green-600" />,
                title: "Real-Time Chat",
                description: "Practice with native speakers through our advanced messaging system with built-in translation and correction tools.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: <Video className="h-12 w-12 text-purple-600" />,
                title: "HD Video Calls",
                description: "Face-to-face conversations with crystal clear video quality, screen sharing, and interactive whiteboards.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: <Palette className="h-12 w-12 text-orange-600" />,
                title: "Personalized Experience",
                description: "Customize your learning journey with 50+ themes, adaptive difficulty, and personalized lesson plans.",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-accent-content/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform animate-fade-in-up delay-${index * 100}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10 text-justify">
                  <div className="mb-6 p-4 bg-base-100 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-base-content group-hover:text-primary transition-colors text-center">
                    {feature.title}
                  </h3>
                  <p className="text-base-content leading-relaxed ">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Carousel */}
      <Carousel />

      {/* CTA Section */}
      <section className="py-24  relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-96 h-96 rounded-full bg-white/10 blur-3xl animate-pulse delay-${i * 500}`}
              style={{
                left: `${i * 30}%`,
                top: `${i * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center ">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-base-content leading-relaxed">
                Join our global community and start having real conversations in your target language today. 
                No credit card required.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to={"/signup"}>
                <button className="btn btn-lg px-10 py-4 text-lg font-semibold rounded-full bg-secondary/20 hover:bg-primary/20 border-none shadow-xl hover:scale-105 transform transition-all duration-200">
                  Get Started Free
                  <ChevronRight className="ml-2 h-6 w-6" />
                </button>
                </Link>

                <div className="flex items-center text-base-content/80">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Free forever • No credit card needed</span>
                </div>
              </div>

              <div className="mt-12 text-sm text-base-content/80">
                <p>Join 5,000+ learners who've already started their journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Custom CSS for animations
const styles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }

  .hover\\:scale-102:hover {
    transform: scale(1.02);
  }

  .group:hover .group-hover\\:scale-110 {
    transform: scale(1.1);
  }
`;

export default LandingPage;