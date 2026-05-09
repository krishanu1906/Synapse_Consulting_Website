/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        // Synapse Brand Palette
        brand: {
          blue: "#007BFF",        // Bold Blue (primary)
          "blue-dark": "#0056B3", // Deeper blue for depth
          "blue-deep": "#003B7A", // Navy depth tone
          orange: "#FF6B00",      // Vibrant Orange (primary accent)
          "orange-dark": "#CC5500",
          "orange-light": "#FF8A33",
          cyan: "#33CCFF",        // Bright Cyan (accent)
          yellow: "#FFD43B",      // Sunny Yellow (accent)
          ink: "#0A1628",         // Deep navy ink
          "ink-mid": "#142747",
          "ink-soft": "#3A4A6B",
          slate: "#5A6B85",
          mist: "#E8F1FB",        // Pale blue background
          cloud: "#F5F9FE",       // Whisper blue
        },
        orange: {
          DEFAULT: "#FF6B00",
          dark: "#CC5500",
          light: "#FF8A33",
        },
        charcoal: {
          DEFAULT: "#0A1628",
          mid: "#142747",
          soft: "#3A4A6B",
        },
        cream: "#F5F9FE",
      },
      fontFamily: {
        display: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        body: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4.5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(10, 22, 40, 0.08)",
        brand: "0 8px 32px -8px rgba(0, 123, 255, 0.4)",
        "brand-orange": "0 8px 32px -8px rgba(255, 107, 0, 0.4)",
        hover: "0 12px 40px -8px rgba(0, 123, 255, 0.25)",
        dramatic: "0 20px 60px -15px rgba(10, 22, 40, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
