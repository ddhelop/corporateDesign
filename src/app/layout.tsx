import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '주체적 판단능력 저하 유저 케이스 시연',
  description: '주체적 판단능력 저하 유저 케이스 시연',
  icons: {
    icon: '/icons/robot.png',
  },
};
const pretendard = localFont({
  src: '../lib/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
