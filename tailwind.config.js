/** @type {import('tailwindcss').Config} */
// module.exports = {
  
export default {
  content: [
    './src/**/*.tsx',
		'./index.html'
  ],
  theme: {
    extend: {
      
      // fonts:{

      // },
      backgroundImage:{
        'city':'url(../assets/img/citybg.jpg) ',
        'city2': 'url(../assets/img/citybg2.jpg)'

      },

      colors : {
        background: '#242424',
      }, 
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      
    },
  },
  plugins: [],
}

