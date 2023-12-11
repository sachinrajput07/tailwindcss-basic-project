/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*html"],
  theme: {
    screens:{
     'sm':{'max':'1020px'},
     'lg':{'min':'1020px'}
    },
    extend: { },
  },
  plugins: [],
}

