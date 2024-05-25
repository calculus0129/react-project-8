import Link from 'next/link'; // 411

import Header from '@/components/header';
// by NextJS. should use instead of the anchor element for the internal link to your other element.

export default function Home() {
  console.log('Im a Server Component! Clients can\'t see me! haha');
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
      <p><Link href="/blog">Blog</Link></p>
    </main>
    // about us linking is not safe: the refresh btn becomes X a bit.
    // Left the before page and downloaded another page
    // We don't use multi-page with react normally. (single-page, instead.)
    // rendered on the server if URL input
    // client-side
    // not leaving, or downloading new page
  );
}

// 