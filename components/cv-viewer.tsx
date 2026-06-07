"use client"

import { useState } from "react"
import { FileText, Download, Briefcase, GraduationCap, Code, Compass, ArrowUpRight } from "lucide-react"

export default function CVViewer() {
  const [activeTab, setActiveTab] = useState<"interactive" | "pdf">("interactive")

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Curriculum Vitae
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consultez mon parcours académique et professionnel directement ci-dessous ou téléchargez la version PDF imprimable.
          </p>
        </div>

        {/* Tab Selection & Download Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-background/80 dark:bg-zinc-900/60 p-2 rounded-2xl border border-border/60 backdrop-blur-sm max-w-2xl mx-auto">
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("interactive")}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "interactive"
                  ? "bg-primary text-white shadow-md shadow-orange-500/15"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Compass size={16} />
              Version Interactive
            </button>
            <button
              onClick={() => setActiveTab("pdf")}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "pdf"
                  ? "bg-primary text-white shadow-md shadow-orange-500/15"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <FileText size={16} />
              Version PDF
            </button>
          </div>

          <a
            href="/cv-ketsia.pdf"
            download="CV_Ketsia_Annaelle_Ella.pdf"
            className="w-full sm:w-auto px-5 py-2.5 bg-secondary hover:bg-primary hover:text-white border border-border/80 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
          >
            <Download size={16} />
            Télécharger le PDF
          </a>
        </div>

        {/* CV Content Area */}
        <div className="glass-card shadow-xl overflow-hidden min-h-[500px]">
          {activeTab === "interactive" ? (
            <div className="animate-fade-in-up space-y-10">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-border/40">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                    Ketsia Annaelle MATCHAN ELLA
                  </h3>
                  <p className="text-primary font-bold text-lg mt-1">
                    Développeuse Web Fullstack & DevOps AWS
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Douala, Cameroun | +237 690 154 088 | ellaketsy24@gmail.com
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30 text-xs font-bold">
                    Ingénieure en formation (4e Année)
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-200/50 dark:border-green-900/30 text-xs font-bold">
                    Disponible Freelance / CDD
                  </span>
                </div>
              </div>

              {/* CV Body Grid */}
              <div className="grid md:grid-cols-12 gap-8">
                
                {/* Left Column (Experience & Education) */}
                <div className="md:col-span-8 space-y-8">
                  {/* Experience */}
                  <div>
                    <h4 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                      <Briefcase size={20} className="text-primary" />
                      Expériences Professionnelles
                    </h4>
                    <div className="space-y-6">
                      <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-200">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-primary font-bold tracking-wider">
                          JUILLET 2025 - OCTOBRE 2025
                        </span>
                        <h5 className="font-extrabold text-foreground mt-0.5">
                          Stagiaire DevOps AWS — Orange Digital Center
                        </h5>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          Gestion des services cloud Amazon Web Services (AWS). Hébergement de bases de données relationnelles (RDS), déploiement automatisé d'applications backend sur des instances EC2, et optimisation budgétaire des ressources cloud.
                        </p>
                      </div>

                      <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-200">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-primary font-bold tracking-wider">
                          JUILLET 2025
                        </span>
                        <h5 className="font-extrabold text-foreground mt-0.5">
                          Développeuse Web (Projet Mbineko) — Orange Digital Center
                        </h5>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          Conception et développement d'une application web complète (React & Django) pour la surveillance des forêts. Intégration de cartographie interactive 2D/3D et sécurisation des processus d'authentification.
                        </p>
                      </div>

                      <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-200">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-primary font-bold tracking-wider">
                          JANVIER 2025 - PRÉSENT
                        </span>
                        <h5 className="font-extrabold text-foreground mt-0.5">
                          Développeuse Web Freelance
                        </h5>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          Création d'applications web réactives sur mesure, personnalisation de portfolios, intégration fluide frontend/backend et optimisation continue de l'expérience utilisateur (UI/UX).
                        </p>
                      </div>

                      <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-200">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-primary font-bold tracking-wider">
                          JANVIER 2024 - MARS 2024
                        </span>
                        <h5 className="font-extrabold text-foreground mt-0.5">
                          Chef de Projet & Dev ERP — High Tech Vocational Training Center
                        </h5>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          Pilotage du développement d'un système ERP complet avec React et Laravel. Automatisation de la gestion des étudiants, du suivi des paiements, génération de rapports PDF dynamiques et tableau de bord administrateur.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                      <GraduationCap size={20} className="text-primary" />
                      Formation & Diplômes
                    </h4>
                    <div className="space-y-6">
                      <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-200">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-primary font-bold tracking-wider">
                          2023 - PRÉSENT
                        </span>
                        <h5 className="font-extrabold text-foreground mt-0.5">
                          Cycle d'Ingénieur en Génie Logiciel
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          École Polytechnique de Douala (3e année en cours)
                        </p>
                      </div>

                      <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-200">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-primary font-bold tracking-wider">
                          2021 - 2023
                        </span>
                        <h5 className="font-extrabold text-foreground mt-0.5">
                          Classe Préparatoire Scientifique (MPSI)
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          École Polytechnique de Douala
                        </p>
                      </div>

                      <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-200">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs text-primary font-bold tracking-wider">
                          2020 - 2021
                        </span>
                        <h5 className="font-extrabold text-foreground mt-0.5">
                          Baccalauréat Scientifique (Série C)
                        </h5>
                        <p className="text-muted-foreground text-sm">
                          Mention Bien | Mathématiques, Physique & Chimie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (Skills & Languages) */}
                <div className="md:col-span-4 space-y-8">
                  {/* Skills Grid */}
                  <div>
                    <h4 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                      <Code size={20} className="text-primary" />
                      Stack Technique
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-1">
                          <span>React / Next.js / TS</span>
                          <span className="text-primary">90%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: "90%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-1">
                          <span>Laravel (PHP)</span>
                          <span className="text-primary">85%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-1">
                          <span>Django (Python)</span>
                          <span className="text-primary">75%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: "75%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-1">
                          <span>AWS Cloud / DevOps</span>
                          <span className="text-primary">80%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: "80%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-1">
                          <span>Bases de données (SQL/NoSQL)</span>
                          <span className="text-primary">85%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h4 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                      <Compass size={20} className="text-primary" />
                      Langues
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between font-semibold">
                        <span className="text-muted-foreground">Français :</span>
                        <span className="text-primary">Langue maternelle</span>
                      </li>
                      <li className="flex justify-between font-semibold">
                        <span className="text-muted-foreground">Anglais :</span>
                        <span className="text-foreground">Courant (Technique)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Soft Skills */}
                  <div>
                    <h4 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                      <Compass size={20} className="text-primary" />
                      Atouts
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Autonomie", "Rigueur", "Résolution de problèmes", "Adaptabilité", "Curiosité", "Esprit d'équipe"].map((strength) => (
                        <span
                          key={strength}
                          className="px-3 py-1 bg-secondary text-foreground text-xs font-semibold rounded-lg border border-border/40"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            <div className="animate-fade-in-up h-full flex flex-col justify-between">
              
              {/* PDF Container with dynamic preview or fallback frame */}
              <div className="relative w-full h-[600px] bg-secondary/20 rounded-xl overflow-hidden border border-border/50">
                <object
                  data="/cv-ketsia.pdf"
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <FileText size={48} className="text-primary mb-4 animate-float-medium" />
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Aperçu PDF indisponible
                    </h4>
                    <p className="text-muted-foreground text-sm max-w-md mb-6">
                      Le navigateur ne supporte pas l'affichage direct du PDF ou le fichier est en cours de mise en ligne. Vous pouvez télécharger le document directement en cliquant sur le bouton ci-dessous.
                    </p>
                    <a
                      href="/cv-ketsia.pdf"
                      download="CV_Ketsia_Annaelle_Ella.pdf"
                      className="px-6 py-3 bg-primary hover:bg-orange-600 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-500/10"
                    >
                      <Download size={18} />
                      Télécharger le CV
                    </a>
                  </div>
                </object>
              </div>

              {/* Extra helper message */}
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground px-1">
                <span>Format standard A4 optimisé pour les systèmes ATS</span>
                <a
                  href="/cv-ketsia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors font-semibold"
                >
                  Ouvrir dans un nouvel onglet
                  <ArrowUpRight size={12} />
                </a>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  )
}
