import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  Lightbulb,
  BarChart3,
  MessageSquare,
  Users,
  Calendar,
  Zap,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  Activity,
  Bot
} from 'lucide-react';
import { useAgentActivity } from '../hooks/useAPI';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Decision {
  id: string;
  timestamp: string;
  type: 'prospect_prioritization' | 'message_optimization' | 'campaign_timing' | 'resource_allocation' | 'risk_assessment';
  title: string;
  description: string;
  reasoning: string[];
  confidence: number;
  dataPoints: {
    label: string;
    value: string | number;
    impact: 'positive' | 'negative' | 'neutral';
  }[];
  outcome?: {
    status: 'success' | 'failure' | 'pending';
    result: string;
    improvement: number;
  };
  learningApplied: boolean;
  alternatives: {
    option: string;
    probability: number;
    reasoning: string;
  }[];
  agentName: string;
}

interface DecisionCardProps {
  decision: Decision;
  onViewDetails: (decision: Decision) => void;
}

const DecisionCard: React.FC<DecisionCardProps> = ({ decision, onViewDetails }) => {
  const typeConfig = {
    prospect_prioritization: {
      icon: <Target className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      label: 'Prospect Priority'
    },
    message_optimization: {
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      label: 'Message Optimization'
    },
    campaign_timing: {
      icon: <Clock className="w-5 h-5" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      label: 'Campaign Timing'
    },
    resource_allocation: {
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      label: 'Resource Allocation'
    },
    risk_assessment: {
      icon: <AlertCircle className="w-5 h-5" />,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      label: 'Risk Assessment'
    }
  };

  const config = typeConfig[decision.type];
  
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return 'text-green-600 bg-green-100';
    if (confidence >= 0.7) return 'text-blue-600 bg-blue-100';
    if (confidence >= 0.5) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getOutcomeIcon = () => {
    if (!decision.outcome) return <Clock className="w-4 h-4 text-gray-400" />;
    if (decision.outcome.status === 'success') return <CheckCircle2 className="w-4 h-4 text-green-600" />;
    if (decision.outcome.status === 'failure') return <AlertCircle className="w-4 h-4 text-red-600" />;
    return <Clock className="w-4 h-4 text-yellow-600" />;
  };

  return (
    <div className={`p-6 rounded-lg border-2 ${config.borderColor} ${config.bgColor} hover:shadow-lg transition-all duration-200`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 bg-gradient-to-r ${config.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
            {config.icon}
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">{config.label}</div>
            <h3 className="font-bold text-gray-900">{decision.title}</h3>
          </div>
        </div>
        
        <div className="text-right">
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${getConfidenceColor(decision.confidence)}`}>
            {Math.round(decision.confidence * 100)}% confident
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {new Date(decision.timestamp).toLocaleTimeString()}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4">{decision.description}</p>

      {/* Key Data Points */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {decision.dataPoints.slice(0, 4).map((point, index) => (
          <div key={index} className="bg-white p-3 rounded border">
            <div className="text-xs text-gray-500">{point.label}</div>
            <div className={`font-semibold ${
              point.impact === 'positive' ? 'text-green-600' :
              point.impact === 'negative' ? 'text-red-600' : 'text-gray-900'
            }`}>
              {point.value}
            </div>
          </div>
        ))}
      </div>

      {/* Outcome */}
      {decision.outcome && (
        <div className="mb-4 p-3 bg-white rounded border">
          <div className="flex items-center gap-2 mb-1">
            {getOutcomeIcon()}
            <span className="text-sm font-medium">
              {decision.outcome.status === 'success' ? 'Success' :
               decision.outcome.status === 'failure' ? 'Learning Opportunity' : 'In Progress'}
            </span>
          </div>
          <div className="text-sm text-gray-600">{decision.outcome.result}</div>
          {decision.outcome.improvement > 0 && (
            <div className="text-xs text-green-600 font-medium mt-1">
              +{decision.outcome.improvement}% improvement
            </div>
          )}
        </div>
      )}

      {/* Learning Indicator */}
      {decision.learningApplied && (
        <div className="flex items-center gap-2 mb-4 text-sm">
          <Lightbulb className="w-4 h-4 text-yellow-500" />
          <span className="text-gray-600">Applied previous learning</span>
        </div>
      )}

      <button 
        onClick={() => onViewDetails(decision)}
        className="w-full bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <Eye className="w-4 h-4" />
        View Reasoning
      </button>
    </div>
  );
};

interface DecisionDetailsModalProps {
  decision: Decision | null;
  onClose: () => void;
}

const DecisionDetailsModal: React.FC<DecisionDetailsModalProps> = ({ decision, onClose }) => {
  if (!decision) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{decision.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 mt-2">{decision.description}</p>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Decision Reasoning */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI Reasoning Process
              </h3>
              
              <div className="space-y-3">
                {decision.reasoning.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="text-sm text-gray-700">{reason}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Confidence Factors</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Data Quality</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                      <span className="text-sm font-medium">94%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Historical Accuracy</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '91%'}}></div>
                      </div>
                      <span className="text-sm font-medium">91%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Context Relevance</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '88%'}}></div>
                      </div>
                      <span className="text-sm font-medium">88%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Options */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Alternative Considerations
              </h3>
              
              <div className="space-y-3">
                {decision.alternatives.map((alternative, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-gray-900">{alternative.option}</div>
                      <div className="text-sm text-gray-600">{Math.round(alternative.probability * 100)}% likely</div>
                    </div>
                    <div className="text-sm text-gray-600">{alternative.reasoning}</div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-blue-400 h-1.5 rounded-full transition-all duration-300"
                        style={{width: `${alternative.probability * 100}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data Points */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Supporting Data</h4>
                <div className="grid grid-cols-2 gap-3">
                  {decision.dataPoints.map((point, index) => (
                    <div key={index} className="p-3 bg-white border rounded-lg">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{point.label}</div>
                      <div className={`font-bold text-lg ${
                        point.impact === 'positive' ? 'text-green-600' :
                        point.impact === 'negative' ? 'text-red-600' : 'text-gray-900'
                      }`}>
                        {point.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Details */}
          {decision.outcome && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                {decision.outcome.status === 'success' ? 
                  <CheckCircle2 className="w-5 h-5 text-green-600" /> :
                  <AlertCircle className="w-5 h-5 text-red-600" />
                }
                Decision Outcome
              </h4>
              <p className="text-gray-700 mb-2">{decision.outcome.result}</p>
              {decision.outcome.improvement > 0 && (
                <p className="text-green-600 font-medium">
                  Performance improved by {decision.outcome.improvement}%
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AutonomousDecisionTracker: React.FC = () => {
  const { data: agentActivity, isLoading, error } = useAgentActivity();
  const [decisions, setDecisions] = useState<Decision[]>([]);
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);
  const [filter, setFilter] = useState<'all' | Decision['type']>('all');
  const [sortBy, setSortBy] = useState<'timestamp' | 'confidence'>('timestamp');

  useEffect(() => {
    if (agentActivity) {
      const decisions = agentActivity.flatMap(agent => agent.communication_log.map(log => ({ ...log, agentName: agent.agent_name })));
      setDecisions(decisions);
    }
  }, [agentActivity]);

  if (isLoading) return <div>Loading Decision Log...</div>;
  if (error) return <div>Error loading decision log.</div>;

  const filteredDecisions = decisions.filter(decision => 
    filter === 'all' || decision.type === filter
  );

  const sortedDecisions = [...filteredDecisions].sort((a, b) => {
    if (sortBy === 'timestamp') {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    } else {
      return b.confidence - a.confidence;
    }
  });

  const successRate = decisions.filter(d => d.outcome?.status === 'success').length / decisions.filter(d => d.outcome).length || 0;
  const avgConfidence = decisions.reduce((sum, d) => sum + d.confidence, 0) / decisions.length || 0;
  const learningRate = decisions.filter(d => d.learningApplied).length / decisions.length || 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-green-600" />
          Autonomous Decision Tracker
        </CardTitle>
        <CardDescription>A real-time log of your AI agent's decisions and reasoning.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {decisions?.slice(0, 5).map((decision, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold">{decision.agentName}</div>
                <div className="text-sm text-gray-500">{new Date(decision.timestamp).toLocaleTimeString()}</div>
              </div>
              <p>{decision.content}</p>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant={decision.priority === 'high' ? 'destructive' : 'default'}>
                  {decision.priority}
                </Badge>
                <div>
                  <span className="font-semibold">To:</span> {decision.to_agent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AutonomousDecisionTracker;
