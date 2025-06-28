import { Rocket, Briefcase, TrendingUp } from 'lucide-react';

const UserPersonasSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Built for a New Era of Growth</h2>
      <p className="text-xl text-gray-600 mb-12">Who uses an autonomous sales agent? Visionaries who are ready to lead.</p>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="p-8 bg-gray-50 rounded-lg shadow-md border">
          <Rocket className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Ambitious Founders</h3>
          <p className="mt-2 text-gray-600">You've built a great product, now you need to sell it. Deploy an autonomous agent to build your sales engine from the ground up, so you can focus on building your company.</p>
        </div>
        <div className="p-8 bg-gray-50 rounded-lg shadow-md border">
          <Briefcase className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Sales Leaders</h3>
          <p className="mt-2 text-gray-600">You're tired of the old way of doing things. Replace your inefficient sales processes with an autonomous workforce that scales on demand and delivers predictable results.</p>
        </div>
        <div className="p-8 bg-gray-50 rounded-lg shadow-md border">
          <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Marketing Teams</h3>
          <p className="mt-2 text-gray-600">You generate the leads, now make sure they're acted on. Our autonomous agent ensures that every lead is followed up on instantly, 24/7, without fail.</p>
        </div>
      </div>
    </div>
  </section>
);

export default UserPersonasSection;
