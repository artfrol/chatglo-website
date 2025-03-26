
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AdvertisersSection from '@/components/AdvertisersSection';
import DevelopersSection from '@/components/DevelopersSection';
import CodeExample from '@/components/CodeExample';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize animation observers
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

  // Smooth scroll to anchors
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const id = anchor.hash.slice(1);
        const element = document.getElementById(id);
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main>
        <Hero />
        <AdvertisersSection />
        <CodeExample />
        <DevelopersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
