import { motion as Motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#111111] border border-transparent hover:border-indigo-500 transition p-6 rounded-2xl"
    >
      <h3 className="text-xl font-semibold text-white mb-1">{project.nombre}</h3>
      <p className="text-sm text-gray-400 mb-3">{project.tecnologia}</p>
      {project.descripcion && <p className="text-gray-300 mb-4 text-sm">{project.descripcion}</p>}
      <div className="flex items-center gap-4">
        <a target="_blank" rel="noreferrer" href={project.url} className="text-indigo-400 hover:underline">Ver demo</a>
        {project.Git && <a target="_blank" rel="noreferrer" href={project.Git} className="text-indigo-400 hover:underline">GitHub</a>}
      </div>
    </Motion.article>
  );
}
