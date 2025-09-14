import { useEffect } from "react"
import About from "./components/about/About.jsx"
import Contact from "./components/contact/Contact.jsx"
import Home from "./components/home/Home.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import SocialIcons from "./components/navbar/SocialIcons.jsx"
import ScrollToTop from "./components/scroll-to-top/ScrollToTop.jsx"
import Skills from "./components/skills/Skills.jsx"
import Work from "./components/work/Work.jsx"

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {   
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        disable: 'mobile',
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    }
    initAOS();
  },[]);

  return (
    <div className="bg-[#335c67]">
      <Navbar />
      <SocialIcons />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <ScrollToTop />
    </div>
  )
}

export default App
