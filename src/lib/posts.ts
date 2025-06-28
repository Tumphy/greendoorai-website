import React from 'react';

const CTABlock = () => (
  <div className="cta-block bg-gray-100 dark:bg-gray-800 p-8 rounded-lg my-12 text-center">
    <h3 className="text-2xl font-bold mb-4">Ready to Automate 95% of Your Sales Work?</h3>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Let AI handle the grunt work, so you can focus on what you do best: closing deals.</p>
    <div className="flex justify-center gap-4">
      <a href="/waitlist" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
        Join the Waitlist
      </a>
      <a href="/demo" className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
        Book a Live Demo
      </a>
    </div>
  </div>
);

export interface Post {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  publishedDate: string;
  keywords: string[];
  content: React.ReactNode;
}

// NOTE: All post content is stored here to centralize data and fix
// previous file creation/syntax issues. This acts as a lightweight CMS.
export const allPosts: Post[] = [
  {
    slug: '95-percent-of-sales-work-should-be-done-by-ai',
    title: "95% of Sales Work Should Be Done by AI — Here's Why",
    seoTitle: '95% of Sales Work Should Be Done by AI',
    metaDescription: 'Discover how AI can automate the sales grunt work — from lead research to CRM updates — so you can focus on closing deals.',
    publishedDate: '2025-07-15',
    keywords: ['AI sales assistant', 'automate sales workflow', 'sales productivity', 'AI for sales reps', 'reduce admin time in sales'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          The future of outbound isn't more reps. It's smarter systems. Sales teams today spend more time entering data than closing deals. In this post, we break down what sales reps actually do all day — and how AI can take 95% of it off their plate. If you're still researching leads, writing emails, and guessing pipeline health manually, you're already behind.
        </p>
        <h2 className="text-3xl font-bold mt-12 mb-6">How much of your day actually feels like selling?</h2>
        <p className="mb-6">If you're like most salespeople, the answer is: not much.</p>
        <p className="mb-6">You spend more time researching leads, writing cold emails, updating your CRM, and getting ghosted than you do closing deals.</p>
        <p className="mb-6">It's time to ask the obvious question: What if AI did all of that — and you only had to show up when it mattered?</p>
        <p className="mb-8">That's not a dream. That's the future of sales. And it's already here.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Real Problem: Salespeople Aren't Selling</h2>
        <p className="mb-6">A recent report by Salesforce found that only 28% of a rep's time is spent actually talking to prospects. The rest?</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          <li>Copy/pasting info from LinkedIn</li>
          <li>Writing emails from scratch</li>
          <li>Updating opportunities in CRM</li>
          <li>Following up manually</li>
          <li>Building sequences</li>
          <li>Logging activity</li>
        </ul>
        <p className="mb-8">You're not a closer — you're a robot doing admin work. And robots are better at that than humans.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Enter GreendoorAI: Your AI Sales Employee</h2>
        <p className="mb-6">At GreendoorAI, we believe that:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li>Salespeople should only talk to humans.</li>
            <li>Everything else should be handled by AI.</li>
        </ul>
        <p className="mb-6">Here's what that means in practice:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-8">
            <thead>
              <tr>
                <th className="border-b-2 p-4">Task</th>
                <th className="border-b-2 p-4">Human Effort</th>
                <th className="border-b-2 p-4">GreendoorAI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-4">ICP Research</td>
                <td className="border-b p-4">30 min per lead</td>
                <td className="border-b p-4">Paste a LinkedIn URL, done</td>
              </tr>
              <tr>
                <td className="border-b p-4">Cold Email Writing</td>
                <td className="border-b p-4">10–15 mins each</td>
                <td className="border-b p-4">Auto-written + optimized</td>
              </tr>
              <tr>
                <td className="border-b p-4">LinkedIn Outreach</td>
                <td className="border-b p-4">Manual, inconsistent</td>
                <td className="border-b p-4">Auto-personalized + tracked</td>
              </tr>
                <tr>
                <td className="border-b p-4">Deal Notes & CRM</td>
                <td className="border-b p-4">Tedious & delayed</td>
                <td className="border-b p-4">Auto-logged + flagged</td>
              </tr>
              <tr>
                <td className="border-b p-4">Forecasting</td>
                <td className="border-b p-4">Guesswork or RevOps</td>
                <td className="border-b p-4">AI-generated RAG score + risk alerts</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-8">This isn't about replacing reps. It's about freeing them.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The AI Sales Stack: What Gets Automated</h2>
        <p className="mb-6">Here's how GreendoorAI handles 95% of the sales process:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li><strong>Discovers Your ICP:</strong> Upload a deck or paste a URL. AI maps out personas and targets.</li>
            <li><strong>Creates Campaigns:</strong> Auto-writes multi-step flows (email + LinkedIn + tasks).</li>
            <li><strong>Runs Outreach:</strong> Sends personalized content, tracks replies, logs CRM activity.</li>
            <li><strong>Scores Deals:</strong> MEDDPICC-based AI assesses risk, urgency, and next steps.</li>
            <li><strong>Drives Conversion:</strong> AI nudges the rep only when human interaction is needed.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Proof: What We've Seen So Far</h2>
        <p className="mb-6">In pilot teams using GreendoorAI:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li>Time-to-first-touch was reduced by 87%</li>
            <li>Reps booked 3x more meetings per hour</li>
            <li>Sales managers had full pipeline visibility without nagging reps for updates</li>
        </ul>
        <p className="mb-8 font-bold">And most importantly: Reps felt like sellers again — not admins.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Takeaway</h2>
        <p className="mb-6">You can't scale your revenue by hiring more SDRs to write emails.</p>
        <p className="mb-6">But you can scale instantly by hiring your first AI sales employee.</p>
        <p className="mb-8">GreendoorAI handles the heavy lifting. You handle the human moments. Close more. Work less. Welcome to the future of sales.</p>
      </>
    )
  },
  {
    slug: 'the-end-of-the-sdr',
    title: "The End of the SDR? Not Exactly — But Everything Has Changed",
    seoTitle: 'The Future of SDRs: AI, Automation, and What Comes Next',
    metaDescription: "SDRs aren't disappearing — but their role is evolving fast. Here's how AI is reshaping sales development in 2025.",
    publishedDate: '2025-07-18',
    keywords: ['SDR role future', 'AI vs SDR', 'sales development automation'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            AI won't kill the sales development role — it'll evolve it into something better. Cold outreach isn't going away — but the role of the SDR is about to change forever. As AI handles research, messaging, and follow-up, reps can focus on strategy, conversion, and relationship-building. Here's what tomorrow's top-performing SDRs will look like (and how to be one).
        </p>
        <h2 className="text-3xl font-bold mt-12 mb-6">If you're an SDR, this post isn't a eulogy. It's a job description — for the future.</h2>
        <p className="mb-6">For years, Sales Development Representatives (SDRs) were the unsung heroes of pipeline generation. They were cold-callers, email blasters, LinkedIn prospectors, and CRM updaters — all rolled into one.</p>
        <p className="mb-8">But now, AI is changing the game. Fast.</p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">The "Old" SDR Playbook Is Breaking</h2>
        <p className="mb-6">Let's be honest — much of what SDRs do today is repetitive, manual, and non-differentiated:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          <li>Scraping LinkedIn for titles</li>
          <li>Sending the same outreach to everyone</li>
          <li>Following up "just checking in..."</li>
          <li>Updating fields in Salesforce</li>
          <li>Getting ghosted</li>
        </ul>
        <p className="mb-6">And buyers are savvier than ever. They ignore mass emails. They filter calls. They expect personalization.</p>
        <p className="mb-8">Meanwhile, tools like ChatGPT, Clay, and GreendoorAI are showing us one thing loud and clear: AI can already do 80–90% of what a typical SDR does.</p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">AI Doesn't Replace SDRs — It Reinvents Them</h2>
        <p className="mb-6">Here's the reality: SDRs are not disappearing. But the ones who refuse to adapt are.</p>
        <p className="mb-6">Tomorrow's best SDRs will:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          <li>Orchestrate AI workflows, not build from scratch</li>
          <li>Curate sequences and content, not write everything manually</li>
          <li>Interpret data and signals, not waste time generating them</li>
          <li>Own pipeline strategy, not just execution</li>
        </ul>
        <p className="mb-8">Think: SDR as sales strategist and buyer psychologist — with AI as their assistant.</p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">Traditional SDR vs. AI-Powered SDR</h2>
         <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-8">
            <thead>
              <tr>
                <th className="border-b-2 p-4">Task</th>
                <th className="border-b-2 p-4">Traditional SDR</th>
                <th className="border-b-2 p-4">AI-Powered SDR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-4">Lead Research</td>
                <td className="border-b p-4">Manual on LinkedIn</td>
                <td className="border-b p-4">Auto-generated from ICP & signals</td>
              </tr>
              <tr>
                <td className="border-b p-4">Message Writing</td>
                <td className="border-b p-4">From scratch</td>
                <td className="border-b p-4">AI-written with human approval</td>
              </tr>
              <tr>
                <td className="border-b p-4">Follow-Ups</td>
                <td className="border-b p-4">Calendar reminders</td>
                <td className="border-b p-4">AI-scheduled, AI-tracked</td>
              </tr>
              <tr>
                <td className="border-b p-4">CRM Updates</td>
                <td className="border-b p-4">Tedious and slow</td>
                <td className="border-b p-4">Auto-logged, summarized</td>
              </tr>
              <tr>
                <td className="border-b p-4">Call Prep</td>
                <td className="border-b p-4">Scattered across tabs</td>
                <td className="border-b p-4">Prebuilt AI briefing packs</td>
              </tr>
              <tr>
                <td className="border-b p-4">Time Spent Selling</td>
                <td className="border-b p-4">10–20%</td>
                <td className="border-b p-4">60–80%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Enter GreendoorAI: The Co-Pilot for Modern SDRs</h2>
        <p className="mb-6">We built GreendoorAI for the next generation of sales teams — and that includes SDRs. With GreendoorAI, SDRs can:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li>Paste a LinkedIn URL and launch a full campaign in minutes</li>
            <li>Personalize at scale across email, LinkedIn, and messaging</li>
            <li>Get live feedback on what's working and why</li>
            <li>Automatically log and score deals via MEDDPICC + RAG</li>
        </ul>
        <p className="mb-8">The result? More meetings. Higher conversion. Less grunt work. And SDRs who can finally think, not just do.</p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">The Future Role of the SDR</h2>
        <p className="mb-6">In 2025 and beyond, successful SDRs will:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li>Use AI tools like GreendoorAI as creative accelerators</li>
            <li>Focus on building better messaging narratives, not just steps</li>
            <li>Spend more time engaging and less time preparing</li>
            <li>Influence pipeline strategy across the GTM team</li>
        </ul>
        <p className="mb-8">It's not the end of the SDR. It's the beginning of the AI-powered revenue builder.</p>
      </>
    )
  },
  {
    slug: 'meddpicc-plus-machine-learning',
    title: 'MEDDPICC + Machine Learning: A Match Made in Sales Heaven',
    seoTitle: 'MEDDPICC + Machine Learning: The Ultimate Sales Qualification Stack',
    metaDescription: 'See how GreendoorAI combines MEDDPICC with AI to flag deal risks, coach reps, and forecast with precision.',
    publishedDate: '2025-07-22',
    keywords: ['MEDDPICC deal scoring', 'AI in sales forecasting', 'sales qualification framework'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            What happens when your favourite sales framework gets superpowers? The world's best sales qualification framework meets the world's most powerful pattern detector. GreendoorAI integrates MEDDPICC into every deal — and trains on your history to flag red/yellow/green risks before you can. See how this blend of structure + smart signals changes pipeline reviews forever.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">MEDDPICC is one of the most powerful sales qualification frameworks ever created.</h2>
        <p className="mb-6">It helps reps focus on what matters most — and exposes where deals fall apart. But here's the truth: Reps rarely complete MEDDPICC in full. Managers don't have time to chase it. CRM fields stay empty.</p>
        <p className="mb-6">Now imagine if your MEDDPICC fields filled themselves in. If your deal health updated in real time. If your AI co-pilot told you what to do next — and why.</p>
        <p className="mb-8">That's what happens when you combine MEDDPICC + Machine Learning. And it's what powers GreendoorAI.</p>

        <h3 className="text-2xl font-bold mt-12 mb-6">Quick Recap: What Is MEDDPICC?</h3>
        <p className="mb-6">A qualification framework that asks:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4 font-mono">
            <li><strong>M</strong> – Metrics</li>
            <li><strong>E</strong> – Economic Buyer</li>
            <li><strong>D</strong> – Decision Criteria</li>
            <li><strong>D</strong> – Decision Process</li>
            <li><strong>P</strong> – Paper Process</li>
            <li><strong>I</strong> – Identify Pain</li>
            <li><strong>C</strong> – Champion</li>
            <li><strong>C</strong> – Competition</li>
        </ul>
        <p className="mb-8">It's the gold standard for B2B sales orgs. But it's also tedious to maintain manually.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">How GreendoorAI Solves This</h2>
        <p className="mb-6">GreendoorAI doesn't just give you MEDDPICC fields in a CRM. It actively manages deal health through an intelligent RAG (Red-Amber-Green) scoring system, driven by machine learning.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-8">
            <thead>
              <tr>
                <th className="border-b-2 p-4">MEDDPICC Field</th>
                <th className="border-b-2 p-4">How GreendoorAI Finds It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-4">Metrics</td>
                <td className="border-b p-4">Scans call transcripts for ROI language, pain points, and success KPIs.</td>
              </tr>
              <tr>
                <td className="border-b p-4">Economic Buyer</td>
                <td className="border-b p-4">Maps LinkedIn hierarchy, flags titles like CFO/CEO in email threads.</td>
              </tr>
              <tr>
                <td className="border-b p-4">Decision Criteria</td>
                <td className="border-b p-4">Pulls keywords from competitor mentions and security reviews.</td>
              </tr>
              <tr>
                <td className="border-b p-4">Champion</td>
                <td className="border-b p-4">Tracks email response times, positive sentiment, and meeting attendance.</td>
              </tr>
              <tr>
                <td className="border-b p-4">Competition</td>
                <td className="border-b p-4">Flags mentions of Apollo, Outreach, Clay, etc., and auto-builds battle cards.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Magic: RAG Scoring + AI Coaching</h2>
        <p className="mb-6">This is where the magic happens. GreendoorAI doesn't just log data — it interprets it.</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li><span className="font-bold text-red-500">Red:</span> Missing Economic Buyer, no recent contact, competitor mentioned twice.</li>
            <li><span className="font-bold text-yellow-500">Amber:</span> Champion engaged, but no clear metrics defined.</li>
            <li><span className="font-bold text-green-500">Green:</span> All MEDDPICC fields strong, positive sentiment, next steps scheduled.</li>
        </ul>
        <p className="mb-6">Your pipeline reviews go from "What's the update?" to "AI has flagged this deal. Here's why, and here's the play to fix it."</p>
        <p className="mb-8">This is proactive deal management — not reactive reporting.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Future of Sales Qualification</h2>
        <p className="mb-6">Frameworks like MEDDPICC provide structure. Machine learning provides intelligence. When you combine them, you get something new:</p>
        <p className="mb-8 font-bold">Predictive deal coaching.</p>
        <p className="mb-6">Stop chasing reps for updates. Start letting your AI co-pilot guide you to your next win.</p>
      </>
    )
  },
    {
    slug: 'the-only-three-sales-metrics-that-matter',
    title: 'Stop Drowning in Data: The Only 3 Sales Metrics That Matter in 2025',
    seoTitle: 'The Only 3 Sales Metrics That Matter in 2025',
    metaDescription: 'Vanity metrics kill sales teams. Discover the three AI-era KPIs that actually predict revenue — and how to track them automatically.',
    publishedDate: '2025-07-25',
    keywords: ['sales KPIs', 'sales performance metrics', 'AI sales analytics'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Pipeline created. Dials made. Emails sent. Your CRM is full of data — but most of it is noise. In the age of AI, only three metrics actually predict the health of your sales engine. Here's what they are, why they matter, and how GreendoorAI helps you track them without lifting a finger.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Your Sales Dashboard Is Probably Lying to You</h2>
        <p className="mb-6">For years, sales leaders have been obsessed with "activity metrics":</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          <li>Number of calls</li>
          <li>Emails sent</li>
          <li>Meetings booked</li>
          <li>Opportunities created</li>
        </ul>
        <p className="mb-6">But these are vanity metrics. They measure effort, not effectiveness. They tell you what your team is doing, not what they're accomplishing.</p>
        <p className="mb-8">In 2025, it's time for an upgrade. The best sales teams are focusing on outcomes, not output.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Three Metrics That Actually Matter</h2>
        <p className="mb-6">Here are the only three KPIs you need to build a predictable revenue machine:</p>
        
        <h3 className="text-2xl font-bold mt-10 mb-4">1. Pipeline Velocity</h3>
        <p className="mb-4"><strong>What it is:</strong> How fast a qualified deal moves from creation to close.</p>
        <p className="mb-4"><strong>Why it matters:</strong> It's the ultimate measure of sales cycle efficiency. A high velocity means your messaging, process, and reps are all in sync.</p>
        <p className="mb-6"><strong>How GreendoorAI tracks it:</strong> By auto-logging every touchpoint and using AI to flag deals that are stalled, you get a real-time view of deal momentum without manual CRM updates.</p>

        <h3 className="text-2xl font-bold mt-10 mb-4">2. Cost per Qualified Meeting</h3>
        <p className="mb-4"><strong>What it is:</strong> The total cost (SDR salary, tools, etc.) divided by the number of meetings that result in a real opportunity.</p>
        <p className="mb-4"><strong>Why it matters:</strong> This reveals the true ROI of your outbound engine. A low cost means you're targeting the right people with the right message, efficiently.</p>
        <p className="mb-6"><strong>How GreendoorAI tracks it:</strong> By automating 95% of the manual work, GreendoorAI drastically cuts your cost per meeting. No more paying SDRs to copy-paste data. You pay for outcomes, not headcount.</p>

        <h3 className="text-2xl font-bold mt-10 mb-4">3. Conversation-to-Close Ratio</h3>
        <p className="mb-4"><strong>What it is:</strong> Of the deals that reach the first real conversation, what percentage actually close?</p>
        <p className="mb-4"><strong>Why it matters:</strong> This is the purest measure of your product-market fit and your reps' ability to sell. A high ratio means you're solving a real pain for the right audience.</p>
        <p className="mb-6"><strong>How GreendoorAI tracks it:</strong> With RAG scoring and MEDDPICC analysis, GreendoorAI helps you understand *why* deals are won or lost. It's not just a number — it's a feedback loop for your entire GTM strategy.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">From Vanity to Value</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-8">
            <thead>
              <tr>
                <th className="border-b-2 p-4">Old Metric (Vanity)</th>
                <th className="border-b-2 p-4">New Metric (Value)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-4"># of Dials</td>
                <td className="border-b p-4">Pipeline Velocity</td>
              </tr>
              <tr>
                <td className="border-b p-4"># of Emails Sent</td>
                <td className="border-b p-4">Cost per Qualified Meeting</td>
              </tr>
              <tr>
                <td className="border-b p-4"># of Meetings Booked</td>
                <td className="border-b p-4">Conversation-to-Close Ratio</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Takeaway</h2>
        <p className="mb-6">Stop managing your sales team like a call center. Start running it like a high-performance revenue engine.</p>
        <p className="mb-8">Focus on speed, cost, and conversion. Let AI handle the rest.</p>
      </>
    )
  },
  {
    slug: 'why-your-outbound-isnt-working',
    title: "Your Outbound Sucks Because It's Not a System — It's a To-Do List",
    seoTitle: 'Why Your Outbound Isn't Working: System vs. To-Do List',
    metaDescription: 'If your outbound feels like a chore list of tasks, you're doing it wrong. Learn how to build a true sales system that runs itself.',
    publishedDate: '2025-07-29',
    keywords: ['outbound sales strategy', 'sales system', 'outreach automation'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Research leads. Write emails. Update CRM. Follow up. Get ghosted. Repeat. If this is your "outbound strategy," you don't have a strategy — you have a checklist. And checklists don't scale. Here's how to graduate from a list of tasks to a true outbound *system* that generates pipeline while you sleep.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">What's the Difference Between a To-Do List and a System?</h2>
        <p className="mb-6">A to-do list is a collection of one-off tasks. It requires constant manual input. It's reactive. It's what most sales teams call "outbound."</p>
        <p className="mb-6">A system is a set of interconnected parts that work together to achieve a goal. It's automated. It's proactive. It learns and improves over time.</p>
        <p className="mb-8">Here's how that looks in practice:</p>

        <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="border p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Outbound as a To-Do List 👎</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Manually search LinkedIn for leads</li>
                    <li>Write one-off emails for each one</li>
                    <li>Set a reminder to follow up</li>
                    <li>Copy-paste notes into the CRM</li>
                    <li>Guess which deals are real</li>
                    <li>Hope something closes</li>
                </ul>
            </div>
            <div className="border p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-4">Outbound as a System 👍</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Define an ICP, let AI find leads</li>
                    <li>AI writes and launches campaigns</li>
                    <li>AI follows up based on engagement</li>
                    <li>CRM is updated automatically</li>
                    <li>AI scores deals with RAG + MEDDPICC</li>
                    <li>Get alerts when human touch is needed</li>
                </ul>
            </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Problem with the To-Do List Approach</h2>
        <p className="mb-6">When your outbound is just a list of tasks, you get:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          <li><strong>Burnout:</strong> Reps spend their days on low-value admin work.</li>
          <li><strong>Inconsistency:</strong> Follow-up is sporadic. Messaging is all over the place.</li>
          <li><strong>No Visibility:</strong> You have no idea what's actually working or why.</li>
          <li><strong>Zero Scalability:</strong> The only way to do more is to hire more people to do more tasks.</li>
        </ul>
        <p className="mb-8 font-bold">You're stuck in a hamster wheel of manual effort with unpredictable results.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">How GreendoorAI Turns Your Checklist into a System</h2>
        <p className="mb-6">GreendoorAI was built to be the engine of your sales system. It connects all the pieces that are currently disconnected in your process:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li><strong>ICP Definition:</strong> You tell the system who to target by giving it a URL or a description.</li>
            <li><strong>Campaign Generation:</strong> The system creates and runs the outreach.</li>
            <li><strong>Engagement Tracking:</strong> The system monitors opens, clicks, and replies.</li>
            <li><strong>Deal Intelligence:</strong> The system scores every opportunity in real-time.</li>
            <li><strong>Learning Loop:</strong> The system gets smarter with every single interaction.</li>
        </ul>
        <p className="mb-8">Your reps go from being task-doers to system-managers. They orchestrate. They strategize. They close.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Takeaway</h2>
        <p className="mb-6">If you want to scale your revenue, you need to stop thinking in tasks and start thinking in systems.</p>
        <p className="mb-6">Stop handing your reps a to-do list. Give them an AI-powered engine.</p>
        <p className="mb-8">That's the difference between working *in* your sales process and working *on* it.</p>
      </>
    )
  },
   {
    slug: 'the-art-of-the-follow-up-ai-edition',
    title: 'The Art of the Follow-Up, AI Edition: Never "Just Check In" Again',
    seoTitle: 'AI-Powered Sales Follow-Up: Never "Just Check In" Again',
    metaDescription: "Stop sending useless follow-up emails. See how AI can help you add value, create urgency, and get replies without being annoying.",
    publishedDate: '2025-08-01',
    keywords: ['sales follow up email', 'AI email writer', 'sales cadence'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            "Just checking in..." is the saddest phrase in sales. It signals you have nothing of value to add. But what if your follow-ups were timely, relevant, and genuinely helpful? That's the promise of AI-driven outreach. Here's how to use AI to craft follow-ups that actually move deals forward.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Why Most Follow-Ups Fail</h2>
        <p className="mb-6">Your prospect doesn't reply to your first email. What do you do? If you're like most reps, you send some variation of:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4 italic text-gray-500">
          <li>"Just wanted to follow up on my last email."</li>
          <li>"Circling back on this."</li>
          <li>"Any thoughts on the below?"</li>
        </ul>
        <p className="mb-6">This is lazy. It puts the burden on the buyer to remember who you are and what you want. It adds zero value. It makes you look desperate.</p>
        <p className="mb-8">A good follow-up is not a reminder. It's a new opportunity to be relevant.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Anatomy of a Perfect AI-Powered Follow-Up</h2>
        <p className="mb-6">Instead of just bumping your thread, AI can help you find a new angle. GreendoorAI builds campaigns with follow-ups based on triggers, not just time delays.</p>
        
        <h3 className="text-2xl font-bold mt-10 mb-4">Trigger 1: Company News or Signal</h3>
        <p className="mb-4"><strong>Old way:</strong> "Following up."</p>
        <p className="mb-6"><strong>AI way:</strong> "Saw you just hired a new VP of Sales on LinkedIn. Usually, when that happens, scaling the pipeline is top of mind. Our AI can help them hit the ground running with an automated outbound engine."</p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Trigger 2: Relevant Content</h3>
        <p className="mb-4"><strong>Old way:</strong> "Any updates?"</p>
        <p className="mb-6"><strong>AI way:</strong> "I know you're focused on improving your sales team's efficiency. This article on the only 3 sales metrics that matter might be a useful framework. Happy to walk you through how we automate them."</p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Trigger 3: A Different Value Prop</h3>
        <p className="mb-4"><strong>Old way:</strong> "Did you see my email?"</p>
        <p className="mb-6"><strong>AI way:</strong> "Last time I reached out, I focused on booking more meetings. But I was thinking about your role as a RevOps leader, and the real value might be in how our AI automatically cleans your CRM data and provides deal intelligence. No more chasing reps for updates."</p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Trigger 4: The "Breakup" Email</h3>
        <p className="mb-4"><strong>Old way:</strong> (Silence. You give up.)</p>
        <p className="mb-6"><strong>AI way:</strong> "It seems like now isn't the right time to connect about building an AI-powered sales engine. I won't reach out again, but if you're ever drowning in manual sales tasks, you know where to find me. All the best, [Your Name]."</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">How GreendoorAI Automates This</h2>
        <p className="mb-6">You don't have time to manually track news for hundreds of prospects. That's why GreendoorAI builds this logic into its campaigns:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li><strong>It monitors signals:</strong> LinkedIn activity, company news, and even the content your prospect engages with.</li>
            <li><strong>It crafts the angle:</strong> The AI suggests the most relevant hook for each follow-up.</li>
            <li><strong>It runs on autopilot:</strong> The multi-step sequence runs in the background. You only get involved when they reply.</li>
        </ul>
        <p className="mb-8">This transforms your follow-up from a nuisance into a valuable, consultative touchpoint.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Takeaway</h2>
        <p className="mb-6">Stop being a human reminder service. Start being a valuable resource.</p>
        <p className="mb-8">Use AI to add context and value to every single follow-up. Your reply rates (and your commission checks) will thank you.</p>
      </>
    )
  },
  {
    slug: 'the-founder-as-the-first-sales-rep',
    title: 'Dear Founder: You Are the First and Most Important Sales Rep',
    seoTitle: 'The Founder as the First Sales Rep: A Guide to Early-Stage GTM',
    metaDescription: "As a founder, you can't outsource sales. Learn how to leverage your unique position to close your first deals and build a repeatable GTM motion.",
    publishedDate: '2025-08-05',
    keywords: ['founder led sales', 'early stage sales', 'go to market strategy for startups'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            You built the product. You know the vision. You understand the pain point better than anyone. So why are you trying to hire an SDR to sell for you? In the early days, you are the #1 salesperson. Here's how to embrace that role, close your first critical customers, and build a sales playbook that actually works.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Why Founders Must Sell</h2>
        <p className="mb-6">Hiring a junior salesperson to figure out your GTM strategy is one of the most common (and fatal) mistakes early-stage founders make. No one can sell your product like you can. Because you're not just selling a tool — you're selling a vision.</p>
        <p className="mb-8">Only you can:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          <li>Speak with authentic passion and authority.</li>
          <li>Get brutally honest feedback on the product.</li>
          <li>Pivot the messaging in real-time based on conversations.</li>
          <li>Sell the future, not just the current features.</li>
        </ul>
        <p className="mb-8 font-bold">Your first 10 customers aren't buying your product. They're buying you.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Founder's Unfair Advantage in Sales</h2>
        <p className="mb-6">Prospects are tired of talking to SDRs who don't understand their business. When a founder reaches out, it's a completely different dynamic.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-8">
            <thead>
              <tr>
                <th className="border-b-2 p-4">Factor</th>
                <th className="border-b-2 p-4">SDR Outreach</th>
                <th className="border-b-2 p-4">Founder Outreach</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-4">Credibility</td>
                <td className="border-b p-4">Low</td>
                <td className="border-b p-4">Instantly High</td>
              </tr>
              <tr>
                <td className="border-b p-4">Goal</td>
                <td className="border-b p-4">Book a meeting</td>
                <td className="border-b p-4">Learn and solve a problem</td>
              </tr>
              <tr>
                <td className="border-b p-4">Response Rate</td>
                <td className="border-b p-4">~1%</td>
                <td className="border-b p-4">10-20%+</td>
              </tr>
              <tr>
                <td className="border-b p-4">What the buyer thinks</td>
                <td className="border-b p-4">"Another sales email..."</td>
                <td className="border-b p-4">"The person who built this wants to talk to me?"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">But Founders Don't Have Time... Right?</h2>
        <p className="mb-6">This is the classic objection. You're busy building the product, hiring, and fundraising. You don't have time for manual outbound.</p>
        <p className="mb-6">And you're right. You shouldn't be spending your days copy-pasting from LinkedIn to your CRM. Your time is too valuable.</p>
        <p className="mb-8">That's why we built GreendoorAI. It's the AI sales employee that lets a founder be the seller, without the soul-crushing admin work.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">How Founders Use GreendoorAI to Scale Themselves</h2>
        <p className="mb-6">With GreendoorAI, a founder can build a powerful, scalable sales motion in minutes per day:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li><strong>Paste a URL, Launch a Campaign:</strong> Find the perfect prospect on LinkedIn? Paste their profile into GreendoorAI. The AI will build and run a multi-step outreach campaign from your email account, in your voice.</li>
            <li><strong>Automated Follow-up:</strong> GreendoorAI handles all the follow-ups with value-added content, so you don't have to.</li>
            <li><strong>Intelligence, Not Just Meetings:</strong> When a prospect replies, GreendoorAI gives you a full briefing: their pain points, their company's tech stack, and a MEDDPICC-based score of how qualified they are.</li>
            <li><strong>You Only Show Up for a Conversation:</strong> You, the founder, only get pulled in when a prospect is engaged and ready to talk. You spend your precious time on high-value conversations, not prospecting.</li>
        </ul>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">The Goal: A Founder-Built Sales Playbook</h2>
        <p className="mb-6">By using a tool like GreendoorAI to handle the execution, you can focus on the strategy. You'll learn:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li>Which messaging resonates.</li>
            <li>What pain points are most acute.</li>
            <li>Who your real ICP is.</li>
            <li>What objections come up.</li>
        </ul>
        <p className="mb-6">You're not just closing deals. You're building a repeatable GTM playbook. Once you have that, *then* you can hire your first salesperson. And you'll be able to hand them a system that works, not a mission impossible.</p>
        <p className="mb-8">Stop trying to delegate selling. Start automating the tasks, and own the strategy. It's the only way to win.</p>
      </>
    )
  },
  {
    slug: 'apollo-vs-outreach-vs-greendoorai',
    title: 'Apollo vs. Outreach vs. Clay vs. GreendoorAI: Which is Right for You?',
    seoTitle: 'GreendoorAI vs. Apollo, Outreach, Clay: A Competitor Comparison',
    metaDescription: 'An honest look at the pros and cons of the most popular sales tools, and where GreendoorAI fits in as a true AI-native revenue platform.',
    publishedDate: '2025-08-08',
    keywords: ['GreendoorAI vs Apollo', 'GreendoorAI vs Clay', 'sales tools comparison', 'Outreach alternative'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            The sales tech landscape is crowded and confusing. You have data providers, sequence tools, data enrichment platforms, and conversation intelligence. But they're all point solutions. GreendoorAI is different. It's not another tool in your stack — it's the AI employee that runs the stack for you. Here's a breakdown of how we compare.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Modern Sales Stack Is Broken</h2>
        <p className="mb-6">Most sales teams stitch together a Frankenstein's monster of tools:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          <li><strong>Apollo/ZoomInfo</strong> for data.</li>
          <li><strong>Outreach/Salesloft</strong> for sequencing.</li>
          <li><strong>Clay</strong> for data enrichment and logic.</li>
          <li><strong>Gong/Chorus</strong> for call analysis.</li>
          <li><strong>Salesforce</strong> as the system of record.</li>
        </ul>
        <p className="mb-6">The result? Reps spend more time managing tools than talking to customers. Data gets lost. And the process is incredibly fragile.</p>
        <p className="mb-8 font-bold">GreendoorAI's philosophy is simple: What if one AI system could do all of that?</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Competitor Breakdown</h2>

        <div className="space-y-12">
            <div>
                <h3 className="text-2xl font-bold mb-4">vs. Apollo</h3>
                <p className="mb-4"><strong>What it is:</strong> A massive database with a basic sequencing tool attached.</p>
                <p className="mb-4"><strong>Great for:</strong> Getting a huge list of contacts for cheap.</p>
                <p className="mb-4"><strong>Where it falls short:</strong> The data is often outdated. The sequencing is rigid. And it has zero intelligence. It's a list, not a brain.</p>
                <p className="mb-6"><strong>Choose GreendoorAI if:</strong> You want quality over quantity. You want an AI that finds the *right* people and engages them intelligently, not just a tool to blast thousands of unqualified leads.</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-4">vs. Outreach/Salesloft</h3>
                <p className="mb-4"><strong>What they are:</strong> Powerful tools for managing complex sales cadences for large teams.</p>
                <p className="mb-4"><strong>Great for:</strong> Enterprise sales teams that need to enforce a specific, rigid process.</p>
                <p className="mb-4"><strong>Where they fall short:</strong> They are "dumb" systems. They do what you tell them to do. They don't think for themselves. They require a ton of setup and a dedicated admin to manage.</p>
                <p className="mb-6"><strong>Choose GreendoorAI if:</strong> You want a system that adapts and learns. You want AI to suggest the best next step, not just execute a predefined sequence. You want agility, not bureaucracy.</p>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-4">vs. Clay</h3>
                <p className="mb-4"><strong>What it is:</strong> An incredibly powerful data enrichment and workflow automation tool. Think of it as Zapier for sales data.</p>
                <p className="mb-4"><strong>Great for:</strong> Tech-savvy power users who want to build complex, custom waterfalls of data enrichment from dozens of sources.</p>
                <p className="mb-4"><strong>Where it falls short:</strong> It's a tool, not a solution. It's a box of LEGOs, not a finished model. You still need to be the brain. You have to design the logic, write the prompts, and manage the workflows. It doesn't have a native understanding of sales.</p>
                <p className="mb-6"><strong>Choose GreendoorAI if:</strong> You want the power of complex data enrichment *plus* a sales-aware AI brain. GreendoorAI does the Clay-like work for you, but with a deep, native understanding of MEDDPICC, campaign strategy, and deal scoring.</p>
            </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Big Picture: Point Solutions vs. a True Platform</h2>
         <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-8">
            <thead>
              <tr>
                <th className="border-b-2 p-4">Feature</th>
                <th className="border-b-2 p-4">GreendoorAI</th>
                <th className="border-b-2 p-4">The "Stitched-Together" Stack</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-4">Core Function</td>
                <td className="border-b p-4">Autonomous AI Sales Employee</td>
                <td className="border-b p-4">Collection of Dumb Tools</td>
              </tr>
              <tr>
                <td className="border-b p-4">User Effort</td>
                <td className="border-b p-4">Orchestrate the AI</td>
                <td className="border-b p-4">Manage 5+ different tools</td>
              </tr>
              <tr>
                <td className="border-b p-4">Intelligence</td>
                <td className="border-b p-4">Learns and improves on its own</td>
                <td className="border-b p-4">Relies 100% on human input</td>
              </tr>
              <tr>
                <td className="border-b p-4">Time to Value</td>
                <td className="border-b p-4">Minutes</td>
                <td className="border-b p-4">Weeks or Months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Final Question</h2>
        <p className="mb-6">Do you want to spend your time and money buying, integrating, and managing a dozen different sales tools?</p>
        <p className="mb-8">Or do you want to hire one AI employee that does the work of all of them?</p>
        <p className="mb-8">The choice is yours.</p>
      </>
    )
  },
  {
    slug: 'the-ai-sales-brain',
    title: "It's Not a GPT Wrapper: Inside the GreendoorAI Sales Brain™",
    seoTitle: 'Inside the GreendoorAI Sales Brain™',
    metaDescription: "Learn what makes GreendoorAI different from other 'AI' sales tools. It's not a prompt library — it's a true reasoning and learning system.",
    publishedDate: '2025-08-12',
    keywords: ['AI sales platform', 'GPT for sales', 'AI reasoning engine'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Every sales tool is adding "AI" to their marketing. But most are just thin wrappers around OpenAI's API. You write a prompt, it spits out text, and then it forgets everything. GreendoorAI is fundamentally different. We've built a true AI Sales Brain™ with memory, reasoning, and the ability to learn. Here's a look under the hood.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Problem with "GPT Wrapper" Sales Tools</h2>
        <p className="mb-6">Most "AI" sales tools work like this:</p>
        <p className="mb-8 font-mono bg-gray-100 dark:bg-gray-800 p-4 rounded-md">Human writes prompt → AI generates text → AI forgets → Repeat</p>
        <p className="mb-6">This is a useful feature, but it's not a system. It's a glorified template engine. It can't learn from what works. It doesn't understand the context of a deal. It has no memory.</p>
        <p className="mb-8">It's like having a salesperson with severe amnesia. They can say the right words, but they have no idea who they're talking to or why.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The GreendoorAI Difference: A System with Memory</h2>
        <p className="mb-6">The GreendoorAI Sales Brain™ is built on three core pillars that set it apart:</p>

        <div className="space-y-8 my-12">
            <div className="p-6 border rounded-lg">
                <h3 className="text-2xl font-bold mb-4">1. The Memory Layer</h3>
                <p>GreendoorAI remembers every single interaction. Every email sent, every reply received, every call transcript, every change in a prospect's LinkedIn profile. This persistent memory allows it to build a rich, evolving picture of every person and company in your pipeline.</p>
            </div>
            <div className="p-6 border rounded-lg">
                <h3 className="text-2xl font-bold mb-4">2. The Reasoning Engine</h3>
                <p>This is where we go beyond simple text generation. The reasoning engine takes the data from the memory layer and applies sales-specific logic to it. It understands concepts like MEDDPICC, buyer intent, and deal risk. It can connect the dots between a prospect downloading a whitepaper and them mentioning a competitor on a call three weeks later.</p>
            </div>
            <div className="p-6 border rounded-lg">
                <h3 className="text-2xl font-bold mb-4">3. The Learning Loop</h3>
                <p>This is the most powerful part. The Sales Brain™ constantly analyzes outcomes. When a certain type of messaging leads to more meetings, it learns and adapts. When deals with a certain red flag tend to stall, it learns to flag them earlier. Your sales process gets smarter every single day, automatically.</p>
            </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Simple Analogy: GPS vs. a Paper Map</h2>
        <p className="mb-6">A "GPT wrapper" tool is like a paper map. It can show you where you are, but it can't tell you the best way to get to your destination. It doesn't know about traffic, road closures, or faster routes.</p>
        <p className="mb-8">GreendoorAI is like a GPS. It has a real-time understanding of the entire landscape. It not only shows you the destination (a closed deal) but guides you turn-by-turn on the most efficient path to get there, adapting in real time to changing conditions.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">What This Means for You</h2>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          <li><strong>Outreach That Improves Itself:</strong> Your campaigns get more effective over time without you having to A/B test everything manually.</li>
          <li><strong>Deal Coaching That's Actually Smart:</strong> Get proactive advice based on real data, not just a manager's gut feel.</li>
          <li><strong>Forecasts You Can Actually Trust:</strong> Our deal scoring is based on a deep, holistic understanding of deal health, not just a rep's "happy ears."</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Takeaway</h2>
        <p className="mb-6">Don't be fooled by the "AI" buzzword. Ask your vendors how their system learns. Ask them how it remembers.</p>
        <p className="mb-8">Or just hire the AI employee that has a brain built-in from day one.</p>
      </>
    )
  },
  {
    slug: 'death-of-the-crm',
    title: 'The CRM Is Dead. Long Live the AI Revenue Platform.',
    seoTitle: 'The CRM Is Dead: The Rise of AI Revenue Platforms',
    metaDescription: 'CRMs were built for data storage, not for action. The future belongs to AI-native platforms that don't just store data, but use it to drive revenue.',
    publishedDate: '2025-08-15',
    keywords: ['death of crm', 'AI revenue platform', 'salesforce alternative'],
    content: (
      <>
        <p className="lead text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            For thirty years, the CRM has been the center of the sales universe. But it was built for an era of manual data entry and reactive reporting. It's a digital filing cabinet. The future of sales isn't about storing data — it's about acting on it. And for that, you need a new kind of platform.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Original Sin of the CRM</h2>
        <p className="mb-6">The fundamental flaw of every CRM from Salesforce to HubSpot is this: <strong>it relies on humans to feed it.</strong></p>
        <p className="mb-6">Sales reps have to:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
          <li>Manually log calls and emails.</li>
          <li>Update opportunity stages.</li>
          <li>Fill in MEDDPICC fields.</li>
          <li>Change close dates.</li>
          <li>Add contacts.</li>
        </ul>
        <p className="mb-6">And because reps hate doing this (rightly so, it's not selling), the data is almost always incomplete, out of date, and unreliable.</p>
        <p className="mb-8">The very system that's supposed to be the "single source of truth" is often the single source of lies.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Shift from a System of Record to a System of Action</h2>
        <p className="mb-6">A CRM is a passive database. It holds information. An AI Revenue Platform is an active engine. It does things.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse my-8">
            <thead>
              <tr>
                <th className="border-b-2 p-4"></th>
                <th className="border-b-2 p-4">CRM (The Past)</th>
                <th className="border-b-2 p-4">AI Revenue Platform (The Future)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-4 font-bold">Primary Purpose</td>
                <td className="border-b p-4">Store data</td>
                <td className="border-b p-4">Generate revenue</td>
              </tr>
              <tr>
                <td className="border-b p-4 font-bold">Data Entry</td>
                <td className="border-b p-4">Manual, human-driven</td>
                <td className="border-b p-4">Automatic, AI-driven</td>
              </tr>
              <tr>
                <td className="border-b p-4 font-bold">Core Interaction</td>
                <td className="border-b p-4">Reps update the CRM</td>
                <td className="border-b p-4">The AI updates the reps</td>
              </tr>
              <tr>
                <td className="border-b p-4 font-bold">Main Value</td>
                <td className="border-b p-4">Reporting on the past</td>
                <td className="border-b p-4">Impacting the future</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">How GreendoorAI Makes the CRM Obsolete</h2>
        <p className="mb-6">GreendoorAI isn't a replacement for your CRM's database (yet). But it is a replacement for the CRM as the primary interface for your sales team.</p>
        <p className="mb-6">With GreendoorAI:</p>
        <ul className="list-disc list-inside space-y-2 mb-8 pl-4">
            <li><strong>Data flows in automatically:</strong> Every email, call, and interaction is captured and analyzed by the AI Sales Brain™, which then updates your CRM in the background.</li>
            <li><strong>Reps work in one place:</strong> Instead of juggling tabs for their CRM, email, LinkedIn, and sales tools, reps work inside GreendoorAI. It's their single pane of glass for prospecting, engaging, and closing.</li>
            <li><strong>Intelligence is front and center:</strong> The first thing you see isn't a dashboard of stale data. It's a prioritized list of actions: "This deal is at risk," "This prospect is ready for a call," "This messaging is working best this week."</li>
        </ul>
        <p className="mb-8">Your CRM becomes what it was always meant to be: a boring, reliable database. The intelligence, the workflow, and the action all happen in GreendoorAI.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Takeaway</h2>
        <p className="mb-6">Stop paying millions for a glorified spreadsheet that your team hates using.</p>
        <p className="mb-6">The future of sales isn't about better record-keeping. It's about building an intelligent, autonomous engine that drives revenue.</p>
        <p className="mb-8">The CRM is dead. The AI Revenue Platform is here. And it's ready to work for you.</p>
      </>
    )
  }
]; 