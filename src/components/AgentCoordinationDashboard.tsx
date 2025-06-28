import React, { useState } from 'react';
import { 
  Bot, 
  Search, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Brain, 
  Zap, 
  Activity,
  MessageCircle,
  Eye,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Cpu
} from 'lucide-react';
import { useAgentActivity, useRealTimeUpdates } from '../hooks/useAPI';
import { AgentActivity } from '../services/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AgentStatusIndicatorProps {
  status: AgentActivity['status'];
}

const AgentStatusIndicator: React.FC<AgentStatusIndicatorProps> = ({ status }) => {
  const statusConfig = {
    working: { color: 'bg-green-500', pulse: true, label: 'Working' },
    coordinating: { color: 'bg-blue-500', pulse: true, label: 'Coordinating' },
    learning: { color: 'bg-purple-500', pulse: true, label: 'Learning' },
    idle: { color: 'bg-gray-400', pulse: false, label: 'Idle' }
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${config.color} ${config.pulse ? 'animate-pulse' : ''}`}></div>
      <span className="text-sm font-medium">{config.label}</span>
    </div>
  );
};

interface AgentCardProps {
  agent: AgentActivity;
  onViewDetails: (agent: AgentActivity) => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, onViewDetails }) => {
  const agentTypeConfig = {
    research: { 
      icon: <Search className="w-6 h-6" />, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    outreach: { 
      icon: <MessageSquare className="w-6 h-6" />, 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    deal_management: { 
      icon: <Cpu className="w-6 h-6" />, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    analytics: { 
      icon: <Brain className="w-6 h-6" />, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  };

  const config = agentTypeConfig[agent.agent_type];

  return (
    <div className={`p-6 rounded-lg border-2 ${config.borderColor} ${config.bgColor} transition-all duration-200 hover:shadow-lg`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
            {config.icon}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{agent.agent_name}</h3>
            <p className="text-sm text-gray-600 capitalize">{agent.agent_type.replace('_', ' ')} Agent</p>
          </div>
        </div>
        <AgentStatusIndicator status={agent.status} />
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <div className="text-sm font-medium text-gray-700 mb-1">Current Task:</div>
          <div className="text-sm text-gray-600">{agent.current_task}</div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="font-medium text-gray-700">Progress:</span>
            <span className="ml-2 text-gray-600">{agent.progress}%</span>
          </div>
          <div className="w-24 bg-gray-200 rounded-full h-2">
            <div 
              className={`bg-gradient-to-r ${config.color} h-2 rounded-full transition-all duration-300`}
              style={{ width: `${agent.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="text-center p-2 bg-white rounded border">
          <div className="font-bold text-lg">{agent.decisions_made}</div>
          <div className="text-gray-600">Decisions Made</div>
        </div>
        <div className="text-center p-2 bg-white rounded border">
          <div className="font-bold text-lg">{Math.round(agent.success_rate * 100)}%</div>
          <div className="text-gray-600">Success Rate</div>
        </div>
      </div>

      <div className="text-xs text-gray-500 mb-3">
        <Clock className="w-3 h-3 inline mr-1" />
        {agent.last_action}
      </div>

      <button 
        onClick={() => onViewDetails(agent)}
        className="w-full bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
      >
        <Eye className="w-4 h-4 inline mr-2" />
        View Details
      </button>
    </div>
  );
};

interface CommunicationLogProps {
  communications: AgentActivity['communication_log'];
}

const CommunicationLog: React.FC<CommunicationLogProps> = ({ communications }) => {
  const priorityColors = {
    low: 'border-gray-200 bg-gray-50',
    medium: 'border-blue-200 bg-blue-50',
    high: 'border-orange-200 bg-orange-50',
    urgent: 'border-red-200 bg-red-50'
  };

  return (
    <div className="space-y-3">
      {communications.slice(0, 5).map((comm, index) => (
        <div key={index} className={`p-3 rounded-lg border ${priorityColors[comm.priority]}`}>
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium">
                {comm.from_agent} → {comm.to_agent}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              {new Date(comm.timestamp).toLocaleTimeString()}
            </span>
          </div>
          <div className="text-sm text-gray-700">{comm.content}</div>
          <div className="flex items-center gap-2 mt-2">
            <span className={`px-2 py-1 text-xs rounded-full ${
              comm.priority === 'urgent' ? 'bg-red-100 text-red-700' :
              comm.priority === 'high' ? 'bg-orange-100 text-orange-700' :
              comm.priority === 'medium' ? 'bg-blue-100 text-blue-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {comm.priority}
            </span>
            <span className="text-xs text-gray-500 capitalize">{comm.message_type.replace('_', ' ')}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const AgentIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'research':
      return <Bot className="w-6 h-6 text-blue-500" />;
    case 'outreach':
      return <Zap className="w-6 h-6 text-green-500" />;
    case 'deal_management':
      return <Cpu className="w-6 h-6 text-purple-500" />;
    case 'analytics':
      return <Bot className="w-6 h-6 text-yellow-500" />;
    default:
      return <Bot className="w-6 h-6 text-gray-500" />;
  }
};

const AgentCoordinationDashboard: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<AgentActivity | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  
  const { data: agents, isLoading, error } = useAgentActivity();

  // Set up real-time updates
  useRealTimeUpdates((data) => {
    console.log('Real-time agent update:', data);
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-gray-600">Loading agent activity...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800">Failed to load agent activity</span>
          </div>
        </div>
      </div>
    );
  }

  const workingAgents = agents?.filter(agent => agent.status === 'working').length || 0;
  const coordinatingAgents = agents?.filter(agent => agent.status === 'coordinating').length || 0;
  const totalDecisions = agents?.reduce((sum, agent) => sum + agent.decisions_made, 0) || 0;
  const avgSuccessRate = agents?.reduce((sum, agent) => sum + agent.success_rate, 0) / (agents?.length || 1) || 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-green-600" />
          Agent Coordination Dashboard
        </CardTitle>
        <CardDescription>Real-time visualization of autonomous agents working together.</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents?.map((agent) => (
          <div key={agent.agent_id} className="p-4 bg-gray-50 rounded-lg border">
            <div className="flex items-center gap-4 mb-4">
              <AgentIcon type={agent.agent_type} />
              <h4 className="text-lg font-bold">{agent.agent_name}</h4>
            </div>
            <div className="space-y-2">
              <p><strong>Status:</strong> {agent.status}</p>
              <p><strong>Task:</strong> {agent.current_task}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${agent.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AgentCoordinationDashboard;
