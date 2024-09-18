export default function Form() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  return (
    <div id="formcontainer">
      <form method="post" id="projform">
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
        <input type="submit" value="Post project" />
      </form>
    </div>
  )
}
