import Link from 'next/link';

export default function Page() {
  return (
    <div className="relative mx-auto my-0 max-w-2xl px-4 pb-0 pt-4 text-left text-lg text-black dark:text-white md:pt-32">
      <h1>Tools</h1>
      <section className="mt-8">
        <ul>
          <li className="mt-8 list-disc">
            <Link href="/tools/random" aria-label="Random">
              Random
            </Link>
          </li>
          <li className="mt-8 list-disc">
            <Link href="/tools/uuid" aria-label="UUID">
              UUID
            </Link>
          </li>
          <li className="mt-8 list-disc">
            <Link href="/tools/roman" aria-label="Roman">
              Roman Number
            </Link>
          </li>
          <li className="mt-8 list-disc">
            <Link href="/tools/md5" aria-label="MD5">
              MD5
            </Link>
          </li>
          <li className="mt-8 list-disc">
            <Link href="/tools/shuffle" aria-label="Shuffle">
              Shuffle
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
