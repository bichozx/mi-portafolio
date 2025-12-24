import { AnimatePresence, motion as Motion } from "framer-motion";

import ThemeToggle from "../ui/ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-black/20"
    >
      {/* ===== WRAPPER FULL WIDTH ===== */}
      <div className="w-full">
        {/* ===== CONTAINER DE CONTENIDO ===== */}
        <div className=" mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-indigo-400 font-semibold text-lg"
          >
            KmiloSolution
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-200">
            <a href="#projects" className="hover:text-indigo-400 transition">
              Proyectos
            </a>
            <a href="#certificates" className="hover:text-indigo-400 transition">
              Certificados
            </a>
            <a href="#about" className="hover:text-indigo-400 transition">
              Sobre mí
            </a>
            <a href="#contact" className="hover:text-indigo-400 transition">
              Contacto
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-gray-200 text-2xl"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <Motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-4 space-y-4 text-gray-200">
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="block hover:text-indigo-400"
              >
                Proyectos
              </a>
              <a
                href="#certificates"
                onClick={() => setIsOpen(false)}
                className="block hover:text-indigo-400"
              >
                Certificados
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block hover:text-indigo-400"
              >
                Sobre mí
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block hover:text-indigo-400"
              >
                Contacto
              </a>

              <ThemeToggle />
            </div>
          </Motion.nav>
        )}
      </AnimatePresence>
    </Motion.header>
  );
}
