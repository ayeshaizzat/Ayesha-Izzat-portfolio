import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Ayesha. Built with React, TypeScript & Tailwind.
      </footer>
    </>
  )
}
