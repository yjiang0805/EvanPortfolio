/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#1C1C1C",
        "accent-2": "#DADDD8",
        "accent-3": "#ECEBE4",
        "accent-4": "#EEF0F2",
        "accent-5": "#FAFAFF",
      },
      fontFamily: {
        beaufort: ["Beaufort for LOL", "sans-serif"],
        spiegel: ["Spiegel", "sans-serif"],
      },
    },
  },
  plugins: [],
};
