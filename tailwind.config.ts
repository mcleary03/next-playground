import type { Config } from "tailwindcss"
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

const config: Config = {
  purge: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.neutral[800],
        secondary: colors.slate[200],
      },
    },
  },
  plugins: [
    typography
  ],
}

export default config;
