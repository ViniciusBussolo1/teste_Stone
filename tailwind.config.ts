import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        mask: 'url(/Mask.svg)',
      },
      colors: {
        darkGray: '#2E3742',
        darkGray2: '#45505E',
        mediumGray2: '#8C9CAD',
        green: '#008B57',
      },
    },
  },
  plugins: [],
}
export default config
