"use client"

import { useEffect, useState } from "react"
import { Github, ExternalLink } from "lucide-react"

const projects = [

   {
    title: "Plastidta",
    desc: "Site vitrine d'une entreprise de plasturgie en France",
    tech: ["React", "Tailwindcss", "laravel"],
    github: "https://github.com/KetsiaAnnaelle/PLASTIDATA",
    live: "https://plastidata.fr", 
    src: "IMG PORTFOLIO/plastidta.png",
  },

  {
    title: "Tournoi de Douala",
    desc: "Application web de gestion de tournoi de football",
    tech: ["React", "Tailwindcss", "laravel", "Hostinger"],
    github: "https://github.com/KetsiaAnnaelle/Tournoi-de-Douala",
    live: "https://tournoidedouala.com", 
    src: "IMG PORTFOLIO/tournoi.PNG",
  },

  {
    title: "Project Manager",
    desc: "Application web de gestion de projet",
    tech: ["React", "Tailwindcss", "laravel"],
    github: "https://github.com/KetsiaAnnaelle/ProjectManager-ENSPD",
    live: "https://project-manager-enspdk.vercel.app/", 
    src: "IMG PORTFOLIO/project.PNG",
  },

   {
    title: "SurveillApp",
    desc: "Application web de gestion de surveillance dans l'universite IUGET à Douala. Permet de gérer les surveillances des salles de classe et de surveiller les etudiants",
    tech: ["React", "Tailwindcss", "laravel"],
    github: "https://github.com/KetsiaAnnaelle/SurveillApp-IUGET",
    live: "", 
    src: "IMG PORTFOLIO/surveillapp.PNG",
  },
  {
    title: "Le Goût D'AfriQ",
    desc: "Restaurant website - Kotto, Douala, Cameroon",
    tech: ["React", "Tailwindcss", "Vercel"],
    github: "https://github.com/KetsiaAnnaelle/Le-Gout-D-AfirQ",
    live: "https://le-gout-d-afriq.vercel.app/", 
    src: "IMG PORTFOLIO/legoutdafriq.PNG",
  },
  {
    title: "Mini Social",
    desc: "Social network connecting students, teachers & companies",
    tech: ["React", "Laravel", "MySQL"],
    github: "https://github.com/KetsiaAnnaelle/Mini-Social",
    live: "https://mini-social-ketsia.vercel.app/",
    src: "IMG PORTFOLIO/minisocial.PNG",
  },
  {
    title: "Mbineko",
    desc: "Forest surveillance web app with 2D/3D mapping",
    tech: ["React", "Django", "AWS", "Cartography"],
    github: "https://github.com/KetsiaAnnaelle/Mbineko-website",
    live: "https://mbineko.org",
    src: "IMG PORTFOLIO/mbineko.PNG",
  },
  {
    title: "ERP HTTVTC",
    desc: "Complete ERP system for training center",
    tech: ["React", "Laravel", "MySQL", "PDF"],
    github: "https://github.com/KetsiaAnnaelle/ErpHTVTCAdmin14",
    src: "IMG PORTFOLIO/erphttvtc.PNG",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const el = document.getElementById("projects")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
        <div className="w-20 h-1 bg-orange-600 rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`card-elevated transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img src={proj.src} className="text-6xl mb-4"/>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, j) => (
                  <span key={j} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-lg font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4 border-t border-gray-100">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition font-semibold"
                >
                  <Github size={18} /> Code
                </a>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition font-semibold"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
