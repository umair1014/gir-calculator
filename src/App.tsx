import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputField } from './components/InputField';
import { Results } from './components/Results';
import { InfoCards } from './components/InfoCards';
import { Disclaimer } from './components/Disclaimer';

function App() {
  const [weight, setWeight] = useState<string>('');
  const [dextroseConc, setDextroseConc] = useState<string>('10');
  const [infusionRate, setInfusionRate] = useState<string>('');
  const [gir, setGir] = useState<number | null>(null);

  const dextroseOptions = [
    { value: '5', label: '5%' },
    { value: '10', label: '10%' },
    { value: '12.5', label: '12.5%' },
    { value: '15', label: '15%' },
    { value: '20', label: '20%' },
    { value: '25', label: '25%' },
  ];

  const calculateGIR = () => {
    const w = parseFloat(weight);
    const d = parseFloat(dextroseConc);
    const r = parseFloat(infusionRate);

    if (w && d && r) {
      const girValue = (r * d * 1000) / (w * 60);
      setGir(Number(girValue.toFixed(2)));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Header />

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="grid gap-6">
              <InputField
                label="Patient Weight (kg)"
                value={weight}
                onChange={setWeight}
                type="number"
                placeholder="Enter weight"
                step="0.1"
                min="0"
              />

              <InputField
                label="Dextrose Concentration (%)"
                value={dextroseConc}
                onChange={setDextroseConc}
                options={dextroseOptions}
              />

              <InputField
                label="Infusion Rate (mL/hr)"
                value={infusionRate}
                onChange={setInfusionRate}
                type="number"
                placeholder="Enter rate"
                step="0.1"
                min="0"
              />

              <button
                onClick={calculateGIR}
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium"
              >
                Calculate GIR
              </button>
            </div>

            {gir !== null && <Results gir={gir} />}
          </div>

          <InfoCards />
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}

export default App;