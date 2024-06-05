'use client';
import Input from '@/components/commons/Input';
import Image from 'next/image';
import { useState } from 'react';
import MyChat from './MyChat';
import YourChat from './YourChat';

export default function Chatting() {
  const [activeChat, setActiveChat] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-[53.4rem] h-full">
        <YourChat />
        <MyChat />
      </div>

      {activeChat ? (
        <Input />
      ) : (
        <div className="absolute bottom-[6.31rem] flex w-full justify-center">
          <Image
            src={'/image/disabledChat.png'}
            width={860}
            height={68}
            alt="disabledChat"
          />
        </div>
      )}
    </div>
  );
}
