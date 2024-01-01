import type { Config } from 'tailwindcss';
import { COLORS } from './src/constants/colors.constants';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: COLORS,
      spacing: {
        0.5: '0.12rem',
        layout: '1.6rem',
      },
      fontSize: {
        xs: '0.9rem',
        sm: '1.07rem',
        base: '1.18rem',
        lg: '1.24rem',
        xl: '1.38rem',
        '1.5xl': '1.5rem',
        '2xl': '1.82rem',
        '3xl': '2.22rem',
        '4xl': '2.66rem',
        '5xl': '3.56rem',
        '6xl': '4.44rem',
        '7xl': '5.33rem',
        '8xl': '7.1rem',
        '9xl': '9.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDuration: {
        DEFAULT: '266ms',
      },
    },
  },
  plugins: [],
};
export default config;
