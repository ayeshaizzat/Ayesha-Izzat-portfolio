import { motion } from 'framer-motion'
import Section from './Section'
import Reveal from './Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Things I've built.">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex h-full flex-col rounded-3xl border border-blush/50 bg-white/60 p-7 shadow-sm backdrop-blur transition-shadow hover:shadow-xl hover:shadow-blush/30 dark:bg-white/5"
            >
              <span className="w-fit rounded-full bg-blush/40 px-3 py-1 text-xs font-medium text-plum dark:text-pink-100">
                {p.status}
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed opacity-80">{p.blurb}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-md border border-plum/15 px-2.5 py-1 text-xs opacity-80 dark:border-blush/30">
                    {s}
                  </li>
                ))}
              </ul>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-5 text-sm font-medium underline decoration-blush underline-offset-4">
                  View project →
                </a>
              )}
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
