import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const Index = lazy(() => import('./pages/Index'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Waitlist = lazy(() => import('./pages/Waitlist'));
const Demo = lazy(() => import('./pages/Demo'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Company = lazy(() => import('./pages/Company'));

// New Pages
const Platform = lazy(() => import('./pages/Platform'));
const AISalesBrain = lazy(() => import('./pages/AISalesBrain'));
const DealIntelligence = lazy(() => import('./pages/DealIntelligence'));
const Campaigns = lazy(() => import('./pages/Campaigns'));
const Workflow = lazy(() => import('./pages/Workflow'));
const Integrations = lazy(() => import('./pages/Integrations'));
const ForFounders = lazy(() => import('./pages/ForFounders'));
const ForSDRs = lazy(() => import('./pages/ForSDRs'));
const ForRevOps = lazy(() => import('./pages/ForRevOps'));
const ForAEs = lazy(() => import('./pages/ForAEs'));
const ForAgencies = lazy(() => import('./pages/ForAgencies'));
const Results = lazy(() => import('./pages/Results'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Compare = lazy(() => import('./pages/Compare'));
const VsApollo = lazy(() => import('./pages/VsApollo'));
const VsOutreach = lazy(() => import('./pages/VsOutreach'));
const VsClay = lazy(() => import('./pages/VsClay'));
const Guides = lazy(() => import('./pages/Guides'));
const FounderDiary = lazy(() => import('./pages/FounderDiary'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <main>
          <Suspense fallback={<div className="text-center py-40">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/company" element={<Company />} />

              {/* New Routes */}
              <Route path="/platform" element={<Platform />} />
              <Route path="/ai-sales-brain" element={<AISalesBrain />} />
              <Route path="/deal-intelligence" element={<DealIntelligence />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/workflow" element={<Workflow />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/for-founders" element={<ForFounders />} />
              <Route path="/for-sdrs" element={<ForSDRs />} />
              <Route path="/for-revops" element={<ForRevOps />} />
              <Route path="/for-aes" element={<ForAEs />} />
              <Route path="/for-agencies" element={<ForAgencies />} />
              <Route path="/results" element={<Results />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/vs-apollo" element={<VsApollo />} />
              <Route path="/vs-outreach" element={<VsOutreach />} />
              <Route path="/vs-clay" element={<VsClay />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/founder-diary" element={<FounderDiary />} />

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
