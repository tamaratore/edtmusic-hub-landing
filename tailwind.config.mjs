/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  safelist: ['text-brand-orange'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0C',
          raised: '#17151A',
          line: '#2A2730',
        },
        paper: {
          DEFAULT: '#F7F4EE',
        },
        // paleta oficial da assinatura "Prod. Eder Machado" (print/imagem/images.png)
        brand: {
          orange: '#FF6A00',
          orangeDark: '#DA5601',
        },
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
