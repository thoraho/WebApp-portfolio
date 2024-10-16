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
      <div className="flex row align-centered gap2">
        <section className="flex col gap1">
          <h2>Prosjekter</h2>
          {projects.length === 0 ? (
            <>
              <span>Ingen prosjekter funnet</span>
            </>
          ) : (
            <>
              <span>
                {projects.length === 1
                  ? projects.length + " Prosjekt"
                  : projects.length + " Prosjekter"}
              </span>
              <section className="projects-section flex justify-around wrap gap2">
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
        </section>
        <section>
          <CreateProject projects={projects} addProject={addProject} />
        </section>
      </div>
    </>
  )
}
