import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';

const About: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <div className="animate-fade-in bg-brand-light">
      <div className="max-w-5xl mx-auto px-6 py-24">
        
        <div className="text-center mb-20">
           <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
             Who We Are
          </span>
          <h1 className="text-5xl font-serif font-medium text-brand-dark">{t.title}</h1>
        </div>
        
        <div className="flex flex-col md:flex-row gap-20 items-center md:items-start mb-24">
          
          {/* Left Side: Motto Card (Replaces Image) */}
          <div className="w-full md:w-5/12 relative group flex justify-center">
             
             {/* Decorative Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-secondary/10 rounded-full blur-3xl -z-10"></div>
             
             {/* Styled Typographic Card */}
             <div className="relative transform transition-all duration-700 ease-out rotate-[-2deg] group-hover:rotate-0 group-hover:scale-105 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] max-w-md w-full border border-brand-warm/10 bg-white aspect-[4/3] flex flex-col items-center justify-center p-8 overflow-hidden">
                
                {/* Subtle background texture/decoration */}
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 0V60M0 30H60" stroke="#D47854" strokeWidth="1"/>
                    </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-2xl"></div>

                <div className="relative z-10 text-center">
                    <div className="mb-6 space-y-3">
                        <h3 className="font-serif text-3xl md:text-4xl text-brand-dark tracking-[0.2em]">知欲知求</h3>
                        <h3 className="font-serif text-3xl md:text-4xl text-brand-dark tracking-[0.2em]">轉識成智</h3>
                    </div>
                    
                    <div className="w-16 h-[2px] bg-brand-orange mx-auto my-6 rounded-full"></div>
                    
                    <p className="font-hand text-2xl md:text-3xl text-brand-muted transform -rotate-2 origin-center">
                        Knowledge into Wisdom
                    </p>
                </div>
             </div>
          </div>
          
          {/* Right Side Content */}
          <div className="w-full md:w-7/12 pt-4">
             <h2 className="text-3xl font-serif text-brand-dark mb-2">Hazel C.F. Lin</h2>
             <p className="text-brand-primary font-medium mb-8 text-xs tracking-[0.1em] uppercase">Founder / Taiwan Patent Attorney</p>
             <div className="space-y-6 text-brand-dark/80 leading-relaxed text-lg font-light">
                {t.content.map((p, i) => {
                  const isHeader = p.length < 50 && !p.endsWith('.') && !p.endsWith('。');
                  if (isHeader) {
                    return <h3 key={i} className="text-xl font-serif text-brand-dark font-bold pt-6 border-b border-brand-warm/30 pb-2 mb-2">{p}</h3>;
                  }
                  return <p key={i}>{p}</p>;
                })}
             </div>
          </div>
        </div>

        <div className="bg-brand-dark text-brand-light p-16 rounded-[3rem] text-center relative overflow-hidden">
           {/* Abstract Circles */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

           <div className="relative z-10">
             <blockquote className="font-serif text-3xl md:text-4xl italic mb-8 leading-snug text-white">
               "Skate to where the puck is going to be, not where it has been."
             </blockquote>
             <cite className="text-brand-warm not-italic text-sm tracking-widest uppercase">- Wayne Gretzky</cite>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;