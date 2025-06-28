import PageMeta from '@/components/PageMeta';

const SalesEngagement = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="Sales Engagement | Greendoor"
                description="Automate your outreach with multi-channel campaigns. A/B test messaging, track performance, and get AI-driven insights to optimize your sales process."
                path="/platform/sales-engagement"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Automate Your Outreach</h1>
                    <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Engage your prospects with multi-channel campaigns that convert.</p>
                </div>

                <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">Multi-Channel Campaigns</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Engage prospects with email, social, and phone calls in a single campaign.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">A/B Testing</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Test your messaging to see what converts, and get AI-driven insights to improve your copy.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">Performance Tracking</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Track your campaign performance with real-time analytics and get insights on what's working.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SalesEngagement; 