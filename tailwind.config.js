/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router projects
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Pages Router projects
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBg1: "var(--bg-1)",
        colorBg2: "var(--bg-2)",
        colorBgSurface: "var(--bg-surface)",
        colorAccent1: "var(--color-accent-1)",
        colorAccent2: "var(--color-accent-2)",
        colorBgHeader: "var(--bg-header)"
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
      // You can add more custom extensions here, like screens, spacing, etc.
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins you are using, e.g., require('daisyui')
  ],
};
