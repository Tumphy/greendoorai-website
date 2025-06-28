import PageMeta from '@/components/PageMeta';
import FeatureCard from '@/components/FeatureCard';

const platformFeatures = [
    {
        title: "AI Sales Brain",
        description: "The first AI that understands your GTM data. Build ICPs, write emails, and get coaching insights.",
        link: "/platform/ai-sales-brain"
    },
    {
        title: "Data Network",
        description: "Access 200M+ contacts and 10M+ companies. Find verified emails, mobile numbers, and technographics.",
        link: "/platform/data-network"
    },
    {
        title: "Sales Engagement",
        description: "Automate your outreach with multi-channel campaigns. A/B test messaging and track performance.",
        link: "/platform/sales-engagement"
    },
    {
        title: "Deal Management",
        description: "Manage your pipeline with a modern, AI-powered CRM. Get deal intelligence and forecasting.",
        link: "/platform/deal-management"
    },
    {
        title: "Reporting & Analytics",
        description: "Track your team's performance with customizable dashboards and get AI-driven insights.",
        link: "/platform/reporting-and-analytics"
    }
];

const Platform = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="The #1 AI Sales Platform | Greendoor"
                description="Greendoor is the first all-in-one platform that unifies your entire GTM stack. Find prospects, automate outreach, and write personalized emails with a single platform."
                path="/platform"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    One Platform, Infinite Possibilities
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Greendoor gives you everything you need to find, engage, and close your ideal customers.
                </p>
            </section>

            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {platformFeatures.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            link={feature.link}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Platform; 