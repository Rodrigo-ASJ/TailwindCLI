/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./docs/*.{html,js}"],

  darkMode: 'class',
  theme: {
  
    extend: {

      fontSize: {
        '5xl': ['4.5rem', {
          lineHeight: 'auto',
          letterSpacing: 'inherit',
          fontWeight: 'inherit',
        }]
        }

    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}

