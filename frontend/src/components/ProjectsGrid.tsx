import { ProjectProps } from "../types"
import CreateProject from "./CreateProject"
import Project from "./Project"

type ProjectsGridProps = {
  projects: ProjectProps[]
  addProject: (project: Omit<ProjectProps, "id">) => void
  deleteProject: (id: string) => void
}

export default function ProjectsGrid(props: ProjectsGridProps) {
  const { projects, addProject, deleteProject } = props
  return (
    <>
      <h1>Prosjekter ({projects.length})</h1>
      {projects.length === 0 ? (
        <>
          <h3>Ingen prosjekter funnet</h3>
        </>
      ) : (
        <>
          <h3>
            {projects.length === 1
              ? projects.length + " Prosjekt"
              : projects.length + " Prosjekter"}
          </h3>
          <section className="projects-section">
            {projects.map((project) => (
              <Project
                key={project.id}
                {...project}
                deleteProject={deleteProject}
              />
            ))}
          </section>
        </>
      )}
      <CreateProject projects={projects} addProject={addProject} />
    </>
  )
}
