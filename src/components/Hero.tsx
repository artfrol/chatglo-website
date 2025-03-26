
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-center relative overflow-hidden section-padding">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div ref={observerRef} className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            Start advertising campaign in <span className="text-gradient">AI apps</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            400M+ untapped users. Be the first to reach them.
          </p>
        </div>

        <div className="mt-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500">
          <Button 
            size="lg" 
            className={cn(
              "text-lg px-8 py-6 shadow-lg interactive-btn",
              "bg-primary hover:bg-primary/90 text-white"
            )}
            onClick={() => document.getElementById('advertisers')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start AI Advertising Now
          </Button>
        </div>

        <div className="mt-16 pt-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-700">
          <div className="flex flex-wrap justify-center gap-10 items-center opacity-80">
            <div className="h-10 w-28 rounded-md bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse-subtle"></div>
            <div className="h-10 w-32 rounded-md bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse-subtle"></div>
            <div className="h-10 w-24 rounded-md bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse-subtle"></div>
            <div className="h-10 w-36 rounded-md bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse-subtle"></div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Trusted by leading AI platforms</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
