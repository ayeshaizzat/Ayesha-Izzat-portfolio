import { useMemo } from 'react'
import type { CSSProperties } from 'react'

function Flower() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="12" cy="6.5" rx="3.4" ry="5" fill="currentColor" transform={`rotate(${a} 12 12)`} />
      ))}
      <circle cx="12" cy="12" r="2.2" fill="#c33a85" />
    </svg>
  )
}

export default function FallingFlowers({ count = 16 }: { count?: number }) {
  const flowers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 14,
        duration: 9 + Math.random() * 8,
        delay: -Math.random() * 14, // negative: card pehle hi phoolon se bhara hota hai
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.5 + Math.random() * 0.4,
      })),
    [count],
  )

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {flowers.map((f) => (
        <span
          key={f.id}
          className="flower absolute text-white"
          style={
            {
              left: `${f.left}%`,
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              animationDuration: `${f.duration}s`,
              animationDelay: `${f.delay}s`,
              '--drift': `${f.drift}px`,
            } as CSSProperties
          }
        >
          <Flower />
        </span>
      ))}
    </div>
  )
}