import React from 'react';
import PageMeta from '@/components/PageMeta';

const teamMembers = [
    {
        name: "John Doe",
        role: "Founder & CEO",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: "Jane Smith",
        role: "Head of Product",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    // Add more team members here
];

const Company: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-900 py-16">
            <PageMeta
                title="Our Company"
                description="Learn about the vision, team, and values behind GreendoorAI. We're on a mission to revolutionize the sales industry with artificial intelligence."
                path="/company"
            />
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        Our Vision
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        We believe that the future of sales is autonomous. Our mission is to build the world's best AI sales platform, empowering businesses to close more deals with less effort. We're just getting started.
                    </p>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
                        Meet the Team
                    </h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                <img className="mx-auto h-24 w-24 rounded-full" src={member.imageUrl} alt={member.name} />
                                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">{member.name}</h3>
                                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Trust & Security
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Your data stays yours. Always. We are SOC2 and GDPR-ready, and we never train our models on your data or resell it.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Company; 