import React from 'react';
import { Info, AlertTriangle } from 'lucide-react';

export function InfoCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Info className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold">Reference Ranges</h3>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Term Infants: 4-6 mg/kg/min</li>
          <li>• Preterm Infants: 6-8 mg/kg/min</li>
          <li>• Critical Care: 8-12 mg/kg/min</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
          <h3 className="text-lg font-semibold">Important Notes</h3>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Monitor blood glucose regularly</li>
          <li>• Adjust rates based on clinical needs</li>
          <li>• Consider other glucose sources</li>
        </ul>
      </div>
    </div>
  );
}