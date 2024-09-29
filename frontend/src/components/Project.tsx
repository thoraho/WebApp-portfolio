import { ProjectProps } from "../types"

export default function Project(props: ProjectProps) {
  const { id, title, description, owner, status, deleteProject } = props
  return (
    <>
      <article className={`card project`}>
        <section>
          <span className="project-owner">{owner}</span>
          <h2>{title}</h2>
          <p className="description">{description}</p>
        </section>
        <span className={`status ${status}`}>{status.toUpperCase()}</span>
        <button className="delete-btn" onClick={() => deleteProject(id)}>
          Slett
        </button>
      </article>
    </>
  )
}
