import { themeChange } from "theme-change";
import { useEffect } from "react";

import "./App.css";
import "./index.css";

import SolidBackground from "./components/SolidBackground";
import StarryBackground from "./components/StarryBackground";
import Blackhole from "./components/Blackhole";

import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbarr from "./components/Navbarr";
// import Contact from "./pages/Contact";

function App() {
  /*Initialize under useEffect */

  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <Blackhole />
      <StarryBackground />
      <SolidBackground />

      <Navbarr />
      <main>
        <div className="flex flex-col gap-20">
          <section id="home">{<Homepage />}</section>
          <section id="about">{<About />}</section>
          <section id="projects">{<Projects />}</section>
          {/* <section id="contact">{<Contact />}</section> */}
        </div>
      </main>
    </>
  );
}

export default App;
