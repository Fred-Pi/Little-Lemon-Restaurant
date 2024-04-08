/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lemon: {
          green: '#495E57',
          yellow: '#F4CE14',
          pink: '#EE9972',
          lightpink: '#FBDABB',
          grey: '#EDEFEE',
          black: '#333333',
        },
      },
      fontFamily: {
        'markazi': ['Markazi Text', 'sans-serif'],
        'karla': ['Karla Regular', 'sans-serif']
      },
      plugins: [],
    },
  }
}