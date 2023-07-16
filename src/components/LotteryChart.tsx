import React, { FC, useState } from 'react';
import huayList from '@/data/huayList';
import huays from '@/data/huays';

interface LotterChartProps {
  lottoCart: any[];
  setLottoCart: React.Dispatch<React.SetStateAction<any[]>>;
  setHuayState: React.Dispatch<React.SetStateAction<number>>;
}

const LotteryChart: FC<LotterChartProps> = ({ lottoCart, setLottoCart, setHuayState }) => {

  // TODO: add lotto to cart if not in cart, remove if in cart
  const addLottoToCart = (lotto: any) => {
    console.log('addLottoToCart')
    if (lottoCart.includes(lotto)) {
      setLottoCart(lottoCart.filter((lottoItem) => lottoItem !== lotto));
    } else {
      setLottoCart([...lottoCart, lotto]);
    }
  };

  return (
    <>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col py-4 gap-2'>
            <div className=' text-xl font-bold'>
              รายการซื้อ
            </div>
            <div >
              งวดวันที่ 1 กรกฎาคม 2566
            </div>
          </div>
          <button className=' h-12 w-12 rounded-full bg-green-500 flex flex-col justify-center items-center'
            onClick={(e) => { setHuayState (0)}}>
            <div className=' font-bold text-3xl text-white'>+</div>
          </button>
        </div>
        {
          lottoCart.length == 0 ?
            <div className='flex justify-center mx-auto'>
              <button className='py-4 focus:underline hover:underline' onClick={(e) => { setHuayState(0) }}>
                เพิ่มสลากที่ต้องการซื้อ
              </button>
            </div>
            : <ul className="w-full space-y-2">
              {lottoCart.map((number, index) => (
                <li
                  key={index}

                  className={`transition-all ease-in-out duration-200 w-full rounded px-3 py-4 bg-white border shadow flex gap-0}`}
                >
                  <div className="w-2/3 space-y-2">
                    <p>สลากกินแบ่งรัฐบาล</p>
                    <p className="font-bold text-3xl tracking-[.6em]">{number}</p>
                  </div>
                  <div className="w-1/3 flex justify-end items-end flex-col">
                    <button
                      className={`px-4 mb-1 bg-red-200 text-red-500 rounded-lg underline underline-offset-2}`}
                      onClick={() => addLottoToCart(number)}
                    >
                      เอาออก
                    </button>
                    <p className="text-green-600 font-bold text-4xl">95฿</p>
                  </div>
                </li>
              ))}
            </ul>
        }
        
        <div className='flex justify-between items-center my-4'>
          <div className=' text-xl font-bold'>
            รวมทั้งหมด
          </div>
          <div className=' text-xl font-bold'>
            {95*lottoCart.length} บาท
          </div>
        </div>
        <div className='flex gap-2 mb-4'>
          <button
            type="submit"
            className="py-2 font-medium bg-slate-200 text-primary-1 rounded hover:bg-slate-300 focus:outline-none focus:bg-slate-400  w-full base-animation"
            onClick={(e) => { setLottoCart([]), setHuayState(0) }}
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="py-2 font-medium text-white bg-primary-1 rounded hover:bg-primary-2 focus:outline-none focus:bg-primary-2 w-full base-animation"
            onClick={(e) => { setHuayState(2) }}
          >
            ซื้อตัวเลข
          </button>
        </div>
      </div>
    </>
  );
};

export default LotteryChart;
