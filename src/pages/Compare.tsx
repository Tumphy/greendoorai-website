import React from 'react';
import PageMeta from '@/components/PageMeta';

const Compare = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <PageMeta
                title="Greendoor vs. The Competition"
                description="See how Greendoor compares to other sales tools."
                path="/compare"
            />
            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Greendoor vs. The Competition</h1>
                    <p className="mt-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Your sales stack is a mess. Consolidate your tools and save thousands.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">Feature</th>
                                <th scope="col" className="py-3 px-6 text-center">Greendoor</th>
                                <th scope="col" className="py-3 px-6 text-center">Apollo</th>
                                <th scope="col" className="py-3 px-6 text-center">Outreach</th>
                                <th scope="col" className="py-3 px-6 text-center">Salesloft</th>
                                <th scope="col" className="py-3 px-6 text-center">Zoominfo</th>
                                <th scope="col" className="py-3 px-6 text-center">Salesforce</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">All-in-one Platform</th>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">AI Sales Brain</th>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Data Network</th>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">❌</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Sales Engagement</th>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Deal Management</th>
                                <td className="py-4 px-6 text-center">✅</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">❌</td>
                                <td className="py-4 px-6 text-center">✅</td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">Price</th>
                                <td className="py-4 px-6 text-center">$100/user/mo</td>
                                <td className="py-4 px-6 text-center">$120/user/mo</td>
                                <td className="py-4 px-6 text-center">$150/user/mo</td>
                                <td className="py-4 px-6 text-center">$150/user/mo</td>
                                <td className="py-4 px-6 text-center">$200/user/mo</td>
                                <td className="py-4 px-6 text-center">$500/user/mo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Compare; 