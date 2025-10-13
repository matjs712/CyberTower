import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Variables CSS personalizadas
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "primary-light": "var(--primary-light-color)",
        "secondary-light": "var(--secondary-light-color)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Ejemplo de sidebar y otros
        sidebar: "var(--sidebar)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        "sidebar-border": "var(--sidebar-border)",
        "sidebar-ring": "var(--sidebar-ring)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
      fontFamily: {
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        },
      },
    },
  },
  plugins: [animate],
};

export default config;
