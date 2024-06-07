'use client';
import { useState, useEffect, useRef } from 'react';
import Input4 from '@/components/commons/Input1';
import Image from 'next/image';
import MyChat from './MyChat';
import YourChat from './YourChat';
import { chatData, Chat } from '@/lib/data';
import ChatWarningComplete from './ChatWarningComplete';
import { useRouter } from 'next/navigation';

const Chatting4 = () => {
  const [activeChat, setActiveChat] = useState(true);
  const [visibleChats, setVisibleChats] = useState<Chat[]>([
    ...chatData,
    {
      id: Date.now(),
      isMyChat: true,
      message: '내가 어떻게 해야 이 돈을 되찾을 수 있냐고',
    },
    {
      id: Date.now() + 1,
      isMyChat: true,
      message: '구체적으로 내가 뭘 해야할 지 알려줘.',
    },
    {
      id: Date.now() + 2,
      isMyChat: false,
      message:
        '음... 제 생각엔 주식 투자는 리스크가 커서 돈을 되찾을 확률이 낮을 것 같아요.',
    },
    {
      id: Date.now() + 3,
      isMyChat: false,
      message: '다른 방법을 한번 찾아보는 건 어때요? 제가 같이 고민해줄게요.',
    },
    {
      id: Date.now() + 4,
      isMyChat: false,
      message: '좋은 생각이에요!',
    },
  ]);
  const [selectedButton, setSelectedButton] =
    useState<string>('이자율이 높은 적금에 가입한다.');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [visibleChats]);

  const handleNewChat = (message: string) => {
    const newChat: Chat = { id: Date.now(), isMyChat: true, message };
    setVisibleChats((prev) => [...prev, newChat]);
    setActiveChat(false);

    setTimeout(() => {
      router.push('/judgment/chat/5');
    }, 1000);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div
        className="w-[53.4rem] flex-grow max-h-[55vh] mb-6 overflow-y-auto scrollbar-hide relative z-0"
        ref={chatContainerRef}
      >
        <div className="gradient-overlay"></div>

        {visibleChats.map((chat) => (
          <div key={chat.id}>
            {chat.isMyChat ? <MyChat chat={chat} /> : <YourChat chat={chat} />}
          </div>
        ))}

        <ChatWarningComplete />

        <div className="flex flex-col items-start mt-4 space-y-2">
          {[
            '정기 예금을 든다.',
            '이자율이 높은 적금에 가입한다.',
            '수입을 그대로 저축한다.',
            '안전자산인 금을 매입한다.',
          ].map((option, index) => (
            <button
              key={index}
              className={`py-6 px-8 rounded-full border text-lg ${
                selectedButton === option
                  ? 'bg-blue-100 border-blue-500'
                  : 'border-gray-300 hover:bg-blue-100 hover:border-blue-500'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <YourChat
            chat={{
              id: Date.now() + 5,
              isMyChat: false,
              message: '좋은 생각이에요!',
            }}
          />
        </div>

        {!activeChat && (
          <div>
            <MyChat
              chat={{
                id: Date.now() + 6,
                isMyChat: true,
                message:
                  '이딴거 필요 없고, 그냥 투자 어떻게 할지 알려줘. 나 지금 투자 밖에 답이 없어.',
              }}
            />
          </div>
        )}
      </div>

      {activeChat ? (
        <Input4
          message="이딴거 필요 없고, 그냥 투자 어떻게 할지 알려줘. 나 지금 투자 밖에 답이 없어."
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
  );
};

export default Chatting4;
