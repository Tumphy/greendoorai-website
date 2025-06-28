import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import PageMeta from '@/components/PageMeta';

const personas = [
    {
        name: "Founders",
        title: "For Founders who sell — and want their time back.",
        description: "No more juggling Notion, LinkedIn, ChatGPT, and CRMs. This is the AI sales employee that actually helps you close your first 100 customers."
    },
    {
        name: "Sales Reps",
        title: "You'll book more meetings. And your manager will ask what your secret is.",
        description: "Research, messaging, follow-ups — all handled. You just hit send, show up, and close."
    },
    {
        name: "Agencies",
        title: "Manage 10 clients like it's one. Charge like it's 10.",
        description: "GreendoorAI lets you white-label outreach, track campaign results, and scale outbound delivery — with AI doing the grunt work."
    },
    {
        name: "Revenue Leaders",
        title: "Imagine a full SDR+RevOps function — run by AI.",
        description: "Deal scoring. Forecasting. Pipeline acceleration. Team performance. GreendoorAI helps your reps hit targets and your CRO sleep better."
    },
]

const Persona: React.FC = () => {
    const [activeTab, setActiveTab] = useState(personas[0].name);

    return (
        <div className="bg-white dark:bg-gray-900 py-16">
            <PageMeta
                title="Who We're For"
                description="GreendoorAI is built for the entire GTM team. Find out how we help Founders, Sales Reps, Agencies, and Revenue Leaders win more deals."
                path="/for"
            />
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        Built for the entire GTM team.
                    </h1>
                </div>

                <div className="mt-12">
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {personas.map((persona) => (
                                <button
                                    key={persona.name}
                                    onClick={() => setActiveTab(persona.name)}
                                    className={cn(
                                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                                        activeTab === persona.name
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                                    )}
                                >
                                    {persona.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="mt-8">
                        {personas.map((persona) => (
                            <div
                                key={persona.name}
                                className={cn(activeTab === persona.name ? 'block' : 'hidden')}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{persona.title}</h2>
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{persona.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Persona; 