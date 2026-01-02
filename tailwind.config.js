/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* ---------------- CUSTOM COLORS ---------------- */
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1', // Primary Indigo
          600: '#4f46e5',
          700: '#4338ca',
        },
        slate: {
          950: '#020617', // Deepest background for dark elements
        },
      },

      /* ---------------- FONTS ---------------- */
      // Playfair for headings (Luxury/News vibe)
      // Plus Jakarta Sans for UI (Modern/Clean)
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },

      /* ---------------- MODERN SHADOWS ---------------- */
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.05)',
      },

      /* ---------------- BORDER RADIUS ---------------- */
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem', // Used for those super-round modal corners
      },

      /* ---------------- ANIMATIONS ---------------- */
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
    },
  },

  // Typography plugin install karna zaroori hai for article content
  // Command: npm install -D @tailwindcss/typography
  plugins: [
    require('@tailwindcss/typography'),
  ],
};