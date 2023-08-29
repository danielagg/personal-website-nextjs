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
        light: "#f5f5f4",
      },
      primary: {
        dark: "#38BDF8",
        light: "#44403c",
      },
      accent: {
        dark: "#03081f",
        light: "#edeceb",
      },
      profilepic: {
        dark: "#0f172a",
        light: "#e8e8e8",
      },
      gray: {
        dark: "#64748B",
        light: "#71717a",
      },
      button: {
        dark: "#1e293b",
        light: "#1e293b",
        "dark-hover": "#334155",
        "light-hover": "#cc0e9c", //"#44403c",
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
