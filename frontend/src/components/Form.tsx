import { addProject } from "../lib"
import { useRef } from "react"

export default function Form() {
  const projectNameRef = useRef<HTMLInputElement>(null)
  const projectDescRef = useRef<HTMLTextAreaElement>(null)
  const startDateRef = useRef<HTMLInputElement>(null)
  const endDateRef = useRef<HTMLInputElement>(null)
  const statusRef = useRef<HTMLSelectElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const projectName = projectNameRef.current?.value || ""
    const projectDesc = projectDescRef.current?.value || ""
    const startDate = startDateRef.current?.value || ""
    const endDate = endDateRef.current?.value || ""
    const status =
      (statusRef.current?.value as "planned" | "ongoing" | "completed") ||
      "planned"

    const data = {
      id: crypto.randomUUID(),
      title: projectName,
      description: projectDesc,
      startDate,
      endDate,
      status,
    }

    // addProject(data)
    console.log(data)
  }

  return (
    <div id="formcontainer">
      <form method="post" id="projform" onSubmit={handleSubmit}>
        <h2>Post a project</h2>
        <label htmlFor="projectname">
          Project Name:
          <input
            type="text"
            id="projectname"
            name="projectname"
            ref={projectNameRef}
          />
        </label>
        <label htmlFor="projectdesc">
          Project Description:
          <textarea id="projectdesc" name="projectdesc" ref={projectDescRef} />
        </label>
        <label htmlFor="startdate">
          Start Date:
          <input
            type="date"
            id="startdate"
            name="startdate"
            ref={startDateRef}
          />
        </label>
        <label htmlFor="enddate">
          End Date:
          <input type="date" id="enddate" name="enddate" ref={endDateRef} />
        </label>
        <label htmlFor="status">
          Status:
          <select id="status" name="status" ref={statusRef}>
            <option value="planned">Planned</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
