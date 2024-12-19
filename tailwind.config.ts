import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans Mono", "sans-serif", "system-ui"],
      },
    },
  },
} satisfies Config;
