import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, Target, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              We are leading the autonomous sales revolution.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Our mission is to make advanced AI accessible to every business, replacing manual sales work with intelligent, autonomous systems that drive unprecedented growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center mb-24">
            <div className="p-8 border border-gray-200 rounded-lg">
              <Bot className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="mt-2 text-gray-600">A future where every business has a dedicated, autonomous AI workforce executing its sales strategy with superhuman efficiency.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="mt-2 text-gray-600">To build the world's most advanced autonomous sales agents, empowering companies to achieve their growth potential without limitations.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Our Impact</h3>
              <p className="mt-2 text-gray-600">We are not just creating a tool; we are creating a new category of technology that will redefine the future of sales and commerce.</p>
            </div>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700">
            <h2>The GreenDoor AI Story</h2>
            <p>
              GreenDoor AI was founded on a simple but powerful idea: what if a machine could do the entire job of a salesperson, from finding prospects to booking meetings, with zero human intervention?
            </p>
            <p>
              While the rest of the world was building "AI co-pilots" and "sales assistants" to help humans work faster, we saw a different future. We saw a future where the sales process itself could be fully autonomous, freeing up human potential to focus on what they do best: building relationships and closing deals.
            </p>
            <p>
              Our team of world-class AI researchers and veteran sales leaders spent years developing the technology to make this vision a reality. The result is the world's first Autonomous AI Sales Agent, a system that can take a simple URL and turn it into a revenue-generating machine.
            </p>
            <p>
              We believe that autonomous AI is the next great leap forward in business technology, and we are proud to be at the forefront of this revolution. Join us on our mission to reshape the future of sales.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
