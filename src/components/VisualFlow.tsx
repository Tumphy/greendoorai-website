const VisualFlow = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            How it Works
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            From a LinkedIn URL to a closed deal in a single platform.
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <div className="flex flex-col items-center mx-4">
            <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <span className="text-4xl">🔗</span>
            </div>
            <p className="mt-4 text-center font-semibold text-gray-900 dark:text-white">LinkedIn URL</p>
          </div>
          <div className="text-4xl text-gray-400 mx-4">→</div>
          <div className="flex flex-col items-center mx-4">
            <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
            <p className="mt-4 text-center font-semibold text-gray-900 dark:text-white">AI Campaign</p>
          </div>
          <div className="text-4xl text-gray-400 mx-4">→</div>
          <div className="flex flex-col items-center mx-4">
            <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <span className="text-4xl">📈</span>
            </div>
            <p className="mt-4 text-center font-semibold text-gray-900 dark:text-white">Deal Tracking</p>
          </div>
          <div className="text-4xl text-gray-400 mx-4">→</div>
          <div className="flex flex-col items-center mx-4">
            <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <span className="text-4xl">🏆</span>
            </div>
            <p className="mt-4 text-center font-semibold text-gray-900 dark:text-white">Closed Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualFlow; 