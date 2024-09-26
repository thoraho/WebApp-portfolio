import Project from "./Project"

interface ProjectType {
  id: number
  title: string
  description: string
  owner: string
}

interface ProjectsProps {
  projects: ProjectType[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <section className="projects-section">
        {projects.map((project: ProjectType) => (
          <article key={project.id}>
            <Project
              title={project.title}
              id={project.id}
              description={project.description}
              owner={project.owner}
            />
          </article>
        ))}
      </section>
      <section className="add-project-form">
        <h2>Add a Project</h2>
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"></textarea>
          <label htmlFor="owner">Owner</label>
          <input type="text" id="owner" name="owner" />
          <button type="submit">Add Project</button>
        </form>
      </section>
    </>
  )
}
