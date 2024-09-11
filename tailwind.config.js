/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        secondary: 'var(--secondary)',
        primary: 'var(--primary)',
        green: 'var(--green)',
        yellow: 'var(--yellow)',
        red: 'var(--red)',
        highlight: 'var(--highlight)',
        shadow: 'var(--shadow)'
      },
    
    
      fontFamily: {
        sans: ['Tilt Warp', 'Arial', 'sans-serif'],
        mono: ['Poppins', 'Times New Roman', 'Monaco', 'monospace' ]
      }
    },
  },
  plugins: [],
}