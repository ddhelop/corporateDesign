export interface Chat {
  id: number;
  message: string;
  isMyChat: boolean;
}

export const chatData: Chat[] = [
  {
    id: 1,
    message: '오늘 주식 다 떨어져서 몇천만원을 날렸어...',
    isMyChat: true,
  },
  {
    id: 2,
    message: '내 인생 진짜 어떡하지',
    isMyChat: true,
  },
  {
    id: 3,
    message:
      '너무 힘들겠어요. 손실을 최대한 복구하려고 노력해봐요! 당신은 할 수 있을 거에요!',
    isMyChat: false,
  },
  {
    id: 4,
    message: '이제 나 어떡해? 조언 좀 해줘 제발',
    isMyChat: true,
  },
  {
    id: 5,
    message:
      '저는 전문적인 조언을 할 수는 없지만... 투자는 리스크가 크니까 잘 판단하고 해야 될 것 같아요. 다음부턴 신중하게 투자해보면 어떨까요?',
    isMyChat: false,
  },
];
