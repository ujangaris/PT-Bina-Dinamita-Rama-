/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      centere: true,
      padding: "15px",
    },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#333",
          100: "#484848",
          200: "#151515",
          300: "#111",
        },
        hijauMuda: "#10CA9C",
        accent: "#29BF08",
        abu2: "#D9D9D9",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "serif"],
      },
      backgroundImage: {
        hero: "url('./assets/img/bg-hero.png')",
        kegiatan1: "url('./assets/img/kegiatan1.jpeg')",
        kegiatan2: "url('./assets/img/kegiatan2.jpeg')",
      },
    },
  },
  plugins: [],
};
