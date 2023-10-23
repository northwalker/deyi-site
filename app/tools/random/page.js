'use client';
import { useCallback, useEffect, useState } from 'react';
import getRandomNumber from '@/utils/getRandomValue.js';
import MaterialButton from '@/components/MaterialButton.js';

export default function Page() {
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);
  const [randomNumber, setRandomNumber] = useState(0);

  const handleRandom = useCallback(() => {
    setRandomNumber(getRandomNumber(minNumber, maxNumber));
  }, [minNumber, maxNumber, setRandomNumber]);

  useEffect(() => {
    console.log('useEffect handleRandom');
    handleRandom();
  }, [handleRandom]);

  return (
    <div className="relative mx-auto my-0 max-w-xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32">
      <section className="mt-8">
        <h1>{randomNumber}</h1>
        <div className="flex justify-center">
          <input
            className="px-2 py-1 text-gray-800"
            type="number"
            placeholder="Min"
            step="1"
            min="1"
            value={minNumber}
            onChange={(e) => setMinNumber(e.target.value)}
          />
          <div className="mx-4">~</div>
          <input
            className="px-2 py-1 text-gray-800"
            type="number"
            placeholder="Max"
            step="1"
            min="1"
            value={maxNumber}
            onChange={(e) => setMaxNumber(e.target.value)}
          />
        </div>
        <div className="mx-auto mt-4 flex items-center justify-center [&>button]:mr-4">
          <MaterialButton
            onClick={() => {
              setMinNumber(1);
              setMaxNumber(2);
              handleRandom();
            }}
          >
            Mode: Flip a Coin
          </MaterialButton>
          <MaterialButton
            onClick={() => {
              setMinNumber(1);
              setMaxNumber(6);
              handleRandom();
            }}
          >
            Mode: Roll the dice
          </MaterialButton>
          <MaterialButton
            onClick={() => {
              setMinNumber(1);
              setMaxNumber(100);
              handleRandom();
            }}
          >
            Mode: Default
          </MaterialButton>
        </div>
        <div className="relative mx-auto mt-4">
          <MaterialButton onClick={handleRandom}>
            Random a number!
          </MaterialButton>
        </div>
      </section>
    </div>
  );
}
