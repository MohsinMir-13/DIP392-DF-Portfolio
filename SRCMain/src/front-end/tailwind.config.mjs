/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        black: '#141414',
        white: '#EBEBEB',
        primary: '#005551',
        secondary: '#CD9945',
        tertiary: '#CBD514',
        energize: '#BB2384',
      },
      backgroundColor: {
        DEFAULT: '#EBEBEB',
        dark: '#141414',
      },
      textColor: {
        DEFAULT: '#141414',
        light: '#EBEBEB',
      },
    },
  },
  plugins: [],
} 