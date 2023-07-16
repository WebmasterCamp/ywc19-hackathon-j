import LotteryInput from '@/components/LotteryInput';
import LotterySearchResults from '@/components/LotterySearchResult';
import { NextPage } from 'next';
import { useState } from 'react';
import { Noto_Sans_Thai_Looped, Bai_Jamjuree } from 'next/font/google';
import huays from '@/data/huays';

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

const HomePage: NextPage = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const numberArray = huays;

  const handleSearch = (array: string[]): null | void => {
    var checkArray: string[] = []
    if (array.every((digit) => digit === '')) {
      return null;
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
        checkArray = [...checkArray,number]
      }
    });

    setSearchResults(checkArray);

    // console.log('no match');
    return null;
  };

  return (
    <div
      className={`container mx-auto p-10 flex flex-col h-screen items-center justify-start max-w-lg bg-gray-50/10 ${baiJamjuree.className}`}
    >
      <div className="flex flex-col gap-2 w-full h-full ">
        <h1 className="text-xl font-semibold">ค้นหาเลขเด็ด</h1>
        <p>งวดวันที่ 1 กรกฎาคม 2566</p>
        <LotteryInput onSubmit={handleSearch} />
        <LotterySearchResults numbers={searchResults} />
      </div>
    </div>
  );
};

export default HomePage;
