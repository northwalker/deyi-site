'use client';
import { useEffect, useState } from 'react';
import getRandomNumber from '@/utils/getRandomValue.js';

export default function Page() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setmaxNumber] = useState(1000);

  useEffect(() => {
    setRandomNumber(getRandomNumber(minNumber, maxNumber));
  }, []);

  return (
    <div className="relative mx-auto my-0 max-w-xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32">
      <section className="mt-8">
        <h1>{randomNumber}</h1>

        <button
          className="mx-auto mt-2 rounded border border-white px-4 py-1"
          onClick={() => {
            setRandomNumber(getRandomNumber(minNumber, maxNumber));
          }}
        >
          Random
        </button>
      </section>
    </div>
  );
}
