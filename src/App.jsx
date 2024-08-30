import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import SecondHero from "./components/secondhero";
import ParallaxSection from "./components/Parallex";
import Block from "./components/Block";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <SecondHero />
      <Navbar />
      <Projects />
      <ParallaxSection />
      <Button />
      <About />
      <Footer />
      <Block />
    </main>
  );
}

export default App;
