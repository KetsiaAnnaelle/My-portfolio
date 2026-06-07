"use client"

import { useEffect, useState } from "react"
import { MapPin, Mail, Phone, Heart, GraduationCap } from "lucide-react"

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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            À Propos de Moi
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Professional Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Je suis <span className="text-primary">Ketsia Annaelle MATCHAN ELLA</span>, développeuse passionnée et rigoureuse.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Actuellement étudiante en 3e année de Cycle d'Ingénieur en Génie Logiciel à l'École Polytechnique de Douala, j'allie rigueur théorique et expertise pratique pour concevoir des applications web de haute facture.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon parcours m'a permis d'acquérir une solide expérience sur toute la chaîne de valeur d'un projet numérique : du design d'interfaces utilisateur à la conception d'architectures backend sécurisées, jusqu'au déploiement et à l'automatisation cloud (DevOps AWS).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Curieuse par nature et déterminée, j'accorde une importance capitale à l'écriture d'un code propre, documenté et performant qui répond fidèlement aux exigences métiers et aux attentes des utilisateurs.
            </p>
          </div>

          {/* Quick Info Dashboard */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="glass-card hover:border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30">
                  <MapPin size={20} />
                </div>
                <h4 className="text-base font-bold text-foreground">Localisation</h4>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Kotto-Bangue, Douala, Cameroun
              </p>
            </div>

            <div className="glass-card hover:border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-base font-bold text-foreground">Formation</h4>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Génie Logiciel (Cycle Ingénieur 4e année)<br />
                École Nationale Supérieure Polytechnique de Douala (ENSPD)
              </p>
            </div>

            <div className="glass-card hover:border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30">
                  <Mail size={20} />
                </div>
                <h4 className="text-base font-bold text-foreground">Contacts</h4>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                ellaketsy24@gmail.com<br />
                +237 690 154 088
              </p>
            </div>

            <div className="glass-card hover:border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30">
                  <Heart size={20} />
                </div>
                <h4 className="text-base font-bold text-foreground">Centres d'intérêt</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["E-commerce", "Technologies Cloud", "Lecture", "Réseaux Sociaux"].map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-0.5 bg-orange-50 dark:bg-orange-950/30 text-primary text-xs font-semibold rounded-full border border-orange-100 dark:border-orange-900/20"
                  >
                    {interest}
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
