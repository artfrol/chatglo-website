import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const Hero: React.FC = () => {
  const observerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <section className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-center relative overflow-hidden section-padding py-0">
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

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500">
  <Button
    size="lg"
    className={cn(
      "text-lg px-8 py-6 shadow-lg interactive-btn",
      "bg-primary hover:bg-primary/90 text-white"
    )}
    asChild
  >
    <a
      href="https://form.typeform.com/to/RWtV5Kjl"
      target="_blank"
      rel="noopener noreferrer"
    >
      Start AI Advertising Now
    </a>
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="text-lg px-8 py-6 shadow-lg interactive-btn border-primary text-primary hover:bg-primary hover:text-white"
    asChild
  >
    <a
      href="https://form.typeform.com/to/f8J5dJNw"
      target="_blank"
      rel="noopener noreferrer"
    >
      Monetize my AI app
    </a>
  </Button>
</div>
      </div>
    </section>;
};
export default Hero;
