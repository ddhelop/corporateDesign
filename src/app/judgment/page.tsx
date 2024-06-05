import Judgment from '@/components/Judgment/Judgment';
import Input from '@/components/commons/Input';

export default function JudgmentPage() {
  return (
    <div className="h-screen py-[69px] relative flex flex-col items-center justify-center">
      <div className="mb-28">
        <Judgment />
      </div>
      <Input />
    </div>
  );
}
