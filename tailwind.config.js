/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        BG: "url('/src/assets/BG-tom.png')",
        fundo: "url('/src/assets/fundo-tom.png')",
        All: "url('/src/assets/fundo-all.png')",
        Section: "url('/src/assets/fundo-section.png')",
        equipe: "url('/src/assets/fundo-foto-equipe.png')",
        brilho1: "url('/src/assets/brilho-1.png')",
        FundoRoberta: "url('/src/assets/fundo-roberta.png')",
      },
    },
  },
  plugins: [],
};
