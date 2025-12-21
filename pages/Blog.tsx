import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { posts, content } from '../data';
import { Search } from 'lucide-react';
import GeometricPattern from '../components/GeometricPattern';

const Blog: React.FC = () => {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState('');

  const filteredPosts = posts.filter(post => 
    post.title[lang].toLowerCase().includes(filter.toLowerCase()) || 
    post.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="animate-fade-in py-24 bg-brand-light min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-brand-warm/20 pb-8">
          <div>
            <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Journal
            </span>
            <h1 className="text-4xl font-serif font-medium text-brand-dark">{content[lang].nav.blog}</h1>
          </div>
          <div className="relative w-full md:w-64 mt-6 md:mt-0">
            <input 
              type="text" 
              placeholder="Search..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-0 pr-8 py-2 border-b border-brand-warm/30 focus:outline-none focus:border-brand-primary bg-transparent placeholder-brand-warm/50 text-brand-dark transition-colors"
            />
            <Search className="absolute right-0 top-2.5 text-brand-warm" size={18} />
          </div>
        </div>

        <div className="space-y-16">
          {filteredPosts.map(post => (
            <article key={post.id} className="group flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-5/12 w-full aspect-[4/3] bg-white overflow-hidden rounded-lg shadow-sm border border-brand-warm/10">
                 <GeometricPattern seed={post.id} className="w-full h-full opacity-70 group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="md:w-7/12 flex flex-col h-full py-2">
                <div className="flex gap-3 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-brand-primary uppercase tracking-widest border border-brand-primary/20 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                  <Link to={`/blog/${post.id}`}>{post.title[lang]}</Link>
                </h2>
                <p className="text-brand-dark/70 mb-3 line-clamp-3 font-light leading-relaxed">
                  {post.excerpt[lang]}
                </p>
                
                {/* distinct Read More link appended after excerpt */}
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-block mb-6 text-brand-primary font-bold text-sm tracking-wide border-b-2 border-brand-primary/30 hover:border-brand-primary transition-all pb-0.5"
                >
                  Read More...
                </Link>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-brand-warm/10 w-full">
                  <span className="text-xs text-brand-warm">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-brand-warm font-light">
              No articles found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;