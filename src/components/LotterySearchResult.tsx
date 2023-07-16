import React, { FC, useState } from 'react';
import huayList from '@/data/huayList';
import huays from '@/data/huays';

interface LotterySearchResultsProps {
  numbers: string[];
}

const renderLotto = (lottos: any[]) => {
  return <></>;
};

const LotterySearchResults: FC<LotterySearchResultsProps> = ({ numbers }) => {
  const [lottoCart, setLottoCart] = useState<any[]>([]);

  // TODO: add lotto to cart
  const addLottoToCart = (lotto: any) => {
    setLottoCart([...lottoCart, lotto]);
  };

  return (
    <>
      <div>
        {numbers.length === 0 ? (
          <ul className="space-y-2">
            {huays.map((huay, index) => (
              <li
                key={index}
                onClick={() => addLottoToCart(huay)}
                // className={`transition-all ease-in-out duration-200 w-full rounded px-3 py-4 bg-white border shadow flex gap-0`}
                className={`transition-all ease-in-out duration-200 w-full rounded px-3 py-4 bg-white border shadow flex gap-0 ${
                  lottoCart.includes(huay) ? 'bg-green-100' : ''
                }`}
              >
                <div className="w-2/3">
                  <p>สลากกินแบ่งรัฐบาล</p>
                  <p className="font-bold text-3xl tracking-[.6em]">{huay}</p>
                </div>
                <div className="w-1/3 flex justify-end items-end">
                  <p className="text-green-600 font-bold text-4xl">80฿</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="w-full">
            {numbers.map((number, index) => (
              <li
                key={index}
                className="transition-all ease-in-out duration-200 w-full rounded px-3 py-4 bg-white border shadow flex gap-0"
              >
                <div className="w-1/2">
                  <p>สลากกินแบ่งรัฐบาล</p>
                  <p className="font-bold text-3xl tracking-[.6em]">{number}</p>
                </div>
                <div className="w-1/6 flex flex-col items-center justify-end text-sm">
                  <p>งวดวันที่</p>
                  <p className="">16</p>
                </div>
                <div className="w-1/6 flex flex-col items-center justify-end text-sm">
                  <p>ชุดที่</p>
                  <p className="">4</p>
                </div>
                <div className="w-1/6 flex justify-end items-end">
                  <p className="text-green-600 font-bold text-4xl">80฿</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default LotterySearchResults;
