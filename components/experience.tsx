"use client"

import { useEffect, useState } from "react"
import { Briefcase, Calendar, CheckCircle } from "lucide-react"

const experiences = [
  {
    title: "Développeuse Web Freelance",
    company: "Unicorn & Freelance",
    period: "Janv. 2025 - Présent",
    description: "Accompagnement de startups et d'entreprises dans leur transition numérique.",
    achievements: [
      "Conception et développement d'applications web réactives sur mesure (React + Laravel).",
      "Refonte d'interfaces pour maximiser la conversion et optimiser l'expérience utilisateur (UI/UX).",
      "Intégration d'API tierces sécurisées (paiement mobile, envois automatiques de mails/SMS).",
    ],
  },
  {
    title: "Stagiaire DevOps AWS",
    company: "Orange Digital Center (ODC)",
    period: "Juil. 2025 - Oct. 2025",
    description: "Optimisation de l'infrastructure cloud et mise en place de flux d'hébergement performants.",
    achievements: [
      "Configuration et gestion fine des services Amazon Web Services (EC2, RDS, Route53, S3).",
      "Automatisation du déploiement de backends avec gestion sécurisée des secrets et variables.",
      "Analyse de la consommation des ressources et préconisation d'optimisations budgétaires cloud.",
    ],
  },
  {
    title: "Développeuse Fullstack (Projet Mbineko)",
    company: "Orange Digital Center (ODC)",
    period: "Juil. 2025",
    description: "Développement d'une application web de surveillance forestière innovante.",
    achievements: [
      "Création de l'application de A à Z avec React pour le frontend et Django pour le backend.",
      "Intégration de modules cartographiques 2D/3D pour un rendu interactif précis du couvert forestier.",
      "Implémentation d'une authentification sécurisée basée sur les rôles (administrateurs, agents de terrain).",
    ],
  },
  {
    title: "Chef de Projet & Développeuse ERP",
    company: "High Tech Vocational Training Center (HTVTC)",
    period: "Janv. 2024 - Mars 2024",
    description: "Direction technique d'une équipe pour concevoir un système de gestion scolaire unifié.",
    achievements: [
      "Conception de l'architecture logicielle globale (React + Laravel + MySQL).",
      "Développement de modules clés : scolarité, comptabilité, génération de reçus de paiement en PDF.",
      "Conduite du changement et formation des équipes administratives à la prise en main de l'outil.",
    ],
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    const el = document.getElementById("experience")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Parcours Professionnel
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon évolution de carrière, mes rôles techniques majeurs et les réalisations concrètes que j'ai menées à bien.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-border/80 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={exp.title + exp.company}
              className={`relative pl-8 sm:pl-10 transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Timeline dot */}
              <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary shadow-sm text-primary">
                <Briefcase size={14} />
              </span>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 hover:border-primary/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-bold text-base">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-muted-foreground text-xs font-semibold rounded-lg border border-border/40 w-fit">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <p className="text-foreground/90 font-medium text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2.5">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="flex gap-2.5 items-start text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
