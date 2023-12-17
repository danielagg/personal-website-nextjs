module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    colors: {
      background: "#09090b",
      primary: "#10b981",
      accent: "#18181b",
      profilepic: "#27272a",
      gray: "#a1a1aa",
      button: {
        main: "#3f3f46",
        hover: "#064e3b",
      },
    },
    extend: {
      fontFamily: {
        heebo: ["Inconsolata", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.700"),
              fontFamily: ["Inconsolata", "sans-serif"],
            },
            h2: {
              color: theme("colors.gray.700"),
              fontFamily: ["Inconsolata", "sans-serif"],
            },
            p: {
              color: theme("colors.gray.700"),
              fontFamily: ["Inconsolata", "sans-serif"],
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
