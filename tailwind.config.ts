import type { Config } from "tailwindcss"
import colors from 'tailwindcss/colors'

const config: Config = {
  purge: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/*.css"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate[950],
        secondary: colors.slate[200],
      },
    },
  },
  plugins: [],
}

export default config;
