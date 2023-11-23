/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundColor: {
        'card': '#D9D9D9',
        'button': '#2E2F68',
      },
    },
    boxShadow: {
      'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },

  },
  plugins: [],
}

