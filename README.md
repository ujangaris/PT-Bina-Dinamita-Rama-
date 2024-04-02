# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Pakage install:

    npm i framer-motion react-countup react-scroll @types/react-scroll react-icons react-responsive swiper

### install & setup tailwind css

    Todo:
    1.  Docs: https://tailwindcss.com/docs/guides/vite
    2.  npm install -D tailwindcss postcss autoprefixer
    3.  npx tailwindcss init -p
    4.  pada file tailwind.config tambahkan code:
            content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
            ],
    5.  index.css tambahkan code:
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
    6.  App.jsx
        - styling dengan tailwind
    7. pengujian pada browser
        -jalankan kembali server
            npm run dev
        - akan ada tulisan merah ditengah dengan background purple
