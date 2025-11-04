import React from 'react';

const RATES = {
  USD: 1,
  KHR: 4000,
  IDR: 15500,
  PHP: 56,
};

const meta = {
  USD: { name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
  KHR: { name: 'Cambodian Riel', flag: '🇰🇭', symbol: '៛' },
  IDR: { name: 'Indonesian Rupiah', flag: '🇮🇩', symbol: 'Rp' },
  PHP: { name: 'Philippine Peso', flag: '🇵🇭', symbol: '₱' },
};

export default function RatesStrip() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-gray-500">Fixed rates per 1 USD</span>
          <div className="h-1 w-px bg-gray-200 dark:bg-gray-800" />
          {Object.keys(RATES).map((code) => (
            <div key={code} className="flex items-center gap-2 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1">
              <span className="text-sm">{meta[code].flag}</span>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{code}</span>
              <span className="text-xs text-gray-500">{meta[code].symbol} {RATES[code]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
