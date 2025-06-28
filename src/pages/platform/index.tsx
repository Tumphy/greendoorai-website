import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router-dom';

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
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/platform/ai-sales-brain">AI Sales Brain</Link></h2>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">The first AI that understands your GTM data. Build ICPs, write emails, and get coaching insights.</p>
                        <Link to="/platform/ai-sales-brain" className="inline-flex items-center text-blue-600 hover:underline">
                            Learn More
                        </Link>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/platform/data-network">Data Network</Link></h2>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Access 200M+ contacts and 10M+ companies. Find verified emails, mobile numbers, and technographics.</p>
                        <Link to="/platform/data-network" className="inline-flex items-center text-blue-600 hover:underline">
                            Learn More
                        </Link>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/platform/sales-engagement">Sales Engagement</Link></h2>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Automate your outreach with multi-channel campaigns. A/B test messaging and track performance.</p>
                        <Link to="/platform/sales-engagement" className="inline-flex items-center text-blue-600 hover:underline">
                            Learn More
                        </Link>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/platform/deal-management">Deal Management</Link></h2>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Manage your pipeline with a modern, AI-powered CRM. Get deal intelligence and forecasting.</p>
                        <Link to="/platform/deal-management" className="inline-flex items-center text-blue-600 hover:underline">
                            Learn More
                        </Link>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/platform/reporting-and-analytics">Reporting & Analytics</Link></h2>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Track your team's performance with customizable dashboards and get AI-driven insights.</p>
                        <Link to="/platform/reporting-and-analytics" className="inline-flex items-center text-blue-600 hover:underline">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Platform; 