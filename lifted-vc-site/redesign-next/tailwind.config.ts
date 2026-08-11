import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pure canvas
        ink: {
          900: "#0A0A0A",
          800: "#1D1D1F",
          700: "#2B2B2E",
          500: "#6E6E73",
          300: "#A1A1A6",
          100: "#D2D2D7",
          50: "#F5F5F7",
        },
        // Single accent
        accent: {
          DEFAULT: "#0047AB",
          hover: "#003A8C",
        },
        canvas: {
          white: "#FFFFFF",
          black: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        // Display scale
        "display-xl": ["80px", { lineHeight: "1.05", letterSpacing: "-0.022em", fontWeight: "700" }],
        "display-lg": ["64px", { lineHeight: "1.07", letterSpacing: "-0.020em", fontWeight: "700" }],
        "display-md": ["48px", { lineHeight: "1.08", letterSpacing: "-0.018em", fontWeight: "700" }],
        "display-sm": ["36px", { lineHeight: "1.1", letterSpacing: "-0.016em", fontWeight: "600" }],
        // Body scale
        "body-xl": ["24px", { lineHeight: "1.42", letterSpacing: "-0.008em", fontWeight: "400" }],
        "body-lg": ["20px", { lineHeight: "1.5", letterSpacing: "-0.005em", fontWeight: "400" }],
        "body-md": ["18px", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["15px", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        // Eyebrow / label
        eyebrow: ["12px", { lineHeight: "1.3", letterSpacing: "0.14em", fontWeight: "600" }],
      },
      maxWidth: {
        column: "720px",
        wide: "1120px",
      },
      spacing: {
        "section-y": "120px",
        "section-y-mobile": "64px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.06)",
        "card-lg": "0 8px 40px rgba(0, 0, 0, 0.08)",
      },
      backdropBlur: {
        nav: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
