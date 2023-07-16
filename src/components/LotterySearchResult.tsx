import React, { FC, useState } from 'react';
import huayList from '@/data/huayList';
import huays from '@/data/huays';

interface LotterySearchResultsProps {
  numbers: string[];
}

const LotterySearchResults: FC<LotterySearchResultsProps> = ({ numbers }) => {
  const [lottoCart, setLottoCart] = useState<any[]>([]);

  // TODO: add lotto to cart if not in cart, remove if in cart
  const addLottoToCart = (lotto: any) => {
    if (lottoCart.includes(lotto)) {
      setLottoCart(lottoCart.filter((lottoItem) => lottoItem !== lotto));
    } else {
      setLottoCart([...lottoCart, lotto]);
    }
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
                className={`transition-all ease-in-out duration-200 w-full rounded px-3 py-4 bg-white shadow-md border flex gap-0 ${
                  lottoCart.includes(huay) ? 'bg-[#F5E4EF] ' : ''
                }`}
              >
                <div className="w-2/3 space-y-2">
                  <p>สลากกินแบ่งรัฐบาล</p>
                  <p className="font-bold text-3xl tracking-[.6em]">{huay}</p>
                </div>
                <div className="w-1/3 flex justify-end items-end flex-col">
                  <p
                    className={`px-4 mb-1 bg-[#F5E4EF] rounded-lg underline underline-offset-2 ${
                      lottoCart.includes(huay) ? 'bg-[#481237] text-white' : ''
                    }`}
                  >
                    เลือกเลย
                  </p>
                  <p className="text-green-600 font-bold text-4xl">80฿</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="w-full space-y-2">
            {numbers.map((number, index) => (
              <li
                key={index}
                onClick={() => addLottoToCart(number)}
                className={`transition-all ease-in-out duration-200 w-full rounded px-3 py-4 bg-white shadow-md border flex gap-0 ${
                  lottoCart.includes(number) ? 'bg-[#F5E4EF]' : ''
                }`}
              >
                <div className="w-2/3 space-y-2">
                  <p>สลากกินแบ่งรัฐบาล</p>
                  <p className="font-bold text-3xl tracking-[.6em]">{number}</p>
                </div>
                <div className="w-1/3 flex justify-end items-end flex-col">
                  <p
                    className={`px-4 mb-1 bg-[#F5E4EF] rounded-lg underline underline-offset-2 ${
                      lottoCart.includes(number)
                        ? 'bg-[#481237] text-white'
                        : ''
                    }`}
                  >
                    เลือกเลย
                  </p>
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
