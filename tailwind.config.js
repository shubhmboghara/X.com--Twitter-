// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["*.html"],
//     theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        max1400: { raw: '(max-width: 1400px)' }
      },  
    },
  },
  plugins: [],
}


