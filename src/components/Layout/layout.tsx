import Image from 'next/image';
import { useState } from 'react';
import { Noto_Sans_Thai_Looped } from 'next/font/google';
import { useRouter } from 'next/router';

const nonoSansThaiLooped = Noto_Sans_Thai_Looped({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Layout({
  children,
  tab = 0,
}: {
  children: React.ReactNode;
  tab: number;
}) {
  // TODO: change setNowTab to navigate page
  const [nowTab, setNowTab] = useState(tab);
  const router = useRouter();

  return (
    <div className={`${nonoSansThaiLooped.className} `}>
      {children}
      <div className="w-screen fixed bottom-0 h-20 border rounded-t-3xl shadow-xl bg-white overflow-hidden">
        <div className="mx-auto h-full max-w-lg  rounded-t-3xl flex">
          <button
            className={`w-1/4 h-full rounded-tl-3xl flex flex-col justify-center items-center ${
              nowTab == 0 ? `bg-[#F5E4EF]` : null
            }`}
            onClick={(e) => {
              setNowTab(0);
              router.push('/');
            }}
          >
            <Image
              src="/home.svg"
              alt="home Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
            <p>หน้าแรก</p>
          </button>

          <button
            className={`w-1/4 h-full flex flex-col justify-center items-center ${
              nowTab == 2 ? `bg-[#F5E4EF]` : null
            }`}
            onClick={(e) => {
              setNowTab(2);
              router.push('/huay');
            }}
          >
            <Image
              src="/huay.svg"
              alt="huay Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
            <p>ฉลากของฉัน</p>
          </button>
          <button
            className={`w-1/4 h-full flex flex-col justify-center items-center ${
              nowTab == 1 ? `bg-[#F5E4EF]` : null
            }`}
            onClick={(e) => {
              setNowTab(1);
              router.push('/book');
            }}
          >
            <Image
              src="/insurance.svg"
              alt="insurance Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
            <p>กรมธรรม์</p>
          </button>
          <button
            className={`w-1/4 h-full rounded-tr-3xl flex flex-col justify-center items-center ${
              nowTab == 3 ? `bg-[#F5E4EF]` : null
            }`}
            onClick={(e) => {
              setNowTab(3);
              router.push('/profile');
            }}
          >
            <Image
              src="/profile.svg"
              alt="profile Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
            <p>โปรไฟล์</p>
          </button>
        </div>
      </div>
    </div>
  );
}
