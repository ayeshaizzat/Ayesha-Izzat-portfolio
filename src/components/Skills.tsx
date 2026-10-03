import Section from './Section'
import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="What I work with.">
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.1}>
            <div className="h-full rounded-3xl border border-blush/50 p-7 transition hover:border-blush hover:bg-blush/10">
              <h3 className="font-heading text-lg font-semibold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-full bg-blush/25 px-4 py-1.5 text-sm transition hover:bg-blush/60">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
