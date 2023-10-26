'use client';

export default function Page({ params }) {
  const { slug } = params;
  const base64String = slug ? window.atob(decodeURIComponent(slug)) : '';
  return <div className="text-black dark:text-white">{base64String}</div>;
}
