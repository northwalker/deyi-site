// LanguageSwitcher.js

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function LanguageSwitcher() {
  const pathname = usePathname();
  return (
    <Link
      aria-label={pathname === '/' ? '繁體中文' : 'English'}
      className="flex h-8 w-8 items-center justify-center"
      href={pathname === '/' ? '/zh-TW' : '/'}
    >
      {/* <svg
        width="28"
        height="28"
        aria-hidden="true"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-black dark:fill-text-color"
      >
        <path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075.475.975 1.125 1.875Zm-2.6-.4q-.45-.825-.787-1.713Q8.275 16.95 8.05 16H5.1q.725 1.25 1.812 2.175Q8 19.1 9.4 19.55Zm5.2 0q1.4-.45 2.487-1.375Q18.175 17.25 18.9 16h-2.95q-.225.95-.562 1.837-.338.888-.788 1.713ZM4.25 14h3.4q-.075-.5-.113-.988Q7.5 12.525 7.5 12t.037-1.012q.038-.488.113-.988h-3.4q-.125.5-.188.988Q4 11.475 4 12t.062 1.012q.063.488.188.988Zm5.4 0h4.7q.075-.5.113-.988.037-.487.037-1.012t-.037-1.012q-.038-.488-.113-.988h-4.7q-.075.5-.112.988Q9.5 11.475 9.5 12t.038 1.012q.037.488.112.988Zm6.7 0h3.4q.125-.5.188-.988Q20 12.525 20 12t-.062-1.012q-.063-.488-.188-.988h-3.4q.075.5.112.988.038.487.038 1.012t-.038 1.012q-.037.488-.112.988Zm-.4-6h2.95q-.725-1.25-1.813-2.175Q16 4.9 14.6 4.45q.45.825.788 1.712.337.888.562 1.838ZM10.1 8h3.8q-.3-1.1-.775-2.075Q12.65 4.95 12 4.05q-.65.9-1.125 1.875T10.1 8Zm-5 0h2.95q.225-.95.563-1.838.337-.887.787-1.712Q8 4.9 6.912 5.825 5.825 6.75 5.1 8Z"></path>
      </svg> */}
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        className="fill-white stroke-black dark:fill-black dark:stroke-text-color"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path
          stroke-linecap="round"
          d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
        ></path>
        <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"></path>
      </svg>
    </Link>
  );
}
