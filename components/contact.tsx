"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Check } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Reset success state after a few seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Me Contacter
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête, une opportunité de collaboration ou simplement une question ? N'hésitez pas à m'écrire.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Restons en contact
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Je suis réactive par e-mail et sur les réseaux professionnels. Remplissez le formulaire ou utilisez l'un des canaux directs ci-dessous.
            </p>

            <div className="space-y-4">
              
              <div className="glass-card flex items-center gap-4 hover:border-primary/30 p-5!">
                <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30 flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground">E-mail Professionnel</h4>
                  <a href="mailto:ellaketsy24@gmail.com" className="text-foreground hover:text-primary font-bold transition-colors">
                    ellaketsy24@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card flex items-center gap-4 hover:border-primary/30 p-5!">
                <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30 flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground">Téléphone & WhatsApp</h4>
                  <a href="tel:+237690154088" className="text-foreground hover:text-primary font-bold transition-colors">
                    +237 690 154 088
                  </a>
                </div>
              </div>

              <div className="glass-card flex items-center gap-4 hover:border-primary/30 p-5!">
                <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-950/40 text-primary border border-orange-200/50 dark:border-orange-900/30 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground">Localisation</h4>
                  <p className="text-foreground font-bold">
                    Douala, Cameroun
                  </p>
                </div>
              </div>

            </div>

            {/* Social Circle Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/KetsiaAnnaelle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary/60 hover:bg-primary/15 hover:text-primary border border-border/50 text-foreground flex items-center justify-center transition-all duration-200 shadow-sm"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary/60 hover:bg-primary/15 hover:text-primary border border-border/50 text-foreground flex items-center justify-center transition-all duration-200 shadow-sm"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8! border border-border/60 shadow-xl relative">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Jean Dupont"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/80 focus:border-primary/50 text-foreground text-sm placeholder-muted-foreground outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                      Adresse E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: jean.dupont@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/80 focus:border-primary/50 text-foreground text-sm placeholder-muted-foreground outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                    Sujet du message
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ex: Demande de devis / Proposition de projet"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/80 focus:border-primary/50 text-foreground text-sm placeholder-muted-foreground outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Dites-moi en plus sur vos besoins..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/80 focus:border-primary/50 text-foreground text-sm placeholder-muted-foreground outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full py-3.5 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : submitted ? (
                    <>
                      <Check size={18} />
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>

              {/* Inline Success Toast */}
              {submitted && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-950/40 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-900/30 rounded-xl text-center text-xs font-semibold animate-fade-in-up">
                  Merci ! Votre message a été simulé avec succès. Je vous répondrai dans les plus brefs délais.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
