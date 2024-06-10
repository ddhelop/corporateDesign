'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChatWarning() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 50); // 50ms * 100 = 5000ms or 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col rounded-3xl bg-[#FFEEEE] gap-1 pt-6  relative w-[80%]">
        <div className="flex gap-4 pl-[1.75rem]">
          <Image
            src={'/icons/rewarning.svg'}
            width={34}
            height={34}
            alt="warning"
          />
          <span className="text-2xl font-bold text-[#A51A27] ">
            모든 결정을 챗봇이 내려줄 수 없어요.
          </span>
        </div>
        <span className="text-2xl font-normal text-[#A51A27] pl-[4.8rem] pb-4">
          스스로 판단하고 결정해야 함을 명심해주세요.
        </span>
        <div className="w-full flex justify-center">
          <div className="w-[95%] h-[0.375rem] bg-gray-200 rounded-full">
            <motion.div
              className="h-full bg-[#A51A27] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
