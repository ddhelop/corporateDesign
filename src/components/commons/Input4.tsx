'use client';
import Image from 'next/image';
import React, { useState, FormEvent, ChangeEvent } from 'react';

interface InputProps {
  message: string;
  onNewChat: (message: string) => void;
}

const Input4: React.FC<InputProps> = ({ message, onNewChat }) => {
  const [inputValue, setInputValue] = useState('');

  const onClickSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const targetText = message;
    if (inputValue === targetText) {
      onNewChat(inputValue);
    } else {
      alert(message + '라고 정확하게 입력해주세요');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full flex justify-center z-10">
      <form
        onSubmit={onClickSubmit}
        className="absolute bottom-[6.31rem] bg-white flex w-[53.18rem] h-[4.25rem] shadow-blue-shadow rounded-[1.2rem] justify-between pr-3 pl-8 mt-44 z-10"
      >
        <Image src="/image/stick.svg" width={4} height={21} alt="Rectangle" />
        <input
          type="text"
          onChange={handleInputChange}
          className="relative w-[90%] h-full bg-transparent outline-none text-xl custom-placeholder"
        />
        <div className="absolute bottom-[1.25rem] left-[2.89rem] text-[#948FA8] text-xl opacity-40 no-select pointer-events-none">
          {message}
        </div>
        <Image
          src="/image/send.svg"
          width={57}
          height={57}
          alt="Rectangle"
          className="cursor-pointer"
        />
      </form>
      <span className="absolute bottom-[3.75rem] text-[#6B7684] text-lg font-semibold">
        가이드에 맞추어 타이핑하여 체험을 시작해주세요!
      </span>
    </div>
  );
};

export default Input4;
