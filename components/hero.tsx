"use client"

import { useEffect, useState } from "react"
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden bg-background">
      {/* Background grids and glowing mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-25 grid-bg-light dark:grid-bg-dark" />
      
      {/* Glowing abstract blobs in background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-orange-500/30 to-amber-500/20 blur-[90px] pointer-events-none animate-pulse-ring" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-600/20 to-orange-600/30 blur-[110px] pointer-events-none animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-100/80 dark:bg-orange-950/40 rounded-full border border-orange-200/50 dark:border-orange-900/30">
              <span className="w-2.5 h-2.5 bg-orange-600 rounded-full animate-ping"></span>
              <span className="text-sm font-semibold text-orange-800 dark:text-orange-300">
                Disponible pour de nouveaux défis
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.15]">
              Développeuse Web <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-600 to-orange-700 bg-clip-text text-transparent">
                Fullstack & Innovatrice
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Étudiante en 3e année à l'École Polytechnique de Douala. Je traduis des idées complexes en applications web modernes, robustes et hautement optimisées. Spécialisée dans l'écosystème React, Laravel et DevOps AWS.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3.5 bg-primary hover:bg-orange-600 dark:hover:bg-orange-500 text-white rounded-2xl flex items-center justify-center gap-2 font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Découvrir mes projets
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3.5 bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 rounded-2xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText size={18} />
                Visualiser mon CV
              </button>
            </div>

            {/* Quick social links */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-sm text-muted-foreground font-medium mr-2">Suivez-moi :</span>
              <a
                href="https://github.com/KetsiaAnnaelle"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-secondary/60 hover:bg-primary/10 hover:text-primary border border-border/50 text-muted-foreground transition-all duration-200"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-secondary/60 hover:bg-primary/10 hover:text-primary border border-border/50 text-muted-foreground transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:ellaketsy24@gmail.com"
                className="p-2.5 rounded-xl bg-secondary/60 hover:bg-primary/10 hover:text-primary border border-border/50 text-muted-foreground transition-all duration-200"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Key stats cards */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-border/40 max-w-lg">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-primary">8+</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">Projets Web</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-primary">3</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">Ans d'Expérience</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-primary">3+</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">Techs Maîtrisées</p>
              </div>
            </div>
          </div>

          {/* Portrait Container */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer pulsing ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-orange-500/20 dark:border-orange-500/10 opacity-75 animate-pulse-ring" />
              
              {/* Inner floating ring */}
              <div className="absolute -inset-2 rounded-full border border-orange-500/30 dark:border-orange-500/25 animate-float-medium" />
              
              {/* Blob background for profile image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-600 shadow-2xl rounded-full opacity-10 dark:opacity-20 animate-morph" />
              
              {/* Image Frame */}
              <div className="absolute inset-4 rounded-full bg-secondary overflow-hidden border border-border/60 shadow-xl flex items-center justify-center group">
                <img
                  src="/IMG PORTFOLIO/Img-Me.jpg"
                  alt="Ketsia Annaelle"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to SVG if JPG fails
                    e.currentTarget.src = "/IMG PORTFOLIO/Img-Me.svg"
                  }}
                />
              </div>

              {/* Float badge */}
              <div className="absolute bottom-6 right-2 sm:right-6 glass-panel py-2.5 px-4 rounded-2xl shadow-lg border border-border/60 flex items-center gap-2 animate-float-slow">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-foreground">Disponible Freelance</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
