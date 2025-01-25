// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        colorCycle: {
          '0%': { backgroundColor: 'rgb(213, 197, 255)' }, // Light Purple
          '33%': { backgroundColor: 'rgb(255, 175, 175)' }, // Light Red
          '66%': { backgroundColor: 'rgb(175, 255, 175)' }, // Light Green
          '100%': { backgroundColor: 'rgb(213, 197, 255)' }, // Back to Light Purple
        },
      },
      animation: {
        colorCycle: 'colorCycle 60s infinite', // 10s duration, infinite loop
      },
      boxShadow: {
        'inner-outer': '0 4px 6px #8BA3E1, inset 0 2px 4px #8BA3E1',
      },
      rotate: {
        '10': '10deg',
      },
      
    },
  },
  plugins: [],
};
