import AutonomousPricingTiers from '@/components/AutonomousPricingTiers';
import React from 'react';
import PageMeta from '@/components/PageMeta';

const faqs = [
    {
        question: "How does billing work?",
        answer: "Our billing is based on the tier you select. The Individual and Team plans are billed per user, per month. The Agency plan has a base monthly fee that includes a set number of client accounts, with the option to add more. Enterprise plans are custom and billed annually."
    },
    {
        question: "Do you replace Outreach, Apollo, Gong?",
        answer: "GreendoorAI is designed to be an all-in-one sales platform that can replace many of the functions of these tools. However, we also offer integrations with popular CRMs and sales tools, so you can use GreendoorAI to augment your existing stack if you prefer."
    },
    {
        question: "Do I need sales experience?",
        answer: "No. GreendoorAI is designed to be intuitive and easy to use, even for those without a background in sales. Our AI-driven coaching and automated workflows guide you through the sales process, making it easy to get started and see results quickly."
    },
    {
        question: "Can I import leads?",
        answer: "Yes. You can easily import leads from a CSV file or directly from your CRM. GreendoorAI will then enrich this data and use it to power your outbound campaigns."
    }
]

const Pricing: React.FC = () => {
    return (
        <div>
            <PageMeta
                title="Pricing Plans"
                description="Find the right plan for your sales motion. From individual sellers to enterprise organizations, GreendoorAI has a plan to help you close more deals."
                path="/pricing"
            />
            <AutonomousPricingTiers />
            <div className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="mt-12 max-w-3xl mx-auto">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="py-6 border-b border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
