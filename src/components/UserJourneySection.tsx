import { PlayCircle, Award, BarChart } from 'lucide-react';

const UserJourneySection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Your Journey to Autonomous Growth</h2>
      <p className="text-xl text-gray-600 mb-12">Experience a new era of sales, where results are guaranteed and the process is effortless.</p>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="p-8 bg-gray-50 rounded-lg shadow-md border">
          <PlayCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Effortless Activation</h3>
          <p className="mt-2 text-gray-600">No complicated setup or training required. Simply provide your URL, and our AI does the rest. Your autonomous sales agent will be live and working for you in minutes.</p>
        </div>
        <div className="p-8 bg-gray-50 rounded-lg shadow-md border">
          <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Guaranteed Results</h3>
          <p className="mt-2 text-gray-600">We are so confident in our technology that we guarantee results. If your autonomous agent doesn't book meetings for you, you don't pay. It's that simple.</p>
        </div>
        <div className="p-8 bg-gray-50 rounded-lg shadow-md border">
          <BarChart className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Transparent Reporting</h3>
          <p className="mt-2 text-gray-600">Track your agent's performance in real-time with our intuitive dashboard. See every prospect, every campaign, and every meeting, all in one place.</p>
        </div>
      </div>
    </div>
  </section>
);

export default UserJourneySection;
