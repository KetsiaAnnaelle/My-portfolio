"use client"

import { useEffect, useState } from "react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "DevOps AWS Intern",
    company: "Orange Digital Center",
    period: "Jul 2025 - Oct 2025",
    description: "AWS service management, RDS database hosting, EC2 backend deployment, budget optimization",
  },
  {
    title: "Web Developer (MBineko)",
    company: "Orange Digital Center",
    period: "Jul 2025",
    description: "Full-stack React + Django web app for forest surveillance with 2D/3D mapping and secure auth",
  },
  {
    title: "Freelance Web Developer",
    company: "Unicorn & Freelance",
    period: "Jan 2025 - Present",
    description: "Responsive web apps, portfolio personalization, front-end & back-end integration, UX/UI optimization",
  },
  {
    title: "ERP Developer & Project Lead",
    company: "HIGH TECH VOCATIONAL TRAINING CENTER",
    period: "Jan 2024 - Mar 2024",
    description:
      "Complete ERP system with React + Laravel for student management, payments, PDF generation, admin dashboard",
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const el = document.getElementById("experience")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
        <div className="w-20 h-1 bg-orange-600 rounded-full mb-12"></div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`card-elevated transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <Briefcase size={24} className="text-orange-600 flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
