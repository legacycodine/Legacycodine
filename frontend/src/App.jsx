import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactStoriesPage from './pages/ImpactStoriesPage';
import BlogPostPage from './pages/BlogPostPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import StoryDetailPage from "./pages/StoryDetailPage";
import JoinPage from './pages/JoinPage'; // New Component
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // New Component

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
        <Header />
        <Content style={{ padding: '0' }}>
          <div className="site-layout-content" style={{ minHeight: 'calc(100vh - 80px - 200px)' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/posts/:postId" element={<BlogPostPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/programs/:programSlug" element={<ProgramDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/impact-stories" element={<ImpactStoriesPage />} /> 
              <Route path="/stories/:storySlug" element={<StoryDetailPage />} />
              {/* These are the routes we've been setting up from your footer */}
              <Route path="/join" element={<JoinPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;