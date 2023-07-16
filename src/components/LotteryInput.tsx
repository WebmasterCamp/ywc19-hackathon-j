import prisma from '@/lib/prisma';
import React, { useEffect, useState } from 'react';

interface LotteryInputProps {
  onSubmit: (number: string[]) => void;
}

const LotteryInput: React.FC<LotteryInputProps> = ({ onSubmit }) => {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const index = Number(name.replace('digit-', '')) - 1;
    setDigits((prevDigits) => {
      const newDigits = [...prevDigits];
      newDigits[index] = value;
      return newDigits;
    });
    if (value.length === 1) {
      const nextInput = document.getElementById(`digit-${index + 2}`);
      nextInput?.focus();
    } else if (value.length === 0) {
      const prevInput = document.getElementById(`digit-${index}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(digits);
  };

  useEffect(() => {
    console.log('digit', digits);
  }, [digits]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center justify-center flex-col gap-4 mb-4"
    >
      <label htmlFor="number" className="sr-only">
        ตัวเลข
      </label>
      <div className="grid w-full grid-cols-6 max-w-md">
        {digits.map((digit, index) => (
          <input
            key={index}
            type="text"
            name={`digit-${index + 1}`}
            id={`digit-${index + 1}`}
            value={digit}
            onChange={handleChange}
            maxLength={1}
            className="w-16 h-16 text-2xl border text-center pb-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        ))}
      </div>
      <p className="underline underline-offset-4 w-full text-right text-sm">
        ล้างทั้งหมด
      </p>
      <button
        type="submit"
        className="py-2 font-medium text-white bg-primary-1 rounded hover:bg-primary-2 focus:outline-none focus:bg-primary-2 w-full base-animation"
      >
        ซื้อตัวเลข
      </button>
    </form>
  );
};

export default LotteryInput;
