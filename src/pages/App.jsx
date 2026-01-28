import React, { useEffect, useState } from "react";
import Content from "../layout/Content";
import Home from "./Home";
import AboutCollege from "./AboutCollege";
import Images from "./Images";
import Events from "./Events";
import Lenis from "@studio-freight/lenis/types";
import ContactUs from "./ContactUs";
import MouseEffect from "../components/MouseEffect";
import Notify from "../components/Notify";
const App = () => {
  const [hovered, setHovered] = useState(false);
  const handleHover = (setHovered) => ({
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  });
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <Content handleHover={handleHover(setHovered)}>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999] max-sm:hidden">
        <MouseEffect hover={hovered} />
      </div>
      <Home handleHover={handleHover(setHovered)} />
      <AboutCollege handleHover={handleHover(setHovered)} />
      <Images />
      <Events handleHover={handleHover(setHovered)} />
      <Notify handleHover={handleHover(setHovered)} />
      <ContactUs handleHover={handleHover(setHovered)} />
    </Content>
  );
};

export default App;
