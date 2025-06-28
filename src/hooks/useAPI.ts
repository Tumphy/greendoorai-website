// React Query hooks for GreendoorAI API
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  greendoorAPI, 
  URLAnalysisRequest, 
  AutonomousResults, 
  AgentActivity, 
  PerformanceMetrics 
} from '../services/api';

// URL Analysis Hook
export const useURLAnalysis = () => {
  return useMutation({
    mutationFn: (request: URLAnalysisRequest) => greendoorAPI.analyzeURL(request),
    onSuccess: (data) => {
      console.log('Autonomous analysis completed:', data);
    },
    onError: (error) => {
      console.error('Analysis failed:', error);
    }
  });
};

// Agent Activity Hook - Auto-refreshing every 30 seconds
export const useAgentActivity = () => {
  return useQuery({
    queryKey: ['agentActivity'],
    queryFn: () => greendoorAPI.getAgentActivity(),
    refetchInterval: 30000, // Refresh every 30 seconds
    staleTime: 25000, // Consider data stale after 25 seconds
  });
};

// Performance Metrics Hook - Auto-refreshing every 60 seconds  
export const usePerformanceMetrics = () => {
  return useQuery({
    queryKey: ['performanceMetrics'],
    queryFn: () => greendoorAPI.getPerformanceMetrics(),
    refetchInterval: 60000, // Refresh every minute
    staleTime: 55000, // Consider data stale after 55 seconds
  });
};

// Real-time Updates Hook
export const useRealTimeUpdates = (callback: (data: any) => void) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['realTimeConnection'],
    queryFn: async () => {
      const ws = await greendoorAPI.subscribeToRealTimeUpdates((data) => {
        // Update relevant queries when real-time data arrives
        if (data.type === 'agent_update') {
          queryClient.setQueryData(['agentActivity'], data.data);
        } else if (data.type === 'metrics_update') {
          queryClient.setQueryData(['performanceMetrics'], data.data);
        }
        
        // Call the provided callback
        callback(data);
      });
      
      return ws;
    },
    staleTime: Infinity, // Keep connection alive
    retry: 3,
  });
};

// Hook for invalidating all autonomous data (useful for refresh triggers)
export const useRefreshAutonomousData = () => {
  const queryClient = useQueryClient();
  
  return () => {
    queryClient.invalidateQueries({ queryKey: ['agentActivity'] });
    queryClient.invalidateQueries({ queryKey: ['performanceMetrics'] });
  };
};
