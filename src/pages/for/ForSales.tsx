import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router-dom';

const ForSales = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="For Sales Teams | Greendoor"
                description="Close more deals with less work. Automate your prospecting and outreach, and spend more time selling."
                path="/for/sales"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Close more deals, with less work</h1>
                    <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Automate your prospecting and outreach, and spend more time selling.</p>
                </div>

                <div className="mt-16 space-y-12">
                    <div className="grid gap-8 items-center lg:grid-cols-2">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Find your next customer</h2>
                            <p className="mb-8 font-light lg:text-xl">Access our network of 200M+ contacts and 10M+ companies. Find verified emails, mobile numbers, and technographics.</p>
                        </div>
                        <div className="w-full h-64 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
                    </div>

                    <div className="grid gap-8 items-center lg:grid-cols-2">
                        <div className="w-full h-64 bg-gray-200 rounded-lg dark:bg-gray-700 lg:order-last"></div>
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Automate your outreach</h2>
                            <p className="mb-8 font-light lg:text-xl">Engage prospects with multi-channel campaigns. A/B test messaging, track performance, and get AI-driven insights.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-16">
                    <Link to="/waitlist" className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900">
                        Request a Demo
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ForSales;
