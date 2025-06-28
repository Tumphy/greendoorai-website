import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface ROIInputs {
  // Current Sales Team
  salesTeamSize: number;
  averageSalary: number;
  salesManagerSalary: number;
  recruitingCosts: number;
  trainingCosts: number;
  toolsCosts: number;
  
  // Business Metrics
  currentRevenue: number;
  dealVolume: number;
  averageDealSize: number;
  salesCycleLength: number;
  conversionRate: number;
  
  // Industry & Company
  industryType: string;
  companySize: string;
  growthStage: string;
  
  // GreendoorAI Pricing
  agentTier: 'starter' | 'professional' | 'enterprise';
  numAgents: number;
}

interface ROIResults {
  // Cost Analysis
  currentAnnualCosts: number;
  autonomousAnnualCosts: number;
  annualSavings: number;
  paybackPeriod: number;
  
  // Performance Improvements
  productivityMultiplier: number;
  capacityIncrease: number;
  revenueUplift: number;
  efficiencyGains: number;
  
  // Autonomous Benefits
  availability: string;
  consistency: number;
  scalability: string;
  learningRate: number;
}

const AutonomousROICalculator: React.FC = () => {
  const [salesTeamSize, setSalesTeamSize] = useState(5);
  const [avgSalary, setAvgSalary] = useState(80000);

  const { humanTeamCost, autonomousAgentCost, annualSavings, productivityMultiplier } = useMemo(() => {
    const humanTeamCost = salesTeamSize * avgSalary;
    const autonomousAgentCost = 3000 * 12; // Based on starter pack
    const annualSavings = humanTeamCost - autonomousAgentCost;
    const productivityMultiplier = salesTeamSize * 1.5; // Assuming 1 agent = 1.5 SDRs
    return { humanTeamCost, autonomousAgentCost, annualSavings, productivityMultiplier };
  }, [salesTeamSize, avgSalary]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-green-600" />
          Autonomous ROI Calculator
        </CardTitle>
        <CardDescription>See how much you can save by switching to an autonomous sales force.</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <div>
              <label className="font-semibold">Sales Team Size</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[salesTeamSize]}
                  onValueChange={(value) => setSalesTeamSize(value[0])}
                  max={50}
                  step={1}
                />
                <Input
                  type="number"
                  value={salesTeamSize}
                  onChange={(e) => setSalesTeamSize(Number(e.target.value))}
                  className="w-24"
                />
              </div>
            </div>
            <div>
              <label className="font-semibold">Average Sales Rep Salary</label>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 bg-gray-50 rounded-lg border">
          <h4 className="text-xl font-bold mb-4">Your Estimated ROI</h4>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Human Team Cost:</span>
              <span className="font-bold">${humanTeamCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Autonomous Agent Cost:</span>
              <span className="font-bold">${autonomousAgentCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-green-600 font-bold text-lg">
              <span>Annual Savings:</span>
              <span>${annualSavings.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Productivity Multiplier:</span>
              <span className="font-bold">{productivityMultiplier}x</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutonomousROICalculator;
