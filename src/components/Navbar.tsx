import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-blush/30 bg-cream/70 backdrop-blur-md dark:bg-night/70"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-heading font-semibold tracking-tight">
          Ayesha<span className="text-blush">.</span>
        </a>
        <div className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hidden opacity-70 transition hover:opacity-100 sm:block">
              {l}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}
