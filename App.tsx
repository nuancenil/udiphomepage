import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import PTAxial from './pages/PTAxial';
import DecisionLab from './pages/DecisionLab';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* 
              Home Route MUST be defined exactly.
              If the browser URL has a hash (e.g. /#/decision-lab), 
              React Router will naturally load that page. 
              Clicking the Logo in Layout.tsx will navigate to "/" (Home).
            */}
            <Route path="/" element={<Home />} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/ptaxial" element={<PTAxial />} />
            <Route path="/decision-lab" element={<DecisionLab />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Catch-all: Redirects any unknown paths immediately to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

export default App;