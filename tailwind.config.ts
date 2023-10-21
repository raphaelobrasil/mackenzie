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
    },
  },
  plugins: [],
}
export default config
