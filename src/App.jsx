import { useState } from "react";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ContactIndonesia } from "./components/ContactIndonesia";

function App() {
  // hooks for language
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "english"
  );

  return (
    <>
      <main className="h-screen w-full  ">
        <Header />
        <Hero />
        <About />
        <Blog />
        {language === "english" ? <Contact /> : <ContactIndonesia />}
        {console.log(language)}
      </main>
    </>
  );
}

export default App;
