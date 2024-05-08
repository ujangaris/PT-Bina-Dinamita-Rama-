import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <main className="h-screen w-full  ">
        <Header />
        <Hero />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
