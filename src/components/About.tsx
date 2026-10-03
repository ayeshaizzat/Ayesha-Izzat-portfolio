import { motion } from 'framer-motion'
import Section from './Section'
import Reveal from './Reveal'

type Tok = [string, string?]
const code: Tok[][] = [
  [['@app.get', 'text-blush'], ['("/ayesha")']],
  [['def ', 'text-blush'], ['about', 'text-pink-200'], ['():']],
  [['    return {']],
  [['        "role": '], ['"Backend developer"', 'text-pink-200'], [',']],
  [['        "stack": '], ['["Python", "FastAPI", "SQL"]', 'text-pink-200'], [',']],
  [['        "open_to": '], ['["internships", "freelance"]', 'text-pink-200'], [',']],
  [['        "based_in": '], ['"Karachi"', 'text-pink-200']],
  [['    }']],
]

const list = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } }
const row = { hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Backend-first, AI-curious.">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal className="space-y-6">
          <p className="text-lg leading-relaxed opacity-85">
  I enjoy the part of software nobody sees: data models, endpoints, and the logic that makes an app actually
  work. That's where I'm happiest, and where I'm putting most of my effort.
</p>
<p className="leading-relaxed opacity-75">
  I'm upfront about how I work: I use AI tools to speed up frontends and design, and I'm learning prompt
  engineering so I can use them well and build AI features of my own.
</p>
          <div className="inline-flex items-center gap-3 rounded-full border border-blush/60 bg-blush/15 px-5 py-2.5 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blush opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blush" />
            </span>
            Open to internships & freelance
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ y: -6, rotate: -0.6 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="overflow-hidden rounded-2xl bg-plum shadow-xl shadow-blush/30 dark:border dark:border-blush/20 dark:bg-black/30"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-blush" />
              <span className="h-3 w-3 rounded-full bg-pink-200/70" />
              <span className="h-3 w-3 rounded-full bg-pink-100/40" />
              <span className="ml-3 text-xs text-cream/50">main.py</span>
            </div>
            <motion.pre
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="overflow-x-auto p-6 font-mono text-[13px] leading-7"
            >
              {code.map((line, i) => (
                <motion.div key={i} variants={row} className="whitespace-pre">
                  {line.map(([text, color], j) => (
                    <span key={j} className={color ?? 'text-cream/80'}>{text}</span>
                  ))}
                </motion.div>
              ))}
            </motion.pre>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  )
}