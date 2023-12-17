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
        dark: "#09090b",
        light: "#f5f5f4",
      },
      primary: {
        dark: "#10b981",
        light: "#44403c",
      },
      accent: {
        dark: "#18181b",
        light: "#edeceb",
      },
      profilepic: {
        dark: "#27272a",
        light: "#e8e8e8",
      },
      gray: {
        dark: "#a1a1aa",
        light: "#71717a",
      },
      button: {
        dark: "#3f3f46",
        light: "#1e293b",
        "dark-hover": "#064e3b",
        "light-hover": "#128c7c",
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
