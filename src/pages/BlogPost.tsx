import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import NotFound from './NotFound';
import { allPosts } from '../lib/posts'; // Import the posts

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="bg-white dark:bg-gray-900">
      <PageMeta
        title={post.seoTitle}
        description={post.metaDescription}
        keywords={post.keywords.join(', ')}
      />

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Activate Your AI Sales Employee?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  GreendoorAI handles the research, outreach, and deal scoring. You just close.
                </p>
                <Link
                  to="/demo"
                  className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Try the Interactive Demo
                </Link>
                <Link
                  to="/waitlist"
                  className="mt-4 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-white dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Join the Waitlist
                </Link>
              </div>

              {relatedPosts.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Keep Reading
                  </h3>
                  <ul className="space-y-4">
                    {relatedPosts.map(related => (
                      <li key={related.slug}>
                        <Link to={`/blog/${related.slug}`} className="text-base font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                          {related.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPost; 