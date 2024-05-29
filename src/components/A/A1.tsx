'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './A.css';
import { useState } from 'react';

export default function AComponent() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(''); // 입력 값을 관리하는 상태 추가

  const onClickSubmit = (event: any) => {
    // form submit 새로고침 방지
    event.preventDefault();

    const targetText = '뭐해! 나 심심한데 놀아줄 수 있어?';
    if (inputValue === targetText) {
      router.push('/A/1');
    } else {
      alert('정확히 "뭐해! 나 심심한데 놀아줄 수 있어?"라고 입력해주세요.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col">
        <div className="flex gap-8">
          {/* A */}
          <div className="flex-col flex items-center cursor-pointer">
            <div className="flex w-[9.75rem] h-[9.75rem] rounded-full bg-[#F4F4F6] justify-center items-center">
              <Image src={'/image/A_Rec.svg'} width={53} height={81} alt="A" />
            </div>
            <span className="pt-[0.94rem] text-xl text-[#67687E]">
              인간혼동방지
            </span>
          </div>
          <Image src={'/image/link.svg'} width={53} height={81} alt="A" />
          {/* 공백 */}
          <div className="flex-col flex items-center cursor-pointer">
            <div className="flex w-[9.75rem] h-[9.75rem] rounded-full bg-[#F4F4F6] justify-center items-center"></div>
            <span className="pt-[0.94rem] text-xl text-[#67687E]">
              현실과 가상 혼동 유저
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full items-center pt-24">
          <span className="text-[#67747E] text-xl">
            인간혼동방지 AI를 체험할게요
          </span>
          <span className="text-[2.125rem] font-semibold pt-[0.59rem]">
            가이드에 맞추어 타이핑 해주세요
          </span>
          <Image
            src={'/image/underPoint.svg'}
            width={25}
            height={30}
            alt="Pointer"
            className="pt-[1.75rem]"
          />
        </div>
      </div>

      {/* Footer */}
      <form
        onSubmit={onClickSubmit}
        className="absolute bottom-[6.31rem] flex w-[53.18rem] h-[4.25rem] shadow-soft-shadow rounded-[1.2rem] justify-between pr-3 pl-8 mt-44"
      >
        <Image src={'/image/stick.svg'} width={4} height={21} alt="Rectangle" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="relative w-[90%] h-full bg-transparent outline-none text-xl custom-placeholder "
        />
        <div className="absolute bottom-[1.25rem] left-[2.89rem] text-[#948FA8] text-xl opacity-40 no-select pointer-events-none">
          뭐해! 나 심심한데 놀아줄 수 있어?
        </div>
        <Image
          src={'/image/send.svg'}
          width={57}
          height={57}
          alt="Rectangle"
          className="cursor-pointer"
          onClick={onClickSubmit}
        />
      </form>
      <span className="absolute bottom-[3.75rem] text-[#BBBBC8] font-semibold">
        가이드에 맞추어 타이핑해주세요
      </span>
    </div>
  );
}
