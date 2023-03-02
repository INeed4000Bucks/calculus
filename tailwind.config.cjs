/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: { 
      'phn': [{'min':'200px', 'max':'480px'}],
      'tbl': [{'min':'481px', 'max':'899px'}],
      'sm': [{'min':'900px', 'max':'1099px'}],
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        {'min': '1100px', 'max': '1299px'},
      ],
      'lg': [{'min': '1300px', 'max':'1699px'}],
      'xl': [{'min': '1700px'}],
    },
    extend: {
      colors:{
        'mainbg': '#0f172a',
        'maintxt':'#94a3b8',
        'mainhead': '#f8fafc',
        'mainbox': '#1e293b',
        'mainequiv': '#a5b4fc',
        'mainhighlight': '#f472b6',
        'mainborder': '#353f4f',
        'fadedpink': '#f472b61a',
        'fadedblue': '#60a5fa1a'
      },
    },
    fontFamily: {
      'main': ['FiraCodeM', 'ui-monospace', 'SFMono-Regular'],
    },
    backgroundSize: {
      '1': '1.07px 1.07px',
      '2': '2.07px 2.07px',
      '3': '3.07px 3.07px',
      '4': '4.07px 4.07px',
      '5': '5.07px 5.07px',
      '6': '6.07px 6.07px',
      '7': '7.07px 7.07px',
      '8': '8.07px 8.07px',
      '9': '9.07px 9.07px',
      '10': '10.07px 10.07px',
      '11': '11.07px 11.07px',
      '12': '12.07px 12.07px',
      '15': '15.07px 15.07px',
      '18': '18.07px 18.07px',
      '20': '20.07px 20.07px',
      '25': '25.07px 25.07px',
      '30': '30.07px 30.07px',
      '35': '35.07px 35.07px',
      '40': '40.07px 40.07px',
      '45': '45.07px 45.07px',
      '50': '50.07px 50.07px',
    }
  },
  plugins: [],
}
