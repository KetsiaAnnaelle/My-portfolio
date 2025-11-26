"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-600">Ketsia</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition">
              About
            </a>
            <a href="#experience" className="text-gray-600 hover:text-orange-600 transition">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 hover:text-orange-600 transition">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-orange-600 transition">
              Skills
            </a>
            <a href="#contact" className="btn-primary">
              Contact
            </a>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#about" className="block text-gray-600 hover:text-orange-600 py-2">
              About
            </a>
            <a href="#experience" className="block text-gray-600 hover:text-orange-600 py-2">
              Experience
            </a>
            <a href="#projects" className="block text-gray-600 hover:text-orange-600 py-2">
              Projects
            </a>
            <a href="#skills" className="block text-gray-600 hover:text-orange-600 py-2">
              Skills
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
