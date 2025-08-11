// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        moveGradient: {
          '0%': { backgroundPosition: '50% -20%' },
          '50%': { backgroundPosition: '55% -15%' },
          '100%': { backgroundPosition: '50% -20%' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50px)' },
        },
        waveSlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-20px)' },
        },
      },
      animation: {
        gradientMove: 'moveGradient 8s ease-in-out infinite',
        wave: 'wave 15s ease-in-out infinite alternate',
        waveSlow: 'waveSlow 30s ease-in-out infinite alternate',
      },
      // Custom utilities
      spacing: {
        'full': '100%',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-wave': {
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          lineHeight: '0',
        },
        '.custom-wave img': {
          display: 'block',
          width: '100%',
          height: 'auto',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
