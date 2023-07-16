import { Bai_Jamjuree, Inter } from 'next/font/google';

const baiJamjuree = Bai_Jamjuree({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div
      className={`container mx-auto px-0 flex flex-col min-h-screen items-center justify-start max-w-lg bg-gray-50/10 ${baiJamjuree.className}`}
    ></div>
  );
}
