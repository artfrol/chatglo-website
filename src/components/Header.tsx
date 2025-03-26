import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={cn('fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 section-padding', scrolled ? 'glass' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">Chatglo</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#advertisers" className="text-sm font-medium hover:text-primary transition-colors">
            For Advertisers
          </a>
          <a href="#developers" className="text-sm font-medium hover:text-primary transition-colors">
            For Developers
          </a>
        </nav>
        
        <div>
          <Button size="sm" className="interactive-btn" onClick={() => document.getElementById('advertisers')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Get Started
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;