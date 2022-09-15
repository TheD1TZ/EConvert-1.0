/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'pBlue': '#6db5fd',
          'pPurple': '#a67dff',
          'pPink': '#ff7b9c',
          'pRed': '#ff6961',
          'pOrange': '#ff9c7b',
          'pYellow': '#ffd67b',
          'pGreen': '#00dfb1',
          'pTeal': '#7bffd9',
          'pCyan': '#7bffff',
          'pGray': '#d4d1d0',
          'pGrayDark': '#1b1f24',
          'pBlack': '#121418',

          'pdBlue': '#4ea1fd',
          'pdRed': 'rgba(255,46,35,0.7)',
          'pdPurple': '#c699fc',
          'pdOrange': '#fdcf54',
          'pdYellow': '#f6fb98',
          'pdGreen': '#00c199',
          'pdGray' : '#bcc0c6'

        }
    },
  },
  plugins: [],
}