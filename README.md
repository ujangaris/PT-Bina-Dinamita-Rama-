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

### Navbar Device mobile & Dekstop

      Todo:
    1.  src/assets/img/logo.png
        siapkan image logo dengan format png
    2.  src/components/MobileNav.jsx
        - rafc
        - pasang props containerStyles
        - pada className pasang props containerStyles
    3.  Header.jsx
        - Logo
        - mobile nav - hidden on large device
            - styling dengan containerStyles
        - dekstop nav - hidden on small device
    4.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - perkecil dan perbesar ukuran layar,
          navbar menu akan ada yang mengilang dan muncul

### Navbar active ketika di scroll

      Todo:
    1.  Header.jsx
        - pasang hook untuk header active
        - pasang useEffect
            - buat function handleScroll
                - detect scroll
                - add scroll event
                - clear scroll event
        - pada className pasang headerActive sebagai logic
        - pada class juga dipasang opacity agar ketika di scroll akan transparan
        - pasang console.log untuk melihat/mentest headerActive
          siapkan image logo dengan format png
    2.  Nav.jsx
        - update offset agar tidak scroll terlalu jauh
    4.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - klik kanan pada browser kemudian pilih inspect element
        - pada inspect element pilih console
        - klik menu about dkk
        - jika pada console tertulis true maka setup yang kita lakukan berhasil
        - perhatikan juga pada navbar akan ada perubahan ukuran
          dan ada transisi transparan saat halaman di scroll

### perbaiki Navbar active ketika di scroll

      Todo:
    1.  Nav.jsx
        - update data object pada links offset agar tidak tabrakan
    2.  Header.jsx
        - perbaiki ukuran tinggi header menjadi 100px dan ketika di scroll menjadi 80px

### Tampilan menu pada device mobile

      Todo:
    1.  MobileNav.jsx
        - copy code dari Nav dan pastekan
    2.  Header.jsx
        - styling MobileNav.jsx
    3.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - pada browser coba ke device mobile akan ada menu dengan tampilan mobile

### Togle menu mobile

      Todo:
    1.  MobileNav.jsx
        - perbaikan nilai offset
    2.  Header.jsx
        - import dan pasang MdMenu & MdOutlineClose dari react-icon
        - pasang hooks openNav untuk logic nya
        - pasang logic openNav pada class navMobile
          ini bertujuan ketika togle menu di klik akan menyembunyikan semua menu
        - hide/open menu button
          pasang openNav sebagai logic untuk merubah tampilan dri togle menu
          jika menu tampil maka togle jd x jika menu hilang maka togle jadi hamburger togle
    3.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - pada browser coba ke device mobile akan ada menu dengan tampilan mobile
        - kemudian klik togle menu, akan ada menu yang tampil dan togle menu akan berubah jd x
        - jika di klik sekali lagi menu akan hilang dan togle menjadi togle humberger

### Menu send cv & language

      Todo:
    1.  tailwind.config.js
        - tambahkan colors hijauMuda
    2.  persiapkan image/icon bendera indonesia, english dan icon send
        - src/assets/img/flag-english.png
        - src/assets/img/flag-indonesia.png
        - src/assets/img/flag-mdi-file-send-outline.png
    3.  Nav.jsx
        - tambahkan className hover:text-accent agar ketika di hover akan menampilkan text-accent
    4.  Header.jsx
        - import dan pasang semua image/icon
        - pasang hooks language untuk logic pilihan language nya
        - pasang hooks showDropdown untuk logic dropdown nya
        - buat  function Toggle dropdown visibility
          ini bertujuan ketika dropdown di pilih akan langsung menghilang
        - buat function select language
            - pasang function Togle dropdown visibility
        - send cv & language
            - Dropdown content
    5.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - pada browser coba responsive device dari web yang dibuat
        - pada menu home, about dll jika di sorot dengan cursor akan ada hover

### membuat menu kedalam 2 bahasa

      Todo:
    1.  NavEnglish.jsx
        - ini rubah dari Nav.jsx saja
    2.  NavIndonesia.jsx
        - ini copas code dari Nav.jsx saja kemudian modifikasi
    3.  MobileNavEnglish.jsx
        - ini rubah dari MobileNav.jsx saja
        - pada activeClass gunakan isi dengan active2
    4.  MobileNavIndonesia.jsx
        - ini copas code dari MobileNav.jsx saja kemudian modifikasi
        - pada activeClass gunakan isi dengan active2
    5.  index.css
        - tabahkan style active2
          ini agar menu  memiliki hover pada tampilan mobile
    6.  Header.jsx
        - pada hooks language buat agar data language tersimpan kedalam localstorage
        - pada select language pasang localstorage yang kita pasang td
        - buat logic pada dekstop nav - hidden on small device
          dimana jika pada localstorage terbaca language = indonesia
          maka menu indonesi yang akan tampil dan begitupun sebaliknya
        - buat logic pada mobile nav - hidden on large device
          dimana jika pada localstorage terbaca language = indonesia
          maka menu indonesi yang akan tampil dan begitupun sebaliknya
    7.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - pada browser coba klik menu language/icon bendera
        - jika dipilih indonesi maka menu akan menampilkan menu indonesia
          begitu pun sebaliknya
        - meski di refresh menu akan bertahan pada menu language yang dipilih

### Hero section

      Todo:
    1.  src/assets/img/bg-hero.png
        - siapkan asset image untuk background hero
    2.  Hero.jsx
        - styling halaman hero
        - pelapis image agar ada opacity dari warna hitam sekitar 70%
        - kasih nilai z index untuk pelaspis sebanyak 10, agar berada diatas image
        - untuk tulisan kasih z index 20 harus berda diatas pelapis image
    3.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - pada browser coba klik menu language/icon bendera
        - jika dipilih indonesi maka menu akan menampilkan menu indonesia
          begitu pun sebaliknya
        - meski di refresh menu akan bertahan pada menu language yang dipilih

### Footer section

      Todo:
    1.  src/assets/img/logo-putih.png
        - siapkan asset image untuk logo footer
    2.  Footer.jsx
        - gunakan class container & mx-auto agar jarak kanan kiri sama dengan header
        - styling halaman footer
        - agar menu dapat di croll otomatis buat copy object links yang ada pada  NavEnglish.jsx
        - pasang map untuk melakukan perulangan ikuti langkah seperti pada NavEnglish.jsx
    3.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - scroll sampai ke bagian paling bawah footer berada

### Contact section

      Todo:
    1.  src/assets/img/image-contact.png
        - siapkan asset image untuk image contact
    2.  FormContact.jsx
        - rafc
        - styling form contact
        - pasang z index agar mengambang/berada di dimensi berbeda 1 tingkat imagenya
    3.  Footer.jsx
        - import dan pasang FormContact
    4.  Contact.jsx
        - styling contact
        - import dan pasang Footer
        - peta kita hide terlebih dahulu
    5.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - klik menu contact, akan ada tampilan contact yang menyatu dengan footer

### Contact language

      Todo:
    1.  ContactIndonesia.jsx
        - duplikat file contact kemudian modifikasi kedalam bahasa indonesia
    2.  Header.jsx
        - Reload the page to apply the new language
          ini sementara digunakan agar ketika language di ubah
          section contact dll yang lain ikut berubah
    3.  App.jsx
        - import dan pasang ContactIndonesia
        - pasang hooks for language
        - buat logic contact for language
    4.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - klik menu language/icon bendera
        - jika berhasil pada bagian contact akan mengikuti language yang dipilih
        - noted: sementara masih merefresh halaman untuk menganti language

### Form Contact language

      Todo:
    1.  FormContactIndonesia.jsx
        - duplikat file form contact kemudian modifikasi kedalam bahasa indonesia
    2.  Footer.jsx
        - import dan pasang FormContactIndonesia
        - pasang hooks for language
        - buat logic contact for language
    3.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - klik menu language/icon bendera
        - jika berhasil pada bagian form contact akan mengikuti language yang dipilih

### Hero language

      Todo:
    1.  HeroIndonesia.jsx
        - duplikat file Hero kemudian modifikasi kedalam bahasa indonesia
    2.  Hero.jsx
        - ubah bahasa kedalam bahasa ingris
    3.  App.jsx
        - import dan pasang HeroIndonesia
        - pasang logic language
        - pasang pada header setLanguage={setLanguage} ini untuk menghilangkan problems
    4.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - klik menu language/icon bendera
        - jika berhasil pada bagian Hero akan mengikuti language yang dipilih

### About Section

      Todo:
    1.  src/assets/img
        - siapkan 3 image
    2.  About.jsx
        - styling about
    3.  mengatur offset
        - NavEnglish.jsx
        - NavIndonseia.jsx
        - MobileNavEnglish.jsx
        - MobileNavIndonseia.jsx
    4.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - klik menu about
        - akan tampil halaman about

### About language indonesia - inggris

      Todo:
    1.  components/TentangKami.jsx
        - duplikasi file dari about kemudian modifikasi kedalam bahasa indonesia
    2.  About.jsx
        - modifikasi teks kedalam bahasa inggris
    3.  App.jsx
        - memasang logic language pada About & TentangKami
    4.  pengujian pada browser:
        - jalankan server: npm run dev
        - http://localhost:5173/
        - klik menu langue
        - akan tampil halaman About & TentangKami
