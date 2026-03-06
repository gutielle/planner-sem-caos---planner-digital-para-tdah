/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./Members.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Mapeamento da nova paleta (Pôr do Sol Dourado) para as chaves antigas
        'creme-papel': '#FBF6EE',   // Creme Puro (Fundo principal)
        'rosa-aquarela': '#F4C97A', // Âmbar (Seções secundárias e cards)
        'terracota': '#9C3D1A',     // Tijolo (Links e ênfases)
        'verde-musgo': '#3A2A1A',   // Cacau (Títulos e textos)
        'pessego-suave': '#F0D4B0', // Baunilha (Hover states e gradientes)
        'dourado': '#E07B39',       // Laranja Quente (Botões CTA e ícones ativos)
        
        // Definições explícitas da nova paleta para uso futuro
        'creme-puro': '#FBF6EE',
        'ambar': '#F4C97A',
        'laranja-quente': '#E07B39',
        'tijolo': '#9C3D1A',
        'cacau': '#3A2A1A',
        'baunilha': '#F0D4B0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
