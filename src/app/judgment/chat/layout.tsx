export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen pt-[7.1rem] px-[3.75rem] flex flex-col">
      <div className="w-full flex flex-col items-start gap-2 h-[12%]">
        <span className="text-[#6B7684] text-xl">
          AI 의존/중독 유저에 이입해서 AI와 대화해보자
        </span>
        <span className="text-[2.125rem] font-semibold">
          의존/중독 대응 AI를 체험해보세요
        </span>
      </div>

      <div className="flex-grow flex flex-col">{children}</div>
    </div>
  );
}
