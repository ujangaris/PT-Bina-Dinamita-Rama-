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

### Setup colors , font & background image

      Todo:
    1.  index.css
        - import url font oswald & roboto
        - setup font
    2.  tailwind.config.css
        - setup colors
        - setup font
        - setup screen
        - setup container
        - noted : setup disini dibuat agar menjadi default dan dapat diterapkan di page manapun
    3.  src/img/bg-hero.png
    4.  component/Hero.jsx
        - rafc
        - styling page hero
        - pasang background
    5.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - pada halaman web akan ada background dengan tulisan ditengahnya
        - jika di kecilkan pada layar apapun tulisaan akan berda ditengah

### Navbar active

      Todo:
    1.  buat 3 page yakni:
        - about.jsx
        - blog.jsx
        - contact.jsx
        Noted: pasang id pada setiap page agar scroll dapat berfungsi
    2.  Nav.jsx
        - rafc
        - buat object untuk menu yang berisikan name, target & offset
          tampung kedalam varible links
        - pasang properti containerStyles & gunakan pada className
          Dengan menggunakan prop containerStyles, Anda dapat mengontrol
          penampilan dari container tersebut, seperti warna latar belakang,
          ukuran, posisi, atau properti gaya lainnya yang ingin Anda terapkan.
        - gunakan map untuk perulangan serta pasang index
        - import dan pasang Link dari react-scroll untuk scrolling page
    3.  Header.jsx
        - rafc
        - import dan pasang Nav
        - styling dengan menggunakan props
    4.  Footer.jsx
        - rafc
    5.  App.jsx
        - import dan pasang:
            - Header
            - About
            - Blog
            - Contact
            - Footer
    6.  index.css
        - styling untuk warna menyala pada menu ketika berada pada section yang dituju
        - .active {
            @apply text-accent;
          }
    7.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - akan ada menu pada head dari halaman web
        - jika di klik setiap menu akan menuju section yang di klik
          contoh klik about halaman akan scroll ke section/bagian about dan seterusnya
