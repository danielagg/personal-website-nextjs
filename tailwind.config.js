module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.700"),
              fontFamily: ["Heebo", "sans-serif"],
            },
            h2: {
              color: theme("colors.gray.700"),
              fontFamily: ["Heebo", "sans-serif"],
            },
            p: {
              color: theme("colors.gray.700"),
              fontFamily: ["Heebo", "sans-serif"],
              overflowWrap: "break-word",
            },
          },
        },
        lg: {
          css: {
            li: {
              padding: 0,
              margin: 0,
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
