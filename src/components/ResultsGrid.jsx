import React from 'react';

export default function ResultsGrid({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="mx-auto max-w-5xl px-6" id="results">
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-gray-500">
          Enter an amount and choose a currency to see results here.
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6" id="results">
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {results.map((r) => (
          <div
            key={r.code}
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-fuchsia-500/0 to-emerald-500/0 group-hover:from-indigo-500/5 group-hover:via-fuchsia-500/5 group-hover:to-emerald-500/5" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center text-xl rounded-full bg-gray-100 dark:bg-gray-800">
                  <span aria-hidden>{r.flag}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {r.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {r.code} • {r.symbol}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {r.symbol} {r.value}
                </div>
                <div className="text-xs text-gray-500">per your input</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
