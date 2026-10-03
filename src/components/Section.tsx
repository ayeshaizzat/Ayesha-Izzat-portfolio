import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = { id: string; eyebrow: string; title: string; children: ReactNode }

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 scroll-mt-16">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-plum/60 dark:text-blush">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}
