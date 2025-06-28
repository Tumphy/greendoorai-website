import PageMeta from '@/components/PageMeta';

const AISalesBrain = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="AI Sales Brain | Greendoor"
                description="The first AI that understands your go-to-market data. Build your ideal customer profile, write hyper-personalized emails, and get AI-driven coaching."
                path="/platform/ai-sales-brain"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">AI Sales Brain</h1>
                    <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">The first AI that understands your go-to-market data.</p>
                </div>

                <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">Ideal Customer Profile</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Connect your CRM and our AI will build your ICP. Discover new accounts and personas that are likely to buy.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">Hyper-Personalized Emails</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Our AI writes emails based on your prospect's pain points, persona, and your product's value proposition.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold dark:text-white">AI-Driven Coaching</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Get real-time feedback on your sales calls, and get insights on what's working and what's not.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AISalesBrain; 