import React from 'react';

interface LotterySearchResultsProps {
  numbers: string[];
}

const LotterySearchResults: React.FC<LotterySearchResultsProps> = ({
  numbers,
}) => {
  return (
    <div>
      {numbers.length === 0 ? (
        <p className="text-center p-4">No results found.</p>
      ) : (
        <ul className="w-full">
          {numbers.map((number, index) => (
            <li
              key={index}
              className="hover:scale-105 transition-all ease-in-out duration-200 w-full rounded px-3 py-4 bg-white border shadow flex gap-0"
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
  );
};

export default LotterySearchResults;