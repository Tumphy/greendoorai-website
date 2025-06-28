import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-green-600">
            GreenDoor AI
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/how-it-works" className="text-gray-700 hover:text-green-600">How it Works</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-green-600">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
