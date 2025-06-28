import { BrainCircuit, Layers, Database } from 'lucide-react';

const IntelligenceLayersSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Powered by a Multi-Layered AI Brain</h2>
      <p className="text-xl text-gray-600 mb-12">Our autonomous agents are built on a foundation of deep, interconnected intelligence.</p>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="p-8 bg-white rounded-lg shadow-md border">
          <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Data Layer</h3>
          <p className="mt-2 text-gray-600">The foundation of our AI is a massive, real-time database of company and contact information, buying signals, and market trends.</p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md border">
          <Layers className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Strategy Layer</h3>
          <p className="mt-2 text-gray-600">This layer contains thousands of proven sales strategies, playbooks, and messaging frameworks that the AI can draw upon to create winning campaigns.</p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md border">
          <BrainCircuit className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Reasoning Layer</h3>
          <p className="mt-2 text-gray-600">The most advanced layer, where the AI makes autonomous decisions, learns from its experiences, and adapts its strategies to achieve its goals.</p>
        </div>
      </div>
    </div>
  </section>
);

export default IntelligenceLayersSection;
