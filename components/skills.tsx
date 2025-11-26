"use client"

import { useEffect, useState } from "react"
import { Code, Zap, Database, Cloud, Wrench, Target, BookOpen, Star } from "lucide-react"

const skills = [
  { name: "Frontend", icon: Code, techs: ["React", "NextJS", "TypeScript", "Tailwind", "HTML/CSS"] },
  { name: "Backend", icon: Zap, techs: ["Django", "Laravel", "Node.js", "PHP", "REST API"] },
  { name: "Database", icon: Database, techs: ["MySQL", "MongoDB", "Data Modeling"] },
  { name: "DevOps", icon: Cloud, techs: ["AWS", "Netlify", "Render", "Docker"] },
  { name: "Tools", icon: Wrench, techs: ["Git/GitHub", "VS Code", "Postman"] },
  { name: "Domains", icon: Target, techs: ["E-commerce", "Full-Stack", "Responsive Design"] },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const el = document.getElementById("skills")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
        <div className="w-20 h-1 bg-orange-600 rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <div
                key={i}
                className={`card-elevated transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="icon-circle mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-gradient">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={24} className="text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">French</p>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">English</p>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-gradient">
            <div className="flex items-center gap-3 mb-4">
              <Star size={24} className="text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900">Strengths</h3>
            </div>
            <ul className="space-y-2">
              {["Dynamic", "Hardworking", "Curious", "Determined", "Innovative"].map((attr, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  {attr}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
