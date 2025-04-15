
import React from 'react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-6 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chatglo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
