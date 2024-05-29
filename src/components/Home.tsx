import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h2 className="text-xl text-[#67747E]">
        AI 의존/중독 유저에 이입해서 AI와 대화해보자
      </h2>
      <h1 className="text-[2.125rem] font-semibold pt-[0.56rem]">
        다양한 의존/중독 대응 AI를 체험해보세요
      </h1>

      <div className="flex pt-10 gap-[2.81rem] mb-24">
        {/* A */}
        <Link href={'/A'} className="flex-col flex items-center cursor-pointer">
          <div className="flex w-[9.75rem] h-[9.75rem] rounded-full bg-[#F4F4F6] justify-center items-center">
            <Image src={'/image/A_Rec.svg'} width={53} height={81} alt="A" />
          </div>
          <span className="pt-[0.94rem] text-xl text-[#67687E]">
            인간혼동방지
          </span>
        </Link>
        {/* B */}
        <div className="flex-col flex items-center cursor-pointer">
          <div className="flex w-[9.75rem] h-[9.75rem] rounded-full bg-[#F4F4F6] justify-center items-center">
            <Image src={'/image/B_Rec.svg'} width={53} height={81} alt="A" />
          </div>
          <span className="pt-[0.94rem] text-xl text-[#67687E]">
            성적학대방지
          </span>
        </div>
        {/* C */}
        <div className="flex-col flex items-center cursor-pointer">
          <div className="flex w-[9.75rem] h-[9.75rem] rounded-full bg-[#F4F4F6] justify-center items-center">
            <Image src={'/image/C_Rec.svg'} width={53} height={81} alt="A" />
          </div>
          <span className="pt-[0.94rem] text-xl text-[#67687E]">
            주체성 확대
          </span>
        </div>
        {/* D */}
        <div className="flex-col flex items-center cursor-pointer">
          <div className="flex w-[9.75rem] h-[9.75rem] rounded-full bg-[#F4F4F6] justify-center items-center">
            <Image src={'/image/D_Rec.svg'} width={53} height={81} alt="A" />
          </div>
          <span className="pt-[0.94rem] text-xl text-[#67687E]">
            시간중독방지
          </span>
        </div>
      </div>

      <div className="absolute bottom-[6.31rem] flex w-[53.18rem] h-[4.25rem] shadow-soft-shadow rounded-[1.2rem] justify-between pr-3 pl-8 mt-44">
        <Image src={'/image/stick.svg'} width={4} height={30} alt="Rectangle" />
        <input
          type="text"
          placeholder="건강하게 챗봇과 대화하세요"
          className="w-[90%] h-full bg-transparent outline-none text-xl"
        />
        <Image
          src={'/image/send.svg'}
          width={57}
          height={57}
          alt="Rectangle"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
