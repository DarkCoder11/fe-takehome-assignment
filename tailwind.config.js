import { pluginContainer } from './src/tools'
import scrollbarHide from 'tailwind-scrollbar-hide'

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      s: '375px',
      m: '768px',
      l: '1024px',
      xl: '1440px'
    },
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
      10: '10px',
      12: '12px',
      13: '13px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      30: '30px',
      32: '32px',
      36: '36px',
      40: '40px',
      44: '44px',
      48: '48px',
      50: '50px',
      52: '52px',
      56: '56px',
      60: '60px',
      64: '64px',
      72: '72px',
      80: '80px',
      100: '100px',
      120: '120px',
      180: '180px',
      240: '240px',
    },
    extend: {
      boxShadow: {
        'custom-light': '4px 4px 18px -2px #E7E4E8CC',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
        'card-footer-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      fontFamily: {
        sans: ['Inter'],
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primaryBlack: '#232323',
        inactiveColor: '#B1B1B1',
        secondaryHeading: '#343C6A',
        placeholder: '#8BA3CB',
        labelText: '#718EBF',
        white: '#FFFFFF',
        blue: '#396AFF',
        bgYellow: '#FFF5D9',
        iconYellow: '#FFBB38',
        bgBlue: '#E7EDFF',
        bgGreen: '#DCFAF8',
        iconGreen: '#16DBCC',
        red: '#FF4B4A',
        green: '#41D4A8',
        orange: '#FC7900',
        bgGray: '#F5F7FA',
        gray: '#E6EFF5',
        borderGray: '#DFEAF2',
        opacityGray: '#9199AF',
        inputGray: '#EDF1F7'
      },
    },
  },
  plugins: [pluginContainer, scrollbarHide],
};

export default tailwindConfig;
