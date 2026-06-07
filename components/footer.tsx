"use client"

import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary/20 border-t border-border/40 relative z-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/30">
          
          {/* Column 1: Info & Availability (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                Ketsia.
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-300 rounded-full border border-orange-200/50 dark:border-orange-900/40">
                Senior Freelance
              </span>
            </a>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Ingénieure en formation spécialisée en architectures web fullstack robustes et déploiement cloud (AWS). Conception d'applications performantes centrées sur l'utilisateur.
            </p>
            
            {/* Availability indicator */}
            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-foreground">
                Disponible pour CDI ou opportunités freelance
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "À Propos" },
                { href: "#skills", label: "Compétences" },
                { href: "#projects", label: "Projets" },
                { href: "#cv", label: "Curriculum Vitae" },
                { href: "#experience", label: "Parcours" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150 flex items-center gap-1 w-fit"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Connect (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">
              Me contacter
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:ellaketsy24@gmail.com" className="hover:text-primary transition-colors">
                  ellaketsy24@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+237690154088" className="hover:text-primary transition-colors">
                  +237 690 154 088
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Douala, Cameroun</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/KetsiaAnnaelle"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary/10 hover:text-primary border border-border/60 text-muted-foreground transition-all duration-150"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary/10 hover:text-primary border border-border/60 text-muted-foreground transition-all duration-150"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ketsia Annaelle MATCHAN ELLA. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-muted-foreground">
              Propulsé par Next.js & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-background hover:bg-primary hover:text-white rounded-xl border border-border/60 text-muted-foreground flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer group"
              title="Retour en haut"
            >
              <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
