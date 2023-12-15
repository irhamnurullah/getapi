import Image from 'next/image';

import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

let RemoteButton;

try {
  RemoteButton = dynamic(() => import('remote/Button'), {
    ssr: false,
    loading: () => <div>loading...</div>,
  });
} catch (error) {
  console.error('Error loading remote/Button:', error);
  // Tambahkan tindakan yang sesuai di sini, misalnya menampilkan pesan error atau fallback UI.
}

export default function Home() {
  let mynumber = 6;

  useEffect(() => {
    console.log('🐙 ~ file: index.js:23 ~ Home ~ mynumber:', mynumber);
  }, []);
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      import button dari remote
      <RemoteButton className="bg-black text-white rounded-lg px-4 py1" onClick={() => alert('hello dari remote')}>
        Button
      </RemoteButton>
    </main>
  );
}
