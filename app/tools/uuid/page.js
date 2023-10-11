'use client';
import { useCallback, useEffect, useState } from 'react';
import { getRandomUUID } from '@/utils/getRandomValue.js';

export default function Page() {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(getRandomUUID());
  }, []);

  const handleCopy = useCallback(async () => {
    if (!navigator?.clipboard) return;
    try {
      await navigator.clipboard.writeText(value);
      console.log('UUID copied', value);
    } catch (error) {
      console.error(error);
    }
  }, [value]);

  return (
    <div className="relative mx-auto my-0 max-w-2xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32">
      <section className="mt-8">
        <h1>
          <div>{value}</div>
        </h1>

        <div className="ml-4 mt-2">
          <button
            className="rounded border border-white px-4 py-1 transition-all duration-300 ease-in-out [@media(hover:hover)]:hover:border-primary [@media(hover:hover)]:hover:text-primary"
            onClick={() => {
              setValue(getRandomUUID());
            }}
          >
            Random UUID
          </button>
        </div>
        {!!value && !!navigator?.clipboard && (
          <div className="ml-4 mt-2">
            <button
              className="rounded border border-white px-4 py-1 transition-all duration-300 ease-in-out [@media(hover:hover)]:hover:border-primary [@media(hover:hover)]:hover:text-primary"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
