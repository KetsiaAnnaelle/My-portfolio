"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 border-t border-border/40 bg-secondary/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo and Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-base font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
            Ketsia Annaelle M. E.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Tous droits réservés. Conçu et développé par Ketsia.
          </p>
        </div>

        {/* Right Side: Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-background hover:bg-primary hover:text-white rounded-xl border border-border/60 text-muted-foreground flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer group"
          aria-label="Retour en haut"
        >
          <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  )
}
