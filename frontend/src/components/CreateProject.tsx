import { useState } from "react"
import { ProjectProps } from "../types"

type FormProps = {
  projects: ProjectProps[]
  addProject: (project: Omit<ProjectProps, "id">) => void
}

export default function CreateProject(props: FormProps) {
  const { projects, addProject } = props

  const [newProject, setNewProject] = useState({})

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setNewProject((prevProject) => ({
      ...prevProject,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addProject(newProject as Omit<ProjectProps, "id">)
    console.log(projects)
  }

  return (
    <section className="add-project-form">
      <form onSubmit={handleSubmit}>
        <h2>Nytt prosjekt</h2>
        <label htmlFor="title">Tittel</label>
        <input
          required
          onChange={handleChange}
          type="text"
          id="title"
          name="title"
        />
        <label htmlFor="description">Beskrivelse</label>
        <textarea
          id="description"
          onChange={handleChange}
          name="description"
        ></textarea>
        <label htmlFor="owner">Projekteier</label>
        <input type="text" onChange={handleChange} id="owner" name="owner" />
        <label htmlFor="status">Status</label>
        <select
          required
          name="status"
          defaultValue=""
          onChange={handleChange}
          id="status"
        >
          <option value="" disabled>
            Select
          </option>
          <option value="planned">Planned</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Legg til prosjekt</button>
      </form>
    </section>
  )
}
