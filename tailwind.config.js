module.exports = {
  mode: "jit",
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        


"primary": "#01f103",
        


"secondary": "#d9f99d",
        


"accent": "#54f2bd",
        


"neutral": "#212121",
        


"base-100": "#181818",
        


"info": "#5185F5",
        


"success": "#ffffff",
        


"warning": "#F8C163",
        


"error": "#ED2B21",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
