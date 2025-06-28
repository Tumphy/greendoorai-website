import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
    {children}
  </Link>
);

const DropdownLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <Link to={to} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
        {children}
    </Link>
);

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [forTeamsOpen, setForTeamsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">GreendoorAI</span>
            <img className="h-8 w-auto" src="/logo.svg" alt="GreendoorAI Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* Heroicon name: outline/bars-3 */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {/* Platform Dropdown */}
          <div className="relative" onMouseEnter={() => setPlatformOpen(true)} onMouseLeave={() => setPlatformOpen(false)}>
              <NavLink to="/platform">Platform</NavLink>
              {platformOpen && (
                  <div className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white dark:bg-gray-800 p-2 shadow-lg ring-1 ring-gray-900/5">
                      <DropdownLink to="/platform">Overview</DropdownLink>
                      <DropdownLink to="/ai-sales-brain">AI Sales Brain</DropdownLink>
                      <DropdownLink to="/deal-intelligence">Deal Intelligence</DropdownLink>
                      <DropdownLink to="/campaigns">Campaigns</DropdownLink>
                      <DropdownLink to="/workflow">Workflow</DropdownLink>
                      <DropdownLink to="/integrations">Integrations</DropdownLink>
                  </div>
              )}
          </div>

          {/* For Teams Dropdown */}
          <div className="relative" onMouseEnter={() => setForTeamsOpen(true)} onMouseLeave={() => setForTeamsOpen(false)}>
              <NavLink to="/for-founders">For Teams</NavLink>
              {forTeamsOpen && (
                  <div className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white dark:bg-gray-800 p-2 shadow-lg ring-1 ring-gray-900/5">
                      <DropdownLink to="/for-founders">For Founders</DropdownLink>
                      <DropdownLink to="/for-sdrs">For SDRs</DropdownLink>
                      <DropdownLink to="/for-revops">For RevOps</DropdownLink>
                      <DropdownLink to="/for-aes">For AEs</DropdownLink>
                      <DropdownLink to="/for-agencies">For Agencies</DropdownLink>
                  </div>
              )}
          </div>
          
          <NavLink to="/results">Results</NavLink>
          <NavLink to="/compare">Compare</NavLink>

           {/* Resources Dropdown */}
          <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <NavLink to="/blog">Resources</NavLink>
              {resourcesOpen && (
                  <div className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white dark:bg-gray-800 p-2 shadow-lg ring-1 ring-gray-900/5">
                      <DropdownLink to="/blog">Blog</DropdownLink>
                      <DropdownLink to="/guides">Guides</DropdownLink>
                      <DropdownLink to="/case-studies">Case Studies</DropdownLink>
                      <DropdownLink to="/founder-diary">Founder Diary</DropdownLink>
                  </div>
              )}
          </div>
          
          <NavLink to="/pricing">Pricing</NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/waitlist">
            <Button>Join Waitlist</Button>
          </Link>
          <Link to="/demo" className="ml-4">
            <Button variant="outline">Demo</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">GreendoorAI</span>
                <img className="h-8 w-auto" src="/logo.svg" alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x-mark */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link to="/platform" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Platform</Link>
                  <Link to="/for-founders" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">For Teams</Link>
                  <Link to="/results" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Results</Link>
                  <Link to="/compare" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Compare</Link>
                  <Link to="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Resources</Link>
                  <Link to="/pricing" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Pricing</Link>
                </div>
                <div className="py-6">
                  <Link to="/waitlist" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Join Waitlist</Link>
                  <Link to="/demo" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Demo</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
