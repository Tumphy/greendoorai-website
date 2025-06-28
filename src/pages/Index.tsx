import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Problem from '@/components/Problem';
import PlatformOverview from '@/components/PlatformOverview';
import ValueProp from '@/components/ValueProp';
import InteractiveDemo from '@/components/InteractiveDemo';
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
      <ValueProp />
      <InteractiveDemo />
      <FinalCTA />
    </div>
  );
};

export default Index;
