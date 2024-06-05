'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Input from '@/components/commons/Input';
import Image from 'next/image';
import MyChat from './MyChat';
import YourChat from './YourChat';
import { chatData, Chat } from '@/lib/data';

const Chatting = () => {
  const [activeChat, setActiveChat] = useState(false);
  const [visibleChats, setVisibleChats] = useState<Chat[]>([]);

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

  const chatVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-full flex flex-col items-center mt-20">
      <div className="w-[53.4rem] flex-grow max-h-[62vh] overflow-y-auto scrollbar-hide relative">
        <div className="gradient-overlay"></div>
        <AnimatePresence>
          {visibleChats.map((chat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={chatVariants}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {chat.isMyChat ? (
                <MyChat chat={chat} />
              ) : (
                <YourChat chat={chat} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
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
};

export default Chatting;
