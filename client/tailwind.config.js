/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F6F8F9",
          100: "#EDF1F3",
          200: "#DAE2E7",
          300: "#C5D2D8",
          400: "#B2C3CC",
          500: "#A0B5C0",
          600: "#7593A4",
          700: "#536F7E",
          800: "#394C56",
          900: "#1C262B",
          950: "#0E1315",
        },
        secondary: {
          50: "#FFFBFA",
          100: "#FEF7F5",
          200: "#FEEFEC",
          300: "#FDECE7",
          400: "#FDE4DE",
          500: "#FCDCD4",
          600: "#F6967E",
          700: "#F05028",
          800: "#AC2C0C",
          900: "#561606",
          950: "#2B0B03",
        },
      },

      fontFamily: {
        primary: ["Nunito"],
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "30%, 50%, 70%": {
            transform: "rotate(-30deg)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "rotate(30deg)",
          },
        },
      },

      animation: {
        wiggle: "wiggle 0.8s forwards ease-in-out",
      },
    },
  },
  plugins: [],
};
