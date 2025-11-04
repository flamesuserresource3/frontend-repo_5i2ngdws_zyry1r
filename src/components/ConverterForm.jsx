import React, { useMemo, useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';

const RATES = {
  USD: 1,
  KHR: 4000,
  IDR: 15500,
  PHP: 56,
};

const META = {
  USD: { name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  KHR: { name: 'Cambodian Riel', symbol: '៛', flag: '🇰🇭' },
  IDR: { name: 'Indonesian Rupiah', symbol: 'Rp', flag: '🇮🇩' },
  PHP: { name: 'Philippine Peso', symbol: '₱', flag: '🇵🇭' },
};

export default function ConverterForm({ onResults }) {
  const [val, setVal] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const isValid = useMemo(() => {
    const n = Number(val);
    return !Number.isNaN(n) && Number.isFinite(n) && n >= 0;
  }, [val]);

  function convert() {
    // Parse numeric input
    const n = parseFloat(val);
    if (!isValid || val === '') {
      onResults([]);
      return;
    }

    // Step 1: Normalize to USD
    let amountInUSD = n;
    if (selectedCurrency !== 'USD') {
      amountInUSD = n / RATES[selectedCurrency];
    }

    // Step 2: Convert from USD to each target currency
    const results = Object.keys(RATES)
      .filter((code) => code !== selectedCurrency)
      .map((code) => {
        const converted = amountInUSD * RATES[code];
        return {
          code,
          name: META[code].name,
          symbol: META[code].symbol,
          flag: META[code].flag,
          value: converted.toFixed(2),
        };
      });

    onResults(results);
  }

  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-stretch gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Amount
            </label>
            <input
              type="number"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              placeholder="Enter amount"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="w-full sm:w-64">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              From currency
            </label>
            <div className="relative">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 px-4 py-3 pr-9 outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {Object.keys(RATES).map((code) => (
                  <option key={code} value={code}>
                    {META[code].flag} {code} — {META[code].name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center text-gray-400">
                ▾
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <button
              onClick={convert}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 font-medium shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={!isValid || val === ''}
              title={!isValid && val !== '' ? 'Enter a non-negative number' : 'Convert'}
            >
              <ArrowRightLeft className="h-5 w-5" />
              Convert
            </button>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          Logic: If origin is USD, multiply by target rate. If origin is KHR/IDR/PHP, divide by its rate to get USD, then multiply by target. Results show with flags and symbols.
        </p>
      </div>
    </div>
  );
}
