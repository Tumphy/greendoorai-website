import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const benefits = [
    "Book AI-qualified meetings",
    "Run automated outbound",
    "Track your entire pipeline"
]

const Waitlist: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 py-16">
            <PageMeta
                title="Join the Waitlist"
                description="Get early access to GreendoorAI and be the first to experience the future of sales. Founding users get lifetime discounts and exclusive access."
                path="/waitlist"
            />
            <div className="container mx-auto px-6">
                <div className="max-w-xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        Join the waitlist.
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        We're onboarding early users now — and feedback means perks. Founding users get lifetime discounts, exclusive Slack access, and influence on our roadmap.
                    </p>
                </div>

                <div className="mt-12 max-w-lg mx-auto">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-8">
                        <form className="flex flex-col gap-4">
                            <Input type="email" placeholder="Enter your email" className="py-6" />
                            <Button type="submit" size="lg" className="py-6">Join the Waitlist</Button>
                        </form>
                    </div>

                    <ul className="mt-8 space-y-3">
                        {benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center">
                                <Check className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        No credit card required.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Waitlist; 