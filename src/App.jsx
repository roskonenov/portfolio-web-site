import About from "./components/about/About.jsx"
import Contact from "./components/contact/Contact.jsx"
import Home from "./components/home/Home.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import SocialIcons from "./components/navbar/SocialIcons.jsx"
import Skills from "./components/skills/Skills.jsx"
import Work from "./components/work/Work.jsx"

function App() {

  return (
    <div className="bg-[#335c67]">
      <Navbar />
      <SocialIcons />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
