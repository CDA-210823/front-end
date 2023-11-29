/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./view/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend:
            {
                colors: {
                    'resetPassword': "#4F89E1",
                },
                backgroundColor: {
                    'card': '#D9D9D9',
                    'button': '#2E2F68',
                    'detailsProduct': "#DCDCE7",
                },
            },
        boxShadow: {
            'boxShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        },
    },

    plugins: [],
}