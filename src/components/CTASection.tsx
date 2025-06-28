const CTASection = () => (
  <section className="py-20 bg-green-600 text-white" id="cta">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to Deploy Your Autonomous Sales Agent?</h2>
      <p className="text-xl mb-4">Join the autonomous sales revolution. Be among the first to replace sales work with AI.</p>
      <p className="text-lg mb-8 opacity-90">
        🎯 From URL to booked meetings in 48 hours • 🤖 Zero human sales work required • ⚡ 24/7 autonomous operation
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 text-lg">
          🚀 Watch Live Autonomous Demo
        </button>
        <button className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 border border-green-500 text-lg">
          🤖 Deploy My AI Agent
        </button>
      </div>
      
      <div className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold">30 min</div>
          <div className="text-sm opacity-80">URL to autonomous system</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">48 hrs</div>
          <div className="text-sm opacity-80">To first booked meeting</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">0</div>
          <div className="text-sm opacity-80">Human sales work required</div>
        </div>
      </div>
      
      <p className="mt-8 text-sm opacity-75">
        ⚠️ Revolutionary technology • Limited early access • Category-defining AI agent
      </p>
    </div>
  </section>
);

export default CTASection;
