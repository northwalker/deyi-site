'use client';
import { useCallback, useState } from 'react';
import intToRoman from '@/utils/intToRoman.js';
import romanToInt from '@/utils/romanToInt.js';
import MaterialButton from '@/components/MaterialButton.js';

export default function Page() {
  const [textNumber, setTextNumber] = useState('12');
  const [textRomanNumber, setTextRomanNumber] = useState('');

  const handleIntToRoman = useCallback(() => {
    const romanString = intToRoman(Number(textNumber));
    setTextRomanNumber(romanString);
  }, [textNumber]);

  const handleRomanToInt = useCallback(() => {
    const numberString = romanToInt(textRomanNumber);
    setTextNumber(numberString);
  }, [textRomanNumber]);

  return (
    <div className="relative mx-auto my-0 max-w-2xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-16">
      <h1>Roman Numbers</h1>
      <section className="mt-8 flex flex-col items-center justify-center sm:flex-row">
        <div className="mx-4 my-4 flex flex-col items-center justify-center">
          <textarea
            className="mb-4 p-2 text-gray-800"
            placeholder="Enter a decimal number!"
            autoComplete="off"
            rows={10}
            value={textNumber}
            onChange={(e) => setTextNumber(e.target.value)}
          />
          <MaterialButton onClick={handleIntToRoman}>
            Integer to Roman
          </MaterialButton>
        </div>
        <div className="mx-4 my-4 flex flex-col items-center justify-center">
          <textarea
            className="mb-4 p-2 text-gray-800"
            placeholder="Enter a Roman number!"
            autoComplete="off"
            rows={10}
            value={textRomanNumber}
            onChange={(e) => setTextRomanNumber(e.target.value)}
          />
          <MaterialButton onClick={handleRomanToInt}>
            Roman to Integer
          </MaterialButton>
        </div>
      </section>
    </div>
  );
}
