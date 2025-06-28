import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutonomousJourney from "@/components/AutonomousJourney";
import { Bot } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The Autonomous Journey
              </h1>
            </div>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              From a single URL to a fully autonomous sales operation. Here's how it works.
            </p>
          </div>
          <AutonomousJourney />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
