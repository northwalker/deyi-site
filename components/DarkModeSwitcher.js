// DarkModeSwitcher.js

'use client';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import DarkModeIcon from '@/public/images/dark-mode-icon.svg';
import LightModeIcon from '@/public/images/light-mode-icon.svg';

const MODE = {
  DARK: 'dark',
  LIGHT: 'light',
};

export default function DarkModeSwitcher() {
  const [currentMode, setCurrentMode] = useState(MODE.DARK);
  const changeMode = useCallback(() => {
    document.querySelector('html').classList.toggle(MODE.DARK);
    setCurrentMode(currentMode === MODE.DARK ? MODE.LIGHT : MODE.DARK);
  }, [currentMode]);

  useEffect(() => {
    const isDarkMode = document
      .querySelector('html')
      .classList.contains(MODE.DARK);
    // set defult
    if (isDarkMode) setCurrentMode(MODE.DARK);
    else setCurrentMode(MODE.LIGHT);
  }, []);
  return (
    <div className="flex h-8 w-8 items-center justify-center">
      <button
        onClick={changeMode}
        aria-label={currentMode === MODE.DARK ? 'Light Mode' : 'Dark Mode'}
      >
        {currentMode === MODE.DARK ? (
          <Image
            priority
            src={LightModeIcon}
            height={24}
            width={24}
            alt="Light mode"
          />
        ) : (
          <Image
            priority
            src={DarkModeIcon}
            height={24}
            width={24}
            alt="Dark mode"
          />
        )}
      </button>
    </div>
  );
}
