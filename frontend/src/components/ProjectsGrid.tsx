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
      {projects.length === 0 ? (
        <>
          <h2>Projects</h2>
          <h3>No projects found</h3>
        </>
      ) : (
        <>
          <h2>Projects</h2>
          <h3>
            {projects.length === 1
              ? projects.length + " project"
              : projects.length + " projects"}
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
