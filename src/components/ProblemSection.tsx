const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Sales Software Isn't Enough</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 mb-8">
            Sales tools help humans work faster. Autonomous agents replace the work entirely.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Traditional Sales Software</h3>
              <ul className="text-left space-y-2 text-red-700">
                <li>• Requires human oversight and decision-making</li>
                <li>• Limited to business hours operation</li>
                <li>• Needs constant training and management</li>
                <li>• Inconsistent performance and human error</li>
                <li>• Scales linearly with team size</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Autonomous AI Sales Agent</h3>
              <ul className="text-left space-y-2 text-green-700">
                <li>• Operates independently 24/7 without oversight</li>
                <li>• Never sleeps, never takes breaks</li>
                <li>• Self-training and continuous improvement</li>
                <li>• Consistent high performance, no human error</li>
                <li>• Infinite scalability with single deployment</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">The Autonomous Revolution</h3>
            <p className="text-blue-700">
              "Why help salespeople do their jobs faster when AI can do the job instead?"  
              Join the companies replacing traditional sales teams with autonomous AI agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
