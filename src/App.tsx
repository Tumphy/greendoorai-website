import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import NotFound from './pages/NotFound';

const Index = lazy(() => import('./pages/Index'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Waitlist = lazy(() => import('./pages/Waitlist'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Company = lazy(() => import('./pages/Company'));

// Platform Pages
const Platform = lazy(() => import('./pages/platform/index'));
const AISalesBrain = lazy(() => import('./pages/platform/AISalesBrain'));
const DataNetwork = lazy(() => import('./pages/platform/DataNetwork'));
const SalesEngagement = lazy(() => import('./pages/platform/SalesEngagement'));
const DealManagement = lazy(() => import('./pages/platform/DealManagement'));
const ReportingAndAnalytics = lazy(() => import('./pages/platform/ReportingAndAnalytics'));

// For Teams Pages
const ForTeams = lazy(() => import('./pages/for/index'));
const ForFounders = lazy(() => import('./pages/for/ForFounders'));
const ForSales = lazy(() => import('./pages/for/ForSales'));
const ForMarketing = lazy(() => import('./pages/for/ForMarketing'));
const ForRecruiting = lazy(() => import('./pages/for/ForRecruiting'));

// Resources
const Compare = lazy(() => import('./pages/Compare'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <StickyCTA />
        <main>
          <Suspense fallback={<div className="text-center py-40">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/company" element={<Company />} />

              {/* Platform Routes */}
              <Route path="/platform" element={<Platform />} />
              <Route path="/platform/ai-sales-brain" element={<AISalesBrain />} />
              <Route path="/platform/data-network" element={<DataNetwork />} />
              <Route path="/platform/sales-engagement" element={<SalesEngagement />} />
              <Route path="/platform/deal-management" element={<DealManagement />} />
              <Route path="/platform/reporting-and-analytics" element={<ReportingAndAnalytics />} />
              
              {/* For Teams Routes */}
              <Route path="/for" element={<ForTeams />} />
              <Route path="/for/founders" element={<ForFounders />} />
              <Route path="/for/sales" element={<ForSales />} />
              <Route path="/for/marketing" element={<ForMarketing />} />
              <Route path="/for/recruiting" element={<ForRecruiting />} />

              {/* Resources */}
              <Route path="/compare" element={<Compare />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
