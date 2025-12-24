import ProjectCard from "../components/cards/ProjectCards";
import { getProjects } from "../../app/projects/getProjects";

export default function Projects() {
  const projects = getProjects();

  return (
    <section id="projects" className="w-full py-20 px-6">
      {/* Header centrado */}
      <div className="container px-6 mb-10">
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <p className="text-muted mt-2 max-w-xl">
          Algunos de los proyectos en los que he trabajado usando React,
          JavaScript y backend.
        </p>
      </div>

      {/* Grid FULL WIDTH */}
      <div className="px-6 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
