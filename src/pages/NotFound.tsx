
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 animate-fade-in">
        <AlertCircle className="w-16 h-16 text-blue-500 mx-auto" />
        <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
        <p className="text-lg text-gray-600 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
