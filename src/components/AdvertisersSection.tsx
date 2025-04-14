import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BadgeCheck, DollarSign, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvertisersSection: React.FC = () => {
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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const benefits = [
    {
      icon: <BadgeCheck className="h-6 w-6 text-primary" />,
      title: "Reach 400M users with high intent",
      description: "Connect with users actively seeking information and solutions through AI interfaces."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Lower CAC",
      description: "Relevant ads that users want, reducing your advertising spend dramatically."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Extended user interaction",
      description: "Reach users actively engaged for 10+ minutes per session."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Tell us about your brand",
      description: "Share your target audience, goals, and product details."
    },
    {
      number: "02",
      title: "Provide your affiliate links",
      description: "We'll strategically place your links for maximum conversion."
    },
    {
      number: "03",
      title: "We integrate them into AI chat responses",
      description: "Your products are recommended naturally within conversations."
    },
    {
      number: "04",
      title: "Get high-intent leads instantly",
      description: "Start receiving qualified traffic from day one."
    }
  ];

  return (
    <section id="advertisers" className="py-20 section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -right-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            For <span className="text-gradient">Advertisers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reach untapped audiences with native AI advertising
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            Why work with us
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 neo-glass border-none hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm flex-grow">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            How it works
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="animate-on-scroll opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-lg interactive-btn"
            asChild
          >
            <Link to="/request?mode=advertising">
              Start AI Advertising Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvertisersSection;
