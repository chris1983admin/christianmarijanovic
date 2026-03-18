"use client";
import Image from "next/image";
import { FiCopy } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  github?: string;
  image?: string;
  stack?: string[];
};

export default function ProjectCard({
  title,
  description,
  link,
  github,
  image,
  stack = [],
}: ProjectCardProps) {
  const demoAccess: Record<string, { email: string; password: string }[]> = {
    "Sistema Gryn": [
      { email: "admin@gryn.com", password: "password" },
      { email: "reparto@gryn.com", password: "password" },
      { email: "despacho@gryn.com", password: "password" },
    ],
    "Trading Journal": [{ email: "prueba@premarket.com", password: "123456" }],
    "Vibraciones del Alma": [{ email: "demo@admin.com", password: "demo01" }],
  };

  const demoUsers = demoAccess[title] || [];

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden 
      hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 
      hover:shadow-xl hover:shadow-blue-900/20">

      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-gray-800 px-2 py-1 rounded border border-gray-700 hover:border-blue-500 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {demoUsers.length > 0 && (
          <div className="text-xs bg-gray-800 p-3 rounded mb-4">
            <p className="font-semibold mb-2">Accesos Demo</p>

            {demoUsers.map((user, i) => (
              <div
                key={i}
                className="mb-3 bg-gray-900/30 p-2 rounded flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <p className="truncate">Email: {user.email}</p>
                  <FiCopy
                    className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
                    size={18}
                    onClick={() => copy(user.email)}
                    title="Copiar email"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="truncate">Password: {user.password}</p>
                  <FiCopy
                    className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
                    size={18}
                    onClick={() => copy(user.password)}
                    title="Copiar password"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-500 transition shadow-lg shadow-blue-900/20"
          >
            Ver proyecto
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-4 py-2 rounded text-sm hover:border-gray-400 transition"
            >
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}