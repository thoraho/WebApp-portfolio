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
      <form onSubmit={handleSubmit} className="card flex col align-start gap1">
        <h2>Nytt prosjekt</h2>
        <label htmlFor="title">
          Tittel
          <input
            required
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
          />
        </label>
        <label htmlFor="description">
          Beskrivelse
          <textarea
            id="description"
            onChange={handleChange}
            name="description"
          ></textarea>
        </label>
        <label htmlFor="owner">
          Projekteier
          <input type="text" onChange={handleChange} id="owner" name="owner" />
        </label>
        <label htmlFor="status">
          Status
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
        </label>
        <button type="submit">Legg til prosjekt</button>
      </form>
    </section>
  )
}
