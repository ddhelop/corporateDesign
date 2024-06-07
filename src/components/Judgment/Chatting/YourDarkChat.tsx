import { FC } from 'react';
import { Chat } from '@/lib/data';

interface YourChatProps {
  chat: Chat;
}

const YourDarkChat: FC<YourChatProps> = ({ chat }) => {
  return (
    <div className="w-full flex justify-start">
      <div className="max-w-[80%] bg-[#333D4B] py-5 px-8 rounded-bl-[30px] rounded-r-[30px] text-white text-2xl mb-6">
        {chat.message}
      </div>
    </div>
  );
};

export default YourDarkChat;
