
module.exports = {
content: [
  "./App.{js,jsx,ts,tsx}", 
  "./src/paginas/*.{js,jsx,ts,tsx}",
  "./src/componentes/*.{js,jsx,ts,tsx}",
  "./src/imagens/*.{js,jsx,ts,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      backgroundImage:{
        'mulherCell':"url('../../assets/moca.jpg')"
      }
    },
  },
  plugins: [],
}
