import React from 'react';
import PageMeta from '../components/PageMeta';

const Guides: React.FC = () => {
  return (
    <div>
      <PageMeta
        title="Sales Guides | GreendoorAI"
        description="Long-form tactical guides on MEDDPICC, AI in outbound, and more."
      />
      <div className="text-center py-24">
        <h1 className="text-4xl font-bold">Guides</h1>
        <p className="mt-4 text-lg">This is a placeholder for the Guides page.</p>
      </div>
    </div>
  );
};

export default Guides; 