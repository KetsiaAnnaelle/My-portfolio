"use client"

import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-orange-600 rounded-full mx-auto mb-12"></div>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Interested in working together? Let's connect! I'm always open to new opportunities and exciting projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="card-elevated">
            <Mail size={32} className="text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:elaketsy24@gmail.com" className="text-orange-600 hover:text-orange-700 transition">
              elaketsy24@gmail.com
            </a>
          </div>
          <div className="card-elevated">
            <Phone size={32} className="text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+237 690 154 088</p>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/KetsiaAnnaelle"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 text-gray-700 rounded-full hover:bg-orange-100 hover:text-orange-600 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 text-gray-700 rounded-full hover:bg-orange-100 hover:text-orange-600 transition"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
