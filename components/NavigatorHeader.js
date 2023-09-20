'use client';
import LanguageSwitcher from './LanguageSwitcher.js';
import DarkModeSwitcher from './DarkModeSwitcher.js';

export default function NavigatorHeader() {
  return (
    <div className="fixed right-4 top-8 flex items-center justify-center">
      <LanguageSwitcher />
      <DarkModeSwitcher />
    </div>
  );
}
