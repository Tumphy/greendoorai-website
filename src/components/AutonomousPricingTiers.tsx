import React from 'react';
import { CheckCircle, XCircle, Users, Briefcase, Building, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const pricingTiers = [
  {
    name: 'Individual',
    price: '$149',
    frequency: '/user/month',
    idealFor: 'Solo sellers, founders, & individual SDRs',
    features: [
      { text: 'Core AI outreach & research tools', included: true },
      { text: 'Basic MEDDPICC framework', included: true },
      { text: 'Limited monthly AI actions', included: true },
      { text: 'Multi-user collaboration', included: false },
      { text: 'Advanced pipeline management', included: false },
      { text: 'Analytics & reporting dashboards', included: false },
      { text: 'API access for custom integrations', included: false },
      { text: 'Dedicated success manager', included: false },
    ],
    cta: 'Start Selling Smarter',
    isMostPopular: false,
    user_minimum: '1 user',
  },
  {
    name: 'Team',
    price: '$129',
    frequency: '/user/month',
    idealFor: 'Mid-market sales teams (5-50 seats)',
    features: [
      { text: 'Everything in Individual', included: true },
      { text: 'Multi-user collaboration (team workspace)', included: true },
      { text: 'Advanced MEDDPICC & pipeline management', included: true },
      { text: 'Analytics & reporting dashboards', included: true },
      { text: 'Expanded monthly actions quota', included: true },
      { text: 'Standard CRM Integrations', included: true },
      { text: 'API access for custom integrations', included: false },
      { text: 'Dedicated success manager', included: false },
    ],
    cta: 'Supercharge Your Team',
    isMostPopular: true,
    user_minimum: '5+ users',
  },
  {
    name: 'Agency',
    price: 'Custom',
    frequency: 'From ~$2,500/month',
    idealFor: 'Sales agencies managing multiple clients',
    features: [
      { text: 'Manage multiple client sales programs (5 included)', included: true },
      { text: 'Add-on client accounts (~$500/mo each)', included: true },
      { text: 'Premium support & onboarding included', included: true },
      { text: 'API access for custom integrations', included: true },
      { text: 'Multi-client dashboards & reporting', included: true },
      { text: 'White-labeling options', included: true },
      { text: 'Dedicated partner manager', included: true },
      { text: 'Custom workflows & advanced analytics', included: false },
    ],
    cta: 'Scale Your Agency',
    isMostPopular: false,
    user_minimum: 'Up to 5 client accounts',
  },
  {
    name: 'Enterprise',
    price: '$199',
    frequency: '/user/month (annual only)',
    idealFor: 'Large sales orgs with complex processes',
    features: [
      { text: 'Everything in Team', included: true },
      { text: 'Custom workflows & advanced analytics', included: true },
      { text: 'Unlimited AI actions & contacts', included: true },
      { text: 'Dedicated success manager & priority support', included: true },
      { text: 'Custom integrations & security reviews', included: true },
      { text: 'Advanced revenue intelligence modules', included: true },
      { text: 'SSO & advanced security compliance', included: true },
      { text: 'Bespoke AI model tuning', included: true },
    ],
    cta: 'Contact Sales',
    isMostPopular: false,
    user_minimum: '10+ users',
  },
];

const tierIcons: { [key: string]: JSX.Element } = {
  Individual: <Users className="w-8 h-8 text-blue-500" />,
  Team: <Briefcase className="w-8 h-8 text-green-500" />,
  Agency: <Building className="w-8 h-8 text-purple-500" />,
  Enterprise: <Building className="w-10 h-10 text-red-500" />,
};

const FeatureLine = ({ text, included }: { text: string; included: boolean }) => (
  <li className="flex items-center space-x-3">
    {included ? (
      <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
    ) : (
      <XCircle className="flex-shrink-0 w-5 h-5 text-gray-400" />
    )}
    <span className={cn(included ? 'text-gray-800' : 'text-gray-500 line-through')}>{text}</span>
  </li>
);

const AutonomousPricingTiers = () => {
  return (
    <TooltipProvider>
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wider uppercase">Pricing</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              The Right Plan for Your Sales Motion
            </p>
            <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
              From individual deal-makers to enterprise organizations, GreendoorAI scales to meet your revenue goals.
            </p>
          </div>

          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-8 xl:grid-cols-4">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={cn("flex flex-col", tier.isMostPopular ? 'border-indigo-600 border-2 shadow-2xl' : 'border-gray-200')}>
                <CardHeader className="p-6 bg-white rounded-t-lg">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        {tierIcons[tier.name]}
                        <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                      </div>
                      <CardDescription>{tier.idealFor}</CardDescription>
                    </div>
                    {tier.isMostPopular && <Badge color="indigo">Most Popular</Badge>}
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                    <span className="ml-1 text-xl font-semibold text-gray-500">{tier.frequency}</span>
                  </div>
                   <p className="text-sm text-gray-500 mt-2">{tier.user_minimum}</p>
                </CardHeader>
                <CardContent className="flex-1 p-6 space-y-4">
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <FeatureLine key={feature.text} text={feature.text} included={feature.included} />
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 bg-gray-50 rounded-b-lg">
                  <Button className="w-full text-lg">
                    {tier.cta} <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-lg text-gray-600">
                All plans come with a 20% discount for annual pre-paid commitments.
             </p>
             <p className="mt-4 text-gray-500">
                Have questions or need a custom solution?{' '}
                <a href="/contact" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Talk to our sales team.
                </a>
             </p>
          </div>

        </div>
      </div>
    </TooltipProvider>
  );
};

export default AutonomousPricingTiers; 