/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        "bg": "#000000",
        "text": "#ffffff"
      },
      fontFamily: {
        "betaron": "Betaron Regular",
        "neuebold": "Neue Bold",
        "neueroman": "Neue Roman",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(237, 128, 71, 1) 0%, rgba(225, 103, 98, 1) 28%, rgba(184, 100, 149, 1) 69%, rgba(63, 117, 233, 1) 100%)',
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
    },
  },
  plugins: [],
}

