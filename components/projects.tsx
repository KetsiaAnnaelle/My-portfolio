"use client"

import { useEffect, useState } from "react"
import { Github, ExternalLink, Filter, FolderGit } from "lucide-react"

const projects = [
  {
    title: "Plastidata",
    desc: "Site vitrine institutionnel et catalogue produit d'une entreprise de plasturgie basée en France. Interface fluide, optimisée pour le SEO et le marketing de marque.",
    tech: ["React", "Tailwind CSS", "Laravel", "Hostinger"],
    category: "Fullstack",
    status: "Production",
    github: "https://github.com/KetsiaAnnaelle/PLASTIDATA",
    live: "https://plastidata.fr", 
    src: "/IMG PORTFOLIO/plastidta.PNG",
  },
  {
    title: "Tournoi de Douala",
    desc: "Application web de gestion et de suivi de tournois de football. Gestion des équipes, planification des matchs, scores en direct et déploiement cloud hébergé.",
    tech: ["React", "Tailwind CSS", "Laravel", "Hostinger"],
    category: "Fullstack",
    status: "Production",
    github: "https://github.com/KetsiaAnnaelle/Tournoi-de-Douala",
    live: "https://tournoidedouala.com", 
    src: "/IMG PORTFOLIO/tournoi.PNG",
  },
  {
    title: "SurveillApp",
    desc: "Application métier interne pour l'institut universitaire IUGET de Douala. Simplifie et automatise la gestion des surveillances d'examens, affectation des salles et impression de badges.",
    tech: ["React", "Tailwind CSS", "Laravel", "Database Design"],
    category: "Fullstack",
    status: "MVP",
    github: "https://github.com/KetsiaAnnaelle/SurveillApp-IUGET",
    live: "", 
    src: "/IMG PORTFOLIO/surveillapp.PNG",
  },
  {
    title: "Mbineko",
    desc: "Solution innovante de surveillance forestière intégrant une cartographie 2D/3D interactive pour lutter contre la déforestation. Hébergé sur AWS avec authentification sécurisée.",
    tech: ["React", "Django", "AWS", "Mapbox 3D"],
    category: "Cloud / DevOps",
    status: "MVP",
    github: "https://github.com/KetsiaAnnaelle/Mbineko-website",
    live: "https://mbineko.org",
    src: "/IMG PORTFOLIO/Mbineko.PNG",
  },
  {
    title: "Project Manager",
    desc: "Outil collaboratif de gestion de projet destiné aux étudiants de l'ENSPD. Création de tâches, attribution des rôles, diagramme de progression et suivi de jalons.",
    tech: ["React", "Tailwind CSS", "Laravel", "Vercel"],
    category: "Fullstack",
    status: "MVP",
    github: "https://github.com/KetsiaAnnaelle/ProjectManager-ENSPD",
    live: "https://project-manager-enspdk.vercel.app/", 
    src: "/IMG PORTFOLIO/project.PNG",
  },
  {
    title: "ERP HTTVTC",
    desc: "Système ERP intégré complet pour un centre de formation professionnelle. Gestion administrative globale, suivi de scolarité, encaissement de paiements et édition de PDF automatisés.",
    tech: ["React", "Laravel", "MySQL", "PDF Generator"],
    category: "Fullstack",
    status: "Production",
    github: "https://github.com/KetsiaAnnaelle/ErpHTVTCAdmin14",
    src: "/IMG PORTFOLIO/erphttvtc.PNG",
  },
  {
    title: "Le Goût D'AfriQ",
    desc: "Site vitrine interactif et carte numérique pour un restaurant africain moderne basé à Kotto, Douala. Intègre une galerie animée et une interface de réservation.",
    tech: ["React", "Tailwind CSS", "UX/UI", "Vercel"],
    category: "Frontend",
    status: "Production",
    github: "https://github.com/KetsiaAnnaelle/Le-Gout-D-AfirQ",
    live: "https://le-gout-d-afriq.vercel.app/", 
    src: "/IMG PORTFOLIO/legoutdafriq.PNG",
  },
  {
    title: "Mini Social",
    desc: "Réseau social universitaire facilitant l'entraide et les échanges professionnels entre étudiants, enseignants et recruteurs d'entreprises partenaires.",
    tech: ["React", "Laravel", "MySQL", "Realtime"],
    category: "Fullstack",
    status: "Production",
    github: "https://github.com/KetsiaAnnaelle/Mini-Social",
    live: "https://mini-social-ketsia.vercel.app/",
    src: "/IMG PORTFOLIO/MiniSocial.PNG",
  },
]

const categories = ["Tous", "Fullstack", "Frontend", "Cloud / DevOps"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    const el = document.getElementById("projects")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const filteredProjects = selectedCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Projets & Réalisations
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de projets sur lesquels j'ai travaillé, allant d'applications d'entreprise en production à des solutions cloud innovantes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md shadow-orange-500/10"
                  : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/40"
              }`}
            >
              {cat === "Tous" && <FolderGit size={14} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, i) => (
            <div
              key={proj.title}
              className={`glass-card flex flex-col justify-between overflow-hidden p-0! hover:border-primary/40 transition-all duration-500 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-secondary border-b border-border/40 group">
                <img
                  src={proj.src}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wide shadow-sm border ${
                    proj.status === "Production"
                      ? "bg-green-100 dark:bg-green-950/40 text-green-800 dark:text-green-300 border-green-200 dark:border-green-900/40"
                      : "bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-900/40"
                  }`}>
                    {proj.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                    {proj.desc}
                  </p>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-2 py-0.5 bg-secondary text-foreground/80 rounded-md border border-border/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex gap-4 pt-4 border-t border-border/40 w-full">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Github size={16} /> Code Source
                  </a>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200 ml-auto"
                    >
                      <ExternalLink size={16} /> Démo Live
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
