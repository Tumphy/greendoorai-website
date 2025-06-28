import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Problem from '@/components/Problem';
import PlatformOverview from '@/components/PlatformOverview';
import VisualFlow from '@/components/VisualFlow';
import ValueProp from '@/components/ValueProp';
import InteractiveDemo from '@/components/InteractiveDemo';
import LeadMagnet from '@/components/LeadMagnet';
import FinalCTA from '@/components/FinalCTA';
import PageMeta from '@/components/PageMeta';

const Index = () => {
  return (
    <div className="flex flex-col">
      <PageMeta
        title="GreendoorAI | The #1 AI Sales Platform"
        description="Greendoor is the first all-in-one platform that unifies your entire GTM stack. Find prospects, automate outreach, and write personalized emails with a single platform."
        path="/"
      />
      <Hero />
      <SocialProof />
      <Problem />
      <PlatformOverview />
      <VisualFlow />
      <ValueProp />
      <InteractiveDemo />
      <LeadMagnet />
      <FinalCTA />
    </div>
  );
};

export default Index;
