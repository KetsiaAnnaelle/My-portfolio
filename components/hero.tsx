"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Mail } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-200">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              <span className="text-sm font-semibold text-orange-700">Available for projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Fullstack Web Developer <span className="text-orange-600">& Innovator</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I transform ideas into elegant, powerful web solutions. With 2+ years of experience in React, Node.js, and
              modern architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              <a href="mailto:elaketsy24@gmail.com" className="btn-secondary flex items-center justify-center gap-2">
                <Mail size={18} />
                Get in touch
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-orange-600">4+</p>
                <p className="text-sm text-gray-600 font-medium">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600">2</p>
                <p className="text-sm text-gray-600 font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-600">12+</p>
                <p className="text-sm text-gray-600 font-medium">Technologies</p>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 shadow-2xl"
                style={{ animation: "glow 3s ease-in-out infinite" }}
              ></div>
              <div className="absolute inset-2 rounded-full bg-white overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <img src="IMG PORTFOLIO/Img-Me.svg" alt="me"  className="bg-cover h-full" />
                  {/* <div className="text-6xl">📸</div>
                  <p className="text-gray-400 font-semibold text-sm mt-2">Add your photo</p> */}
                </div>
              </div>
              <div className="absolute -inset-6 rounded-full border-2 border-orange-200 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
