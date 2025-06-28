const PlatformOverview = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            One platform for your entire GTM motion
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Greendoor replaces your entire sales stack with a single, AI-powered platform.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
              {/* <!-- Icon Placeholder --> */}
              <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M..."></path></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">AI Sales Brain</h3>
            <p className="text-gray-500 dark:text-gray-400">Our AI model connects to your GTM data to build your ideal customer profile, write hyper-personalized emails, and coach your reps.</p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
              {/* <!-- Icon Placeholder --> */}
              <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M..."></path></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Data Network</h3>
            <p className="text-gray-500 dark:text-gray-400">Access a network of 200M+ contacts and 10M+ companies. Find verified emails, mobile numbers, and technographic data.</p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
              {/* <!-- Icon Placeholder --> */}
              <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M..."></path></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Sales Execution</h3>
            <p className="text-gray-500 dark:text-gray-400">Automate your outreach with multi-channel campaigns. A/B test messaging, track performance, and get AI-driven insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview; 