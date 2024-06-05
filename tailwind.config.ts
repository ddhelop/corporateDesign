import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'blue-shadow': '0px 12px 100.29px 0px rgba(135, 185, 231, 0.27)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addUtilities }: any) {
      addUtilities({
        '.gradient-overlay': {
          position: 'sticky',
          top: '0',
          left: '0',
          width: '100%',
          height: '50px',
          background:
            'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 100%)',
          pointerEvents: 'none',
          zIndex: '10', // 필요시 추가하여 다른 요소보다 위에 표시
        },
      });
    },
  ],
};

export default config;
