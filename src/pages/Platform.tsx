import React from 'react';
import PageMeta from '../components/PageMeta';

const Platform: React.FC = () => {
  return (
    <div>
      <PageMeta
        title="The GreendoorAI Platform"
        description="An overview of the entire GreendoorAI platform, from ICP detection to customer handoff."
      />
      <div className="text-center py-24">
        <h1 className="text-4xl font-bold">Platform Overview</h1>
        <p className="mt-4 text-lg">This is a placeholder for the Platform page.</p>
      </div>
    </div>
  );
};

export default Platform; 