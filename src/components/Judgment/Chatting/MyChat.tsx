import { FC } from 'react';
import { Chat } from '@/lib/data';

interface MyChatProps {
  chat: Chat;
}

const MyChat: FC<MyChatProps> = ({ chat }) => {
  return (
    <div className="w-full flex justify-end">
      <div className="max-w-[80%] bg-[#519CE3] py-4 px-6 rounded-s-[30px] rounded-tr-[0px] rounded-br-[30px] text-white text-2xl mb-6">
        {chat.message}
      </div>
    </div>
  );
};

export default MyChat;
