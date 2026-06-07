"use client"

import { useEffect, useState } from "react"
import { Code, Zap, Database, Cloud, Wrench, Target, BookOpen, Star, Sparkles } from "lucide-react"

const skillCategories = [
  { 
    name: "Développement Frontend", 
    icon: Code, 
    techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "JavaScript (ES6+)"] 
  },
  { 
    name: "Architecture Backend", 
    icon: Zap, 
    techs: ["Laravel (PHP)", "Django (Python)", "Node.js (Express)", "REST APIs", "Authentication (JWT, OAuth)"] 
  },
  { 
    name: "Bases de Données", 
    icon: Database, 
    techs: ["MySQL", "PostgreSQL", "MongoDB", "Data Modeling", "Query Optimization"] 
  },
  { 
    name: "Cloud & DevOps", 
    icon: Cloud, 
    techs: ["Amazon Web Services (AWS)", "Docker", "Git / GitHub", "Vercel / Netlify", "CI/CD Foundations"] 
  },
  { 
    name: "Outils de Développement", 
    icon: Wrench, 
    techs: ["VS Code", "Postman / Insomnia", "AWS Management Console", "Linux Command Line"] 
  },
  { 
    name: "Méthodologies & Secteurs", 
    icon: Target, 
    techs: ["E-commerce", "Responsive Design", "Méthodes Agiles / Scrum", "Sécurité des API"] 
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    const el = document.getElementById("skills")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Mes Compétences
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un aperçu structuré de mon expertise technique, des outils que j'utilise au quotidien et des méthodologies que j'applique dans mes projets.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.name}
                className={`glass-card hover:border-primary/30 transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background text-muted-foreground text-xs font-semibold rounded-lg border border-border/50 hover:text-primary hover:border-primary/30 transition-colors duration-150"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Section: Languages & Strengths */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages Card */}
          <div
            className={`glass-card hover:border-primary/30 transition-all duration-700 delay-500 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30">
                <BookOpen size={22} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Langues maîtrisées</h3>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-foreground">Français</span>
                  <span className="text-primary">Langue Maternelle</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-foreground">Anglais</span>
                  <span className="text-muted-foreground">Intermédiaire (Technique & Professionnel)</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Strengths Card */}
          <div
            className={`glass-card hover:border-primary/30 transition-all duration-700 delay-600 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30">
                <Star size={22} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Valeurs & Atouts</h3>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Rigueur technique", desc: "Code propre et optimisé" },
                { label: "Grande autonomie", desc: "Recherche de solutions" },
                { label: "Forte curiosité", desc: "Veille techno continue" },
                { label: "Détermination", desc: "Résolution de bugs complexes" },
                { label: "Force de proposition", desc: "Sens de l'innovation" },
                { label: "Esprit d'équipe", desc: "Collaboration constructive" },
              ].map((strength) => (
                <li key={strength.label} className="flex gap-2.5 items-start">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/15 dark:bg-primary/20 text-primary flex items-center justify-center text-xs font-extrabold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{strength.label}</p>
                    <p className="text-[11px] text-muted-foreground">{strength.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
