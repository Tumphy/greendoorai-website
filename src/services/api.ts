// GreendoorAI API Service - Backend Integration
// This service handles all autonomous AI operations

export interface URLAnalysisRequest {
  url: string;
  options?: {
    depth?: 'basic' | 'comprehensive';
    includeCompetitors?: boolean;
    generateCampaigns?: boolean;
  };
}

export interface ICPProfile {
  title: string;
  company_size: string;
  industry_focus: string;
  pain_points: string[];
  criteria: string[];
  buying_signals: string[];
  decision_makers: string[];
}

export interface AutonomousResults {
  companyName: string;
  industry: string;
  website_analysis: {
    value_proposition: string;
    target_market: string;
    product_categories: string[];
    pricing_model: string;
    content_quality_score: number;
  };
  icp: ICPProfile;
  prospects: {
    total_found: number;
    qualified: number;
    high_intent: number;
    decision_makers: number;
  };
  campaigns: {
    total_created: number;
    email_sequences: number;
    linkedin_sequences: number;
    personalization_rate: number;
  };
  estimated_performance: {
    meetings_48h: number;
    response_rate: number;
    conversion_probability: number;
  };
  autonomous_confidence: number;
}

export interface AgentActivity {
  agent_id: string;
  agent_name: string;
  agent_type: 'research' | 'outreach' | 'deal_management' | 'analytics';
  status: 'idle' | 'working' | 'coordinating' | 'learning';
  current_task: string;
  progress: number;
  decisions_made: number;
  success_rate: number;
  last_action: string;
  communication_log: AgentCommunication[];
}

export interface AgentCommunication {
  timestamp: string;
  from_agent: string;
  to_agent: string;
  message_type: 'data_request' | 'analysis_complete' | 'coordination' | 'alert';
  content: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface PerformanceMetrics {
  autonomous_decisions_today: number;
  human_interventions_today: number;
  autonomy_rate: number;
  deals_closed_by_ai: {
    today: number;
    this_week: number;
    this_month: number;
  };
  decision_accuracy: number;
  self_optimization_events: number;
  active_campaigns: number;
  prospects_being_nurtured: number;
}

class GreendoorAIAPI {
  private baseURL: string;
  private apiKey: string;

  constructor() {
    // TODO: Replace with actual API endpoint
    this.baseURL = process.env.VITE_GREENDOOR_API_URL || 'https://api.greendoorai.com/v1';
    this.apiKey = process.env.VITE_GREENDOOR_API_KEY || '';
  }

  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // For development: Return enhanced mock data if API is not available
      console.warn('API not available, using enhanced mock data:', error);
      return this.generateEnhancedMockData(endpoint) as T;
    }
  }

  private generateEnhancedMockData(endpoint: string): any {
    // Enhanced mock data that simulates real AI analysis
    if (endpoint.includes('/autonomous/analyze-url')) {
      return this.generateMockAnalysisResults();
    } else if (endpoint.includes('/agents/activity')) {
      return this.generateMockAgentActivity();
    } else if (endpoint.includes('/metrics/performance')) {
      return this.generateMockPerformanceMetrics();
    }
    return null;
  }

  private generateMockAnalysisResults(): AutonomousResults {
    const companies = [
      { name: 'TechCorp Solutions', industry: 'B2B SaaS', value_prop: 'Enterprise automation platform' },
      { name: 'DataFlow Analytics', industry: 'Data Analytics', value_prop: 'Real-time business intelligence' },
      { name: 'CloudScale Systems', industry: 'Cloud Infrastructure', value_prop: 'Scalable cloud solutions' }
    ];

    const company = companies[Math.floor(Math.random() * companies.length)];
    
    return {
      companyName: company.name,
      industry: company.industry,
      website_analysis: {
        value_proposition: company.value_prop,
        target_market: 'Enterprise B2B companies 100-2000 employees',
        product_categories: ['SaaS Platform', 'Enterprise Tools', 'Business Intelligence'],
        pricing_model: 'Subscription-based with enterprise tiers',
        content_quality_score: 0.87
      },
      icp: {
        title: 'VP of Sales, Director of Revenue Operations',
        company_size: '100-1000 employees',
        industry_focus: 'B2B SaaS, Technology, Professional Services',
        pain_points: [
          'Manual sales processes limiting growth',
          'Lack of visibility into sales pipeline',
          'Difficulty scaling sales operations',
          'Inconsistent lead qualification'
        ],
        criteria: [
          'Recently raised Series A/B funding',
          'Technology stack includes Salesforce/HubSpot',
          'Growing sales team (5+ SDRs)',
          'Revenue range: $5M-$50M ARR',
          'Active in sales automation market'
        ],
        buying_signals: [
          'Posted sales operations job openings',
          'Attended recent sales tech conferences',
          'Downloaded sales automation whitepapers',
          'Engaged with sales productivity content'
        ],
        decision_makers: [
          'Chief Revenue Officer',
          'VP of Sales',
          'Director of Sales Operations',
          'Head of Business Development'
        ]
      },
      prospects: {
        total_found: 1247 + Math.floor(Math.random() * 500),
        qualified: 423 + Math.floor(Math.random() * 200),
        high_intent: 89 + Math.floor(Math.random() * 50),
        decision_makers: 156 + Math.floor(Math.random() * 100)
      },
      campaigns: {
        total_created: 5 + Math.floor(Math.random() * 3),
        email_sequences: 3 + Math.floor(Math.random() * 2),
        linkedin_sequences: 2 + Math.floor(Math.random() * 2),
        personalization_rate: 0.94 + Math.random() * 0.05
      },
      estimated_performance: {
        meetings_48h: 18 + Math.floor(Math.random() * 15),
        response_rate: 0.23 + Math.random() * 0.10,
        conversion_probability: 0.15 + Math.random() * 0.10
      },
      autonomous_confidence: 0.91 + Math.random() * 0.08
    };
  }

  private generateMockAgentActivity(): AgentActivity[] {
    const agents = [
      {
        agent_id: 'research-001',
        agent_name: 'Research Agent Alpha',
        agent_type: 'research' as const,
        current_task: 'Analyzing 347 new prospects from technology sector'
      },
      {
        agent_id: 'outreach-002', 
        agent_name: 'Outreach Agent Beta',
        agent_type: 'outreach' as const,
        current_task: 'Personalizing email sequence for enterprise prospects'
      },
      {
        agent_id: 'deal-003',
        agent_name: 'Deal Management Agent Gamma',
        agent_type: 'deal_management' as const,
        current_task: 'Optimizing follow-up timing for 23 active opportunities'
      },
      {
        agent_id: 'analytics-004',
        agent_name: 'Analytics Agent Delta',
        agent_type: 'analytics' as const,
        current_task: 'Real-time performance optimization across all campaigns'
      }
    ];

    return agents.map(agent => ({
      ...agent,
      status: ['working', 'coordinating', 'learning'][Math.floor(Math.random() * 3)] as any,
      progress: Math.floor(Math.random() * 100),
      decisions_made: Math.floor(Math.random() * 150) + 50,
      success_rate: 0.85 + Math.random() * 0.13,
      last_action: `Completed ${agent.current_task.split(' ')[0].toLowerCase()} task ${Math.floor(Math.random() * 10) + 1} minutes ago`,
      communication_log: this.generateMockCommunications()
    }));
  }

  private generateMockCommunications(): AgentCommunication[] {
    const communications = [
      {
        from_agent: 'Research Agent Alpha',
        to_agent: 'Outreach Agent Beta',
        message_type: 'data_request' as const,
        content: 'High-quality prospect batch ready for personalized outreach',
        priority: 'high' as const
      },
      {
        from_agent: 'Analytics Agent Delta',
        to_agent: 'Deal Management Agent Gamma',
        message_type: 'analysis_complete' as const,
        content: 'Identified optimal follow-up timing: Tuesday 10am shows 34% higher response rate',
        priority: 'medium' as const
      },
      {
        from_agent: 'Outreach Agent Beta',
        to_agent: 'Research Agent Alpha',
        message_type: 'coordination' as const,
        content: 'Request additional data points for prospects in fintech vertical',
        priority: 'low' as const
      }
    ];

    return communications.map(comm => ({
      ...comm,
      timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString()
    }));
  }

  private generateMockPerformanceMetrics(): PerformanceMetrics {
    return {
      autonomous_decisions_today: 1247 + Math.floor(Math.random() * 500),
      human_interventions_today: 23 + Math.floor(Math.random() * 15),
      autonomy_rate: 0.982 + Math.random() * 0.015,
      deals_closed_by_ai: {
        today: 7 + Math.floor(Math.random() * 8),
        this_week: 34 + Math.floor(Math.random() * 20),
        this_month: 127 + Math.floor(Math.random() * 50)
      },
      decision_accuracy: 0.963 + Math.random() * 0.025,
      self_optimization_events: 89 + Math.floor(Math.random() * 30),
      active_campaigns: 156 + Math.floor(Math.random() * 50),
      prospects_being_nurtured: 2847 + Math.floor(Math.random() * 1000)
    };
  }

  // API Methods
  async analyzeURL(request: URLAnalysisRequest): Promise<AutonomousResults> {
    return this.makeRequest<AutonomousResults>('/autonomous/analyze-url', {
      method: 'POST',
      body: JSON.stringify(request)
    });
  }

  async getAgentActivity(): Promise<AgentActivity[]> {
    return this.makeRequest<AgentActivity[]>('/agents/activity');
  }

  async getPerformanceMetrics(): Promise<PerformanceMetrics> {
    return this.makeRequest<PerformanceMetrics>('/metrics/performance');
  }

  async subscribeToRealTimeUpdates(callback: (data: any) => void): Promise<WebSocket | null> {
    try {
      const wsURL = this.baseURL.replace('https://', 'wss://').replace('http://', 'ws://');
      const ws = new WebSocket(`${wsURL}/realtime?token=${this.apiKey}`);
      
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        callback(data);
      };

      return ws;
    } catch (error) {
      console.warn('WebSocket not available:', error);
      // Simulate real-time updates with polling for development
      setInterval(() => {
        callback({
          type: 'agent_update',
          data: this.generateMockAgentActivity()
        });
      }, 30000); // Update every 30 seconds
      return null;
    }
  }
}

export const greendoorAPI = new GreendoorAIAPI();
export default greendoorAPI;
