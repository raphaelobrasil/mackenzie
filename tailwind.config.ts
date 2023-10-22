import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-l': '#edf2f7',
        'blue-m': '#e3ebf2',
        'blue-d': '#dde4eb',
        'red-m': '#ea2a2e',
        'grey-m': '#718096',
      },
      inset: {
        '45': '45%',
      },
      backgroundImage: {
        'close-b': "url('/imgs/close.png')",
        'close-h': "url('/imgs/closeHover.png')",
        'kebab-b': "url('/imgs/kebab.png')",
        'kebab-h': "url('/imgs/kebabHover.png')",
      },
      boxShadow: {
        sideBar: '1px 0px 10px 0px rgba(0,0,0,0.75)',
      },
      screens: {
        smx: '300px',
        sm: '370px',
        mdx: '506px',
      },
    },
  },
  plugins: [],
}
export default config
