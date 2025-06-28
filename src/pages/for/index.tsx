import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router-dom';

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
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/for/founders">For Founders</Link></h2>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Find your first 100 customers and build a repeatable sales process.</p>
                        <Link to="/for/founders" className="inline-flex items-center text-blue-600 hover:underline">
                            Learn More
                        </Link>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/for/sales">For Sales</Link></h2>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Automate your prospecting and outreach, and spend more time selling.</p>
                        <Link to="/for/sales" className="inline-flex items-center text-blue-600 hover:underline">
                            Learn More
                        </Link>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/for/marketing">For Marketing</Link></h2>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Find your ICP, build your target account list, and power your ABM campaigns.</p>
                        <Link to="/for/marketing" className="inline-flex items-center text-blue-600 hover:underline">
                            Learn More
                        </Link>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/for/recruiting">For Recruiting</Link></h2>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Find and engage top talent with our database of 200M+ contacts.</p>
                        <Link to="/for/recruiting" className="inline-flex items-center text-blue-600 hover:underline">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForTeams;
