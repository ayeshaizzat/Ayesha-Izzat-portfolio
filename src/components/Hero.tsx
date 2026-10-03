import { motion } from 'framer-motion'
import { profile } from '../data'

const ease = [0.22, 1, 0.36, 1] as const
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-16 pt-28 md:grid-cols-2">
      <div>
        <motion.p {...rise(0.1)} className="text-xs uppercase tracking-[0.25em] text-plum/60 dark:text-blush">
          {profile.role}
        </motion.p>
        <motion.h1 {...rise(0.25)} className="mt-4 font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Hi, I'm {profile.name}.<br />
          <span className="text-plum/70 dark:text-blush">{profile.tagline}</span>
        </motion.h1>
        <motion.p {...rise(0.4)} className="mt-6 max-w-md text-base leading-relaxed opacity-80">
          {profile.intro}
        </motion.p>
        <motion.div {...rise(0.55)} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-plum px-6 py-3 text-sm font-medium text-cream transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-blush dark:text-plum">
            View my work
          </a>
          <a href="#contact" className="rounded-full border border-plum/30 px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-blush hover:bg-blush/20 dark:border-blush/40">
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease }}
        className="relative mx-auto w-full max-w-sm"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-b from-blush/70 via-blush/30 to-transparent"
        >
          <img src="/profile-hero.png" alt="Portrait of Ayesha" className="absolute inset-x-0 bottom-0 h-[96%] w-full object-contain object-bottom drop-shadow-xl" />
        </motion.div>
        <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-blush/40 blur-2xl" />
      </motion.div>
    </section>
  )
}
