'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-16">
        <Image
          src={'/image/home_search.png'}
          width={853}
          height={223}
          alt="homeSearch"
        />
        <Link href="/judgment">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-[7.5rem] py-[1.25rem] text-[1.75rem] text-[#3B8BD8] rounded-3xl bg-[#E9F2FB] mt-10"
          >
            체험해보기
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
