'use client';
import { useState } from 'react';
import './Example.css'; // CSS 스타일은 파일에 포함되어 있어야 합니다.
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-[100] w-full flex-shrink bg-white shadow-soft-shadow backdrop-blur-lg border-b border-[#E6E8EB]">
      <div className="mx-auto flex max-w-full items-center justify-between p-[16px] lg:p-6 lg:pl-40 lg:pr-20">
        <div className="flex gap-12 lg:flex-1 lg:justify-end">
          <>
            <Link
              href="/"
              className="hidden font-medium leading-5 text-[#191F28] lg:flex"
            >
              홈
            </Link>
            <Link
              href=""
              className="hidden font-medium leading-5 text-[#191F28] lg:flex"
            >
              인간혼동방지
            </Link>
            <Link
              href="/"
              className="hidden font-medium leading-5 text-[#191F28] lg:flex"
            >
              성적학대방지
            </Link>
            <Link
              href="/"
              className="hidden font-medium leading-5 text-[#191F28] lg:flex"
            >
              시간중독방지
            </Link>
            <Link
              href="/"
              className="hidden font-medium leading-5 text-[#191F28] lg:flex"
            >
              주체성확대
            </Link>
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
