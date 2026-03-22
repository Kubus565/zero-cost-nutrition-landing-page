/** @type {import('tailwindcss').Config} */
module.exports = {
  // UWAGA: Ścieżki muszą prowadzić do Twoich plików layouts
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#7ED956',
        'primary-green-hover': '#6cc747',
        'bg-light': '#FFFFFF',
        'bg-alt': '#F9FBF9',
        'text-dark': '#1A1A1A',
        'text-muted': '#4A4A4A',
        'border-color': '#EAEAEA',
      },
      fontFamily: {
        // To rozwiąże błąd "font-body class does not exist"
        'body': ['DM Sans', 'sans-serif'],
        'heading': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0,0,0,0.05)',
        'md': '0 10px 30px rgba(0,0,0,0.08)',
        'cta': '0 4px 15px rgba(126, 217, 86, 0.3)',
        'cta-hover': '0 6px 20px rgba(126, 217, 86, 0.4)',
      },
      maxWidth: {
        'container': '1100px',
      }
    },
  },
  plugins: [],
}