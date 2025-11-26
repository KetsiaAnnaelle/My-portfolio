"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, Heart } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    const el = document.getElementById("about")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-orange-600 rounded-full mb-12"></div>

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm <span className="font-semibold text-gray-900">Ketsia Annaelle MATCHAN ELLA</span>, a 21-year-old
              fullstack web developer and 3rd-year student at École Polytechnique de Douala. Passionate about solving
              technical challenges and building innovative digital solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With 2 years of hands-on experience, I've worked on complex projects spanning frontend, backend, and cloud
              infrastructure. I'm driven by curiosity and determined to create robust, user-friendly applications.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600">Kotto-Bangue, Douala, Cameroon</p>
            </div>

            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-3">
                <Phone size={20} className="text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              </div>
              <p className="text-gray-600">+237 690 154 088</p>
              <p className="text-gray-600">elaketsy24@gmail.com</p>
            </div>

            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-3">
                <Heart size={20} className="text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-900">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["E-commerce", "Reading", "Social media", "Tech"].map((i) => (
                  <span key={i} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
