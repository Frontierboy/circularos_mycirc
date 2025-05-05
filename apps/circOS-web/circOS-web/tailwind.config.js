/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'firebase-orange': '#F5820D',
        'dark-grey-slate': '#334155',
        'gemini-purple': '#8b5cf6'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },
      boxShadow: {
        duo: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
        'duo-hover': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};