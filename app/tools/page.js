import Link from 'next/link';

export default function Page() {
  return (
    <div className="relative mx-auto my-0 max-w-xl px-4 pb-0 pt-4 text-center text-lg text-black dark:text-white md:pt-32">
      <section className="mt-8">
        <ul>
          <li>
            <Link href="/tools/uuid">UUID</Link>
          </li>
          <li>
            <Link href="/tools/md5">MD5</Link>
          </li>
          <li>
            <Link href="/tools/random">Random</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
