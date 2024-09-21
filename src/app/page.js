import Image from "next/image";
import styles from "./page.module.css";

/*** Components ***/
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Socials from "./components/sections/Socials";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div id="react-portfolio-page">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Socials />
      <Footer />
    </div>
  );
}
