import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const routes = [
    '/',
    '/how-it-works',
    '/pricing',
    '/about',
    '/demo',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => `
        <url>
          <loc>https://www.greendoor.ai${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${route === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  return (
    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
      {sitemap}
    </pre>
  );
};

export default Sitemap; 