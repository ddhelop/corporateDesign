'use client';
import Input from '@/components/commons/Input';
import Image from 'next/image';
import { useState } from 'react';

export default function Chatting() {
  const [activeChat, setActiveChat] = useState(true);

  return (
    <div className="w-full flex flex-col items-center h-full">
      <div className="w-[71%] bg-gray-500 flex-grow">
        <div>123</div>
      </div>

      <div className="h-[12.3rem] w-full bg-red-400 flex-shrink-0">
        {activeChat ? (
          <Input />
        ) : (
          <div className="flex w-full bg-blue-500 justify-center">
            <div className="absolute bottom-[6.31rem] flex w-full justify-center">
              <Image
                src={'/image/disabledChat.png'}
                width={860}
                height={68}
                alt="disabledChat"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
