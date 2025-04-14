
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const CodeExample: React.FC = () => {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setInView(true);
      } else {
        setInView(false);
      }
    }, {
      threshold: 0.3
    });
    
    const element = document.getElementById('code-example');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveLineIndex(prev => (prev + 1) % codeLines.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [inView]);

  const codeLines = [{
    code: 'import { AdInAI } from "adinai-sdk";',
    comment: '// Import our lightweight SDK'
  }, {
    code: '',
    comment: ''
  }, {
    code: 'const aiApp = new AIChatbot({',
    comment: ''
  }, {
    code: '  model: "gpt-4",',
    comment: ''
  }, {
    code: '  temperature: 0.7,',
    comment: ''
  }, {
    code: '});',
    comment: ''
  }, {
    code: '',
    comment: ''
  }, {
    code: '// Integrate ads with one line',
    comment: ''
  }, {
    code: 'AdInAI.connect(aiApp, {',
    comment: ''
  }, {
    code: '  apiKey: "your_api_key",',
    comment: ''
  }, {
    code: '  categories: ["tech", "finance"],',
    comment: '// Optional targeting'
  }, {
    code: '});',
    comment: ''
  }];

  return (
    <section id="code-example" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple <span className="text-gradient">Integration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Just one line of code to start monetizing your AI app
          </p>
        </div>

        <Card className="neo-glass border-none p-6 font-mono text-sm max-w-3xl mx-auto">
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <code>
              {codeLines.map((line, index) => (
                <div 
                  key={index} 
                  className={`flex items-start ${activeLineIndex === index ? 'bg-primary/20 -mx-2 px-2 py-1 rounded' : ''}`}
                >
                  <span className="text-gray-400 mr-4">{index + 1}</span>
                  <span className="flex-grow">{line.code}</span>
                  <span className="text-gray-500">{line.comment}</span>
                </div>
              ))}
            </code>
          </pre>
        </Card>
      </div>
    </section>
  );
};

export default CodeExample;
