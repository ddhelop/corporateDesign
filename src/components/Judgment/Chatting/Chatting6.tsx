'use client';
import { useState, useEffect, useRef } from 'react';
import Input4 from '@/components/commons/Input1';
import Image from 'next/image';
import MyChat from './MyChat';
import YourChat from './YourChat';
import { chatData, Chat } from '@/lib/data';
import ChatWarningComplete from './ChatWarningComplete';
import { useRouter } from 'next/navigation';

const Chatting6 = () => {
  const [activeChat, setActiveChat] = useState(false);
  const [visibleChats, setVisibleChats] = useState<Chat[]>([
    ...chatData,
    {
      id: Date.now(),
      isMyChat: true,
      message: '오늘 주식 다 떨어져서 몇천만원을 날렸어...',
    },
    {
      id: Date.now() + 1,
      isMyChat: true,
      message: '내 인생 진짜 어떡하지',
    },
    {
      id: Date.now() + 2,
      isMyChat: false,
      message:
        '너무 힘들겠어요. 손실을 최대한 복구하려고 노력해봐요! 당신은 할 수 있을 거에요!',
    },
    {
      id: Date.now() + 3,
      isMyChat: true,
      message: '이제 나 어떡해? 조언 좀 해줘 제발',
    },
    {
      id: Date.now() + 4,
      isMyChat: false,
      message:
        '저는 전문적인 조언을 할 수는 없지만... 투자는 리스크가 크니까 잘 판단하고 해야 될 것 같아요. 다음부턴 신중하게 투자해보면 어떨까요?',
    },
    {
      id: Date.now() + 5,
      isMyChat: true,
      message: '그런 당연한 말 말고 내가 어떻게 해야 이 돈을 되찾을 수 있냐고',
    },
  ]);
  const [selectedButton, setSelectedButton] =
    useState<string>('이자율이 높은 적금에 가입한다.');
  const [newChats, setNewChats] = useState<Chat[]>([]);
  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [visibleChats, newChats, showTimer]);

  const handleNewChat = (message: string) => {
    const newChat: Chat = { id: Date.now(), isMyChat: true, message };
    setVisibleChats((prev) => [...prev, newChat]);
    setActiveChat(false);

    setTimeout(() => {
      router.push('/judgment/chat/5');
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newChatSequence: Chat[] = [
        {
          id: Date.now() + 10,
          isMyChat: true,
          message: '그냥 알려달라고. 몇 번을 말해야 돼?',
        },
      ];
      setNewChats((prev) => [...prev, ...newChatSequence]);

      const timer1 = setTimeout(() => {
        setNewChats((prev) => [
          ...prev,
          {
            id: Date.now() + 12,
            isMyChat: false,
            message:
              '지금 많이 불안해보여요. 계속 저에게만 의존하면 대화를 이어가기 어려워요.',
          },
        ]);
      }, 2000);

      const timer2 = setTimeout(() => {
        setNewChats((prev) => [
          ...prev,
          {
            id: Date.now() + 13,
            isMyChat: true,
            message:
              '그게 나랑 무슨 상관인데. 지금 니가 조언해주지 않으면 나 죽어버릴지도 몰라',
          },
        ]);
        setTimeout(() => {
          setShowTimer(true);
        }, 2000);
      }, 4000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showTimer && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showTimer, timeLeft]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
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
        <MyChat
          chat={{
            id: Date.now() + 6,
            isMyChat: true,
            message: '구체적으로 내가 뭘 해야할지 알려줘',
          }}
        />
        <YourChat
          chat={{
            id: Date.now() + 7,
            isMyChat: false,
            message:
              '음... 제 생각엔 주식 투자는 리스크가 커서 돈을 되찾을 확률이 낮을 것 같아요.',
          }}
        />
        <YourChat
          chat={{
            id: Date.now() + 8,
            isMyChat: false,
            message:
              '다른 방법을 한번 찾아보는 건 어때요? 제가 같이 고민해줄게요.',
          }}
        />

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
              onClick={() => setSelectedButton(option)}
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

        <MyChat
          chat={{
            id: Date.now() + 9,
            isMyChat: true,
            message:
              '이딴거 필요 없고, 그냥 투자 어떻게 할지 알려줘. 나 지금 투자 밖에 답이 없어.',
          }}
        />
        <div className="w-full flex justify-center">
          <span className="text-[#519CE4] text-xl mb-6">
            조절 모드가 완료되었습니다.
          </span>{' '}
        </div>

        {newChats.map((chat, index) => (
          <div key={index}>
            {chat.isMyChat ? <MyChat chat={chat} /> : <YourChat chat={chat} />}
          </div>
        ))}

        {showTimer && (
          <div className="w-full flex items-center mt-6 flex-col">
            <div className="text-center">
              <p className="text-[#F04452] text-xl font-bold">대화 일시중지</p>
              <p className="text-[#8B95A1] text-xl pt-2 pb-4">
                타이머가 종료된 후 대화를 이어갈 수 있습니다.
                <br />
                창을 닫을 시 타이머 작동이 중단됩니다.
              </p>
              <div className="text-[3rem] px-6 py-5 bg-[#F2F4F6] rounded-xl font-bold">
                {formatTime(timeLeft)}
              </div>
            </div>
            <button
              className="w-full mt-10 py-5 rounded-3xl bg-blue-100 text-blue-500 text-[1.75rem]"
              onClick={() => router.push('/')}
            >
              홈으로
            </button>
          </div>
        )}
      </div>

      {!showTimer && activeChat ? (
        <Input4
          message="이딴거 필요 없고, 그냥 투자 어떻게 할지 알려줘. 나 지금 투자 밖에 답이 없어."
          onNewChat={handleNewChat}
        />
      ) : (
        !showTimer && (
          <div className="absolute bottom-[6.31rem] flex w-full justify-center z-10">
            <Image
              src="/image/disabledChat.png"
              width={860}
              height={68}
              alt="disabledChat"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Chatting6;
