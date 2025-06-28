import { Link } from 'react-router-dom';

interface FeatureCardProps {
    title: string;
    description: string;
    link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, link }) => {
    return (
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link to={link}>{title}</Link>
            </h2>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
            <Link to={link} className="inline-flex items-center text-blue-600 hover:underline">
                Learn More
            </Link>
        </div>
    );
};

export default FeatureCard; 