'use client';
import { useState } from 'react';
import MaterialButton from '@/components/MaterialButton.js';

export default function Page() {
  const [decodeText, setDecodeText] = useState('');
  const [encodedText, setEncodedText] = useState('');

  return (
    <div className="relative mx-auto my-0 max-w-2xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-16">
      <h1>URI Component Decode and Encode</h1>
      <section className="mt-8 flex flex-col">
        <div>
          <textarea
            className="w-full p-2 text-gray-800"
            placeholder="Enter text to encode."
            autoComplete="off"
            rows={10}
            value={decodeText}
            onChange={(e) => setDecodeText(e.target.value)}
          />
        </div>
        <div className="my-4 flex flex-row items-center justify-center">
          <MaterialButton
            className="mx-4"
            onClick={() => {
              setEncodedText(window.encodeURIComponent(decodeText));
            }}
          >
            Encode ↓
          </MaterialButton>
          <MaterialButton
            className="mx-4"
            onClick={() => {
              setDecodeText(window.decodeURIComponent(encodedText));
            }}
          >
            Decode ↑
          </MaterialButton>
        </div>
        <div>
          <textarea
            className="w-full p-2 text-gray-800"
            placeholder="Encoded text"
            autoComplete="off"
            rows={10}
            value={encodedText}
            onChange={(e) => setEncodedText(e.target.value)}
          />
        </div>
      </section>
    </div>
  );
}
