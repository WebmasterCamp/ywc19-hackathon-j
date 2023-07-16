import React, { FC, useState } from 'react';
import huayList from '@/data/huayList';
import huays from '@/data/huays';
import Image from 'next/image';
import Link from 'next/link';

interface LotterPaidProps {
  lottoCart: any[];
  setLottoCart: React.Dispatch<React.SetStateAction<any[]>>;
  setHuayState: React.Dispatch<React.SetStateAction<number>>;
}

const LotteryPaid: FC<LotterPaidProps> = ({
  lottoCart,
  setLottoCart,
  setHuayState,
}) => {
  const [done, setDone] = useState(false);

  // TODO: add lotto to cart if not in cart, remove if in cart
  const addLottoToCart = (lotto: any) => {
    console.log('addLottoToCart');
    if (lottoCart.includes(lotto)) {
      setLottoCart(lottoCart.filter((lottoItem) => lottoItem !== lotto));
    } else {
      setLottoCart([...lottoCart, lotto]);
    }
  };

  if (done == false) {
    return (
      <>
        <div>
          <div className="flex justify-center items-center ">
            <div className=" text-xl font-bold">ยืนยันการชำระเงิน</div>
          </div>
          <div className="flex justify-between items-center my-4">
            <div className=" text-xl ">จำนวนฉลาก</div>
            <div className=" text-xl flex flex-row gap-2">
              <div className=" font-bold">{lottoCart.length}</div> ใบ
            </div>
          </div>
          <div className="flex justify-between items-center my-4">
            <div className=" text-xl ">รวมทั้งหมด</div>
            <div className=" text-xl flex flex-row gap-2">
              <div className=" font-bold">{95 * lottoCart.length}</div> บาท
            </div>
          </div>
          <Image
            src="/qrcode.svg"
            alt="qrcode"
            className="dark:invert"
            width={500}
            height={500}
            priority
            onClick={(e) => {
              setDone(true);
            }}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div className="flex justify-center items-center">
            <div className=" text-2xl font-bold">ชำระเงินเสร็จสิ้น</div>
          </div>
          <div className="flex justify-center items-center py-4">
            <div className='p-4 font-bold text-white bg-green-500 rounded-full text-9xl w-48 h-48 flex flex-col justify-center items-center'>
              ✓
            </div>
          </div>
          <div className="flex justify-between items-center my-4">
            <div className=" text-xl ">จำนวนฉลาก</div>
            <div className=" text-xl flex flex-row gap-2">
              <div className=" font-bold">{lottoCart.length}</div> ใบ
            </div>
          </div>
          <div className="flex justify-between items-center my-4">
            <div className=" text-xl ">รวมทั้งหมด</div>
            <div className=" text-xl flex flex-row gap-2">
              <div className=" font-bold">{95 * lottoCart.length}</div> บาท
            </div>
          </div>
          
        </div>
        <Link
          className="py-2 font-bold bg-slate-200 rounded 
          hover:bg-slate-300 focus:outline-none focus:bg-slate-400  w-full base-animation 
          flex flex-col justify-center items-center" 
          href="/">กลับไปหน้าหลัก</Link>
      </>
    );
  }
};

export default LotteryPaid;
