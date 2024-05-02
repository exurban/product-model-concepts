import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              color: theme('colors.rose.600'),
              fontWeight: theme('fontWeight.normal'),
              borderColor: theme('colors.rose.500'),
              borderBottomWidth: theme('borderWidth.2'),
            },
            h3: {
              color: theme('colors.rose.500'),
              fontWeight: theme('fontWeight.normal'),
            },
            h4: {
              color: theme('colors.rose.500'),
              fontWeight: theme('fontWeight.normal'),
            },
            h5: {
              color: theme('colors.rose.500'),
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
