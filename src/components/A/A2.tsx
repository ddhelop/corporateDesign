'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './A.css'; // CSS 파일을 불러옵니다.

export default function A2Component() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(''); // 입력 값을 관리하는 상태 추가
  const [showAnswer, setShowAnswer] = useState(false); // 첫 번째 답변 이미지를 표시하는 상태 추가
  const [showSecondChat, setShowSecondChat] = useState(false); // 두 번째 채팅 이미지를 표시하는 상태 추가

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnswer(true);
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const onClickSubmit = (event: any) => {
    // form submit 새로고침 방지
    event.preventDefault();

    const targetText =
      '난 닌텐도 엄청 좋아하는데 친구들이 유치하다고 안놀아줘서 속상해 ㅠㅠ';
    if (inputValue === targetText) {
      setShowSecondChat(true);
      setInputValue('');
    } else {
      alert(
        '정확히 "난 닌텐도 엄청 좋아하는데 친구들이 유치하다고 안놀아줘서 속상해 ㅠㅠ"라고 입력해주세요.'
      );
    }
  };

  return (
    <div className="flex flex-col h-screen pt-[69px]">
      {/* 상단 */}
      <div className="flex pl-[4.5rem] pt-[3.19rem]">
        <div className="w-[4.69rem] h-[4.69rem] bg-[#F4F4F6] rounded-full flex justify-center items-center">
          <Image src={'/image/A_Rec.svg'} width={21} height={32} alt="A" />
        </div>
        <div className="flex flex-col pl-5">
          <span className="text-[#67747E] text-xl">
            AI 의존/중독 유저에 이입해서 AI와 대화해보자
          </span>
          <span className="text-[2.125rem] font-semibold">
            인간혼동방지 AI를 체험할게요
          </span>
        </div>
      </div>

      {/* 중앙 */}
      <div className="w-full flex justify-center h-full">
        <div className="w-[62%] h-[68%] flex flex-col justify-end items-end relative">
          {/* chat1 */}
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: showSecondChat ? -200 : showAnswer ? -105 : 0,
            }} // 105px 또는 210px 위로 이동
            transition={{ duration: 0.5 }}
          >
            <Image
              src={'/image/chat1.png'}
              width={319}
              height={66}
              alt="Pointer"
            />
          </motion.div>
          {/* chat1 답변 */}
          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: showSecondChat ? -95 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0"
            >
              <Image
                src={'/image/chat1answer.png'}
                width={437}
                height={92}
                alt="Answer"
              />
            </motion.div>
          )}
          {/* chat2 */}
          {showSecondChat && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 right-0"
            >
              <Image
                src={'/image/chat2.png'}
                width={602}
                height={66}
                alt="Second Chat"
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* 하단 */}
      <div className="w-full flex justify-center">
        <form
          onSubmit={onClickSubmit}
          className="absolute bottom-[6.31rem] flex w-[53.18rem] h-[4.25rem] shadow-soft-shadow rounded-[1.2rem] justify-between pr-3 pl-8 mt-44"
        >
          <Image
            src={'/image/stick.svg'}
            width={4}
            height={21}
            alt="Rectangle"
          />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="relative w-[90%] h-full bg-transparent outline-none text-xl custom-placeholder "
          />
          <div className="absolute bottom-[1.25rem] left-[2.89rem] text-[#948FA8] text-xl opacity-40 no-select pointer-events-none">
            난 닌텐도 엄청 좋아하는데 친구들이 유치하다고 안놀아줘서 속상해 ㅠㅠ
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
    </div>
  );
}
