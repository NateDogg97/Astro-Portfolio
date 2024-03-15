/** @type {import('tailwindcss').Config} */
import _presets from "./src/utils/_presets";

import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  content: ["./src/**/*.{astro,tsx,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        varela: ['"Varela Round"', "sans-serif"],
        sourceCode: ['"Source Code Pro"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        "custom-purple": "#833bca",
        primary: "#6919FF",
        neutrals: {
          900: "#060918",
          800: "#161A2C",
          700: "#23263B",
          600: "#2E364F",
          500: "#4D5775",
          400: "#6F7A9B",
          300: "#96A1C0",
          200: "#C7D0E5",
          100: "#F0F2FE",
          50: "#FFFEF9",
        },
        light: "#fafafa",
        dark: "#222222",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      backgroundImage: {
        "b-builder": "url('/img/hero-pattern.svg')",
        "insta-plugin": "url('/img/footer-texture.png')",
        "ers-template": "url('/img/footer-texture.png')",
        "realted-items": "url('/img/footer-texture.png')",
        "auto-booker": "url('/img/footer-texture.png')",
        "witching-hour": "linear-gradient(to right, #240b36, #c31432);",
        "rainbow-blue": "linear-gradient(to right, #00f260, #0575e6);",
        "dark-night": "linear-gradient(to right, #ba8b02, #181818);",
        instagram: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);",
        atlas: "linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);",
        "bloody-mary": "linear-gradient(to right, #ff512f, #dd2476);",
        "radial-highlight":
          "radial-gradient(circle at 50% 100%, rgba(46, 54, 79, 0.5) 1%, rgba(6, 9, 24, 1) 100%)",
      },
    },
    textShadow: {
      sm: "1px 1px 2px var(--text-shadow)",
      DEFAULT:
        "0 0 0.25em rgb(255, 255, 255, 0.3), 0 0 0.5em var(--text-shadow);",
      lg: "4px 4px 8px var(--text-shadow)",
      xl: "4px 4px 16px var(--text-shadow)",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    plugin(
      function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            "bg-radient": (value) => ({
              "background-image": `radial-gradient(${value},var(--tw-gradient-stops))`,
            }),
          },
          { values: theme("radialGradients") }
        );
      },
      {
        theme: {
          radialGradients: _presets(),
        },
      }
    ),
  ],
  typography: ({ theme }: { theme: (key: string) => string }) => ({
    primary: {
      css: {
        "--tw-prose-links": theme("colors.primary"),
        "--tw-prose-invert-links": theme("colors.primary"),
      },
    },
    neutrals: {
      css: {
        "--tw-prose-body": theme("colors.neutrals[300]"),
        "--tw-prose-headings": theme("colors.neutrals[50]"),
        "--tw-prose-lead": theme("colors.neutrals[400]"),
        "--tw-prose-bold": theme("colors.neutrals[100]"),
        "--tw-prose-counters": theme("colors.neutrals[400]"),
        "--tw-prose-bullets": theme("colors.neutrals[600]"),
        "--tw-prose-hr": theme("colors.neutrals[700]"),
        "--tw-prose-quotes": theme("colors.neutrals[100]"),
        "--tw-prose-quote-borders": theme("colors.neutrals[600]"),
        "--tw-prose-captions": theme("colors.neutrals[400]"),
        "--tw-prose-kbd": theme("colors.neutrals[100]"),
        "--tw-prose-code": theme("colors.neutrals[100]"),
        "--tw-prose-pre-code": theme("colors.neutrals[300]"),
        "--tw-prose-pre-bg": "rgb(0 0 0 / 50%)",
        "--tw-prose-th-borders": theme("colors.neutrals[600]"),
        "--tw-prose-td-borders": theme("colors.neutrals[700]"),
      },
    },
  }),
} satisfies Config;

export default config;
