/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('../app/image/imgwallpaper.jpg')",
        'imgpersonnage1': "url('../app/image/imgpersonnage1.jpg')",
        'imgpersonnage2': "url('../app/image/imgpersonnage2.png')",

        'img-cg1': "url('../app/image/pg1.jpg')",
        'img-cg2': "url('../app/image/pg2.jpg')",
        'img-cg3': "url('../app/image/pg3.jpg')",
        'img-cg4': "url('../app/image/pg4.jpg')",
        'img-cg5': "url('../app/image/pg5.jpg')",
        'img-cg6': "url('../app/image/pg6.jpg')",

        'img-logo': "url('../app/image/Logo.png')",
        'img-sg2': "url('../app/image/sg2.jpeg')",
        'img-sg3': "url('../app/image/sg3.jpeg')",
        'img-sg4': "url('../app/image/sg4.jpeg')",
        'img-sg5': "url('../app/image/sg5.jpeg')",
        'img-sg6': "url('../app/image/sg6.jpeg')",

        'logo': "url('../app/image/Logo.png)",
        'img-ab1': "url('../app/image/About.png')",
       }),
      fontFamily: {
        Irish: ["Irish Grover", "system-ui"],
        Embed : ["Passions Conflict", "cursive"],
        Hammersmith : ["Hammersmith One", "sans-serif"],
      },
      
    },
  },
  plugins: [],

}

