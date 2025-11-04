import React, { useState } from 'react';
import Header from './components/Header.jsx';
import RatesStrip from './components/RatesStrip.jsx';
import ConverterForm from './components/ConverterForm.jsx';
import ResultsGrid from './components/ResultsGrid.jsx';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="space-y-6 pb-16">
        <RatesStrip />
        <ConverterForm onResults={setResults} />
        <ResultsGrid results={results} />
      </main>
      <footer className="mx-auto max-w-5xl px-6 pb-10 text-xs text-gray-500">
        Built with fixed demo rates: USD=1, KHR=4000, IDR=15500, PHP=56 per USD.
      </footer>
    </div>
  );
}

export default App;
