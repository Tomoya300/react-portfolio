import { Outlet } from "react-router-dom"
import Home from "../components/Home"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Social from "../components/Social"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <div className="scroll-smooth">
      <Header />
      <main className="p-4">
        <Home />
        <Skills />
        <Projects />
        <Social />
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Layout