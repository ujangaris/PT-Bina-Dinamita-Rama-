import { useState } from "react";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ContactIndonesia } from "./components/ContactIndonesia";
import { HeroIndonesia } from "./components/HeroIndonesia";
import { TentangKami } from "./components/TentangKami";

function App() {
  // hooks for language
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "indonesia"
  );

  return (
    <>
      <main className="h-screen w-full  ">
        <Header setLanguage={setLanguage} />
        {language === "indonesia" ? <HeroIndonesia /> : <Hero />}

        {language === "indonesia" ? <TentangKami /> : <About />}
        <Blog />
        {language === "indonesia" ? <ContactIndonesia /> : <Contact />}
        {console.log(language)}
      </main>
    </>
  );
}

export default App;
