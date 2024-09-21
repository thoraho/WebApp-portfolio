export default function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const projectName = (
      document.getElementById("projectname") as HTMLInputElement
    ).value
    const projectDesc = (
      document.getElementById("projectdesc") as HTMLTextAreaElement
    ).value
    const startDate = (document.getElementById("startdate") as HTMLInputElement)
      .value
    const endDate = (document.getElementById("enddate") as HTMLInputElement)
      .value
    const status = (document.getElementById("status") as HTMLSelectElement)
      .value

    const data = {
      id: crypto.randomUUID(),
      projectName,
      projectDesc,
      startDate,
      endDate,
      status,
    }

    console.log(data)
  }

  return (
    <div id="formcontainer">
      <form method="post" id="projform" onSubmit={handleSubmit}>
        <h2>Post a project</h2>
        <label htmlFor="projectname">
          Project Name:
          <input type="text" id="projectname" name="projectname" />
        </label>
        <label htmlFor="projectdesc">
          Project Description:
          <textarea id="projectdesc" name="projectdesc" />
        </label>
        <label htmlFor="startdate">
          Start Date:
          <input type="date" id="startdate" name="startdate" />
        </label>
        <label htmlFor="enddate">
          End Date:
          <input type="date" id="enddate" name="enddate" />
        </label>
        <label htmlFor="status">
          Status:
          <select id="status" name="status">
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
