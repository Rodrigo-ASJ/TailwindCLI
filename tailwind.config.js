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
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),

  ],
}

