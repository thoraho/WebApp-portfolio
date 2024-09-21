import { useState, useEffect } from "react"
import { initData } from "./lib"
import Card from "./components/Card"
import Header from "./components/Header"
import Form from "./components/Form"

function App() {
  interface Project {
    projects?: Project[]
    description: string
    id: number
    title: string
    startDate: string
    endDate: string
    status?: "planned" | "ongoing" | "completed"
  }

  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    console.clear()
    initData().then((data) => {
      setProjects(data)
    })
  }, [])

  return (
    <>
      <Header />
      <Form />
      <section className="projects-section">
        {projects?.map((project) => {
          return (
            <article
              key={project.id}
              className={
                project.status
                  ? `project-card ${project.status}`
                  : "project-card"
              }
            >
              <Card
                title={project.title}
                description={project.description}
                start_date={project.startDate}
                end_date={project.endDate}
                status={project.status}
              />
            </article>
          )
        })}
      </section>
    </>
  )
}

export default App
