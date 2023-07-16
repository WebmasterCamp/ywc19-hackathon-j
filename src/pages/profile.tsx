import LotteryInput from '@/components/LotteryInput';
import LotterySearchResults from '@/components/LotterySearchResult';
import { NextPage } from 'next';
import { useState } from 'react';
import { Noto_Sans_Thai_Looped, Bai_Jamjuree } from 'next/font/google';
import huays from '@/data/huays';
import Link from 'next/link';

const nonoSansThaiLooped = Noto_Sans_Thai_Looped({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const baiJamjuree = Bai_Jamjuree({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const Profile: NextPage = () => {
  const [searchResults, setSearchResults] = useState<string[]>([...huays]);

  const numberArray = huays;

  const handleSearch = (array: string[]): null | void => {
    var checkArray: string[] = [];
    if (array.every((digit) => digit === '')) {
      return setSearchResults(huays);
    }
    numberArray.forEach((number) => {
      let match = true;

      for (let i = 0; i < array.length; i++) {
        const digit = array[i];
        if (array[i] !== '' && number[i] !== digit) {
          match = false;
          break;
        }
      }

      if (match) {
        checkArray = [...checkArray, number];
      }
    });

    setSearchResults(checkArray);

    // console.log('no match');
    return null;
  };

  return (
    <div
      className={`container mx-auto px-0 flex flex-col min-h-screen items-center justify-start max-w-lg bg-gray-50/10 ${baiJamjuree.className}`}
    >
      <div className="flex items-center justify-between h-18 w-full bg-primary-1 text-white p-6 mb-4">
        <Link href={'/'}>
          <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33333 1.66664L1 9.99998L9.33333 18.3333"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <p className="text-lg">ประวัติ</p>
        <div />
      </div>
    </div>
  );
};

export default Profile;
