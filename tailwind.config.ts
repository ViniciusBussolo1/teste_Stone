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
        darkGray3: '#D7E0EB',
        mediumGray: '#6E7E90',
        mediumGray2: '#8C9CAD',
        mediumGray3: '#D7E0EB',
        green: '#008B57',
        stoneGreen: '#00AB63',
      },
    },
  },
  plugins: [],
}
export default config
