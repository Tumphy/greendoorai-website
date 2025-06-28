import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AutonomousURLDemo from "@/components/AutonomousURLDemo";
import ProblemSection from "@/components/ProblemSection";
import UserPersonasSection from "@/components/UserPersonasSection";
import IntelligenceLayersSection from "@/components/IntelligenceLayersSection";
import FeatureModulesSection from "@/components/FeatureModulesSection";
import UserJourneySection from "@/components/UserJourneySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Autonomous Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              See Autonomous AI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our AI build a complete sales system from just your URL. 
              This is what autonomous really means.
            </p>
          </div>
          <AutonomousURLDemo />
        </div>
      </section>
      
      <ProblemSection />
      <FeatureModulesSection />
      <UserPersonasSection />
      <IntelligenceLayersSection />
      <UserJourneySection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
