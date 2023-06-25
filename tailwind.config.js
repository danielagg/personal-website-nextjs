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
        light: "#cbd5e1",
      },
      primary: {
        dark: "#38BDF8",
        light: "#1e40af",
      },
      gray: {
        dark: "#64748B",
        light: "#64748B",
      },
      button: {
        dark: "#1e293b",
        light: "#94a3b8",
        "dark-hover": "#334155",
        "light-hover": "#64748b",
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
