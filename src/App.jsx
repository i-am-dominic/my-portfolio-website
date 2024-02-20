import "./app.css"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills"

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section id="skills"><Skills /></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio />
    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;