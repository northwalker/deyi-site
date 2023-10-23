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
    <div className="relative mx-auto my-0 max-w-2xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32">
      <h1>Roman Numbers</h1>
      <section className="mt-8 flex flex-row">
        <div className="basis-1/3">
          <textarea
            className="p-2 text-gray-800"
            placeholder="Enter a number!"
            autoComplete="off"
            rows={10}
            value={textNumber}
            onChange={(e) => setTextNumber(e.target.value)}
          />
          <MaterialButton onClick={handleIntToRoman}>
            Integer to Random
          </MaterialButton>
        </div>
        <div className="basis-1/3"></div>
        <div className="basis-1/3">
          <textarea
            className="p-2 text-gray-800"
            placeholder="Enter a Roman number!"
            autoComplete="off"
            rows={10}
            value={textRomanNumber}
            onChange={(e) => setTextRomanNumber(e.target.value)}
          />
          <MaterialButton onClick={handleRomanToInt}>
            Random to Integer
          </MaterialButton>
        </div>
      </section>
    </div>
  );
}
