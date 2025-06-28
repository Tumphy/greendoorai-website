import PageMeta from '@/components/PageMeta';

const ReportingAndAnalytics = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="Reporting and Analytics | Greendoor"
                description="Track your team's performance with customizable dashboards and get AI-driven insights to optimize your sales process."
                path="/platform/reporting-and-analytics"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Data-Driven Sales</h1>
                    <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Track your team's performance with customizable dashboards.</p>
                </div>

                <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">Customizable Dashboards</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Build dashboards to track the metrics that matter most to your business.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">AI-Driven Insights</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Get insights on what's working and what's not, and get recommendations on what to do next.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">Real-Time Reporting</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Track your team's performance in real-time, and get alerts when things go off track.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReportingAndAnalytics; 