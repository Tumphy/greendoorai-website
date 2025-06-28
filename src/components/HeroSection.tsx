import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-background opacity-50" />
      
      {/* Floating icons for visual interest */}
      <div className="absolute top-20 left-10 text-green-500 opacity-20 animate-pulse">
        <Bot size={32} />
      </div>
      <div className="absolute bottom-20 right-10 text-green-500 opacity-20 animate-pulse delay-1000">
        <Target size={28} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-green-600 bg-clip-text text-transparent leading-tight">
          The World's First Autonomous AI Sales Agent
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Just paste your URL. Get booked meetings in 48 hours. Zero human sales work required.
        </p>
        
        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            🤖 24/7 Autonomous Operation
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            ⚡ 48-Hour URL to Meetings
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            🧠 Self-Evolving Intelligence
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            🎯 Zero Human Sales Work
          </span>
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold group transition-all duration-200 hover:scale-105"
            asChild
          >
            <a href="#cta">
              Watch AI Build Your Sales System
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold transition-all duration-200 hover:scale-105"
            asChild
          >
            <a href="https://calendly.com/greendoorai" target="_blank" rel="noopener noreferrer">
              See Autonomous Demo
            </a>
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 text-sm text-muted-foreground">
          <p>Join the autonomous sales revolution</p>
          <div className="mt-4 flex justify-center items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">127</div>
              <div className="text-xs">Deals closed by AI today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98.3%</div>
              <div className="text-xs">Autonomous decision accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">&lt;2%</div>
              <div className="text-xs">Human intervention required</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;