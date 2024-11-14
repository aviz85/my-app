import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                primary: "#2563eb",
                secondary: "#7c3aed",
                border: "hsl(var(--border))",
                background: "hsl(var(--background))",
            },
            fontFamily: {
                heebo: ['Heebo', 'sans-serif'],
            },
        },
    },
} satisfies Config;

export default config;
