import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className="grid h-9 w-9 place-items-center rounded-full border border-blush/60 transition hover:bg-blush/30"
    >
      {dark ? '☀' : '☾'}
    </button>
  )
}