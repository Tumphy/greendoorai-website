import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare,
  Linkedin,
  Clock,
  TrendingUp,
  Users,
  Target,
  Zap,
  Calendar,
  BarChart3,
  Activity,
  Play,
  Pause,
  Eye,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Check,
  X
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Channel {
  id: string;
  name: string;
  type: 'email' | 'linkedin' | 'phone' | 'sms';
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  active: boolean;
  performance: {
    sent: number;
    opened: number;
    replied: number;
    meetings: number;
    response_rate: number;
    conversion_rate: number;
  };
}

interface CampaignStep {
  id: string;
  channelType: Channel['type'];
  day: number;
  time: string;
  subject: string;
  personalizedFor: string[];
  status: 'scheduled' | 'sending' | 'sent' | 'completed';
  performance?: {
    sent: number;
    engagement: number;
    replies: number;
  };
}

interface Prospect {
  id: string;
  name: string;
  company: string;
  title: string;
  score: number;
  stage: 'research' | 'outreach' | 'engaged' | 'nurturing' | 'qualified';
  lastTouch: string;
  nextAction: string;
  channels: {
    email: boolean;
    linkedin: boolean;
    phone: boolean;
  };
  timeline: {
    date: string;
    channel: Channel['type'];
    action: string;
    result: 'pending' | 'success' | 'no_response';
  }[];
}

interface MultiChannelCampaignVisualizationProps {}

const channelIcons = {
  email: <Mail className="w-6 h-6 text-blue-500" />,
  linkedin: <Linkedin className="w-6 h-6 text-sky-600" />,
};

const statusIcons = {
  executed: <Check className="w-5 h-5 text-green-500" />,
  failed: <X className="w-5 h-5 text-red-500" />,
  pending: <Clock className="w-5 h-5 text-gray-500" />,
};

const MultiChannelCampaignVisualization: React.FC<MultiChannelCampaignVisualizationProps> = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string>('enterprise-saas');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);
  const [selectedProspect, setSelectedProspect] = useState<Prospect | null>(null);

  const channels: Channel[] = [
    {
      id: 'email',
      name: 'Email',
      type: 'email',
      icon: <Mail className="w-5 h-5" />,
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      active: true,
      performance: { sent: 1247, opened: 423, replied: 89, meetings: 23, response_rate: 0.21, conversion_rate: 0.05 }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      type: 'linkedin',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'bg-blue-700',
      bgColor: 'bg-blue-50',
      active: true,
      performance: { sent: 834, opened: 312, replied: 67, meetings: 18, response_rate: 0.21, conversion_rate: 0.05 }
    },
    {
      id: 'phone',
      name: 'Phone',
      type: 'phone',
      icon: <Phone className="w-5 h-5" />,
      color: 'bg-green-600',
      bgColor: 'bg-green-50',
      active: true,
      performance: { sent: 156, opened: 89, replied: 34, meetings: 12, response_rate: 0.38, conversion_rate: 0.14 }
    },
    {
      id: 'sms',
      name: 'SMS',
      type: 'sms',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'bg-purple-600',
      bgColor: 'bg-purple-50',
      active: false,
      performance: { sent: 67, opened: 45, replied: 12, meetings: 3, response_rate: 0.27, conversion_rate: 0.07 }
    }
  ];

  const campaignSteps: CampaignStep[] = [
    {
      id: '1',
      channelType: 'email',
      day: 1,
      time: '09:15 AM',
      subject: 'AI-Powered Sales Automation for {{company}}',
      personalizedFor: ['company', 'industry', 'recent_news'],
      status: 'completed',
      performance: { sent: 234, engagement: 87, replies: 23 }
    },
    {
      id: '2',
      channelType: 'linkedin',
      day: 3,
      time: '02:30 PM',
      subject: 'Connection request with personalized note about {{recent_achievement}}',
      personalizedFor: ['recent_achievement', 'mutual_connections'],
      status: 'completed',
      performance: { sent: 189, engagement: 134, replies: 45 }
    },
    {
      id: '3',
      channelType: 'email',
      day: 7,
      time: '10:45 AM',
      subject: 'Following up on {{specific_pain_point}} at {{company}}',
      personalizedFor: ['pain_point', 'company_growth', 'tech_stack'],
      status: 'sending',
      performance: { sent: 156, engagement: 67, replies: 18 }
    },
    {
      id: '4',
      channelType: 'phone',
      day: 12,
      time: '11:20 AM',
      subject: 'Personal call about {{specific_use_case}}',
      personalizedFor: ['use_case', 'roi_calculation'],
      status: 'scheduled'
    },
    {
      id: '5',
      channelType: 'linkedin',
      day: 16,
      time: '03:15 PM',
      subject: 'Value-driven follow-up with {{industry_insight}}',
      personalizedFor: ['industry_insight', 'competitor_analysis'],
      status: 'scheduled'
    }
  ];

  const prospects: Prospect[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      company: 'TechFlow Solutions',
      title: 'VP of Sales',
      score: 92,
      stage: 'qualified',
      lastTouch: '2 hours ago',
      nextAction: 'Follow-up call scheduled for tomorrow 2 PM',
      channels: { email: true, linkedin: true, phone: true },
      timeline: [
        { date: '2024-01-15', channel: 'email', action: 'Initial outreach sent', result: 'success' },
        { date: '2024-01-17', channel: 'linkedin', action: 'Connection accepted', result: 'success' },
        { date: '2024-01-22', channel: 'email', action: 'Follow-up sent', result: 'success' },
        { date: '2024-01-25', channel: 'phone', action: 'Discovery call', result: 'success' }
      ]
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      company: 'DataScale Corp',
      title: 'Director of Revenue Operations',
      score: 78,
      stage: 'engaged',
      lastTouch: '1 day ago',
      nextAction: 'LinkedIn message with case study',
      channels: { email: true, linkedin: true, phone: false },
      timeline: [
        { date: '2024-01-16', channel: 'email', action: 'Initial outreach sent', result: 'success' },
        { date: '2024-01-18', channel: 'linkedin', action: 'Connection request sent', result: 'pending' },
        { date: '2024-01-23', channel: 'email', action: 'Follow-up with resources', result: 'success' }
      ]
    },
    {
      id: '3',
      name: 'Jennifer Walsh',
      company: 'CloudVenture Inc',
      title: 'Chief Revenue Officer',
      score: 85,
      stage: 'nurturing',
      lastTouch: '3 days ago',
      nextAction: 'Phone call with ROI analysis',
      channels: { email: true, linkedin: false, phone: true },
      timeline: [
        { date: '2024-01-14', channel: 'email', action: 'Initial outreach sent', result: 'success' },
        { date: '2024-01-21', channel: 'email', action: 'Follow-up sent', result: 'no_response' },
        { date: '2024-01-24', channel: 'phone', action: 'Voicemail left', result: 'pending' }
      ]
    }
  ];

  // Simulate campaign progression
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentDay(prev => (prev >= 20 ? 1 : prev + 1));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const getChannelConfig = (type: Channel['type']) => {
    return channels.find(c => c.type === type) || channels[0];
  };

  const getStageColor = (stage: Prospect['stage']) => {
    const colors = {
      research: 'text-gray-600 bg-gray-100',
      outreach: 'text-blue-600 bg-blue-100',
      engaged: 'text-green-600 bg-green-100',
      nurturing: 'text-yellow-600 bg-yellow-100',
      qualified: 'text-purple-600 bg-purple-100'
    };
    return colors[stage];
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-green-600" />
          Multi-Channel Campaign Visualization
        </CardTitle>
        <CardDescription>Visualizing an autonomous campaign for {selectedProspect?.name || 'Jane Doe at TechCorp'}.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          {selectedProspect?.timeline.map((stage, index) => (
            <div key={index} className="flex items-start gap-6 mb-8">
              <div className="relative z-10 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                {channelIcons[stage.channel]}
              </div>
              <div className="flex-1 pt-2">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{stage.action}</p>
                  {statusIcons[stage.result === 'success' ? 'executed' : stage.result === 'pending' ? 'pending' : 'failed']}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiChannelCampaignVisualization;
