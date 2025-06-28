import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutonomousPricingTiers from "@/components/AutonomousPricingTiers";
import { DollarSign, Users, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Revolutionary Pricing
              </h1>
            </div>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Deploy an autonomous AI workforce for less than the cost of a single sales rep.
            </p>
          </div>
          
          <AutonomousPricingTiers />

          <div className="mt-24 bg-white p-12 rounded-lg shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">The Autonomous Advantage</h3>
                <p className="mt-4 text-lg text-gray-600">
                  Traditional sales teams are expensive and inefficient. GreenDoor AI offers a new paradigm.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Traditional Sales Team (1 SDR)</h4>
                      <p className="text-gray-600">Avg. Cost: $8,000 - $12,000 / month</p>
                      <p className="text-sm text-gray-500">Includes salary, commission, benefits, and overhead.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Autonomous AI Sales Agent</h4>
                      <p className="text-gray-600">Starting at: $3,000 / month</p>
                      <p className="text-sm text-gray-500">Works 24/7, never sleeps, and continuously improves.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600">4x</div>
                <div className="text-xl font-semibold text-gray-800 mt-2">More Cost-Effective</div>
                <p className="text-gray-600 mt-2">...with unparalleled speed and scale.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
