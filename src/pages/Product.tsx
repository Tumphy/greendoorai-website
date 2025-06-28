import React from 'react';
import { PlayCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const epics = [
    {
        name: "Just-a-URL Onboarding",
        copy: "Upload a deck or URL, we auto-discover your ICP",
        tag: "Instant setup"
    },
    {
        name: "Campaign Engine",
        copy: "Prebuilt AI outreach flows",
        tag: "Launch in minutes"
    },
    {
        name: "Deal Assistant",
        copy: "MEDDPICC, RAG, coaching",
        tag: "AI tells you what to do next"
    },
    {
        name: "AI Sales Brain",
        copy: "Learns tone, memory, account history",
        tag: "Personalized at scale"
    },
    {
        name: "Knowledge Loop",
        copy: "Learns from win/loss patterns",
        tag: "Gets smarter over time"
    },
]

const Product: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 py-16">
            <PageMeta
                title="Product Features"
                description="GreendoorAI isn't just a tool, it's an employee. Explore our features, from Just-a-URL onboarding to our self-improving AI Sales Brain."
                path="/product"
            />
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        GreendoorAI isn't a tool — it's an employee.
                    </h1>
                    <ul className="mt-8 text-lg text-gray-600 dark:text-gray-300 space-y-2">
                        <li>One that:</li>
                        <li>✓ Parses your pitch decks</li>
                        <li>✓ Auto-writes outbound</li>
                        <li>✓ Maps personas</li>
                        <li>✓ Tracks deals</li>
                        <li>✓ Handles objections</li>
                        <li>✓ Sends QBRs</li>
                    </ul>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                    {epics.map((epic) => (
                        <div key={epic.name} className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{epic.name}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">{epic.copy}</p>
                                <div className="mt-4 aspect-w-16 aspect-h-9 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                    <PlayCircle className="h-16 w-16 text-gray-400" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">{epic.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product; 