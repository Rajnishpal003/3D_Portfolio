/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mona Sans"', 'sans-serif'],
      },
      colors: {
        white: {
          50: '#d9ecff',
        },
        black: {
          50: '#1c1c21',
          100: '#0e0e10',
          200: '#282732',
        },
        blue: {
          50: '#839cb5',
          100: '#2d2d38',
        },
      },
      backgroundImage: {
        'gradient-radial-light': 'radial-gradient(circle, #e5e5e5 0%, #fff 100%)',
      },
    },
  },
  plugins: [],
};
