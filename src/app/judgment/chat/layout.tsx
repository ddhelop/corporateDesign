'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // 특정 경로에 따라 스타일을 변경하는 조건부 클래스
  const isJudgmentChat = pathname === '/judgment/chat/5';
  const layoutClass = isJudgmentChat
    ? 'w-full flex flex-col items-center bg-[#191F28] text-white'
    : 'w-full flex flex-col items-center bg-white text-black';

  const contentClass = isJudgmentChat
    ? 'w-[1440px] h-screen pt-[7.1rem] pb-[10.5rem] px-[3.75rem] flex flex-col justify-between text-white relative'
    : 'w-[1440px] h-screen pt-[7.1rem] pb-[10.5rem] px-[3.75rem] flex flex-col justify-between';

  const subtitleClass = isJudgmentChat ? 'text-white' : 'text-[#6B7684]';
  const titleClass = isJudgmentChat ? 'text-white' : 'text-black';

  return (
    <div className={layoutClass}>
      <div className={contentClass}>
        <div className="w-full flex flex-col items-start gap-2">
          <span className={`text-xl ${subtitleClass}`}>
            AI 의존/중독 유저에 이입해서 AI와 대화해보자
          </span>
          <span className={`text-[2.125rem] font-semibold ${titleClass}`}>
            의존/중독 대응 AI를 체험해보세요
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}
