import { Project as ProjectType } from "../types"
import Card from "./Card"

type GridProps = {
  projects: ProjectType[]
}

export default function Grid({ projects }: GridProps) {
  return (
    <>
      <section className="projects-section">
        {projects?.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            projectOwner={project.projectOwner}
            start_date={project.start_date}
            end_date={project.end_date}
            title={project.title}
            description={project.description}
            status={project.status}
          />
        ))}
      </section>
    </>
  )
}
