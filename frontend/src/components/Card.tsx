import { Link } from "react-router-dom"
import { H2Title, H3Title } from "./Titles"
import { Project as ProjectType } from "../types"

export default function Card(projects: ProjectType) {
  const {
    projectOwner = "Some company",
    title = "Some project title",
    description = "This is the project description",
    start_date = "01.01.2021",
    end_date = "31.01.2021",
    status = "planned",
  } = projects

  return (
    <>
      <article className="project-card">
        <span className={`status ${status.toLowerCase()}`}>
          {status.toUpperCase()}
        </span>
        <div>
          <H3Title text={projectOwner} />
          <H2Title text={title} />
          <p className="date">{`${start_date} - ${end_date}`}</p>
        </div>
        <p className="project-description">{description}</p>

        <Link
          className="project-link"
          to={`/projects/${title.toLowerCase().split(" ").join("-")}`}
        >
          View Project
        </Link>
      </article>
    </>
  )
}
