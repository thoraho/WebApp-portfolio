import { ProjectProps } from "../types"

export default function Project(props: ProjectProps) {
  const { id, title, description, owner, status, deleteProject } = props
  return (
    <>
      <article className={`card flex col gap1`}>
        <section>
          <span className="smallinfo greyed">{owner}</span>
          <h2>{title}</h2>
          <p className="description">{description}</p>
        </section>
        <span className={`status ${status}`}>{status.toUpperCase()}</span>
        <button className="delete" onClick={() => deleteProject(id)}>
          Slett
        </button>
      </article>
    </>
  )
}
