import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-90 p-4 text-white text-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-lg font-semibold">Ready to close more deals?</p>
                <Link
                    to="/waitlist"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Request a Demo
                </Link>
            </div>
        </div>
    );
};

export default StickyCTA; 