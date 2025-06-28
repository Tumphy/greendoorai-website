import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
    title: string;
    description: string;
    imageUrl?: string;
    path: string;
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description, imageUrl, path }) => {
    const siteUrl = "https://www.greendoorai.com"; // Replace with your actual domain
    const fullUrl = `${siteUrl}${path}`;
    const fullImageUrl = imageUrl ? `${siteUrl}${imageUrl}` : `${siteUrl}/og-image.png`; // Default OG image

    return (
        <Helmet>
            <title>{`${title} | GreendoorAI`}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={`${title} | GreendoorAI`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={`${title} | GreendoorAI`} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImageUrl} />
        </Helmet>
    );
};

export default PageMeta; 