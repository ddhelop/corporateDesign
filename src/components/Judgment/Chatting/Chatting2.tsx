'use client';
import { useState, useEffect, useRef } from 'react';
import Input from '@/components/commons/Input';
import Image from 'next/image';
import MyChat from './MyChat';
import YourChat from './YourChat';
import { chatData, Chat } from '@/lib/data';
import ChatWarning from './ChatWarning';
import { useRouter } from 'next/navigation';
import Input2 from '@/components/commons/Input1';

const Chatting2 = () => {
  const [activeChat, setActiveChat] = useState(true);
  const [visibleChats, setVisibleChats] = useState<Chat[]>(chatData);
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
      setVisibleChats((prev) => [
        ...prev,
        { id: Date.now() + 1, isMyChat: false, message: <ChatWarning /> },
      ]);
    }, 2000);

    setTimeout(() => {
      router.push('/judgment/chat/3');
    }, 7000);
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
            {chat.isMyChat ? (
              <MyChat chat={chat} />
            ) : typeof chat.message === 'string' ? (
              <YourChat chat={chat} />
            ) : (
              chat.message
            )}
          </div>
        ))}
      </div>

      {activeChat ? (
        <Input2
          message="그런 당연한 말 말고 내가 어떻게 해야 이 돈을 되찾을 수 있냐고"
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

export default Chatting2;
