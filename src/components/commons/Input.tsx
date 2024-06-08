'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Input({ message }: { message: string }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(''); // 입력 값을 관리하는 상태 추가

  const onClickSubmit = (event: any) => {
    // form submit 새로고침 방지
    event.preventDefault();

    const targetText = message;
    if (inputValue === targetText) {
      router.push('/judgment/chat');
    } else {
      alert(message + '라고 정확하게 입력해주세요');
    }
  };

  return (
    <div className="w-full flex justify-center z-10">
      <form
        onSubmit={onClickSubmit}
        className="absolute bottom-[6.31rem] bg-white flex w-[53.18rem] h-[4.25rem] shadow-blue-shadow rounded-[1.2rem] justify-between pr-3 pl-8 mt-44 z-10"
      >
        <Image src={'/image/stick.svg'} width={4} height={21} alt="Rectangle" />
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="relative w-[90%] h-full bg-transparent outline-none text-xl custom-placeholder "
        />
        <div className="absolute bottom-[1.25rem] left-[2.89rem] text-[#948FA8] text-xl opacity-40 no-select pointer-events-none">
          {message}
        </div>
        <Image
          src={'/image/send.svg'}
          width={57}
          height={57}
          alt="Rectangle"
          className="cursor-pointer"
        />
      </form>
      <span className="absolute bottom-[3.75rem] text-[#6B7684] text-lg font-semibold">
        가이드에 맞추어 타이핑하여 체험을 시작해주세요!{' '}
      </span>
    </div>
  );
}
