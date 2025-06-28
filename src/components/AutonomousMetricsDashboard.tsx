import React, { useState } from 'react';
import { 
  TrendingUp, 
  Target, 
  Brain, 
  Zap, 
  Users, 
  Calendar,
  ArrowUp,
  ArrowDown,
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import { usePerformanceMetrics } from '../hooks/useAPI';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  icon,
  color,
  bgColor
}) => {
  const trendIcon = trend === 'up' ? <ArrowUp className="w-4 h-4" /> : 
                   trend === 'down' ? <ArrowDown className="w-4 h-4" /> : null;
  
  const trendColor = trend === 'up' ? 'text-green-600' : 
                    trend === 'down' ? 'text-red-600' : 'text-gray-600';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
            {icon}
          </div>
          {trend && trendValue && (
            <div className={`flex items-center gap-1 ${trendColor} text-sm font-medium`}>
              {trendIcon}
              {trendValue}
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <div className="text-3xl font-bold text-gray-900">{value}</div>
          <div className="text-sm font-medium text-gray-700">{title}</div>
        </div>
        
        {subtitle && (
          <div className="text-sm text-gray-600">{subtitle}</div>
        )}
      </CardContent>
    </Card>
  );
};

interface ProgressBarProps {
  label: string;
  value: number;
  total: number;
  color: string;
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  value, 
  total, 
  color, 
  showPercentage = true 
}) => {
  const percentage = total > 0 ? (value / total) * 100 : 0;
  
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-600">
          {showPercentage ? `${Math.round(percentage)}%` : `${value}/${total}`}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`${color} h-3 rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

interface TimeSeriesPoint {
  time: string;
  value: number;
}

interface SimpleLineChartProps {
  data: TimeSeriesPoint[];
  color: string;
  height?: number;
}

const SimpleLineChart: React.FC<SimpleLineChartProps> = ({ data, color, height = 120 }) => {
  if (!data.length) return <div className="text-gray-500">No data available</div>;

  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  return (
    <div className="relative" style={{ height }}>
      <svg width="100%" height="100%" className="overflow-visible">
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        
        {/* Area under the curve */}
        <path
          d={`M 0 ${height} ${data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = height - ((point.value - minValue) / range) * height;
            return `L ${x}% ${y}`;
          }).join(' ')} L 100% ${height} Z`}
          fill={`url(#gradient-${color})`}
        />
        
        {/* Line */}
        <path
          d={`M ${data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = height - ((point.value - minValue) / range) * height;
            return `${x}% ${y}`;
          }).join(' L ')}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="drop-shadow-sm"
        />
        
        {/* Data points */}
        {data.map((point, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = height - ((point.value - minValue) / range) * height;
          return (
            <circle
              key={index}
              cx={`${x}%`}
              cy={y}
              r="3"
              fill={color}
              className="drop-shadow-sm"
            />
          );
        })}
      </svg>
    </div>
  );
};

const AutonomousMetricsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month'>('today');
  const { data: metrics, isLoading, error } = usePerformanceMetrics();

  // Generate sample time series data for demonstration
  const generateTimeSeriesData = (baseValue: number, variance: number = 0.2) => {
    const points = [];
    const now = new Date();
    for (let i = 23; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60 * 60 * 1000);
      const value = baseValue + (Math.random() - 0.5) * variance * baseValue;
      points.push({
        time: time.toISOString(),
        value: Math.max(0, value)
      });
    }
    return points;
  };

  const autonomyTrendData = generateTimeSeriesData(0.98, 0.02);
  const decisionAccuracyData = generateTimeSeriesData(0.96, 0.03);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-gray-600">Loading performance metrics...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800">Failed to load performance metrics</span>
          </div>
        </div>
      </div>
    );
  }

  if (!metrics) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart className="w-6 h-6 text-green-600" />
          Autonomous Performance Metrics
        </CardTitle>
        <CardDescription>Real-time data on your AI agent's performance and ROI.</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Autonomous Decisions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{metrics?.autonomous_decisions_today}</p>
            <p className="text-sm text-gray-500">Decisions made today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-red-500" />
              Human Interventions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{metrics?.human_interventions_today}</p>
            <p className="text-sm text-gray-500">Interventions today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Deals Closed by AI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{metrics?.deals_closed_by_ai.this_month}</p>
            <p className="text-sm text-gray-500">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="w-5 h-5 text-blue-500" />
              Decision Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{metrics?.decision_accuracy}%</p>
            <p className="text-sm text-gray-500">Overall accuracy</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default AutonomousMetricsDashboard;
