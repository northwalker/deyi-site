'use client';
import { useCallback, useState } from 'react';
import shuffle from '@/utils/shuffle.js';
import MaterialButton from '@/components/MaterialButton.js';

const initialText = '123456789'.split('').join('\n');
export default function Page() {
  const [text, setText] = useState(initialText);

  const handleShuffle = useCallback(() => {
    const newText = shuffle(text.split('\n'));
    setText(newText.join('\n'));
  }, [text]);

  return (
    <div className="relative mx-auto my-0 max-w-2xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32">
      <h1>Shuffle</h1>
      <section className="mt-8">
        <div className="flex justify-center">
          <textarea
            className="p-2 text-gray-800"
            placeholder="Separated by Enter"
            autoComplete="off"
            rows={15}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mx-auto mt-4">
          <MaterialButton onClick={handleShuffle}>Shuffle</MaterialButton>
        </div>
      </section>
    </div>
  );
}
