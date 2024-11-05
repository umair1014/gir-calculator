import React from 'react';
import { Calculator } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
        <Calculator className="h-12 w-12 text-indigo-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">GIR Calculator</h1>
      <p className="text-gray-600">Glucose Infusion Rate Calculator for Neonates and Infants</p>
    </div>
  );
}