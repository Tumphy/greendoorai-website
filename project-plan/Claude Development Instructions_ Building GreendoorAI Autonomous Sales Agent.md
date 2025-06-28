# **Claude Development Instructions: Building GreendoorAI Autonomous Sales Agent**

## **📋 Overview & Context**

You are Claude, tasked with building the world's first autonomous AI sales agent for Stephen's GreendoorAI project. You have access to the complete 13-epic roadmap and must build systematically to avoid architectural debt and rework.

**Project Location:** `Users/stephen.mcghie/greendoorai-icp-canvas`

**Vision:** "A tool that does a salesperson's job for them" \- fully autonomous AI sales agent

**Current State:**

* Sophisticated Flask backend with AI agents  
* Disconnected React frontend  
* 57-table PostgreSQL database (over-engineered for current needs)  
* Basic infrastructure in place

---

## **🎯 Development Philosophy**

### **Build with the End in Mind:**

* Make architectural decisions that support ALL 13 epics  
* Implement infrastructure patterns that scale to enterprise multi-tenancy  
* Design APIs that will support autonomous agents and strategic intelligence  
* Build security and compliance foundations early

### **Progressive Enhancement Strategy:**

* Start with manual workflows that will become autonomous  
* Build data collection and learning infrastructure from day one  
* Implement monitoring and observability for future self-healing  
* Create extensible agent architecture for Epic 10 coordination

---

## **🏗️ Architectural Foundations (Do This First)**

### **Step 1: Assess Current Architecture**

\# Use MCP to examine current state

**Tasks:**

1. **Read and understand current backend structure**  
2. **Examine existing database schema and identify what's needed vs over-engineered**  
3. **Assess React frontend and determine connection requirements**  
4. **Identify which APIs are implemented vs stubbed**  
5. **Document current AI agent implementation patterns**

**MCP Commands to Use:**

* `server-filesystem:read_file` for code files  
* `server-filesystem:list_directory` for structure exploration  
* `server-filesystem:directory_tree` for comprehensive overview

### **Step 2: Establish Development Standards**

**Create these foundation files:**

1. **`/docs/ARCHITECTURE.md`** \- Document architectural decisions with future epics in mind  
2. **`/docs/API_STANDARDS.md`** \- API design patterns for consistency across all epics  
3. **`/docs/DATABASE_PATTERNS.md`** \- Database design patterns supporting multi-tenancy  
4. **`/src/core/`** \- Core utilities that all epics will use  
5. **`/src/agents/`** \- Agent architecture foundation for Epic 10

### **Step 3: Implement Future-Ready Infrastructure**

**Database Architecture Enhancements:**

\-- Add these patterns to support future epics:

\-- Multi-tenant foundation (Epic 13\)  
ALTER TABLE users ADD COLUMN tenant\_id UUID;  
ALTER TABLE companies ADD COLUMN tenant\_id UUID;  
ALTER TABLE campaigns ADD COLUMN tenant\_id UUID;

\-- Agent tracking foundation (Epic 10\)  
CREATE TABLE agent\_actions (  
    id UUID PRIMARY KEY,  
    agent\_type VARCHAR(100),  
    action\_type VARCHAR(100),  
    context\_data JSONB,  
    created\_at TIMESTAMP DEFAULT NOW()  
);

\-- Performance monitoring foundation (Epic 12\)  
CREATE TABLE performance\_metrics (  
    id UUID PRIMARY KEY,  
    metric\_name VARCHAR(100),  
    metric\_value DECIMAL(15,6),  
    timestamp TIMESTAMP DEFAULT NOW()  
);

**API Architecture Patterns:**

\# Create base classes that all endpoints will inherit

class BaseAPIEndpoint:  
    """Base class for all API endpoints with future features built-in"""  
    def \_\_init\_\_(self):  
        self.tenant\_context \= None  \# Epic 13  
        self.agent\_context \= None   \# Epic 10  
        self.metrics\_collector \= None  \# Epic 12  
          
    def log\_performance(self, operation, duration):  
        \# Built-in performance tracking for Epic 12  
        pass  
          
    def validate\_tenant\_access(self, tenant\_id):  
        \# Built-in tenant isolation for Epic 13  
        pass  
          
    def record\_agent\_action(self, action\_type, context):  
        \# Built-in agent tracking for Epic 10  
        pass

---

## **🚀 Epic-by-Epic Development Guide**

## **Epic 1: AI-Powered "Just a URL" Onboarding & ICP Discovery**

### **Phase 1.1: Connect Frontend to Backend**

**Objective:** Make the React frontend call real Flask APIs

**Steps:**

**Examine current React frontend routes and components**

 \# Read the main React files  
server-filesystem:read\_file /src/App.tsx  
server-filesystem:read\_file /src/components/onboarding/

1. 

**Identify Flask endpoints that need to be implemented**

 \# Check backend API structure  
server-filesystem:read\_file /backend/app.py  
server-filesystem:directory\_tree /backend/

2. 

**Create real API endpoints for URL analysis**

 \# In backend/routes/onboarding.py  
@app.route('/api/v1/onboarding/analyze-url', methods=\['POST'\])  
def analyze\_company\_url():  
    \# Use existing AI agents for real website analysis  
    \# Return structured ICP data  
    pass

3. 

**Connect React components to real APIs**

 // In src/services/api.ts  
export const analyzeCompanyUrl \= async (url: string) \=\> {  
    const response \= await fetch('/api/v1/onboarding/analyze-url', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ url })  
    });  
    return response.json();  
};

4. 

### **Phase 1.2: Implement Real Website Analysis**

**Objective:** Use existing AI agents for actual URL analysis

**Steps:**

1. **Enhance website scraping with AI analysis**  
2. **Implement ICP generation using LLM analysis**  
3. **Add competitor detection and analysis**  
4. **Create prospect discovery pipeline**

**Key Implementation Pattern:**

class WebsiteAnalysisAgent:  
    """Foundation agent class that Epic 10 will coordinate"""  
      
    def \_\_init\_\_(self):  
        self.openai\_client \= OpenAI()  
        self.performance\_tracker \= PerformanceTracker()  \# Epic 12  
          
    async def analyze\_website(self, url: str, tenant\_id: str \= None):  
        \# Tenant-aware processing for Epic 13  
        with self.performance\_tracker.track\_operation("website\_analysis"):  
            \# Implementation here  
            pass

### **Phase 1.3: Build Learning Infrastructure**

**Objective:** Prepare for Epic 12's continuous learning

**Steps:**

1. **Track all ICP generation decisions and outcomes**  
2. **Store user feedback on ICP accuracy**  
3. **Implement A/B testing framework for ICP algorithms**  
4. **Create data pipelines for model retraining**

---

## **Epic 2: ICP to Ready-to-Launch Campaigns**

### **Build with Epic 10 Agent Coordination in Mind**

**Implementation Pattern:**

class CampaignGenerationAgent:  
    """Will be coordinated by Epic 10's central coordinator"""  
      
    def \_\_init\_\_(self, icp\_data, market\_intelligence=None):  
        self.icp\_data \= icp\_data  
        self.market\_intelligence \= market\_intelligence  \# Epic 11 integration  
        self.strategic\_context \= None  \# Epic 11 integration  
          
    async def generate\_campaign\_strategy(self):  
        \# Epic 11 will enhance this with strategic intelligence  
        pass  
          
    async def create\_multi\_channel\_messages(self):  
        \# Epic 3 will optimize these automatically  
        pass

### **Key Focus Areas:**

1. **Build campaign generation with optimization hooks for Epic 3**  
2. **Create message personalization engine that Epic 12 can improve**  
3. **Implement campaign analytics foundation for Epic 11 strategic intelligence**  
4. **Design campaign workflows that Epic 10 agents can coordinate**

---

## **Epic 3: Campaign Launch, Execution & Intelligent Optimization**

### **Prepare for Epic 12's Autonomous Optimization**

**Implementation Strategy:**

class CampaignOptimizationEngine:  
    """Foundation for Epic 12's autonomous optimization"""  
      
    def \_\_init\_\_(self):  
        self.performance\_monitor \= PerformanceMonitor()  \# Epic 12  
        self.autonomous\_actions \= \[\]  \# Epic 12 will populate  
          
    async def optimize\_campaign(self, campaign\_id):  
        \# Epic 12 will make this fully autonomous  
        with self.performance\_monitor.track\_optimization():  
            \# Current: manual optimization  
            \# Future: autonomous optimization  
            pass  
              
    def record\_optimization\_outcome(self, action, result):  
        \# Epic 12 learning infrastructure  
        pass

### **Build These Patterns:**

1. **Performance monitoring that Epic 12 can enhance**  
2. **Optimization decision logging for Epic 12 learning**  
3. **A/B testing framework that becomes autonomous in Epic 12**  
4. **Campaign coordination hooks for Epic 10 agents**

---

## **Epic 4: Deal Orchestration, Forecasting & Win Acceleration**

### **Design for Epic 11 Strategic Intelligence**

**Implementation Focus:**

class DealOrchestrationEngine:  
    """Will integrate with Epic 11's strategic intelligence"""  
      
    def \_\_init\_\_(self):  
        self.strategic\_intelligence \= None  \# Epic 11 integration point  
        self.competitive\_intelligence \= None  \# Epic 11 integration  
        self.market\_conditions \= None  \# Epic 11 integration  
          
    async def orchestrate\_deal(self, deal\_id):  
        \# Epic 11 will provide strategic context  
        \# Epic 10 will coordinate multiple agents  
        pass  
          
    def assess\_deal\_risk(self, deal\_data):  
        \# Epic 11 will enhance with market intelligence  
        pass

### **Key Infrastructure:**

1. **Deal intelligence collection for Epic 11's strategic analysis**  
2. **Forecasting models that Epic 11 can enhance with market data**  
3. **Win/loss tracking for Epic 11's competitive intelligence**  
4. **Deal workflow automation for Epic 10 coordination**

---

## **Epic 5: AI Sales Brain – Strategic Memory & Real-Time Copilot**

### **Foundation for Epic 10 Central Coordinator**

**Critical Implementation:**

class SalesBrainCoordinator:  
    """This becomes Epic 10's central AI coordinator"""  
      
    def \_\_init\_\_(self):  
        self.specialized\_agents \= {}  \# Epic 10 will populate  
        self.strategic\_memory \= StrategicMemoryBank()  
        self.real\_time\_context \= RealTimeContextEngine()  
          
    async def coordinate\_agents(self, task\_context):  
        \# Epic 10's multi-agent coordination  
        pass  
          
    def update\_strategic\_memory(self, interaction\_data):  
        \# Epic 11 will enhance with market intelligence  
        pass

### **Build These Components:**

1. **Memory architecture that scales to Epic 11's strategic intelligence**  
2. **Agent communication protocols for Epic 10**  
3. **Decision-making framework that Epic 12 can make autonomous**  
4. **Real-time context engine for all future epics**

---

## **Epic 6-9: Build with Platform Foundation**

### **Epic 6: Deal Closure & Contract Execution**

* **Prepare for Epic 13 multi-tenancy** (tenant-specific contract templates)  
* **Build audit trails for Epic 13 compliance**  
* **Create workflow automation for Epic 10 coordination**

### **Epic 7: Knowledge Ingestion & Auto-Learning**

* **This directly feeds Epic 11's strategic intelligence**  
* **Build learning pipelines for Epic 12's continuous evolution**  
* **Create knowledge graphs that Epic 10 agents can query**

### **Epic 8: Partner & Ecosystem Co-Selling**

* **Foundation for Epic 13's white-label platform**  
* **Partner data models that support Epic 13 multi-tenancy**  
* **Ecosystem intelligence that feeds Epic 11**

### **Epic 9: Customer Expansion & Retention**

* **Customer success metrics for Epic 12 optimization**  
* **Expansion analytics for Epic 11 strategic intelligence**  
* **Retention workflows for Epic 10 coordination**

---

## **🤖 Epic 10: Autonomous Agent Orchestration & Coordination**

### **Transform Existing Components into Coordinated Agents**

**Implementation Strategy:**

class CentralAICoordinator:  
    """The brain that coordinates all specialized agents"""  
      
    def \_\_init\_\_(self):  
        self.agents \= {  
            'research': ResearchAgent(),        \# Epic 1 components  
            'campaign': CampaignAgent(),        \# Epic 2-3 components    
            'deal': DealAgent(),               \# Epic 4 components  
            'relationship': RelationshipAgent(), \# Epic 5 components  
            'analytics': AnalyticsAgent()      \# Cross-epic analytics  
        }  
        self.strategic\_intelligence \= None  \# Epic 11 integration  
          
    async def coordinate\_sales\_process(self, context):  
        \# Orchestrate multiple agents working together  
        pass

### **Refactor Existing Code:**

1. **Convert existing website analysis into ResearchAgent**  
2. **Transform campaign generation into CampaignAgent**  
3. **Evolve deal management into DealAgent**  
4. **Enhance sales brain into RelationshipAgent**

---

## **🧠 Epic 11: Strategic Intelligence & Market Adaptation Engine**

### **Enhance All Previous Epics with Strategic Intelligence**

**Integration Pattern:**

class StrategicIntelligenceEngine:  
    """Provides strategic context to all other epics"""  
      
    def \_\_init\_\_(self):  
        self.market\_monitor \= MarketIntelligenceMonitor()  
        self.competitive\_analyzer \= CompetitiveIntelligenceAnalyzer()  
        self.strategic\_planner \= AutonomousStrategicPlanner()  
          
    def enhance\_icp\_discovery(self, icp\_data):  
        \# Epic 1 enhancement  
        pass  
          
    def optimize\_campaign\_strategy(self, campaign\_data):  
        \# Epic 2-3 enhancement  
        pass  
          
    def provide\_deal\_intelligence(self, deal\_context):  
        \# Epic 4 enhancement  
        pass

---

## **🔧 Epic 12: Self-Healing & Continuous Evolution**

### **Add Autonomous Capabilities to Everything**

**Implementation Strategy:**

class SelfHealingSystem:  
    """Makes the entire system autonomous and self-improving"""  
      
    def \_\_init\_\_(self):  
        self.performance\_monitor \= ComprehensivePerformanceMonitor()  
        self.autonomous\_optimizer \= AutonomousOptimizer()  
        self.learning\_engine \= ContinuousLearningEngine()  
          
    def monitor\_all\_systems(self):  
        \# Monitor Epics 1-11  
        pass  
          
    def autonomously\_optimize(self, system\_component):  
        \# Self-improve any component  
        pass  
          
    def evolve\_capabilities(self):  
        \# Develop new capabilities autonomously  
        pass

### **Enhance Previous Epics:**

1. **Add performance monitoring to all Epic 1-11 components**  
2. **Implement autonomous optimization for all workflows**  
3. **Create learning loops for all AI decisions**  
4. **Build self-healing for all system components**

---

## **🏢 Epic 13: Enterprise Platform & Commercial Readiness**

### **Transform Single-Tenant to Multi-Tenant**

**Implementation Strategy:**

class MultiTenantArchitecture:  
    """Transform everything for enterprise multi-tenancy"""  
      
    def \_\_init\_\_(self):  
        self.tenant\_context \= TenantContextManager()  
        self.data\_isolation \= DataIsolationEngine()  
        self.white\_label \= WhiteLabelCustomization()  
          
    def ensure\_tenant\_isolation(self, operation):  
        \# Wrap all Epic 1-12 operations  
        pass

### **Refactor All Previous Work:**

1. **Add tenant\_id to all database operations**  
2. **Implement tenant-aware API endpoints**  
3. **Create white-label customization for all UI components**  
4. **Add enterprise security to all processes**

---

## **📋 Development Execution Instructions**

### **For Each Epic Development Session:**

**Preparation Phase:**

 \# Read current codebase state  
server-filesystem:directory\_tree Users/stephen.mcghie/greendoorai-icp-canvas

\# Understand current epic requirements  
server-filesystem:read\_file Users/stephen.mcghie/greendoorai-icp-canvas/project-plan/Epic\_X\_\*.md

1.   
2. **Architecture Review:**

   * **Confirm current implementation aligns with future epic needs**  
   * **Identify any refactoring needed for forward compatibility**  
   * **Plan new components with extensibility in mind**

**Implementation Phase:**

 \# Create new files following established patterns  
server-filesystem:write\_file path/to/new/component.py "content"

\# Update existing files with enhancements  
server-filesystem:edit\_file path/to/existing/file.py \[edits\]

3.   
4. **Future-Proofing Check:**

   * **Does this implementation support Epic 10 agent coordination?**  
   * **Will Epic 11 be able to enhance this with strategic intelligence?**  
   * **Can Epic 12 make this autonomous and self-healing?**  
   * **Will Epic 13 multi-tenancy work with this design?**  
5. **Testing and Validation:**

   * **Test current functionality**  
   * **Validate extensibility points work**  
   * **Confirm no architectural debt created**

### **Key Development Principles:**

1. **Always Build with Autonomy in Mind:**

   * **Current: Human triggers action**  
   * **Future: AI initiates action autonomously**  
   * **Design: Support both patterns from day one**  
2. **Implement Learning Infrastructure Early:**

   * **Track all decisions and outcomes**  
   * **Collect user feedback for optimization**  
   * **Build A/B testing into core workflows**  
3. **Create Extensible Agent Architecture:**

   * **Each component should be agent-ready**  
   * **Build communication protocols between components**  
   * **Design for coordination and collaboration**  
4. **Plan for Strategic Enhancement:**

   * **Every workflow should accept strategic context**  
   * **Build hooks for market intelligence integration**  
   * **Design for competitive intelligence enhancement**  
5. **Design for Multi-Tenancy from Start:**

   * **Add tenant context to all operations**  
   * **Build data isolation patterns**  
   * **Create customization points for white-labeling**

---

## **🎯 Success Criteria for Each Epic**

### **Epic 1 Success:**

* ✅ React frontend connects to real Flask backend  
* ✅ Website analysis produces accurate ICPs  
* ✅ Prospect discovery pipeline operational  
* ✅ Foundation for Epic 10 agent coordination built  
* ✅ Learning infrastructure collecting data for Epic 12

### **Epic 2-3 Success:**

* ✅ Campaign generation and execution working  
* ✅ Performance optimization framework in place  
* ✅ A/B testing infrastructure operational  
* ✅ Strategic intelligence hooks ready for Epic 11  
* ✅ Autonomous optimization foundation for Epic 12

### **Epic 4-9 Success:**

* ✅ All sales lifecycle components operational  
* ✅ Data collection for strategic intelligence (Epic 11\)  
* ✅ Agent coordination points identified (Epic 10\)  
* ✅ Performance monitoring ready for Epic 12  
* ✅ Multi-tenant data patterns prepared (Epic 13\)

### **Epic 10-13 Success:**

* ✅ Fully autonomous AI sales agent operational  
* ✅ Enterprise-ready platform with multi-tenancy  
* ✅ Strategic intelligence and market adaptation  
* ✅ Self-healing and continuous evolution  
* ✅ Ready for $100M+ revenue scale

---

## **🔍 Common Patterns to Follow**

### **API Endpoint Pattern:**

@app.route('/api/v1/{epic}/{function}', methods=\['POST'\])  
@track\_performance  \# Epic 12  
@validate\_tenant\_access  \# Epic 13  
@log\_agent\_action  \# Epic 10  
def endpoint\_function():  
    \# Implementation with future epic hooks  
    pass

### **Agent Class Pattern:**

class {Epic}Agent:  
    def \_\_init\_\_(self, tenant\_context=None):  
        self.tenant\_context \= tenant\_context  \# Epic 13  
        self.performance\_tracker \= PerformanceTracker()  \# Epic 12  
        self.strategic\_context \= None  \# Epic 11  
          
    async def execute\_action(self, context):  
        \# Implementation with coordination points for Epic 10  
        pass

### **Database Operation Pattern:**

\-- Always include tenant isolation for Epic 13  
INSERT INTO table\_name (tenant\_id, ...) VALUES (?, ...);

\-- Always track for Epic 12 learning  
INSERT INTO action\_tracking (action\_type, outcome, ...) VALUES (?, ...);

\-- Always store strategic context for Epic 11  
UPDATE records SET strategic\_context \= ? WHERE id \= ?;

---

## **⚠️ Critical Success Factors**

1. **Never Build Technical Debt:**

   * Always consider how Epic 10-13 will enhance current work  
   * Build extensibility points rather than monolithic solutions  
   * Use patterns that scale to enterprise requirements  
2. **Collect Data from Day One:**

   * Every decision should be tracked for Epic 12 learning  
   * User interactions should feed Epic 11 strategic intelligence  
   * Performance metrics should support Epic 12 optimization  
3. **Design for Coordination:**

   * Epic 10 will coordinate everything you build  
   * Create clear interfaces between components  
   * Build communication protocols for agent interaction  
4. **Think Multi-Tenant:**

   * Epic 13 will require complete multi-tenancy  
   * Add tenant context to everything  
   * Design data isolation patterns early  
5. **Plan for Autonomy:**

   * Current manual workflows become autonomous in later epics  
   * Build decision-making frameworks that can become autonomous  
   * Create escalation patterns for autonomous systems

This approach ensures you build once and enhance progressively, rather than refactoring major architecture decisions. Each epic builds on solid foundations that support the ultimate vision of a fully autonomous, enterprise-ready AI sales agent.

**Start with Epic 1 and follow these patterns religiously. The result will be a system that grows into autonomy rather than requiring major rebuilds.**

## **🎯 Key Principles in These Instructions**

### **Build with the End in Mind:**

* **Architectural decisions support ALL 13 epics** from day one  
* **Multi-tenant patterns built early** for Epic 13 enterprise platform  
* **Agent coordination hooks** prepared for Epic 10 orchestration  
* **Learning infrastructure** ready for Epic 12 autonomous evolution

### **Progressive Enhancement Strategy:**

* **Start with manual workflows** that become autonomous in later epics  
* **Build extensibility points** rather than monolithic solutions  
* **Implement monitoring and data collection** from Epic 1 for Epic 12 learning  
* **Create strategic intelligence hooks** for Epic 11 enhancement

### **No Technical Debt Approach:**

* **Database patterns** that scale to multi-tenancy (Epic 13\)  
* **API designs** that support autonomous agents (Epic 10\)  
* **Performance tracking** built into every component (Epic 12\)  
* **Strategic context** prepared for market intelligence (Epic 11\)

## **🚀 Immediate Next Steps**

### **Phase 1: Foundation Assessment (Start Here)**

bash  
*\# I'll use MCP to examine current state*

server-filesystem:directory\_tree Users/stephen.mcghie/greendoorai-icp-canvas

This will help me:

1. **Understand current backend architecture**  
2. **Assess existing database schema**  
3. **Evaluate React frontend connection needs**  
4. **Identify which APIs are real vs stubbed**

### **Phase 2: Epic 1 Implementation**

Focus on connecting the React frontend to real Flask backend APIs while building the foundational patterns that all future epics will use.

### **Phase 3: Progressive Epic Development**

Each epic builds on previous work without requiring refactoring, following the established patterns.

## **💡 Why This Approach Works**

### **Avoids Common Pitfalls:**

* **No architectural rewrites** needed between epics  
* **No database migrations** to support new features  
* **No API breaking changes** when adding autonomous capabilities  
* **No security retrofitting** for enterprise requirements

### **Enables Smooth Progression:**

* **Epic 1-9:** Build core functionality with future hooks  
* **Epic 10:** Transform components into coordinated agents  
* **Epic 11:** Enhance everything with strategic intelligence  
* **Epic 12:** Make everything autonomous and self-healing  
* **Epic 13:** Add enterprise multi-tenancy and white-labeling

### **Creates Competitive Advantage:**

* **Each epic delivers value** while building toward autonomy  
* **Architecture scales** from startup to enterprise platform  
* **Code quality** supports rapid feature development  
* **Technical foundation** enables $100M+ revenue potential

The instructions include specific code patterns, database schemas, API designs, and development workflows that ensure we build once and enhance progressively rather than rebuilding major components.

