/** @type {import('tailwindcss').Config} */
import img from './src/imagens/'
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend:{
      backgroundImage: {
        'Desktop5': "url('./src/imagens/Desktop5.png')",
      },
      colors: {
        dark: {
          100: '#212A3E',
          200: '(bg-slate-500)'
        },
        light:{
          100: '#FFFFFF',
        }
      }
    },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
  },
plugins: [
  
  // ...
]
}
