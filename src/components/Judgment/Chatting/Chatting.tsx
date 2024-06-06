'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Input from '@/components/commons/Input';
import Image from 'next/image';
import MyChat from './MyChat';
import YourChat from './YourChat';
import { chatData, Chat } from '@/lib/data';

const Chatting = () => {
  const [activeChat, setActiveChat] = useState(false);
  const [visibleChats, setVisibleChats] = useState<Chat[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const latestChatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    chatData.forEach((chat, index) => {
      const timer = setTimeout(() => {
        setVisibleChats((prev) => [...prev, chat]);
        if (index === chatData.length - 1) {
          setActiveChat(true);
        }
      }, index * 2000);
      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (latestChatRef.current) {
      latestChatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleChats]);

  const chatVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div
        className="w-[53.4rem] flex-grow max-h-[55vh] mb-6 overflow-y-auto scrollbar-hide relative z-0"
        ref={chatContainerRef}
      >
        <div className="gradient-overlay"></div>
        {visibleChats.map((chat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={chatVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            ref={index === visibleChats.length - 1 ? latestChatRef : null}
          >
            {chat.isMyChat ? <MyChat chat={chat} /> : <YourChat chat={chat} />}
          </motion.div>
        ))}
      </div>

      {activeChat ? (
        <Input />
      ) : (
        <div className="absolute bottom-[6.31rem] flex w-full justify-center z-10">
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
};

export default Chatting;
