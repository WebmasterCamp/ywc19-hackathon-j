import React, { useEffect, useState } from 'react';

interface LotteryInputProps {
  onSubmit: (number: string[]) => void;
}

const LotteryInput: React.FC<LotteryInputProps> = ({ onSubmit }) => {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''));

  function checkNoSelectedDigit() {
    var check = true;
    console.log(digits);
    digits.forEach((digit) => {
      if (digit != '') {
        check = false;
      }
    });
    return check;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const index = Number(name.replace('digit-', '')) - 1;
    const intValue = value.replace(/\D/g, '');
    if (intValue.length == 0 && value.length != 0) return;
    setDigits((prevDigits) => {
      const newDigits = [...prevDigits];
      newDigits[index] = intValue.toString();
      return newDigits;
    });
    if (intValue.toString().length === 1) {
      const nextInput = document.getElementById(`digit-${index + 2}`);
      nextInput?.focus();
    } else if (intValue.toString().length === 0) {
      const prevInput = document.getElementById(`digit-${index}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(digits);
  };

  const clearNumber = () => {
    setDigits(Array(6).fill(''));
  };

  useEffect(() => {
    console.log('digit', digits);
    if (checkNoSelectedDigit()) {
      onSubmit(digits);
    }
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
            placeholder="-"
            value={digit}
            onChange={handleChange}
            maxLength={1}
            pattern="[0-9]"
            className="w-12 h-12 text-2xl bg-[#EEEEEE] text-center border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-1 transition-all ease-in-out duration-200"
          />
        ))}
      </div>
      <p
        onClick={clearNumber}
        className="underline underline-offset-4 w-full text-right text-sm cursor-pointer"
      >
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
