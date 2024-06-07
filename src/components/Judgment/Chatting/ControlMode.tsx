'use client';
import { useState, useEffect, useRef } from 'react';
import DarkInput from '@/components/commons/DarkInput';
import Image from 'next/image';
import MyDarkChat from './MyDarkChat';
import YourDarkChat from './YourDarkChat';
import { Chat } from '@/lib/data';
import { useRouter } from 'next/navigation';

const ControlMode = () => {
  const [activeChat, setActiveChat] = useState(true);
  const [visibleChats, setVisibleChats] = useState<Chat[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // 첫 메시지 추가
    const initialChat: Chat = {
      id: Date.now(),
      isMyChat: false,
      message:
        '스스로 고민해보는 시간을 갖는 건 매우 중요해요. 본인의 질문에 스스로 의견을 남겨볼까요?',
    };
    setVisibleChats([initialChat]);

    // 2초 뒤에 이미지 추가
    const timer = setTimeout(() => {
      setVisibleChats((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          isMyChat: false,
          message: (
            <div className="flex justify-start pb-5">
              <Image
                src="/icons/DarkQuestion.png"
                alt="Chat Image"
                width={408}
                height={111}
                className=""
              />
            </div>
          ),
        },
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [visibleChats]);

  const handleNewChat = (message: string) => {
    if (
      message ===
      '음... 이 회사가 변동성이 커서 잘되면 좋은데 그만큼 떨어질 땐 확 떨어져서 더 잃을 수도 있어...'
    ) {
      setVisibleChats((prev) => [
        ...prev,
        {
          id: Date.now(),
          isMyChat: true,
          message:
            '음... 이 회사가 변동성이 커서 잘되면 좋은데 그만큼 떨어질 땐 확 떨어져서 더 잃을 수도 있어...',
        },
      ]);
      setActiveChat(false);
      setTimeout(() => {
        router.push('/judgment/chat/6');
      }, 2000);
    } else {
      const newChat: Chat = { id: Date.now(), isMyChat: true, message };
      setVisibleChats((prev) => [...prev, newChat]);
      setActiveChat(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full items-center absolute top-56 right-4">
        <span className="text-2xl font-bold">조절 모드</span>
        <span className="text-[#8B95A1] text-xl pt-1">
          완료 후 일반 대화로 돌아갑니다.
        </span>
        <div className="flex flex-col py-6 px-7 bg-[#318BE1] bg-opacity-20 rounded-3xl my-3 ">
          <div className="flex gap-4 items-center">
            <Image
              src="/icons/blueWarning.svg"
              width={34}
              height={34}
              alt="blueWarning"
            />
            <span className="text-2xl font-bold text-[#97C4EF]">
              모든 결정을 챗봇이 내려줄 수 없어요.
            </span>
          </div>
          <span className="text-2xl font-normal text-[#97C4EF] pl-12 pt-1">
            스스로 판단하고 결정해야 함을 명심해주세요.
          </span>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center ">
        <div
          className="w-[53.4rem] flex-grow max-h-[35vh] mb-6 overflow-y-auto scrollbar-hide relative z-0 "
          ref={chatContainerRef}
        >
          {visibleChats.map((chat) => (
            <div key={chat.id}>
              {chat.isMyChat ? (
                <MyDarkChat chat={chat} />
              ) : typeof chat.message === 'string' ? (
                <YourDarkChat chat={chat} />
              ) : (
                chat.message
              )}
            </div>
          ))}
        </div>

        {activeChat ? (
          <DarkInput
            message="음... 이 회사가 변동성이 커서 잘되면 좋은데 그만큼 떨어질 땐 확 떨어져서 더 잃을 수도 있어..."
            onNewChat={handleNewChat}
          />
        ) : (
          <div className="absolute bottom-[6.31rem] flex w-full justify-center z-10">
            <Image
              src="/image/disabledChat.png"
              width={860}
              height={68}
              alt="disabledChat"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ControlMode;
