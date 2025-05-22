/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
    // Exclude node_modules and other unnecessary folders
    '!./node_modules',
    '!./**/node_modules',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
