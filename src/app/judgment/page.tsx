import Judgment from '@/components/Judgment/Judgment';
import Input from '@/components/commons/Input';

export default function JudgmentPage() {
  return (
    <div className="h-screen py-[69px] relative flex flex-col items-center justify-center">
      <div className="">
        <Judgment />
      </div>
      <Input message="오늘 주식 다 떨어져서 몇천만원을 날렸어..." />
    </div>
  );
}
