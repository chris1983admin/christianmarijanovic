"use client";
import { useState} from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Stack", href: "#stack" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800 shadow-lg transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Nombre con gradiente animado */}
        <h1 className="text-xl md:text-2xl font-extrabold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x tracking-tight">
          Christian Marijanovic
        </h1>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-8 text-sm md:text-base text-gray-300 font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group hover:text-white transition-all duration-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Menú Móvil */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <HiX className="w-6 h-6 text-white" />
            ) : (
              <HiMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-950/95 border-t border-gray-800 flex flex-col gap-4 px-6 py-4 text-gray-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Animación Gradient Tailwind */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </header>
  );
}