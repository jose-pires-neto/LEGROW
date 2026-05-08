import { colors } from "./colors";
import { spacing } from "./spacing";

/** @type {import('tailwindcss').Config} */
export const legrowPreset = {
  darkMode: "class",
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'premium': '0 20px 40px -15px rgba(0,0,0,0.05)',
      },
      backdropBlur: {
        'glass': '10px',
      }
    },
  },
  plugins: [],
};
