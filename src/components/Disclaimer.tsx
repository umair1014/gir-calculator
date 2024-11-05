import React from 'react';
import { Heart } from 'lucide-react';

export function Disclaimer() {
  return (
    <div className="mt-8 text-center text-sm text-gray-500">
      <div className="flex items-center justify-center mb-2">
        <Heart className="h-4 w-4 text-red-400 mr-1" />
        <span>For Clinical Reference Only</span>
      </div>
      <p>
        This calculator is for informational purposes only and should not replace professional
        medical advice.
      </p>
    </div>
  );
}