import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="py-12 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <div className="text-2xl font-bold mb-4">GreenDoor AI</div>
      <p className="text-gray-400">© 2024 GreenDoor AI. All rights reserved.</p>
      <div className="mt-12 border-t border-gray-700 pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-white">Global Availability</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>San Francisco</li>
              <li>New York</li>
              <li>London</li>
              <li>Toronto</li>
              <li>Sydney</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Solutions</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>For Startups</li>
              <li>For Sales Teams</li>
              <li>For Marketing</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} GreendoorAI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
