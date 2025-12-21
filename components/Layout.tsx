import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';
import { Globe, Menu, X, Linkedin, Mail } from 'lucide-react';
import { LogoHorizontal, LogoVertical, LogoMobileHeader, PebbleShape } from './BrandLogo';
import { BrandCurveLine } from './BrandGraphics';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang, setLang } = useLanguage();
  const t = content[lang].nav;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu when navigating
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  const navLinks = [
    { to: '/', label: t.home, type: 'internal' },
    { to: '/services', label: t.services, type: 'internal' },
    { to: '/decision-lab', label: t.ipDecisionLab, type: 'internal' },
    { to: '/ptaxial', label: t.ptaxial, type: 'internal' },
    { to: '/blog', label: t.blog, type: 'internal' },
    { to: '/about', label: t.about, type: 'internal' },
    { to: '/contact', label: t.contact, type: 'internal' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-light text-brand-dark transition-colors duration-500">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-brand-light/95 backdrop-blur-sm border-b border-brand-warm/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="group hover:opacity-80 transition-opacity">
                <LogoHorizontal lang={lang} theme="light" />
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => {
                if (link.type === 'external') {
                  return (
                     <a
                      key={link.to}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm tracking-widest uppercase transition-all duration-300 relative group py-2 font-medium text-brand-dark hover:text-brand-orange hover:scale-105"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-orange transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                    </a>
                  )
                }
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-sm tracking-widest uppercase transition-all duration-300 relative group py-2 font-medium hover:scale-105 ${
                        isActive 
                          ? 'text-brand-orange' 
                          : 'text-brand-dark hover:text-brand-orange'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-brand-orange transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                      </>
                    )}
                  </NavLink>
                )
              })}
              
              <button
                onClick={toggleLang}
                className="flex items-center space-x-1 px-3 py-1 ml-4 rounded-full border border-brand-warm/50 hover:border-brand-orange text-xs font-medium text-brand-warm hover:text-brand-orange transition-all hover:scale-105"
              >
                <Globe size={14} />
                <span>{lang === 'zh' ? 'EN' : '中'}</span>
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-brand-dark hover:text-brand-orange focus:outline-none transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-brand-light flex flex-col animate-fade-in">
          {/* Header area with close button */}
          <div className="flex justify-between items-center p-6 border-b border-brand-warm/10">
            <LogoMobileHeader lang={lang} theme="light" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-brand-dark hover:text-brand-orange focus:outline-none p-2"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
          </div>

          {/* Links area */}
          <div className="px-8 py-8 space-y-4 flex-1 overflow-y-auto">
            {navLinks.map((link) => {
              const baseStyles = "block text-2xl font-serif font-bold transition-colors py-3";
              if (link.type === 'external') {
                 return (
                    <a
                      key={link.to}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${baseStyles} text-brand-dark hover:text-brand-orange border-b border-brand-warm/5`}
                    >
                       {link.label}
                    </a>
                 )
              }
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `${baseStyles} border-b border-brand-warm/5 ${
                      isActive 
                        ? 'text-brand-orange' 
                        : 'text-brand-dark hover:text-brand-orange'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            })}
            
            {/* Lang Switch in Menu */}
            <div className="pt-8">
               <button
                onClick={() => {
                  toggleLang();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 text-lg text-brand-dark font-medium hover:text-brand-orange bg-brand-primary/10 px-6 py-3 rounded-full transition-all"
              >
                <Globe size={20} className="text-brand-orange" />
                {lang === 'zh' ? 'Switch to English' : '切換至中文'}
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-light py-20 relative overflow-hidden">
        
        {/* New Brand Curve in Footer (Page 14 style) */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
           <BrandCurveLine className="w-full h-full object-cover translate-x-[20%]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="md:col-span-1">
            <div className="mb-8">
              <LogoVertical lang={lang} theme="dark" />
            </div>
            <p className="text-brand-warm text-sm leading-relaxed font-light md:pl-2">
              {lang === 'zh' ? '知欲知求，轉識成智。' : 'Empowering your knowledge, leveraging your IP insights.'}
            </p>
          </div>
          
          <div className="md:col-start-2">
            <h4 className="font-sans font-bold mb-6 text-brand-primary text-xs uppercase tracking-[0.2em]">
              {lang === 'zh' ? '服務' : 'Services'}
            </h4>
            <ul className="space-y-4 text-sm text-brand-light/70 font-light">
              <li><NavLink to="/services" className="hover:text-brand-white transition-colors">Patent Strategy</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-white transition-colors">Trademark</NavLink></li>
              <li><NavLink to="/ptaxial" reloadDocument className="hover:text-brand-white transition-colors">PTAxial™</NavLink></li>
              <li>
                <NavLink to="/decision-lab" reloadDocument className="hover:text-brand-white transition-colors">
                  IP Decision Lab™
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold mb-6 text-brand-primary text-xs uppercase tracking-[0.2em]">
              {content[lang].nav.contact}
            </h4>
            <div className="space-y-4">
              <a href="mailto:genius@eudaimonia-ip.com" className="text-brand-light/70 hover:text-brand-white transition-colors text-sm flex items-center gap-3 group">
                <Mail size={16} className="text-brand-orange" /> 
                genius@eudaimonia-ip.com
              </a>
              <p className="text-brand-light/70 text-sm pl-7">
                Taipei, Taiwan
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold mb-6 text-brand-primary text-xs uppercase tracking-[0.2em]">
              {lang === 'zh' ? '社群' : 'Connect'}
            </h4>
            <div className="flex flex-col space-y-4">
              <a href="https://www.linkedin.com/company/eudaimonia-ip/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-light/70 hover:text-brand-white transition-colors text-sm group">
                <Linkedin size={18} className="text-brand-orange" /> Company Page
              </a>
              <a href="https://www.linkedin.com/showcase/eudaimonia-ip-consulting-showcase/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-light/70 hover:text-brand-white transition-colors text-sm group">
                <Linkedin size={18} className="text-brand-orange" /> Showcase Page
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 pt-8 border-t border-brand-warm/20 flex flex-col md:flex-row justify-between items-center text-xs text-brand-warm font-light tracking-wide">
          <p>© {new Date().getFullYear()} Eudaimonia IP Consulting. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-brand-light transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-brand-light transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;