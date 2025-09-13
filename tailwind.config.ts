import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'topbar': '#2F5233',
        'navbar': '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config
