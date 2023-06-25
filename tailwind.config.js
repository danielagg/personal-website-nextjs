module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    colors: {
      background: {
        dark: "#020617",
        light: "#f1f5f9",
      },
      primary: {
        dark: "#38BDF8",
        light: "#1d4ed8",
      },
      accent: {
        dark: "#03081f",
        light: "#e9edf2",
      },
      gray: {
        dark: "#64748B",
        light: "#64748B",
      },
      button: {
        dark: "#1e293b",
        light: "#1e293b",
        "dark-hover": "#334155",
        "light-hover": "#1d4ed8",
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
