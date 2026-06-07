"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait for mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navLinks = [
    { href: "#about", label: "À Propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#cv", label: "Mon CV" },
    { href: "#experience", label: "Parcours" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel shadow-lg py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
               ELLA Ketsia.
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-300 rounded-full border border-orange-200 dark:border-orange-900/50">
                Dev Fullstack
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-secondary/80 text-foreground hover:text-primary hover:bg-secondary transition-all duration-200 border border-border/40"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <a
              href="#contact"
              className="px-5 py-2.5 bg-primary hover:bg-orange-600 dark:hover:bg-orange-500 text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 hover:-translate-y-0.5"
            >
              Me Contacter
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-secondary/80 text-foreground hover:text-primary hover:bg-secondary transition-colors border border-border/40"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-secondary/80 text-foreground hover:text-primary hover:bg-secondary transition-colors border border-border/40"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 p-4 rounded-2xl glass-card flex flex-col gap-3 animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-base font-medium rounded-xl hover:bg-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center w-full px-5 py-3 bg-primary hover:bg-orange-600 text-white rounded-xl text-base font-semibold transition-all shadow-md"
            >
              Me Contacter
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
