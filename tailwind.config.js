/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightbluebg': 'rgba(225, 247, 245, 1)',  
        'mainbluebg': 'rgba(59, 130, 246, 1)',    
        'mainbluetext': 'rgba(59, 130, 246, 1)', 
        'verydarktext':'rgba(51, 65, 85,1)' ,
        'backgray':'rgba(236,238,239,1)',
        'nightbg':'rgba(14,35,56,1)'
      }
    },
  },
  plugins: [],
}