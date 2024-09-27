import { useEffect, useState } from "react"
import { fetchProjects } from "./lib"
import Layout from "./components/Layout"
import { Route, Routes } from "react-router-dom"
import { ProjectProps } from "./types"
import ProjectsGrid from "./components/ProjectsGrid"
import ContactForm from "./components/ContactForm"

function App() {
  const [projects, setProjects] = useState<ProjectProps[]>([])

  useEffect(() => {
    console.log("Projects", projects)
  }, [projects])

  useEffect(() => {
    fetchProjects().then((data) => setProjects(data))
  }, [])

  const addProject = (project: Omit<ProjectProps, "id">) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { id: crypto.randomUUID(), ...project },
    ])
  }

  const deleteProject = (id: string) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    )
  }

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>PORTFOLIO</h1>} />
          <Route
            path="/projects"
            element={
              <ProjectsGrid
                projects={projects}
                deleteProject={deleteProject}
                addProject={addProject}
              />
            }
          />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
