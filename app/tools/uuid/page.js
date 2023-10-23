'use client';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { getRandomUUID } from '@/utils/getRandomValue.js';
import MaterialButton from '@/components/MaterialButton.js';
import CopyIcon from '@/public/images/copy-icon.svg';

export default function Page() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    // setValue(getRandomUUID());
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
      <section>
        <h1>UUID</h1>
        <h2 className="flex items-center justify-center">
          <div>
            {value === null ? 'Click button to generate an UUID...' : value}
          </div>
          {!!value && !!navigator?.clipboard && (
            <div>
              <MaterialButton
                className="rounded-full border-0 py-4"
                onClick={handleCopy}
              >
                <Image
                  priority
                  src={CopyIcon}
                  height={24}
                  width={24}
                  alt="Copy"
                />
              </MaterialButton>
            </div>
          )}
        </h2>

        <div className="ml-4 mt-8">
          <MaterialButton
            onClick={() => {
              setValue(getRandomUUID());
            }}
          >
            Generate an UUID
          </MaterialButton>
        </div>
      </section>
    </div>
  );
}
