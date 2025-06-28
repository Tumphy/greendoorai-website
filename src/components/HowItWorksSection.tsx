import { Zap, Clock, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">How It Works</h2>
      <p className="text-xl text-gray-600 mb-12">Three simple steps to autonomous sales.</p>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="p-8 bg-white rounded-lg shadow-md border">
          <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">1. Activate</h3>
          <p className="mt-2 text-gray-600">Provide your URL. Our AI analyzes your business and deploys a custom autonomous sales agent in minutes.</p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md border">
          <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">2. Operate</h3>
          <p className="mt-2 text-gray-600">Your AI agent works 24/7, prospecting, creating campaigns, and booking meetings completely on its own.</p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md border">
          <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">3. Evolve</h3>
          <p className="mt-2 text-gray-600">The AI continuously learns and optimizes its strategies, becoming more effective and intelligent over time.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
