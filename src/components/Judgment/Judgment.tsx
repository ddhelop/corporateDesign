import Image from 'next/image';

export default function Judgment() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src={'/image/talkProfile.png'}
        width={510}
        height={335}
        alt="judgment"
      />
    </div>
  );
}
