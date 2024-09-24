import { useEffect, useState } from "react"
import { Project as ProjectType } from "../types"
import { initProjectData } from "../lib"
import Grid from "../components/Grid"

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    console.clear()
    initProjectData().then((data) => {
      setProjects(data.data)
      console.log("AppProjects", data.data)
    })
  }, [])

  return (
    <>
      <h1>Projects</h1>
      <Grid projects={projects} />
    </>
  )
}
