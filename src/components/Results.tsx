import React from 'react';

interface ResultsProps {
  gir: number;
}

export function Results({ gir }: ResultsProps) {
  const getGirStatus = (girValue: number) => {
    if (girValue < 4) return { status: 'Low', color: 'text-yellow-600' };
    if (girValue > 12) return { status: 'High', color: 'text-red-600' };
    return { status: 'Normal', color: 'text-green-600' };
  };

  const status = getGirStatus(gir);

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Results</h3>
      <div className="flex items-center justify-between">
        <span className="text-gray-700">Calculated GIR:</span>
        <span className={`text-xl font-bold ${status.color}`}>
          {gir} mg/kg/min
        </span>
      </div>
      <div className="flex items-center mt-2 text-sm">
        <span className="text-gray-600">Status:</span>
        <span className={`ml-2 font-medium ${status.color}`}>
          {status.status}
        </span>
      </div>
    </div>
  );
}