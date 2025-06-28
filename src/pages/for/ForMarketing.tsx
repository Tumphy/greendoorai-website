import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router-dom';

const ForMarketing = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="For Marketing Teams | Greendoor"
                description="Power your go-to-market strategy with the world's best data. Find your ICP, build your target account list, and power your ABM campaigns."
                path="/for/marketing"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Power your GTM strategy</h1>
                    <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">The fuel for your marketing engine.</p>
                </div>

                <div className="mt-16 space-y-12">
                    <div className="grid gap-8 items-center lg:grid-cols-2">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Find your ICP</h2>
                            <p className="mb-8 font-light lg:text-xl">Stop guessing and start selling. Connect your existing customer data and Greendoor will build your ICP. Discover new accounts and personas that are likely to buy.</p>
                        </div>
                        <div className="w-full h-64 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
                    </div>

                    <div className="grid gap-8 items-center lg:grid-cols-2">
                        <div className="w-full h-64 bg-gray-200 rounded-lg dark:bg-gray-700 lg:order-last"></div>
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Power your ABM campaigns</h2>
                            <p className="mb-8 font-light lg:text-xl">Build your target account list and find the right people to talk to. Greendoor gives you the data you need to power your ABM campaigns.</p>
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

export default ForMarketing; 