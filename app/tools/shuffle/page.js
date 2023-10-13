'use client';
import { useCallback, useState } from 'react';
import shuffle from '@/utils/shuffle.js';

const initialText = '123456789'.split('').join('\n');
export default function Page() {
  const [text, setText] = useState(initialText);

  const handleShuffle = useCallback(() => {
    const newText = shuffle(text.split('\n'));
    setText(newText.join('\n'));
  }, [text]);

  return (
    <div className="relative mx-auto my-0 max-w-xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32">
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
          <button
            className="rounded border border-white px-4 py-1 transition-all duration-300 ease-in-out [@media(hover:hover)]:hover:border-primary [@media(hover:hover)]:hover:text-primary"
            onClick={handleShuffle}
          >
            Shuffle
          </button>
        </div>
      </section>
    </div>
  );
}
