import PageMeta from '@/components/PageMeta';

const DealManagement = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="Deal Management | Greendoor"
                description="Manage your pipeline with a modern, AI-powered CRM. Get deal intelligence, forecasting, and everything you need to close deals faster."
                path="/platform/deal-management"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Close Deals Faster</h1>
                    <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">A modern, AI-powered CRM to manage your pipeline.</p>
                </div>

                <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">Pipeline Management</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Visualize your pipeline, track your deals, and get insights on what's working.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">Deal Intelligence</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Get AI-driven insights on your deals, and get feedback on what to do next.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">Forecasting</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Get accurate sales forecasts with our AI-powered forecasting engine.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DealManagement; 