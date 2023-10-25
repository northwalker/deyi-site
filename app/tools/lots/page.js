'use client';
import { useCallback, useState } from 'react';
import shuffle from '@/utils/shuffle.js';
import getRandomColor from '@/utils/getRandomColor.js';
import MaterialButton from '@/components/MaterialButton.js';

const initialText = '1234567890'.split('').join('\n');

export default function Page() {
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [list, setList] = useState(initialText);
  const [result, setResult] = useState([]);
  const [winnerIndex, serWinnerIndex] = useState(null);

  const handleShuffle = useCallback(() => {
    const newList = shuffle(list.split('\n'));
    setResult(newList);
  }, [list]);

  return (
    <div className="relative mx-auto my-0 max-w-3xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32 ">
      <h1>
        Lots
        {winnerIndex !== null ? ` Winner: ${result[winnerIndex]}` : null}
      </h1>
      {!!result.length && (
        <section>
          <div>
            <div className="mt-4 flex items-center justify-center  space-x-4">
              <MaterialButton
                onClick={() => {
                  setResult([]);
                  setBgColor(getRandomColor());
                  serWinnerIndex(null);
                }}
              >
                Redraw
              </MaterialButton>
              {winnerIndex !== null && (
                <>
                  <MaterialButton
                    onClick={() => {
                      serWinnerIndex(null);
                      setTimeout(() => {
                        handleShuffle();
                      }, 500);
                    }}
                  >
                    Reset winner
                  </MaterialButton>
                  <MaterialButton
                    onClick={() => {
                      serWinnerIndex(null);
                    }}
                  >
                    Retry
                  </MaterialButton>
                </>
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap p-0">
            {result.map((item, index) => {
              const isWinner = winnerIndex === index;
              return (
                <div
                  key={index}
                  className="h-40 w-1/2 cursor-pointer p-2 sm:w-1/3 xl:w-1/4 2xl:w-1/5"
                  onClick={() => {
                    if (winnerIndex !== null) return;
                    else serWinnerIndex(index);
                  }}
                  style={{
                    perspective: '1000px',
                  }}
                >
                  <div
                    className="relative flex h-full w-full items-center justify-center overflow-hidden rounded text-white transition-transform duration-500"
                    style={{
                      backgroundColor: bgColor,
                      transformStyle: 'preserve-3d',
                      transform: isWinner ? 'rotateY(180deg)' : '',
                    }}
                  >
                    <div
                      className="break-all transition-opacity duration-500"
                      style={{
                        opacity: isWinner ? 1 : 0,
                        transform: isWinner ? 'rotateY(180deg)' : '',
                      }}
                    >
                      {item}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
      {!result.length && (
        <section className="mt-8">
          <div className="flex justify-center">
            <textarea
              className="p-2 text-gray-800"
              placeholder="Separated by Enter"
              autoComplete="off"
              rows={15}
              value={list}
              onChange={(e) => setList(e.target.value)}
            />
          </div>
          <div className="mx-auto mt-4">
            <MaterialButton onClick={handleShuffle}>Draw lots</MaterialButton>
          </div>
        </section>
      )}
    </div>
  );
}
