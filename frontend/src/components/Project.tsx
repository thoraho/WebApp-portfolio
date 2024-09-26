import { ProjectProps } from "../types"

export default function Project(props: ProjectProps) {
  const { title, description, owner } = props
  return (
    <>
      <span>{owner}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>View Project</button>
    </>
  )
}
