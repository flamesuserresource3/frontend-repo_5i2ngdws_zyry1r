import React from 'react';
import { Coins } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-fuchsia-500/10 to-emerald-500/10" />
      <div className="relative mx-auto max-w-5xl px-6 pt-12 pb-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-600 text-white p-2 shadow-lg shadow-indigo-600/30">
            <Coins className="h-6 w-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Multi-Currency Converter
          </h1>
        </div>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
          Convert amounts between USD, KHR, IDR, and PHP using fixed reference rates. Crisp visuals, instant results.
        </p>
      </div>
    </header>
  );
}
