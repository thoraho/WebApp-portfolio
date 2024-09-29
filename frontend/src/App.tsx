import { useEffect, useState } from "react"
import { fetchProjects } from "./lib"
import Layout from "./components/Layout"
import { Route, Routes } from "react-router-dom"
import { ProjectProps } from "./types"
import ProjectsGrid from "./components/ProjectsGrid"
import ContactForm from "./components/ContactForm"
import Student from "./components/Student"

const initStudent = {
  name: "Thor Andreas Holberg Murtnes-Hatlestad",
  email: "thoraho@hiof.no",
  degree: "Computer Science",
  university: "Østfold University College",
  graduationYear: 2025,
}

function App() {
  const [student, setStudent] = useState(initStudent)
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
          <Route path="/" element={<Student student={student} />} />
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
          <Route path="/contact" element={<ContactForm student={student} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
