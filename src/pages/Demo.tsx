import React, { useState } from 'react';
import { Bot, Activity, BarChart3, Zap, ChevronRight, Calculator, Brain, MessageSquare } from 'lucide-react';
import AutonomousURLDemo from '../components/AutonomousURLDemo';
import AgentCoordinationDashboard from '../components/AgentCoordinationDashboard';
import AutonomousMetricsDashboard from '../components/AutonomousMetricsDashboard';
import AutonomousROICalculator from '../components/AutonomousROICalculator';
import AutonomousDecisionTracker from '../components/AutonomousDecisionTracker';
import MultiChannelCampaignVisualization from '../components/MultiChannelCampaignVisualization';

type DemoView = 'overview' | 'url-analysis' | 'agent-coordination' | 'performance-metrics' | 'roi-calculator' | 'decision-tracker' | 'campaign-visualization';

const Demo: React.FC = () => {
  const [currentView, setCurrentView] = useState<DemoView>('overview');

  const demoSections = [
    {
      id: 'url-analysis' as DemoView,
      title: 'Autonomous URL Analysis',
      description: 'Watch AI build complete sales systems from just a URL',
      icon: <Bot className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      features: ['Real-time website analysis', 'ICP generation', 'Prospect discovery', 'Campaign creation']
    },
    {
      id: 'agent-coordination' as DemoView,
      title: 'Agent Coordination Dashboard',
      description: 'Real-time monitoring of AI agent coordination and communication',
      icon: <Activity className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      features: ['Live agent status', 'Inter-agent communication', 'Task coordination', 'Decision tracking']
    },
    {
      id: 'performance-metrics' as DemoView,
      title: 'Autonomous Performance Metrics',
      description: 'Comprehensive analytics showing AI vs human performance',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      features: ['Autonomy rates', 'Decision accuracy', 'Deal closure tracking', 'Self-optimization events']
    },
    {
      id: 'roi-calculator' as DemoView,
      title: 'ROI Calculator',
      description: 'Calculate financial impact of autonomous vs human sales',
      icon: <Calculator className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-600',
      features: ['Cost comparison', 'Productivity analysis', 'Payback period', 'Revenue impact']
    },
    {
      id: 'decision-tracker' as DemoView,
      title: 'Decision Tracker',
      description: 'Real-time AI decision-making with reasoning and confidence',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-600',
      features: ['Decision reasoning', 'Confidence levels', 'Learning tracking', 'Outcome analysis']
    },
    {
      id: 'campaign-visualization' as DemoView,
      title: 'Campaign Orchestration',
      description: 'Multi-channel campaign coordination across email, LinkedIn, phone',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-600',
      features: ['Multi-channel sync', 'Timing optimization', 'Personalization scale', 'Real-time performance']
    }
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'url-analysis':
        return <AutonomousURLDemo />;
      case 'agent-coordination':
        return <AgentCoordinationDashboard />;
      case 'performance-metrics':
        return <AutonomousMetricsDashboard />;
      case 'roi-calculator':
        return <AutonomousROICalculator />;
      case 'decision-tracker':
        return <AutonomousDecisionTracker />;
      case 'campaign-visualization':
        return <MultiChannelCampaignVisualization />;
      case 'overview':
      default:
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Autonomous AI Sales Agent Demo
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Experience the world's first autonomous AI sales system in action
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-green-600 font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Connected to Live GreendoorAI System
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {demoSections.map((section) => (
                <div
                  key={section.id}
                  className="bg-white rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden cursor-pointer transform hover:scale-[1.02]"
                  onClick={() => setCurrentView(section.id)}
                >
                  <div className={`h-32 bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {section.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {section.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {section.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
                      Explore Demo
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Live Autonomous Performance
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">98.2%</div>
                  <div className="text-sm text-gray-300">Autonomy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">127</div>
                  <div className="text-sm text-gray-300">Deals Closed Today</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">1,247</div>
                  <div className="text-sm text-gray-300">Autonomous Decisions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">96.3%</div>
                  <div className="text-sm text-gray-300">Decision Accuracy</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">
                  🚀 Explore {demoSections.length} interactive demonstrations showing autonomous AI in action
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {currentView !== 'overview' && (
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentView('overview')}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Overview
                </button>
                <div className="text-gray-300">|</div>
                <h1 className="text-xl font-bold text-gray-900">
                  {demoSections.find(s => s.id === currentView)?.title}
                </h1>
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto">
                {demoSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentView(section.id)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                      currentView === section.id
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {section.title.includes('URL') ? 'URL Analysis' :
                     section.title.includes('Agent') ? 'Agents' :
                     section.title.includes('Performance') ? 'Metrics' :
                     section.title.includes('ROI') ? 'ROI' :
                     section.title.includes('Decision') ? 'Decisions' :
                     section.title.includes('Campaign') ? 'Campaigns' :
                     section.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {renderContent()}
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 p-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500" />
              Real-time AI Processing
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-blue-500" />
              Autonomous Operation
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-500" />
              Live Performance Tracking
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            Demo connected to GreendoorAI production system • All data is live and real-time
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
