import React, { useState } from 'react';
import { Bot, Target, Users, MessageCircle, Calendar, TrendingUp, Zap, AlertCircle } from 'lucide-react';
import { useURLAnalysis } from '../hooks/useAPI';
import { AutonomousResults } from '../services/api';

interface AnalysisStep {
  id: number;
  title: string;
  description: string;
  duration: number;
  icon: React.ReactNode;
}

const AutonomousURLDemo: React.FC = () => {
  const [url, setUrl] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [analysisResults, setAnalysisResults] = useState<AutonomousResults | null>(null);

  const urlAnalysis = useURLAnalysis();

  const analysisSteps: AnalysisStep[] = [
    {
      id: 1,
      title: "Autonomous Website Intelligence",
      description: "AI extracting value proposition, target market, and competitive positioning...",
      duration: 8000,
      icon: <Bot className="w-5 h-5" />
    },
    {
      id: 2, 
      title: "Dynamic ICP Generation",
      description: "Creating comprehensive buyer personas with pain points and buying signals...",
      duration: 12000,
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Multi-Source Prospect Discovery",
      description: "Scanning databases, social signals, and intent data for qualified prospects...",
      duration: 15000,
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Intelligent Campaign Orchestration",
      description: "Generating personalized sequences across email, LinkedIn, and phone...",
      duration: 10000,
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      id: 5,
      title: "Autonomous System Activation",
      description: "Deploying AI agents for 24/7 autonomous sales operation...",
      duration: 5000,
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  const handleAnalyze = async () => {
    if (!url) return;
    
    setTimeElapsed(0);
    setCurrentStep(0);
    setAnalysisResults(null);

    // Start the real autonomous analysis
    try {
      // Simulate real-time progress tracking
      const progressInterval = setInterval(() => {
        setTimeElapsed(prev => {
          const newTime = prev + 1000;
          
          // Update current step based on elapsed time
          let stepIndex = 0;
          let cumulativeTime = 0;
          for (let i = 0; i < analysisSteps.length; i++) {
            cumulativeTime += analysisSteps[i].duration;
            if (newTime < cumulativeTime) {
              stepIndex = i;
              break;
            }
          }
          setCurrentStep(stepIndex);
          
          return newTime;
        });
      }, 1000);

      // Execute real API call
      const result = await urlAnalysis.mutateAsync({
        url,
        options: {
          depth: 'comprehensive',
          includeCompetitors: true,
          generateCampaigns: true
        }
      });

      // Clear progress interval
      clearInterval(progressInterval);
      
      // Set final results
      setAnalysisResults(result);
      setCurrentStep(analysisSteps.length);

    } catch (error) {
      console.error('Analysis failed:', error);
    }
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const totalDuration = analysisSteps.reduce((acc, step) => acc + step.duration, 0);
  const remainingTime = Math.max(0, totalDuration - timeElapsed);
  const isAnalyzing = urlAnalysis.isPending;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg border">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900">
            Real Autonomous AI Demo
          </h3>
        </div>
        <p className="text-gray-600 text-lg">
          Watch AI build your complete autonomous sales system from just a URL
        </p>
        <div className="mt-2 text-sm text-green-600 font-semibold">
          ⚡ Connected to Live GreendoorAI System
        </div>
      </div>

      <div className="mb-8">
        <div className="flex gap-4">
          <input
            type="url"
            placeholder="https://your-company.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
            disabled={isAnalyzing}
          />
          <button
            onClick={handleAnalyze}
            disabled={!url || isAnalyzing}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
          >
            {isAnalyzing ? 'AI Analyzing...' : 'Deploy Autonomous System'}
          </button>
        </div>
      </div>

      {isAnalyzing && (
        <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-green-50 rounded-lg border border-green-200">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              Autonomous Analysis in Progress
            </h4>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {formatTime(remainingTime)}
              </div>
              <div className="text-sm text-gray-500">estimated remaining</div>
            </div>
          </div>

          <div className="space-y-4">
            {analysisSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center p-4 rounded-lg transition-all duration-500 ${
                  index === currentStep
                    ? 'bg-green-100 border-2 border-green-400 shadow-md transform scale-[1.02]'
                    : index < currentStep
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className={`mr-4 transition-colors duration-300 ${
                  index === currentStep ? 'text-green-600' : 
                  index < currentStep ? 'text-green-500' : 'text-gray-400'
                }`}>
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{step.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{step.description}</div>
                  {index === currentStep && (
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${((timeElapsed - analysisSteps.slice(0, index).reduce((acc, s) => acc + s.duration, 0)) / step.duration) * 100}%` 
                        }}
                      ></div>
                    </div>
                  )}
                </div>
                
                <div className="ml-4">
                  {index < currentStep ? (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : index === currentStep ? (
                    <div className="w-8 h-8 border-3 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center">
              <Bot className="w-5 h-5 text-yellow-600 mr-3" />
              <span className="text-sm text-yellow-800">
                <strong>Real Autonomous Processing:</strong> AI agents are working independently - 
                analyzing your website, discovering prospects, and creating campaigns. No human intervention required.
              </span>
            </div>
          </div>
        </div>
      )}

      {analysisResults && (
        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-green-800">
                🎉 Autonomous Sales System Deployed!
              </h4>
              <p className="text-green-700 mt-1">
                AI Confidence Level: {Math.round(analysisResults.autonomous_confidence * 100)}%
              </p>
            </div>
          </div>

          {/* Enhanced Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
              <div className="text-2xl font-bold text-green-600">{analysisResults.prospects.qualified}</div>
              <div className="text-sm text-green-700">Qualified prospects</div>
              <div className="text-xs text-gray-500 mt-1">
                {analysisResults.prospects.high_intent} high-intent signals
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
              <div className="text-2xl font-bold text-green-600">{analysisResults.campaigns.total_created}</div>
              <div className="text-sm text-green-700">AI-generated campaigns</div>
              <div className="text-xs text-gray-500 mt-1">
                {Math.round(analysisResults.campaigns.personalization_rate * 100)}% personalization rate
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
              <div className="text-2xl font-bold text-green-600">{analysisResults.estimated_performance.meetings_48h}</div>
              <div className="text-sm text-green-700">Expected meetings 48hrs</div>
              <div className="text-xs text-gray-500 mt-1">
                {Math.round(analysisResults.estimated_performance.response_rate * 100)}% response rate
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
              <div className="text-2xl font-bold text-green-600">{analysisResults.prospects.decision_makers}</div>
              <div className="text-sm text-green-700">Decision makers found</div>
              <div className="text-xs text-gray-500 mt-1">
                C-level and VP contacts
              </div>
            </div>
          </div>

          {/* Enhanced ICP Profile */}
          <div className="bg-white p-6 rounded-lg border border-green-200 mb-6 shadow-sm">
            <h5 className="font-bold text-green-800 mb-4 text-lg flex items-center gap-2">
              <Target className="w-5 h-5" />
              AI-Generated ICP Profile
            </h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="mb-3">
                  <strong className="text-green-700">Primary Target:</strong>
                  <div className="text-gray-700">{analysisResults.icp.title}</div>
                </div>
                <div className="mb-3">
                  <strong className="text-green-700">Company Profile:</strong>
                  <div className="text-gray-700">{analysisResults.icp.company_size}</div>
                  <div className="text-gray-700">{analysisResults.icp.industry_focus}</div>
                </div>
                <div>
                  <strong className="text-green-700">Key Pain Points:</strong>
                  <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
                    {analysisResults.icp.pain_points.map((pain, index) => (
                      <li key={index}>{pain}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="mb-3">
                  <strong className="text-green-700">Buying Signals:</strong>
                  <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
                    {analysisResults.icp.buying_signals.map((signal, index) => (
                      <li key={index}>{signal}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-green-700">Decision Makers:</strong>
                  <ul className="list-disc list-inside mt-1 text-sm text-gray-600">
                    {analysisResults.icp.decision_makers.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg">
              🚀 Activate Autonomous System
            </button>
            <button className="flex-1 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-all duration-200">
              📊 View Agent Dashboard
            </button>
            <button className="flex-1 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold border border-green-600 hover:bg-green-50 transition-all duration-200">
              📈 Performance Analytics
            </button>
          </div>
        </div>
      )}

      {urlAnalysis.isError && (
        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800">
              Analysis failed. Please check the URL and try again.
            </span>
          </div>
        </div>
      )}

      {!isAnalyzing && !analysisResults && !urlAnalysis.isError && (
        <div className="text-center py-12 bg-gradient-to-r from-gray-50 to-green-50 rounded-lg border border-gray-200">
          <Bot className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg mb-2">
            Enter your company URL above to witness autonomous AI in action
          </p>
          <p className="text-sm text-gray-500">
            Real analysis typically completes in 30-90 seconds
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Live API Connected
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Real AI Processing
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Autonomous Operation
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutonomousURLDemo;
