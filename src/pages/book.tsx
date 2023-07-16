import LotteryInput from '@/components/LotteryInput';
import LotterySearchResults from '@/components/LotterySearchResult';
import { NextPage } from 'next';
import { useState } from 'react';
import { Noto_Sans_Thai_Looped, Bai_Jamjuree } from 'next/font/google';
import huays from '@/data/huays';
import Link from 'next/link';

const Profile: NextPage = () => {
  return (
    <div className={`h-screen w-screen overflow-hidden`}>
      <img src="/img/book.png" className="w-full h-full" alt="" />
    </div>
  );
};

export default Profile;
