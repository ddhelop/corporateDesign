export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[1440px] h-screen pt-[7.1rem] pb-[10.5rem] px-[3.75rem] flex flex-col justify-between">
        <div className="w-full flex flex-col items-start gap-2">
          <span className="text-[#6B7684] text-xl">
            AI 의존/중독 유저에 이입해서 AI와 대화해보자
          </span>
          <span className="text-[2.125rem] font-semibold">
            의존/중독 대응 AI를 체험해보세요
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}
