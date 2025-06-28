import { Brain, Send, Kanban, Search, FileText, Users2, MessageCircle, TrendingUp } from "lucide-react";

const FeatureModulesSection = () => {
  const modules = [
    {
      id: "research",
      title: "Research Agent",
      icon: Brain,
      description: "Autonomous prospect discovery and intelligence",
      features: [
        "Continuously monitors market for new prospects",
        "Autonomous company analysis and ICP matching",
        "Real-time competitive and market intelligence",
        "Self-evolving prospect scoring and prioritization"
      ]
    },
    {
      id: "outreach",
      title: "Outreach Agent",
      icon: Send,
      description: "Autonomous campaign creation and execution",
      features: [
        "Creates personalized campaigns autonomously",
        "Multi-channel coordination without human oversight",
        "Self-optimizing message variants and timing",
        "Autonomous A/B testing and performance optimization"
      ]
    },
    {
      id: "deal",
      title: "Deal Agent",
      icon: Kanban,
      description: "Autonomous deal management and progression",
      features: [
        "Manages entire deal lifecycle independently",
        "Autonomous objection handling and responses",
        "Self-directed meeting booking and follow-up",
        "Predictive deal scoring and risk assessment"
      ]
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Autonomous AI Agent Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple specialized AI agents working together autonomously to replace your entire sales process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div key={module.id} className="bg-card p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <module.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">
                    {module.description}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {module.features.map((feature, index) => (
                  <div key={index} className="flex items-start text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureModulesSection;
