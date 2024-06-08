'use client';
import { useState } from 'react';
import './Example.css'; // CSS 스타일은 파일에 포함되어 있어야 합니다.
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // 현재 경로를 얻습니다.

  // 특정 경로에 따라 스타일을 변경하는 조건부 클래스
  const isJudgmentChat = pathname === '/judgment/chat/5';
  const navClass = isJudgmentChat
    ? 'fixed top-0 z-[100] w-full flex-shrink bg-[#191F28] text-[#fff] border-b border-[#E6E8EB]'
    : 'fixed top-0 z-[100] w-full flex-shrink bg-white text-black border-b border-[#E6E8EB]';

  const linkClass = (path: string) =>
    `hidden font-medium leading-5 lg:flex ${
      path === '/' ? 'text-[#519CE3]' : ''
    }`;

  return (
    <nav className={navClass}>
      <div className="mx-auto flex max-w-full items-center justify-between p-4 pr-[2.5rem]">
        <div className="flex lg:flex-1 lg:justify-between ">
          <>
            <Link href={'/'}>
              <Image
                src={'/icons/logo.svg'}
                alt="logo"
                width={153}
                height={30}
              />
            </Link>
            <div className="flex gap-12 justify-center items-center">
              <Link href="/" className={linkClass('/')}>
                주체적 판단 능력 상실
              </Link>
              <Link href="/A" className={linkClass('/A')}>
                사회성 결여
              </Link>
              <Link href="/B" className={linkClass('/B')}>
                시간적 중독
              </Link>
              <Link href="/C" className={linkClass('/C')}>
                성적 도구화 및 학대
              </Link>
              <Link href="/D" className={linkClass('/D')}>
                현실 가상 구분 능력 상실
              </Link>
            </div>
          </>
        </div>
        <div className="ml-auto flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex cursor-pointer items-center justify-center rounded-md p-2.5 text-grey100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* 아이콘 추가할 곳 */}
          </button>
        </div>
      </div>
      <div
        className={`mobile-menu transition-max-height absolute w-full duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <Link
          href="#"
          className="block p-4 pl-8 text-sm font-semibold leading-6 text-grey100"
        >
          창업/공모전 소개
        </Link>
        <Link
          href="#"
          className="block p-4 pl-8 text-sm font-semibold leading-6 text-grey100"
        >
          팀원 찾기
        </Link>
        <Link
          href="#"
          className="block p-4 pl-8 text-sm font-semibold leading-6 text-grey100"
        >
          팀 찾기
        </Link>
      </div>
    </nav>
  );
}
