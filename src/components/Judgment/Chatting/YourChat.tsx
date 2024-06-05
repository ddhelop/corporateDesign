import { FC } from 'react';
import { Chat } from '@/lib/data';

interface YourChatProps {
  chat: Chat;
}

const YourChat: FC<YourChatProps> = ({ chat }) => {
  return (
    <div className="w-full flex justify-start">
      <div className="max-w-[80%] bg-[#F2F4F6] py-4 px-6 rounded-bl-[30px] rounded-r-[30px] text-[#4E5968] text-2xl mb-6">
        {chat.message}
      </div>
    </div>
  );
};

export default YourChat;
