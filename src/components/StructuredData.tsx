import React from 'react';

const StructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GreendoorAI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "3000",
      "priceCurrency": "USD",
      "description": "Autonomous Starter package"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89"
    },
    "description": "GreendoorAI is the world's first autonomous AI sales agent that can take a URL and turn it into booked meetings within 48 hours, with zero human intervention.",
    "url": "https://www.greendoor.ai",
    "screenshot": "https://www.greendoor.ai/screenshot.png",
    "featureList": [
      "Autonomous Prospecting",
      "AI-Powered Campaign Generation",
      "Multi-channel Campaign Orchestration",
      "Autonomous A/B Testing & Optimization",
      "Real-time Performance Dashboard"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData; 