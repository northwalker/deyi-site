'use client';
import { useCallback, useState } from 'react';
import getRandomNumber from '@/utils/getRandomValue.js';
import MaterialButton from '@/components/MaterialButton.js';

export default function Page() {
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);
  const [randomNumber, setRandomNumber] = useState(null);

  const handleRandom = useCallback(() => {
    setRandomNumber(getRandomNumber(minNumber, maxNumber));
  }, [minNumber, maxNumber, setRandomNumber]);

  return (
    <div className="relative mx-auto my-0 max-w-2xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32">
      <h1>Random</h1>
      {randomNumber === null ? (
        <h2>{'... Click button to generate a number!'}</h2>
      ) : (
        <div className="text-9xl">{randomNumber}</div>
      )}
      <section className="mt-8">
        <div className="mt-8 flex items-center justify-center">
          <MaterialButton onClick={handleRandom}>
            Random a number!
          </MaterialButton>
        </div>
        <div className="mt-20 flex items-center justify-center">From</div>
        <div className="mt-2 flex flex-col justify-center md:flex-row">
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
        <div className="mt-8 flex items-center justify-center">Use a mode</div>
        <div className="mt-2 flex flex-col items-center justify-center md:flex-row [&>button]:mr-4 [&>button]:mt-4">
          <MaterialButton
            className="w-40"
            onClick={() => {
              setMinNumber(1);
              setMaxNumber(2);
              handleRandom();
            }}
          >
            Flip a Coin
          </MaterialButton>
          <MaterialButton
            className="w-40"
            onClick={() => {
              setMinNumber(1);
              setMaxNumber(6);
              handleRandom();
            }}
          >
            Roll the dice
          </MaterialButton>
          <MaterialButton
            className="w-40"
            onClick={() => {
              setMinNumber(1);
              setMaxNumber(100);
              handleRandom();
            }}
          >
            Default
          </MaterialButton>
        </div>
      </section>
    </div>
  );
}
