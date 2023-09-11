import '@/app/styles/globals.css';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'De-Yi Huang',
  description: 'De-Yi Huang personal website',
  author: 'De-Yi Huang',
  creator: 'De-Yi Huang',
  themeColor: '#0088FF',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'De-Yi Huang',
    description: 'De-Yi Huang personal website',
    type: 'website',
    url: 'https://deyi.site',
    image: 'https://northwalker.web.app/img/green-thumbnail.jpg',
    site_name: 'De-Yi Huang',
  },
  icons: {
    icon: [
      { url: '/favicon.png' },
      new URL('/favicon.png', 'https://deyi.site'),
    ],
    shortcut: ['/favicon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  metadataBase: new URL('https://deyi.site'),
  alternates: {
    canonical: 'https://deyi.site',
    languages: {
      en: 'https://deyi.site',
      'en-US': 'https://deyi.site',
      zh: 'https://deyi.site/zh-TW',
      'zh-TW': 'https://deyi.site/zh-TW',
    },
  },
  other: {
    version: process.env.NEXT_PUBLIC_GITHUB_SHA || 'Develop',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
