import { projects } from "../../infrastructure/data/projects.data";

/**
 * Caso de uso: obtener proyectos
 * Aquí podríamos añadir filtros, paginación o fetch a API.
 */
export function getProjects({ category = null } = {}) {
  if (!category) return projects;
  return projects.filter(p => p.categoria.toLowerCase().includes(category.toLowerCase()));
}
