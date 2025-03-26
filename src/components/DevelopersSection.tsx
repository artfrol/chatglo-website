
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BarChart3, Code, DollarSign } from 'lucide-react';

const DevelopersSection: React.FC = () => {
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
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Earn money on freemium users",
      description: "Monetize your entire user base, not just premium subscribers."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Scale revenue without disrupting UX",
      description: "Our native integrations preserve your app's excellent user experience."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "One-line SDK integration",
      description: "Simple implementation that takes minutes, not days."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Tell us about your app",
      description: "Share your user base, content types, and integration goals."
    },
    {
      number: "02",
      title: "Integrate our SDK (1 line of code)",
      description: "Our lightweight SDK integrates seamlessly with your existing codebase."
    },
    {
      number: "03",
      title: "Earn money from every relevant interaction",
      description: "Start receiving revenue for naturally placed recommendations."
    }
  ];

  return (
    <section id="developers" className="py-20 section-padding relative bg-gradient-to-b from-transparent to-blue-50/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            For <span className="text-gradient">Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monetize your AI application without disrupting user experience
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
            We will built in affiliate links in your AI apps
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
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
            variant="outline"
            className="text-lg px-8 py-6 shadow-lg interactive-btn bg-white border-primary text-primary hover:bg-primary hover:text-white"
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
    </section>
  );
};

export default DevelopersSection;
