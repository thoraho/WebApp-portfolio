import { useState, useEffect } from "react"
import { H1Title, H2Title } from "./components/Titles"
import { initData, initProjects } from "./lib"
import Card from "./components/Card"
import Header from "./components/Header"
import Form from "./components/Form"
import MobileBar from "./components/MobileBar"

function App() {
  interface Project {
    projects?: Project[]
    description: string
    id: number
    title: string
    startDate: string
    endDate: string
    status: string
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
      <MobileBar />
      <section className="projects-section">
        {projects?.map((project) => {
          return (
            <article
              key={project.id}
              className={
                project.status === "active"
                  ? `active project-card`
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
