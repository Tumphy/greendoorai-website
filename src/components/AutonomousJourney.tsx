import React from 'react';
import { Bot, Zap, Clock, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';

const AutonomousJourney: React.FC = () => {
  const phases = [
    {
      phase: 1,
      title: "URL to Autonomous System",
      duration: "30 Minutes",
      icon: <Zap className="w-8 h-8 text-white" />,
      bgColor: "bg-green-500",
      description: "Your journey to autonomy begins with a single URL. Our AI analyzes your website, understands your business, and builds a complete, autonomous sales system tailored to your specific needs.",
      steps: [
        { title: "Website Intelligence Extraction", description: "AI deconstructs your site's value proposition, target market, and offerings.", icon: <Bot /> },
        { title: "Autonomous ICP Generation", description: "Dynamic buyer personas are created with pain points and buying signals.", icon: <Cpu /> },
        { title: "System Activation", description: "The autonomous sales agent is deployed and begins operation.", icon: <ShieldCheck /> }
      ]
    },
    {
      phase: 2,
      title: "Autonomous Operation",
      duration: "24/7 Continuous",
      icon: <Clock className="w-8 h-8 text-white" />,
      bgColor: "bg-blue-500",
      description: "Once activated, your AI sales agent works around the clock, performing the work of an entire sales team without any human intervention required.",
      steps: [
        { title: "Prospect Discovery", description: "Continuously scans millions of sources to find ideal prospects.", icon: <Bot /> },
        { title: "Campaign Orchestration", description: "Launches and manages hyper-personalized outreach campaigns.", icon: <Cpu /> },
        { title: "Deal Management", description: "Nurtures leads, handles objections, and schedules meetings autonomously.", icon: <ShieldCheck /> }
      ]
    },
    {
      phase: 3,
      title: "Self-Evolution & Improvement",
      duration: "Continuous",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      bgColor: "bg-purple-500",
      description: "Your autonomous agent is a learning system. It continuously analyzes its own performance, optimizes its strategies, and becomes more effective over time.",
      steps: [
        { title: "Performance Analysis", description: "AI reviews campaign results and decision accuracy in real-time.", icon: <Bot /> },
        { title: "Strategy Optimization", description: "Automatically refines messaging, targeting, and timing for better results.", icon: <Cpu /> },
        { title: "Intelligence Upgrades", description: "Integrates new winning strategies across the entire system.", icon: <ShieldCheck /> }
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {phases.map((phase) => (
        <div key={phase.phase} className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 text-center md:w-1/4">
            <div className={`w-24 h-24 rounded-full ${phase.bgColor} mx-auto flex items-center justify-center shadow-lg`}>
              {phase.icon}
            </div>
            <h3 className="text-2xl font-bold mt-4">{phase.title}</h3>
            <p className="text-lg text-gray-500">{phase.duration}</p>
          </div>
          <div className="flex-grow">
            <p className="text-xl text-gray-700 mb-8">{phase.description}</p>
            <div className="space-y-6">
              {phase.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md border">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutonomousJourney; 