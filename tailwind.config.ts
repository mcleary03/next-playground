import type { Config } from "tailwindcss"
// import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

const config: Config = {
  purge: [
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          purple: {
            DEFAULT: "var(--accent-purple-light)",
            light: "var(--accent-purple-light)",
            dark: "var(--accent-purple-dark)",
          },
          blue: {
            DEFAULT: "var(--accent-blue-light)",
            light: "var(--accent-blue-light)",
            dark: "var(--accent-blue-dark)",
          },
        },
        primary: {
          text: "var(--primary-text)",
          bg: "var(--primary-bg)",
        },
        secondary: {
          text: "var(--secondary-text)",
          bg: "var(--secondary-bg)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--primary-text)",
            a: {
              fontWeight: "bold",
              color: "var(--accent-purple-light)",
              borderBottom: "2px solid var(--bg-primary-bg)",
              "&:hover": {
                color: "var(--accent-blue-light);",
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              color: "var(--accent-purple-light)",
            },
            code: {
              color: "var(secondary-text)",
            },
            pre: {
              color: "rgb(var(--color-heading))",
              backgroundColor: "var(--secondary-bg)",
            },
          },
        },
      },
    },
  },
  plugins: [
    typography
  ],
}

export default config;
