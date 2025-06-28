import PageMeta from '@/components/PageMeta';
import FeatureCard from '@/components/FeatureCard';

const forTeamsFeatures = [
    {
        title: "For Founders",
        description: "Find your first 100 customers and build a repeatable sales process.",
        link: "/for/founders"
    },
    {
        title: "For Sales",
        description: "Automate your prospecting and outreach, and spend more time selling.",
        link: "/for/sales"
    },
    {
        title: "For Marketing",
        description: "Find your ICP, build your target account list, and power your ABM campaigns.",
        link: "/for/marketing"
    },
    {
        title: "For Recruiting",
        description: "Find and engage top talent with our database of 200M+ contacts.",
        link: "/for/recruiting"
    }
];

const ForTeams = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="A new way to sell, for every team | Greendoor"
                description="Greendoor is built for modern sales teams. Whether you're a founder, sales rep, or leader, Greendoor helps you close more deals."
                path="/for"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    A new way to sell, for every team
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Greendoor is built for modern sales teams. Whether you're a founder, sales rep, or leader, Greendoor helps you close more deals.
                </p>
            </section>

            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {forTeamsFeatures.map((feature, index) => (
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

export default ForTeams;
