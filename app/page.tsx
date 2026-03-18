"use client";

import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">

      {/* Header Premium */}
      <Header />

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="text-center mb-32">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg animate-gradient-x tracking-tight">
            Frontend Developer
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Hola, soy Christian Marijanovic. Desarrollo aplicaciones web modernas utilizando React, Next.js y TypeScript.
            Especializado en dashboards, sistemas administrativos y herramientas SaaS conectadas a Firebase.
          </p>
        </section>

        {/* STACK */}
        <section id="stack" className="mb-32">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
            Stack
          </h2>
          <div className="flex flex-wrap gap-3 overflow-x-auto py-1">
            {["React", "Next.js", "TypeScript", "Firebase", "Firestore", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="shrink-0 bg-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="mb-32">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-white">
            Proyectos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Sistema Gryn"
              description="CRM para gestión de distribución de agua con control de clientes, repartos y pagos."
              link="https://sistema-gryn.vercel.app/"
              image="/projects/aguagry.jpeg"
              stack={["Next.js","TypeScript","Firebase"]}
            />

            <ProjectCard
              title="Trading Journal"
              description="Aplicación para planificación y análisis de trading pre-market con métricas de riesgo."
              link="https://journal-pre-market.vercel.app/"
              image="/projects/journal.jpeg"
              stack={["Next.js","TypeScript","Firebase"]}
            />

            <ProjectCard
              title="Vibraciones del Alma"
              description="Plataforma para gestión de pacientes, sesiones y contenido espiritual."
              link="https://vibracionesdelalma-5db50tfkp-chris1983admins-projects.vercel.app/"
              image="/projects/vibraciones.jpeg"
              stack={["Next.js","Firebase","Tailwind"]}
            />
          </div>
        </section>

      </main>

      {/* Footer Premium */}
      <footer className="border-t border-gray-800 mt-24 py-12 text-center text-gray-400 bg-gray-950/90 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <p className="text-lg md:text-xl font-medium">
            Disponible para proyectos freelance y trabajo remoto.
          </p>
          <p className="text-gray-300 font-semibold">
            Contacto:{" "}
            <a
              href="mailto:chrisdanielmarijanovic@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              chrisdanielmarijanovic@gmail.com
            </a>
          </p>
          <div className="mt-6 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Christian Marijanovic. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Gradient Animation para Hero */}
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

    </div>
  );
}