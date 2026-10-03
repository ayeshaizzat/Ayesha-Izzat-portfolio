import Section from './Section'
import Reveal from './Reveal'
import FallingFlowers from './FallingFlowers'
import { profile } from '../data'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together.">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blush/60 to-blush/20 p-10 text-center sm:p-16 dark:from-blush/25 dark:to-blush/5">
          <FallingFlowers />
          <p className="relative mx-auto max-w-lg text-lg leading-relaxed">
            If you have a project, an internship, or just an idea in mind, I'd love to hear about it.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="relative mt-8 inline-block rounded-full bg-plum px-8 py-3.5 text-sm font-medium text-cream transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-blush dark:text-plum"
          >
            {profile.email}
          </a>
        </div>
      </Reveal>
    </Section>
  )
}