/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapeamento da nova paleta (Teal) para as chaves antigas
        'creme-papel': '#FFFFFF',   // Branco (Fundo principal)
        'rosa-aquarela': '#E6F1F1', // Teal muito claro (Seções secundárias e cards)
        'terracota': '#00827f',     // Teal primário (Botões, links e ênfases)
        'verde-musgo': '#3d3d3d',   // Cinza escuro (Títulos e textos)
        'pessego-suave': '#3d767d', // Teal escuro (Hover states e gradientes)
        'dourado': '#00827f',       // Teal primário (Botões CTA e ícones ativos)

        // Definições explícitas da nova paleta para uso futuro
        'creme-puro': '#FFFFFF',
        'ambar': '#E6F1F1',
        'laranja-quente': '#00827f',
        'tijolo': '#00827f',
        'cacau': '#3d3d3d',
        'baunilha': '#3d767d',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
