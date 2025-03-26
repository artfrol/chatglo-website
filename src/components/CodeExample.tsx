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
  return;
};
export default CodeExample;