import PageMeta from '@/components/PageMeta';

const DataNetwork = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="Data Network | Greendoor"
                description="Access a network of 200M+ contacts and 10M+ companies. Find verified emails, mobile numbers, and technographic data to fuel your sales pipeline."
                path="/platform/data-network"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The World's Best Go-To-Market Data</h1>
                    <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Find your next customer with our network of 200M+ contacts and 10M+ companies.</p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="mb-2 text-xl font-bold dark:text-white">200M+ Contacts</h3>
                        <p className="text-gray-500 dark:text-gray-400">Find the right person to talk to with our database of verified contacts.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="mb-2 text-xl font-bold dark:text-white">10M+ Companies</h3>
                        <p className="text-gray-500 dark:text-gray-400">Target the right accounts with our comprehensive company data.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Verified Emails & Mobile Numbers</h3>
                        <p className="text-gray-500 dark:text-gray-400">Get in touch with your prospects with our 95% accurate contact data.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Technographics</h3>
                        <p className="text-gray-500 dark:text-gray-400">Know what technologies your prospects are using to tailor your pitch.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DataNetwork; 