"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "light" | "dark"

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark")
}

const getInitialTheme = (): Theme => {
  const stored = window.localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const ThemeSwitch = ({ className }: { className?: string }) => {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const initial = getInitialTheme()
    applyTheme(initial)
    setTheme(initial)
  }, [])

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark"
      applyTheme(next)
      window.localStorage.setItem("theme", next)
      return next
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={
        className ??
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-green-500/40 hover:text-green-500"
      }
    >
      {theme === null ? (
        <span className="h-4 w-4" />
      ) : theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  )
}

export default ThemeSwitch
