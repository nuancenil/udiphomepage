import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content, posts } from '../data';
import { ArrowRight, Cpu, Activity, ShieldCheck } from 'lucide-react';
import GeometricPattern from '../components/GeometricPattern';
import { PebbleShape } from '../components/BrandLogo';
import { BrandCurveLine, TechGrid } from '../components/BrandGraphics';

const Home: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang].home;
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="animate-fade-in overflow-hidden bg-brand-light">
      
      {/* Hero Section - Recreated to match Page 1 of Brand Guide */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <TechGrid className="opacity-30" />
          
          {/* The Signature Orange Curve (Page 1 style) */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
             <BrandCurveLine className="w-full h-full object-cover opacity-100" />
          </div>

          {/* Subtle Pebble Watermark */}
          <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] text-brand-dark opacity-[0.03]">
             <PebbleShape className="w-full h-full" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            <div className="lg:col-span-8">
              <div className="inline-block mb-12 animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-12 bg-brand-orange"></div>
                  <span className="text-brand-dark text-xs font-bold tracking-[0.25em] uppercase">
                    Eudaimonia IP Consulting
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-brand-dark mb-10 leading-[1.1] tracking-tight animate-fade-in-up whitespace-pre-line" style={{animationDelay: '0.1s'}}>
                {t.heroTitle}
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-warm font-light max-w-2xl mb-16 animate-fade-in-up leading-relaxed pl-1" style={{animationDelay: '0.2s'}}>
                {t.heroSubtitle}
                <br/>
                <span className="text-base md:text-lg mt-4 block text-brand-dark/70">
                  {t.heroDesc}
                </span>
              </p>
              
              <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <Link to="/services" className="group flex items-center gap-4 px-8 py-4 bg-brand-dark text-white rounded-full hover:bg-brand-orange transition-colors duration-300">
                  <span className="text-sm font-bold tracking-widest uppercase">{t.ctaButton}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Vertical text decoration (Page 1 style) */}
            <div className="hidden lg:block lg:col-span-4 text-right self-start pt-20">
               <div className="inline-flex flex-col gap-8 text-xs font-bold tracking-[0.4em] text-brand-dark/40 uppercase writing-vertical-rl">
                  <span>Innovation Strategy</span>
                  <span>Intellectual Property</span>
                  <span>Commercialization</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - Color Blocking Style (Page 9 style) */}
      <section className="relative z-20 py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Card 1 - Dark Grey Block */}
            <Link to="/services" className="group relative bg-brand-dark p-12 md:aspect-square flex flex-col justify-between transition-transform hover:z-10 hover:-translate-y-2 duration-500">
              <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-10 transition-opacity">
                <ArrowRight className="text-white w-12 h-12 -rotate-45" />
              </div>
              <div>
                <Cpu size={32} className="text-brand-primary mb-6" strokeWidth={1} />
                <h3 className="text-3xl font-serif text-brand-light mb-4">{t.sections.services}</h3>
              </div>
              <p className="text-brand-warm font-light text-sm leading-relaxed border-t border-brand-warm/20 pt-6">
                Strategic patent mapping and FTO analysis designed for business growth.
              </p>
            </Link>

            {/* Card 2 - Brand Blue Block */}
            <Link to="/ptaxial" className="group relative bg-brand-primary p-12 md:aspect-square flex flex-col justify-between transition-transform hover:z-10 hover:-translate-y-2 duration-500">
               <div className="absolute inset-0 overflow-hidden">
                 <PebbleShape className="absolute -bottom-20 -right-20 w-64 h-64 text-white opacity-20" />
               </div>
              <div className="relative z-10">
                <Activity size={32} className="text-brand-dark mb-6" strokeWidth={1} />
                <h3 className="text-3xl font-serif text-brand-dark mb-4">{t.sections.ptaxial}</h3>
              </div>
              <p className="text-brand-dark/70 font-medium text-sm leading-relaxed border-t border-brand-dark/10 pt-6 relative z-10">
                Data-driven innovation methodology aligning R&D with IP value.
              </p>
            </Link>

            {/* Card 3 - Brand Orange Block */}
            <Link to="/decision-lab" className="group relative bg-brand-orange p-12 md:aspect-square flex flex-col justify-between transition-transform hover:z-10 hover:-translate-y-2 duration-500">
              <div className="absolute inset-0">
                 <TechGrid className="opacity-10 text-brand-dark" />
              </div>
              <div className="relative z-10">
                <ShieldCheck size={32} className="text-white mb-6" strokeWidth={1} />
                <h3 className="text-3xl font-serif text-brand-dark mb-4">{t.sections.decisionLab}</h3>
              </div>
              <p className="text-brand-dark/80 font-medium text-sm leading-relaxed border-t border-brand-dark/10 pt-6 relative z-10">
                AI-enhanced IP evaluation framework for complex decision making.
              </p>
            </Link>
          </div>

        </div>
      </section>

      {/* Latest Insights - Clean Scientific Layout */}
      <section className="py-32 bg-brand-light relative overflow-hidden">
        {/* Decorative Orange Line */}
        <div className="absolute top-1/2 left-0 w-full">
           <BrandCurveLine className="w-full h-[500px] opacity-40" flipped />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-16 border-b border-brand-dark/10 pb-8">
            <div>
              <span className="text-brand-orange text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                Intelligence
              </span>
              <h2 className="text-4xl font-serif font-medium text-brand-dark">{t.sections.insights}</h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center text-brand-dark hover:text-brand-orange transition-colors text-sm font-bold tracking-widest uppercase group">
              View all <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {recentPosts.map((post, idx) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group block">
                <div className="aspect-[3/2] bg-white overflow-hidden mb-6 relative border border-brand-dark/5 shadow-sm group-hover:shadow-md transition-all">
                   <GeometricPattern seed={post.id} className="w-full h-full opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute top-4 left-4 bg-brand-light/90 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-dark backdrop-blur-sm">
                      {post.tags[0]}
                   </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3 text-xs font-mono text-brand-warm">
                    <span>{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                    <span className="w-8 h-[1px] bg-brand-warm/50"></span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                    {post.title[lang]}
                  </h3>
                  <p className="text-brand-dark/60 text-sm line-clamp-3 font-light leading-relaxed">
                    {post.excerpt[lang]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center md:hidden">
            <Link to="/blog" className="inline-block px-8 py-3 border border-brand-dark/20 text-sm font-bold tracking-widest uppercase text-brand-dark hover:bg-brand-dark hover:text-white transition-colors">
              View all
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;