
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const CodeExample: React.FC = () => {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('code-example');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [inView]);

  const codeLines = [
    { code: 'import { AdInAI } from "adinai-sdk";', comment: '// Import our lightweight SDK' },
    { code: '', comment: '' },
    { code: 'const aiApp = new AIChatbot({', comment: '' },
    { code: '  model: "gpt-4",', comment: '' },
    { code: '  temperature: 0.7,', comment: '' },
    { code: '});', comment: '' },
    { code: '', comment: '' },
    { code: '// Integrate ads with one line', comment: '' },
    { code: 'AdInAI.connect(aiApp, {', comment: '' },
    { code: '  apiKey: "your_api_key",', comment: '' },
    { code: '  categories: ["tech", "finance"],', comment: '// Optional targeting' },
    { code: '});', comment: '' },
  ];

  return (
    <section id="code-example" className="py-20 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h3 className="text-2xl font-semibold mb-8 text-center">Simple Integration</h3>
          
          <Card className="neo-glass p-6 shadow-lg overflow-hidden border-none">
            <pre className="font-mono text-sm text-left overflow-x-auto bg-slate-900 p-6 rounded-lg text-white">
              {codeLines.map((line, index) => (
                <div 
                  key={index} 
                  className={`transition-all duration-300 ${
                    index === activeLineIndex ? 'opacity-100 text-blue-300 font-medium' : 'opacity-80'
                  }`}
                >
                  <span className="opacity-50 mr-4">{(index + 1).toString().padStart(2, '0')}</span>
                  <span>{line.code}</span>
                  <span className="text-slate-500">{line.comment}</span>
                </div>
              ))}
            </pre>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
