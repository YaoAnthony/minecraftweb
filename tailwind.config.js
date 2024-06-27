module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(31, 41, 55, 1) 100%)',
      },
      fontFamily: {
        minecraft: ['MinecraftFont', 'sans-serif'],
      },
      boxShadow: {
        'box': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        product: "rgba(0,0,0,0.08) 0 4px 15px",
        'inner': "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}
